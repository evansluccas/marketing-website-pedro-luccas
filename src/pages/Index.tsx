import { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap, Shield, BarChart3, Cog, Globe, Smartphone,
  ArrowRight, MessageCircle, CheckCircle, Clock,
  TrendingUp, Database, Layers, Users, Target,
  Lightbulb, Code2, Rocket, Handshake, ChevronDown,
  Send, AlertTriangle, FileSpreadsheet, Unlink, Timer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre desenvolvimento de software sob medida.";

const Index = () => {
  const [formData, setFormData] = useState({ nome: "", empresa: "", whatsapp: "", descricao: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Novo lead:\nNome: ${formData.nome}\nEmpresa: ${formData.empresa}\nWhatsApp: ${formData.whatsapp}\nDescrição: ${formData.descricao}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">NexCore</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#solucoes" className="hover:text-foreground transition-colors">Soluções</a>
            <a href="#como-funciona" className="hover:text-foreground transition-colors">Como Funciona</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="#contato">
              <Button size="sm" className="gradient-primary border-0 text-primary-foreground">Falar Conosco</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-6">
              <Zap className="w-4 h-4" /> Software sob medida para sua empresa
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Transforme processos da sua empresa com{" "}
              <span className="gradient-text">software sob medida</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Criamos sistemas personalizados para automatizar operações, reduzir custos e acelerar o crescimento do seu negócio.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contato">
                <Button size="lg" className="gradient-primary border-0 text-primary-foreground text-base px-8 h-12 w-full sm:w-auto">
                  Solicitar diagnóstico gratuito <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-base px-8 h-12 w-full sm:w-auto border-primary/20 hover:bg-primary/5">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            className="mt-16 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="rounded-2xl border border-border/50 bg-card shadow-2xl shadow-primary/5 p-1">
              <div className="rounded-xl bg-muted/50 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/40" />
                  <span className="text-xs text-muted-foreground ml-2">dashboard.nexcore.app</span>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                  {[
                    { label: "Receita", value: "R$ 284k", icon: TrendingUp, color: "text-primary" },
                    { label: "Clientes", value: "1.247", icon: Users, color: "text-accent" },
                    { label: "Automações", value: "89", icon: Cog, color: "text-primary" },
                    { label: "Uptime", value: "99.9%", icon: Shield, color: "text-accent" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-lg bg-card p-3 md:p-4 border border-border/50">
                      <item.icon className={`w-4 h-4 ${item.color} mb-2`} />
                      <p className="text-lg md:text-2xl font-bold font-display">{item.value}</p>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 md:gap-4">
                  <div className="rounded-lg bg-card p-4 border border-border/50 h-24 md:h-32 flex items-end gap-1">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t gradient-primary" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="rounded-lg bg-card p-4 border border-border/50 h-24 md:h-32 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-primary border-t-accent animate-spin" style={{ animationDuration: "3s" }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DOR */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary mb-3 text-center">O PROBLEMA</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold text-center mb-12">
              Sua empresa ainda depende de{" "}
              <span className="gradient-text">processos manuais?</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
              {[
                { icon: FileSpreadsheet, title: "Planilhas infinitas", desc: "Dados espalhados em dezenas de planilhas sem controle." },
                { icon: Timer, title: "Processos manuais", desc: "Horas perdidas com tarefas repetitivas que poderiam ser automáticas." },
                { icon: Unlink, title: "Sistemas desconectados", desc: "Ferramentas que não conversam entre si geram retrabalho." },
                { icon: AlertTriangle, title: "Falta de controle", desc: "Sem visibilidade sobre métricas e dados importantes." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="border-border/50 bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    <CardContent className="p-6 flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="text-center">
              <blockquote className="font-display text-xl md:text-2xl font-semibold italic text-foreground/80">
                "Você não deve se adaptar ao sistema.{" "}
                <span className="gradient-text not-italic">O sistema deve se adaptar a você.</span>"
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section id="solucoes" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary mb-3 text-center">A SOLUÇÃO</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
              Tecnologia que resolve{" "}
              <span className="gradient-text">problemas reais</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
              Desenvolvemos soluções digitais completas, do planejamento à implementação, com foco no resultado do seu negócio.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {[
                { icon: Code2, title: "Software Sob Medida", desc: "Sistemas criados exclusivamente para as necessidades da sua empresa." },
                { icon: Layers, title: "ERP, CRM & Dashboards", desc: "Sistemas internos para gestão completa do seu negócio." },
                { icon: Cog, title: "Automação de Processos", desc: "Elimine tarefas repetitivas e ganhe eficiência operacional." },
                { icon: Globe, title: "Integrações", desc: "Conecte todas as ferramentas da sua empresa em um só lugar." },
                { icon: Smartphone, title: "Plataformas Web & Apps", desc: "Aplicações modernas, rápidas e responsivas." },
                { icon: Database, title: "Infraestrutura Escalável", desc: "Soluções que crescem junto com o seu negócio." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="border-border/50 bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="text-center">
              <a href="#contato">
                <Button size="lg" className="gradient-primary border-0 text-primary-foreground text-base px-8 h-12">
                  Falar com um especialista <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary mb-3 text-center">BENEFÍCIOS</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold text-center mb-14">
              Resultados que{" "}
              <span className="gradient-text">transformam</span>
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                { icon: TrendingUp, label: "Mais produtividade" },
                { icon: BarChart3, label: "Redução de custos" },
                { icon: Database, label: "Controle total dos dados" },
                { icon: Target, label: "Soluções personalizadas" },
                { icon: Rocket, label: "Escalabilidade" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="font-display font-semibold text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary mb-3 text-center">PROCESSO</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold text-center mb-14">
              Simples, transparente e{" "}
              <span className="gradient-text">eficiente</span>
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { step: "01", icon: Lightbulb, title: "Entendimento", desc: "Ouvimos suas necessidades e mapeamos os processos atuais." },
                { step: "02", icon: Target, title: "Planejamento", desc: "Desenhamos a melhor solução técnica para o seu caso." },
                { step: "03", icon: Code2, title: "Desenvolvimento", desc: "Construímos o software com tecnologias modernas e seguras." },
                { step: "04", icon: Rocket, title: "Implementação", desc: "Entregamos, treinamos e acompanhamos os resultados." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="border-border/50 bg-card h-full text-center hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden">
                    <CardContent className="p-6 pt-8">
                      <span className="absolute top-3 right-4 text-4xl font-display font-bold text-primary/10">{item.step}</span>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary mb-3 text-center">POR QUE NÓS</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold text-center mb-14">
              O que nos torna{" "}
              <span className="gradient-text">diferentes</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Target, title: "Foco em resultado", desc: "Não entregamos apenas tecnologia. Entregamos soluções que geram impacto real no seu negócio." },
                { icon: Shield, title: "Soluções sob medida", desc: "Nada de sistemas genéricos. Cada projeto é único e pensado exclusivamente para você." },
                { icon: Handshake, title: "Comunicação clara", desc: "Sem termos técnicos desnecessários. Você entende cada etapa do processo." },
                { icon: Users, title: "Acompanhamento próximo", desc: "Estamos ao seu lado desde o primeiro contato até após a entrega." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary mb-3">IMPACTO</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold mb-14">
              Números que{" "}
              <span className="gradient-text">falam por si</span>
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
              {[
                { value: "40%", label: "Aumento de produtividade" },
                { value: "60%", label: "Redução de retrabalho" },
                { value: "3x", label: "Mais velocidade operacional" },
                { value: "99.9%", label: "Disponibilidade dos sistemas" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="p-6">
                  <p className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
            <motion.blockquote variants={fadeUp} className="text-lg md:text-xl text-muted-foreground italic border-l-4 border-primary pl-6 text-left max-w-2xl mx-auto">
              "Empresas que automatizam processos podem aumentar a produtividade em até 40% e reduzir custos operacionais significativamente."
              <footer className="mt-3 text-sm font-medium text-foreground not-italic">— McKinsey & Company</footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary mb-3 text-center">DÚVIDAS</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold text-center mb-10">
              Perguntas{" "}
              <span className="gradient-text">frequentes</span>
            </motion.h2>
            <motion.div variants={fadeUp}>
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
                  <AccordionItem key={i} value={`item-${i}`} className="border border-border/50 rounded-lg bg-card px-4 data-[state=open]:shadow-md transition-shadow">
                    <AccordionTrigger className="hover:no-underline font-display font-semibold text-left">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA / FORMULÁRIO */}
      <section id="contato" className="py-20 md:py-28 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary mb-3 text-center">CONTATO</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
              Vamos entender sua necessidade e encontrar a{" "}
              <span className="gradient-text">melhor solução</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-center max-w-xl mx-auto mb-10">
              Preencha o formulário abaixo e receba um diagnóstico gratuito da sua situação. Sem compromisso.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Card className="max-w-lg mx-auto border-border/50 shadow-xl shadow-primary/5">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Nome *</label>
                      <Input
                        placeholder="Seu nome completo"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Empresa *</label>
                      <Input
                        placeholder="Nome da sua empresa"
                        required
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">WhatsApp *</label>
                      <Input
                        placeholder="(11) 99999-9999"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Descreva seu problema</label>
                      <Textarea
                        placeholder="Conte um pouco sobre os desafios que sua empresa enfrenta..."
                        rows={4}
                        value={formData.descricao}
                        onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full gradient-primary border-0 text-primary-foreground text-base h-12">
                      Solicitar diagnóstico gratuito <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* URGÊNCIA */}
      <section className="py-12 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Clock className="w-8 h-8 text-primary-foreground/80 mx-auto mb-3" />
            <p className="font-display text-xl md:text-2xl font-semibold text-primary-foreground mb-2">
              Atendemos um número limitado de projetos por mês
            </p>
            <p className="text-primary-foreground/80 text-sm">
              Para garantir qualidade e atenção em cada projeto, trabalhamos com vagas limitadas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-7 h-7 rounded-md gradient-primary flex items-center justify-center">
                <Code2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold">NexCore</span>
            </a>
            <p className="text-sm text-muted-foreground">© 2026 NexCore. Todos os direitos reservados.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5">
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
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
      </a>
    </div>
  );
};

export default Index;
