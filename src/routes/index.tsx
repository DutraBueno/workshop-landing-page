import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Camera, Video, Award, Shirt, Clock, MapPin, Calendar, CheckCircle2,
  Film, Lightbulb, Users, Zap, Star, ChevronDown, MessageCircle, Sparkles,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Logo } from "@/components/Logo";
import heroImg from "@/assets/hero.jpg";
import instructorImg from "@/assets/instructor.jpg";
import studioImg from "@/assets/studio.jpg";
import videoSetImg from "@/assets/videoset.jpg";

const EVENT_DATE = new Date("2026-09-12T08:00:00-03:00");
const WHATSAPP_URL = "https://wa.me/5561981935774?text=Quero%20garantir%20minha%20vaga%20no%20Workshop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Workshop Vivendo de Audiovisual | Daniel Dutra" },
      { name: "description", content: "Treinamento 100% presencial e prático em Sobradinho/DF. Domine fotografia e vídeo em 1 dia. 12 de Setembro." },
      { property: "og:title", content: "Workshop Vivendo de Audiovisual" },
      { property: "og:description", content: "Imersão presencial de 10h em fotografia e produção audiovisual. Vagas limitadas." },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useCountdown(target: Date) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

function GoldButton({
  children, href, variant = "solid", className = "", size = "md", onClick,
}: { children: React.ReactNode; href?: string; variant?: "solid" | "outline"; className?: string; size?: "md" | "lg"; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-[1.02] cursor-pointer";
  const sizes = { md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-base" };
  const styles = variant === "solid"
    ? "bg-gradient-gold text-primary-foreground shadow-gold hover:shadow-[0_25px_70px_-15px_oklch(0.82_0.13_85/0.5)]"
    : "border border-gold/40 text-gold hover:bg-gold/10";
  return (
    <a href={href || "#"} onClick={onClick} className={`${base} ${sizes[size]} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
      <span className="h-px w-8 bg-gold" />
      {children}
    </div>
  );
}

const REGISTRATION_URL = "https://loja.infinitepay.io//vivendodeaudiovisual/avj5878-workshop-vivendo-de-audiovisual";

function Index() {
  const { d, h, m, s } = useCountdown(EVENT_DATE);

  const handleRegistrationRedirect = () => {
    window.open(REGISTRATION_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Logo />
          <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 text-gold" />
            <span>12 SET · Sobradinho/DF</span>
          </div>
          <button
            onClick={handleRegistrationRedirect}
            className="hidden sm:inline-flex items-center rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground cursor-pointer hover:scale-[1.02] transition-transform"
          >
            Garantir vaga
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-32">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-50" width={1920} height={1280} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <SectionLabel>Workshop Presencial · Edição 2026</SectionLabel>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]">
              Aprenda <span className="text-gradient-gold">Fotografia e Vídeo</span> na Prática em Apenas 1 Dia
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Um treinamento 100% presencial e prático para quem deseja dominar os fundamentos da
              fotografia e da produção audiovisual, aprendendo diretamente em estúdio e em cenário
              real de gravação.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-xl">
              {[
                { i: Clock, t: "10 horas de imersão prática" },
                { i: Camera, t: "Fotografia e Vídeo no mesmo treinamento" },
                { i: Award, t: "Certificado incluso" },
                { i: Shirt, t: "Camiseta oficial inclusa" },
                { i: Zap, t: "Vagas limitadas" },
              ].map(({ i: Icon, t }) => (
                <li key={t} className="flex items-center gap-3 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                    <Icon className="h-4 w-4 text-gold" />
                  </span>
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <GoldButton onClick={handleRegistrationRedirect} size="lg">
                Quero garantir minha vaga
              </GoldButton>
              <GoldButton href="#programa" variant="outline" size="lg">
                Ver o programa
              </GoldButton>
            </div>
          </div>

          {/* Countdown card */}
          <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl border border-gold/20 bg-surface/80 backdrop-blur-xl p-8 shadow-elegant">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                Faltam
              </div>
              <div className="grid grid-cols-4 gap-3 mt-4">
                {[
                  { v: d, l: "Dias" },
                  { v: h, l: "Horas" },
                  { v: m, l: "Min" },
                  { v: s, l: "Seg" },
                ].map(({ v, l }) => (
                  <div key={l} className="text-center rounded-xl bg-background/60 border border-border py-4">
                    <div className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold tabular-nums">
                      {String(v).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-3 text-sm">
                <Row icon={Calendar} label="Data" value="12 de Setembro" />
                <Row icon={Clock} label="Horário" value="08h às 18h" />
                <Row icon={MapPin} label="Local" value="GODigital Business Hub – Sobradinho/DF" />
                <Row icon={Sparkles} label="Modalidade" value="Presencial · 100% prático" />
              </div>
              <div className="mt-6 gold-divider" />
              <button
                onClick={handleRegistrationRedirect}
                className="mt-6 w-full py-3 bg-gold/10 hover:bg-gold/20 text-gold font-bold uppercase tracking-wider text-xs rounded-xl border border-gold/30 cursor-pointer transition-colors"
              >
                Investimento a partir de 12x R$ 49,97
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <Section id="para-quem">
        <SectionLabel>Para Quem é</SectionLabel>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold max-w-3xl">
          Este workshop foi criado para <span className="text-gradient-gold">quem leva audiovisual a sério</span>.
        </h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Iniciantes que desejam aprender fotografia e vídeo da forma correta",
            "Criadores de conteúdo",
            "Fotógrafos que desejam migrar para o vídeo",
            "Videomakers iniciantes",
            "Profissionais que desejam melhorar a qualidade de suas entregas",
            "Pessoas que desejam transformar o audiovisual em uma fonte de renda",
          ].map((t, i) => (
            <div key={i} className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:border-gold/40 hover:bg-surface-elevated">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold mb-4 group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-all">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">{t}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROGRAMA */}
      <Section id="programa" className="bg-surface/40">
        <div className="text-center">
          <SectionLabel>O Que Você Vai Aprender</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
            4 módulos. <span className="text-gradient-gold">1 dia transformador.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Module
            n="01"
            icon={Camera}
            title="Fundamentos da Fotografia"
            items={["ISO", "Velocidade do obturador", "Abertura do diafragma", "Exposição", "Composição", "Enquadramento", "Direção de pessoas"]}
          />
          <Module
            n="02"
            icon={Video}
            title="Fundamentos do Vídeo"
            items={["FPS", "Resolução", "Perfil de imagem", "Movimentos de câmera", "Captação de áudio", "Iluminação para vídeo"]}
          />
          <Module
            n="03"
            icon={Lightbulb}
            title="Estúdio Fotográfico"
            items={["Montagem de cenário", "Posicionamento de luz", "Configuração de equipamentos", "Retratos profissionais", "Direção prática"]}
          />
          <Module
            n="04"
            icon={Film}
            title="Set de Produção Audiovisual"
            items={["Montagem completa de set", "Organização da produção", "Fluxo profissional", "Exercícios práticos", "Simulação de gravações reais"]}
          />
        </div>
      </Section>

      {/* EXPERIÊNCIA PRÁTICA */}
      <Section id="pratica">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={studioImg} alt="Estúdio fotográfico" className="rounded-2xl border border-border aspect-[3/4] object-cover w-full animate-fade-up" width={1280} height={960} loading="lazy" />
            <img src={videoSetImg} alt="Set de vídeo" className="rounded-2xl border border-border aspect-[3/4] object-cover w-full mt-12 animate-fade-up" style={{ animationDelay: "0.15s" }} width={1280} height={960} loading="lazy" />
          </div>
          <div>
            <SectionLabel>Experiência Prática</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
              Aqui você não vai <span className="text-gradient-gold">apenas assistir</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">Durante o workshop você irá:</p>
            <ul className="mt-6 space-y-3">
              {[
                "Configurar câmeras",
                "Trabalhar com iluminação",
                "Fotografar em estúdio",
                "Participar de gravações",
                "Entender o fluxo real de uma produção audiovisual",
                "Aprender através da prática",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* O QUE ESTÁ INCLUSO */}
      <Section id="incluso" className="bg-surface/40">
        <div className="text-center">
          <SectionLabel>Sua imersão completa</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">O que está <span className="text-gradient-gold">incluso</span></h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { i: Camera, t: "Workshop presencial" },
            { i: Sparkles, t: "Material de apoio" },
            { i: Award, t: "Certificado de conclusão" },
            { i: Shirt, t: "Camiseta oficial do evento" },
            { i: Users, t: "Networking com profissionais" },
            { i: Star, t: "Coffee Break" },
          ].map(({ i: Icon, t }) => (
            <div key={t} className="rounded-2xl border border-gold/20 bg-surface p-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <span className="font-medium">{t}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* INSTRUTOR */}
      <Section id="instrutor">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
              <img src={instructorImg} alt="Daniel Dutra" className="relative rounded-3xl border border-gold/30 w-full aspect-[4/5] object-cover" width={1024} height={1280} loading="lazy" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionLabel>Seu Instrutor</SectionLabel>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold">Daniel Dutra</h2>
            <div className="mt-2 text-gold text-sm uppercase tracking-widest">Fotógrafo & Videomaker</div>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Com mais de uma década de experiência no mercado audiovisual, atua em produções
              corporativas, institucionais, eventos, publicidade e conteúdo digital.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ao longo da carreira participou de projetos para empresas, órgãos públicos e grandes
              produções, acumulando experiência prática que agora será compartilhada em uma imersão
              presencial focada em resultados reais.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "10+", l: "Anos de mercado" },
                { v: "500+", l: "Produções" },
                { v: "100%", l: "Prático" },
              ].map(({ v, l }) => (
                <div key={l} className="rounded-2xl border border-border bg-surface p-4 text-center">
                  <div className="font-display text-3xl font-bold text-gradient-gold">{v}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* DEPOIMENTOS */}
      <Section id="depoimentos" className="bg-surface/40">
        <div className="text-center">
          <SectionLabel>Provas Sociais</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
            Quem já aprendeu comigo <span className="text-gradient-gold">recomenda</span>
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { n: "Marina Costa", r: "Criadora de conteúdo", t: "Saí do workshop com clareza absoluta sobre iluminação e composição. O conteúdo prático faz toda a diferença." },
            { n: "Rafael Almeida", r: "Fotógrafo", t: "Conseguir migrar pro vídeo era meu objetivo há anos. Em um único dia o Daniel me deu o mapa completo." },
            { n: "Juliana Pires", r: "Videomaker", t: "Set montado de verdade, equipamento na mão, direção real. É outro nível de aprendizado." },
            { n: "Pedro Henrique", r: "Empreendedor", t: "Hoje produzo o audiovisual da minha própria empresa com qualidade profissional. Investimento que se pagou rápido." },
            { n: "Camila Rocha", r: "Iniciante", t: "Eu não tinha câmera e mesmo assim aprendi muito. A didática do Daniel é incrível." },
            { n: "Bruno Lima", r: "Publicitário", t: "Os fluxos profissionais que aprendi mudaram a forma como nossa agência entrega projetos." },
          ].map(({ n, r, t }) => (
            <div key={n} className="rounded-2xl border border-border bg-surface p-6 hover:border-gold/30 transition-colors">
              <div className="flex gap-1 text-gold mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">"{t}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {n.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{n}</div>
                  <div className="text-xs text-muted-foreground">{r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* INVESTIMENTO */}
      <Section id="inscricao">
        <div className="text-center">
          <SectionLabel>Investimento</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
            Garanta sua vaga no <span className="text-gradient-gold">lote atual</span>
          </h2>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative rounded-3xl border-2 border-gold/40 bg-gradient-to-b from-surface to-surface-elevated p-8 sm:p-12 shadow-gold overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-gold px-6 py-2 rounded-bl-2xl text-primary-foreground text-xs font-bold uppercase tracking-widest">
              Lote Atual
            </div>

            <div className="mt-6 text-center">
              <div className="text-sm text-muted-foreground line-through">de R$ 600,00 por</div>
              <div className="mt-2 flex items-baseline justify-center gap-2">
                <span className="font-display text-6xl sm:text-7xl font-bold text-gradient-gold">R$ 450</span>
                <span className="text-muted-foreground">,00</span>
              </div>
              <div className="mt-2 text-sm text-gold uppercase tracking-widest font-semibold">
                10% OFF · Pagamento à vista no PIX
              </div>
              <div className="mt-6 inline-block rounded-full bg-background/60 border border-border px-6 py-2 text-sm">
                ou <span className="font-bold text-foreground">12x de R$ 49,90</span> sem juros no cartão
              </div>
            </div>

            <div className="gold-divider my-10" />

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                "Workshop presencial 100% prático",
                "Material de apoio",
                "Certificado de conclusão",
                "Camiseta oficial",
                "Networking",
                "Coffee Break",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <GoldButton onClick={handleRegistrationRedirect} size="lg" className="w-full">
              Garantir minha vaga agora
            </GoldButton>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Pagamento seguro · Vagas limitadas
            </p>
          </div>
        </div>

        {/* Escassez */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-destructive/30 bg-destructive/5 p-6 flex gap-4 items-start">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/20 text-destructive flex-shrink-0">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <div className="font-semibold text-foreground">Atenção: vagas limitadas</div>
            <p className="mt-1 text-sm text-muted-foreground">
              As vagas são limitadas para garantir acompanhamento individual durante as atividades
              práticas. Quando preenchidas, as inscrições serão encerradas.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-surface/40">
        <div className="text-center">
          <SectionLabel>Dúvidas Frequentes</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Tudo o que você <span className="text-gradient-gold">precisa saber</span></h2>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Preciso ter câmera?", a: "Não. Você pode participar mesmo sem equipamento próprio." },
              { q: "É para iniciantes?", a: "Sim. O conteúdo foi estruturado para quem está começando." },
              { q: "Receberei certificado?", a: "Sim. Todos os participantes receberão certificado de conclusão." },
              { q: "O workshop é teórico ou prático?", a: "O treinamento é predominantemente prático, com exercícios e demonstrações durante todo o dia." },
              { q: "A camiseta está inclusa?", a: "Sim. A camiseta oficial do evento está inclusa para todos os participantes." },
            ].map(({ q, a }, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border bg-surface px-6 data-[state=open]:border-gold/40">
                <AccordionTrigger className="text-left hover:no-underline py-5 font-semibold">
                  <span className="flex items-center gap-3">
                    <ChevronDown className="h-4 w-4 text-gold transition-transform" />
                    {q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-7">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-30" loading="lazy" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <SectionLabel>Sua próxima jornada</SectionLabel>
          <h2 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Sua evolução no audiovisual <span className="text-gradient-gold">começa aqui</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprenda fotografia e vídeo de forma prática, presencial e aplicada ao mercado real.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-surface/60 backdrop-blur px-6 py-3">
            <Calendar className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium">12 de Setembro</span>
            <span className="text-border">·</span>
            <MapPin className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium">GODigital Business Hub — Sobradinho/DF</span>
          </div>
          <div className="mt-10">
            <GoldButton onClick={handleRegistrationRedirect} size="lg">
              Inscrever-me no workshop
            </GoldButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Workshop Vivendo de Audiovisual · Sobradinho/DF
          </p>
        </div>
      </footer>

      {/* WhatsApp floating */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform animate-float"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Sticky bottom CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 border-t border-gold/20 bg-background/95 backdrop-blur-xl sm:hidden">
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Lote atual</div>
            <div className="text-sm font-bold">
              <span className="text-gradient-gold">R$ 450</span> <span className="text-muted-foreground font-normal text-xs font-sans">à vista</span>
            </div>
          </div>
          <button
            onClick={handleRegistrationRedirect}
            className="inline-flex items-center rounded-full bg-gradient-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground cursor-pointer"
          >
            Quero minha vaga
          </button>
        </div>
      </div>


    </div>
  );
}

function Row({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="h-4 w-4 text-gold" />
        <span className="text-xs uppercase tracking-wider">{label}</span>
      </div>
      <span className="text-sm font-medium text-right">{value}</span>
    </div>
  );
}

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

function Module({
  n, icon: Icon, title, items,
}: { n: string; icon: React.ComponentType<{ className?: string }>; title: string; items: string[] }) {
  return (
    <div className="group relative rounded-3xl border border-border bg-surface p-8 transition-all hover:border-gold/40 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold text-primary-foreground">
          <Icon className="h-7 w-7" />
        </div>
        <span className="font-display text-5xl font-bold text-gold/20 group-hover:text-gold/40 transition-colors">{n}</span>
      </div>
      <h3 className="font-display text-2xl font-bold mb-4">
        <span className="text-gold text-sm uppercase tracking-widest block mb-1 font-sans">Módulo {n}</span>
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm text-foreground/85">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
