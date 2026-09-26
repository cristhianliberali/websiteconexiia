import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Bot,
  Check,
  ChevronDown,
  Clock,
  Coffee,
  DollarSign,
  Facebook,
  Globe,
  Headphones,
  Info,
  Instagram,
  LineChart,
  MessageCircle,
  Moon,
  SlidersHorizontal,
  Sparkles,
  Sun,
  TrendingUp,
  Users,
  Video,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import type React from "react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { WhatsAppMockup } from "@/components/WhatsAppMockup";
import { DiagnosticoForm } from "@/components/DiagnosticoForm";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Logo, Footer } from "@/components/SiteChrome";
import logoGray from "@/assets/conexi-logo-gray.webp";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://lp.conexiia.com.br";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Logo />
        <a href="#formulario" className="btn-primary text-sm sm:text-base">
          Diagnóstico gratuito
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

/* SESSÃO 1 — HERO */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-16 top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
        <RevealOnScroll>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            IA + atendimento omnichannel para tráfego pago
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Sua melhor vendedora,{" "}
            <span className="text-primary">24 horas por dia.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            A Conexi IA transforma seu WhatsApp, Instagram, Facebook e site em uma máquina de
            vendas: agentes de IA humanizados que respondem em segundos, qualificam e vendem —
            por <strong className="text-foreground">uma fração do custo de contratar</strong>.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#formulario" className="btn-primary">
              Quero meu diagnóstico gratuito
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#planos" className="btn-ghost-light">
              Ver planos e preços
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" /> Implantação guiada pelo nosso time
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" /> Consultoria de especialistas inclusa
            </li>
          </ul>
        </RevealOnScroll>

        <RevealOnScroll delay={150} className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/20 via-transparent to-transparent blur-2xl" />
          <WhatsAppMockup />
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* SESSÃO 2 — BARRA DE PROVA */
function StatsBar() {
  const stats = [
    { n: "-70%", l: "em comparação ao custo de um atendente humano" },
    { n: "até +39%", l: "na taxa de conversão de leads" },
    { n: "-95%", l: "no tempo médio de resposta no WhatsApp" },
    { n: "24/7", l: "100% dos leads respondidos, a qualquer hora" },
  ];
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Resultados dos nossos clientes
        </p>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <RevealOnScroll key={s.n} delay={i * 80} className="text-center">
              <div className="font-display text-3xl font-bold text-primary sm:text-4xl">
                {s.n}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SESSÃO 3 — DORES */
function Pains() {
  const pains = [
    {
      icon: Clock,
      t: "Rápido para você, lento para o cliente",
      d: "Seu time responde em 20, 30 minutos e considera isso rápido. Só que o lead de anúncio manda a mesma pergunta para três concorrentes e fecha com o primeiro que responde — em segundos.",
    },
    {
      icon: Moon,
      t: "Depois do expediente, ninguém responde",
      d: "Boa parte dos seus leads chega à noite, no fim de semana e no feriado — justamente quando não tem ninguém do outro lado. Até o dia seguinte, ele já foi atendido por outra empresa.",
    },
    {
      icon: Users,
      t: "Equipe sobrecarregada",
      d: "Enquanto atende presencialmente, resolve um problema ou fecha uma venda, seu time deixa outras conversas esperando. O SLA estoura sem ninguém perceber — e o cliente reclama.",
    },
    {
      icon: DollarSign,
      t: "Folha de pagamento pesada",
      d: "Escalar o atendimento contratando gente custa de R$ 2.200 a R$ 4.300 por pessoa/mês — e bons vendedores são raros.",
    },
    {
      icon: LineChart,
      t: "Zero previsibilidade",
      d: "Quantos atendimentos viraram venda esse mês? Se você não sabe, está decidindo no escuro.",
    },
    {
      icon: Bot,
      t: "Chatbot que trava",
      d: "Você já tentou automatizar, mas o robô de menu engessado irritava o cliente e travava a venda.",
    },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Será que o seu time responde o cliente no tempo que ele precisa?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No horário comercial, talvez sim. Mas o lead que vem do anúncio chega a qualquer hora,
            fala com mais de uma empresa ao mesmo tempo e fecha com quem responde primeiro. Se você
            investe em tráfego pago e atende pelo WhatsApp, provavelmente reconhece pelo menos uma
            dessas situações:
          </p>
        </RevealOnScroll>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <RevealOnScroll
              key={p.t}
              delay={i * 60}
              className="card-lift rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-destructive/10 text-destructive">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mx-auto mt-12 max-w-2xl rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
          <p className="text-base text-foreground sm:text-lg">
            A boa notícia: nenhum desses problemas é falta de esforço do seu time.{" "}
            <strong>É falta da ferramenta certa.</strong>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* SESSÃO 4 — AGITAÇÃO */
function Agitation() {
  return (
    <section className="bg-surface-dark text-surface-dark-foreground">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Cada hora sem resposta é{" "}
            <span className="text-primary">dinheiro do seu tráfego</span> indo embora.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-dark-muted">
            Você paga caro pelo clique. Quando o lead espera, o timing da venda passa: o CAC
            sobe, a verba de anúncio rende menos e o concorrente que respondeu primeiro leva o
            cliente que <strong className="text-surface-dark-foreground">você pagou para atrair</strong>.
          </p>
          <div className="mt-8">
            <a href="#planos" className="btn-primary">
              Ver planos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* SESSÃO 4B — SEU LEAD CHEGOU ÀS 22H47 */
function LeadArrived() {
  const moments = [
    {
      icon: Moon,
      when: "Sexta, 22h47",
      msg: "Vi o anúncio de vocês. Ainda consigo horário essa semana?",
      without: "respondido na segunda, às 9h12. O lead já tinha agendado com outra empresa.",
      with: "respondido às 22h47, qualificado e agendado para terça, às 14h.",
    },
    {
      icon: Sun,
      when: "Domingo, 10h20",
      msg: "Quanto fica o plano completo? Tem desconto pra fechar hoje?",
      without: "fica sem resposta até segunda. Na segunda, o lead nem lembra mais do anúncio.",
      with: "proposta enviada em segundos, dúvidas respondidas e follow-up marcado para o dia seguinte.",
    },
    {
      icon: Coffee,
      when: "Terça, 12h35",
      msg: "Vocês atendem na minha região? Como funciona?",
      without: "time no almoço. Resposta às 14h — para um lead que já falou com três concorrentes.",
      with: "respondido na hora, dúvidas resolvidas e conversa entregue ao seu time pronta para fechar.",
    },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            Fora do horário, dentro da venda
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Seu lead chegou às 22h47. <span className="text-primary">Quem respondeu?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A Conexi IA responde em segundos, a qualquer hora, com agentes de IA treinados na sua
            empresa que qualificam e conduzem a venda no WhatsApp, Instagram, Facebook e site.
            Nenhum lead do seu tráfego pago fica sem resposta.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            O mesmo lead, em três momentos em que o seu time não está. Veja o que muda.
          </p>
        </RevealOnScroll>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {moments.map((m, i) => (
            <RevealOnScroll
              key={m.when}
              delay={i * 80}
              className="card-lift flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <m.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{m.when}</h3>
              </div>

              <div className="mt-4 rounded-2xl rounded-tl-sm bg-muted px-4 py-3 text-sm text-foreground">
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Mensagem do lead
                </span>
                "{m.msg}"
              </div>

              <div className="mt-5 space-y-4 text-sm leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-destructive/10 text-destructive">
                    <X className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Sem a Conexi:</strong> {m.without}
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Com a Conexi:</strong> {m.with}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mx-auto mt-12 max-w-3xl rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
          <p className="text-base text-foreground sm:text-lg">
            Não importa se é madrugada, domingo ou hora do almoço: quem chega pelo seu anúncio é
            atendido em segundos, com o tom de voz da sua marca —{" "}
            <strong>e o seu time só entra quando a venda está pronta para fechar.</strong>
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10 text-center">
          <a href="#planos" className="btn-primary">
            Ver planos
            <ArrowRight className="h-4 w-4" />
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* SESSÃO 5 — SOLUÇÃO */
function Solution() {
  const caps = [
    "Responde em segundos, 24 horas por dia, 7 dias por semana",
    "Qualifica os leads automaticamente no momento em que chegam",
    "Conduz a venda completa: da dúvida ao agendamento ou fechamento",
    "Transfere para seu time humano com todo o contexto, quando precisa",
    "Centraliza WhatsApp, Instagram, Facebook e webchat em um só lugar",
    "Entrega dashboards e números reais do seu funil de atendimento",
  ];
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <RevealOnScroll>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            Apresentando a Conexi IA
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Não é chatbot. É um time de vendedores de IA treinado na sua empresa.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            A Conexi IA combina uma plataforma omnichannel com agentes de Inteligência
            Artificial criados sob medida para o seu negócio — com conhecimento profundo da
            empresa, ritmo de conversa natural e capacidade de conduzir a venda do primeiro
            "oi" ao fechamento.
          </p>
          <ul className="mt-6 space-y-3">
            {caps.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-foreground">{c}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <OmnichannelInbox />
        </RevealOnScroll>
      </div>
    </section>
  );
}

function OmnichannelInbox() {
  const rows = [
    {
      icon: MessageCircle,
      color: "text-emerald-600 bg-emerald-100",
      name: "Marina · WhatsApp",
      msg: "Sexta 17h30 👍",
      time: "agora",
      tag: "Qualificado",
    },
    {
      icon: Instagram,
      color: "text-pink-600 bg-pink-100",
      name: "@rafa.mota · Instagram",
      msg: "Vocês entregam pra Curitiba?",
      time: "2 min",
      tag: "Novo lead",
    },
    {
      icon: Facebook,
      color: "text-blue-600 bg-blue-100",
      name: "Carlos S. · Messenger",
      msg: "Quero o plano PRO +, como faço?",
      time: "5 min",
      tag: "Alta intenção",
    },
    {
      icon: Globe,
      color: "text-slate-700 bg-slate-100",
      name: "Visitante · Webchat",
      msg: "Como funciona a implantação?",
      time: "8 min",
      tag: "Em atendimento",
    },
  ];
  return (
    <div className="rounded-2xl border border-border bg-card p-2 shadow-[0_25px_50px_-25px_rgba(15,23,42,0.25)]">
      <div className="flex items-center justify-between px-3 py-2.5">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Headphones className="h-4 w-4 text-primary" /> Caixa de entrada omnichannel
        </div>
        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-semibold text-primary">
          4 canais · 1 lugar
        </span>
      </div>
      <div className="divide-y divide-border overflow-hidden rounded-xl border border-border">
        {rows.map((r) => (
          <div key={r.name} className="flex items-center gap-3 bg-card p-3 hover:bg-muted/50">
            <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${r.color}`}>
              <r.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="truncate text-sm font-semibold">{r.name}</p>
                <span className="shrink-0 text-[11px] text-muted-foreground">{r.time}</span>
              </div>
              <p className="truncate text-sm text-muted-foreground">{r.msg}</p>
            </div>
            <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
              {r.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* SESSÃO 6 — COMO FUNCIONA (IMPLANTAÇÃO) */
function HowItWorks() {
  const steps = [
    {
      icon: Video,
      badge: "Estratégia & Prompt",
      t: "Diagnóstico (1h via Meet)",
      d: "Entendemos sua operação e criamos os agentes de IA junto com você, aplicando nossa expertise em engenharia de prompt e comportamento de IA.",
    },
    {
      icon: SlidersHorizontal,
      badge: "Canais & Processo",
      t: "Implantação guiada (4h)",
      d: "Ao lado da sua equipe, conectamos os canais, criamos os acessos e desenhamos seu processo comercial dentro da plataforma.",
    },
    {
      icon: Headphones,
      badge: "Otimização constante",
      t: "Acompanhamento contínuo",
      d: "Suporte próximo via WhatsApp para ajustar, otimizar e escalar os resultados. No plano PRO +, gerente de conta dedicado.",
    },
  ];
  return (
    <section
      id="implantacao"
      className="relative overflow-hidden bg-surface-dark py-20 text-surface-dark-foreground"
    >
      {/* Glows suaves nos cantos */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-success/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Clock className="h-3.5 w-3.5" />
            Agilidade sem fricção
          </span>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Do zero ao ar <span className="text-primary">de mãos dadas</span> com nosso time.
          </h2>
          <p className="mt-4 text-lg text-surface-dark-muted">
            Você não configura nada sozinho. A consultoria faz parte da solução.
          </p>
        </RevealOnScroll>

        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          {/* Linha conectora (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/4 right-1/4 top-14 hidden h-px bg-gradient-to-r from-primary/40 via-primary/20 to-success/40 md:block"
          />

          {steps.map((s, i) => (
            <RevealOnScroll
              key={s.t}
              delay={i * 100}
              className="card-lift group relative flex flex-col justify-between rounded-2xl border border-surface-dark-border bg-white/5 p-6 backdrop-blur"
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-3xl font-bold text-surface-dark-border transition-colors duration-300 group-hover:text-primary">
                    0{i + 1}
                  </span>
                </div>

                <span className="inline-block rounded-md bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {s.badge}
                </span>

                <h3 className="mt-3 font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-surface-dark-muted">{s.d}</p>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-surface-dark-border pt-4 text-xs font-semibold text-success">
                <Check className="h-4 w-4" />
                Incluso no serviço
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={300} className="mt-12 text-center">
          <a href="#planos" className="btn-primary">
            Ver planos
            <ArrowRight className="h-4 w-4" />
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* SESSÃO 7 — BENEFÍCIOS */
function Benefits() {
  const items = [
    {
      icon: TrendingUp,
      metric: "+39%",
      label: "na conversão dos mesmos leads",
      t: "Mais vendas com o mesmo tráfego",
      d: "Resposta instantânea + qualificação automática: você vende mais para os leads que já paga para atrair.",
    },
    {
      icon: DollarSign,
      metric: "-70%",
      label: "em comparação ao custo de um atendente humano",
      t: "Custo muito menor",
      d: "Um agente de IA custa até 70% menos que um atendente humano — e trabalha 24/7, sem férias, sem turnover.",
    },
    {
      icon: Zap,
      metric: "2x",
      label: "volume, zero contratações",
      t: "Escala sem contratar",
      d: "Dobre o volume de atendimento sem abrir uma vaga. A IA absorve os picos; sua estrutura continua enxuta.",
    },
    {
      icon: Users,
      metric: "100%",
      label: "do time nas conversas de valor",
      t: "Time focado no que importa",
      d: "A IA resolve o repetitivo e o fora de horário; seu time entra só onde faz diferença.",
    },
    {
      icon: MessageCircle,
      metric: "24/7",
      label: "com ritmo de pessoa",
      t: "Atendimento que parece humano",
      d: "Ritmo natural de resposta, personalidade própria e conhecimento profundo do negócio: a maioria nem percebe que é IA.",
    },
    {
      icon: BarChart3,
      metric: "Ponta a ponta",
      label: 'do primeiro "oi" ao fechamento',
      t: "Previsibilidade total",
      d: "Dashboards, BI e rastreamento de conversões: seu funil inteiro em números, sem achismo.",
    },
  ];
  return (
    <section className="relative overflow-hidden py-20">
      {/* Glow verde suave no topo da sessão */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            "radial-gradient(60% 70% at 50% 0%, color-mix(in oklab, var(--color-success) 16%, transparent), transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-success/40 bg-success/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-success-strong">
            <Sparkles className="h-3.5 w-3.5" />
            Resultados reais
          </span>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            O que muda na sua operação com a <span className="text-success-strong">Conexi IA</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Menos problema, mais venda. Isso é o que sua operação ganha desde o primeiro mês.
          </p>
        </RevealOnScroll>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <RevealOnScroll
              key={it.t}
              delay={i * 60}
              className="benefit-card group rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-success/15 text-success-strong ring-1 ring-success/30 ring-inset transition-colors duration-300 group-hover:bg-success-strong group-hover:text-white group-hover:ring-success-strong">
                  <it.icon className="h-5 w-5" strokeWidth={2.25} />
                </div>
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-success/15 text-success-strong">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
              </div>

              <div className="mt-5">
                <div className="font-display text-3xl font-bold leading-none tracking-tight text-success-strong">
                  {it.metric}
                </div>
                <div className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {it.label}
                </div>
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold">{it.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mx-auto mt-12 max-w-3xl">
          <div className="flex flex-col items-center gap-5 rounded-2xl border border-success/30 bg-success/10 p-6 text-center sm:flex-row sm:text-left">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-success-strong text-white shadow-lg shadow-success/40">
              <TrendingUp className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <p className="text-base text-foreground sm:text-lg">
              Somando tudo: <strong>mais receita com o mesmo investimento</strong> em tráfego — e
              uma operação que cresce sem depender de contratar.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10 text-center">
          <a href="#planos" className="btn-primary">
            Ver planos
            <ArrowRight className="h-4 w-4" />
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* SESSÃO 8 — COMPARATIVO */
function Comparison() {
  const rows = [
    ["Menu engessado de opções numeradas", "Entende linguagem natural, como uma pessoa"],
    [
      "Trava quando o cliente sai do fluxo",
      "Conhece sua empresa a fundo (arquivos de conhecimento)",
    ],
    [
      "Irrita o cliente e derruba a experiência",
      "Conversa com ritmo humano e personalidade própria",
    ],
    ["Não vende: só filtra e transfere", "Conduz a venda até o fim — e transfere com contexto"],
    [
      "Você configura sozinho, por tentativa e erro",
      "Especialistas criam os agentes junto com você",
    ],
  ];
  return (
    <section className="bg-surface-dark text-surface-dark-foreground">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Chatbot trava. <span className="text-primary">Vendedor de IA conversa.</span>
          </h2>
          <p className="mt-4 text-lg text-surface-dark-muted">
            Se você já se decepcionou com automação, o problema não era automatizar. Era a
            ferramenta.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10 overflow-hidden rounded-2xl border border-surface-dark-border">
          <div className="grid grid-cols-2 divide-x divide-surface-dark-border text-sm font-semibold uppercase tracking-wider">
            <div className="bg-white/5 px-4 py-3 text-surface-dark-muted">
              <span className="inline-flex items-center gap-2">
                <X className="h-4 w-4 text-destructive" /> Chatbot genérico
              </span>
            </div>
            <div className="bg-primary/15 px-4 py-3 text-primary">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4" /> Conexi IA
              </span>
            </div>
          </div>
          <div className="divide-y divide-surface-dark-border">
            {rows.map(([a, b]) => (
              <div key={a} className="grid grid-cols-2 divide-x divide-surface-dark-border">
                <div className="px-4 py-4 text-surface-dark-muted">{a}</div>
                <div className="px-4 py-4 text-surface-dark-foreground">{b}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* SESSÃO 9 — PLANOS */
type BillingCycle = "mensal" | "anual";

const brl = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });

const selectPlan = (plano: string, preco: string) =>
  window.dispatchEvent(new CustomEvent("conexi:plano-selecionado", { detail: { plano, preco } }));

const planPriceLabel = (plan: (typeof PLANS)[number], cycle: BillingCycle) =>
  `${brl(cycle === "anual" ? plan.annualTotal / 12 : plan.monthlyPrice)}/mês (${cycle})`;

function InfoHint({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const isMouse = (e: React.PointerEvent) => e.pointerType === "mouse";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        aria-label={label}
        onPointerEnter={(e) => isMouse(e) && setOpen(true)}
        onPointerLeave={(e) => isMouse(e) && setOpen(false)}
        className="ml-1.5 inline-flex translate-y-0.5 rounded-full text-surface-dark-muted transition hover:text-primary focus-visible:text-primary focus-visible:outline-none"
      >
        <Info className="h-4 w-4" />
      </PopoverTrigger>
      <PopoverContent
        side="top"
        collisionPadding={16}
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="w-72 max-w-[calc(100vw-2rem)] border-surface-dark-border bg-surface-dark p-3 text-xs leading-relaxed text-surface-dark-foreground sm:text-sm"
      >
        {children}
      </PopoverContent>
    </Popover>
  );
}

function PlanFeatures({ cycle }: { cycle: BillingCycle }) {
  const features = [
    {
      category: "Preço e estrutura",
      items: [
        { name: "Usuários inclusos", start: "2", plus: "5", pro: "10" },
        { name: "Usuários adicionais", start: "—", plus: "—", pro: "Consulte" },
        { name: "Caixas de entrada", start: "3", plus: "6", pro: "16" },
        { name: "Caixas de entrada adicionais", start: "—", plus: "—", pro: "Consulte" },
        { name: "Agentes de IA", start: "Ilimitado", plus: "Ilimitado", pro: "Ilimitado" },
        {
          name: "Implantação no plano mensal (opcional)",
          start: "R$ 5.000",
          plus: "R$ 5.000",
          pro: "R$ 5.000",
        },
        {
          name: "Implantação no plano anual (opcional)",
          start: "R$ 5.000",
          plus: "Gratuita",
          pro: "Gratuita",
        },
      ],
    },
    {
      category: "Inteligência Artificial",
      items: [
        {
          name: "Modelo de consumo de tokens",
          start: "IA integrada",
          plus: "IA integrada ou chave própria",
          pro: "IA integrada ou chave própria",
        },
        {
          name: "Créditos de IA",
          info: "Para responder seus clientes, a IA consome créditos, que você recarrega direto na sua conta sempre que precisar. Em média, 1 crédito equivale a 1 resposta gerada — o consumo varia conforme o tamanho da base de conhecimento e das instruções do agente.",
          start: "R$ 7,90 / 100 créditos",
          plus: "R$ 7,90 / 100 créditos",
          pro: "R$ 7,90 / 100 créditos",
        },
        { name: "Assistência e análise com IA (copilot)", start: false, plus: true, pro: true },
      ],
    },
    {
      category: "Canais",
      items: [
        { name: "WhatsApp", start: true, plus: true, pro: true },
        { name: "Instagram", start: true, plus: true, pro: true },
        { name: "Webchat ao vivo", start: false, plus: true, pro: true },
        { name: "Facebook", start: false, plus: true, pro: true },
      ],
    },
    {
      category: "Gestão, dados e integrações",
      items: [
        {
          name: "Dashboards e BI (relatório de atendimentos)",
          start: true,
          plus: true,
          pro: true,
        },
        { name: "API de conversões / traqueamento", start: true, plus: true, pro: true },
        { name: "Webhook e API Rest", start: false, plus: true, pro: true },
        { name: "SLA de atendimento", start: false, plus: false, pro: true },
        { name: "Auditoria de logs", start: false, plus: false, pro: true },
      ],
    },
    {
      category: "CRM — em breve",
      items: [
        { name: "Visualização Kanban", start: false, plus: true, pro: true },
        { name: "Pipelines", start: "—", plus: "3", pro: "Ilimitado" },
        {
          name: "Automações do CRM (follow-up, webhooks, discador, etc.)",
          start: false,
          plus: true,
          pro: true,
        },
      ],
    },
    {
      category: "Operação",
      items: [
        { name: "Agendamento de mensagens", start: false, plus: true, pro: true },
        {
          name: "Automações, respostas prontas, macros e etiquetas",
          start: true,
          plus: true,
          pro: true,
        },
        { name: "Fluxo de conversas por time", start: true, plus: true, pro: true },
        {
          name: "Times, atribuição automática e capacidade do atendente",
          start: true,
          plus: true,
          pro: true,
        },
        { name: "Central de ajuda personalizada", start: true, plus: true, pro: true },
      ],
    },
    {
      category: "Suporte",
      items: [
        { name: "Gerente de conta", start: false, plus: false, pro: true },
        {
          name: "Canais de suporte",
          start: "Chat",
          plus: "Chat ou WhatsApp",
          pro: "Chat ou WhatsApp",
        },
      ],
    },
  ];

  const plans = PLANS.map((p) => p.name);

  const renderCell = (value: boolean | string) => {
    if (value === true) {
      return (
        <div className="flex items-center justify-center">
          <div className="grid h-6 w-6 place-items-center rounded-full bg-primary/20">
            <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
          </div>
        </div>
      );
    }
    if (value === false) {
      return (
        <div className="flex items-center justify-center">
          <X className="h-4 w-4 text-surface-dark-muted/50" />
        </div>
      );
    }
    return (
      <span className="text-center text-sm font-medium text-surface-dark-foreground">{value}</span>
    );
  };

  return (
    <section className="relative overflow-hidden bg-surface-dark py-20 text-surface-dark-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-surface-dark-border bg-surface-dark-foreground/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-surface-dark-muted">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Comparativo detalhado
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Tudo que cada plano entrega
          </h2>
          <p className="mt-4 text-lg text-surface-dark-muted">
            Compare funcionalidades e escolha o plano ideal para a sua operação. A maioria dos
            recursos já está disponível; alguns estão em rollout e serão liberados em breve.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={100} className="mt-12 overflow-hidden rounded-2xl border border-surface-dark-border bg-surface-dark/80 backdrop-blur">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] border-b border-surface-dark-border bg-surface-dark-foreground/5">
            <div className="px-4 py-4 text-sm font-semibold text-surface-dark-muted sm:px-6">Funcionalidade</div>
            {plans.map((p) => (
              <div key={p} className="px-4 py-4 text-center sm:px-6">
                <span className="font-display text-sm font-bold sm:text-base">{p}</span>
              </div>
            ))}
          </div>

          {features.map((group) => (
            <div key={group.category}>
              <div className="border-b border-surface-dark-border bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary sm:px-6">
                {group.category}
              </div>
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="grid grid-cols-[1.4fr_1fr_1fr_1fr] border-b border-surface-dark-border/60 last:border-b-0"
                >
                  <div className="px-4 py-3.5 text-sm text-surface-dark-muted sm:px-6">
                    {item.name}
                    {item.info && <InfoHint label={`Sobre ${item.name}`}>{item.info}</InfoHint>}
                  </div>
                  <div className="grid place-items-center border-l border-surface-dark-border/60 px-4 py-3.5 sm:px-6">
                    {renderCell(item.start)}
                  </div>
                  <div className="grid place-items-center border-l border-surface-dark-border/60 px-4 py-3.5 sm:px-6">
                    {renderCell(item.plus)}
                  </div>
                  <div className="grid place-items-center border-l border-surface-dark-border/60 px-4 py-3.5 sm:px-6">
                    {renderCell(item.pro)}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] border-t border-surface-dark-border">
            <div />
            {PLANS.map((p) => (
              <div
                key={p.name}
                className="grid place-items-center border-l border-surface-dark-border/60 px-2 py-4 sm:px-6"
              >
                <a
                  href="#formulario"
                  onClick={() => selectPlan(p.name, planPriceLabel(p, cycle))}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-2 py-2.5 text-center text-xs font-semibold text-primary-foreground transition hover:bg-primary-hover sm:text-sm"
                >
                  Escolher o {p.name.replace(/\s+/g, "")}
                </a>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120} className="mx-auto mt-8 max-w-3xl rounded-2xl border border-surface-dark-border bg-surface-dark-foreground/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            O que inclui a implantação
          </p>
          <p className="mt-3 text-sm leading-relaxed text-surface-dark-muted">
            Implementação guiada com nossa equipe: criação de usuários, configuração da política de
            acesso, migração/criação de canais e engenharia de prompt para os agentes de IA. Inclui
            reunião de briefing e elaboração da base de conhecimento e das ferramentas da IA.
            Integração entre sistemas mediante avaliação.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

const PLANS = [
  {
    name: "START",
    monthlyPrice: 372.38,
    annualTotal: 3574.8,
    tag: "Para validar a IA na sua operação",
    features: [
      "2 usuários",
      "3 caixas de entrada",
      "Agentes de IA ilimitados",
      "WhatsApp + Instagram",
      "IA integrada (créditos a R$ 7,90 / 100)",
      "Dashboards, BI e API de conversões",
      "Automações, respostas prontas, macros e etiquetas",
      "Suporte por chat",
    ],
    setup: {
      mensal: "Implantação opcional: R$ 5.000",
      anual: "Implantação opcional: R$ 5.000",
    },
    cta: "Começar com o START",
    highlight: false,
  },
  {
    name: "PLUS",
    monthlyPrice: 872.38,
    annualTotal: 8374.8,
    tag: "Para empresas em crescimento com tráfego pago ativo",
    inherits: "Tudo do START, mais:",
    features: [
      "5 usuários",
      "6 caixas de entrada",
      "+ Facebook e webchat ao vivo",
      "IA integrada ou sua própria chave (OpenAI, Anthropic, etc.)",
      "Assistência e análise com IA (copilot)",
      "Webhook e API Rest",
      "CRM com Kanban, 3 pipelines e automações (em breve)",
      "Agendamento de mensagens",
      "Suporte por chat ou WhatsApp",
    ],
    setup: {
      mensal: "Implantação opcional: R$ 5.000",
      anual: "Implantação gratuita no plano anual",
    },
    cta: "Assinar o PLUS",
    highlight: true,
    badge: "Mais escolhido",
  },
  {
    name: "PRO +",
    monthlyPrice: 1248.63,
    annualTotal: 11986.8,
    tag: "Para operações de alto volume que precisam de SLA e governança",
    inherits: "Tudo do PLUS, mais:",
    features: [
      "10 usuários (adicionais sob consulta)",
      "16 caixas de entrada (adicionais sob consulta)",
      "Todos os canais: WhatsApp, Instagram, Facebook e webchat",
      "CRM com pipelines ilimitados (em breve)",
      "SLA de atendimento",
      "Auditoria de logs",
      "Gerente de conta dedicado",
    ],
    setup: {
      mensal: "Implantação opcional: R$ 5.000",
      anual: "Implantação gratuita no plano anual",
    },
    cta: "Falar com um especialista",
    highlight: false,
  },
];

const ANNUAL_DISCOUNT_PERCENT = Math.round(
  (1 - PLANS[0].annualTotal / 12 / PLANS[0].monthlyPrice) * 100,
);

const ANNUAL_DISCOUNT_LABEL = `${ANNUAL_DISCOUNT_PERCENT}% OFF`;

function BillingToggle({
  cycle,
  onChange,
}: {
  cycle: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
}) {
  const options: { value: BillingCycle; label: string }[] = [
    { value: "mensal", label: "Mensal" },
    { value: "anual", label: "Anual" },
  ];

  return (
    <div
      role="group"
      aria-label="Ciclo de cobrança"
      className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm"
    >
      {options.map((option) => {
        const isActive = cycle === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={isActive}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-primary text-primary-foreground shadow"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {option.label}
            {option.value === "anual" && (
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                  isActive ? "bg-primary-foreground/20" : "bg-primary/15 text-primary"
                }`}
              >
                {ANNUAL_DISCOUNT_LABEL}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

const ENTERPRISE_FEATURES = [
  "Usuários, caixas de entrada e créditos de IA dimensionados para o seu volume",
  "Integração com ERP, CRM e sistemas internos via API",
  "SLA, auditoria de logs e gerente de contas dedicado",
  "Implantação e treinamento conduzidos pelo nosso time",
];

function EnterprisePlan() {
  return (
    <RevealOnScroll
      delay={80}
      className="card-lift mt-6 rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-6">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
            <Building2 className="h-3.5 w-3.5" />
            Enterprise
          </span>
          <h3 className="mt-4 font-display text-2xl font-bold">
            Enterprise: para operações que já passaram do PRO+
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Muitos atendentes, várias unidades, alto volume de conversas? A gente monta o plano na
            medida da sua operação.
          </p>
        </div>

        <ul className="space-y-3 lg:row-span-2 lg:self-center">
          {ENTERPRISE_FEATURES.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
              <span className="text-foreground">{f}</span>
            </li>
          ))}
        </ul>

        <a
          href="#formulario"
          onClick={() => selectPlan("Enterprise", "Proposta sob medida")}
          className="btn-primary w-full lg:w-fit lg:justify-self-start"
        >
          Solicitar proposta enterprise
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </RevealOnScroll>
  );
}

function Plans() {
  const plans = PLANS;

  const [cycle, setCycle] = useState<BillingCycle>("anual");
  const [showFeatures, setShowFeatures] = useState(false);

  const isAnnual = cycle === "anual";
  const startingPrice = brl(
    isAnnual ? PLANS[0].annualTotal / 12 : PLANS[0].monthlyPrice,
  );

  return (
    <>
      <section id="planos" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <RevealOnScroll className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Planos que se pagam no primeiro mês</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Um atendente humano custa de R$ 2.200 a R$ 4.300/mês e trabalha 8h por dia. A Conexi
              começa em <strong className="text-foreground">{startingPrice}</strong> por mês —
              trabalhando 24/7.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={60} className="mt-8 flex flex-col items-center gap-3">
            <BillingToggle cycle={cycle} onChange={setCycle} />
            <p className="text-sm text-muted-foreground">
              {isAnnual
                ? `Você está vendo os preços do plano anual, com ${ANNUAL_DISCOUNT_PERCENT}% de desconto.`
                : `Assine no anual e economize ${ANNUAL_DISCOUNT_PERCENT}%.`}
            </p>
          </RevealOnScroll>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((p, i) => {
              const monthlyEquivalent = isAnnual ? p.annualTotal / 12 : p.monthlyPrice;
              const displayPrice = brl(monthlyEquivalent);

              return (
                <RevealOnScroll
                  key={p.name}
                  delay={i * 80}
                  className={`card-lift relative flex flex-col rounded-2xl border p-6 ${
                    p.highlight
                      ? "border-primary bg-card shadow-[0_20px_50px_-20px_color-mix(in_oklab,var(--color-primary)_50%,transparent)]"
                      : "border-border bg-card"
                  }`}
                >
                  {p.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      ⭐ {p.badge}
                    </span>
                  )}
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{p.tag}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold">{displayPrice}</span>
                    <span className="text-sm text-muted-foreground">/mês</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {isAnnual ? (
                      <>
                        <span className="line-through">{brl(p.monthlyPrice)}</span>{" "}
                        <span className="font-semibold text-primary">
                          {brl(p.annualTotal)} por ano
                        </span>
                      </>
                    ) : (
                      "Cobrança mensal, sem fidelidade"
                    )}
                  </p>

                  {p.inherits && (
                    <p className="mt-6 text-sm font-semibold text-foreground">{p.inherits}</p>
                  )}

                  <ul className={`${p.inherits ? "mt-3" : "mt-6"} space-y-2.5`}>
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                        <span className="text-foreground">{f}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                      <span className="text-foreground">{p.setup[cycle]}</span>
                    </li>
                  </ul>

                  <a
                    href="#formulario"
                    onClick={() => selectPlan(p.name, planPriceLabel(p, cycle))}
                    className={`mt-8 ${p.highlight ? "btn-primary" : "btn-ghost-light"} w-full`}
                  >
                    {p.cta}
                  </a>

                </RevealOnScroll>
              );
            })}
          </div>

          <EnterprisePlan />

          <RevealOnScroll className="mt-8 text-center">
            <button
              onClick={() => setShowFeatures(true)}
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Ver comparativo completo de funcionalidades <ArrowRight className="h-4 w-4" />
            </button>
          </RevealOnScroll>
        </div>
      </section>

      {showFeatures && <PlanFeatures cycle={cycle} />}
    </>
  );
}

/* SESSÃO 10 — PARA QUEM É */
function ForWho() {
  const chips = [
    { t: "Clínicas médicas e odontológicas" },
    { t: "Clínicas de estética e beleza" },
    { t: "Imobiliárias e construtoras" },
    { t: "Concessionárias e revendas de veículos" },
    { t: "Agências de viagens e turismo" },
    { t: "Escolas, cursos e faculdades" },
    { t: "Academias e estúdios" },
    { t: "Corretoras de seguros e planos de saúde" },
    { t: "Empresas de energia solar" },
    { t: "Escritórios de advocacia e contabilidade" },
    { t: "Lojas, e-commerce e varejo consultivo" },
    { t: "Salões, pet shops e serviços com agendamento" },
    { t: "Assistência técnica e serviços a domicílio" },
    { t: "Franquias e redes de lojas" },
    { t: "Provedores de internet e telecom" },
    { t: "Operações de suporte e SAC" },
  ];
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Feita para empresas que vivem de atendimento
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Se a sua empresa anuncia, recebe leads todos os dias e fala com o cliente pelo
            WhatsApp, a Conexi foi feita para você.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10 flex flex-wrap justify-center gap-2.5">
          {chips.map((c) => (
            <span
              key={c.t}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
            >
              {c.t}
            </span>
          ))}
        </RevealOnScroll>

        <RevealOnScroll className="mx-auto mt-10 max-w-3xl rounded-2xl border-l-4 border-primary bg-card p-6 shadow-sm">
          <p className="text-foreground">
            <strong className="text-primary">Feita para quem vive de atendimento.</strong> Para
            quem anuncia em tráfego pago e recebe leads todos os dias. Para quem tem agenda para
            preencher, orçamento para enviar e follow-up para fazer. Para quem já tentou
            automatizar e o cliente não gostou. Para quem usa o WhatsApp, o Instagram e outros
            canais para falar com o cliente — e sabe que cada conversa sem resposta é uma venda
            que vai para o concorrente.
          </p>
          <p className="mt-3 text-foreground">
            Se você se reconheceu em pelo menos uma dessas frases,{" "}
            <a href="#formulario" className="font-semibold text-primary hover:underline">
              peça seu diagnóstico gratuito
            </a>
            .
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* SESSÃO 12 — FAQ (sessão 11 oculta conforme copy) */
const FAQ_ITEMS = [
  {
    q: "Meus clientes vão perceber que é uma IA?",
    a: "Na maioria dos casos, não. A IA foi otimizada para simular um atendimento humano de alta conexão: ritmo natural de resposta, personalidade própria e conhecimento profundo da sua empresa. E quando a conversa exige, ela transfere para o seu time com todo o contexto.",
  },
  {
    q: "Em quanto tempo fica pronto?",
    a: "Rápido e sem esforço do seu lado: 1h de diagnóstico via Meet, 4h de implantação guiada com sua equipe e acompanhamento contínuo pelo WhatsApp.",
  },
  {
    q: "Preciso saber configurar IA?",
    a: "Não. Nossos especialistas em engenharia de prompt criam os agentes junto com você na consultoria de implantação.",
  },
  {
    q: "E se a IA não souber responder?",
    a: 'Ela transfere para um atendente humano do seu time, com atribuição automática e todo o histórico. Travas de segurança garantem que ela não "invente" respostas fora do conhecimento aprovado.',
  },
  {
    q: "Já tentei chatbot e não funcionou. Qual a diferença?",
    a: "Chatbot de menu só entende botão. Os agentes da Conexi entendem linguagem natural, conhecem sua empresa a fundo e conduzem a venda — criados com você por especialistas, não por tentativa e erro.",
  },
  {
    q: "Integra com o sistema que eu já uso?",
    a: "Sim. Nos planos PLUS e PRO + você conta com webhook e API Rest para conectar a Conexi ao seu CRM, ERP ou sistema interno. Integrações entre sistemas são avaliadas caso a caso na implantação, junto com o nosso time.",
  },
  {
    q: "Como funcionam os créditos de IA?",
    a: "1 crédito = 1 resposta da IA. Você adiciona pacotes de 100 créditos por R$ 7,90, com recarga automática opcional, e usa quantos agentes de IA precisar — não há limite de agentes em nenhum plano. Nos planos PLUS e PRO +, também dá para conectar sua própria chave de IA (OpenAI, Anthropic, etc.) e ter controle total do custo.",
  },
];

function FAQ() {
  const items = FAQ_ITEMS;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <RevealOnScroll className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Perguntas frequentes</h2>
        </RevealOnScroll>

        <div className="mt-10 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <RevealOnScroll
                key={it.q}
                delay={i * 40}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-muted/50"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground">{it.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {it.a}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* SESSÃO 13 — FORMULÁRIO */
function FinalForm() {
  return (
    <section
      id="formulario"
      className="relative overflow-hidden bg-surface-dark text-surface-dark-foreground"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
        <RevealOnScroll className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Onde a sua empresa perde vendas hoje?{" "}
            <span className="text-primary">Vamos mapear juntos.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-surface-dark-muted">
            Preencha abaixo e receba um <strong className="text-surface-dark-foreground">
              diagnóstico gratuito
            </strong>{" "}
            da sua operação de atendimento. Nosso time entra em contato, entende como você atende
            hoje e mostra onde estão as vendas que escapam — sem compromisso.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={120} className="mt-10">
          <DiagnosticoForm />
        </RevealOnScroll>
      </div>
    </section>
  );
}

/** JSON-LD (Organization + WebSite + Service/Offers + FAQPage) para SEO e para bots de IA entenderem a página. */
function StructuredData() {
  const pageUrl = `${SITE_URL}/`;
  const logoUrl = `${SITE_URL}${logoGray}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${pageUrl}#organization`,
        name: "Conexi IA",
        url: pageUrl,
        logo: logoUrl,
        description:
          "Plataforma omnichannel com agentes de IA que atendem, qualificam e vendem no WhatsApp, Instagram, Facebook e site.",
      },
      {
        "@type": "WebSite",
        "@id": `${pageUrl}#website`,
        url: pageUrl,
        name: "Conexi IA",
        inLanguage: "pt-BR",
        publisher: { "@id": `${pageUrl}#organization` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Atendimento e vendas com agentes de IA para WhatsApp, Instagram e Facebook",
        description:
          "Agentes de IA que atendem, qualificam leads e vendem 24 horas por dia no WhatsApp, Instagram, Facebook e site.",
        provider: { "@id": `${pageUrl}#organization` },
        areaServed: "BR",
        url: `${pageUrl}#planos`,
        offers: PLANS.flatMap((plan) => [
          {
            "@type": "Offer",
            name: `Plano ${plan.name} (mensal)`,
            price: plan.monthlyPrice.toFixed(2),
            priceCurrency: "BRL",
            description: plan.tag,
            url: `${pageUrl}#planos`,
          },
          {
            "@type": "Offer",
            name: `Plano ${plan.name} (anual, ${ANNUAL_DISCOUNT_PERCENT}% de desconto)`,
            price: plan.annualTotal.toFixed(2),
            priceCurrency: "BRL",
            description: plan.tag,
            url: `${pageUrl}#planos`,
          },
        ]),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <StructuredData />
      <Header />
      <Hero />
      <StatsBar />
      <Pains />
      <Agitation />
      <LeadArrived />
      <Solution />
      <HowItWorks />
      <Benefits />
      <Comparison />
      <Plans />
      <ForWho />
      {/* Sessão 11 (Prova Social) oculta até haver depoimentos reais, conforme copy */}
      <FAQ />
      <FinalForm />
      <Footer />
    </main>
  );
}
