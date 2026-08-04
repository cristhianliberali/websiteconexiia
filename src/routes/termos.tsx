import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/LegalPage";

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
    <LegalPage title="Termos de Uso" updatedAt="30/01/2026">
      <p className="leading-relaxed text-muted-foreground">
        A Conexi IA é uma plataforma de automação de conversas e inteligência artificial
        destinada a empresas que desejam se comunicar com seus clientes por meio de canais
        digitais, incluindo WhatsApp, Instagram, Facebook Messenger e outros serviços
        compatíveis.
      </p>
      <p className="leading-relaxed text-muted-foreground">
        Ao utilizar a Conexi IA, o usuário concorda integralmente com os termos abaixo.
      </p>

      <LegalSection title="1. Descrição do serviço">
        <p>
          A Conexi IA fornece ferramentas de automação de mensagens, atendimento inteligente,
          organização de conversas e integração com plataformas de mensagens da Meta. A Conexi
          IA não é uma rede social e não comercializa dados pessoais.
        </p>
      </LegalSection>

      <LegalSection title="2. Elegibilidade">
        <p>
          O uso da plataforma é permitido apenas para empresas, profissionais ou representantes
          legais autorizados. É proibida a utilização da Conexi IA para envio de spam, práticas
          enganosas, conteúdos ilegais ou qualquer violação das Políticas da Meta.
        </p>
      </LegalSection>

      <LegalSection title="3. Uso de dados e integrações">
        <p>
          O usuário autoriza a Conexi IA a processar mensagens e dados estritamente necessários
          para a prestação do serviço, bem como realizar integrações com APIs oficiais da Meta.
          A Conexi IA não acessa conversas sem autorização nem utiliza dados para finalidades
          não relacionadas ao serviço contratado.
        </p>
      </LegalSection>

      <LegalSection title="4. Responsabilidade do usuário">
        <p>
          O usuário é integralmente responsável pelo conteúdo das mensagens enviadas, pelo
          cumprimento das Políticas da Meta e pela obtenção do consentimento prévio de seus
          clientes para comunicação.
        </p>
      </LegalSection>

      <LegalSection title="5. Suspensão e encerramento">
        <p>
          A Conexi IA poderá suspender ou encerrar o acesso de usuários que violem estes termos,
          a legislação vigente ou as políticas das plataformas integradas.
        </p>
      </LegalSection>

      <LegalSection title="6. Alterações dos termos">
        <p>
          Os termos podem ser atualizados periodicamente. É responsabilidade do usuário
          revisá-los regularmente.
        </p>
      </LegalSection>

      <LegalSection title="7. Contato">
        <p>
          E-mail:{" "}
          <a href="mailto:contato@conexiia.com.br" className="text-primary hover:underline">
            contato@conexiia.com.br
          </a>
        </p>
        <p>
          Site oficial:{" "}
          <a href="https://conexiia.com.br" className="text-primary hover:underline">
            conexiia.com.br
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
