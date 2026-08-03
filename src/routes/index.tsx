import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  Clock,
  DollarSign,
  Facebook,
  Globe,
  Headphones,
  Instagram,
  LineChart,
  MessageCircle,
  Moon,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { WhatsAppMockup } from "@/components/WhatsAppMockup";
import { DiagnosticoForm } from "@/components/DiagnosticoForm";
import logoGray from "@/assets/conexi-logo-gray.webp";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function Logo() {
  return (
    <img
      src={logoGray}
      alt="Conexi IA"
      className="h-7 w-auto sm:h-8"
      loading="eager"
      decoding="async"
    />
  );
}

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
            Seu melhor vendedor,{" "}
            <span className="text-primary">24 horas por dia.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            A Conexi IA transforma seu WhatsApp, Instagram, Facebook e site em uma máquina de
            vendas: agentes de IA humanizados que respondem em segundos, qualificam e vendem —
            por até <strong className="text-foreground">70% menos</strong> que o custo de um
            atendente.
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
              <Check className="h-4 w-4 text-primary" /> Implantação guiada em até 7 dias
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
    { n: "até -70%", l: "em custos com atendimento e folha de pagamento" },
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
      t: "Leads esfriando na fila",
      d: "O lead chega quente do anúncio, espera 40 minutos por um \"oi\"… e compra do concorrente.",
    },
    {
      icon: Moon,
      t: "Ninguém responde à noite",
      d: "Boa parte dos seus leads chega fora do horário comercial. Hoje, todos ficam sem resposta até o dia seguinte.",
    },
    {
      icon: Users,
      t: "Equipe sobrecarregada",
      d: "Seu time apaga incêndio o dia inteiro e, mesmo assim, o SLA estoura e o cliente reclama.",
    },
    {
      icon: DollarSign,
      t: "Folha de pagamento pesada",
      d: "Escalar atendimento contratando gente custa de R$ 1.200 a R$ 4.900 por pessoa/mês — e bons vendedores são raros.",
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
            Quantas vendas você perdeu essa semana por demora na resposta?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Se você investe em tráfego pago e atende pelo WhatsApp, provavelmente vive isso todos
            os dias:
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
            <span className="text-primary">dinheiro do seu tráfego</span> indo pro lixo.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-dark-muted">
            Você paga caro pelo clique. Quando o lead espera, o timing da venda morre: o CAC
            sobe, a verba de anúncio rende menos e o concorrente que respondeu primeiro leva o
            cliente que <strong className="text-surface-dark-foreground">você pagou para atrair</strong>.
          </p>
          <div className="mt-8">
            <a href="#formulario" className="btn-primary">
              Quero parar de perder leads
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
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
      msg: "Quero o plano PRO, como faço?",
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

/* SESSÃO 6 — COMO FUNCIONA */
function HowItWorks() {
  const steps = [
    {
      t: "Diagnóstico (1h via Meet)",
      d: "Entendemos sua operação e criamos os agentes de IA junto com você, aplicando nossa expertise em engenharia de prompt e comportamento de IA.",
    },
    {
      t: "Implantação guiada (4h)",
      d: "Ao lado da sua equipe, conectamos os canais, criamos os acessos e desenhamos seu processo comercial dentro da plataforma.",
    },
    {
      t: "Acompanhamento contínuo",
      d: "Suporte próximo via WhatsApp para ajustar, otimizar e escalar os resultados. No plano PRO, gerente de contas dedicado.",
    },
  ];
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Do zero ao ar em até 7 dias — de mãos dadas com nosso time.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Você não configura nada sozinho. A consultoria faz parte da solução.
          </p>
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <RevealOnScroll
              key={s.t}
              delay={i * 100}
              className="card-lift rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground font-display text-lg font-bold">
                {i + 1}
              </div>
              <h3 className="font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SESSÃO 7 — BENEFÍCIOS */
function Benefits() {
  const items = [
    {
      icon: TrendingUp,
      t: "Mais vendas com o mesmo tráfego",
      d: "Resposta instantânea + qualificação automática = até +39% na conversão dos leads que você já paga para atrair.",
    },
    {
      icon: DollarSign,
      t: "Custo até 70% menor",
      d: "Um agente de IA custa uma fração de um atendente humano — e trabalha 24/7, sem férias, sem turnover.",
    },
    {
      icon: Zap,
      t: "Escala sem contratar",
      d: "Dobre o volume de atendimento sem abrir uma vaga. A IA absorve os picos; sua estrutura continua enxuta.",
    },
    {
      icon: Users,
      t: "Time focado no que importa",
      d: "A IA resolve o repetitivo e o fora de horário; seus humanos entram apenas nas conversas de maior valor.",
    },
    {
      icon: MessageCircle,
      t: "Atendimento que parece humano",
      d: "Ritmo natural de resposta, personalidade própria e conhecimento profundo do negócio: a maioria nem percebe que é IA.",
    },
    {
      icon: BarChart3,
      t: "Previsibilidade total",
      d: "Dashboards, BI e rastreamento de conversões: do primeiro \"oi\" ao fechamento, seu funil inteiro em números.",
    },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            O que muda na sua operação com a Conexi IA
          </h2>
        </RevealOnScroll>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <RevealOnScroll
              key={it.t}
              delay={i * 60}
              className="card-lift rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{it.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-12 text-center">
          <a href="#formulario" className="btn-primary">
            Quero esses resultados na minha empresa
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
function PlanFeatures({ onClose }: { onClose: () => void }) {
  const features = [
    {
      category: "Canais de atendimento",
      items: [
        { name: "WhatsApp Oficial", start: true, standart: true, pro: true },
        { name: "Instagram Direct", start: true, standart: true, pro: true },
        { name: "Facebook Messenger", start: false, standart: true, pro: true },
        { name: "Webchat no site", start: false, standart: true, pro: true },
        { name: "Telegram", start: false, standart: "Em breve", pro: "Em breve" },
      ],
    },
    {
      category: "Agentes de IA",
      items: [
        { name: "Agentes inclusos", start: "2", standart: "5", pro: "10" },
        { name: "Agentes extras", start: "—", standart: "R$ 97/un.", pro: "R$ 97/un." },
        { name: "Treinamento customizado", start: true, standart: true, pro: true },
        { name: "Personalidade de voz da marca", start: false, standart: true, pro: true },
      ],
    },
    {
      category: "Volume e usuários",
      items: [
        { name: "Respostas de IA/mês", start: "500", standart: "1.000", pro: "2.000" },
        { name: "Respostas extras", start: "—", standart: "R$ 0,12", pro: "R$ 0,10" },
        { name: "Usuários da plataforma", start: "3", standart: "10", pro: "30" },
        { name: "Usuários extras", start: "—", standart: "R$ 47/un.", pro: "R$ 47/un." },
      ],
    },
    {
      category: "Inteligência e automação",
      items: [
        { name: "IA generativa de linguagem natural", start: true, standart: true, pro: true },
        { name: "Escolha de modelo de IA (OpenAI, Anthropic, Gemini, Groq)", start: false, standart: true, pro: true },
        { name: "Fluxos de qualificação de leads", start: true, standart: true, pro: true },
        { name: "Fluxos de recuperação de vendas", start: false, standart: true, pro: true },
        { name: "Fluxos prontos para provedores", start: false, standart: false, pro: true },
      ],
    },
    {
      category: "Dados e integrações",
      items: [
        { name: "Dashboards e BI", start: false, standart: true, pro: true },
        { name: "API de conversões", start: false, standart: true, pro: true },
        { name: "Integração com IXC / MK / SGP / Hubsoft", start: false, standart: false, pro: true },
        { name: "Webhook e API aberta", start: false, standart: "Limitada", pro: true },
      ],
    },
    {
      category: "Suporte e operação",
      items: [
        { name: "Implantação", start: "Grátis", standart: "Grátis", pro: "R$ 2.500" },
        { name: "Consultoria de especialistas", start: true, standart: true, pro: true },
        { name: "Acompanhamento por WhatsApp", start: true, standart: true, pro: true },
        { name: "SLA de resposta do suporte", start: "48h", standart: "24h", pro: "4h" },
        { name: "Gerente de contas dedicado", start: false, standart: false, pro: true },
        { name: "Auditoria mensal de conversas", start: false, standart: false, pro: true },
      ],
    },
  ];

  const plans = ["START", "STANDART", "PRO"];

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
    return <span className="text-sm font-medium text-surface-dark-foreground">{value}</span>;
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
                  <div className="px-4 py-3.5 text-sm text-surface-dark-muted sm:px-6">{item.name}</div>
                  <div className="grid place-items-center border-l border-surface-dark-border/60 px-4 py-3.5 sm:px-6">
                    {renderCell(item.start)}
                  </div>
                  <div className="grid place-items-center border-l border-surface-dark-border/60 px-4 py-3.5 sm:px-6">
                    {renderCell(item.standart)}
                  </div>
                  <div className="grid place-items-center border-l border-surface-dark-border/60 px-4 py-3.5 sm:px-6">
                    {renderCell(item.pro)}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </RevealOnScroll>

        <RevealOnScroll delay={150} className="mt-8 flex justify-center">
          <a href="#formulario" className="btn-primary">
            Quero um diagnóstico gratuito
            <ArrowRight className="h-4 w-4" />
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function Plans() {
  const plans = [
    {
      name: "START",
      price: "R$ 347,90",
      tag: "Para validar a IA na sua operação",
      features: [
        "2 agentes de IA",
        "500 respostas de IA/mês",
        "WhatsApp + Instagram",
        "3 usuários",
        "Implantação grátis",
      ],
      cta: "Começar com o START",
      href: "#checkout-start",
      highlight: false,
    },
    {
      name: "STANDART",
      price: "R$ 597,90",
      tag: "Para empresas em crescimento com tráfego pago ativo",
      features: [
        "5 agentes de IA",
        "1.000 respostas/mês",
        "+ Facebook e webchat",
        "Dashboards e BI",
        "API de conversões",
        "Use sua própria chave de IA (OpenAI, Anthropic, Gemini, Groq)",
        "10 usuários",
      ],
      cta: "Assinar o STANDART",
      href: "#checkout-standart",
      highlight: true,
      badge: "Mais escolhido",
    },
    {
      name: "PRO",
      price: "R$ 997,90",
      tag: "Para provedores de internet e alto volume",
      features: [
        "10 agentes de IA",
        "Integração com IXC, MK, SGP e Hubsoft",
        "Fluxos prontos (desbloqueio, 2ª via de boleto, status de conexão)",
        "SLA + auditoria",
        "Gerente de contas",
        "30 usuários",
        "Implantação R$ 2.500",
      ],
      cta: "Falar com um especialista",
      href: "#formulario",
      highlight: false,
    },
  ];

  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <>
      <section id="planos" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <RevealOnScroll className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Planos que se pagam no primeiro mês</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Um atendente humano custa de R$ 1.200 a R$ 4.900/mês e trabalha 8h por dia. A Conexi
              começa em <strong className="text-foreground">R$ 347,90</strong> — trabalhando 24/7.
            </p>
          </RevealOnScroll>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((p, i) => (
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
                  <span className="font-display text-4xl font-bold">{p.price}</span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={p.href}
                  className={`mt-8 ${p.highlight ? "btn-primary" : "btn-ghost-light"} w-full`}
                >
                  {p.cta}
                </a>
              </RevealOnScroll>
            ))}
          </div>

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

      {showFeatures && <PlanFeatures onClose={() => setShowFeatures(false)} />}
    </>
  );
}

/* SESSÃO 10 — PARA QUEM É */
function ForWho() {
  const chips = [
    { t: "Provedores de internet", star: true },
    { t: "Clínicas e consultórios" },
    { t: "Clínicas de estética" },
    { t: "Imobiliárias" },
    { t: "Agências de viagens" },
    { t: "Revendas de veículos" },
    { t: "Lojas e varejo consultivo" },
    { t: "Operações de suporte" },
  ];
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Feita para empresas que vivem de atendimento
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Se sua empresa recebe leads de tráfego pago ou tem alto volume de atendimento no
            WhatsApp, a Conexi foi feita para você.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10 flex flex-wrap justify-center gap-2.5">
          {chips.map((c) => (
            <span
              key={c.t}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
            >
              {c.star && <Star className="h-3.5 w-3.5 fill-primary text-primary" />}
              {c.t}
            </span>
          ))}
        </RevealOnScroll>

        <RevealOnScroll className="mx-auto mt-10 max-w-3xl rounded-2xl border-l-4 border-primary bg-card p-6 shadow-sm">
          <p className="text-foreground">
            <strong className="text-primary">Provedor de internet?</strong> O plano PRO integra
            com IXC, MK, SGP e Hubsoft e traz fluxos prontos: desbloqueio de confiança, 2ª via
            de boleto e status de conexão resolvidos pela IA.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* SESSÃO 12 — FAQ (sessão 11 oculta conforme copy) */
function FAQ() {
  const items = [
    {
      q: "Meus clientes vão perceber que é uma IA?",
      a: "Na maioria dos casos, não. A IA foi otimizada para simular um atendimento humano de alta conexão: ritmo natural de resposta, personalidade própria e conhecimento profundo da sua empresa. E quando a conversa exige, ela transfere para o seu time com todo o contexto.",
    },
    {
      q: "Em quanto tempo fica pronto?",
      a: "De 3 a 7 dias: 1h de diagnóstico via Meet, 4h de implementação guiada com sua equipe e acompanhamento contínuo pelo WhatsApp.",
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
      q: "Funciona com meu ERP de provedor?",
      a: "Sim. No plano PRO há integração com IXC, MK, SGP e Hubsoft, com fluxos prontos de desbloqueio, 2ª via de boleto e status de conexão.",
    },
    {
      q: "Vou precisar demitir minha equipe?",
      a: "Não é esse o objetivo. A IA absorve o volume repetitivo e o fora de horário; seu time foca nas conversas de maior valor. Você escala sem precisar contratar.",
    },
  ];
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
            Descubra quanto sua empresa está{" "}
            <span className="text-primary">deixando na mesa</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-surface-dark-muted">
            Preencha abaixo e receba um <strong className="text-surface-dark-foreground">
              diagnóstico gratuito
            </strong>{" "}
            da sua operação de atendimento. Nosso time entra em contato para mapear onde você
            perde vendas hoje — sem compromisso.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={120} className="mt-10">
          <DiagnosticoForm />
        </RevealOnScroll>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <Logo />
        <p>© {new Date().getFullYear()} Conexi IA. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <StatsBar />
      <Pains />
      <Agitation />
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
