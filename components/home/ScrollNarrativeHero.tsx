"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homepageData } from "@/data/homepage";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Activity,
  Cpu,
  Brain,
  Layers,
  AlertTriangle,
  FileSpreadsheet,
  MessageSquare,
  AlertCircle,
  ShieldCheck,
  Database,
  Zap,
  Wrench,
  Shield,
  Boxes,
  Users,
  Calendar
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Custom SVG Monogram Logo of Df-OS, extracted and isolated for scalable vector rendering
function DfOsMonogram({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="39 51 171 156"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          id="clip-shape"
          d="M48.14,51.77c-4.76,0-8.62,3.86-8.62,8.62v138.23c0,4.76,3.86,8.62,8.62,8.62h148.47c4.76,0,8.62-3.86,8.62-8.62V60.38c0-4.76-3.86-8.62-8.62-8.62H48.14z"
        />
        <clipPath id="monogram-clip">
          <use href="#clip-shape" style={{ overflow: "visible" }} />
        </clipPath>
        <linearGradient
          id="monogram-grad"
          gradientUnits="userSpaceOnUse"
          x1="607.8898"
          y1="386.5045"
          x2="608.8898"
          y2="386.5045"
          gradientTransform="matrix(105.5948 182.8955 182.8955 -105.5948 -134810.3438 -70329.4062)"
        >
          <stop offset="0" stopColor="#1586FF" />
          <stop offset="1" stopColor="#0D007F" />
        </linearGradient>
      </defs>
      
      {/* Background shape */}
      <polygon
        points="163.81,-19.99 272.55,168.37 80.95,278.99 -27.8,90.63"
        fill="url(#monogram-grad)"
        clipPath="url(#monogram-clip)"
      />
      
      {/* Monogram paths */}
      <g clipPath="url(#monogram-clip)">
        {/* Grey shadow detail */}
        <path fill="#727986" d="M205.39,197.91h-0.14c0.02-0.34-0.12-0.85,0.14-1.08V197.91z" />
        
        {/* White outer detail */}
        <path
          fill="#FFFFFF"
          d="M109.57,67.64c0.92,0.47,1.77,0.86,2.57,1.55c3.53,3.05,2.81,6.94,2.84,11.15c0.03,5.13-0.11,10.27-0.13,15.41c-0.02,4.59,0.02,9.19,0,13.79c-0.09,24.82,0.02,49.68,0,74.54c-0.29,4.26-3.24,7.45-7.5,7.9l-51.22-0.01c-4.38-0.59-6.99-3.68-7.24-8.03c0.06-33.89,0.06-67.76,0.55-101.63c0.08-5.34-1.29-11.1,4.14-14.24c1.86-1.07,2.83-0.94,4.83-0.97c8.96-0.12,17.95,0.08,26.89,0.13c7.01,0.04,14.89-0.49,21.77-0.01C107.87,67.28,108.86,67.64,109.57,67.64 M57.41,116.15l49.07,0.21l0.13-0.41c0.06-8.38-0.1-16.77-0.01-25.15c0.02-1.74,0.52-3.63-0.56-5.24c-1.66-2.48-3.98-1.76-6.54-1.84c-8.9-0.27-17.84-0.08-26.76-0.13c-3.63-0.02-7.44-0.42-11.08-0.15c-2.04,0.15-3.91,1.79-4.12,3.86c-0.59,6,0.44,12.96,0.01,19.06C57.24,109.6,57.49,112.9,57.41,116.15 M68.73,134.43c-1.87,0.41-3.2,2.07-3.34,3.95c0.12,14.16-0.26,28.38,0.2,42.51c0.48,1.62,1.87,2.63,3.52,2.83c8.79-0.13,17.66,0.27,26.42-0.2c1.72-0.71,2.7-2.05,2.84-3.91c-0.13-14.04,0.23-28.12-0.18-42.13c-0.38-1.41-2.05-2.96-3.54-3.08L68.73,134.43z"
        />
        
        {/* White inner detail */}
        <path
          fill="#FFFFFF"
          d="M190.93,141.02h-16.49v-4.93c0-1.09-2.31-3.45-3.58-3.31l-26.15,0.06c-1.45,0.26-2.86,1.84-3.07,3.29c-0.29,1.99-0.22,7.21-0.04,9.29c0.17,1.99,1.61,3.48,3.59,3.71l38.25,0c3.81,0.38,7.09,3.53,7.5,7.37l-0.01,26.62c-0.4,3.46-2.96,6.28-6.34,7.04c-17.29,0.45-34.65,0.07-51.97,0.19c-3.22,0.08-7.5-3.58-7.5-6.82v-9.66h16.49v4.93c0,0.21,0.54,1.37,0.7,1.6c0.78,1.15,2.09,1.6,3.43,1.71c7.85,0.64,16.53-0.48,24.46,0.01c2.08-0.07,3.94-1.49,4.24-3.6l-0.02-17.66c-0.45-1.81-2.07-3.33-3.96-3.48l-38.25,0c-3.69-0.38-6.78-3.36-7.1-7.1c-0.52-6.03,0.38-12.8,0.02-18.91c0.59-3.37,3.08-6.1,6.47-6.78c17.58-0.33,35.28-0.33,52.85,0c2.65,0.28,6.48,4.13,6.48,6.76V141.02z"
        />
        
        {/* Red accent */}
        <path
          fill="#F10001"
          d="M181.06,67.5c-3.11,3.5-3.44,8.97-0.81,12.84h-65.27c-0.02-4.21,0.69-8.1-2.84-11.15c-0.8-0.69-1.64-1.08-2.57-1.55c0.02,0,0.24-0.24,0.46-0.14L181.06,67.5z"
        />
        
        {/* Dark blue overlay */}
        <path fill="#073D77" d="M167.14,95.75c-3.41,3.9-3.33,9.96,0.13,13.78h-52.43c0.02-4.59-0.02-9.19,0-13.78H167.14z" />
        
        {/* White oval inside dark blue overlay */}
        <path
          fill="#FFFFFF"
          d="M167.28,109.53c-3.46-3.82-3.54-9.89-0.14-13.79c5.37-6.14,15.75-3.73,17.8,4.16C187.67,110.42,174.49,117.5,167.28,109.53 M174.55,96.73c-7.85,0.59-6.95,12.81,1.44,11.71C182.96,107.52,182.09,96.17,174.55,96.73"
        />
        
        {/* White circle top right */}
        <path
          fill="#FFFFFF"
          d="M180.25,80.34c-2.63-3.87-2.3-9.34,0.81-12.84c6.7-7.55,19.54-1.57,17.94,8.54C197.55,85.2,185.47,88.02,180.25,80.34 M188.19,68.75c-7.49,0.95-6.35,12.58,1.57,11.71C197.22,79.64,196.08,67.75,188.19,68.75"
        />
      </g>
    </svg>
  );
}

// Eased React Count-Up Component for premium visual numbers rolling
function CountUpNumber({ target, duration = 1600, suffix = "", active = true }: { target: number; duration?: number; suffix?: string; active?: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) {
      const id = requestAnimationFrame(() => setCount(0));
      return () => cancelAnimationFrame(id);
    }
    const end = target;
    const startTime = performance.now();
    let animationFrameId: number;
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration, active]);
  return <span>{count.toLocaleString()}{suffix}</span>;
}

