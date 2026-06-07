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
  // Mobile departments spread on a 320x110 canvas with premium accent colors
  const mobileDepts = [
    { id: "production", label: "Prod", x: 160, y: 16, accentColor: "#F6C96D" },
    { id: "quality", label: "Qual", x: 235, y: 32, accentColor: "#7CFFCB" },
    { id: "maintenance", label: "Maint", x: 270, y: 80, accentColor: "#FFB84D" },
    { id: "safety", label: "Safe", x: 50, y: 80, accentColor: "#FF6B6B" },
    { id: "utility", label: "Util", x: 85, y: 32, accentColor: "#7CFFCB" }
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
            
            let strokeColor = "rgba(248, 250, 252, 0.18)";
            if (isDim) {
              strokeColor = "rgba(248, 250, 252, 0.05)";
            } else if (isBroken) {
              strokeColor = "#FF6B6B";
            } else if (isIntelligence) {
              strokeColor = "rgba(124, 255, 203, 0.6)";
            } else if (isOperatingLayer) {
              strokeColor = dept.accentColor;
            } else if (activeStage === 0) {
              strokeColor = "rgba(248, 250, 252, 0.35)"; // brighter soft white in default mode
            }

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
            <line x1="160" y1="110" x2="160" y2="65" stroke="rgba(255, 184, 77, 0.45)" strokeWidth="1" strokeDasharray="2 3" />
            <circle cx="160" cy="90" r="1.5" fill="#F6C96D">
              <animate attributeName="cy" from="110" to="65" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </g>
        )}

        {/* Department nodes */}
        {mobileDepts.map((dept) => {
          const status = getDeptStatus(dept.id);
          const isBroken = isChaos && status === "chaos";
          const isDim = status === "dim";
          
          let borderColor = "rgba(248, 250, 252, 0.25)";
          if (isBroken) {
            borderColor = "#FF6B6B";
          } else if (isDim) {
            borderColor = "rgba(248, 250, 252, 0.08)";
          } else {
            borderColor = dept.accentColor;
          }

          return (
            <g key={`dept-mobile-${dept.id}`} className="transition-all duration-300">
              {/* Backplate */}
              <circle
                cx={dept.x}
                cy={dept.y}
                r="13"
                fill={isBroken ? "rgba(102, 30, 40, 0.9)" : "rgba(7, 11, 18, 0.86)"}
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
                fill={isBroken ? "#FF6B6B" : (isDim ? "#A8B3C7" : "#F8FAFC")}
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
              stroke="rgba(124, 255, 203, 0.3)"
              strokeWidth="1"
              className="animate-ping"
              style={{ animationDuration: "3s" }}
            />
          )}
          
          <circle
            cx={centerNode.x}
            cy={centerNode.y}
            r="17"
            fill="#070B12"
            stroke={isChaos ? "rgba(30, 107, 255, 0.2)" : "rgba(30, 107, 255, 0.85)"}
            strokeWidth="1.5"
          />
          
          <g transform={`translate(${centerNode.x - 6}, ${centerNode.y - 6})`} className="pointer-events-none">
            <Cpu className="w-3.5 h-3.5 text-white animate-pulse" />
          </g>

          <text
            x={centerNode.x}
            y={centerNode.y + 24}
            fill="#F8FAFC"
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
            <rect width="50" height="12" rx="3" fill="rgba(7, 11, 18, 0.9)" stroke="#FF6B6B" strokeWidth="0.5" />
            <text x="25" y="8" fill="#FF6B6B" fontSize="5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Excel log</text>
          </g>
        )}

        {/* Slide 4 Intelligence suggestion tag */}
        {isIntelligence && (
          <g transform="translate(18, 75)">
            <rect width="65" height="14" rx="3" fill="rgba(7, 11, 18, 0.9)" stroke="#7CFFCB" strokeWidth="0.5" />
            <text x="32.5" y="9.5" fill="#7CFFCB" fontSize="5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">RCA: Valve Dev</text>
          </g>
        )}
      </svg>
    </div>
  );
}
