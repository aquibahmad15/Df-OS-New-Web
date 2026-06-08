"use client";

// ─────────────────────────────────────────────────────────────────────────────
// Df-OS Factory Constellation System — Radial "Factory Operating System Map"
// State-driven across the 5 hero scroll slides (brand → chaos → operating-layer
// → Vish AI → AI stack). One reusable component; the map never rebuilds, it
// transitions between states. Brand-digital palette over the blue network video.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import {
  Activity, ShieldCheck, Wrench, Shield, Gauge, Zap, Warehouse, Cpu,
} from "lucide-react";
import {
  DEPARTMENTS, CROSS_LINKS, CORE, type Department, type ProcessNode,
} from "@/lib/hero/connected-factory-data";
import {
  SLIDE_STATES, WARNING_CHIPS, EXTERNAL_FRAGMENTS, AI_PATH, AI_CHIPS,
  STACK_SIGNAL_LAYER, STACK_INTEL_LAYER,
} from "@/lib/hero/connected-factory-states";
import { THEME, DEPT_ACCENT, rgba } from "@/lib/hero/constellation-theme";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity, ShieldCheck, Wrench, Shield, Gauge, Zap, Warehouse,
};

// ── Geometry (840×840 virtual canvas) ───────────────────────────────────────
const VB = 840;
const CX = 420;
const CY = 420;
const R_OUTER = 280;
const R_HUB = 206;
const R_NODE_LABEL = R_OUTER + 13;
const R_HUB_LABEL = R_HUB - 58;

type Level = "lit" | "base" | "dim";
interface LaidNode { dept: Department; proc: ProcessNode; ang: number; x: number; y: number; jx: number; jy: number; }
interface LaidHub  { dept: Department; ang: number; x: number; y: number; }
interface Props { activeStage?: number; }

