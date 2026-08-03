declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

let scriptPromise: Promise<void> | null = null;

function loadScript(siteKey: string): Promise<void> {
  if (window.grecaptcha) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Falha ao carregar o reCAPTCHA"));
    document.head.appendChild(script);
  });
  return scriptPromise;
}

/**
 * Gera um token de reCAPTCHA v3 para a ação informada. Sem
 * VITE_RECAPTCHA_SITE_KEY configurada, retorna undefined e o envio segue sem
 * o token (o servidor também pula a verificação até a chave secreta ser
 * configurada — ver src/lib/server/recaptcha.ts).
 */
export async function getRecaptchaToken(action: string): Promise<string | undefined> {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  if (!siteKey) return undefined;

  try {
    await loadScript(siteKey);
    return await new Promise<string>((resolve, reject) => {
      window.grecaptcha!.ready(() => {
        window
          .grecaptcha!.execute(siteKey, { action })
          .then(resolve)
          .catch(reject);
      });
    });
  } catch {
    return undefined;
  }
}
