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
    
    // Set initial value inside a timeout to avoid synchronous rendering/layout warnings
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
      // Immediate opacity changes for reduced motion
      gsap.killTweensOf(".constellation-element");
      return;
    }

    const ctx = gsap.context(() => {
      const mode = currentState.mode;

      // --- BRAND MODE ---
      if (mode === "brand") {
        // Reset everything to standard calm state
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
            stroke: "rgba(30, 107, 255, 0.4)",
            duration: 0.6
          });

          dept.modules.forEach((mod) => {
            const isModActive = currentState.activeModules.includes(mod.id);
            gsap.to(`.chip-mod-${mod.id}`, {
              opacity: isModActive ? 0.95 : 0,
              scale: isModActive ? 1 : 0.8,
              x: 0,
              y: 0,
              duration: 0.5
            });
            gsap.to(`.mod-line-${mod.id}`, {
              opacity: isModActive ? 0.3 : 0,
              duration: 0.5
            });
          });
        });

        // Hide links, signals, fragments
        gsap.to(".cross-link-path", { opacity: 0, duration: 0.4 });
        gsap.to(".external-fragment", { opacity: 0, scale: 0.7, y: 15, duration: 0.4 });
        gsap.to(".query-overlay", { opacity: 0, scale: 0.9, y: 10, duration: 0.4 });
        gsap.to(".stack-signals", { opacity: 0, duration: 0.4 });
        gsap.to(".recommendation-overlay", { opacity: 0, scale: 0.9, y: 10, duration: 0.4 });
      }

      // --- CHAOS MODE ---
      if (mode === "chaos") {
        // Df-OS core dimmed
        gsap.to(".core-halo", { scale: 0.9, opacity: 0.05, duration: 0.6 });
        
        // Departments drift slightly and turn warnings/muted
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
            stroke: isWarning ? "#FF5A6B" : "rgba(30, 107, 255, 0.2)",
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

        // Show fragmented files (Excel, Whatsapp, Paper logbook)
        gsap.to(".external-fragment", {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "back.out(1.2)"
        });

        // Hide query and links
        gsap.to(".cross-link-path", { opacity: 0, duration: 0.4 });
        gsap.to(".query-overlay", { opacity: 0, scale: 0.9, duration: 0.4 });
        gsap.to(".recommendation-overlay", { opacity: 0, scale: 0.9, duration: 0.4 });
        gsap.to(".stack-signals", { opacity: 0, duration: 0.4 });
      }

      // --- OPERATING LAYER MODE ---
      if (mode === "operating-layer") {
        // Reconnect core, snap back departments
        gsap.to(".core-halo", { scale: 1.1, opacity: 0.25, duration: 0.8 });
        
        departments.forEach((dept) => {
          const isActive = currentState.activeDepartments.includes(dept.id);
          gsap.to(`.node-dept-${dept.id}`, {
            opacity: isActive ? 1 : 0.2,
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "back.out(1.5)"
          });
          gsap.to(`.core-line-${dept.id}`, {
            opacity: isActive ? 0.7 : 0.05,
            stroke: "rgba(25, 212, 255, 0.6)",
            duration: 0.7
          });

          dept.modules.forEach((mod) => {
            const isModActive = currentState.activeModules.includes(mod.id);
            gsap.to(`.chip-mod-${mod.id}`, {
              opacity: isModActive ? 0.95 : 0,
              scale: isModActive ? 1 : 0.8,
              x: 0,
              y: 0,
              duration: 0.6
            });
            gsap.to(`.mod-line-${mod.id}`, {
              opacity: isModActive ? 0.4 : 0,
              duration: 0.6
            });
          });
        });

        // Highlight cross-links
        crossLinks.forEach((link) => {
          const isHighlighted = currentState.highlightedLinks.includes(link.id);
          gsap.to(`.link-path-${link.id}`, {
            opacity: isHighlighted ? 0.75 : 0.08,
            stroke: isHighlighted ? "#19D4FF" : "rgba(159, 180, 211, 0.15)",
            strokeWidth: isHighlighted ? 1.5 : 1,
            duration: 0.8
          });
        });

        // Hide chaos files, query, and stack
        gsap.to(".external-fragment", { opacity: 0, scale: 0.7, duration: 0.4 });
        gsap.to(".query-overlay", { opacity: 0, duration: 0.4 });
        gsap.to(".recommendation-overlay", { opacity: 0, duration: 0.4 });
        gsap.to(".stack-signals", { opacity: 0, duration: 0.4 });
      }

      // --- INTELLIGENCE MODE ---
      if (mode === "intelligence") {
        // Vish AI Halo active
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
            opacity: isActive ? 0.8 : 0.05,
            stroke: "rgba(51, 230, 161, 0.6)", // Signal Green
            duration: 0.7
          });

          dept.modules.forEach((mod) => {
            const isModActive = currentState.activeModules.includes(mod.id);
            gsap.to(`.chip-mod-${mod.id}`, {
              opacity: isModActive ? 0.95 : 0,
              scale: isModActive ? 1 : 0.7,
              x: 0,
              y: 0,
              duration: 0.6
            });
            gsap.to(`.mod-line-${mod.id}`, {
              opacity: isModActive ? 0.45 : 0,
              duration: 0.6
            });
          });
        });

        // Cross-links active path
        crossLinks.forEach((link) => {
          const isHighlighted = currentState.highlightedLinks.includes(link.id);
          gsap.to(`.link-path-${link.id}`, {
            opacity: isHighlighted ? 0.85 : 0.05,
            stroke: isHighlighted ? "#33E6A1" : "rgba(159, 180, 211, 0.1)",
            strokeWidth: isHighlighted ? 2 : 1,
            duration: 0.7
          });
        });

        // Show Query & Recommendation overlay cards
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

        // Hide chaos and stack layers
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
            opacity: isActive ? 0.6 : 0.1,
            stroke: "rgba(30, 107, 255, 0.4)",
            duration: 0.6
          });

          dept.modules.forEach((mod) => {
            const isModActive = currentState.activeModules.includes(mod.id);
            gsap.to(`.chip-mod-${mod.id}`, {
              opacity: isModActive ? 0.95 : 0,
              scale: isModActive ? 1 : 0.8,
              x: 0,
              y: 0,
              duration: 0.5
            });
            gsap.to(`.mod-line-${mod.id}`, {
              opacity: isModActive ? 0.35 : 0,
              duration: 0.5
            });
          });
        });

        crossLinks.forEach((link) => {
          const isHighlighted = currentState.highlightedLinks.includes(link.id);
          gsap.to(`.link-path-${link.id}`, {
            opacity: isHighlighted ? 0.75 : 0.1,
            stroke: isHighlighted ? "#19D4FF" : "rgba(159, 180, 211, 0.15)",
            strokeWidth: isHighlighted ? 1.5 : 1,
            duration: 0.6
          });
        });

        // Reveal bottom signal ingress / top Vish AI stack labels
        gsap.to(".stack-signals", {
          opacity: 1,
          duration: 0.6
        });

        // Hide query and fragments
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
      {/* SVG Master Drawing Canvas */}
      <svg
        ref={svgRef}
        viewBox="0 0 500 500"
        className="w-[490px] h-[490px] overflow-visible z-10 relative"
      >
        <defs>
          {/* Radial Glow Filters */}
          <filter id="core-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="node-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="ai-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.2   0 0 0 0 0.9   0 0 0 0 0.6  0 0 0 1 0" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* --- Background Stack Components (Slide 5 Only) --- */}
        <g className="stack-signals opacity-0 transition-opacity duration-300">
          {/* Bottom ingress sensor lines */}
          <path d="M 100 500 Q 110 420 125 365" fill="none" stroke="rgba(25, 212, 255, 0.45)" strokeWidth="1" strokeDasharray="3 5" />
          <path d="M 250 500 Q 250 450 250 415" fill="none" stroke="rgba(25, 212, 255, 0.45)" strokeWidth="1" strokeDasharray="3 5" />
          <path d="M 400 500 Q 390 420 375 365" fill="none" stroke="rgba(25, 212, 255, 0.45)" strokeWidth="1" strokeDasharray="3 5" />
          
          {/* Flow packets upward */}
          {!prefersReducedMotion && (
            <>
              <circle r="2" fill="#19D4FF">
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M 100 500 Q 110 420 125 365" />
              </circle>
              <circle r="2" fill="#19D4FF">
                <animateMotion dur="2s" repeatCount="indefinite" path="M 250 500 Q 250 450 250 415" />
              </circle>
              <circle r="2" fill="#19D4FF">
                <animateMotion dur="2.8s" repeatCount="indefinite" path="M 400 500 Q 390 420 375 365" />
              </circle>
            </>
          )}

          {/* Bottom signal entry markers */}
          <rect x="75" y="470" width="100" height="22" rx="4" fill="rgba(4, 21, 46, 0.85)" stroke="rgba(25, 212, 255, 0.2)" strokeWidth="1" />
          <text x="125" y="484" fill="#9FB4D3" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PLC & SENSORS</text>
          
          <rect x="325" y="470" width="100" height="22" rx="4" fill="rgba(4, 21, 46, 0.85)" stroke="rgba(25, 212, 255, 0.2)" strokeWidth="1" />
          <text x="375" y="484" fill="#9FB4D3" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">X-KONNECT EDGE</text>

          {/* Top Control Tower Marker */}
          <rect x="180" y="-8" width="140" height="22" rx="4" fill="rgba(4, 21, 46, 0.9)" stroke="rgba(51, 230, 161, 0.3)" strokeWidth="1" />
          <text x="250" y="6" fill="#33E6A1" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="black" letterSpacing="1">VISH CONTROL TOWER</text>
        </g>

        {/* --- Cross-Department Links --- */}
        <g className="cross-links">
          {crossLinks.map((link) => {
            const fromDept = departments.find((d) => d.id === link.from);
            const toDept = departments.find((d) => d.id === link.to);
            if (!fromDept || !toDept) return null;
            
            // Calculate organic bezier mid-curve coordinates
            const midX = (fromDept.x + toDept.x) / 2 + (toDept.y - fromDept.y) * 0.12;
            const midY = (fromDept.y + toDept.y) / 2 + (fromDept.x - toDept.x) * 0.12;
            const pathD = `M ${fromDept.x} ${fromDept.y} Q ${midX} ${midY} ${toDept.x} ${toDept.y}`;

            return (
              <g key={link.id}>
                <path
                  d={pathD}
                  fill="none"
                  className={`cross-link-path link-path-${link.id} constellation-element`}
                  stroke="rgba(159, 180, 211, 0.08)"
                  strokeWidth="1"
                  style={{ transition: "stroke 0.4s, stroke-width 0.4s, opacity 0.4s" }}
                />
                
                {/* Active cross-link packet loops */}
                {currentState.highlightedLinks.includes(link.id) && !prefersReducedMotion && (
                  <circle r="2.5" fill="#33E6A1" className="filter drop-shadow-[0_0_4px_#33E6A1]">
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
            return (
              <g key={`core-link-${dept.id}`}>
                <line
                  x1={CENTER_NODE.x}
                  y1={CENTER_NODE.y}
                  x2={dept.x}
                  y2={dept.y}
                  className={`core-line-${dept.id} constellation-element`}
                  stroke={isBroken ? "#FF5A6B" : "rgba(30, 107, 255, 0.3)"}
                  strokeWidth={isBroken ? "1" : "1.2"}
                  strokeDasharray={isBroken ? "4 4" : "0"}
                  style={{ transition: "stroke 0.5s, opacity 0.5s" }}
                />

                {/* Draw signal flows on active non-broken connections */}
                {isActive && !isBroken && !prefersReducedMotion && (
                  <circle r="2" fill={currentState.mode === "intelligence" ? "#33E6A1" : "#19D4FF"}>
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
          {departments.map((dept) =>
            dept.modules.map((mod) => (
              <line
                key={`mod-line-${mod.id}`}
                x1={dept.x}
                y1={dept.y}
                x2={mod.x}
                y2={mod.y}
                className={`mod-line-${mod.id} constellation-element`}
                stroke="rgba(25, 212, 255, 0.22)"
                strokeWidth="0.8"
                strokeDasharray="2 4"
                opacity="0"
                style={{ transition: "opacity 0.4s" }}
              />
            ))
          )}
        </g>

        {/* --- Process Module Chips (Interactive label nodes) --- */}
        <g className="module-chips">
          {departments.map((dept) =>
            dept.modules.map((mod) => {
              const textLength = mod.label.length * 5.2 + 10;
              const isAlert = currentState.showBrokenLinks && ["non-conformance", "breakdown-rep", "downtime-analysis"].includes(mod.id);
              
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
                    y={mod.y - 9}
                    width={textLength}
                    height="18"
                    rx="9"
                    fill={isAlert ? "rgba(102, 30, 40, 0.85)" : "rgba(3, 18, 42, 0.82)"}
                    stroke={isAlert ? "#FF5A6B" : "rgba(25, 212, 255, 0.25)"}
                    strokeWidth="0.8"
                    className="backdrop-blur-sm"
                  />
                  {/* Label Text */}
                  <text
                    x={mod.x}
                    y={mod.y + 3}
                    fill={isAlert ? "#FF5A6B" : "#9FB4D3"}
                    fontSize="7.5"
                    fontFamily="monospace"
                    textAnchor="middle"
                    fontWeight="semibold"
                  >
                    {mod.label}
                  </text>
                  
                  {/* Alert Dot on chaos state */}
                  {isAlert && !prefersReducedMotion && (
                    <circle
                      cx={mod.x - textLength / 2}
                      cy={mod.y}
                      r="2"
                      fill="#FF5A6B"
                      className="animate-pulse"
                    />
                  )}
                </g>
              );
            })
          )}
        </g>

        {/* --- Department Hub Nodes --- */}
        <g className="department-nodes">
          {departments.map((dept) => {
            const isActive = currentState.activeDepartments.includes(dept.id);
            const isBroken = currentState.showBrokenLinks && ["production", "utility", "maintenance"].includes(dept.id);
            
            return (
              <g
                key={`dept-group-${dept.id}`}
                className={`node-dept-${dept.id} constellation-element`}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
              >
                {/* Node Ring Halo */}
                <circle
                  cx={dept.x}
                  cy={dept.y}
                  r="26"
                  fill="none"
                  stroke={isBroken ? "rgba(255, 90, 107, 0.25)" : (isActive ? "rgba(25, 212, 255, 0.22)" : "rgba(81, 163, 255, 0.08)")}
                  strokeWidth="1"
                  strokeDasharray={isBroken ? "3 3" : "0"}
                />

                {/* Node Capsule Backplate */}
                <circle
                  cx={dept.x}
                  cy={dept.y}
                  r="21"
                  fill={isBroken ? "rgba(102, 30, 40, 0.85)" : "rgba(4, 21, 46, 0.8)"}
                  stroke={isBroken ? "#FF5A6B" : (isActive ? "rgba(25, 212, 255, 0.6)" : "rgba(81, 163, 255, 0.25)")}
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
                  fill="rgba(2, 11, 24, 0.9)"
                  stroke={isBroken ? "rgba(255, 90, 107, 0.3)" : "rgba(81, 163, 255, 0.15)"}
                  strokeWidth="0.8"
                />
                <text
                  x={dept.x}
                  y={dept.y + 34}
                  fill={isBroken ? "#FF5A6B" : "#F4F8FF"}
                  fontSize="7"
                  fontFamily="monospace"
                  textAnchor="middle"
                  fontWeight="bold"
                  letterSpacing="0.5"
                >
                  {dept.label}
                </text>

                {/* Warning Warning Badge on Chaos Stage */}
                {isBroken && (
                  <g transform={`translate(${dept.x + 13}, ${dept.y - 20})`}>
                    <circle cx="5" cy="5" r="7" fill="#FF5A6B" />
                    <text x="5" y="8.5" fill="#020B18" fontSize="10" fontFamily="sans-serif" fontWeight="black" textAnchor="middle">!</text>
                  </g>
                )}
              </g>
            );
          })}
        </g>

        {/* --- Central Df-OS Core --- */}
        <g className="central-core">
          {/* Outer Orbit Rings */}
          <circle cx={CENTER_NODE.x} cy={CENTER_NODE.y} r="60" fill="none" stroke="rgba(25, 212, 255, 0.15)" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx={CENTER_NODE.x} cy={CENTER_NODE.y} r="75" fill="none" stroke="rgba(25, 212, 255, 0.08)" strokeWidth="1" />

          {/* AI Pulsing Halo Layer (Slide 4 and 5) */}
          <circle
            cx={CENTER_NODE.x}
            cy={CENTER_NODE.y}
            r="48"
            fill="rgba(51, 230, 161, 0.08)"
            className="core-halo constellation-element"
            stroke="rgba(51, 230, 161, 0.28)"
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
            stroke="rgba(25, 212, 255, 0.4)"
            strokeWidth="1.2"
            className="core-pulse-circle"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />

          {/* Central Monogram Ring */}
          <circle
            cx={CENTER_NODE.x}
            cy={CENTER_NODE.y}
            r="35"
            fill="rgba(4, 21, 46, 0.95)"
            stroke={currentState.mode === "chaos" ? "rgba(25, 212, 255, 0.2)" : "rgba(25, 212, 255, 0.85)"}
            strokeWidth="2"
            className="backdrop-blur-lg filter"
            style={{
              filter: "url(#core-glow)",
              transition: "stroke 0.6s"
            }}
          />

          {/* Central Brain Icon */}
          <g transform={`translate(${CENTER_NODE.x - 12}, ${CENTER_NODE.y - 12})`} className="opacity-95 text-brand-cyan">
            <Cpu className="w-6 h-6 text-brand-cyan animate-pulse" />
          </g>

          <text
            x={CENTER_NODE.x}
            y={CENTER_NODE.y + 24}
            fill="#19D4FF"
            fontSize="6.5"
            fontFamily="monospace"
            fontWeight="black"
            textAnchor="middle"
            letterSpacing="0.8"
          >
            Df-OS CORE
          </text>
        </g>

        {/* --- Slide 2 Chaos: External Fragments (Excel, Paper, etc.) --- */}
        <g className="external-fragments">
          {/* Excel Report (Top Right) */}
          <g className="external-fragment constellation-element" opacity="0" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <rect x="360" y="20" width="80" height="24" rx="6" fill="rgba(239, 68, 68, 0.08)" stroke="#FF5A6B" strokeWidth="1" className="backdrop-blur-sm" />
            <text x="400" y="34" fill="#FF5A6B" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Excel Logbook</text>
            <path d="M 400 44 L 395 110" fill="none" stroke="#FF5A6B" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
          </g>

          {/* WhatsApp Text (Top Left) */}
          <g className="external-fragment constellation-element" opacity="0" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <rect x="50" y="25" width="85" height="24" rx="6" fill="rgba(255, 183, 74, 0.08)" stroke="#FFB74A" strokeWidth="1" className="backdrop-blur-sm" />
            <text x="92.5" y="39" fill="#FFB74A" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">WhatsApp Alert</text>
            <path d="M 92.5 49 L 170 35" fill="none" stroke="#FFB74A" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
          </g>

          {/* Paper Permit (Bottom Left) */}
          <g className="external-fragment constellation-element" opacity="0" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <rect x="15" y="325" width="70" height="24" rx="6" fill="rgba(239, 68, 68, 0.08)" stroke="#FF5A6B" strokeWidth="1" className="backdrop-blur-sm" />
            <text x="50" y="339" fill="#FF5A6B" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Paper Log</text>
            <path d="M 50 325 L 60 290" fill="none" stroke="#FF5A6B" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
          </g>

          {/* Local Alarm (Bottom Right) */}
          <g className="external-fragment constellation-element" opacity="0" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <rect x="405" y="325" width="80" height="24" rx="6" fill="rgba(255, 183, 74, 0.08)" stroke="#FFB74A" strokeWidth="1" className="backdrop-blur-sm" />
            <text x="445" y="339" fill="#FFB74A" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Unlogged Alarm</text>
            <path d="M 445 325 L 440 300" fill="none" stroke="#FFB74A" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
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
          <div className="bg-[#0c0c12]/92 border border-brand-green/30 p-3 rounded-xl shadow-2xl flex flex-col gap-1 w-full h-full justify-center">
            <span className="text-[7.5px] font-mono text-brand-green font-bold uppercase tracking-wider flex items-center gap-1">
              <MessageSquare className="w-2.5 h-2.5 text-brand-green" /> User query
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
          <div className="bg-[#0c0c12]/92 border border-brand-green/35 p-3 rounded-xl shadow-2xl flex flex-col gap-1.5 w-full h-full justify-between">
            <div className="flex justify-between items-center border-b border-brand-green/20 pb-1">
              <span className="text-[8px] font-mono text-brand-green font-black uppercase tracking-wider flex items-center gap-1">
                <Brain className="w-2.5 h-2.5 text-brand-green" /> Vish AI Recommendation
              </span>
              <span className="text-[6.5px] bg-brand-green/10 text-brand-green px-1 py-0.5 rounded border border-brand-green/25 font-mono font-bold">RCA ACTIVE</span>
            </div>
            <p className="text-[9.5px] text-slate-200 leading-normal font-sans">
              Changeover recorded a <span className="text-brand-green font-bold">4.2mm valve deviation</span> on Line 3. Adjust sealing pressure by <span className="text-brand-green font-bold">+12%</span> to regain yield.
            </p>
          </div>
        </foreignObject>
      </svg>

      {/* Decorative background radial rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[450px] h-[450px] rounded-full border border-dashed border-brand-cyan/5 animate-[spin_120s_linear_infinite]" />
        <div className="w-[360px] h-[360px] rounded-full border border-dotted border-brand-blue/5 animate-[spin_80s_linear_infinite_reverse]" />
      </div>
    </div>
  );
}