export default function ConnectedFactoryConstellation({ activeStage = 0 }: Props) {
  const [reduced, setReduced] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const hovering = useRef(false);
  const aiRef = useRef<SVGPathElement>(null);

  const state = SLIDE_STATES[activeStage] || SLIDE_STATES[0];
  const mode = state.mode;
  const focus = state.focusDepartments;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Idle "spotlight" scan — Slide 1 (brand) only.
  useEffect(() => {
    if (reduced || activeStage !== 0) {
      const raf = requestAnimationFrame(() => setActive(null));
      return () => cancelAnimationFrame(raf);
    }
    const ids = DEPARTMENTS.map((d) => d.id);
    let i = -1;
    const id = setInterval(() => {
      if (hovering.current) return;
      i = (i + 1) % (ids.length + 1);
      setActive(i === ids.length ? null : ids[i]);
    }, 2000);
    return () => clearInterval(id);
  }, [reduced, activeStage]);

  // ── Ring layout ────────────────────────────────────────────────────────────
  const { nodes, hubs } = useMemo(() => {
    const flat: { dept: Department; proc: ProcessNode }[] = [];
    DEPARTMENTS.forEach((d) => d.processes.forEach((p) => flat.push({ dept: d, proc: p })));
    const N = flat.length;
    const step = (Math.PI * 2) / N;
    const start = -Math.PI / 2 - (DEPARTMENTS[0].processes.length / 2) * step;
    const laidNodes: LaidNode[] = flat.map((it, i) => {
      const ang = start + (i + 0.5) * step;
      return {
        ...it, ang,
        x: CX + R_OUTER * Math.cos(ang), y: CY + R_OUTER * Math.sin(ang),
        jx: Math.sin(i * 2.3) * 9, jy: Math.cos(i * 1.7) * 9, // deterministic chaos drift
      };
    });
    const laidHubs: LaidHub[] = DEPARTMENTS.map((d) => {
      const mine = laidNodes.filter((n) => n.dept.id === d.id);
      const ang = mine.reduce((s, n) => s + n.ang, 0) / mine.length;
      return { dept: d, ang, x: CX + R_HUB * Math.cos(ang), y: CY + R_HUB * Math.sin(ang) };
    });
    return { nodes: laidNodes, hubs: laidHubs };
  }, []);

  const hubByDept = useMemo(() => {
    const m: Record<string, LaidHub> = {};
    hubs.forEach((h) => (m[h.dept.id] = h));
    return m;
  }, [hubs]);
  const nodeById = useMemo(() => {
    const m: Record<string, LaidNode> = {};
    nodes.forEach((n) => (m[n.proc.id] = n));
    return m;
  }, [nodes]);

  const aiPathD = useMemo(() => {
    const pts = AI_PATH.map((id) => {
      const n = nodeById[id]; if (n) return [n.x, n.y] as const;
      const h = hubByDept[id]; if (h) return [h.x, h.y] as const;
      return null;
    }).filter(Boolean) as (readonly [number, number])[];
    return pts.length < 2 ? "" : "M " + pts.map((p) => `${p[0]} ${p[1]}`).join(" L ");
  }, [nodeById, hubByDept]);

  // GSAP: draw the Vish AI reasoning path on Slide 4.
  useEffect(() => {
    const el = aiRef.current;
    if (!el || !aiPathD) return;
    const len = el.getTotalLength();
    el.style.strokeDasharray = `${len}`;
    if (reduced) { el.style.strokeDashoffset = "0"; return; }
    if (activeStage === 3) {
      gsap.fromTo(el, { strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.2, ease: "power2.out" });
    } else {
      el.style.strokeDashoffset = `${len}`;
    }
  }, [activeStage, reduced, aiPathD]);

  // ── Emphasis model ──────────────────────────────────────────────────────────
  const deptLevel = (id: string): Level => {
    if (active != null) return active === id ? "lit" : "dim";
    if (mode === "brand") return "base";
    if (focus.length === 0) return "base";
    return focus.includes(id) ? "lit" : "dim";
  };
  const lvl = (level: Level, base: number, dim: number, lit = 1) =>
    level === "lit" ? lit : level === "dim" ? dim : base;

  const onEnter = (id: string) => { hovering.current = true; setActive(id); };
  const onLeave = () => { hovering.current = false; if (activeStage !== 0) setActive(null); };

  const arcPath = (a0: number, a1: number, r: number) => {
    const x0 = CX + r * Math.cos(a0), y0 = CY + r * Math.sin(a0);
    const x1 = CX + r * Math.cos(a1), y1 = CY + r * Math.sin(a1);
    const large = a1 - a0 > Math.PI ? 1 : 0;
    return `M ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1}`;
  };

  const transition = "opacity .6s ease, stroke .6s ease, transform .7s ease";
  const chaos = mode === "chaos";
  const coreDim = chaos;

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none"
      style={{ transform: "translateX(26px)" }}>
      <style>{`
        @keyframes cfcIn { from { opacity: 0; transform: scale(.92); } to { opacity: 1; transform: none; } }
        @keyframes cfcSpin { to { transform: rotate(360deg); } }
        @keyframes cfcWarn { 0%,100% { opacity:.25; } 50% { opacity:1; } }
        .cfc-root { animation: cfcIn 1s cubic-bezier(.22,1,.36,1) both; transform-origin: center; }
        .cfc-spin { animation: cfcSpin 140s linear infinite; transform-origin: ${CX}px ${CY}px; }
        .cfc-warn { animation: cfcWarn 1.3s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .cfc-root,.cfc-spin,.cfc-warn { animation: none; }
        }
      `}</style>

      <svg
        viewBox={`0 0 ${VB} ${VB}`}
        className="relative z-10 w-[580px] h-[580px] overflow-visible"
        style={{ maxWidth: "none" }}
        role="img"
        aria-label="Df-OS Factory Operating System Map across five operating states."
      >
        <defs>
          <radialGradient id="cfc-core" cx="50%" cy="42%" r="62%">
            <stop offset="0%" stopColor="#0B1424" />
            <stop offset="72%" stopColor="#070B12" />
            <stop offset="100%" stopColor="#05080F" />
          </radialGradient>
          <filter id="cfc-soft" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="cfc-coreglow" x="-90%" y="-90%" width="280%" height="280%">
            <feGaussianBlur stdDeviation="12" result="b" />
            <feColorMatrix in="b" type="matrix"
              values="0 0 0 0 0.13  0 0 0 0 0.55  0 0 0 0 1  0 0 0 0.55 0" result="g" />
            <feMerge><feMergeNode in="g" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="cfc-mint" x="-90%" y="-90%" width="280%" height="280%">
            <feGaussianBlur stdDeviation="10" result="b" />
            <feColorMatrix in="b" type="matrix"
              values="0 0 0 0 0.49  0 0 0 0 1  0 0 0 0 0.80  0 0 0 0.7 0" result="g" />
            <feMerge><feMergeNode in="g" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <g className="cfc-root">
          {/* ── Perimeter band ─────────────────────────────────────────────── */}
          <g className="cfc-spin">
            {DEPARTMENTS.map((d) => {
              const mine = nodes.filter((n) => n.dept.id === d.id);
              if (!mine.length) return null;
              const step = mine.length > 1 ? mine[1].ang - mine[0].ang : 0.14;
              const a0 = mine[0].ang - step * 0.42;
              const a1 = mine[mine.length - 1].ang + step * 0.42;
              const accent = DEPT_ACCENT[d.id];
              return (
                <path key={`band-${d.id}`} d={arcPath(a0, a1, R_OUTER)} fill="none"
                  stroke={rgba(accent, 0.85)} strokeWidth={3} strokeLinecap="round"
                  style={{ opacity: lvl(deptLevel(d.id), 0.7, 0.14), transition }} />
              );
            })}
          </g>

          {/* ── Cross-department links ─────────────────────────────────────── */}
          <g>
            {CROSS_LINKS.map((l) => {
              const a = hubByDept[l.from], b = hubByDept[l.to];
              if (!a || !b) return null;
              const mx = (a.x + b.x) / 2 + (CX - (a.x + b.x) / 2) * 0.45;
              const my = (a.y + b.y) / 2 + (CY - (a.y + b.y) / 2) * 0.45;
              const lit = (active && (active === l.from || active === l.to)) ||
                          state.highlightedLinks.includes(l.id);
              return (
                <path key={l.id} d={`M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`}
                  fill="none"
                  stroke={lit ? rgba(THEME.brandCyan, 0.7) : rgba(THEME.platinum, chaos ? 0.1 : 0.24)}
                  strokeWidth={lit ? 2.25 : 1.25}
                  strokeDasharray={chaos ? "5 6" : "0"}
                  style={{ transition }} />
              );
            })}
          </g>

          {/* ── Node → hub tethers ─────────────────────────────────────────── */}
          <g>
            {nodes.map((n) => {
              const accent = DEPT_ACCENT[n.dept.id];
              const h = hubByDept[n.dept.id];
              const primary = n.proc.priority === "primary";
              return (
                <line key={`teth-${n.proc.id}`}
                  x1={n.x + (chaos ? n.jx : 0)} y1={n.y + (chaos ? n.jy : 0)} x2={h.x} y2={h.y}
                  stroke={rgba(accent, primary ? 0.55 : 0.34)}
                  strokeWidth={primary ? 1.6 : 1.1}
                  strokeDasharray={chaos ? "4 6" : "0"}
                  style={{ opacity: lvl(deptLevel(n.dept.id), 0.9, 0.12), transition }} />
              );
            })}
          </g>

          {/* ── Hub → core spokes ──────────────────────────────────────────── */}
          <g>
            {hubs.map((h) => {
              const accent = DEPT_ACCENT[h.dept.id];
              const broken = state.brokenDepartments.includes(h.dept.id);
              const level = deptLevel(h.dept.id);
              return (
                <g key={`spoke-${h.dept.id}`} style={{ opacity: lvl(level, 0.9, 0.18), transition }}>
                  <line x1={h.x} y1={h.y} x2={CX} y2={CY}
                    stroke={broken ? rgba(THEME.coral, 0.8) : rgba(accent, 0.7)}
                    strokeWidth={broken ? 2 : 2.25}
                    strokeDasharray={broken ? "6 7" : "0"}
                    style={{ transition: "stroke .6s, stroke-dasharray .4s" }} />
                  {!reduced && !broken && level !== "dim" && (
                    <circle r={2.4} fill={accent}>
                      <animateMotion dur={`${3 + (h.dept.id.length % 4) * 0.4}s`} repeatCount="indefinite"
                        keyPoints="1;0" keyTimes="0;1" calcMode="linear"
                        path={`M ${CX} ${CY} L ${h.x} ${h.y}`} />
                    </circle>
                  )}
                </g>
              );
            })}
          </g>

          {/* ── Vish AI reasoning path (Slide 4) ───────────────────────────── */}
          <g style={{ opacity: mode === "intelligence" ? 1 : 0, transition: "opacity .5s" }}>
            <path ref={aiRef} d={aiPathD} fill="none"
              stroke={rgba(THEME.mint, 0.95)} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"
              style={{ filter: "url(#cfc-mint)" }} />
            {!reduced && mode === "intelligence" && aiPathD && (
              <circle r={3.4} fill={THEME.mint}>
                <animateMotion dur="2.6s" repeatCount="indefinite" path={aiPathD} />
              </circle>
            )}
          </g>

          {/* ── Outer process nodes + labels ───────────────────────────────── */}
          <g>
            {nodes.map((n) => {
              const accent = DEPT_ACCENT[n.dept.id];
              const primary = n.proc.priority === "primary";
              const flip = Math.cos(n.ang) < 0;
              const deg = (n.ang * 180) / Math.PI;
              const lx = CX + R_NODE_LABEL * Math.cos(n.ang);
              const ly = CY + R_NODE_LABEL * Math.sin(n.ang);
              const isHot = active === n.dept.id;
              const warn = chaos ? WARNING_CHIPS[n.proc.id] : undefined;
              const warnCol = warn === "coral" ? THEME.coral : THEME.amber;
              return (
                <g key={n.proc.id}
                  style={{
                    opacity: lvl(deptLevel(n.dept.id), 1, 0.22), transition, cursor: "pointer",
                    transform: chaos ? `translate(${n.jx}px, ${n.jy}px)` : "none",
                  }}
                  onMouseEnter={() => onEnter(n.dept.id)} onMouseLeave={onLeave}>
                  {warn && (
                    <circle cx={n.x} cy={n.y} r={11} fill="none" stroke={warnCol} strokeWidth={1.6}
                      className="cfc-warn" />
                  )}
                  <circle cx={n.x} cy={n.y} r={primary ? 7 : 5.5}
                    fill={rgba(THEME.obsidian, 0.78)}
                    stroke={warn ? warnCol : (isHot ? accent : rgba(accent, primary ? 0.95 : 0.65))}
                    strokeWidth={isHot ? 2.75 : 1.9}
                    style={{ filter: isHot ? "url(#cfc-soft)" : "none", transition: "stroke .5s" }} />
                  {primary && <circle cx={n.x} cy={n.y} r={2} fill={warn ? warnCol : (isHot ? accent : rgba(accent, 0.9))} />}
                  <text x={lx} y={ly}
                    transform={`rotate(${flip ? deg + 180 : deg} ${lx} ${ly})`}
                    textAnchor={flip ? "end" : "start"} dominantBaseline="middle"
                    fill={isHot ? "#FFFFFF" : (primary ? THEME.platinum : rgba(THEME.platinum, 0.86))}
                    fontSize={primary ? 12 : 11}
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                    fontWeight={primary ? 700 : 500} letterSpacing="0.2"
                    style={{ transition: "fill .5s", paintOrder: "stroke",
                             stroke: "rgba(2,5,11,0.92)", strokeWidth: 3.2, strokeLinejoin: "round" }}>
                    {n.proc.label}
                  </text>
                </g>
              );
            })}
          </g>

          {/* ── Department hubs + labels ───────────────────────────────────── */}
          <g>
            {hubs.map((h) => {
              const d = h.dept;
              const accent = DEPT_ACCENT[d.id];
              const Icon = ICONS[d.icon];
              const isHot = active === d.id;
              const lx = CX + R_HUB_LABEL * Math.cos(h.ang);
              const ly = CY + R_HUB_LABEL * Math.sin(h.ang);
              const lw = d.label.length * 7.8 + 22;
              const cnt = `${d.processCount}`;
              const bw = cnt.length > 1 ? 27 : 22;
              return (
                <g key={d.id}
                  style={{ opacity: lvl(deptLevel(d.id), 1, 0.3), transition, cursor: "pointer" }}
                  onMouseEnter={() => onEnter(d.id)} onMouseLeave={onLeave}>
                  <circle cx={h.x} cy={h.y} r={29} fill="none" stroke={rgba(accent, 0.32)} strokeWidth={1.75} />
                  <circle cx={h.x} cy={h.y} r={22}
                    fill={rgba(THEME.obsidian, 0.82)}
                    stroke={accent} strokeWidth={isHot ? 3.25 : 2.5}
                    style={{ filter: isHot ? "url(#cfc-soft)" : "none", transition: "stroke .5s" }} />
                  <g transform={`translate(${h.x - 10}, ${h.y - 11})`} style={{ color: accent }} className="pointer-events-none">
                    {Icon && <Icon className="w-[20px] h-[20px]" />}
                  </g>
                  <g transform={`translate(${h.x + 16}, ${h.y - 31})`}>
                    <rect width={bw} height={15} rx={7.5} fill={accent} />
                    <text x={bw / 2 - 3.5} y={10.8} fill={THEME.obsidian} fontSize={8.5}
                      fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight={800}>{cnt}</text>
                    <text x={bw - 3} y={10.3} fill={rgba(THEME.obsidian, 0.7)} fontSize={5}
                      fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight={800}>
                      {d.countKind === "sig" ? "S" : "P"}
                    </text>
                  </g>
                  <g transform={`translate(${lx}, ${ly})`}>
                    <rect x={-lw / 2} y={-13} width={lw} height={26} rx={7}
                      fill={rgba(THEME.obsidian, 0.7)} stroke={rgba(accent, isHot ? 0.75 : 0.45)} strokeWidth={1.4} />
                    <text x={0} y={5.2} fill="#FFFFFF" fontSize={14}
                      fontFamily="ui-sans-serif, system-ui, sans-serif" textAnchor="middle"
                      fontWeight={800} letterSpacing="0.2"
                      style={{ paintOrder: "stroke", stroke: "rgba(2,5,11,0.8)", strokeWidth: 3.4, strokeLinejoin: "round" }}>{d.label}</text>
                  </g>
                </g>
              );
            })}
          </g>

          {/* ── Df-OS Core ─────────────────────────────────────────────────── */}
          <g style={{ opacity: coreDim ? 0.62 : 1, transition: "opacity .6s" }}>
            {/* Vish AI halo (Slides 4 & 5) */}
            <circle cx={CX} cy={CY} r={108}
              fill={rgba(THEME.mint, 0.04)} stroke={rgba(THEME.mint, 0.5)} strokeWidth={2}
              style={{ filter: "url(#cfc-mint)", opacity: state.showAiHalo ? 1 : 0, transition: "opacity .6s" }}>
              {!reduced && state.showAiHalo && (
                <animate attributeName="r" values="104;114;104" dur="3.6s" repeatCount="indefinite" />
              )}
            </circle>
            <circle cx={CX} cy={CY} r={100} fill="none" stroke={rgba(THEME.platinum, 0.14)} strokeWidth={1.5} strokeDasharray="2 7" />
            <circle cx={CX} cy={CY} r={86} fill="none" stroke={rgba(THEME.brandCyan, 0.6)} strokeWidth={2.25} />
            <circle cx={CX} cy={CY} r={92} fill="none" stroke={rgba(THEME.brandBlue, 0.5)} strokeWidth={1.75}>
              {!reduced && <animate attributeName="r" values="88;96;88" dur="4.4s" repeatCount="indefinite" />}
            </circle>
            <rect x={CX - 62} y={CY - 62} width={124} height={124} rx={32}
              fill="url(#cfc-core)" stroke={rgba(THEME.brandBlue, coreDim ? 0.35 : 0.95)} strokeWidth={3.25}
              style={{ filter: coreDim ? "none" : "url(#cfc-coreglow)", transition: "stroke .6s" }} />
            <rect x={CX - 50} y={CY - 50} width={100} height={100} rx={24}
              fill="none" stroke={rgba(THEME.brandCyan, 0.4)} strokeWidth={1.5} />
            {[-32, 0, 32].map((o) => (
              <g key={`pin-${o}`} stroke={rgba(THEME.brandCyan, 0.75)} strokeWidth={2.5}>
                <line x1={CX + o} y1={CY - 62} x2={CX + o} y2={CY - 70} />
                <line x1={CX + o} y1={CY + 62} x2={CX + o} y2={CY + 70} />
                <line x1={CX - 62} y1={CY + o} x2={CX - 70} y2={CY + o} />
                <line x1={CX + 62} y1={CY + o} x2={CX + 70} y2={CY + o} />
              </g>
            ))}
            <g transform={`translate(${CX - 12}, ${CY - 44})`} style={{ color: THEME.brandCyan }}>
              <Cpu className="w-[24px] h-[24px]" />
            </g>
            <text x={CX} y={CY + 5} fill="#FFFFFF" fontSize={25}
              fontFamily="ui-sans-serif, system-ui, sans-serif" fontWeight={900}
              textAnchor="middle" letterSpacing="0.5">{CORE.title}</text>
            <text x={CX} y={CY + 21} fill={rgba(THEME.brandCyan, 1)} fontSize={8}
              fontFamily="ui-monospace, monospace" fontWeight={800}
              textAnchor="middle" letterSpacing="2.6">CORE</text>
          </g>

          {/* ── Slide 2: off-system fragments ──────────────────────────────── */}
          <g style={{ opacity: state.showFragments ? 1 : 0, transition: "opacity .5s",
                      pointerEvents: "none" }}>
            {EXTERNAL_FRAGMENTS.map((f, i) => {
              const col = i % 2 ? THEME.amber : THEME.coral;
              const ang = Math.atan2(f.y - CY, f.x - CX);
              const ex = CX + (R_OUTER + 8) * Math.cos(ang);
              const ey = CY + (R_OUTER + 8) * Math.sin(ang);
              const w = f.label.length * 6.4 + 18;
              return (
                <g key={f.id}>
                  <line x1={f.x} y1={f.y} x2={ex} y2={ey} stroke={rgba(col, 0.45)}
                    strokeWidth={1.2} strokeDasharray="3 4" />
                  <rect x={f.x - w / 2} y={f.y - 12} width={w} height={24} rx={6}
                    fill={rgba(THEME.obsidian, 0.86)} stroke={rgba(col, 0.8)} strokeWidth={1.3} />
                  <text x={f.x} y={f.y + 4} fill={col} fontSize={11}
                    fontFamily="ui-sans-serif, system-ui, sans-serif" textAnchor="middle" fontWeight={700}
                    style={{ paintOrder: "stroke", stroke: "rgba(2,5,11,0.8)", strokeWidth: 2.6, strokeLinejoin: "round" }}>
                    {f.label}
                  </text>
                </g>
              );
            })}
          </g>

          {/* ── Slide 3: unified operating layer label ─────────────────────── */}
          {state.overlayLabel && (
            <g style={{ opacity: mode === "operating-layer" ? 1 : 0, transition: "opacity .5s",
                        pointerEvents: "none" }}>
              <rect x={CX - 118} y={44} width={236} height={30} rx={15}
                fill={rgba(THEME.obsidian, 0.84)} stroke={rgba(THEME.brandCyan, 0.6)} strokeWidth={1.4} />
              <text x={CX} y={64} fill={THEME.brandCyan} fontSize={13}
                fontFamily="ui-sans-serif, system-ui, sans-serif" textAnchor="middle" fontWeight={800}
                letterSpacing="0.4"
                style={{ paintOrder: "stroke", stroke: "rgba(2,5,11,0.7)", strokeWidth: 3, strokeLinejoin: "round" }}>
                {state.overlayLabel}
              </text>
            </g>
          )}

          {/* ── Slide 4: Vish AI conversation chips ────────────────────────── */}
          <g style={{ opacity: mode === "intelligence" ? 1 : 0, transition: "opacity .5s",
                      pointerEvents: "none" }}>
            {[
              { t: "USER QUERY", s: AI_CHIPS.query, x: 250, y: 56, col: THEME.brandCyan },
              { t: "INSIGHT", s: AI_CHIPS.insight, x: 612, y: 392, col: THEME.mint },
              { t: "ACTION", s: AI_CHIPS.action, x: 250, y: 786, col: THEME.gold },
            ].map((c) => {
              const w = Math.max(c.s.length * 6.2 + 24, c.t.length * 6 + 24);
              return (
                <g key={c.t}>
                  <rect x={c.x - w / 2} y={c.y - 17} width={w} height={34} rx={9}
                    fill={rgba(THEME.obsidian, 0.88)} stroke={rgba(c.col, 0.65)} strokeWidth={1.3} />
                  <text x={c.x - w / 2 + 12} y={c.y - 4} fill={c.col} fontSize={7.5}
                    fontFamily="ui-monospace, monospace" fontWeight={800} letterSpacing="1.4">{c.t}</text>
                  <text x={c.x - w / 2 + 12} y={c.y + 9} fill={THEME.platinum} fontSize={10.5}
                    fontFamily="ui-sans-serif, system-ui, sans-serif" fontWeight={600}
                    style={{ paintOrder: "stroke", stroke: "rgba(2,5,11,0.7)", strokeWidth: 2.4, strokeLinejoin: "round" }}>
                    {c.s}
                  </text>
                </g>
              );
            })}
          </g>

          {/* ── Slide 5: AI factory stack (machine signals ↑ / decisions ↓) ── */}
          <g style={{ opacity: state.showStack ? 1 : 0, transition: "opacity .5s", pointerEvents: "none" }}>
            {/* ingress lines + packets (bottom → core) */}
            {[-90, 0, 90].map((o, i) => (
              <g key={`ingress-${i}`}>
                <line x1={CX + o} y1={788} x2={CX + o * 0.25} y2={CY + 64}
                  stroke={rgba(THEME.brandCyan, 0.4)} strokeWidth={1.3} strokeDasharray="4 5" />
                {!reduced && state.showStack && (
                  <circle r={2.6} fill={THEME.brandCyan}>
                    <animateMotion dur={`${2 + i * 0.3}s`} repeatCount="indefinite"
                      path={`M ${CX + o} 788 L ${CX + o * 0.25} ${CY + 64}`} />
                  </circle>
                )}
              </g>
            ))}
            {/* decision lines + packets (core → top) */}
            {[-90, 0, 90].map((o, i) => (
              <g key={`decision-${i}`}>
                <line x1={CX + o * 0.25} y1={CY - 64} x2={CX + o} y2={64}
                  stroke={rgba(THEME.mint, 0.4)} strokeWidth={1.3} strokeDasharray="4 5" />
                {!reduced && state.showStack && (
                  <circle r={2.6} fill={THEME.mint}>
                    <animateMotion dur={`${2 + i * 0.3}s`} repeatCount="indefinite"
                      path={`M ${CX + o * 0.25} ${CY - 64} L ${CX + o} 64`} />
                  </circle>
                )}
              </g>
            ))}
            {/* signal layer bar (bottom) */}
            <rect x={CX - 214} y={788} width={428} height={32} rx={10}
              fill={rgba(THEME.obsidian, 0.9)} stroke={rgba(THEME.brandCyan, 0.55)} strokeWidth={1.4} />
            <text x={CX} y={808} fill={THEME.platinum} fontSize={11.5}
              fontFamily="ui-sans-serif, system-ui, sans-serif" textAnchor="middle" fontWeight={700}
              style={{ paintOrder: "stroke", stroke: "rgba(2,5,11,0.7)", strokeWidth: 2.6, strokeLinejoin: "round" }}>
              <tspan fill={THEME.brandCyan} fontSize={8} fontFamily="ui-monospace, monospace" fontWeight={800}>X-KONNECT · </tspan>
              {STACK_SIGNAL_LAYER.join("  ·  ")}
            </text>
            {/* intelligence layer bar (top) */}
            <rect x={CX - 214} y={20} width={428} height={32} rx={10}
              fill={rgba(THEME.obsidian, 0.9)} stroke={rgba(THEME.mint, 0.55)} strokeWidth={1.4} />
            <text x={CX} y={40} fill={THEME.platinum} fontSize={11.5}
              fontFamily="ui-sans-serif, system-ui, sans-serif" textAnchor="middle" fontWeight={700}
              style={{ paintOrder: "stroke", stroke: "rgba(2,5,11,0.7)", strokeWidth: 2.6, strokeLinejoin: "round" }}>
              <tspan fill={THEME.mint} fontSize={8} fontFamily="ui-monospace, monospace" fontWeight={800}>VISH AI · </tspan>
              {STACK_INTEL_LAYER.join("  ·  ")}
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
