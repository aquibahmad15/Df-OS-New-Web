"use client";

// ─────────────────────────────────────────────────────────────────────────────
// Df-OS Factory Constellation — Mobile (simplified)
// Core + 5 major department hubs + a couple of process chips each. Simplified
// cross-links, reduced motion, no horizontal scroll. State-aware across slides.
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import { Activity, ShieldCheck, Wrench, Shield, Zap, Cpu } from "lucide-react";
import { THEME, rgba } from "@/lib/hero/constellation-theme";

interface Props { activeStage: number; }

const HUBS = [
  { id: "production",  label: "Prod",  icon: Activity,    accent: "#2FE1FF", x: 160, y: 18, chips: ["OEE", "Logbook"] },
  { id: "quality",     label: "Qual",  icon: ShieldCheck, accent: "#29F0CE", x: 256, y: 56, chips: ["SPC", "NCR"] },
  { id: "maintenance", label: "Maint", icon: Wrench,      accent: "#4FB0FF", x: 224, y: 116, chips: ["PM", "Breakdown"] },
  { id: "safety",      label: "Safe",  icon: Shield,      accent: "#9D86FF", x: 96,  y: 116, chips: ["Permit", "Hazard"] },
  { id: "utility",     label: "Util",  icon: Zap,         accent: "#6E93FF", x: 64,  y: 56, chips: ["Energy", "Water"] },
];

const C = { x: 160, y: 72 };

export default function ConnectedFactoryConstellationMobile({ activeStage }: Props) {
  const chaos = activeStage === 1;
  const intel = activeStage === 3;
  const stack = activeStage === 4;
  const focus = intel ? ["production", "maintenance", "quality"] : null;
  const broken = chaos ? ["production", "maintenance", "utility"] : [];

  const level = (id: string) => (focus ? (focus.includes(id) ? 1 : 0.3) : chaos ? 0.85 : 1);

  return (
    <div className="w-full h-full flex items-center justify-center p-1 select-none">
      <svg viewBox="0 0 320 144" className="w-full h-full overflow-visible">
        {/* spokes */}
        {HUBS.map((h) => {
          const isBroken = broken.includes(h.id);
          return (
            <line key={`s-${h.id}`} x1={C.x} y1={C.y} x2={h.x} y2={h.y}
              stroke={isBroken ? rgba(THEME.coral, 0.8) : rgba(h.accent, 0.6)}
              strokeWidth={1.2} strokeDasharray={isBroken ? "3 3" : "0"}
              style={{ opacity: level(h.id), transition: "opacity .5s, stroke .5s" }} />
          );
        })}

        {/* hubs + chips */}
        {HUBS.map((h) => {
          const Icon = h.icon;
          const isBroken = broken.includes(h.id);
          return (
            <g key={h.id} style={{ opacity: level(h.id), transition: "opacity .5s" }}>
              <circle cx={h.x} cy={h.y} r={13}
                fill={rgba(THEME.obsidian, 0.85)}
                stroke={isBroken ? THEME.coral : h.accent} strokeWidth={1.6} />
              <g transform={`translate(${h.x - 7}, ${h.y - 7})`} style={{ color: h.accent }} className="pointer-events-none">
                <Icon className="w-3.5 h-3.5" />
              </g>
              <text x={h.x} y={h.y + 22} fill={isBroken ? THEME.coral : THEME.platinum}
                fontSize={7.5} fontFamily="ui-sans-serif, system-ui, sans-serif"
                textAnchor="middle" fontWeight={700}
                style={{ paintOrder: "stroke", stroke: "rgba(2,5,11,0.8)", strokeWidth: 2.4, strokeLinejoin: "round" } as React.CSSProperties}>
                {h.label}
              </text>
            </g>
          );
        })}

        {/* core */}
        <g>
          {(intel || stack) && (
            <circle cx={C.x} cy={C.y} r={24} fill="none" stroke={rgba(THEME.mint, 0.5)} strokeWidth={1.4}>
              <animate attributeName="r" values="22;26;22" dur="3s" repeatCount="indefinite" />
            </circle>
          )}
          <rect x={C.x - 17} y={C.y - 17} width={34} height={34} rx={9}
            fill={rgba(THEME.obsidian, 0.92)}
            stroke={rgba(THEME.brandBlue, chaos ? 0.4 : 0.95)} strokeWidth={2} />
          <g transform={`translate(${C.x - 7}, ${C.y - 10})`} style={{ color: THEME.brandCyan }}>
            <Cpu className="w-3.5 h-3.5" />
          </g>
          <text x={C.x} y={C.y + 11} fill="#FFFFFF" fontSize={7.5}
            fontFamily="ui-sans-serif, system-ui, sans-serif" textAnchor="middle" fontWeight={900}>
            Df-OS
          </text>
        </g>

        {/* state tags */}
        {chaos && (
          <g>
            <rect x={6} y={6} width={70} height={15} rx={4} fill={rgba(THEME.obsidian, 0.9)} stroke={THEME.coral} strokeWidth={0.8} />
            <text x={41} y={16} fill={THEME.coral} fontSize={7.5} fontFamily="ui-sans-serif, system-ui, sans-serif" textAnchor="middle" fontWeight={700}>Excel · Paper</text>
          </g>
        )}
        {intel && (
          <g>
            <rect x={206} y={123} width={108} height={16} rx={4} fill={rgba(THEME.obsidian, 0.9)} stroke={THEME.mint} strokeWidth={0.8} />
            <text x={260} y={134} fill={THEME.mint} fontSize={7.5} fontFamily="ui-sans-serif, system-ui, sans-serif" textAnchor="middle" fontWeight={700}>Vish AI · RCA triggered</text>
          </g>
        )}
        {stack && (
          <g>
            <line x1={C.x} y1={140} x2={C.x} y2={C.y + 18} stroke={rgba(THEME.brandCyan, 0.5)} strokeWidth={1.2} strokeDasharray="3 3" />
            <rect x={C.x - 60} y={128} width={120} height={14} rx={4} fill={rgba(THEME.obsidian, 0.9)} stroke={rgba(THEME.brandCyan, 0.5)} strokeWidth={0.8} />
            <text x={C.x} y={138} fill={THEME.platinum} fontSize={7} fontFamily="ui-sans-serif, system-ui, sans-serif" textAnchor="middle" fontWeight={700}>X-Konnect · Machines · PLCs</text>
          </g>
        )}
      </svg>
    </div>
  );
}
