import React from "react";
import { Metadata } from "next";
import { resourcesPageData } from "@/data/resources";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AnswerBlock from "@/components/seo/AnswerBlock";
import { HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: resourcesPageData.seo.title,
  description: resourcesPageData.seo.description,
  alternates: {
    canonical: "https://df-os.com/resources",
  },
};

export default function ResourcesPage() {
  const data = resourcesPageData;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-brand-bg blueprint-grid overflow-hidden border-b border-brand-border/40">
        <div className="particle-grid opacity-[0.8]" />
        <div className="scan-beam opacity-[0.05]" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative flex flex-col gap-6 pt-8">
          <Badge variant="cyan" className="mx-auto">
            {data.hero.eyebrow}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight text-shimmer">
            {data.hero.headline}
          </h1>
          
          <p className="text-slate-300 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
            {data.hero.subheadline}
          </p>
        </div>
      </section>

      {/* Section 1: Thought Leadership Blog cards */}
      <section className="py-16 md:py-24 bg-[#09090d] border-b border-brand-border/40 relative overflow-hidden">
        <div className="scan-beam opacity-[0.03] absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div className="flex flex-col gap-2">
              <Badge variant="blue" className="w-fit">Insights Blog</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Latest <span className="gradient-text-blue-cyan">Publications</span>
              </h2>
              <p className="text-sm text-slate-400">
                Explore our recent thought leadership articles covering digital transformation.
              </p>
            </div>
            
            <div className="text-xs text-slate-500 font-mono italic">
              Ready for CMS sync
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.blogPosts.map((post) => (
              <Card key={post.slug} variant="default" className="flex flex-col gap-4 bg-brand-card/50 overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                {/* Tech image zoom placeholder header */}
                <div className="relative h-40 -mx-6 -mt-6 mb-2 overflow-hidden bg-gradient-to-br from-brand-blue/15 to-brand-cyan/15 border-b border-brand-border/60">
                  <div className="absolute inset-0 blueprint-grid opacity-20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111116] to-transparent z-10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-cyan opacity-40 group-hover:scale-110 group-hover:opacity-85 transition-all duration-500 font-mono text-xs uppercase tracking-widest font-black z-20">
                    {post.category}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono relative z-10">
                  <span className="text-brand-cyan font-bold uppercase">{post.category}</span>
                  <span className="text-slate-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-base font-bold text-white tracking-tight leading-snug hover:text-brand-cyan transition-colors relative z-10">
                  <Link href={`/resources/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed flex-grow relative z-10">
                  {post.excerpt}
                </p>

                <div className="border-t border-brand-border/40 pt-4 flex items-center justify-between text-[10px] text-slate-500 font-mono relative z-10">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Glossary (SEO/AEO Anchor) */}
      <section id="glossary" className="py-16 md:py-24 bg-brand-bg border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left GEO AnswerBlock */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <AnswerBlock
                question="What is Generative Engine Optimization (GEO) for manufacturing sites?"
                answer="GEO involves structuring your technical documentation, product capabilities, and industry definitions into clear, modular text panels rather than burying details in long paragraphs. By combining concise answer blocks with schemas, we help LLM crawlers extract and surface Df-OS as a citation on industrial queries."
              />
            </div>

            {/* Right Glossary list */}
            <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-6">
              <Badge variant="cyan" className="w-fit">Category Glossary</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Key Category <span className="gradient-text-blue-cyan">Definitions</span>
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                A structured reference sheet clarifying core concepts of connected factory operating layers.
              </p>

              <div className="flex flex-col gap-4 mt-2 max-h-[400px] overflow-y-auto pr-2">
                {data.glossary.map((item) => (
                  <div key={item.slug} className="flex gap-3 items-start border-b border-brand-border/40 pb-4">
                    <HelpCircle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                        {item.term}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.definition}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Final CTA */}
      <section className="py-20 bg-[#050508] text-center relative overflow-hidden">
        {/* Unique circuit-pattern + scan beam */}
        <div className="circuit-pattern opacity-[0.08] absolute inset-0 pointer-events-none" />
        <div className="scan-beam opacity-[0.04] absolute inset-0 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col gap-6">
          <Badge variant="cyan" className="mx-auto">Book a Demo</Badge>
          <h2 className="text-4xl font-black text-white tracking-tight">
            Schedule a <span className="gradient-text-blue-cyan">Personalized Walkthrough</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Book an interactive demo session with our solution architects to see how Df-OS digitizes processes and connects machines inside your plant.
          </p>
          <div className="mt-2 flex justify-center">
            <Button href="/contact" variant="primary" className="group">
              Book a Demo Session
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
