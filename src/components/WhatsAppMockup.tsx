import { Check, CheckCheck } from "lucide-react";

type Msg = {
  from: "lead" | "ai";
  text: string;
  time: string;
};

const MESSAGES: Msg[] = [
  { from: "lead", text: "Oi, vi o anúncio de vocês. Ainda tem vaga pra avaliação?", time: "20:47" },
  {
    from: "ai",
    text: "Oi, Marina! Que bom que veio 💚 Ainda temos horários essa semana. Posso te passar as opções agora?",
    time: "20:47",
  },
  { from: "lead", text: "Pode sim. Prefiro no fim da tarde.", time: "20:48" },
  {
    from: "ai",
    text: "Perfeito! Tenho quinta 18h ou sexta 17h30, na unidade Vila Mariana. Qual fica melhor?",
    time: "20:48",
  },
  { from: "lead", text: "Sexta 17h30 👍", time: "20:49" },
  {
    from: "ai",
    text: "Reservado! Vou te mandar o endereço e um lembrete no dia. Qualquer coisa, é só responder por aqui.",
    time: "20:49",
  },
];

export function WhatsAppMockup() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-[2rem] border border-border bg-white p-3 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.25)]">
      <div className="overflow-hidden rounded-[1.5rem] border border-border">
        {/* header */}
        <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground font-bold">
            C
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold">Conexi · Atendimento</p>
            <p className="truncate text-xs text-white/80">online agora</p>
          </div>
          <span className="rounded-full bg-primary/90 px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
            IA
          </span>
        </div>

        {/* chat body */}
        <div
          className="space-y-2 px-3 py-4"
          style={{
            backgroundColor: "#ECE5DD",
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        >
          {MESSAGES.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.from === "lead" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                  m.from === "lead"
                    ? "rounded-tl-sm bg-white text-slate-800"
                    : "rounded-tr-sm bg-[#DCF8C6] text-slate-800"
                }`}
              >
                <p className="whitespace-pre-line leading-snug">{m.text}</p>
                <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-500">
                  <span>{m.time}</span>
                  {m.from === "ai" &&
                    (i === MESSAGES.length - 1 ? (
                      <CheckCheck className="h-3 w-3 text-sky-500" />
                    ) : (
                      <Check className="h-3 w-3" />
                    ))}
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-end">
            <div className="rounded-full bg-success/20 px-3 py-1 text-xs font-medium text-[#075E54]">
              ✓ Lead qualificado · agendado
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
