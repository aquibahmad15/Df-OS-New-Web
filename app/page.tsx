import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { homepageData } from "@/data/homepage";
import ScrollNarrativeHero from "@/components/home/ScrollNarrativeHero";
import AnswerBlock from "@/components/seo/AnswerBlock";
import FAQAccordion from "@/components/seo/FAQAccordion";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ProductScreenFrame from "@/components/ui/ProductScreenFrame";
import { CheckCircle2, Brain, Layers, Link as LinkIcon, Database, ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import ChaosToStructureInteractive from "@/components/home/ChaosToStructureInteractive";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: homepageData.seo.title,
  description: homepageData.seo.description,
  alternates: {
    canonical: "https://df-os.com",
  },
};

export default function HomePage() {
  const data = homepageData;

  return (
    <div className="w-full">
      {/* 1. Cinematic Hero Narrative Section */}
      <section className="relative w-full z-10">
        <ScrollNarrativeHero />
      </section>

      {/* 2. Category Narrative Section */}
      <section id="narrative" className="py-20 md:py-28 bg-brand-bg relative border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge variant="blue">Category Narrative</Badge>
              
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-shimmer">
                {data.categoryNarrative.title}
              </h2>
              
              <div className="flex flex-col gap-4 text-slate-300 text-sm md:text-base leading-relaxed">
                {data.categoryNarrative.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Right Graphic/GEO Summary Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <AnswerBlock
                question="What is a Digital Factory Operating System?"
                answer="A Digital Factory Operating System (Df-OS) acts as the single operating foundation of a factory. Unlike isolated point solutions (MES or standalone trackers), a Df-OS digitizes shopfloor processes, structures operations, connects legacy machine signals, and compiles a clean, continuous knowledge graph ('factory memory') that enables AI decision intelligence."
              />
            </div>
          </div>

          {/* Chaos → Structure Visual Diagram */}
          <div className="mt-16">
            <ChaosToStructureInteractive />
          </div>
        </div>
      </section>

      {/* 3. What is Df-OS Section */}
      <section className="py-20 md:py-28 bg-[#09090d] relative border-b border-brand-border/40">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center flex flex-col gap-4 max-w-3xl mx-auto mb-16">
            <Badge variant="cyan" className="mx-auto">Platform Capability</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-shimmer">
              {data.whatIsDfOs.title}
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              {data.whatIsDfOs.description}
            </p>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whatIsDfOs.capabilities.map((cap, idx) => (
              <RevealItem key={idx} className="h-full">
              <Card variant="cyan" className="flex flex-col gap-3 h-full">
                <div className="w-10 h-10 rounded-lg bg-brand-cyan/5 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan font-mono font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">{cap.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{cap.description}</p>
              </Card>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 4. Product Stack Layer Section */}
      <section className="py-20 md:py-28 bg-brand-bg relative border-b border-brand-border/40 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-indigo/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Reveal className="text-center flex flex-col gap-4 max-w-3xl mx-auto mb-20">
            <Badge variant="indigo" className="mx-auto">AI Factory Stack</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-shimmer">
              The AI-Ready Manufacturing Stack
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Three synchronized layers that connect your machines, digitize your processes, and prioritize your actions.
            </p>
          </Reveal>

          {/* Interactive Stack Diagram Graphic */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Stack Graphic */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {/* Product 3: Vish AI */}
              <div className="border border-brand-green/30 bg-brand-card/55 rounded-xl p-5 shadow-lg relative overflow-hidden group hover:border-brand-green transition-colors">
                <div className="absolute top-0 right-0 w-12 h-12 bg-brand-green/5 border-b border-l border-brand-green/20 rounded-bl-xl flex items-center justify-center">
                  <Brain className="w-4 h-4 text-brand-green" />
                </div>
                <h4 className="text-sm font-bold text-brand-green font-mono uppercase tracking-wider mb-1">
                  Vish AI
                </h4>
                <h3 className="text-base font-extrabold text-white mb-2">Manufacturing Intelligence Layer</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The AI layer that turns factory memory into answers, priorities, explanations, and actions. 
                  Allows teams to query shifts, investigate deviations, and deploy digital SMEs.
                </p>
                <div className="mt-3 flex justify-end">
                  <Link href="/platform/vish-ai" className="text-[10px] text-brand-green font-mono hover:underline inline-flex items-center gap-1">
                    Meet Vish AI <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Connector */}
              <div className="h-8 w-px bg-brand-border mx-auto signal-line" />

              {/* Product 2: Df-OS */}
              <div className="border border-brand-blue/30 bg-brand-card/55 rounded-xl p-5 shadow-lg relative overflow-hidden group hover:border-brand-blue transition-colors">
                <div className="absolute top-0 right-0 w-12 h-12 bg-brand-blue/5 border-b border-l border-brand-blue/20 rounded-bl-xl flex items-center justify-center">
                  <Layers className="w-4 h-4 text-brand-blue" />
                </div>
                <h4 className="text-sm font-bold text-brand-blue font-mono uppercase tracking-wider mb-1">
                  Df-OS
                </h4>
                <h3 className="text-base font-extrabold text-white mb-2">Digital Factory Operating System</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The core platform database. Digitizes checklists, audits, handovers, safety logs, and PM routines. 
                  Structures execution variables into a clean record to power the factory memory.
                </p>
                <div className="mt-3 flex justify-end">
                  <Link href="/platform/df-os" className="text-[10px] text-brand-blue font-mono hover:underline inline-flex items-center gap-1">
                    Explore Df-OS <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Connector */}
              <div className="h-8 w-px bg-brand-border mx-auto signal-line" />

              {/* Product 1: X-Konnect */}
              <div className="border border-brand-cyan/30 bg-brand-card/55 rounded-xl p-5 shadow-lg relative overflow-hidden group hover:border-brand-cyan transition-colors">
                <div className="absolute top-0 right-0 w-12 h-12 bg-brand-cyan/5 border-b border-l border-brand-cyan/20 rounded-bl-xl flex items-center justify-center">
                  <LinkIcon className="w-4 h-4 text-brand-cyan" />
                </div>
                <h4 className="text-sm font-bold text-brand-cyan font-mono uppercase tracking-wider mb-1">
                  X-Konnect
                </h4>
                <h3 className="text-base font-extrabold text-white mb-2">Industrial IoT Connectivity Layer</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The machine connectivity middleware. Uses the Hectos Edge Gateway to capture parameters, PLC outputs, 
                  alarms, downtime signals, and energy meters directly from machines into Df-OS.
                </p>
                <div className="mt-3 flex justify-end">
                  <Link href="/platform/x-konnect" className="text-[10px] text-brand-cyan font-mono hover:underline inline-flex items-center gap-1">
                    Explore X-Konnect <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Core Value Proposition Copy Column */}
            <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-6">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                X-Konnect connects the machines. Df-OS structures the factory. Vish AI turns factory data into decisions.
              </h3>
              
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Rather than deploying isolated software point solutions that trap operational data in department silos, Df-OS layers over your entire factory. It structures human workflows, machine IoT signals, and material batches into a single database schema. 
              </p>

              <div className="border-l-2 border-brand-indigo/30 pl-4 py-1 flex flex-col gap-2">
                <p className="text-xs text-slate-400 italic">
                  &ldquo;By establishing this structured operating layer, manufacturers achieve live operational visibility while automatically assembling the high-quality context required to run AI decision models.&rdquo;
                </p>
                <span className="text-[10px] font-mono text-brand-indigo uppercase font-semibold">Df-OS Category Strategy</span>
              </div>

              <div className="flex gap-4 mt-2">
                <Button href="/contact" variant="primary">
                  Book a Demo
                </Button>
                <Button href="/platform/df-os" variant="secondary">
                  How Df-OS Differs
                </Button>
              </div>

              {/* Platform Preview Screenshot */}
              <div className="mt-4">
                <ProductScreenFrame
                  src="/images/platform/platform-landing.png"
                  alt="Df-OS Platform Landing Page showing modular factory applications"
                  url="app.df-os.com/platform"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Factory Memory Section */}
      <section className="py-20 md:py-28 bg-[#09090d] relative border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Direct Answer/AEO focus */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <AnswerBlock
                question="Why is factory memory essential for AI-ready manufacturing?"
                answer="AI cannot reason over scattered paper logs, isolated email strings, or disconnected sensor signals. Factory memory is the structured historical record of your factory's execution—capturing the exact context of what deviation happened, who resolved it, which PM checklist was active, and what parameters shifted. Df-OS automatically builds this memory, providing the baseline context for AI decision-support."
              />
            </div>

            {/* Right Column: Narrative & Benefits */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge variant="green">Factory Memory</Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-shimmer">
                {data.factoryMemory.title}
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {data.factoryMemory.description}
              </p>
              <p className="text-slate-400 text-xs md:text-sm">
                Df-OS turns daily factory activity into structured factory memory. It captures what happened, where it happened, why it happened, who acted, what was delayed, what was escalated, what action was taken, and how similar situations were handled before.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {data.factoryMemory.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span className="text-xs md:text-sm font-medium text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Control Tower Dashboard Preview */}
              <div className="mt-6">
                <ProductScreenFrame
                  src="/images/platform/control-tower.png"
                  alt="Df-OS Factory Control Tower - Live Operations Dashboard"
                  url="app.df-os.com/control-tower"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Solutions by Function Section */}
      <section className="py-20 md:py-28 bg-brand-bg relative border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center flex flex-col gap-4 max-w-3xl mx-auto mb-16">
            <Badge variant="blue" className="mx-auto">Solutions by Function</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-shimmer">
              One Operating System Across the Factory
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Df-OS replaces fragmented tools by connecting all departments under a unified process execution model.
            </p>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.solutions.map((sol, idx) => (
              <RevealItem key={idx} className="h-full">
              <Card variant="default" className="flex flex-col gap-3 h-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white tracking-tight uppercase font-mono">
                    {sol.title}
                  </h3>
                  <span className="text-[10px] font-mono text-brand-cyan">0{idx + 1}</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed flex-grow">
                  {sol.description}
                </p>
              </Card>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 7. Industries Served Section */}
      <section className="py-20 md:py-28 bg-[#09090d] relative border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center flex flex-col gap-4 max-w-3xl mx-auto mb-16">
            <Badge variant="cyan" className="mx-auto">Industries Served</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-shimmer">
              Configured for Every Manufacturing Reality
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              With over 400+ pre-built manufacturing workflows, Df-OS adapts to your unique processes.
            </p>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.industries.map((ind) => {
              const industryImages: Record<string, string> = {
                fmcg: "/images/stock/automated-production.jpg",
                durables: "/images/stock/woman-engineer-robotics.jpg",
                fnb: "/images/stock/industry-factory.jpg",
                automotive: "/images/stock/robotic-arm.jpg",
                pharmaceuticals: "/images/stock/woman-inspector.jpg",
                other: "/images/stock/petrochemical-sunset.jpg",
              };
              return (
                <RevealItem key={ind.id} className="h-full">
                <Card variant="cyan" className="flex flex-col gap-3 relative overflow-hidden h-full">
                  {/* Industry Photo */}
                  <div className="relative h-36 -mx-6 -mt-6 mb-2 overflow-hidden">
                    <Image
                      src={industryImages[ind.id] || "/images/stock/industry-factory.jpg"}
                      alt={`${ind.name} manufacturing environment`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-[#111116]/50 to-transparent" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">{ind.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed flex-grow">{ind.description}</p>
                  <div className="mt-2">
                    <Link href={`/industries#${ind.id}`} className="text-[10px] font-mono text-brand-cyan hover:underline inline-flex items-center gap-0.5">
                      Explore Workflows <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </Card>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* 8. Vish AI Launch Highlight Section */}
      <section className="py-20 md:py-28 bg-brand-bg relative border-b border-brand-border/40 overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[550px] h-[550px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge variant="green">Introducing Vish AI</Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-shimmer">
                {data.vishAiTeaser.subtitle}
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {data.vishAiTeaser.description}
              </p>
              
              <div className="flex flex-col gap-5 mt-3">
                {data.vishAiTeaser.features.map((feat, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-green/5 border border-brand-green/20 flex items-center justify-center shrink-0 text-brand-green font-mono text-xs">
                      0{idx + 1}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{feat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive/AEO Graphics box */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Digital Brain Video Loop */}
              <div className="relative h-[200px] rounded-xl overflow-hidden border border-brand-green/20">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/particle-ring.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-brand-bg/60" />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center">
                    <Brain className="w-10 h-10 text-brand-green mx-auto mb-2" />
                    <span className="text-xs font-mono text-brand-green uppercase tracking-wider font-semibold">
                      Vish AI Intelligence Layer
                    </span>
                  </div>
                </div>
              </div>

              {/* Query Panel */}
              <div className="border border-brand-green/20 bg-brand-card/40 rounded-xl p-5 relative overflow-hidden glass-panel">
                <div className="absolute inset-0 blueprint-grid-fine opacity-20" />
                
                <div className="flex flex-col gap-4 relative">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-brand-green animate-pulse" />
                    <span className="text-[10px] font-mono text-brand-green uppercase tracking-wider font-semibold">
                      Vish AI Query Panel
                    </span>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <div className="bg-brand-card border border-brand-border p-3 rounded-lg text-xs">
                      <span className="text-[9px] font-mono text-slate-500 block mb-1">USER QUERY</span>
                      &quot;Which batches are at risk today and why?&quot;
                    </div>
                    <div className="bg-brand-card border border-brand-green/20 p-3 rounded-lg text-xs">
                      <span className="text-[9px] font-mono text-brand-green block mb-1">VISH AI DECISION ENGINE</span>
                      &quot;Batch FMCG-206 on Line 4 is flagged at risk. Changeover recorded a process deviation in valve pressure. Action: Verify seal calibration.&quot;
                    </div>
                  </div>

                  <div className="border-t border-brand-border/40 pt-3 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <span>Df-OS structures the data</span>
                    <span>Vish AI guides the decision</span>
                  </div>

                  <Button href="/platform/vish-ai" variant="primary" className="w-full mt-1">
                    Meet Vish AI
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Proof & Outcomes Section */}
      <section className="py-20 md:py-28 bg-[#09090d] relative border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center flex flex-col gap-4 max-w-3xl mx-auto mb-16">
            <Badge variant="blue" className="mx-auto">Outcomes Enabled</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-shimmer">
              Create Measurable Operational Impact
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Df-OS is not a generic dashboard. It is designed to run your factory like a digital system and drive operational improvements.
            </p>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.outcomes.map((out, idx) => (
              <RevealItem key={idx} className="flex gap-3 items-start border border-brand-border bg-brand-card/25 p-5 rounded-lg h-full">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300 font-medium leading-relaxed">{out}</span>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 10. Why Df-OS Section */}
      <section className="py-20 md:py-28 bg-brand-bg relative border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge variant="blue">Brand Value</Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-shimmer">
                Why Manufacturers Choose Df-OS
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Df-OS is built specifically for high-trust manufacturing operations. We help digital transformation leaders modernize their shop floors without disrupting the systems that are already working.
              </p>

              <div className="flex flex-col gap-4 mt-2">
                {data.whyDfOs.map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-indigo/10 border border-brand-indigo/25 flex items-center justify-center shrink-0 font-mono text-[10px] text-brand-indigo font-bold">
                      0{idx + 1}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-bold text-white">{point.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image: Engineer using tablet */}
            <div className="lg:col-span-5 h-[400px] rounded-xl relative overflow-hidden border border-brand-border/30 group">
              <Image
                src="/images/stock/engineer-tablet.jpg"
                alt="Engineer using digital tablet in futuristic manufacturing workplace"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent" />
              <div className="absolute inset-0 blueprint-grid opacity-20" />
              <div className="absolute bottom-6 left-6 right-6 text-center flex flex-col items-center gap-2">
                <Database className="w-8 h-8 text-brand-blue" />
                <span className="text-xs font-mono text-brand-blue uppercase font-bold tracking-wider">
                  Disrupt Without Disruption
                </span>
                <p className="text-[10px] text-slate-400 leading-relaxed max-w-xs">
                  We layer over your existing ERPs, PLCs, and MES — integrating and capturing daily shopfloor variables to create structured data.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FAQ Accordion Section */}
      <section className="py-20 md:py-28 bg-[#09090d] relative border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center flex flex-col gap-4 max-w-3xl mx-auto mb-16">
            <Badge variant="blue" className="mx-auto">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-shimmer">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Common questions about the Digital Factory Operating System category and integration paths.
            </p>
          </Reveal>

          <FAQAccordion items={data.faqs} />
        </div>
      </section>

      {/* 12. Final CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Industrial Night Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/stock/industrial-night.jpg"
            alt="Industrial plant at night"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-bg/85" />
          <div className="absolute inset-0 blueprint-grid opacity-40" />
        </div>
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />
        
        <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative flex flex-col gap-6">
          <Badge variant="cyan" className="mx-auto">Make Your Factory AI-Ready</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-shimmer">
            Ready to Make Your Factory AI-Ready?
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Df-OS helps manufacturers move from fragmented operations to connected intelligence — creating the digital operating foundation for safer, faster, more resilient, and more intelligent manufacturing.
          </p>
          <p className="text-xs text-slate-500 font-mono italic">
            Run your factory like a digital system. Build the foundation for AI-ready manufacturing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-4">
            <Button href="/contact" variant="primary" className="w-full sm:w-auto">
              Book a Demo
            </Button>
            <Button href="/platform/df-os" variant="secondary" className="w-full sm:w-auto">
              Explore the Platform
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
