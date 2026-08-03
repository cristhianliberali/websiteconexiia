type SiteVerifyResponse = {
  success: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
};

const SCORE_THRESHOLD = 0.5;

/**
 * Verifica o token do reCAPTCHA v3 com o Google. Só é chamada quando
 * RECAPTCHA_SECRET_KEY está configurada — sem ela, a verificação é pulada
 * (ver src/lib/server/server-functions.ts) para não derrubar o formulário
 * antes da variável ser preenchida no Easypanel.
 */
export async function verifyRecaptcha(token: string | undefined, secret: string): Promise<boolean> {
  if (!token) return false;
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }).toString(),
    });
    const data = (await res.json()) as SiteVerifyResponse;
    return data.success && (data.score === undefined || data.score >= SCORE_THRESHOLD);
  } catch {
    return false;
  }
}
