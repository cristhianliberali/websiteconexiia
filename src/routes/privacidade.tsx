import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { Markdown } from "@/components/Markdown";
import content from "@/content/legal/politica-de-privacidade.md?raw";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://lp.conexiia.com.br";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Conexi IA" },
      {
        name: "description",
        content: "Como a Conexi IA coleta, usa e protege dados pessoais, em conformidade com a LGPD e as Políticas da Meta.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacidade/` }],
  }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  return (
    <LegalPage>
      <Markdown source={content} />
    </LegalPage>
  );
}
