import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { generateEventId, trackPixelEvent } from "@/lib/meta-pixel";
import { getRecaptchaToken } from "@/lib/recaptcha";
import { submitDiagnosticoLead } from "@/lib/server-functions";

const SEGMENTOS = [
  "Clínica ou Consultório",
  "Educação e Cursos",
  "Advocacia e Serviços Jurídicos",
  "Contabilidade",
  "Agência de Marketing",
  "Consultoria",
  "Varejo e Lojas Físicas",
  "E-commerce e Vendas Online",
  "Alimentação e Food Service",
  "Moda e Beleza",
  "Imobiliárias e Construtoras",
  "Revenda de veículos",
  "Concessionária",
  "Turismo e Hotelaria",
  "Energia Solar",
  "Planos de Saúde e Seguros",
  "Indústria",
  "Tecnologia e Software",
  "Logística e Transportes",
  "Agronegócio",
  "Provedor de Internet",
  "Projetos Sob Medida (planejados, esquadrias, gesso, stands)",
  "Outro",
];

const ATENDENTES = [
  "Apenas 1",
  "2 a 3 atendentes",
  "4 a 10 atendentes",
  "11 a 20 atendentes",
  "21 ou mais",
];

const CARGOS = [
  "Sócio(a) ou Proprietário(a)",
  "Gerente Comercial",
  "Gerente de Marketing",
  "Coordenador(a) / Supervisor(a)",
  "Consultor(a) comercial",
  "Autônomo(a) / Profissional Liberal",
  "Outro",
];

function maskWhatsapp(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const TRACKING_STORAGE_KEY = "conexi:tracking";
const TRACKING_COOKIE_NAME = "conexi_tracking";
const TRACKING_COOKIE_MAX_AGE_DAYS = 180;
const EXTRA_TRACKING_KEYS = ["gclid", "fbclid", "ttclid", "msclkid", "ref", "referrer_id"];

function readTrackingCookie(): Record<string, string> {
  const match = document.cookie.match(new RegExp(`(?:^|; )${TRACKING_COOKIE_NAME}=([^;]*)`));
  if (!match) return {};
  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return {};
  }
}

