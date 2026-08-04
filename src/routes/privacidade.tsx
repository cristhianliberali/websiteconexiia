import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/LegalPage";

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
    <LegalPage title="Política de Privacidade" updatedAt="30/01/2026">
      <p className="leading-relaxed text-muted-foreground">
        A Conexi IA valoriza a privacidade e a proteção de dados pessoais, atuando em
        conformidade com a Lei Geral de Proteção de Dados (LGPD) e com as Políticas da Meta.
      </p>

      <LegalSection title="1. Dados coletados">
        <p>
          Podemos coletar dados como nome, número de telefone, identificadores de conversa,
          conteúdo das mensagens e informações técnicas necessárias para integração e
          funcionamento da plataforma.
        </p>
      </LegalSection>

      <LegalSection title="2. Finalidade do uso">
        <p>
          Os dados são utilizados exclusivamente para a prestação dos serviços de automação e
          atendimento, melhoria da experiência do usuário, cumprimento de obrigações legais e
          funcionamento das integrações com plataformas da Meta.
        </p>
      </LegalSection>

      <LegalSection title="3. Compartilhamento de dados">
        <p>
          Os dados poderão ser compartilhados apenas com plataformas da Meta e com a
          infraestrutura técnica necessária para o funcionamento da Conexi IA. A Conexi IA não
          vende, aluga ou comercializa dados pessoais.
        </p>
      </LegalSection>

      <LegalSection title="4. Armazenamento e segurança">
        <p>
          Os dados são armazenados em ambientes seguros, com controles de acesso, medidas de
          segurança técnicas e administrativas adequadas para proteção contra acesso não
          autorizado.
        </p>
      </LegalSection>

      <LegalSection title="5. Direitos do titular">
        <p>
          O titular dos dados pode solicitar acesso, correção, exclusão ou revogação de
          consentimento a qualquer momento.
        </p>
      </LegalSection>

      <LegalSection title="6. Contato">
        <p>
          E-mail:{" "}
          <a href="mailto:contato@conexiia.com.br" className="text-primary hover:underline">
            contato@conexiia.com.br
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