const logoData: { [key: string]: { name: string; category: string; ext?: string } } = {
  unilever: { name: "Unilever", category: "FMCG" },
  badshah: { name: "Badshah Masala", category: "FMCG" },
  marico: { name: "Marico", category: "FMCG" },
  dabur: { name: "Dabur", category: "FMCG" },
  itc: { name: "ITC Limited", category: "FMCG" },
  pepsico: { name: "PepsiCo", category: "FMCG", ext: "svg" },
  danone: { name: "Danone", category: "FMCG" },
  hygienic: { name: "Hygienic Research", category: "FMCG" },
  mondelez: { name: "Mondelēz", category: "FMCG" },
  wholetruth: { name: "The Whole Truth Foods", category: "FMCG" },
  hero: { name: "Hero MotoCorp", category: "Automotive", ext: "svg" },
  suzuki: { name: "Suzuki", category: "Automotive", ext: "svg" },
  bajaj: { name: "Bajaj Auto", category: "Automotive", ext: "svg" },
  ceat: { name: "CEAT", category: "Automotive" },
  lumax: { name: "Lumax", category: "Automotive" },
  radiant: { name: "Radiant Industries", category: "Automotive" },
  jbm: { name: "JBM Group", category: "Automotive" },
  ppap: { name: "PPAP Automotive", category: "Automotive" },
  delux: { name: "Delux Bearings", category: "Automotive" },
  dellorto: { name: "Dell'Orto", category: "Automotive" },
  sparkminda: { name: "Spark Minda", category: "Automotive" },
  tvs: { name: "TVS Motor", category: "Others" },
  amber: { name: "Amber Enterprises", category: "Others" },
  tex: { name: "Tex Fasteners", category: "Others" },
  picl: { name: "PICL", category: "Others" },
  kohler: { name: "Kohler", category: "Others" },
  sunplast: { name: "Sunplast", category: "Others" },
  sidwal: { name: "Sidwal", category: "Others" },
  solex: { name: "Solex Energy", category: "Others" },
  iljin: { name: "ILJIN", category: "Others" }
};

