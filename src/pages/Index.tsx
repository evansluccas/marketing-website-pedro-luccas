import { useState } from "react";
import techpiLogo from "@/assets/techpi-logo.png";
import { motion } from "framer-motion";
import {
  Zap, Shield, BarChart3, Cog, Globe, Smartphone,
  ArrowRight, MessageCircle, CheckCircle, Clock,
  TrendingUp, Database, Layers, Users, Target,
  Lightbulb, Code2, Rocket, Handshake,
  Send, AlertTriangle, FileSpreadsheet, Unlink, Timer,
  Play, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre desenvolvimento de software sob medida.";

/* ——— Decorative blob ——— */
const Blob = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full pointer-events-none ${className}`} />
);

/* ——— Section wrapper ——— */
const Section = ({
  children,
  className = "",
  alt = false,
  id,
  curved = false,
}: {
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
  curved?: boolean;
}) => (
  <section
    id={id}
    className={`relative py-24 md:py-32 lg:py-36 overflow-hidden ${alt ? "bg-section-alt" : "bg-background"} ${className}`}
  >
    {curved && (
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
          <path d="M0,60 C480,0 960,0 1440,60 L1440,0 L0,0 Z" fill={alt ? "hsl(var(--background))" : "hsl(var(--section-alt))"} />
        </svg>
      </div>
    )}
    {children}
  </section>
);

/* ——— Section header with styled tag ——— */
const SectionHeader = ({
  tag,
  title,
  highlight,
  subtitle,
  center = true,
}: {
  tag: string;
  title: string;
  highlight: string;
  subtitle?: string;
  center?: boolean;
}) => (
  <div className={center ? "text-center" : ""}>
    <div className={`${center ? "flex justify-center" : ""} mb-5`}>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary italic">
        <span className="w-8 h-[2px] bg-primary rounded-full" />
        {tag}
      </span>
    </div>
    <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-5xl font-bold leading-tight mb-4">
      {title} <span className="gradient-text">{highlight}</span>
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

/* ——— Floating stat badge ——— */
const StatBadge = ({ value, label, className }: { value: string; label: string; className?: string }) => (
  <motion.div
    className={`absolute bg-card rounded-2xl shadow-xl shadow-primary/10 border border-border/40 px-5 py-3 z-10 ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.8, duration: 0.5 }}
  >
    <p className="font-display text-2xl font-bold text-primary">{value}</p>
    <p className="text-xs text-muted-foreground font-medium">{label}</p>
  </motion.div>
);

