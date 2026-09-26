import { Check, CheckCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

/** Tempo (ms) que cada mensagem fica "na tela" antes da próxima começar. */
const READ_TIME: Record<Msg["from"], number> = { lead: 1100, ai: 1700 };
/** Duração do indicador "digitando…" antes de cada resposta da IA. */
const TYPING_TIME = 1300;
/** Pausa com a conversa completa antes de reiniciar o loop. */
const LOOP_PAUSE = 9000;

function TypingIndicator() {
  return (
    <div className="flex justify-end">
      <div className="msg-in flex items-center gap-1 rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3.5 py-2.5 shadow-sm">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-500/70"
            style={{ animationDelay: `${i * 160}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Mockup de conversa no WhatsApp. Quando entra na tela, as mensagens vão
 * aparecendo uma a uma (com "digitando…" antes das respostas da IA), como
 * um atendimento real. Ao terminar, faz uma pausa e recomeça.
 */
export function WhatsAppMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const [resetting, setResetting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(MESSAGES.length);
      return;
    }

    const timers: number[] = [];
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));

    const play = () => {
      setResetting(false);
      setShown(0);
      setTyping(false);

      let t = 500;
      MESSAGES.forEach((m, i) => {
        if (m.from === "ai") {
          at(t, () => setTyping(true));
          t += TYPING_TIME;
        }
        at(t, () => {
          setTyping(false);
          setShown(i + 1);
        });
        t += READ_TIME[m.from];
      });

      // Ao final: pausa, esmaece a conversa e recomeça.
      at(t + LOOP_PAUSE, () => setResetting(true));
      at(t + LOOP_PAUSE + 600, play);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        play();
      },
      { threshold: 0.35 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  const done = shown === MESSAGES.length;

  return (
    <div
      ref={ref}
      className="animate-float mx-auto w-full max-w-sm rounded-[2rem] border border-border bg-white p-3 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.25)]"
    >
      <div className="overflow-hidden rounded-[1.5rem] border border-border">
        {/* header */}
        <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground font-bold">
            C
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold">Conexi · Atendimento</p>
            <p className="flex items-center gap-1.5 truncate text-xs text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              {typing ? "digitando…" : "online agora"}
            </p>
          </div>
          <span className="rounded-full bg-primary/90 px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
            IA
          </span>
        </div>

        {/* chat body */}
        <div
          className={`flex h-[30rem] flex-col justify-end space-y-2 overflow-hidden px-3 py-4 transition-opacity duration-500 ${
            resetting ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundColor: "#ECE5DD",
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        >
          {MESSAGES.slice(0, shown).map((m, i) => (
            <div
              key={i}
              className={`msg-in flex ${m.from === "lead" ? "justify-start" : "justify-end"}`}
              style={{ transformOrigin: m.from === "lead" ? "bottom left" : "bottom right" }}
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

          {typing && <TypingIndicator />}

          {done && (
            <div className="msg-in flex justify-end" style={{ transformOrigin: "bottom right" }}>
              <div className="rounded-full bg-success/20 px-3 py-1 text-xs font-medium text-[#075E54]">
                ✓ Lead qualificado · agendado
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
