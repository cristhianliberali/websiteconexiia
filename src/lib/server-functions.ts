import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { hashForMeta, sendMetaCapiEvent } from "./server/meta-capi";
import { verifyRecaptcha } from "./server/recaptcha";

const FALLBACK_ERRO = "Não foi possível enviar seus dados agora. Tente novamente em instantes.";

const trackEventSchema = z.object({
  event_name: z.enum(["PageView", "ViewContent"]),
  event_id: z.string().min(1).max(100),
  event_source_url: z.string().min(1).max(2000),
});

/** Espelha no servidor (via CAPI) um evento de pixel disparado no navegador, com o mesmo event_id para deduplicação. */
export const trackMetaEvent = createServerFn({ method: "POST" })
  .validator((data: unknown) => trackEventSchema.parse(data))
  .handler(async ({ data }) => {
    await sendMetaCapiEvent({
      eventName: data.event_name,
      eventId: data.event_id,
      eventSourceUrl: data.event_source_url,
    });
    return { ok: true };
  });

const submitLeadSchema = z
  .object({
    etapa: z.union([z.literal(1), z.literal(2)]),
    nome: z.string().min(1).max(200),
    whatsapp: z.string().min(1).max(30),
    whatsapp_digits: z.string().min(10).max(11),
    empresa: z.string().max(200).optional(),
    segmento: z.string().max(100).optional(),
    atendentes: z.string().max(50).optional(),
    plano: z.string().max(100).optional(),
    preco: z.string().max(100).optional(),
    enviado_em: z.string().max(50),
    page_url: z.string().max(2000),
    referrer: z.string().max(2000),
    utms: z.record(z.string().max(500)).optional(),
    recaptcha_token: z.string().max(4000).optional(),
    meta_event_id: z.string().min(1).max(100),
    is_final_step: z.boolean(),
  })
  .catchall(z.string().max(500));

/**
 * Recebe a submissão do formulário, valida o reCAPTCHA v3, dispara o evento
 * "Lead" na Conversions API (só na etapa final) e repassa os dados para o
 * webhook do n8n com o token de autenticação — tudo isso só pode rodar no
 * servidor, por isso o formulário não faz mais fetch direto para o n8n.
 */
export const submitDiagnosticoLead = createServerFn({ method: "POST" })
  .validator((data: unknown) => submitLeadSchema.parse(data))
  .handler(async ({ data }) => {
    const { recaptcha_token, meta_event_id, is_final_step, ...webhookPayload } = data;

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      const humano = await verifyRecaptcha(recaptcha_token, recaptchaSecret);
      if (!humano) {
        return {
          status: "erro",
          mensagem_usuario: "Não foi possível validar sua submissão. Recarregue a página e tente novamente.",
        };
      }
    }

    if (is_final_step) {
      const phoneHash = await hashForMeta(`55${data.whatsapp_digits}`);
      await sendMetaCapiEvent({
        eventName: "Lead",
        eventId: meta_event_id,
        eventSourceUrl: data.page_url,
        userData: { ph: phoneHash },
        customData: {
          content_name: "Diagnóstico gratuito",
          segmento: data.segmento,
          plano: data.plano,
        },
      });
    }

    const webhookUrl = process.env.WEBHOOK_URL;
    const webhookToken = process.env.WEBHOOK_TOKEN;
    if (!webhookUrl) {
      return { status: "erro", mensagem_usuario: FALLBACK_ERRO };
    }

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...(webhookToken ? { authorization: `Bearer ${webhookToken}` } : {}),
        },
        body: JSON.stringify(webhookPayload),
      });

      let parsed: { status?: string; mensagem_usuario?: string } = {};
      try {
        const raw = await res.text();
        parsed = raw ? JSON.parse(raw) : {};
      } catch {
        parsed = {};
      }

      const ok = res.ok && parsed.status !== "erro";
      return {
        status: ok ? "ok" : "erro",
        mensagem_usuario: parsed.mensagem_usuario ?? (ok ? "" : FALLBACK_ERRO),
      };
    } catch {
      return { status: "erro", mensagem_usuario: FALLBACK_ERRO };
    }
  });
