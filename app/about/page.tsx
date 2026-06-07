import React from "react";
import Image from "next/image";
import StockImage from "@/components/ui/StockImage";
import { Metadata } from "next";
import { aboutPageData } from "@/data/about";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AnswerBlock from "@/components/seo/AnswerBlock";
import { Shield, CheckCircle2, History, Compass, HeartHandshake, Eye, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: aboutPageData.seo.title,
  description: aboutPageData.seo.description,
  alternates: {
    canonical: "https://df-os.com/about",
  },
};

export default function AboutPage() {
  const data = aboutPageData;

  const pillarIcons = [
    Compass,        // Build for the Floor
    HeartHandshake, // Respect the Rhythm
    Eye,            // Scale Without Friction
    Shield,         // Build Factory Memory
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-brand-bg blueprint-grid overflow-hidden border-b border-brand-border/40">
        <div className="particle-grid opacity-[0.8]" />
        <div className="scan-beam opacity-[0.05]" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-indigo/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative flex flex-col gap-6 pt-8">
          <Badge variant="indigo" className="mx-auto">
            {data.hero.eyebrow}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight text-shimmer">
            {data.hero.headline}
          </h1>
          
          <p className="text-slate-300 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
            {data.hero.subheadline}
          </p>

          {/* Hero team photography */}
          <div className="mt-4 max-w-3xl mx-auto w-full rounded-xl overflow-hidden border border-brand-border/30 shadow-2xl shadow-brand-indigo/10">
            <StockImage
              src="/images/stock/engineers-robotics.jpg"
              alt="Engineering team inspecting advanced manufacturing robotics"
              overlay="gradient"
              aspectRatio="landscape"
            />
          </div>
        </div>
      </section>

      {/* Section 1: Vision & Mission split */}
      <section className="py-16 md:py-24 bg-[#09090d] border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Vision Card */}
            <Card variant="default" className="flex flex-col gap-4 border-l-4 border-l-brand-blue bg-brand-card/50">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Eye className="w-5 h-5 text-brand-blue" />
                {data.visionMission.vision.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {data.visionMission.vision.text}
              </p>
            </Card>

            {/* Mission Card */}
            <Card variant="default" className="flex flex-col gap-4 border-l-4 border-l-brand-cyan bg-brand-card/50">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-brand-cyan" />
                {data.visionMission.mission.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {data.visionMission.mission.text}
              </p>
            </Card>

          </div>

          {/* Engineer portrait visual */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden border border-brand-border/30">
              <Image
                src="/images/stock/engineer-portrait.jpg"
                alt="Manufacturing technology professional"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-white">Built by Factory People</h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                Our team combines deep manufacturing domain expertise with modern software engineering. We’ve walked the floors, understood the constraints, and built technology that respects the rhythm of real production environments.
              </p>
            </div>
          </div>

          <div className="text-center mt-12 max-w-2xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-mono text-brand-blue uppercase tracking-widest font-bold">
              Brand essence: {data.visionMission.essence}
            </span>
            <p className="text-sm text-slate-400 italic leading-relaxed">
              &ldquo;{data.visionMission.belief}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Detailed Story Narrative */}
      <section className="py-16 md:py-24 bg-brand-bg border-b border-brand-border/40 relative overflow-hidden">
        <div className="scan-beam opacity-[0.03] absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge variant="indigo" className="w-fit">Platform Origins</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                {data.storyText.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="gradient-text-blue-cyan">
                  {data.storyText.title.split(" ").slice(-2).join(" ")}
                </span>
              </h2>
              <div className="flex flex-col gap-4 text-sm md:text-base text-slate-300 leading-relaxed">
                {data.storyText.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Right GEO AnswerBlock */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <AnswerBlock
                question="Why was Df-OS established as a Digital Factory Operating System?"
                answer="Df-OS was launched in 2018 by DesignX (founded 2015) after working closely with factories and seeing that point solutions created data silos. Production, quality, and maintenance are deeply linked in reality, but disconnected in systems. Df-OS was created to provide a single connected database layer that captures all execution variables into a unified factory memory timeline."
              />
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Pillars */}
      <section className="py-16 md:py-24 bg-[#09090d] border-b border-brand-border/40 relative overflow-hidden">
        <div className="circuit-pattern opacity-[0.03] absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center flex flex-col gap-4 max-w-3xl mx-auto mb-16">
            <Badge variant="blue" className="mx-auto">Our Core Pillars</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              The Principles That <span className="gradient-text-indigo-blue">Guide Us</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              How we design technology solutions for the 7.5+ million manufacturing plants globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.pillars.map((p, idx) => {
              const Icon = pillarIcons[idx] || Compass;
              return (
                <Card key={idx} variant="default" className="flex flex-col gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-blue/5 border border-brand-blue/20 flex items-center justify-center text-brand-blue">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight uppercase font-mono">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{p.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: History Timeline */}
      <section className="py-16 md:py-24 bg-brand-bg border-b border-brand-border/40 relative overflow-hidden">
        <div className="circuit-pattern opacity-[0.05] absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center flex flex-col gap-4 max-w-3xl mx-auto mb-16">
            <Badge variant="cyan" className="mx-auto">Company Roadmap</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Our Journey <span className="gradient-text-blue-cyan">So Far</span>
            </h2>
          </div>

          <div className="relative border-l border-brand-border/60 max-w-3xl mx-auto flex flex-col gap-10 pl-6">
            {data.timeline.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Marker */}
                <div className="absolute -left-9 top-1 w-6 h-6 rounded-full bg-brand-card border-2 border-brand-cyan flex items-center justify-center shadow-[0_0_8px_rgba(6,182,212,0.3)]">
                  <History className="w-3 h-3 text-brand-cyan" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-mono font-bold text-brand-cyan">{item.year}</span>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Trust & Security */}
      <section id="security" className="py-16 md:py-24 bg-[#09090d] border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <Badge variant="green" className="w-fit">Security & Trust</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                {data.securityTrust.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="gradient-text-green-emerald">
                  {data.securityTrust.title.split(" ").slice(-2).join(" ")}
                </span>
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {data.securityTrust.description}
              </p>
              
              <div className="flex flex-col gap-4 mt-2">
                {data.securityTrust.points.map((pt, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-0.5">
                      <h4 className="text-sm font-bold text-white">{pt.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{pt.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Graphic Panel */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Security leadership visual */}
              <div className="rounded-xl overflow-hidden border border-brand-border/30">
                <StockImage
                  src="/images/stock/businessman-abstract.jpg"
                  alt="Business leadership in digital factory transformation"
                  overlay="dark"
                />
              </div>
              <div className="h-auto border border-brand-border bg-brand-card/25 rounded-xl relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                <div className="absolute inset-0 blueprint-grid opacity-35" />
                <Award className="w-16 h-16 text-brand-green mb-4 relative" />
                <span className="text-xs font-mono text-brand-green font-bold tracking-wider relative uppercase mb-2">
                  ISO 27001 Certified Security
                </span>
                <p className="text-xs text-slate-500 max-w-sm relative leading-relaxed">
                  Df-OS undergoes regular third-party audits to verify encryption standards, database isolation controls, and OT gateway safety protocols.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="py-20 bg-[#050508] text-center relative overflow-hidden">
        {/* Background circuit board & scan beam */}
        <div className="circuit-pattern opacity-[0.06] absolute inset-0 pointer-events-none" />
        <div className="scan-beam opacity-[0.03] absolute inset-0 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col gap-6">
          <Badge variant="cyan" className="mx-auto">Book a Demo</Badge>
          <h2 className="text-4xl font-black text-white tracking-tight">
            See the Platform <span className="gradient-text-blue-cyan">in Action</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Book an interactive demo session with our team to see how Df-OS can digitize, connect, and optimize your specific factory operations.
          </p>
          <div className="mt-2 flex justify-center">
            <Button href="/contact" variant="primary" className="group">
              Book a Demo
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
