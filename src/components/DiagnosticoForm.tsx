import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

const WEBHOOK_URL = "https://n8n.scnet.com.br/webhook/conexiia/formulario-leads";

const SEGMENTOS = [
  "Provedor de internet",
  "Clínica ou consultório",
  "Clínica de estética",
  "Imobiliária",
  "Agência de viagens",
  "Revenda de veículos",
  "Loja e varejo",
  "Outro",
];

const ATENDENTES = ["1", "2 a 5", "6 a 15", "16 ou mais"];

function maskWhatsapp(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

async function sendWebhook(payload: Record<string, unknown>) {
  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // não bloqueia o usuário caso o webhook falhe
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
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (sending) return;

    if (step === 1) {
      if (!validateStep1()) return;
      setSending(true);
      await sendWebhook({
        etapa: 1,
        nome: form.nome.trim(),
        whatsapp: form.whatsapp,
        whatsapp_digits: form.whatsapp.replace(/\D/g, ""),
        enviado_em: new Date().toISOString(),
      });
      setSending(false);
      setErrors({});
      setStep(2);
      return;
    }

    if (!validateStep2()) return;
    setSending(true);
    await sendWebhook({
      etapa: 2,
      nome: form.nome.trim(),
      whatsapp: form.whatsapp,
      whatsapp_digits: form.whatsapp.replace(/\D/g, ""),
      empresa: form.empresa.trim(),
      segmento: form.segmento,
      atendentes: form.atendentes,
      enviado_em: new Date().toISOString(),
    });
    setSending(false);
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
          Em instantes você recebe uma mensagem no seu WhatsApp. Fique de olho: a velocidade da
          nossa resposta já é a primeira demonstração do produto.
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
            <Field label="Segmento" error={errors.segmento}>
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
            <Field label="Quantos atendentes você tem?" error={errors.atendentes}>
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
          </>
        )}
      </div>

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
