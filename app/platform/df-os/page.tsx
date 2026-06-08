import React from "react";
import { Metadata } from "next";
import { dfOsProductData } from "@/data/dfOsProduct";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AnswerBlock from "@/components/seo/AnswerBlock";
import ProductScreenFrame from "@/components/ui/ProductScreenFrame";
import { CheckCircle2, ArrowRight, Library } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: dfOsProductData.seo.title,
  description: dfOsProductData.seo.description,
  alternates: {
    canonical: "https://df-os.com/platform/df-os",
  },
};

export default function DfOsProductPage() {
  const data = dfOsProductData;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-brand-bg blueprint-grid overflow-hidden border-b border-brand-border/40">
        <div className="particle-grid opacity-[0.8]" />
        <div className="scan-beam opacity-[0.05]" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
        
        <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative flex flex-col gap-6 pt-8">
          <Badge variant="blue" className="mx-auto">
            {data.hero.eyebrow}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight text-shimmer">
            {data.hero.headline}
          </h1>
          
          <p className="text-slate-300 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">
            {data.hero.subheadline}
          </p>

          <p className="text-slate-400 text-xs md:text-sm max-w-2xl mx-auto italic">
            {data.hero.supportingCopy}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-2">
            <Button href="/contact" variant="primary" className="w-full sm:w-auto">
              Book a Demo
            </Button>
            <Button href="#capabilities" variant="secondary" className="w-full sm:w-auto">
              Explore Platform Capabilities
            </Button>
          </div>

          <p className="text-xs text-slate-500 font-mono mt-2">
            {data.hero.trustLine}
          </p>
        </Reveal>
      </section>

      {/* Section 1: Product Positioning */}
      <section className="py-16 md:py-24 bg-[#09090d] border-b border-brand-border/40 relative overflow-hidden">
        <div className="scan-beam opacity-[0.03] absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge variant="blue" className="w-fit">Platform Positioning</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                {data.positioning.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="gradient-text-blue-cyan">
                  {data.positioning.title.split(" ").slice(-2).join(" ")}
                </span>
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {data.positioning.description}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {data.positioning.body}
              </p>
            </div>

            {/* Right Bullet Checks Grid */}
            <div className="lg:col-span-5 flex flex-col gap-4 border border-brand-border bg-brand-card/30 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 blueprint-grid-fine opacity-20" />
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-2 relative">
                {data.whatItDoes.title}
              </h3>
              <div className="flex flex-col gap-3 relative">
                {data.whatItDoes.points.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-brand-blue shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-snug">{p}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Factory Memory & GEO Block */}
      <section className="py-16 md:py-24 bg-brand-bg border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left GEO AnswerBlock */}
            <div className="lg:col-span-5">
              <AnswerBlock
                question="How does Df-OS create 'Factory Memory'?"
                answer="Df-OS turns daily shopfloor execution (checklists, shift handovers, QA deviations, asset breakdowns) into structured, traceable digital variables. By linking the variables of Man, Machine, Material, and Method into a unified database, Df-OS creates a continuous, context-rich timeline called 'Factory Memory' that is fully prepared for AI decision analysis."
              />
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge variant="green" className="w-fit">Factory Memory</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                {data.factoryMemory.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="gradient-text-green-emerald">
                  {data.factoryMemory.title.split(" ").slice(-2).join(" ")}
                </span>
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {data.factoryMemory.description}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {data.factoryMemory.body}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {data.factoryMemory.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span className="text-xs sm:text-sm font-mono text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Control Tower Dashboard Showcase */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <p className="text-xs font-mono text-brand-green uppercase tracking-wider font-semibold">Real-Time Operations View</p>
            </div>
            <ProductScreenFrame
              src="/images/platform/control-tower.png"
              alt="Df-OS Factory Control Tower - Real-time Operations Dashboard"
              url="app.df-os.com/control-tower"
              className="max-w-5xl mx-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 3: Core Capabilities Grid */}
      <section id="capabilities" className="py-16 md:py-24 bg-[#09090d] border-b border-brand-border/40 relative overflow-hidden">
        <div className="circuit-pattern opacity-[0.03] absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center flex flex-col gap-4 max-w-3xl mx-auto mb-16">
            <Badge variant="blue" className="mx-auto">Features Overview</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Platform <span className="gradient-text-blue-cyan">Capabilities</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Explore the core modular capabilities engineered to structure operations and automate workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.capabilities.map((cap, idx) => {
              return (
                <Card key={idx} variant="default" className="flex flex-col gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-brand-blue to-brand-cyan flex items-center justify-center text-white font-mono font-black text-xs shadow-md shadow-brand-blue/10">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight uppercase font-mono">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{cap.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Digital Checksheet Showcase */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <p className="text-xs font-mono text-brand-blue uppercase tracking-wider font-semibold">Shopfloor Data Capture</p>
              <h3 className="text-xl md:text-2xl font-bold text-white mt-2">Digital Checksheets &amp; Forms</h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl mx-auto">
                Replace paper-based inspections with structured digital checksheets that capture operator data in real time.
              </p>
            </div>
            <ProductScreenFrame
              src="/images/platform/digital-checksheet.png"
              alt="Df-OS Digital Checksheet Creation Interface"
              url="app.df-os.com/checksheets/create"
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Df-OS Process Library */}
      <section className="py-16 md:py-24 bg-brand-bg border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Library Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge variant="cyan" className="w-fit">Workflows Library</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                {data.processLibrary.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="gradient-text-blue-cyan">
                  {data.processLibrary.title.split(" ").slice(-2).join(" ")}
                </span>
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {data.processLibrary.description}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {data.processLibrary.summary}
              </p>

              <div className="flex gap-4 mt-2">
                <Button href="/contact" variant="primary">
                  Request Process Workflows
                </Button>
              </div>
            </div>

            {/* Right Scrollable/Grid Workflows Box */}
            <div className="lg:col-span-5 border border-brand-border bg-brand-card/30 rounded-xl p-6 relative overflow-hidden h-[400px] flex flex-col">
              <div className="absolute inset-0 blueprint-grid-fine opacity-20" />
              
              <div className="flex items-center gap-2 mb-4 shrink-0 relative">
                <Library className="w-5 h-5 text-brand-cyan" />
                <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                  Workflows & Modules
                </span>
              </div>
              
              <div className="flex-grow overflow-y-auto pr-2 flex flex-col gap-2 relative">
                {data.processLibrary.coverage.map((workflow, idx) => (
                  <div key={idx} className="bg-brand-card/65 border border-brand-border/80 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm text-slate-300 flex items-center gap-2 hover:border-brand-cyan/20 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                    {workflow}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Workflow Builder Screenshots */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <p className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">Low-Code Workflow Builder</p>
              <h3 className="text-lg md:text-xl font-bold text-white mt-2">Design &amp; Deploy Process Workflows Visually</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col gap-3">
                <ProductScreenFrame
                  src="/images/platform/workflow-builder.png"
                  alt="Df-OS Low-Code Workflow Builder showing Breakdown Management process"
                  url="app.df-os.com/workflows/breakdown-management"
                />
                <p className="text-xs text-slate-500 text-center font-mono">Breakdown Management Workflow</p>
              </div>
              <div className="flex flex-col gap-3">
                <ProductScreenFrame
                  src="/images/platform/work-permit-workflow.png"
                  alt="Df-OS Work Permit Safety Workflow"
                  url="app.df-os.com/workflows/work-permit"
                />
                <p className="text-xs text-slate-500 text-center font-mono">Work Permit Safety Workflow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why Df-OS is Different */}
      <section className="py-16 md:py-24 bg-[#09090d] border-b border-brand-border/40 relative overflow-hidden">
        <div className="circuit-pattern opacity-[0.03] absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center flex flex-col gap-4 max-w-3xl mx-auto mb-16">
            <Badge variant="indigo" className="mx-auto">Differentiation</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Why Df-OS is <span className="gradient-text-indigo-blue">Different</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Unlike static point solutions, Df-OS acts as a dynamic connected layer built for actual factory conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.differences.map((diff, idx) => (
              <Card key={idx} variant="default" className="flex flex-col gap-3">
                <h3 className="text-sm font-bold text-white tracking-tight uppercase font-mono">{diff.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{diff.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Df-OS + Vish AI highlight */}
      <section className="py-16 md:py-24 bg-brand-bg border-b border-brand-border/40 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative flex flex-col gap-6">
          <Badge variant="green" className="mx-auto">Product Stack Sync</Badge>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            {data.vishAi.title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="gradient-text-green-emerald">
              {data.vishAi.title.split(" ").slice(-2).join(" ")}
            </span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {data.vishAi.description}
          </p>
          <p className="text-xs sm:text-sm text-brand-green font-mono uppercase font-bold tracking-wider">
            {data.vishAi.promise}
          </p>
          <div className="mt-2">
            <Button href="/platform/vish-ai" variant="primary" className="group">
              Learn About Vish AI
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Dashboard Showcase */}
      <section className="py-16 md:py-24 bg-brand-bg border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 flex flex-col gap-3">
            <Badge variant="indigo" className="mx-auto">Quality Management</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Quality Control <span className="gradient-text-indigo-blue">Dashboard</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
              Track inspections, deviations, and CAPA actions across all production lines with real-time quality analytics.
            </p>
          </div>
          <ProductScreenFrame
            src="/images/platform/quality-dashboard.png"
            alt="Df-OS Quality Control Dashboard with Inspection Tracking"
            url="app.df-os.com/quality/dashboard"
            className="max-w-5xl mx-auto"
          />
        </div>
      </section>

      {/* Section 7: Outcomes & Final CTA */}
      <section className="py-16 md:py-24 bg-[#050508] relative overflow-hidden">
        <div className="circuit-pattern opacity-[0.05] absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Check items */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge variant="cyan">Measurable Impact</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                What Manufacturers Can <span className="gradient-text-blue-cyan">Achieve</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
                {data.outcomes.map((out, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-snug">{out}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA box */}
            <div className="lg:col-span-5 border border-brand-border bg-brand-card/45 rounded-xl p-6 text-center flex flex-col gap-5">
              <h3 className="text-lg font-bold text-white tracking-tight">
                {data.finalCTA.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {data.finalCTA.body}
              </p>
              <Button href="/contact" variant="primary" className="w-full">
                Book a Demo
              </Button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