const Index = () => {
  const [formData, setFormData] = useState({ nome: "", empresa: "", whatsapp: "", descricao: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Novo lead:\nNome: ${formData.nome}\nEmpresa: ${formData.empresa}\nWhatsApp: ${formData.whatsapp}\nDescrição: ${formData.descricao}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* ═══════════════════════ NAV ═══════════════════════ */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={techpiLogo} alt="Techπ" className="h-9" />
          </a>
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-1 rounded-full bg-primary/5 border border-primary/10 px-2 py-1.5">
              <a href="#solucoes" className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background transition-all">Soluções</a>
              <a href="#como-funciona" className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background transition-all">Como Funciona</a>
              <a href="#diferenciais" className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background transition-all">Diferenciais</a>
              <a href="#faq" className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background transition-all">FAQ</a>
            </div>
          </div>
          <a href="#contato">
            <Button size="sm" className="gradient-primary border-0 text-primary-foreground rounded-full px-6 shadow-lg shadow-primary/20 hover:opacity-85 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300">
              Falar Conosco
            </Button>
          </a>
        </div>
      </nav>

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-background overflow-hidden">
        {/* Decorative blobs */}
        <Blob className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/5 blur-[100px] -top-20 right-0" />
        <Blob className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-accent/5 blur-[80px] bottom-0 left-10" />
        <Blob className="w-40 h-40 border-[30px] border-primary/5 top-32 right-[10%] hidden md:block" />
        <Blob className="w-24 h-24 border-[15px] border-accent/8 bottom-20 left-[5%] hidden md:block" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left - Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-sm font-semibold text-primary italic mb-6">
                <span className="w-8 h-[2px] bg-primary rounded-full" />
                Software sob medida
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                Transforme processos da sua empresa com{" "}
                <span className="gradient-text">software sob medida</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
                Criamos sistemas personalizados para automatizar operações, reduzir custos e acelerar o crescimento do seu negócio.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a href="#contato">
                   <Button size="lg" className="gradient-primary border-0 text-primary-foreground text-base px-8 h-13 rounded-full shadow-lg shadow-primary/20 hover:opacity-85 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300">
                    Solicitar diagnóstico gratuito
                  </Button>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-foreground font-medium">
                  <span className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                    <Play className="w-4 h-4 text-primary ml-0.5" />
                  </span>
                  <span className="text-sm">Como funciona</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right - Dashboard mockup with floating stats */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <StatBadge value="123+" label="Projetos Entregues" className="top-4 -left-4 md:-left-8" />
              <StatBadge value="99.9%" label="Uptime Garantido" className="bottom-12 -right-2 md:-right-6" />

              <div className="rounded-3xl border border-border/40 bg-card shadow-2xl shadow-primary/8 p-2">
                <div className="rounded-2xl bg-muted/30 p-5 md:p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-accent/50" />
                    <div className="w-3 h-3 rounded-full bg-primary/30" />
                    <span className="text-xs text-muted-foreground ml-3 font-mono">dashboard.techpi.app</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Receita", value: "R$ 284k", icon: TrendingUp, color: "text-primary" },
                      { label: "Clientes", value: "1.247", icon: Users, color: "text-accent" },
                      { label: "Automações", value: "89", icon: Cog, color: "text-primary" },
                      { label: "Uptime", value: "99.9%", icon: Shield, color: "text-accent" },
                    ].map((item, i) => (
                      <div key={i} className="rounded-xl bg-card p-4 border border-border/30">
                        <item.icon className={`w-4 h-4 ${item.color} mb-2 opacity-70`} />
                        <p className="text-xl font-bold font-display">{item.value}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 rounded-xl bg-card p-4 border border-border/30 h-24 flex items-end gap-[3px]">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm gradient-primary opacity-80" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ DOR ═══════════════════════ */}
      <Section alt curved>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <SectionHeader
              tag="O Problema"
              title="Sua empresa ainda depende de"
              highlight="processos manuais?"
            />

            <div className="grid md:grid-cols-2 gap-5 mt-16 mb-16">
              {[
                { icon: FileSpreadsheet, title: "Planilhas infinitas", desc: "Dados espalhados em dezenas de planilhas sem controle centralizado." },
                { icon: Timer, title: "Processos manuais", desc: "Horas perdidas com tarefas repetitivas que poderiam ser automáticas." },
                { icon: Unlink, title: "Sistemas desconectados", desc: "Ferramentas que não conversam entre si geram retrabalho constante." },
                { icon: AlertTriangle, title: "Falta de controle", desc: "Sem visibilidade sobre métricas e dados importantes do negócio." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="border-border/40 bg-card hover:border-destructive/20 transition-all duration-300 h-full shadow-sm hover:shadow-md">
                    <CardContent className="p-6 flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-2xl bg-destructive/8 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-destructive/80" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-base mb-1.5">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center">
              <div className="inline-block rounded-2xl bg-primary/5 border border-primary/10 px-8 py-6">
                <blockquote className="font-display text-xl md:text-2xl font-semibold text-foreground/80 italic leading-snug">
                  "Você não deve se adaptar ao sistema.{" "}
                  <span className="gradient-text not-italic font-bold">O sistema deve se adaptar a você.</span>"
                </blockquote>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════ SOLUÇÕES ═══════════════════════ */}
      <Section id="solucoes" curved>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <SectionHeader
              tag="Nossos Serviços"
              title="Soluções que entregam"
              highlight="resultado"
              subtitle="Desenvolvemos soluções digitais completas, do planejamento à implementação, com foco no resultado do seu negócio."
            />

            <div className="grid md:grid-cols-3 gap-6 mt-16 mb-14">
              {[
                { icon: Code2, title: "Software Sob Medida", desc: "Sistemas criados exclusivamente para as necessidades da sua empresa.", featured: false },
                { icon: Layers, title: "ERP, CRM & Dashboards", desc: "Sistemas internos para gestão completa do seu negócio.", featured: true },
                { icon: Cog, title: "Automação de Processos", desc: "Elimine tarefas repetitivas e ganhe eficiência operacional.", featured: false },
                { icon: Globe, title: "Integrações", desc: "Conecte todas as ferramentas da sua empresa em um só lugar.", featured: false },
                { icon: Smartphone, title: "Plataformas Web & Apps", desc: "Aplicações modernas, rápidas e responsivas.", featured: true },
                { icon: Database, title: "Infraestrutura Escalável", desc: "Soluções que crescem junto com o seu negócio.", featured: false },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className={`h-full transition-all duration-300 overflow-hidden relative group ${
                    item.featured
                      ? "gradient-primary text-primary-foreground border-0 shadow-xl shadow-primary/20 scale-[1.02]"
                      : "border-border/40 bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                  }`}>
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-bold font-display ${item.featured ? "text-primary-foreground/40" : "text-primary/15"}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <CardContent className="p-7 pt-8">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                        item.featured
                          ? "bg-primary-foreground/15"
                          : "bg-primary/8 group-hover:bg-primary/15 transition-colors"
                      }`}>
                        <item.icon className={`w-7 h-7 ${item.featured ? "text-primary-foreground" : "text-primary"}`} />
                      </div>
                      <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                      <p className={`text-sm leading-relaxed mb-5 ${item.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{item.desc}</p>
                      <a href="#contato" className={`inline-flex items-center gap-1.5 text-sm font-medium ${
                        item.featured ? "text-primary-foreground" : "text-primary"
                      } hover:gap-3 transition-all`}>
                        Saiba mais <ChevronRight className="w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center">
              <a href="#contato">
                <Button size="lg" className="gradient-primary border-0 text-primary-foreground text-base px-8 h-13 rounded-full shadow-lg shadow-primary/20 hover:opacity-85 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300">
                  Falar com um especialista <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════ BENEFÍCIOS ═══════════════════════ */}
      <Section alt curved>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <SectionHeader
              tag="Benefícios"
              title="Resultados que"
              highlight="transformam"
            />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16 max-w-5xl mx-auto">
              {[
                { icon: TrendingUp, label: "Mais produtividade", value: "+40%" },
                { icon: BarChart3, label: "Redução de custos", value: "-30%" },
                { icon: Database, label: "Controle total", value: "100%" },
                { icon: Target, label: "Personalizado", value: "Sob medida" },
                { icon: Rocket, label: "Escalabilidade", value: "∞" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-3xl bg-card border border-border/40 shadow-md flex items-center justify-center mb-4 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="font-display text-lg font-bold gradient-text mb-1">{item.value}</span>
                  <span className="text-sm text-muted-foreground font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════ COMO FUNCIONA ═══════════════════════ */}
      <Section id="como-funciona" curved>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <SectionHeader
              tag="Processo"
              title="Simples, transparente e"
              highlight="eficiente"
            />

            <div className="grid md:grid-cols-4 gap-6 mt-16">
              {[
                { step: "01", icon: Lightbulb, title: "Entendimento", desc: "Ouvimos suas necessidades e mapeamos os processos atuais." },
                { step: "02", icon: Target, title: "Planejamento", desc: "Desenhamos a melhor solução técnica para o seu caso." },
                { step: "03", icon: Code2, title: "Desenvolvimento", desc: "Construímos o software com tecnologias modernas e seguras." },
                { step: "04", icon: Rocket, title: "Implementação", desc: "Entregamos, treinamos e acompanhamos os resultados." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div className="relative h-full text-center p-8 rounded-3xl border border-border/40 bg-card hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-block gradient-primary text-primary-foreground text-xs font-bold font-display px-4 py-1.5 rounded-full shadow-md shadow-primary/20">
                        {item.step}
                      </span>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mx-auto mb-5 mt-4 group-hover:bg-primary/15 transition-colors">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════ DIFERENCIAIS ═══════════════════════ */}
      <Section alt id="diferenciais" curved>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <SectionHeader
              tag="Por que nós"
              title="O que nos torna"
              highlight="diferentes"
            />

            <div className="grid md:grid-cols-2 gap-6 mt-16">
              {[
                { icon: Target, title: "Foco em resultado", desc: "Não entregamos apenas tecnologia. Entregamos soluções que geram impacto real no seu negócio." },
                { icon: Shield, title: "Soluções sob medida", desc: "Nada de sistemas genéricos. Cada projeto é único e pensado exclusivamente para você." },
                { icon: Handshake, title: "Comunicação clara", desc: "Sem termos técnicos desnecessários. Você entende cada etapa do processo." },
                { icon: Users, title: "Acompanhamento próximo", desc: "Estamos ao seu lado desde o primeiro contato até após a entrega." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="border-border/40 bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-7 flex gap-5 items-start">
                      <div className="w-13 h-13 rounded-2xl gradient-primary flex items-center justify-center shrink-0 shadow-md shadow-primary/15">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-1.5">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════ PROVA SOCIAL ═══════════════════════ */}
      <Section curved>
        <Blob className="w-[300px] h-[300px] bg-primary/3 blur-[100px] -top-20 right-0" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <SectionHeader
              tag="Impacto"
              title="Números que"
              highlight="falam por si"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 mb-20">
              {[
                { value: "40%", label: "Aumento de produtividade" },
                { value: "60%", label: "Redução de retrabalho" },
                { value: "3x", label: "Mais velocidade operacional" },
                { value: "99.9%", label: "Disponibilidade dos sistemas" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div className="py-8 px-5 rounded-3xl bg-card border border-border/40 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                    <p className="font-display text-4xl md:text-5xl font-bold gradient-text mb-3">{item.value}</p>
                    <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="max-w-2xl mx-auto">
              <div className="rounded-2xl bg-primary/5 border border-primary/10 px-8 py-6 text-left">
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "Empresas que automatizam processos podem aumentar a produtividade em até 40% e reduzir custos operacionais significativamente."
                </p>
                <footer className="mt-4 text-sm font-semibold text-foreground">— McKinsey & Company</footer>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════ FAQ ═══════════════════════ */}
      <Section alt id="faq" curved>
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <SectionHeader
              tag="Dúvidas"
              title="Perguntas"
              highlight="frequentes"
            />

            <motion.div variants={fadeUp} className="mt-14">
              <Accordion type="single" collapsible className="space-y-3">
                {[
                  {
                    q: "Isso é caro?",
                    a: "O investimento em software sob medida se paga rapidamente com a redução de custos operacionais e aumento de produtividade. Trabalhamos com diferentes modelos de pagamento para se adequar ao seu orçamento. Oferecemos um diagnóstico gratuito para entender sua necessidade e apresentar a melhor proposta.",
                  },
                  {
                    q: "Demora muito para ficar pronto?",
                    a: "Depende da complexidade do projeto, mas trabalhamos com metodologias ágeis que permitem entregas incrementais. Você já começa a usar partes do sistema enquanto o restante é desenvolvido. Projetos simples podem ficar prontos em poucas semanas.",
                  },
                  {
                    q: "Preciso saber exatamente o que quero?",
                    a: "Não! Nosso papel é justamente ajudar você a entender a melhor solução. Na primeira etapa, fazemos um diagnóstico completo dos seus processos e propomos a solução ideal. Você só precisa nos contar seus problemas e desafios.",
                  },
                  {
                    q: "E se eu já tiver outros sistemas?",
                    a: "Sem problemas. Podemos integrar o novo software com seus sistemas existentes ou criar uma solução que se conecte a eles. Trabalhamos com APIs e integrações de forma nativa.",
                  },
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border border-border/40 rounded-2xl bg-card px-6 data-[state=open]:shadow-lg data-[state=open]:border-primary/15 transition-all">
                    <AccordionTrigger className="hover:no-underline font-display font-semibold text-left py-5">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════ CTA / FORMULÁRIO ═══════════════════════ */}
      <Section id="contato" curved>
        <Blob className="w-[400px] h-[400px] bg-primary/5 blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <SectionHeader
              tag="Contato"
              title="Vamos entender sua necessidade e encontrar a"
              highlight="melhor solução"
              subtitle="Preencha o formulário abaixo e receba um diagnóstico gratuito da sua situação. Sem compromisso."
            />

            <motion.div variants={fadeUp} className="mt-14">
              <Card className="max-w-lg mx-auto border-border/40 shadow-2xl shadow-primary/8 bg-card rounded-3xl">
                <CardContent className="p-7 md:p-9">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">Nome *</label>
                      <Input
                        placeholder="Seu nome completo"
                        required
                        className="h-12 rounded-xl"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">Empresa *</label>
                      <Input
                        placeholder="Nome da sua empresa"
                        required
                        className="h-12 rounded-xl"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">WhatsApp *</label>
                      <Input
                        placeholder="(11) 99999-9999"
                        required
                        className="h-12 rounded-xl"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">Descreva seu problema</label>
                      <Textarea
                        placeholder="Conte um pouco sobre os desafios que sua empresa enfrenta..."
                        rows={4}
                        className="rounded-xl"
                        value={formData.descricao}
                        onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full gradient-primary border-0 text-primary-foreground text-base h-13 rounded-full shadow-lg shadow-primary/20 hover:opacity-85 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300">
                      Solicitar diagnóstico gratuito <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════ URGÊNCIA ═══════════════════════ */}
      <section className="py-16 md:py-20 gradient-primary relative overflow-hidden">
        <Blob className="w-[200px] h-[200px] bg-primary-foreground/5 blur-[60px] top-0 right-[20%]" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Clock className="w-8 h-8 text-primary-foreground/70 mx-auto mb-4" />
            <p className="font-display text-xl md:text-2xl font-semibold text-primary-foreground mb-3 leading-tight">
              Atendemos um número limitado de projetos por mês
            </p>
            <p className="text-primary-foreground/70 text-sm max-w-md mx-auto leading-relaxed mb-6">
              Para garantir qualidade e atenção em cada projeto, trabalhamos com vagas limitadas.
            </p>
            <a href="#contato">
              <Button size="lg" className="bg-transparent border-2 border-white/50 text-white hover:bg-white hover:text-primary rounded-full px-8 transition-all duration-300">
                Garantir minha vaga <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ FOOTER ═══════════════════════ */}
      <footer className="py-14 border-t border-border/30 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img src={techpiLogo} alt="Techπ" className="h-7" />
            </a>
            <p className="text-sm text-muted-foreground">© 2026 Techπ. Todos os direitos reservados.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="border-border rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg shadow-[hsl(142,70%,45%)]/25 hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
      </a>
    </div>
  );
};

export default Index;
