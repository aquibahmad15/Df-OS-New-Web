"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  Activity,
  ShieldCheck,
  Wrench,
  Shield,
  Gauge,
  Zap,
  Warehouse,
  Brain,
  Cpu,
  MessageSquare
} from "lucide-react";
import {
  departments,
  crossLinks,
  slideStates,
  CENTER_NODE
} from "./factory-intelligence-data";

// Map Lucide icons dynamically
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  ShieldCheck,
  Wrench,
  Shield,
  Gauge,
  Zap,
  Warehouse
};

// Department accent color map (matches factory-intelligence-data.ts accentColor)
const DEPT_ACCENTS: Record<string, string> = {
  production: "#F6C96D",
  quality: "#7CFFCB",
  maintenance: "#FFB84D",
  safety: "#FF6B6B",
  utility: "#7CFFCB",
  "supply-chain": "#B69CFF",
  esg: "#A3FF7A"
};

// Helper: hex to rgba
function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Palette constants
const CARBON_BLACK = "rgba(7, 11, 18, 0.86)";
const GRAPHITE_FILL = "rgba(11, 18, 32, 0.88)";
const SECONDARY_FILL = "rgba(7, 11, 18, 0.72)";
const PLATINUM = "#F8FAFC";
const MUTED_SILVER = "#A8B3C7";
const SOFT_WHITE_LINE = "rgba(248, 250, 252, 0.18)";
const SOFT_WHITE_DIM = "rgba(248, 250, 252, 0.08)";
const CORE_BLUE = "#1E6BFF";
const MINT = "#7CFFCB";
const GOLD = "#F6C96D";
const AMBER_WARN = "#FFB84D";
const CORAL = "#FF6B6B";

interface FactoryIntelligenceConstellationProps {
  activeStage: number;
}

