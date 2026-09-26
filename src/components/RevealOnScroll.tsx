import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Direção/estilo da animação de entrada. Cada variante mapeia para uma classe
 * CSS em `styles.css` (`reveal-up`, `reveal-left`, ...).
 *
 * - up / down / left / right: desliza suavemente a partir da direção indicada
 * - scale: zoom sutil de 94% → 100%
 * - blur: desfoque + subida (ideal para títulos de sessão)
 * - line: "desenha" uma linha da esquerda para a direita
 * - fade: apenas opacidade
 */
export type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "blur" | "line" | "fade";

type Entry = { delay: number; once: boolean };

const observed = new Map<Element, Entry>();
let observer: IntersectionObserver | null = null;

/**
 * Um único IntersectionObserver compartilhado por todos os elementos.
 * A margem negativa cria uma "zona morta" nas bordas: o elemento entra
 * quando ~10% dele ultrapassa a borda inferior e sai quando cruza a borda
 * superior, dando a sensação de entrada e saída conforme o scroll.
 */
function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const el = e.target as HTMLElement;
        const opts = observed.get(el);
        if (!opts) continue;

        if (e.isIntersecting) {
          el.style.transitionDelay = `${opts.delay}ms`;
          el.classList.add("is-visible");
          if (opts.once) {
            observer?.unobserve(el);
            observed.delete(el);
          }
        } else if (el.classList.contains("is-visible")) {
          // Na saída não há atraso: o elemento some junto com o scroll.
          el.style.transitionDelay = "0ms";
          el.classList.remove("is-visible");
        }
      }
    },
    { threshold: 0, rootMargin: "-6% 0px -10% 0px" },
  );
  return observer;
}

export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  variant = "up",
  once = false,
  as: As = "div",
  style,
}: {
  children?: ReactNode;
  className?: string;
  /** Atraso (ms) aplicado somente na entrada. Útil para escalonar cards. */
  delay?: number;
  variant?: RevealVariant;
  /** Se true, anima apenas na primeira entrada e não some ao sair da tela. */
  once?: boolean;
  as?: "div" | "section" | "article" | "li" | "ul" | "span";
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("is-visible");
      return;
    }

    const io = getObserver();
    observed.set(el, { delay, once });
    io.observe(el);
    return () => {
      io.unobserve(el);
      observed.delete(el);
    };
  }, [delay, once]);

  return (
    // @ts-expect-error dynamic tag
    <As ref={ref} className={`reveal reveal-${variant} ${className}`} style={style}>
      {children}
    </As>
  );
}
