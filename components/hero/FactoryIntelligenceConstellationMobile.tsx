"use client";

import React from "react";
import {
  Activity,
  ShieldCheck,
  Wrench,
  Shield,
  Zap,
  Cpu
} from "lucide-react";

interface FactoryIntelligenceConstellationMobileProps {
  activeStage: number;
}

const iconMapMobile: Record<string, React.ComponentType<{ className?: string }>> = {
  production: Activity,
  quality: ShieldCheck,
  maintenance: Wrench,
  safety: Shield,
  utility: Zap
};

export default function FactoryIntelligenceConstellationMobile({
  activeStage
}: FactoryIntelligenceConstellationMobileProps) {
  // Mobile departments spread on a 320x110 canvas
  const mobileDepts = [
    { id: "production", label: "Prod", x: 160, y: 16, color: "cyan" },
    { id: "quality", label: "Qual", x: 235, y: 32, color: "indigo" },
    { id: "maintenance", label: "Maint", x: 270, y: 80, color: "blue" },
    { id: "safety", label: "Safe", x: 50, y: 80, color: "green" },
    { id: "utility", label: "Util", x: 85, y: 32, color: "amber" }
  ];

  const centerNode = { x: 160, y: 65 };

  // Set visual rules based on slide states
  const isChaos = activeStage === 1;
  const isOperatingLayer = activeStage === 2;
  const isIntelligence = activeStage === 3;
  const isStack = activeStage === 4;

  const getDeptStatus = (id: string) => {
    if (isChaos) {
      return ["production", "maintenance", "utility"].includes(id) ? "chaos" : "dim";
    }
    if (isIntelligence) {
      return ["production", "quality", "maintenance"].includes(id) ? "active" : "dim";
    }
    return "active";
  };

  const renderIcon = (id: string) => {
    const IconComponent = iconMapMobile[id];
    if (!IconComponent) return null;
    return <IconComponent className="w-3.5 h-3.5 text-slate-100" />;
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-1 select-none">
      <svg
        viewBox="0 0 320 110"
        className="w-full h-full overflow-visible relative"
      >
        {/* Connection lines from Df-OS core to departments */}
        <g>
          {mobileDepts.map((dept) => {
            const status = getDeptStatus(dept.id);
            const isBroken = isChaos && status === "chaos";
            const isDim = status === "dim";
            
            let strokeColor = "rgba(30, 107, 255, 0.3)";
            if (isBroken) strokeColor = "#FF5A6B";
            else if (isIntelligence && !isDim) strokeColor = "rgba(51, 230, 161, 0.6)";
            else if (isOperatingLayer) strokeColor = "rgba(25, 212, 255, 0.5)";

            return (
              <line
                key={`line-mobile-${dept.id}`}
                x1={centerNode.x}
                y1={centerNode.y}
                x2={dept.x}
                y2={dept.y}
                stroke={strokeColor}
                strokeWidth={isDim ? "0.6" : "1"}
                strokeDasharray={isBroken ? "2 2" : "0"}
                className="transition-all duration-300"
              />
            );
          })}
        </g>

        {/* Slide 5 Stack signal ingress line */}
        {isStack && (
          <g>
            <line x1="160" y1="110" x2="160" y2="65" stroke="rgba(25, 212, 255, 0.5)" strokeWidth="1" strokeDasharray="2 3" />
            <circle cx="160" cy="90" r="1.5" fill="#19D4FF">
              <animate attributeName="cy" from="110" to="65" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </g>
        )}

        {/* Department nodes */}
        {mobileDepts.map((dept) => {
          const status = getDeptStatus(dept.id);
          const isBroken = isChaos && status === "chaos";
          const isDim = status === "dim";
          
          let borderColor = "rgba(81, 163, 255, 0.25)";
          if (isBroken) borderColor = "#FF5A6B";
          else if (isIntelligence && !isDim) borderColor = "rgba(51, 230, 161, 0.7)";
          else if (isOperatingLayer) borderColor = "rgba(25, 212, 255, 0.6)";

          return (
            <g key={`dept-mobile-${dept.id}`} className="transition-all duration-300">
              {/* Backplate */}
              <circle
                cx={dept.x}
                cy={dept.y}
                r="13"
                fill={isBroken ? "rgba(102, 30, 40, 0.9)" : "rgba(4, 21, 46, 0.85)"}
                stroke={borderColor}
                strokeWidth={isDim ? "0.5" : "1"}
                opacity={isDim ? 0.25 : 1}
              />
              
              {/* Icon */}
              <g transform={`translate(${dept.x - 7}, ${dept.y - 7})`} opacity={isDim ? 0.3 : 0.9} className="pointer-events-none">
                {renderIcon(dept.id)}
              </g>

              {/* Text label underneath */}
              <text
                x={dept.x}
                y={dept.y + 20}
                fill={isBroken ? "#FF5A6B" : (isDim ? "#9FB4D3" : "#F4F8FF")}
                fontSize="6"
                fontFamily="monospace"
                textAnchor="middle"
                fontWeight="bold"
                opacity={isDim ? 0.3 : 0.9}
              >
                {dept.label}
              </text>
            </g>
          );
        })}

        {/* Central Df-OS Core */}
        <g>
          {/* Pulsing ring for intelligence */}
          {isIntelligence && (
            <circle
              cx={centerNode.x}
              cy={centerNode.y}
              r="22"
              fill="none"
              stroke="rgba(51, 230, 161, 0.3)"
              strokeWidth="1"
              className="animate-ping"
              style={{ animationDuration: "3s" }}
            />
          )}
          
          <circle
            cx={centerNode.x}
            cy={centerNode.y}
            r="17"
            fill="rgba(4, 21, 46, 0.95)"
            stroke={isChaos ? "rgba(25, 212, 255, 0.2)" : "rgba(25, 212, 255, 0.75)"}
            strokeWidth="1.5"
          />
          
          <g transform={`translate(${centerNode.x - 6}, ${centerNode.y - 6})`} className="pointer-events-none text-brand-cyan">
            <Cpu className="w-3.5 h-3.5 text-brand-cyan" />
          </g>

          <text
            x={centerNode.x}
            y={centerNode.y + 24}
            fill="#19D4FF"
            fontSize="5.5"
            fontFamily="monospace"
            fontWeight="black"
            textAnchor="middle"
            letterSpacing="0.3"
          >
            Df-OS
          </text>
        </g>

        {/* Slide 2 Chaos Alert Tag */}
        {isChaos && (
          <g transform="translate(10, 15)">
            <rect width="50" height="12" rx="3" fill="rgba(102, 30, 40, 0.85)" stroke="#FF5A6B" strokeWidth="0.5" />
            <text x="25" y="8" fill="#FF5A6B" fontSize="5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Excel log</text>
          </g>
        )}

        {/* Slide 4 Intelligence suggestion tag */}
        {isIntelligence && (
          <g transform="translate(18, 75)">
            <rect width="65" height="14" rx="3" fill="rgba(4, 21, 46, 0.9)" stroke="#33E6A1" strokeWidth="0.5" />
            <text x="32.5" y="9.5" fill="#33E6A1" fontSize="5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">RCA: Valve Dev</text>
          </g>
        )}
      </svg>
    </div>
  );
}
