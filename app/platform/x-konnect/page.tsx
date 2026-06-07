import React from "react";
import { Metadata } from "next";
import { xKonnectProductData } from "@/data/xKonnectProduct";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AnswerBlock from "@/components/seo/AnswerBlock";
import ProductScreenFrame from "@/components/ui/ProductScreenFrame";
import StockImage from "@/components/ui/StockImage";
import { CheckCircle2, Cpu, Radio, Network, Activity, Zap, Shield, Layout } from "lucide-react";

export const metadata: Metadata = {
  title: xKonnectProductData.seo.title,
  description: xKonnectProductData.seo.description,
  alternates: {
    canonical: "https://df-os.com/platform/x-konnect",
  },
};

export default function XKonnectProductPage() {
  const data = xKonnectProductData;

  const useCaseIcons = [
    Activity, // OEE
    Radio,    // Downtime
    Cpu,      // PM
    Zap,      // Energy
    Activity, // Process parameters
    Shield,   // Safety
    Layout,   // Control tower
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-brand-bg blueprint-grid overflow-hidden border-b border-brand-border/40">
        <div className="particle-grid opacity-[0.8]" />
        <div className="scan-beam opacity-[0.05]" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative flex flex-col gap-6 pt-8">
          <Badge variant="cyan" className="mx-auto">
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
            <Button href="#hectos" variant="secondary" className="w-full sm:w-auto">
              Explore Edge Gateway
            </Button>
          </div>

          <p className="text-xs text-slate-500 font-mono mt-2">
            {data.hero.trustLine}
          </p>

          {/* Hero Visual */}
          <div className="mt-8 max-w-3xl mx-auto w-full">
            <StockImage
              src="/images/stock/futuristic-machine.jpg"
              alt="Futuristic industrial machinery with steel construction"
              overlay="dark"
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 1: Product Positioning */}
      <section className="py-16 md:py-24 bg-[#09090d] border-b border-brand-border/40 relative overflow-hidden">
        <div className="scan-beam opacity-[0.03] absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge variant="cyan" className="w-fit">IoT Middleware</Badge>
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

            {/* Right Graphic Panel */}
            <div className="lg:col-span-5 border border-brand-border bg-brand-card/30 p-6 rounded-xl relative overflow-hidden flex flex-col items-center justify-center min-h-[300px] group hover:border-brand-cyan/40 transition-colors duration-300">
              <div className="absolute inset-0 blueprint-grid-fine opacity-30" />
              
              {/* Dynamic Signal/Pulse Nodes */}
              <div className="flex items-center gap-6 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue relative">
                  <span className="absolute inset-0 rounded-full bg-brand-blue/10 animate-ping" />
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="h-[2px] w-12 bg-gradient-to-r from-brand-blue to-brand-cyan relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-4 bg-white/60 blur-[1px] animate-[flow_2s_linear_infinite]" />
                </div>
                <div className="w-12 h-12 rounded-full bg-brand-cyan/25 border border-brand-cyan/50 flex items-center justify-center text-brand-cyan relative">
                  <span className="absolute -inset-1 rounded-full border border-brand-cyan/30 animate-pulse" />
                  <Network className="w-6 h-6" />
                </div>
                <div className="h-[2px] w-12 bg-gradient-to-r from-brand-cyan to-brand-green relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-4 bg-white/60 blur-[1px] animate-[flow_2s_linear_infinite_reverse]" />
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green relative">
                  <span className="absolute inset-0 rounded-full bg-brand-green/10 animate-ping" />
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              
              <span className="text-xs font-mono text-brand-cyan font-bold tracking-wider relative uppercase mb-2">
                Unified Middleware Layer
              </span>
              <p className="text-xs text-slate-500 text-center max-w-xs relative leading-relaxed">
                Normalizes heterogeneous machine parameters (OPC UA, Modbus, PLCs) into a single, standardized JSON structure for Df-OS databases.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Hectos Edge Gateway details */}
      <section id="hectos" className="py-16 md:py-24 bg-brand-bg border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hectos Box representation */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Edge Gateway connectivity visual */}
              <StockImage
                src="/images/stock/digital-pad.jpg"
                alt="Engineer using tablet with industrial IoT connectivity interface"
                overlay="gradient"
              />
              {/* Hectos hardware badge bar */}
              <div className="border border-brand-cyan/20 bg-brand-card/50 rounded-xl p-4 relative overflow-hidden flex items-center justify-between">
                <div className="absolute inset-0 blueprint-grid-fine opacity-20" />
                <div className="flex items-center gap-2 relative">
                  <Cpu className="w-5 h-5 text-brand-cyan" />
                  <span className="text-[10px] font-mono text-slate-400">Hectos v4.2 — Secure Edge Signal Gateway</span>
                </div>
                <div className="flex items-center gap-1.5 relative">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-ping" />
                  <span className="text-[9px] font-mono text-brand-cyan font-bold">LINK LIVE</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge variant="cyan" className="w-fit">Hardware Connectivity</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                {data.hectos.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="gradient-text-blue-cyan">
                  {data.hectos.title.split(" ").slice(-2).join(" ")}
                </span>
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {data.hectos.description}
              </p>
              
              <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider mt-2">
                Hectos edge signals collected:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {data.hectos.captures.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Built for Diverse Environments (Assets & Protocols) */}
      <section className="py-16 md:py-24 bg-[#09090d] border-b border-brand-border/40 relative overflow-hidden">
        <div className="circuit-pattern opacity-[0.03] absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center flex flex-col gap-4 max-w-3xl mx-auto mb-16">
            <Badge variant="blue" className="mx-auto">Assets & Protocol Coverage</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              {data.connectivity.title.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="gradient-text-indigo-blue">
                {data.connectivity.title.split(" ").slice(-2).join(" ")}
              </span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              {data.connectivity.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Column 1: Machine Assets */}
            <Card variant="default" className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider border-b border-brand-border/60 pb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand-blue" /> Supported Machine Assets
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.connectivity.assets.map((asset, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 bg-brand-card/80 border border-brand-border rounded text-slate-300">
                    {asset}
                  </span>
                ))}
              </div>
            </Card>

            {/* Column 2: Protocols list */}
            <Card variant="cyan" className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider border-b border-brand-border/60 pb-3 flex items-center gap-2">
                <Network className="w-4 h-4 text-brand-cyan" /> Supported Protocols & Interfaces
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.connectivity.protocols.map((protocol, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 bg-brand-cyan/5 border border-brand-cyan/20 rounded text-brand-cyan">
                    {protocol}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500 italic mt-2">
                {data.connectivity.note}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: How X-Konnect works with Df-OS */}
      <section className="py-16 md:py-24 bg-brand-bg border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge variant="cyan" className="w-fit">Contextualized IoT</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                {data.workflowIntegration.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="gradient-text-blue-cyan">
                  {data.workflowIntegration.title.split(" ").slice(-2).join(" ")}
                </span>
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {data.workflowIntegration.description}
              </p>
              
              <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider mt-2">
                Workflows triggered by X-Konnect data inside Df-OS:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {data.workflowIntegration.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: AnswerBlock / GEO Focus */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <AnswerBlock
                question="What is the benefit of connecting machine data directly to a Df-OS?"
                answer="Traditional IIoT setups dump machine data into raw charts. Inside Df-OS, X-Konnect contextualizes machine parameters. An alarm signal doesn't just display on a screen; it automatically registers a downtime event, creates a shift logs entry, triggers a PM work order for technicians, and logs raw variables into the factory memory database."
              />
              {/* Digital Twin live data screenshot */}
              <ProductScreenFrame
                src="/images/platform/digital-twin.png"
                alt="Df-OS Digital Twin Factory Control Tower"
                url="app.df-os.com/digital-twin"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Section 5: X-Konnect + Vish AI sync */}
      <section className="py-16 md:py-24 bg-[#09090d] border-b border-brand-border/40 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Answer panel */}
            <div className="lg:col-span-5 border border-brand-green/20 bg-brand-card/45 rounded-xl p-6 relative overflow-hidden flex flex-col gap-4">
              <div className="absolute inset-0 blueprint-grid-fine opacity-20" />
              <h3 className="text-xs font-bold font-mono text-brand-green uppercase tracking-wider relative flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-green signal-dot" /> Live Vish AI Reasoning
              </h3>
              <div className="flex flex-col gap-2 relative">
                {data.vishAi.questions.slice(0, 4).map((q, idx) => (
                  <div key={idx} className="bg-brand-card/75 border border-brand-border p-2.5 rounded text-xs sm:text-sm text-slate-300 font-mono">
                    &ldquo;{q}&rdquo;
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-6">
              <Badge variant="green" className="w-fit">Vish AI Enrichment</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                {data.vishAi.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="gradient-text-green-emerald">
                  {data.vishAi.title.split(" ").slice(-2).join(" ")}
                </span>
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {data.vishAi.description}
              </p>
              
              <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider mt-2">
                Explore how Vish AI answers questions using connected signals:
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5" />
                  <span>&ldquo;Yield drop explained via motor frequency fluctuations captured on Line 2.&rdquo;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5" />
                  <span>&ldquo;Idle energy spikes identified by correlation with PLC status signals during shift breaks.&rdquo;</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Section 6: Use Cases Grid */}
      <section className="py-16 md:py-24 bg-brand-bg border-b border-brand-border/40 relative overflow-hidden">
        <div className="circuit-pattern opacity-[0.03] absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center flex flex-col gap-4 max-w-3xl mx-auto mb-16">
            <Badge variant="blue" className="mx-auto">Use Cases</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Industrial IoT <span className="gradient-text-blue-cyan">Use Cases</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Realize machine connectivity use cases across utility, maintenance, quality, and shopfloor OEE monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.useCases.map((uc, idx) => {
              const Icon = useCaseIcons[idx] || Activity;
              return (
                <Card key={idx} variant="default" className="flex flex-col gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-cyan/5 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight uppercase font-mono">{uc.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{uc.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 7: Why X-Konnect & Outcomes */}
      <section className="py-16 md:py-24 bg-[#050508] relative overflow-hidden">
        <div className="circuit-pattern opacity-[0.05] absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Why X-Konnect points */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge variant="cyan" className="w-fit">Differentiation</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Why Choose <span className="gradient-text-blue-cyan">X-Konnect</span>
              </h2>
              <div className="flex flex-col gap-4 mt-2">
                {data.whyXKonnect.map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center shrink-0 font-mono text-[10px] text-brand-cyan font-bold">
                      0{idx + 1}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-bold text-white">{point.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Outcomes & Demo box */}
            <div className="lg:col-span-5 border border-brand-border bg-brand-card/45 rounded-xl p-6 text-center flex flex-col gap-5">
              <Badge variant="cyan" className="mx-auto">Machine Outcomes</Badge>
              <h3 className="text-base font-bold text-white tracking-tight">
                Ready to Connect Your Machines?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Bring live machine and utility data into Df-OS for real-time visibility, automated checklists, alerts, sitemaps, and Vish AI decisions.
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