function writeTrackingCookie(data: Record<string, string>) {
  const maxAge = TRACKING_COOKIE_MAX_AGE_DAYS * 24 * 60 * 60;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${TRACKING_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(data))}; max-age=${maxAge}; path=/; SameSite=Lax${secure}`;
}

// Usa localStorage (sem o limite de 7 dias que o Safari/iOS impõe a cookies
// escritos via JS) como fonte principal, com o cookie como reforço — assim a
// UTM sobrevive mesmo se o usuário fechar o navegador e voltar dias depois.
function readTracking(): Record<string, string> {
  if (typeof window === "undefined") return {};
  let stored: Record<string, string> = {};
  try {
    stored = JSON.parse(localStorage.getItem(TRACKING_STORAGE_KEY) || "{}");
  } catch {
    stored = {};
  }
  if (Object.keys(stored).length === 0) {
    stored = readTrackingCookie();
  }

  const fromUrl: Record<string, string> = {};
  const params = new URLSearchParams(window.location.search);
  params.forEach((value, key) => {
    const k = key.toLowerCase();
    if (k.startsWith("utm_") || EXTRA_TRACKING_KEYS.includes(k)) {
      if (value) fromUrl[k] = value;
    }
  });

  const merged = { ...stored, ...fromUrl };
  try {
    localStorage.setItem(TRACKING_STORAGE_KEY, JSON.stringify(merged));
  } catch {
    // storage indisponível — segue sem persistir
  }
  try {
    writeTrackingCookie(merged);
  } catch {
    // ignora
  }
  return merged;
}

const FALLBACK_ERRO =
  "Não foi possível enviar seus dados agora. Tente novamente em instantes.";

type WebhookResult = { ok: boolean; mensagem: string };

async function sendLead(
  payload: Record<string, unknown>,
  recaptchaAction: string,
  metaEventId: string,
  isFinalStep: boolean,
): Promise<WebhookResult> {
  try {
    const recaptcha_token = await getRecaptchaToken(recaptchaAction);
    const res = await submitDiagnosticoLead({
      data: { ...payload, recaptcha_token, meta_event_id: metaEventId, is_final_step: isFinalStep },
    });
    return {
      ok: res.status !== "erro",
      mensagem: res.mensagem_usuario || (res.status === "erro" ? FALLBACK_ERRO : ""),
    };
  } catch {
    return { ok: false, mensagem: FALLBACK_ERRO };
  }
}

export function DiagnosticoForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    empresa: "",
    segmento: "",
    atendentes: "",
    cargo: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [plano, setPlano] = useState<{ plano: string; preco: string } | null>(null);
  const [tracking, setTracking] = useState<Record<string, string>>({});
  const [leadEventId] = useState(() => generateEventId());

  useEffect(() => {
    setTracking(readTracking());
  }, []);

  useEffect(() => {
    function onPlano(ev: Event) {
      const detail = (ev as CustomEvent<{ plano: string; preco: string }>).detail;
      if (detail?.plano) {
        setPlano(detail);
        setStep(1);
      }
    }
    window.addEventListener("conexi:plano-selecionado", onPlano);
    return () => window.removeEventListener("conexi:plano-selecionado", onPlano);
  }, []);


  function set<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function validateStep1() {
    const e: Record<string, string> = {};
    if (form.nome.trim().length < 2) e.nome = "Informe seu nome.";
    const wDigits = form.whatsapp.replace(/\D/g, "");
    if (wDigits.length < 10 || wDigits.length > 11) e.whatsapp = "WhatsApp inválido.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateStep2() {
    const e: Record<string, string> = {};
    if (!form.segmento) e.segmento = "Selecione o segmento.";
    if (form.empresa.trim().length < 2) e.empresa = "Informe a empresa.";
    if (!form.atendentes) e.atendentes = "Selecione uma opção.";
    if (!form.cargo) e.cargo = "Selecione seu cargo.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (sending) return;
    setServerError("");

    const utms = { ...tracking, ...readTracking() };
    const contexto = {
      ...utms,
      utms,
      page_url: typeof window !== "undefined" ? window.location.href : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
    };

    if (step === 1) {
      if (!validateStep1()) return;
      setSending(true);
      const res = await sendLead(
        {
          etapa: 1,
          nome: form.nome.trim(),
          whatsapp: form.whatsapp,
          whatsapp_digits: form.whatsapp.replace(/\D/g, ""),
          plano: plano?.plano ?? "",
          preco: plano?.preco ?? "",
          enviado_em: new Date().toISOString(),
          ...contexto,
        },
        "lead_step1",
        leadEventId,
        false,
      );
      setSending(false);
      if (!res.ok) {
        setServerError(res.mensagem || FALLBACK_ERRO);
        return;
      }
      setErrors({});
      setStep(2);
      return;
    }

    if (!validateStep2()) return;
    setSending(true);
    const res = await sendLead(
      {
        etapa: 2,
        nome: form.nome.trim(),
        whatsapp: form.whatsapp,
        whatsapp_digits: form.whatsapp.replace(/\D/g, ""),
        empresa: form.empresa.trim(),
        segmento: form.segmento,
        atendentes: form.atendentes,
        cargo: form.cargo,
        plano: plano?.plano ?? "",
        preco: plano?.preco ?? "",
        enviado_em: new Date().toISOString(),
        ...contexto,
      },
      "lead_step2",
      leadEventId,
      true,
    );
    setSending(false);
    if (!res.ok) {
      setServerError(res.mensagem || FALLBACK_ERRO);
      return;
    }
    // Mesmo event_id usado na chamada CAPI (server) acima, para a Meta deduplicar.
    trackPixelEvent("Lead", leadEventId, { content_name: "Diagnóstico gratuito" });
    setSuccessMsg(res.mensagem);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-surface-dark-border bg-white/5 p-8 text-center backdrop-blur">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-primary/20 text-primary">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-surface-dark-foreground">Recebido!</h3>
        <p className="mt-3 text-surface-dark-muted">
          {successMsg ||
            "Em instantes você recebe uma mensagem no seu WhatsApp. Fique de olho: a velocidade da nossa resposta já é a primeira demonstração do produto."}
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-surface-dark-border bg-white/5 px-4 py-3 text-surface-dark-foreground placeholder:text-surface-dark-muted/70 outline-none transition focus:border-primary focus:bg-white/10";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-surface-dark-muted">
          Etapa {step} de 2
        </span>
        <div className="flex flex-1 gap-2">
          <span className="h-1 flex-1 rounded-full bg-primary" />
          <span
            className={`h-1 flex-1 rounded-full ${step === 2 ? "bg-primary" : "bg-white/15"}`}
          />
        </div>
      </div>

      {step === 1 && plano && (
        <div className="rounded-xl border border-primary/40 bg-primary/10 px-4 py-3">
          <span className="block text-xs font-semibold uppercase tracking-wide text-surface-dark-muted">
            Plano desejado
          </span>
          <span className="mt-0.5 block font-semibold text-surface-dark-foreground">
            {plano.plano} - {plano.preco}
          </span>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {step === 1 ? (
          <>

            <Field label="Nome" error={errors.nome}>
              <input
                type="text"
                value={form.nome}
                onChange={(e) => set("nome", e.target.value)}
                className={inputCls}
                placeholder="Seu nome"
                autoComplete="name"
              />
            </Field>
            <Field label="WhatsApp" error={errors.whatsapp}>
              <input
                type="tel"
                value={form.whatsapp}
                onChange={(e) => set("whatsapp", maskWhatsapp(e.target.value))}
                className={inputCls}
                placeholder="(11) 90000-0000"
                inputMode="tel"
                autoComplete="tel"
              />
            </Field>
          </>
        ) : (
          <>
            <Field label="Empresa" error={errors.empresa}>
              <input
                type="text"
                value={form.empresa}
                onChange={(e) => set("empresa", e.target.value)}
                className={inputCls}
                placeholder="Nome da empresa"
                autoComplete="organization"
              />
            </Field>
            <Field label="Quantos atendentes?" error={errors.atendentes}>
              <select
                value={form.atendentes}
                onChange={(e) => set("atendentes", e.target.value)}
                className={inputCls}
              >
                <option value="" className="bg-surface-dark">
                  Selecione
                </option>
                {ATENDENTES.map((s) => (
                  <option key={s} value={s} className="bg-surface-dark">
                    {s}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Qual é o seu cargo?" error={errors.cargo}>
              <select
                value={form.cargo}
                onChange={(e) => set("cargo", e.target.value)}
                className={inputCls}
              >
                <option value="" className="bg-surface-dark">
                  Selecione
                </option>
                {CARGOS.map((s) => (
                  <option key={s} value={s} className="bg-surface-dark">
                    {s}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Qual o segmento?" error={errors.segmento}>
              <select
                value={form.segmento}
                onChange={(e) => set("segmento", e.target.value)}
                className={inputCls}
              >
                <option value="" className="bg-surface-dark">
                  Selecione
                </option>
                {SEGMENTOS.map((s) => (
                  <option key={s} value={s} className="bg-surface-dark">
                    {s}
                  </option>
                ))}
              </select>
            </Field>
          </>
        )}
      </div>

      {serverError && (
        <div
          role="alert"
          className="mt-6 rounded-xl border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive"
        >
          {serverError}
        </div>
      )}

      <button type="submit" disabled={sending} className="btn-primary mt-8 w-full py-4 text-base disabled:opacity-60">
        {sending ? "Enviando..." : step === 1 ? "Continuar" : "Quero meu diagnóstico gratuito"}
      </button>
      <p className="text-center text-sm text-surface-dark-muted">
        Resposta em minutos, no horário que for. Afinal, é isso que vendemos. 😉
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-surface-dark-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
