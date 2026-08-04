import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/LegalPage";

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
    <LegalPage title="Exclusão de Dados" updatedAt="30/01/2026">
      <p className="leading-relaxed text-muted-foreground">
        A Conexi IA garante ao titular dos dados o direito de solicitar a exclusão de seus dados
        pessoais.
      </p>

      <LegalSection title="Como solicitar a exclusão">
        <p>
          Envie um e-mail para{" "}
          <a href="mailto:contato@conexiia.com.br" className="text-primary hover:underline">
            contato@conexiia.com.br
          </a>{" "}
          com o assunto “Solicitação de Exclusão de Dados” informando nome completo, telefone ou
          identificador e canal de contato.
        </p>
      </LegalSection>

      <LegalSection title="Prazo">
        <p>
          As solicitações serão analisadas e atendidas em até 30 dias, conforme a legislação
          vigente.
        </p>
      </LegalSection>

      <LegalSection title="Escopo da exclusão">
        <p>
          Serão excluídos os dados pessoais, registros de conversas e identificadores
          associados, exceto quando a retenção for exigida por obrigação legal.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