export default function ScrollNarrativeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const [mobileStage, setMobileStage] = useState(0);

  const stages = homepageData.heroSlides;
  const icons = [ShieldCheck, Activity, Cpu, Brain, Layers];
  const colors = ["cyan", "indigo", "blue", "green", "cyan"];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const ctx = gsap.context(() => {
      // Pin the hero section with GSAP ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=3500", // Increased scroll range for smoother pacing
          pin: true,
          scrub: 1.2, // Slightly higher scrub smoothing for cinematic fluidity
          id: "hero-pin",
          onUpdate: (self) => {
            const progress = self.progress;
            let stage = 0;
            if (progress < 0.2) stage = 0;
            else if (progress < 0.4) stage = 1;
            else if (progress < 0.6) stage = 2;
            else if (progress < 0.8) stage = 3;
            else stage = 4;
            setActiveStage(stage);
          },
        },
      });

      // Initialize properties for clean setup using autoAlpha for robust visibility/ghosting control
      gsap.set(".hero-text-0", { autoAlpha: 1, y: 0 });
      gsap.set(".graphic-stage-0", { autoAlpha: 1, scale: 1 });
      gsap.set(".hero-trust-section", { autoAlpha: 1, y: 0 });
      
      stages.forEach((_, index) => {
        if (index > 0) {
          gsap.set(`.hero-text-${index}`, { autoAlpha: 0, y: 20 });
          gsap.set(`.graphic-stage-${index}`, { autoAlpha: 0, scale: 0.95 });
        }
      });

      // Distinct hold & transition phases for a premium visual flow
      // Stage 0 Hold Phase (time 0.0 to 0.75)
      tl.to({}, { duration: 0.75 });

      stages.forEach((_, index) => {
        if (index > 0) {
          const label = `stage-${index}`;
          // Transition Phase (duration: 0.25)
          tl.addLabel(label);
          
          if (index - 1 === 0) {
            tl.to(".hero-trust-section", { autoAlpha: 0, y: -20, duration: 0.2, ease: "power2.in" }, label);
          }
          
          tl.to(`.hero-text-${index - 1}`, { autoAlpha: 0, y: -20, duration: 0.2, ease: "power2.in" }, label)
            .to(`.graphic-stage-${index - 1}`, { autoAlpha: 0, scale: 0.95, duration: 0.2, ease: "power2.in" }, label)
            .to(`.hero-text-${index}`, { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out" }, `${label}+=0.05`)
            .to(`.graphic-stage-${index}`, { autoAlpha: 1, scale: 1, duration: 0.25, ease: "power2.out" }, `${label}+=0.05`)
            // Hold Phase (duration: 0.75)
            .to({}, { duration: 0.75 });
        }
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [stages]);

  const handleStageClick = (index: number) => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setActiveStage(index);
      return;
    }

    const scrollTriggerInstance = ScrollTrigger.getById("hero-pin");
    if (scrollTriggerInstance) {
      const start = scrollTriggerInstance.start;
      const end = scrollTriggerInstance.end;
      const scrollRange = end - start;
      const targetScroll = start + (index / 4) * scrollRange;
      
      window.scrollTo({
        top: targetScroll + 10,
        behavior: "smooth"
      });
    } else {
      setActiveStage(index);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Inline style for mobile marquee scroll and desktop circular orbits */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-scroll {
          display: flex;
          width: max-content;
          animation: marquee-scroll 48s linear infinite;
        }
        @keyframes orbit-clockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbit-counter-clockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        .animate-orbit-cw {
          animation: orbit-clockwise var(--duration, 60s) linear infinite;
        }
        .animate-orbit-ccw {
          animation: orbit-counter-clockwise var(--duration, 60s) linear infinite;
        }
        .orbit-logo-card svg {
          width: 86px !important;
          height: 30px !important;
          transition: all 0.3s ease;
        }
        .animate-marquee-scroll svg {
          width: 86px !important;
          height: 30px !important;
        }
      `}} />
      
      {/* 1. DESKTOP CINEMATIC SCROLL HERO */}
      <div
        ref={triggerRef}
        className="hidden md:flex h-screen w-full bg-brand-bg overflow-hidden blueprint-grid relative pt-[72px]"
      >
        {/* Futuristic Global Network Background Video with Contrast Overlays */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-100"
            poster="/images/stock/digital-wireframe.jpg"
          >
            <source src="/videos/futuristic-digital-network-plexus.webm" type="video/webm" />
            <source src="/videos/futuristic-digital-network-plexus.mp4" type="video/mp4" />
          </video>
          
          {/* Global Dark Tint Overlay (50% opacity) */}
          <div className="absolute inset-0 bg-brand-bg/50 z-1" />
          
          {/* Left Readability Overlay (dark navy gradient from left to transparent) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07070a] via-[#07070a]/75 to-transparent z-2 w-2/3" />
          
          {/* Bottom Fade Overlay (dark gradient from bottom upward) */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#07070a] to-transparent z-2" />
          
          {/* Right-side subtle radial glow behind visual graphics */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-brand-cyan/5 via-brand-blue/5 to-transparent rounded-full blur-[130px] z-2" />
        </div>

        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Unified Layout Container */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full h-[calc(100vh-100px)] flex flex-col justify-between relative z-10 pb-6">
          
          {/* 12-Column Desktop Grid for Slide Content */}
          <div className="grid grid-cols-12 gap-8 items-center w-full my-auto relative">
            
            {/* LEFT SIDE Content Column (col-span-6 relative flex flex-col justify-center pr-4) */}
            <div className="col-span-6 relative h-[480px] flex flex-col justify-center pr-4">
              {stages.map((stage, index) => {
                return (
                  <div
                    key={stage.id}
                    className={`hero-text-${index} absolute w-full flex flex-col gap-3.5 text-left items-start ${
                      index === 0 ? "pointer-events-auto z-10" : "opacity-0 invisible pointer-events-none z-0"
                    }`}
                  >
                    {index === 0 ? (
                      // Slide 1 Content
                      <>
                        <div className="flex flex-col gap-1 items-start">
                          <span className="text-[9.5px] font-mono font-bold tracking-widest uppercase text-brand-cyan border border-brand-cyan/25 px-2.5 py-1 rounded bg-brand-cyan/5">
                            INTRODUCING A NEW CATEGORY IN MANUFACTURING
                          </span>
                          
                          <div className="flex items-baseline gap-4 mt-2">
                            <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-none text-shimmer">
                              Df-OS
                            </h1>
                            <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded border border-brand-blue/30 text-brand-cyan bg-brand-blue/5">
                              AI-Ready Manufacturing
                            </span>
                          </div>
                          
                          <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-200 leading-tight mt-1">
                            Digital Factory Operating System
                          </h2>
                        </div>
                        
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                          Transform fragmented factory operations into connected operational intelligence through one unified digital operating layer built for modern manufacturing.
                        </p>

                        {/* Brand Promise Highlight Badge */}
                        <div className="flex items-center gap-2 px-3.5 py-1 rounded-full border border-brand-cyan/35 text-brand-cyan bg-brand-cyan/5 text-[9px] font-mono font-black uppercase tracking-widest shadow-[0_0_10px_rgba(6,182,212,0.15)] my-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                          <span>Brand Promise: Disrupt Without Disruption</span>
                        </div>

                        {/* Value Pillars 2x2 grid */}
                        <div className="grid grid-cols-2 gap-3 w-full max-w-xl my-2">
                          <div className="flex items-center gap-3 p-3 rounded-xl border border-brand-border/30 bg-[#111116]/30 shadow-md hover:border-brand-cyan/45 hover:bg-[#161620]/30 transition-all duration-300">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-cyan/10 text-brand-cyan shrink-0">
                              <FileSpreadsheet className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-white leading-none mb-1">Digitize Workflows</span>
                              <span className="text-[9.5px] text-slate-400">Low-code shopfloor tools</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-xl border border-brand-border/30 bg-[#111116]/30 shadow-md hover:border-brand-blue/45 hover:bg-[#161620]/30 transition-all duration-300">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue/10 text-brand-blue shrink-0">
                              <Cpu className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-white leading-none mb-1">Connect Operations</span>
                              <span className="text-[9.5px] text-slate-400">Live IoT & HMI connectivity</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-xl border border-brand-border/30 bg-[#111116]/30 shadow-md hover:border-brand-green/45 hover:bg-[#161620]/30 transition-all duration-300">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-green/10 text-brand-green shrink-0">
                              <Database className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-white leading-none mb-1">Create Factory Memory</span>
                              <span className="text-[9.5px] text-slate-400">Unified historical database</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-xl border border-brand-border/30 bg-[#111116]/30 shadow-md hover:border-brand-cyan/45 hover:bg-[#161620]/30 transition-all duration-300">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-cyan/10 text-brand-cyan shrink-0">
                              <Brain className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-white leading-none mb-1">Power AI Decisions</span>
                              <span className="text-[9.5px] text-slate-400">Vish AI agent integration</span>
                            </div>
                          </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-4 mt-2">
                          <Button href="/contact" variant="primary" className="group px-8 py-3.5 text-sm font-bold shadow-[0_4px_20px_rgba(6,182,212,0.25)]">
                            Book a Demo
                            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                          </Button>
                          <Button href="/platform/df-os" variant="secondary" className="px-8 py-3.5 text-sm font-bold bg-slate-950/40 backdrop-blur-sm hover:bg-slate-900/60 border border-brand-border">
                            Explore the Platform
                          </Button>
                        </div>
                      </>
                    ) : (
                      // Slides 2-5 Content
                      <>
                        <Badge variant={colors[index] as "cyan" | "indigo" | "blue" | "green"}>
                          {stage.eyebrow}
                        </Badge>
                        
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight text-shimmer">
                          {stage.headline}
                        </h2>
                        
                        <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                          {stage.subheadline}
                        </p>
                        
                        <p className="text-xs text-slate-500 font-mono italic">
                          {stage.microcopy}
                        </p>
       
                        <div className="flex items-center gap-4 mt-2">
                          <Button href={stage.ctaHref} variant="primary" className="group px-8 py-3.5 text-sm font-bold shadow-[0_4px_20px_rgba(6,182,212,0.25)]">
                            {stage.ctaText}
                            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                          </Button>
                          {index === 4 && (
                            <Button href="/platform/df-os" variant="secondary" className="px-8 py-3.5 text-sm font-bold bg-slate-950/40 backdrop-blur-sm hover:bg-slate-900/60 border border-brand-border">
                              Explore the AI Stack
                            </Button>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* RIGHT SIDE Visual Column (col-span-5 col-start-8 relative h-[480px] flex items-center justify-center) */}
            <div className="col-span-5 col-start-8 relative h-[480px] flex items-center justify-center">
              
              {/* Graphic Stage 0 (Slide 1): Df-OS Ecosystem */}
              <div className="graphic-stage-0 absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="relative w-[340px] h-[340px] flex items-center justify-center">
                  
                  {/* Concentric grid circular orbits */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 340 340">
                    <circle cx="170" cy="170" r="55" stroke="rgba(6, 182, 212, 0.22)" strokeWidth="1" strokeDasharray="3 6" fill="none" />
                    <circle cx="170" cy="170" r="95" stroke="rgba(6, 182, 212, 0.14)" strokeWidth="1" strokeDasharray="4 8" fill="none" />
                    <circle cx="170" cy="170" r="135" stroke="rgba(6, 182, 212, 0.08)" strokeWidth="1" strokeDasharray="2 6" fill="none" />
                  </svg>

                  {/* SVG connection lines overlay */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 340 340">
                    <defs>
                      {[
                        { label: "Production", icon: Cpu, color: "text-brand-cyan border-brand-cyan/20 bg-brand-cyan/5", pos: "left-[50%] top-[4%] -translate-x-1/2", cx: 170, cy: 25 },
                        { label: "Quality", icon: ShieldCheck, color: "text-brand-blue border-brand-blue/20 bg-brand-blue/5", pos: "right-[4%] top-[18%] translate-x-0 -translate-y-1/2", cx: 280, cy: 65 },
                        { label: "Maintenance", icon: Wrench, color: "text-brand-cyan border-brand-cyan/20 bg-brand-cyan/5", pos: "right-[2%] top-[50%] translate-x-0 -translate-y-1/2", cx: 310, cy: 170 },
                        { label: "Safety", icon: Shield, color: "text-brand-green border-brand-green/20 bg-brand-green/5", pos: "right-[4%] bottom-[18%] translate-x-0 translate-y-1/2", cx: 280, cy: 275 },
                        { label: "Warehouse", icon: Boxes, color: "text-brand-cyan border-brand-cyan/20 bg-brand-cyan/5", pos: "left-[50%] bottom-[4%] -translate-x-1/2", cx: 170, cy: 315 },
                        { label: "Energy", icon: Zap, color: "text-amber-400 border-amber-400/20 bg-amber-400/5", pos: "left-[4%] bottom-[18%] translate-x-0 translate-y-1/2", cx: 60, cy: 275 },
                        { label: "HR", icon: Users, color: "text-brand-blue border-brand-blue/20 bg-brand-blue/5", pos: "left-[2%] top-[50%] translate-x-0 -translate-y-1/2", cx: 30, cy: 170 },
                        { label: "Planning", icon: Calendar, color: "text-indigo-400 border-indigo-400/20 bg-indigo-400/5", pos: "left-[4%] top-[18%] translate-x-0 -translate-y-1/2", cx: 60, cy: 65 }
                      ].map((node, idx) => (
                        <linearGradient key={`grad-${idx}`} id={`grad-${idx}`} x1={node.cx} y1={node.cy} x2="170" y2="170" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor={
                            idx === 0 || idx === 2 || idx === 4 ? "#06b6d4" :
                            idx === 1 || idx === 6 ? "#3b82f6" :
                            idx === 3 ? "#10b981" :
                            idx === 5 ? "#f59e0b" : "#818cf8"
                          } stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                        </linearGradient>
                      ))}
                    </defs>
                    
                    {/* Connection lines and animated flowing signals */}
                    {[
                      { cx: 170, cy: 25, color: "#06b6d4" },
                      { cx: 280, cy: 65, color: "#3b82f6" },
                      { cx: 310, cy: 170, color: "#06b6d4" },
                      { cx: 280, cy: 275, color: "#10b981" },
                      { cx: 170, cy: 315, color: "#06b6d4" },
                      { cx: 60, cy: 275, color: "#f59e0b" },
                      { cx: 30, cy: 170, color: "#3b82f6" },
                      { cx: 60, cy: 65, color: "#818cf8" }
                    ].map((node, idx) => (
                      <g key={`flow-${idx}`}>
                        <path 
                          d={`M ${node.cx} ${node.cy} L 170 170`} 
                          stroke={`url(#grad-${idx})`} 
                          strokeWidth="1" 
                          strokeDasharray="3 5" 
                          className="opacity-30"
                        />
                        <circle r="2.5" fill={node.color} className="filter drop-shadow-[0_0_4px_currentColor]">
                          <animateMotion dur={`${2.5 + idx * 0.5}s`} repeatCount="indefinite" path={`M ${node.cx} ${node.cy} L 170 170`} />
                        </circle>
                      </g>
                    ))}
                  </svg>

                  {/* Central operating core background glow */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95px] h-[95px] rounded-full bg-brand-cyan/10 animate-ping z-0" style={{ animationDuration: '4s' }} />

                  {/* Central Df-OS logo capsule */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-2xl bg-[#07070a]/95 border border-brand-cyan/60 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.35)] z-20">
                    <div className="absolute inset-[-4px] rounded-2xl border border-dashed border-brand-cyan/20 animate-spin" style={{ animationDuration: '28s' }} />
                    <div className="absolute inset-[-8px] rounded-2xl border border-dotted border-brand-blue/15 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                    <DfOsMonogram className="w-10 h-10" />
                  </div>

                  {/* Outer Node HTML capsules */}
                  {[
                    { label: "Production", icon: Cpu, color: "text-slate-300 border-brand-border/40 bg-[#0c0c12]/80 hover:text-brand-cyan hover:border-brand-cyan/40", pos: "left-[50%] top-[4%] -translate-x-1/2" },
                    { label: "Quality", icon: ShieldCheck, color: "text-slate-300 border-brand-border/40 bg-[#0c0c12]/80 hover:text-brand-blue hover:border-brand-blue/40", pos: "right-[4%] top-[18%] translate-x-0 -translate-y-1/2" },
                    { label: "Maintenance", icon: Wrench, color: "text-slate-300 border-brand-border/40 bg-[#0c0c12]/80 hover:text-brand-cyan hover:border-brand-cyan/40", pos: "right-[2%] top-[50%] translate-x-0 -translate-y-1/2" },
                    { label: "Safety", icon: Shield, color: "text-slate-300 border-brand-border/40 bg-[#0c0c12]/80 hover:text-brand-green hover:border-brand-green/40", pos: "right-[4%] bottom-[18%] translate-x-0 translate-y-1/2" },
                    { label: "Warehouse", icon: Boxes, color: "text-slate-300 border-brand-border/40 bg-[#0c0c12]/80 hover:text-brand-cyan hover:border-brand-cyan/40", pos: "left-[50%] bottom-[4%] -translate-x-1/2" },
                    { label: "Energy", icon: Zap, color: "text-slate-300 border-brand-border/40 bg-[#0c0c12]/80 hover:text-amber-450 hover:border-amber-400/40", pos: "left-[4%] bottom-[18%] translate-x-0 translate-y-1/2" },
                    { label: "HR", icon: Users, color: "text-slate-300 border-brand-border/40 bg-[#0c0c12]/80 hover:text-brand-blue hover:border-brand-blue/40", pos: "left-[2%] top-[50%] translate-x-0 -translate-y-1/2" },
                    { label: "Planning", icon: Calendar, color: "text-slate-300 border-brand-border/40 bg-[#0c0c12]/80 hover:text-indigo-400 hover:border-indigo-400/40", pos: "left-[4%] top-[18%] translate-x-0 -translate-y-1/2" }
                  ].map(node => {
                    const Icon = node.icon;
                    return (
                      <div
                        key={node.label}
                        className={`absolute ${node.pos} flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[9.5px] font-mono font-bold whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 z-10 ${node.color}`}
                      >
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        <span>{node.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Graphic Stage 1 (Slide 2): Chaos (Accents: Amber + Red sparingly) */}
              <div className="graphic-stage-1 absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 invisible pointer-events-none z-0">
                <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                  <div className="absolute w-[260px] h-[260px] bg-red-950/15 rounded-full blur-[80px] pointer-events-none" />

                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                    <path d="M 50 120 Q 90 200 120 180" fill="none" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="3 6" />
                    <path d="M 320 80 Q 290 140 260 200" fill="none" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="4 4" />
                    <path d="M 100 280 Q 160 300 220 340" fill="none" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="2 5" />
                    <path d="M 180 60 Q 240 90 300 120" fill="none" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="3 3" />
                    
                    <circle cx="120" cy="180" r="3" fill="#ef4444" className="animate-ping" />
                    <circle cx="260" cy="200" r="3" fill="#ef4444" className="animate-ping" />
                    <circle cx="220" cy="340" r="2.5" fill="#f59e0b" className="animate-ping" />
                  </svg>

                  {/* Card 1: Stagnant Excel Sheet (Chaos highlight) */}
                  <motion.div
                    animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 left-6 bg-[#0c0c12]/90 border border-amber-500/25 p-3.5 rounded-xl shadow-[0_4px_20px_rgba(245,158,11,0.08)] flex flex-col gap-1.5 w-[190px]"
                  >
                    <div className="flex justify-between items-center border-b border-amber-500/20 pb-1 mb-0.5">
                      <div className="flex items-center gap-1.5">
                        <FileSpreadsheet className="w-3.5 h-3.5 text-amber-500" />
                        <span className="text-[9px] font-mono text-amber-500 font-bold uppercase tracking-wider">Excel Report</span>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    </div>
                    <span className="text-[10.5px] font-mono text-slate-200 font-semibold truncate">Downtime_Log_v2_final.xlsx</span>
                    <span className="text-[8.5px] text-amber-400/90 font-mono">Stale: Updated 12h ago</span>
                  </motion.div>

                  {/* Card 2: Isolated WhatsApp Thread (Chaos highlight) */}
                  <motion.div
                    animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-24 right-6 bg-[#0c0c12]/90 border border-red-500/25 p-3.5 rounded-xl shadow-[0_4px_20px_rgba(239,68,68,0.06)] flex flex-col gap-1.5 w-[200px]"
                  >
                    <div className="flex justify-between items-center border-b border-red-500/20 pb-1 mb-0.5">
                      <div className="flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-red-400" />
                        <span className="text-[9px] font-mono text-red-400 font-bold uppercase tracking-wider">Isolated Chat</span>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                    </div>
                    <span className="text-[9.5px] text-slate-300 leading-normal italic">&ldquo;Line 2 heater tripped again. Technicians notified verbally.&rdquo;</span>
                    <span className="text-[8px] font-mono text-slate-500">Source: WhatsApp Group</span>
                  </motion.div>

                  {/* Card 3: Handwritten safety logs */}
                  <motion.div
                    animate={{ y: [0, -6, 0], x: [0, -6, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-28 left-6 bg-[#0c0c12]/90 border border-slate-800/80 p-3.5 rounded-xl flex flex-col gap-1.5 w-[180px]"
                  >
                    <div className="flex justify-between items-center border-b border-slate-850 pb-1 mb-0.5">
                      <div className="flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
                        <span className="text-[9px] font-mono text-slate-500 font-bold uppercase tracking-wider">Manual Logs</span>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    </div>
                    <span className="text-[10.5px] font-mono text-slate-300 font-semibold">Shift Safety Checklist</span>
                    <span className="text-[8px] text-slate-500 font-mono">Status: Paper logbook</span>
                  </motion.div>

                  {/* Card 4: Disconnected HMI Alarm (Critical Red) */}
                  <motion.div
                    animate={{ y: [0, 8, 0], x: [0, 6, 0] }}
                    transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute bottom-8 right-6 bg-[#0c0c12]/90 border border-red-500/35 p-3.5 rounded-xl shadow-[0_4px_20px_rgba(239,68,68,0.12)] flex flex-col gap-1.5 w-[190px]"
                  >
                    <div className="flex justify-between items-center border-b border-red-500/20 pb-1 mb-0.5">
                      <div className="flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                        <span className="text-[9px] font-mono text-red-500 font-bold uppercase tracking-wider">Unlogged Alarm</span>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                    </div>
                    <span className="text-[11px] font-mono text-red-400 font-black uppercase">TEMP OOT [185°C]</span>
                    <span className="text-[8.5px] text-slate-400 font-mono">Disconnected from DB</span>
                  </motion.div>
                </div>
              </div>

              {/* Graphic Stage 2 (Slide 3): Df-OS Operating Layer (Accents: Blue + Cyan) */}
              <div className="graphic-stage-2 absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 invisible pointer-events-none z-0">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute w-[280px] h-[280px] bg-brand-blue/10 rounded-full blur-[90px] pointer-events-none" />

                  <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                    <path id="path-wh-2" d="M 340 200 C 270 200, 270 200, 200 200" fill="none" stroke="rgba(21, 134, 255, 0.45)" strokeWidth="1" />
                    <path id="path-prod-2" d="M 270 79 C 235 120, 200 150, 200 200" fill="none" stroke="rgba(6, 182, 212, 0.45)" strokeWidth="1" />
                    <path id="path-qual-2" d="M 130 79 C 165 120, 200 150, 200 200" fill="none" stroke="rgba(99, 102, 241, 0.45)" strokeWidth="1" />
                    <path id="path-maint-2" d="M 60 200 C 130 200, 130 200, 200 200" fill="none" stroke="rgba(21, 134, 255, 0.45)" strokeWidth="1" />
                    <path id="path-safe-2" d="M 130 321 C 165 280, 200 250, 200 200" fill="none" stroke="rgba(6, 182, 212, 0.45)" strokeWidth="1" />
                    <path id="path-util-2" d="M 270 321 C 235 280, 200 250, 200 200" fill="none" stroke="rgba(99, 102, 241, 0.45)" strokeWidth="1" />
                    
                    <circle r="3" fill="#06b6d4" className="filter drop-shadow-[0_0_4px_#06b6d4]">
                      <animateMotion dur="2.8s" repeatCount="indefinite" path="M 270 79 C 235 120, 200 150, 200 200" />
                    </circle>
                    <circle r="3" fill="#1586FF" className="filter drop-shadow-[0_0_4px_#1586FF]">
                      <animateMotion dur="2.2s" repeatCount="indefinite" path="M 340 200 C 270 200, 270 200, 200 200" />
                    </circle>
                    <circle r="3" fill="#6366f1" className="filter drop-shadow-[0_0_4px_#6366f1]">
                      <animateMotion dur="3.2s" repeatCount="indefinite" path="M 130 79 C 165 120, 200 150, 200 200" />
                    </circle>
                    <circle r="3" fill="#06b6d4" className="filter drop-shadow-[0_0_4px_#06b6d4]">
                      <animateMotion dur="2.5s" repeatCount="indefinite" path="M 130 321 C 165 280, 200 250, 200 200" />
                    </circle>
                  </svg>

                  {/* Perimeter Operational Nodes */}
                  <div className="absolute top-[39px] left-[245px] flex flex-col items-center">
                    <span className="text-[7.5px] font-mono text-slate-400 font-bold uppercase mb-1 bg-[#0c0c12]/80 px-1.5 py-0.5 rounded border border-brand-cyan/20">Production</span>
                    <div className="w-3.5 h-3.5 rounded-full border border-brand-cyan bg-brand-bg flex items-center justify-center shadow-[0_0_10px_#06b6d4]">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                    </div>
                  </div>

                  <div className="absolute top-[39px] left-[115px] flex flex-col items-center">
                    <span className="text-[7.5px] font-mono text-slate-400 font-bold uppercase mb-1 bg-[#0c0c12]/80 px-1.5 py-0.5 rounded border border-brand-blue/20">Quality</span>
                    <div className="w-3.5 h-3.5 rounded-full border border-brand-blue bg-brand-bg flex items-center justify-center shadow-[0_0_10px_#1586ff]">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    </div>
                  </div>

                  <div className="absolute top-[182px] left-[35px] flex flex-col items-center">
                    <span className="text-[7.5px] font-mono text-slate-400 font-bold uppercase mb-1 bg-[#0c0c12]/80 px-1.5 py-0.5 rounded border border-brand-blue/20">Maintenance</span>
                    <div className="w-3.5 h-3.5 rounded-full border border-brand-blue bg-brand-bg flex items-center justify-center shadow-[0_0_10px_#1586ff]">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    </div>
                  </div>

                  <div className="absolute top-[324px] left-[115px] flex flex-col items-center">
                    <div className="w-3.5 h-3.5 rounded-full border border-brand-cyan bg-brand-bg flex items-center justify-center shadow-[0_0_10px_#06b6d4] mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    </div>
                    <span className="text-[7.5px] font-mono text-slate-400 font-bold uppercase bg-[#0c0c12]/80 px-1.5 py-0.5 rounded border border-brand-cyan/20">Safety</span>
                  </div>

                  <div className="absolute top-[324px] left-[250px] flex flex-col items-center">
                    <div className="w-3.5 h-3.5 rounded-full border border-brand-blue bg-brand-bg flex items-center justify-center shadow-[0_0_10px_#1586ff] mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    </div>
                    <span className="text-[7.5px] font-mono text-slate-400 font-bold uppercase bg-[#0c0c12]/80 px-1.5 py-0.5 rounded border border-brand-blue/20">Utility</span>
                  </div>

                  <div className="absolute top-[182px] left-[322px] flex flex-col items-center">
                    <span className="text-[7.5px] font-mono text-slate-400 font-bold uppercase mb-1 bg-[#0c0c12]/80 px-1.5 py-0.5 rounded border border-brand-cyan/20">Warehouse</span>
                    <div className="w-3.5 h-3.5 rounded-full border border-brand-cyan bg-brand-bg flex items-center justify-center shadow-[0_0_10px_#06b6d4]">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    </div>
                  </div>

                  {/* Central Monogram Hub */}
                  <div className="absolute top-[180px] left-[175px] w-20 h-20 rounded-2xl border border-brand-blue/30 bg-[#08080f] flex items-center justify-center shadow-[0_0_35px_rgba(21,134,255,0.25)] z-20">
                    <div className="absolute inset-[-6px] rounded-2xl border border-dashed border-brand-cyan/20 animate-spin" style={{ animationDuration: '24s' }} />
                    <div className="absolute inset-[-12px] rounded-2xl border border-dotted border-brand-blue/15 animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }} />
                    <DfOsMonogram className="w-11 h-11" />
                  </div>

                  {/* Structured Dashboards Cards */}
                  <div className="absolute top-12 left-4 bg-[#0c0c12]/90 border border-brand-cyan/25 p-3 rounded-xl shadow-[0_4px_20px_rgba(6,182,212,0.1)] flex flex-col gap-1 w-[150px] z-10">
                    <div className="flex items-center gap-1.5 border-b border-brand-border/30 pb-1 mb-1">
                      <span className="text-[8px] font-mono text-brand-cyan font-bold uppercase">Digital Logbook</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                    </div>
                    <span className="text-[10px] font-black text-white font-mono uppercase">Checksheet #18</span>
                    <span className="text-[8px] text-slate-400 font-mono">100% Compliance</span>
                  </div>

                  <div className="absolute top-12 right-4 bg-[#0c0c12]/90 border border-brand-blue/25 p-3 rounded-xl shadow-[0_4px_20px_rgba(21,134,255,0.1)] flex flex-col gap-1 w-[155px] z-10">
                    <div className="flex items-center gap-1.5 border-b border-brand-border/30 pb-1 mb-1">
                      <span className="text-[8px] font-mono text-brand-blue font-bold uppercase">Workflow Engine</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    </div>
                    <span className="text-[10px] font-black text-white font-mono uppercase">LOTO Work Permit</span>
                    <span className="text-[8px] text-brand-blue font-mono font-bold uppercase">Active & Audited</span>
                  </div>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#0c0c12]/90 border border-[#6366f1]/25 p-3.5 rounded-xl shadow-[0_4px_20px_rgba(99,102,241,0.12)] flex flex-col gap-2 w-[210px] z-10">
                    <div className="flex justify-between items-center border-b border-brand-border/30 pb-1.5">
                      <div className="flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-[#6366f1]" />
                        <span className="text-[8.5px] font-mono text-[#6366f1] font-bold uppercase">Factory Memory</span>
                      </div>
                      <span className="text-[7.5px] bg-[#6366f1]/15 text-[#6366f1] px-1.5 py-0.5 rounded border border-[#6366f1]/20 font-mono font-bold">THREAD ACTIVE</span>
                    </div>
                    <div className="flex justify-between items-center font-mono">
                      <span className="text-[9.5px] text-slate-300">Live OEE</span>
                      <span className="text-[11.5px] text-brand-cyan font-bold">89.4%</span>
                    </div>
                    <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-brand-cyan h-full w-[89.4%] shadow-[0_0_6px_#06b6d4]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphic Stage 3 (Slide 4): Vish AI (Accents: Cyan + Green) */}
              <div className="graphic-stage-3 absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 invisible pointer-events-none z-0">
                <div className="relative w-full h-full flex flex-col justify-between py-6 px-4">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[240px] h-[240px] bg-brand-green/5 rounded-full blur-[80px]" />
                  </div>

                  {/* Top User Query Bubble */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: activeStage === 3 ? 1 : 0, x: activeStage === 3 ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="self-start bg-[#0c0c12]/90 border border-brand-border/40 p-3.5 rounded-2xl rounded-tl-none max-w-[250px] shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-10 relative"
                  >
                    <p className="text-[8px] font-mono text-brand-cyan mb-1 uppercase font-bold tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" /> User Query
                    </p>
                    <p className="text-xs text-white leading-relaxed font-semibold">&ldquo;Why did yield drop after the last changeover?&rdquo;</p>
                  </motion.div>
                  
                  {/* Middle Holographic Brain / Neural Web */}
                  <div className="self-center w-28 h-28 relative flex items-center justify-center z-10 my-1">
                    <div className="absolute inset-0 bg-brand-green/10 rounded-full blur-xl animate-pulse" />
                    
                    <svg viewBox="0 0 100 100" className="w-28 h-28 overflow-visible">
                      <g stroke="rgba(16, 185, 129, 0.4)" strokeWidth="0.8">
                        <line x1="50" y1="50" x2="30" y2="30" />
                        <line x1="50" y1="50" x2="70" y2="30" />
                        <line x1="50" y1="50" x2="25" y2="60" />
                        <line x1="50" y1="50" x2="75" y2="60" />
                        <line x1="50" y1="50" x2="50" y2="80" />
                        
                        <line x1="30" y1="30" x2="70" y2="30" />
                        <line x1="30" y1="30" x2="25" y2="60" />
                        <line x1="70" y1="30" x2="75" y2="60" />
                      </g>
                      <g fill="#10b981">
                        <circle cx="50" cy="50" r="4" className="animate-pulse" />
                        <circle cx="30" cy="30" r="3" />
                        <circle cx="70" cy="30" r="3" />
                        <circle cx="25" cy="60" r="3" />
                        <circle cx="75" cy="60" r="3" />
                        <circle cx="50" cy="80" r="3.5" />
                      </g>
                    </svg>
                    <Brain className="absolute w-7 h-7 text-white pointer-events-none" />
                  </div>

                  {/* Bottom Actionable Response Bubble (Explainable AI) */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: activeStage === 3 ? 1 : 0, x: activeStage === 3 ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="self-end bg-[#0c0c12]/90 border border-brand-green/30 p-3.5 rounded-xl rounded-tr-none max-w-[280px] shadow-[0_4px_25px_rgba(0,0,0,0.4)] z-10 relative"
                  >
                    <div className="flex justify-between items-center border-b border-brand-green/20 pb-1 mb-1">
                      <span className="text-[8.5px] font-mono text-brand-green font-black uppercase tracking-wider flex items-center gap-1.5">
                        <Zap className="w-3 h-3 text-brand-green" /> Vish AI agent
                      </span>
                      <span className="text-[7.5px] bg-brand-green/10 text-brand-green px-1.5 py-0.5 rounded border border-brand-green/20 font-mono font-bold">DIAGNOSTIC OK</span>
                    </div>
                    <p className="text-[11px] text-slate-200 leading-relaxed">
                      &ldquo;Changeover recorded a <span className="text-brand-green font-bold">4.2mm valve deviation</span> on Line 3. Adjust sealing pressure by <span className="text-brand-green font-bold">+12%</span> to regain target yield.&rdquo;
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Graphic Stage 4 (Slide 5): complete stack (Accents: Blue + Teal + Green) */}
              <div className="graphic-stage-4 absolute inset-0 flex items-center justify-center p-8 opacity-0 invisible pointer-events-none z-0">
                <div 
                  className="relative w-80 h-[380px] flex flex-col items-center justify-center"
                  style={{ perspective: "1000px" }}
                >
                  <div className="absolute w-[2px] h-[260px] bg-gradient-to-b from-brand-green via-brand-blue to-brand-cyan opacity-60 z-0 animate-pulse pointer-events-none" />

                  <svg className="absolute w-[20px] h-[260px] z-10 pointer-events-none overflow-visible">
                    <circle r="3" fill="#10b981" className="filter drop-shadow-[0_0_6px_#10b981]">
                      <animateMotion dur="2.5s" repeatCount="indefinite" path="M 10 260 L 10 0" />
                    </circle>
                    <circle r="3" fill="#06b6d4" className="filter drop-shadow-[0_0_6px_#06b6d4]">
                      <animateMotion dur="3s" repeatCount="indefinite" path="M 10 0 L 10 260" />
                    </circle>
                  </svg>

                  {/* Layer 3: Vish AI (Top) */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20px] w-56 bg-[#0a0a0f]/90 border border-brand-green/40 p-2.5 rounded-xl shadow-[0_10px_20px_rgba(16,185,129,0.15)] flex flex-col gap-1 items-center z-30"
                    style={{ transform: "rotateX(55deg) rotateZ(-30deg)" }}
                  >
                    <span className="text-[8px] font-mono font-black text-brand-green uppercase tracking-wider">Level 03 | VISH AI LAYER</span>
                    <span className="text-[10px] font-bold text-white font-mono uppercase text-center flex items-center gap-1">
                      <Brain className="w-3.5 h-3.5 text-brand-green" /> Cognitive Decision Agent
                    </span>
                  </motion.div>

                  {/* Layer 2: Df-OS Operating Layer */}
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[95px] w-56 bg-[#0a0a0f]/90 border border-brand-blue/40 p-2.5 rounded-xl shadow-[0_10px_20px_rgba(21,134,255,0.12)] flex flex-col gap-1 items-center z-20"
                    style={{ transform: "rotateX(55deg) rotateZ(-30deg)" }}
                  >
                    <span className="text-[8px] font-mono font-black text-brand-blue uppercase tracking-wider">Level 02 | Df-OS OPERATING LAYER</span>
                    <span className="text-[10px] font-bold text-white font-mono uppercase text-center flex items-center gap-1">
                      <Database className="w-3.5 h-3.5 text-brand-blue" /> Unified Factory Memory
                    </span>
                  </motion.div>

                  {/* Layer 1: X-Konnect Connectivity */}
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[170px] w-56 bg-[#0a0a0f]/90 border border-brand-cyan/25 p-2.5 rounded-xl shadow-[0_10px_20px_rgba(6,182,212,0.1)] flex flex-col gap-1 items-center z-10"
                    style={{ transform: "rotateX(55deg) rotateZ(-30deg)" }}
                  >
                    <span className="text-[8px] font-mono font-black text-brand-cyan uppercase tracking-wider">Level 01 | X-KONNECT MIDDLEWARE</span>
                    <span className="text-[10px] font-bold text-white font-mono uppercase text-center flex items-center gap-1">
                      <Cpu className="w-3.5 h-3.5 text-brand-cyan" /> Edge Signal Orchestration
                    </span>
                  </motion.div>

                  {/* Layer 0: Shopfloor Machines Layer */}
                  <div
                    className="absolute top-[245px] w-56 bg-[#07070a]/90 border border-slate-800/80 p-2.5 rounded-xl flex flex-col gap-1 items-center z-5"
                    style={{ transform: "rotateX(55deg) rotateZ(-30deg)" }}
                  >
                    <span className="text-[7.5px] font-mono font-black text-slate-500 uppercase tracking-widest">Level 00 | PHYSICAL SHOPFLOOR</span>
                    <span className="text-[9.5px] font-bold text-slate-450 font-mono uppercase text-center flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-slate-500" /> PLC Sensors & IoT Machinery
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* BOTTOM: Unified Trust Section & Logo Marquee (Fades out when Stage 0 exits) */}
          <div className="hero-trust-section w-full mt-auto flex flex-col gap-3">
            
            {/* Thin Cyan/Blue gradient glow line separator */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/25 to-transparent shadow-[0_0_8px_rgba(6,182,212,0.25)]" />
            
            <div className="flex flex-col gap-2.5 w-full text-center">
              <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase font-bold">
                Trusted manufacturing footprint
              </span>
              
              {/* Premium Metrics Cards */}
              <div className="grid grid-cols-4 gap-4 w-full">
                {[
                  { target: 400, label: "Customers Served", suffix: "+" },
                  { target: 1400, label: "Machines Connected", suffix: "+" },
                  { target: 1000, label: "Factories Digitized", suffix: "+" },
                  { target: 9000, label: "Active Users", suffix: "+" }
                ].map((metric, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center p-3 rounded-xl border border-brand-border/25 bg-[#0c0c12]/45 hover:bg-[#111116]/80 hover:border-brand-cyan/30 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300">
                    <span className="text-xl md:text-2xl font-black text-white tracking-tight leading-none mb-1">
                      <CountUpNumber target={metric.target} suffix={metric.suffix} active={activeStage === 0} />
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-semibold text-center">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Scrolling Client Logo Marquee inside a glass panel */}
              <div className="w-full bg-[#0c0c12]/30 border border-brand-border/30 backdrop-blur-md rounded-xl p-3 mt-1 overflow-hidden flex select-none">
                <div className="animate-marquee-scroll flex gap-12 items-center">
                  {["unilever", "badshah", "marico", "dabur", "itc", "pepsico", "danone", "hygienic", "mondelez", "wholetruth", "hero", "suzuki", "bajaj", "ceat", "lumax"].map((id, index) => {
                    const brand = logoData[id];
                    if (!brand) return null;
                    return (
                      <div key={`logo-strip-${id}-${index}`} className="flex items-center justify-center w-[85px] h-[26px] opacity-45 hover:opacity-85 transition-opacity duration-300 pointer-events-none shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={`/images/clients/${id}.${brand.ext || 'png'}`} 
                          className="max-w-full max-h-full object-contain filter brightness-125 contrast-75 grayscale" 
                          alt={brand.name} 
                        />
                      </div>
                    );
                  })}
                  {/* Doubled for seamless loop */}
                  {["unilever", "badshah", "marico", "dabur", "itc", "pepsico", "danone", "hygienic", "mondelez", "wholetruth", "hero", "suzuki", "bajaj", "ceat", "lumax"].map((id, index) => {
                    const brand = logoData[id];
                    if (!brand) return null;
                    return (
                      <div key={`logo-strip-dup-${id}-${index}`} className="flex items-center justify-center w-[85px] h-[26px] opacity-45 hover:opacity-85 transition-opacity duration-300 pointer-events-none shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={`/images/clients/${id}.${brand.ext || 'png'}`} 
                          className="max-w-full max-h-full object-contain filter brightness-125 contrast-75 grayscale" 
                          alt={brand.name} 
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Cinematic Step indicators (Lowered bottom placement, smaller size, default opacity-25) */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-3.5 z-20 bg-[#07070a]/75 backdrop-blur-md px-3.5 py-1 rounded-full border border-brand-border shadow-lg opacity-25 hover:opacity-100 transition-all duration-300">
          {stages.map((stage, idx) => {
            const Icon = icons[idx];
            const activeColor =
              idx === 0
                ? "bg-brand-cyan"
                : idx === 1
                ? "bg-red-500"
                : idx === 2
                ? "bg-brand-blue"
                : idx === 3
                ? "bg-brand-green"
                : "bg-brand-cyan";
            const iconColor = 
              activeStage === idx 
                ? "text-slate-950" 
                : idx === 0 
                ? "text-brand-cyan group-hover:text-cyan-350"
                : idx === 1 
                ? "text-red-400 group-hover:text-red-300"
                : idx === 2
                ? "text-brand-blue group-hover:text-blue-400"
                : idx === 3
                ? "text-brand-green group-hover:text-green-400"
                : "text-brand-cyan group-hover:text-cyan-400";
            return (
              <button
                key={stage.id}
                onClick={() => handleStageClick(idx)}
                className="flex items-center gap-2 group focus:outline-none cursor-pointer"
              >
                <div
                  className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                    activeStage === idx
                      ? `${activeColor} border-transparent text-slate-950 scale-110 shadow-[0_0_10px_currentColor]`
                      : "border-brand-border bg-slate-950/70 text-slate-500 group-hover:border-slate-700"
                  }`}
                  style={{ color: activeStage === idx ? "#000" : "inherit" }}
                >
                  <Icon className={`w-3 h-3 ${iconColor}`} />
                </div>
                <span
                  className={`text-[9px] font-mono font-semibold transition-colors hidden lg:inline-block ${
                    activeStage === idx ? "text-white" : "text-slate-500 group-hover:text-slate-300"
                  }`}
                >
                  Stage {idx + 1}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* 2. MOBILE SIMPLIFIED FALLBACK HERO */}
      <div className="flex md:hidden min-h-[95vh] bg-brand-bg relative py-12 px-4 flex-col justify-between border-b border-brand-border/40 overflow-hidden">
        
        {/* Mobile Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-100"
          >
            <source src="/videos/futuristic-digital-network-plexus.webm" type="video/webm" />
            <source src="/videos/futuristic-digital-network-plexus.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-brand-bg/60 z-1" />
        </div>

        {/* Mobile Slide Card (Simplified Slide Switcher) */}
        <div className="relative z-10 flex flex-col gap-4 w-full mt-6 bg-[#0c0c12]/80 border border-brand-border/40 rounded-2xl p-5 backdrop-blur-md shadow-lg my-auto">
          
          <div className="flex items-center justify-between border-b border-brand-border/20 pb-2 mb-1">
            <div className="flex items-center gap-2">
              <DfOsMonogram className="w-8 h-8" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-brand-cyan uppercase">Df-OS Platform</span>
            </div>
            <span className="text-[9px] font-mono text-slate-500 font-bold">Stage {mobileStage + 1} of 5</span>
          </div>

          {/* Active Mobile Slide Text */}
          <div className="flex flex-col gap-3">
            <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-brand-cyan">
              {stages[mobileStage].eyebrow}
            </span>
            <h2 className="text-xl font-black text-white leading-tight">
              {stages[mobileStage].headline}
            </h2>
            <p className="text-xs text-slate-350 leading-relaxed">
              {stages[mobileStage].subheadline}
            </p>
            {stages[mobileStage].microcopy && (
              <p className="text-[9.5px] text-slate-500 font-mono italic">
                {stages[mobileStage].microcopy}
              </p>
            )}
          </div>

          {/* Mobile Simplified Graphics Preview */}
          <div className="w-full h-28 bg-[#111116]/40 border border-brand-border/30 rounded-xl relative overflow-hidden flex items-center justify-center">
            {mobileStage === 0 && (
              <div className="flex flex-col items-center gap-1.5 animate-pulse">
                <DfOsMonogram className="w-12 h-12" />
                <span className="text-[8.5px] font-mono text-brand-cyan font-bold">Connected Operations Layer</span>
              </div>
            )}
            {mobileStage === 1 && (
              <div className="flex flex-col gap-2 p-3 w-full">
                <div className="flex items-center justify-between bg-red-950/20 border border-red-500/20 px-2 py-1 rounded text-[8.5px] text-red-400 font-mono">
                  <span>Excel Report: Delayed Shift logs</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                </div>
                <div className="flex items-center justify-between bg-amber-950/20 border border-amber-500/20 px-2 py-1 rounded text-[8.5px] text-amber-400 font-mono">
                  <span>Isolated Chat: verbal downtime warnings</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                </div>
              </div>
            )}
            {mobileStage === 2 && (
              <div className="flex flex-col gap-2 p-3 w-full">
                <div className="bg-brand-blue/10 border border-brand-blue/30 px-2 py-1 rounded text-[8.5px] text-brand-blue font-bold text-center">
                  Production Module ACTIVE
                </div>
                <div className="bg-brand-cyan/10 border border-brand-cyan/30 px-2 py-1 rounded text-[8.5px] text-brand-cyan font-bold text-center">
                  Quality Module ACTIVE
                </div>
              </div>
            )}
            {mobileStage === 3 && (
              <div className="flex flex-col gap-1.5 p-3 w-full justify-between">
                <div className="text-[8px] bg-slate-900 border border-slate-800 p-1 rounded max-w-[80%] self-start text-white">
                  &ldquo;Why did yield drop?&rdquo;
                </div>
                <div className="text-[8px] bg-brand-green/10 border border-brand-green/20 p-1.5 rounded max-w-[90%] self-end text-brand-green">
                  &ldquo;Valve deviation on Line 3. Sealing adjustment recommended.&rdquo;
                </div>
              </div>
            )}
            {mobileStage === 4 && (
              <div className="flex flex-col gap-1 w-full p-2">
                <div className="bg-brand-green/5 border border-brand-green/20 py-0.5 rounded text-[8px] text-center text-brand-green font-mono">
                  Level 3: Vish AI Layer
                </div>
                <div className="bg-brand-blue/5 border border-brand-blue/20 py-0.5 rounded text-[8px] text-center text-brand-blue font-mono">
                  Level 2: Df-OS Factory Memory
                </div>
                <div className="bg-brand-cyan/5 border border-brand-cyan/20 py-0.5 rounded text-[8px] text-center text-brand-cyan font-mono">
                  Level 1: X-Konnect Connectivity
                </div>
              </div>
            )}
          </div>

          {/* Stacked Mobile CTAs */}
          <div className="flex flex-col gap-2">
            <Button href="/contact" variant="primary" className="w-full text-center py-2.5 text-xs">
              Book a Demo
            </Button>
            <Button href="/platform/df-os" variant="secondary" className="w-full text-center py-2.5 text-xs bg-slate-950/40 border-brand-border">
              Explore Platform
            </Button>
          </div>

          {/* Simpler stage indicator (dots) */}
          <div className="flex justify-center gap-2.5 mt-1">
            {stages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setMobileStage(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  mobileStage === idx ? "bg-brand-cyan w-4" : "bg-slate-600"
                }`}
                aria-label={`Go to stage ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Mobile Trust Area (Bottom - 2x2 metrics grid and simple logo marquee) */}
        <div className="relative z-10 flex flex-col gap-3 mt-6 border-t border-brand-border/20 pt-4 w-full">
          
          <span className="text-[8.5px] font-mono tracking-widest text-slate-500 uppercase font-bold text-center">
            Trusted manufacturing footprint
          </span>

          {/* Metrics 2x2 Grid */}
          <div className="grid grid-cols-2 gap-2 w-full">
            {[
              { target: 400, label: "Customers Served", suffix: "+" },
              { target: 1400, label: "Machines Connected", suffix: "+" },
              { target: 1000, label: "Factories Digitized", suffix: "+" },
              { target: 9000, label: "Active Users", suffix: "+" }
            ].map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-2 rounded-lg border border-brand-border/25 bg-[#0c0c12]/50">
                <span className="text-sm font-black text-white leading-none mb-0.5">
                  {metric.target}{metric.suffix}
                </span>
                <span className="text-[8px] font-mono uppercase tracking-wider text-slate-400 font-semibold text-center">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Scrolling logo strip for mobile */}
          <div className="w-full overflow-hidden flex select-none mt-1">
            <div className="animate-marquee-scroll flex gap-6 items-center">
              {["unilever", "marico", "dabur", "itc", "pepsico", "danone", "mondelez", "hero", "suzuki", "bajaj", "ceat"].map((id, index) => {
                const brand = logoData[id];
                if (!brand) return null;
                return (
                  <div key={`logo-mobile-${id}-${index}`} className="flex items-center justify-center w-[75px] h-[22px] opacity-40 shrink-0 pointer-events-none">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={`/images/clients/${id}.${brand.ext || 'png'}`} 
                      className="max-w-full max-h-full object-contain filter grayscale" 
                      alt={brand.name} 
                    />
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
