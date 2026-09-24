import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { Markdown } from "@/components/Markdown";
import content from "@/content/legal/exclusao-de-dados.md?raw";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://lp.conexiia.com.br";

export const Route = createFileRoute("/exclusao-dados")({
  head: () => ({
    meta: [
      { title: "Exclusão de Dados — Conexi IA" },
      {
        name: "description",
        content: "Como solicitar a exclusão dos seus dados pessoais na Conexi IA.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/exclusao-dados/` }],
  }),
  component: ExclusaoDadosPage,
});

function ExclusaoDadosPage() {
  return (
    <LegalPage>
      <Markdown source={content} />
    </LegalPage>
  );
}
