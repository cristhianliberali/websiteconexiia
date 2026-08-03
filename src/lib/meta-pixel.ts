declare global {
  interface Window {
    fbq?: {
      (...args: unknown[]): void;
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
      push?: unknown;
    };
    _fbq?: Window["fbq"];
  }
}

let initialized = false;

/** Injeta o Meta Pixel (fbevents.js) uma única vez. Sem VITE_FACEBOOK_PIXEL_ID configurada, não faz nada. */
export function initMetaPixel(): void {
  if (initialized) return;
  const pixelId = import.meta.env.VITE_FACEBOOK_PIXEL_ID;
  if (!pixelId) return;
  initialized = true;

  if (!window.fbq) {
    const fbq: NonNullable<Window["fbq"]> = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue!.push(args);
    };
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    window.fbq = fbq;
    window._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  window.fbq("init", pixelId);
}

export function generateEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `evt-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/** Dispara o evento no pixel do navegador com o eventID usado também na chamada CAPI correspondente, para deduplicação. */
/**
 * Dispara o evento no pixel do navegador com o eventID usado também na
 * chamada CAPI correspondente, para deduplicação. O servidor lê os cookies
 * _fbp/_fbc direto da requisição (mesma origem), não precisa repassá-los aqui.
 */
export function trackPixelEvent(
  eventName: "PageView" | "ViewContent" | "Lead",
  eventId: string,
  customData?: Record<string, unknown>,
): void {
  window.fbq?.("track", eventName, customData ?? {}, { eventID: eventId });
}
