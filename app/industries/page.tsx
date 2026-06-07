import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { industriesPageData } from "@/data/industries";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AnswerBlock from "@/components/seo/AnswerBlock";
import { CheckCircle2, Factory, ChevronRight, Activity, HelpCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: industriesPageData.seo.title,
  description: industriesPageData.seo.description,
  alternates: {
    canonical: "https://df-os.com/industries",
  },
};

export default function IndustriesPage() {
  const data = industriesPageData;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-brand-bg blueprint-grid overflow-hidden border-b border-brand-border/40">
        <Image
          src="/images/stock/engineers-robotics.jpg"
          alt="Engineers working with robotics in manufacturing"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/70 via-brand-bg/80 to-brand-bg pointer-events-none" />
        <div className="particle-grid opacity-[0.8]" />
        <div className="scan-beam opacity-[0.05]" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative flex flex-col gap-6 pt-8">
          <Badge variant="blue" className="mx-auto">
            {data.hero.eyebrow}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight text-shimmer">
            {data.hero.headline}
          </h1>
          
          <p className="text-slate-300 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">
            {data.hero.subheadline}
          </p>

          <p className="text-slate-400 text-xs md:text-sm max-w-3xl mx-auto italic">
            {data.hero.supportingCopy}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-2">
            <Button href="/contact" variant="primary" className="w-full sm:w-auto">
              Book a Demo
            </Button>
            <Button href="#industry-list" variant="secondary" className="w-full sm:w-auto">
              Explore Industry Workflows
            </Button>
          </div>
        </div>
      </section>

      {/* Section 1: Industry Positioning & GEO block */}
      <section className="py-16 md:py-24 bg-[#09090d] border-b border-brand-border/40 relative overflow-hidden">
        <div className="scan-beam opacity-[0.03] absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge variant="blue" className="w-fit">Operational Adaptation</Badge>
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

            {/* Right GEO AnswerBlock */}
            <div className="lg:col-span-5">
              <AnswerBlock
                question="Can a single Df-OS support multiple manufacturing sectors?"
                answer="Yes. Traditional software relies on rigid code structures. Df-OS uses a configurable, modular database architecture. By mapping process variables (checking parameters, validation steps, role approvals) into a library of 400+ reusable workflows, Df-OS adapts to the specific operating logic of FMCG, Automotive, Food & Beverage, and Pharmaceuticals without custom coding."
              />
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Detailed Industries List */}
      <section id="industry-list" className="py-16 md:py-24 bg-brand-bg border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          
          {data.list.map((ind, index) => {
            const isEven = index % 2 === 0;
            const industryImageMap: Record<string, { src: string; alt: string }> = {
              fmcg: { src: "/images/stock/automated-production.jpg", alt: "FMCG manufacturing environment" },
              durables: { src: "/images/stock/woman-engineer-robotics.jpg", alt: "Consumer Durables & Electronics manufacturing environment" },
              fnb: { src: "/images/stock/industry-factory.jpg", alt: "Food & Beverages manufacturing environment" },
              automotive: { src: "/images/stock/robotic-arm.jpg", alt: "Automotive manufacturing environment" },
              pharmaceuticals: { src: "/images/stock/woman-inspector.jpg", alt: "Pharmaceuticals manufacturing environment" },
              other: { src: "/images/stock/petrochemical-sunset.jpg", alt: "Other Manufacturing environment" },
            };
            const industryImage = industryImageMap[ind.id];
            return (
              <div
                key={ind.id}
                id={ind.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border border-brand-border/50 bg-brand-card/20 rounded-2xl p-6 md:p-10 relative overflow-hidden scroll-mt-24 transition-all duration-500 hover:border-brand-cyan/30 hover:shadow-[0_15px_30px_rgba(6,182,212,0.08)] hover:-translate-y-1 group ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Top border glow expansion on hover */}
                <div className="absolute top-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-brand-cyan to-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Industry Header Image */}
                {industryImage && (
                  <div className="col-span-1 lg:col-span-12 relative h-40 -mx-6 -mt-6 md:-mx-10 md:-mt-10 mb-4 overflow-hidden rounded-t-xl">
                    <Image
                      src={industryImage.src}
                      alt={industryImage.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 80vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/40 to-transparent" />
                  </div>
                )}

                <div className="absolute inset-0 blueprint-grid-fine opacity-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 border-b border-l border-brand-blue/10 rounded-bl-3xl flex items-center justify-center pointer-events-none">
                  <Factory className="w-8 h-8 text-brand-blue/10" />
                </div>

                {/* Left/Content column (takes 6 cols) */}
                <div className={`col-span-1 lg:col-span-6 flex flex-col gap-5 relative z-10 ${isEven ? "" : "lg:order-2"}`}>
                  <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-widest">
                    Industry Solution 0{index + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {ind.name}
                  </h3>
                  <p className="text-sm font-semibold text-brand-cyan italic">
                    {ind.subtitle}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {ind.description}
                  </p>
                  
                  <div className="border-t border-brand-border/50 pt-5 mt-2 flex flex-col gap-3">
                    <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider">
                      Workflows Df-OS Digitizes:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {ind.workflows.map((flow, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                          <ChevronRight className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                          <span>{flow}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right/Outcomes column (takes 6 cols) */}
                <div className={`col-span-1 lg:col-span-6 flex flex-col gap-5 border border-brand-border/80 bg-brand-card/45 rounded-xl p-6 relative z-10 ${isEven ? "" : "lg:order-1"}`}>
                  <h4 className="text-xs font-bold font-mono text-brand-cyan uppercase tracking-wider border-b border-brand-border/60 pb-3 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-brand-cyan" /> Outcomes Enabled by Df-OS
                  </h4>
                  <div className="flex flex-col gap-3">
                    {ind.outcomes.map((out, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-brand-cyan shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-snug">{out}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-brand-border/60 text-center">
                    <Button href="/contact" variant="secondary" className="w-full">
                      Request {ind.name} Demo
                    </Button>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* Section 3: Why Df-OS Works Across Industries */}
      <section className="py-16 md:py-24 bg-[#09090d] border-b border-brand-border/40 relative overflow-hidden">
        <div className="circuit-pattern opacity-[0.03] absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center flex flex-col gap-4 max-w-3xl mx-auto mb-16">
            <Badge variant="blue" className="mx-auto">Platform Architecture</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              {data.whyWorks.title.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="gradient-text-indigo-blue">
                {data.whyWorks.title.split(" ").slice(-2).join(" ")}
              </span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Explore how Df-OS resolves complexity across various manufacturing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.whyWorks.points.map((point, idx) => (
              <Card key={idx} variant="default" className="flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-blue/5 border border-brand-blue/20 flex items-center justify-center text-brand-blue font-mono font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-bold text-white tracking-tight uppercase font-mono">{point.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{point.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Common Challenges Grid */}
      <section className="py-16 md:py-24 bg-brand-bg border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col gap-4 max-w-3xl mx-auto mb-16">
            <Badge variant="cyan" className="mx-auto">Common Challenges</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Solving Friction <span className="gradient-text-blue-cyan">Across the Factory</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Df-OS is engineered to solve these classic manufacturing problems at the execution level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.challenges.map((challenge, idx) => (
              <div key={idx} className="flex gap-3 items-start border border-brand-border bg-brand-card/25 p-5 rounded-lg hover:border-brand-cyan/20 transition-colors">
                <HelpCircle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">{challenge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Industry CTA */}
      <section className="py-20 bg-[#050508] text-center relative overflow-hidden">
        {/* Unique circuit board & scan beam */}
        <div className="circuit-pattern opacity-[0.08] absolute inset-0 pointer-events-none" />
        <div className="scan-beam opacity-[0.03] absolute inset-0 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col gap-6">
          <Badge variant="cyan" className="mx-auto">Book a Demo</Badge>
          <h2 className="text-4xl font-black text-white tracking-tight">
            Ready to Modernize Your <span className="gradient-text-blue-cyan">Industry Operations?</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Whether you operate in FMCG, electronics, food and beverages, automotive, pharmaceuticals, chemicals, cement, or any other manufacturing industry, Df-OS helps you digitize your unique factory operations and connect them into one intelligent operating layer.
          </p>
          <div className="mt-2 flex justify-center">
            <Button href="/contact" variant="primary" className="group">
              Book an Industry Demo
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
