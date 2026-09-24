import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { Markdown } from "@/components/Markdown";
import content from "@/content/legal/termos-de-uso.md?raw";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://lp.conexiia.com.br";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Conexi IA" },
      {
        name: "description",
        content: "Termos de uso da plataforma Conexi IA, de automação de conversas e atendimento com inteligência artificial.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/termos/` }],
  }),
  component: TermosPage,
});

function TermosPage() {
  return (
    <LegalPage>
      <Markdown source={content} />
    </LegalPage>
  );
}
