import { getCookie, getRequestHeader, getRequestIP } from "@tanstack/react-start/server";

const GRAPH_API_VERSION = "v21.0";

type MetaEventName = "PageView" | "ViewContent" | "Lead";

export type MetaCapiEventInput = {
  eventName: MetaEventName;
  eventId: string;
  eventSourceUrl: string;
  userData?: Record<string, string | undefined>;
  customData?: Record<string, unknown>;
};

/**
 * Envia o evento para a Conversions API da Meta, usando o mesmo event_id do
 * pixel (fbq) disparado no navegador — a Meta deduplica automaticamente os
 * dois envios de um mesmo evento quando o event_id e o event_name coincidem.
 * https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events
 */
export async function sendMetaCapiEvent(input: MetaCapiEventInput): Promise<void> {
  const pixelId = import.meta.env.VITE_FACEBOOK_PIXEL_ID;
  const accessToken = process.env.FACEBOOK_CAPI_ACCESS_TOKEN;
  if (!pixelId || !accessToken) return;

  const body = {
    data: [
      {
        event_name: input.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: input.eventId,
        event_source_url: input.eventSourceUrl,
        action_source: "website",
        user_data: {
          fbp: getCookie("_fbp"),
          fbc: getCookie("_fbc"),
          client_ip_address: getRequestIP({ xForwardedFor: true }),
          client_user_agent: getRequestHeader("user-agent"),
          ...input.userData,
        },
        ...(input.customData ? { custom_data: input.customData } : {}),
      },
    ],
  };

  try {
    await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      },
    );
  } catch {
    // Falha ao notificar a CAPI não deve derrubar o fluxo principal (pageview/lead).
  }
}

/** SHA-256 em hexadecimal, normalizado (trim + minúsculo) como a Meta exige para user_data. */
export async function hashForMeta(value: string): Promise<string> {
  const { createHash } = await import("node:crypto");
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}