export default function FactoryIntelligenceConstellation({
  activeStage
}: FactoryIntelligenceConstellationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    
    const timer = setTimeout(() => {
      setPrefersReducedMotion(mediaQuery.matches);
    }, 0);

    return () => {
      mediaQuery.removeEventListener("change", listener);
      clearTimeout(timer);
    };
  }, []);

  const currentState = slideStates[activeStage] || slideStates[0];

  useEffect(() => {
    if (prefersReducedMotion) {
      gsap.killTweensOf(".constellation-element");
      return;
    }

    const ctx = gsap.context(() => {
      const mode = currentState.mode;

      // --- BRAND MODE ---
      if (mode === "brand") {
        gsap.to(".core-halo", { scale: 1, opacity: 0.15, duration: 0.8 });
        gsap.to(".core-pulse-circle", { scale: 1.2, opacity: 0, repeat: -1, duration: 3, ease: "power1.out" });
        
        departments.forEach((dept) => {
          const isActive = currentState.activeDepartments.includes(dept.id);
          gsap.to(`.node-dept-${dept.id}`, {
            opacity: isActive ? 1 : 0.3,
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
          });
          gsap.to(`.core-line-${dept.id}`, {
            strokeDashoffset: 0,
            opacity: isActive ? 0.45 : 0.1,
            stroke: SOFT_WHITE_LINE,
            duration: 0.6
          });

          dept.modules.forEach((mod) => {
            const isModActive = currentState.activeModules.includes(mod.id);
            const isPrimary = mod.priority === "primary";
            gsap.to(`.chip-mod-${mod.id}`, {
              opacity: isModActive ? (isPrimary ? 0.95 : 0.65) : 0,
              scale: isModActive ? 1 : 0.8,
              x: 0,
              y: 0,
              duration: 0.5
            });
            gsap.to(`.mod-line-${mod.id}`, {
              opacity: isModActive ? (isPrimary ? 0.3 : 0.15) : 0,
              duration: 0.5
            });
          });
        });

        gsap.to(".cross-link-path", { opacity: 0, duration: 0.4 });
        gsap.to(".external-fragment", { opacity: 0, scale: 0.7, y: 15, duration: 0.4 });
        gsap.to(".query-overlay", { opacity: 0, scale: 0.9, y: 10, duration: 0.4 });
        gsap.to(".stack-signals", { opacity: 0, duration: 0.4 });
        gsap.to(".recommendation-overlay", { opacity: 0, scale: 0.9, y: 10, duration: 0.4 });
      }

      // --- CHAOS MODE ---
      if (mode === "chaos") {
        gsap.to(".core-halo", { scale: 0.9, opacity: 0.05, duration: 0.6 });
        
        departments.forEach((dept, idx) => {
          const isActive = currentState.activeDepartments.includes(dept.id);
          const driftX = Math.sin(idx) * 8;
          const driftY = Math.cos(idx) * 8;
          const isWarning = ["production", "utility", "maintenance"].includes(dept.id);

          gsap.to(`.node-dept-${dept.id}`, {
            opacity: isActive ? 0.85 : 0.15,
            scale: isActive ? 0.96 : 0.9,
            x: driftX,
            y: driftY,
            duration: 0.8,
            ease: "power1.inOut"
          });

          gsap.to(`.core-line-${dept.id}`, {
            opacity: isActive ? 0.2 : 0.05,
            stroke: isWarning ? CORAL : SOFT_WHITE_DIM,
            duration: 0.8
          });

          dept.modules.forEach((mod, mIdx) => {
            const isModActive = currentState.activeModules.includes(mod.id);
            const mDriftX = driftX + Math.sin(mIdx + 3) * 6;
            const mDriftY = driftY + Math.cos(mIdx + 3) * 6;

            gsap.to(`.chip-mod-${mod.id}`, {
              opacity: isModActive ? 0.85 : 0,
              scale: isModActive ? 0.95 : 0.7,
              x: mDriftX,
              y: mDriftY,
              duration: 0.8
            });
            gsap.to(`.mod-line-${mod.id}`, {
              opacity: isModActive ? 0.15 : 0,
              duration: 0.8
            });
          });
        });

        gsap.to(".external-fragment", {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "back.out(1.2)"
        });

        gsap.to(".cross-link-path", { opacity: 0, duration: 0.4 });
        gsap.to(".query-overlay", { opacity: 0, scale: 0.9, duration: 0.4 });
        gsap.to(".recommendation-overlay", { opacity: 0, scale: 0.9, duration: 0.4 });
        gsap.to(".stack-signals", { opacity: 0, duration: 0.4 });
      }

      // --- OPERATING LAYER MODE ---
      if (mode === "operating-layer") {
        gsap.to(".core-halo", { scale: 1.1, opacity: 0.25, duration: 0.8 });
        
        departments.forEach((dept) => {
          const isActive = currentState.activeDepartments.includes(dept.id);
          const accent = DEPT_ACCENTS[dept.id] || PLATINUM;
          gsap.to(`.node-dept-${dept.id}`, {
            opacity: isActive ? 1 : 0.2,
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "back.out(1.5)"
          });
          gsap.to(`.core-line-${dept.id}`, {
            opacity: isActive ? 0.55 : 0.05,
            stroke: isActive ? hexToRgba(accent, 0.5) : SOFT_WHITE_DIM,
            duration: 0.7
          });

          dept.modules.forEach((mod) => {
            const isModActive = currentState.activeModules.includes(mod.id);
            const isPrimary = mod.priority === "primary";
            gsap.to(`.chip-mod-${mod.id}`, {
              opacity: isModActive ? (isPrimary ? 0.95 : 0.7) : 0,
              scale: isModActive ? 1 : 0.8,
              x: 0,
              y: 0,
              duration: 0.6
            });
            gsap.to(`.mod-line-${mod.id}`, {
              opacity: isModActive ? (isPrimary ? 0.4 : 0.2) : 0,
              duration: 0.6
            });
          });
        });

        crossLinks.forEach((link) => {
          const isHighlighted = currentState.highlightedLinks.includes(link.id);
          gsap.to(`.link-path-${link.id}`, {
            opacity: isHighlighted ? 0.75 : 0.08,
            stroke: isHighlighted ? GOLD : SOFT_WHITE_DIM,
            strokeWidth: isHighlighted ? 1.5 : 1,
            duration: 0.8
          });
        });

        gsap.to(".external-fragment", { opacity: 0, scale: 0.7, duration: 0.4 });
        gsap.to(".query-overlay", { opacity: 0, duration: 0.4 });
        gsap.to(".recommendation-overlay", { opacity: 0, duration: 0.4 });
        gsap.to(".stack-signals", { opacity: 0, duration: 0.4 });
      }

      // --- INTELLIGENCE MODE ---
      if (mode === "intelligence") {
        gsap.to(".core-halo", { scale: 1.3, opacity: 0.45, duration: 0.8 });
        
        departments.forEach((dept) => {
          const isActive = currentState.activeDepartments.includes(dept.id);
          gsap.to(`.node-dept-${dept.id}`, {
            opacity: isActive ? 1 : 0.15,
            scale: isActive ? 1.05 : 0.85,
            x: 0,
            y: 0,
            duration: 0.7
          });
          gsap.to(`.core-line-${dept.id}`, {
            opacity: isActive ? 0.7 : 0.05,
            stroke: isActive ? hexToRgba(MINT, 0.6) : SOFT_WHITE_DIM,
            duration: 0.7
          });

          dept.modules.forEach((mod) => {
            const isModActive = currentState.activeModules.includes(mod.id);
            const isPrimary = mod.priority === "primary";
            gsap.to(`.chip-mod-${mod.id}`, {
              opacity: isModActive ? (isPrimary ? 0.95 : 0.7) : 0,
              scale: isModActive ? 1 : 0.7,
              x: 0,
              y: 0,
              duration: 0.6
            });
            gsap.to(`.mod-line-${mod.id}`, {
              opacity: isModActive ? (isPrimary ? 0.45 : 0.2) : 0,
              duration: 0.6
            });
          });
        });

        crossLinks.forEach((link) => {
          const isHighlighted = currentState.highlightedLinks.includes(link.id);
          gsap.to(`.link-path-${link.id}`, {
            opacity: isHighlighted ? 0.85 : 0.05,
            stroke: isHighlighted ? MINT : SOFT_WHITE_DIM,
            strokeWidth: isHighlighted ? 2 : 1,
            duration: 0.7
          });
        });

        gsap.to(".query-overlay", {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.1)",
          delay: 0.1
        });
        gsap.to(".recommendation-overlay", {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.1)",
          delay: 0.3
        });

        gsap.to(".external-fragment", { opacity: 0, scale: 0.7, duration: 0.4 });
        gsap.to(".stack-signals", { opacity: 0, duration: 0.4 });
      }

      // --- STACK MODE ---
      if (mode === "stack") {
        gsap.to(".core-halo", { scale: 1.2, opacity: 0.35, duration: 0.8 });
        
        departments.forEach((dept) => {
          const isActive = currentState.activeDepartments.includes(dept.id);
          gsap.to(`.node-dept-${dept.id}`, {
            opacity: isActive ? 1 : 0.3,
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.6
          });
          gsap.to(`.core-line-${dept.id}`, {
            opacity: isActive ? 0.5 : 0.1,
            stroke: SOFT_WHITE_LINE,
            duration: 0.6
          });

          dept.modules.forEach((mod) => {
            const isModActive = currentState.activeModules.includes(mod.id);
            const isPrimary = mod.priority === "primary";
            gsap.to(`.chip-mod-${mod.id}`, {
              opacity: isModActive ? (isPrimary ? 0.95 : 0.65) : 0,
              scale: isModActive ? 1 : 0.8,
              x: 0,
              y: 0,
              duration: 0.5
            });
            gsap.to(`.mod-line-${mod.id}`, {
              opacity: isModActive ? (isPrimary ? 0.35 : 0.15) : 0,
              duration: 0.5
            });
          });
        });

        crossLinks.forEach((link) => {
          const isHighlighted = currentState.highlightedLinks.includes(link.id);
          gsap.to(`.link-path-${link.id}`, {
            opacity: isHighlighted ? 0.75 : 0.1,
            stroke: isHighlighted ? GOLD : SOFT_WHITE_DIM,
            strokeWidth: isHighlighted ? 1.5 : 1,
            duration: 0.6
          });
        });

        gsap.to(".stack-signals", {
          opacity: 1,
          duration: 0.6
        });

        gsap.to(".external-fragment", { opacity: 0, scale: 0.7, duration: 0.4 });
        gsap.to(".query-overlay", { opacity: 0, scale: 0.9, duration: 0.4 });
        gsap.to(".recommendation-overlay", { opacity: 0, scale: 0.9, duration: 0.4 });
      }

    }, containerRef);

    return () => ctx.revert();
  }, [currentState, prefersReducedMotion]);

  // Handle icon selection
  const renderNodeIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName];
    if (!IconComponent) return null;
    return <IconComponent className="w-5 h-5 text-slate-100" />;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center select-none"
    >
      {/* Dark radial backdrop for video isolation */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(2, 6, 14, 0.7) 0%, rgba(2, 6, 14, 0.3) 50%, transparent 80%)"
        }}
      />

      {/* SVG Master Drawing Canvas */}
      <svg
        ref={svgRef}
        viewBox="0 0 500 500"
        className="w-[490px] h-[490px] overflow-visible z-10 relative"
      >
        <defs>
          {/* Core glow - Brand Blue */}
          <filter id="core-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.12  0 0 0 0 0.42  0 0 0 0 1  0 0 0 1 0" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Node glow - warm neutral */}
          <filter id="node-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* AI glow - Mint green */}
          <filter id="ai-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.49  0 0 0 0 1  0 0 0 0 0.80  0 0 0 1 0" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Gold glow for highlighted cross-links */}
          <filter id="gold-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.96  0 0 0 0 0.79  0 0 0 0 0.43  0 0 0 0.6 0" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* --- Background Stack Components (Slide 5 Only) --- */}
        <g className="stack-signals opacity-0 transition-opacity duration-300">
          {/* Bottom ingress sensor lines */}
          <path d="M 100 500 Q 110 420 125 365" fill="none" stroke={hexToRgba(AMBER_WARN, 0.45)} strokeWidth="1" strokeDasharray="3 5" />
          <path d="M 250 500 Q 250 450 250 415" fill="none" stroke={hexToRgba(AMBER_WARN, 0.45)} strokeWidth="1" strokeDasharray="3 5" />
          <path d="M 400 500 Q 390 420 375 365" fill="none" stroke={hexToRgba(AMBER_WARN, 0.45)} strokeWidth="1" strokeDasharray="3 5" />
          
          {/* Flow packets upward */}
          {!prefersReducedMotion && (
            <>
              <circle r="2" fill={GOLD}>
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M 100 500 Q 110 420 125 365" />
              </circle>
              <circle r="2" fill={GOLD}>
                <animateMotion dur="2s" repeatCount="indefinite" path="M 250 500 Q 250 450 250 415" />
              </circle>
              <circle r="2" fill={GOLD}>
                <animateMotion dur="2.8s" repeatCount="indefinite" path="M 400 500 Q 390 420 375 365" />
              </circle>
            </>
          )}

          {/* Bottom signal entry markers */}
          <rect x="75" y="470" width="100" height="22" rx="4" fill={CARBON_BLACK} stroke={hexToRgba(AMBER_WARN, 0.3)} strokeWidth="1" />
          <text x="125" y="484" fill={AMBER_WARN} fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PLC & SENSORS</text>
          
          <rect x="325" y="470" width="100" height="22" rx="4" fill={CARBON_BLACK} stroke={hexToRgba(GOLD, 0.3)} strokeWidth="1" />
          <text x="375" y="484" fill={GOLD} fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">X-KONNECT EDGE</text>

          {/* Top Control Tower Marker */}
          <rect x="180" y="-8" width="140" height="22" rx="4" fill="rgba(7, 11, 18, 0.92)" stroke={hexToRgba(MINT, 0.35)} strokeWidth="1" />
          <text x="250" y="6" fill={MINT} fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="black" letterSpacing="1">VISH CONTROL TOWER</text>
        </g>

        {/* --- Cross-Department Links --- */}
        <g className="cross-links">
          {crossLinks.map((link) => {
            const fromDept = departments.find((d) => d.id === link.from);
            const toDept = departments.find((d) => d.id === link.to);
            if (!fromDept || !toDept) return null;
            
            const midX = (fromDept.x + toDept.x) / 2 + (toDept.y - fromDept.y) * 0.12;
            const midY = (fromDept.y + toDept.y) / 2 + (fromDept.x - toDept.x) * 0.12;
            const pathD = `M ${fromDept.x} ${fromDept.y} Q ${midX} ${midY} ${toDept.x} ${toDept.y}`;

            const isHighlighted = currentState.highlightedLinks.includes(link.id);
            const packetColor = currentState.mode === "intelligence" ? MINT : GOLD;

            return (
              <g key={link.id}>
                <path
                  d={pathD}
                  fill="none"
                  className={`cross-link-path link-path-${link.id} constellation-element`}
                  stroke={SOFT_WHITE_DIM}
                  strokeWidth="1"
                  style={{ transition: "stroke 0.4s, stroke-width 0.4s, opacity 0.4s" }}
                />
                
                {/* Active cross-link packet loops */}
                {isHighlighted && !prefersReducedMotion && (
                  <circle r="2.5" fill={packetColor} className="filter drop-shadow-[0_0_4px_#F6C96D]">
                    <animateMotion dur="2.2s" repeatCount="indefinite" path={pathD} />
                  </circle>
                )}
              </g>
            );
          })}
        </g>

        {/* --- Central Radial connections (Core ↔ Departments) --- */}
        <g className="core-links">
          {departments.map((dept) => {
            const isBroken = currentState.showBrokenLinks && ["production", "utility", "maintenance"].includes(dept.id);
            const isActive = currentState.activeDepartments.includes(dept.id);
            const accent = DEPT_ACCENTS[dept.id] || PLATINUM;
            const signalColor = currentState.mode === "intelligence" ? MINT : (currentState.mode === "operating-layer" ? hexToRgba(accent, 0.7) : GOLD);
            
            return (
              <g key={`core-link-${dept.id}`}>
                <line
                  x1={CENTER_NODE.x}
                  y1={CENTER_NODE.y}
                  x2={dept.x}
                  y2={dept.y}
                  className={`core-line-${dept.id} constellation-element`}
                  stroke={isBroken ? CORAL : SOFT_WHITE_LINE}
                  strokeWidth={isBroken ? "1" : "1.2"}
                  strokeDasharray={isBroken ? "4 4" : "0"}
                  style={{ transition: "stroke 0.5s, opacity 0.5s" }}
                />

                {/* Draw signal flows on active non-broken connections */}
                {isActive && !isBroken && !prefersReducedMotion && (
                  <circle r="2" fill={signalColor}>
                    <animateMotion
                      dur="2.8s"
                      repeatCount="indefinite"
                      path={`M ${CENTER_NODE.x} ${CENTER_NODE.y} L ${dept.x} ${dept.y}`}
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </g>

        {/* --- Process Module Linkage Lines --- */}
        <g className="module-links">
          {departments.map((dept) => {
            const accent = DEPT_ACCENTS[dept.id] || PLATINUM;
            return dept.modules.map((mod) => (
              <line
                key={`mod-line-${mod.id}`}
                x1={dept.x}
                y1={dept.y}
                x2={mod.x}
                y2={mod.y}
                className={`mod-line-${mod.id} constellation-element`}
                stroke={mod.priority === "primary" ? hexToRgba(accent, 0.25) : hexToRgba(MUTED_SILVER, 0.15)}
                strokeWidth={mod.priority === "primary" ? "0.8" : "0.5"}
                strokeDasharray="2 4"
                opacity="0"
                style={{ transition: "opacity 0.4s" }}
              />
            ));
          })}
        </g>

        {/* --- Process Module Chips (Interactive label nodes) --- */}
        <g className="module-chips">
          {departments.map((dept) => {
            const accent = DEPT_ACCENTS[dept.id] || PLATINUM;
            return dept.modules.map((mod) => {
              const isPrimary = mod.priority === "primary";
              const fontSize = isPrimary ? 7.5 : 6;
              const textLength = mod.label.length * (isPrimary ? 5.2 : 4.2) + (isPrimary ? 10 : 8);
              const chipHeight = isPrimary ? 18 : 14;
              const isAlert = currentState.showBrokenLinks && ["non-conformance", "breakdown-rep", "downtime-analysis", "changeover-log", "poka-yoke", "jh-tags", "incident-inv", "ppe-compliance", "fuel-tracking"].includes(mod.id);
              
              return (
                <g
                  key={`mod-chip-group-${mod.id}`}
                  className={`chip-mod-${mod.id} constellation-element`}
                  opacity="0"
                  style={{ transformBox: "fill-box", transformOrigin: "center", transition: "opacity 0.4s" }}
                >
                  {/* Glass backing capsule */}
                  <rect
                    x={mod.x - textLength / 2}
                    y={mod.y - chipHeight / 2}
                    width={textLength}
                    height={chipHeight}
                    rx={chipHeight / 2}
                    fill={isAlert ? "rgba(102, 30, 40, 0.85)" : (isPrimary ? GRAPHITE_FILL : SECONDARY_FILL)}
                    stroke={isAlert ? CORAL : hexToRgba(accent, isPrimary ? 0.45 : 0.2)}
                    strokeWidth={isPrimary ? "0.8" : "0.5"}
                    className="backdrop-blur-sm"
                  />
                  {/* Label Text */}
                  <text
                    x={mod.x}
                    y={mod.y + (isPrimary ? 3 : 2.5)}
                    fill={isAlert ? CORAL : (isPrimary ? PLATINUM : MUTED_SILVER)}
                    fontSize={fontSize}
                    fontFamily="monospace"
                    textAnchor="middle"
                    fontWeight={isPrimary ? "semibold" : "normal"}
                  >
                    {mod.label}
                  </text>
                  
                  {/* Alert Dot on chaos state */}
                  {isAlert && !prefersReducedMotion && (
                    <circle
                      cx={mod.x - textLength / 2}
                      cy={mod.y}
                      r="2"
                      fill={CORAL}
                      className="animate-pulse"
                    />
                  )}
                </g>
              );
            });
          })}
        </g>

        {/* --- Department Hub Nodes --- */}
        <g className="department-nodes">
          {departments.map((dept) => {
            const isActive = currentState.activeDepartments.includes(dept.id);
            const isBroken = currentState.showBrokenLinks && ["production", "utility", "maintenance"].includes(dept.id);
            const accent = DEPT_ACCENTS[dept.id] || PLATINUM;
            
            return (
              <g
                key={`dept-group-${dept.id}`}
                className={`node-dept-${dept.id} constellation-element`}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
              >
                {/* Outer accent halo ring */}
                <circle
                  cx={dept.x}
                  cy={dept.y}
                  r="26"
                  fill="none"
                  stroke={isBroken ? hexToRgba(CORAL, 0.25) : (isActive ? hexToRgba(accent, 0.22) : hexToRgba(MUTED_SILVER, 0.08))}
                  strokeWidth="1"
                  strokeDasharray={isBroken ? "3 3" : "0"}
                />

                {/* Node Capsule Backplate — carbon black glass */}
                <circle
                  cx={dept.x}
                  cy={dept.y}
                  r="21"
                  fill={isBroken ? "rgba(102, 30, 40, 0.85)" : CARBON_BLACK}
                  stroke={isBroken ? CORAL : (isActive ? hexToRgba(accent, 0.65) : hexToRgba(MUTED_SILVER, 0.25))}
                  strokeWidth={isActive ? "1.5" : "1"}
                  className="backdrop-blur-md cursor-pointer transition-all duration-300 filter"
                  style={{
                    filter: isActive && !isBroken ? "url(#node-glow)" : "none",
                  }}
                />

                {/* Lucide SVG Icon Inset */}
                <g transform={`translate(${dept.x - 10}, ${dept.y - 10})`} className="pointer-events-none opacity-85">
                  {renderNodeIcon(dept.icon)}
                </g>

                {/* Department label card beneath the node */}
                <rect
                  x={dept.x - 30}
                  y={dept.y + 26}
                  width="60"
                  height="12"
                  rx="3"
                  fill="rgba(7, 11, 18, 0.92)"
                  stroke={isBroken ? hexToRgba(CORAL, 0.3) : hexToRgba(accent, 0.2)}
                  strokeWidth="0.8"
                />
                <text
                  x={dept.x}
                  y={dept.y + 34}
                  fill={isBroken ? CORAL : PLATINUM}
                  fontSize="7"
                  fontFamily="monospace"
                  textAnchor="middle"
                  fontWeight="bold"
                  letterSpacing="0.5"
                >
                  {dept.label}
                </text>

                {/* Warning Badge on Chaos Stage */}
                {isBroken && (
                  <g transform={`translate(${dept.x + 13}, ${dept.y - 20})`}>
                    <circle cx="5" cy="5" r="7" fill={CORAL} />
                    <text x="5" y="8.5" fill="#070B12" fontSize="10" fontFamily="sans-serif" fontWeight="black" textAnchor="middle">!</text>
                  </g>
                )}
              </g>
            );
          })}
        </g>

        {/* --- Central Df-OS Core --- */}
        <g className="central-core">
          {/* Outer Orbit Ring — Gold accent */}
          <circle cx={CENTER_NODE.x} cy={CENTER_NODE.y} r="75" fill="none" stroke={hexToRgba(GOLD, 0.08)} strokeWidth="1" />
          {/* Inner Orbit Ring — Platinum dashed */}
          <circle cx={CENTER_NODE.x} cy={CENTER_NODE.y} r="60" fill="none" stroke={hexToRgba(PLATINUM, 0.12)} strokeWidth="1" strokeDasharray="3 6" />

          {/* AI Pulsing Halo Layer (Slide 4 and 5) */}
          <circle
            cx={CENTER_NODE.x}
            cy={CENTER_NODE.y}
            r="48"
            fill={hexToRgba(MINT, 0.06)}
            className="core-halo constellation-element"
            stroke={hexToRgba(MINT, 0.28)}
            strokeWidth="1.5"
            style={{
              filter: "url(#ai-glow)",
              opacity: currentState.showAiHalo ? 1 : 0,
              transition: "opacity 0.6s, scale 0.6s",
              transformBox: "fill-box",
              transformOrigin: "center"
            }}
          />

          {/* Core Pulsing Ring */}
          <circle
            cx={CENTER_NODE.x}
            cy={CENTER_NODE.y}
            r="38"
            fill="none"
            stroke={hexToRgba(CORE_BLUE, 0.4)}
            strokeWidth="1.2"
            className="core-pulse-circle"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />

          {/* Central Monogram Ring — Brand Blue */}
          <circle
            cx={CENTER_NODE.x}
            cy={CENTER_NODE.y}
            r="35"
            fill="#070B12"
            stroke={currentState.mode === "chaos" ? hexToRgba(CORE_BLUE, 0.2) : hexToRgba(CORE_BLUE, 0.85)}
            strokeWidth="2"
            className="backdrop-blur-lg filter"
            style={{
              filter: "url(#core-glow)",
              transition: "stroke 0.6s"
            }}
          />

          {/* Central Brain Icon */}
          <g transform={`translate(${CENTER_NODE.x - 12}, ${CENTER_NODE.y - 8})`} className="opacity-95">
            <Cpu className="w-6 h-6 text-white animate-pulse" />
          </g>

          {/* Core Label */}
          <text
            x={CENTER_NODE.x}
            y={CENTER_NODE.y + 22}
            fill={PLATINUM}
            fontSize="6.5"
            fontFamily="monospace"
            fontWeight="black"
            textAnchor="middle"
            letterSpacing="0.8"
          >
            Df-OS CORE
          </text>
          {/* Sub-label: Factory Operating Layer */}
          <text
            x={CENTER_NODE.x}
            y={CENTER_NODE.y + 31}
            fill={MUTED_SILVER}
            fontSize="4.5"
            fontFamily="monospace"
            fontWeight="normal"
            textAnchor="middle"
            letterSpacing="0.5"
            opacity="0.7"
          >
            FACTORY OPERATING LAYER
          </text>
        </g>

        {/* --- Slide 2 Chaos: External Fragments (Excel, Paper, etc.) --- */}
        <g className="external-fragments">
          {/* Excel Report (Top Right) */}
          <g className="external-fragment constellation-element" opacity="0" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <rect x="360" y="20" width="80" height="24" rx="6" fill="rgba(102, 30, 40, 0.15)" stroke={CORAL} strokeWidth="1" className="backdrop-blur-sm" />
            <text x="400" y="34" fill={CORAL} fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Excel Logbook</text>
            <path d="M 400 44 L 395 110" fill="none" stroke={CORAL} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
          </g>

          {/* WhatsApp Text (Top Left) */}
          <g className="external-fragment constellation-element" opacity="0" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <rect x="50" y="25" width="85" height="24" rx="6" fill={hexToRgba(AMBER_WARN, 0.08)} stroke={AMBER_WARN} strokeWidth="1" className="backdrop-blur-sm" />
            <text x="92.5" y="39" fill={AMBER_WARN} fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">WhatsApp Alert</text>
            <path d="M 92.5 49 L 170 35" fill="none" stroke={AMBER_WARN} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
          </g>

          {/* Paper Permit (Bottom Left) */}
          <g className="external-fragment constellation-element" opacity="0" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <rect x="15" y="325" width="70" height="24" rx="6" fill="rgba(102, 30, 40, 0.15)" stroke={CORAL} strokeWidth="1" className="backdrop-blur-sm" />
            <text x="50" y="339" fill={CORAL} fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Paper Log</text>
            <path d="M 50 325 L 60 290" fill="none" stroke={CORAL} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
          </g>

          {/* Local Alarm (Bottom Right) */}
          <g className="external-fragment constellation-element" opacity="0" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <rect x="405" y="325" width="80" height="24" rx="6" fill={hexToRgba(AMBER_WARN, 0.08)} stroke={AMBER_WARN} strokeWidth="1" className="backdrop-blur-sm" />
            <text x="445" y="339" fill={AMBER_WARN} fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Unlogged Alarm</text>
            <path d="M 445 325 L 440 300" fill="none" stroke={AMBER_WARN} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
          </g>
        </g>

        {/* --- Slide 4: Query Card (ForeignObject overlay) --- */}
        <foreignObject
          x="15"
          y="15"
          width="190"
          height="80"
          className="query-overlay constellation-element pointer-events-none"
          style={{ opacity: 0, transform: "translateY(10px) scale(0.9)", transition: "opacity 0.5s, transform 0.5s" }}
        >
          <div className="border p-3 rounded-xl shadow-2xl flex flex-col gap-1 w-full h-full justify-center" style={{ background: 'rgba(7, 11, 18, 0.92)', borderColor: hexToRgba(MINT, 0.3) }}>
            <span className="text-[7.5px] font-mono font-bold uppercase tracking-wider flex items-center gap-1" style={{ color: MINT }}>
              <MessageSquare className="w-2.5 h-2.5" style={{ color: MINT }} /> User query
            </span>
            <p className="text-[10px] text-white leading-normal font-sans font-semibold">
              &ldquo;Why did yield drop after the last changeover?&rdquo;
            </p>
          </div>
        </foreignObject>

        {/* --- Slide 4: Recommendation Card (ForeignObject overlay) --- */}
        <foreignObject
          x="280"
          y="350"
          width="205"
          height="105"
          className="recommendation-overlay constellation-element pointer-events-none"
          style={{ opacity: 0, transform: "translateY(10px) scale(0.9)", transition: "opacity 0.5s, transform 0.5s" }}
        >
          <div className="border p-3 rounded-xl shadow-2xl flex flex-col gap-1.5 w-full h-full justify-between" style={{ background: 'rgba(7, 11, 18, 0.92)', borderColor: hexToRgba(GOLD, 0.35) }}>
            <div className="flex justify-between items-center pb-1" style={{ borderBottom: `1px solid ${hexToRgba(MINT, 0.2)}` }}>
              <span className="text-[8px] font-mono font-black uppercase tracking-wider flex items-center gap-1" style={{ color: MINT }}>
                <Brain className="w-2.5 h-2.5" style={{ color: MINT }} /> Vish AI Recommendation
              </span>
              <span className="text-[6.5px] px-1 py-0.5 rounded font-mono font-bold" style={{ background: hexToRgba(MINT, 0.1), color: MINT, border: `1px solid ${hexToRgba(MINT, 0.25)}` }}>RCA ACTIVE</span>
            </div>
            <p className="text-[9.5px] text-slate-200 leading-normal font-sans">
              Changeover recorded a <span style={{ color: MINT }} className="font-bold">4.2mm valve deviation</span> on Line 3. Adjust sealing pressure by <span style={{ color: GOLD }} className="font-bold">+12%</span> to regain yield.
            </p>
          </div>
        </foreignObject>
      </svg>

      {/* Decorative background radial rings — gold/platinum tint */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[450px] h-[450px] rounded-full border border-dashed animate-[spin_120s_linear_infinite]" style={{ borderColor: hexToRgba(GOLD, 0.05) }} />
        <div className="w-[360px] h-[360px] rounded-full border border-dotted animate-[spin_80s_linear_infinite_reverse]" style={{ borderColor: hexToRgba(PLATINUM, 0.04) }} />
      </div>
    </div>
  );
}
