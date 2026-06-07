"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Sliders,
  Table,
  MessageSquare,
  Cpu,
  Phone,
  Clock,
  Box,
  FileText,
  Calendar,
  Database,
  Brain,
  Shield,
  Activity,
  Users,
  Layers,
  Bell
} from "lucide-react";

// Types
interface Node {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  x: number; // percentage
  y: number; // percentage
  info: string;
  impact: string;
}

interface Connection {
  from: string;
  to: string;
  isChaotic?: boolean;
}

export default function ChaosToStructureInteractive() {
  const [activeTab, setActiveTab] = useState<"before" | "after">("before");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [hoveredSource, setHoveredSource] = useState<string | null>(null);
  const [isHubHovered, setIsHubHovered] = useState(false);

  // Before Df-OS: Chaos Nodes (12 nodes showing manual factory friction)
  const chaosNodes: Node[] = [
    {
      id: "manual",
      name: "Manual Action",
      icon: Sliders,
      x: 15,
      y: 25,
      info: "Operator records checklist on physical whiteboards or clipboard sheets.",
      impact: "High error rates, zero real-time visibility."
    },
    {
      id: "excel",
      name: "Excel Sheet",
      icon: Table,
      x: 50,
      y: 15,
      info: "Excel logs updated manually at the end of the shift.",
      impact: "Information is stale immediately; no proactive insights."
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      icon: MessageSquare,
      x: 85,
      y: 25,
      info: "Critical breakdown alerts and shift coordination shared in chat groups.",
      impact: "Fragmented, unstructured text that cannot be audited or trended."
    },
    {
      id: "machine",
      name: "Machine Signal",
      icon: Cpu,
      x: 35,
      y: 40,
      info: "PLC parameters and motor frequency signals are isolated.",
      impact: "No correlation with operator actions or maintenance logs."
    },
    {
      id: "phone",
      name: "Phone Call",
      icon: Phone,
      x: 55,
      y: 52,
      info: "Operators call technicians verbally to report machine downtime.",
      impact: "No record of response time or root cause categorization."
    },
    {
      id: "realtime",
      name: "Real Time",
      icon: Clock,
      x: 15,
      y: 52,
      info: "Unsynchronized SCADA dashboards require physical oversight.",
      impact: "Requires manual inspection to spot temperature or pressure spikes."
    },
    {
      id: "material",
      name: "Material Issue",
      icon: Box,
      x: 85,
      y: 52,
      info: "Feeder jams are verbally reported to quality inspectors.",
      impact: "Results in scrap and yield drop before the issue is logged."
    },
    {
      id: "paper",
      name: "Paper Files",
      icon: FileText,
      x: 18,
      y: 78,
      info: "Safety permit checklists signed physically and stored in folders.",
      impact: "Slow audits and lack of safety warning compliance checks."
    },
    {
      id: "handover",
      name: "Verbal Handover",
      icon: Users,
      x: 38,
      y: 82,
      info: "Operators hand over shift status verbally or write in logbooks.",
      impact: "Incoming shifts lack trace of recent adjustments or micro-stops."
    },
    {
      id: "scheduled",
      name: "Scheduled PM",
      icon: Calendar,
      x: 82,
      y: 78,
      info: "Preventative Maintenance plans printed on paper work orders.",
      impact: "Delayed feedback on checklist compliance and wear indicators."
    },
    {
      id: "spares",
      name: "Spare Ledger",
      icon: Database,
      x: 60,
      y: 82,
      info: "Technicians search for maintenance spares and log in binders.",
      impact: "Inaccurate stock counts lead to prolonged waiting for parts."
    },
    {
      id: "defects",
      name: "Defect Binders",
      icon: Shield,
      x: 68,
      y: 38,
      info: "Quality inspectors log defect counts in physical red-bin sheets.",
      impact: "Slow containment response times and high audit preparation effort."
    }
  ];

  // Chaotic connections mapping
  const chaosConnections: Connection[] = [
    { from: "manual", to: "machine" },
    { from: "manual", to: "excel" },
    { from: "excel", to: "machine" },
    { from: "excel", to: "whatsapp" },
    { from: "excel", to: "spares" },
    { from: "machine", to: "phone" },
    { from: "machine", to: "realtime" },
    { from: "machine", to: "defects" },
    { from: "phone", to: "whatsapp" },
    { from: "phone", to: "material" },
    { from: "phone", to: "handover" },
    { from: "realtime", to: "paper" },
    { from: "paper", to: "handover" },
    { from: "paper", to: "defects" },
    { from: "handover", to: "spares" },
    { from: "scheduled", to: "spares" },
    { from: "scheduled", to: "material" },
    { from: "whatsapp", to: "material" },
    { from: "whatsapp", to: "defects" }
  ];

  // Structured Df-OS sources/capabilities
  const structuredSources = [
    { id: "logbooks", name: "Digital Logbooks", icon: Sliders, color: "text-blue-400" },
    { id: "workflow", name: "Automated Process Workflow", icon: Cpu, color: "text-purple-400" },
    { id: "dashboards", name: "Real time Dashboards", icon: Table, color: "text-cyan-400" },
    { id: "reports", name: "Real time Report", icon: FileText, color: "text-indigo-400" },
    { id: "alerts", name: "Alert System", icon: Bell, color: "text-red-400" },
    { id: "fourms", name: "Connected 4Ms", icon: Layers, color: "text-emerald-400" },
    { id: "audit", name: "Audit Ready", icon: Shield, color: "text-amber-400" }
  ];

  const getCoordinates = (nodeId: string) => {
    const node = chaosNodes.find((n) => n.id === nodeId);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  // SVG parameters for Unstructured Complexity Graph

  // Static definition of unstructured, cluster-based data points (organic constellation layout)
  const unstructuredNodes = [
    // --- CLUSTER 1 (Top-Left: Operational Logs / Checksheets) ---
    { id: "n1", x: 100, y: 110, size: 4, type: "primary", color: "#1586FF" },
    { id: "n2", x: 120, y: 90, size: 2.5, type: "primary", color: "#06b6d4" },
    { id: "n3", x: 80, y: 130, size: 3, type: "primary", color: "#10b981" },
    { id: "n4", x: 135, y: 125, size: 2, type: "secondary", color: "#a855f7" },
    { id: "n5", x: 95, y: 85, size: 1.5, type: "secondary", color: "#1586FF" },
    { id: "n6", x: 110, y: 145, size: 1.2, type: "tertiary", color: "#ffffff" },
    { id: "n7", x: 70, y: 100, size: 1, type: "tertiary", color: "#06b6d4" },

    // --- CLUSTER 2 (Top-Right: Machine Signals / Streams) ---
    { id: "n8", x: 260, y: 90, size: 4.5, type: "primary", color: "#06b6d4" },
    { id: "n9", x: 230, y: 115, size: 3, type: "primary", color: "#10b981" },
    { id: "n10", x: 280, y: 120, size: 2.5, type: "primary", color: "#1586FF" },
    { id: "n11", x: 250, y: 70, size: 2, type: "secondary", color: "#f59e0b" },
    { id: "n12", x: 220, y: 85, size: 1.8, type: "secondary", color: "#06b6d4" },
    { id: "n13", x: 290, y: 95, size: 1.2, type: "tertiary", color: "#ffffff" },
    { id: "n14", x: 270, y: 140, size: 1, type: "tertiary", color: "#a855f7" },

    // --- CLUSTER 3 (Bottom-Left: Quality Methods / Audits) ---
    { id: "n15", x: 90, y: 260, size: 3.5, type: "primary", color: "#10b981" },
    { id: "n16", x: 120, y: 240, size: 2.8, type: "primary", color: "#1586FF" },
    { id: "n17", x: 75, y: 225, size: 2.5, type: "primary", color: "#a855f7" },
    { id: "n18", x: 105, y: 285, size: 2, type: "secondary", color: "#06b6d4" },
    { id: "n19", x: 140, y: 265, size: 1.5, type: "secondary", color: "#10b981" },
    { id: "n20", x: 60, y: 250, size: 1.2, type: "tertiary", color: "#ffffff" },
    { id: "n21", x: 125, y: 295, size: 1, type: "tertiary", color: "#1586FF" },

    // --- CLUSTER 4 (Bottom-Right: Audio Events / Alerts) ---
    { id: "n22", x: 270, y: 250, size: 4, type: "primary", color: "#a855f7" },
    { id: "n23", x: 250, y: 275, size: 3, type: "primary", color: "#1586FF" },
    { id: "n24", x: 290, y: 230, size: 2.5, type: "primary", color: "#06b6d4" },
    { id: "n25", x: 230, y: 240, size: 2, type: "secondary", color: "#10b981" },
    { id: "n26", x: 280, y: 285, size: 1.8, type: "secondary", color: "#ef4444" },
    { id: "n27", x: 310, y: 260, size: 1.2, type: "tertiary", color: "#ffffff" },
    { id: "n28", x: 250, y: 215, size: 1, type: "tertiary", color: "#06b6d4" },

    // --- BRIDGE / CENTRAL PERIPHERY NODES (Linking the clusters) ---
    { id: "n29", x: 180, y: 80, size: 3.5, type: "primary", color: "#1586FF" },
    { id: "n30", x: 180, y: 280, size: 3, type: "primary", color: "#10b981" },
    { id: "n31", x: 80, y: 180, size: 3, type: "primary", color: "#06b6d4" },
    { id: "n32", x: 295, y: 180, size: 3.5, type: "primary", color: "#a855f7" },
    
    { id: "n33", x: 150, y: 105, size: 2.2, type: "secondary", color: "#06b6d4" },
    { id: "n34", x: 210, y: 100, size: 2, type: "secondary", color: "#1586FF" },
    { id: "n35", x: 135, y: 190, size: 2.5, type: "secondary", color: "#10b981" },
    { id: "n36", x: 225, y: 190, size: 2.2, type: "secondary", color: "#a855f7" },
    { id: "n37", x: 155, y: 260, size: 2, type: "secondary", color: "#1586FF" },
    { id: "n38", x: 205, y: 265, size: 1.8, type: "secondary", color: "#06b6d4" },

    // --- DEEP CORE NODES (Inside the monogram bounds, will scale out from behind Df-OS logo on hover) ---
    { id: "n39", x: 160, y: 135, size: 1.5, type: "secondary", color: "#ffffff" },
    { id: "n40", x: 200, y: 135, size: 1.5, type: "secondary", color: "#ffffff" },
    { id: "n41", x: 160, y: 225, size: 1.5, type: "secondary", color: "#ffffff" },
    { id: "n42", x: 200, y: 225, size: 1.5, type: "secondary", color: "#ffffff" },
    
    // Far outer micro-particles
    { id: "n43", x: 50, y: 60, size: 1, type: "tertiary", color: "#06b6d4" },
    { id: "n44", x: 320, y: 50, size: 1, type: "tertiary", color: "#10b981" },
    { id: "n45", x: 40, y: 310, size: 1, type: "tertiary", color: "#a855f7" },
    { id: "n46", x: 330, y: 320, size: 1, type: "tertiary", color: "#1586FF" }
  ];

  const unstructuredConnections = [
    // Cluster 1 Intra-connections
    { from: "n1", to: "n2", type: "primary" },
    { from: "n2", to: "n3", type: "primary" },
    { from: "n3", to: "n1", type: "primary" },
    { from: "n1", to: "n4", type: "primary" },
    { from: "n2", to: "n5", type: "secondary" },
    { from: "n3", to: "n6", type: "secondary" },
    { from: "n4", to: "n6", type: "tertiary" },
    { from: "n5", to: "n7", type: "tertiary" },

    // Cluster 2 Intra-connections
    { from: "n8", to: "n9", type: "primary" },
    { from: "n9", to: "n10", type: "primary" },
    { from: "n10", to: "n8", type: "primary" },
    { from: "n8", to: "n11", type: "primary" },
    { from: "n9", to: "n12", type: "secondary" },
    { from: "n10", to: "n13", type: "secondary" },
    { from: "n11", to: "n13", type: "tertiary" },
    { from: "n12", to: "n14", type: "tertiary" },

    // Cluster 3 Intra-connections
    { from: "n15", to: "n16", type: "primary" },
    { from: "n16", to: "n17", type: "primary" },
    { from: "n17", to: "n15", type: "primary" },
    { from: "n15", to: "n18", type: "primary" },
    { from: "n16", to: "n19", type: "secondary" },
    { from: "n17", to: "n20", type: "secondary" },
    { from: "n18", to: "n20", type: "tertiary" },
    { from: "n19", to: "n21", type: "tertiary" },

    // Cluster 4 Intra-connections
    { from: "n22", to: "n23", type: "primary" },
    { from: "n23", to: "n24", type: "primary" },
    { from: "n24", to: "n22", type: "primary" },
    { from: "n22", to: "n25", type: "primary" },
    { from: "n23", to: "n26", type: "secondary" },
    { from: "n24", to: "n27", type: "secondary" },
    { from: "n25", to: "n27", type: "tertiary" },
    { from: "n26", to: "n28", type: "tertiary" },

    // Bridge / Inter-cluster Connections
    { from: "n1", to: "n29", type: "primary" },
    { from: "n29", to: "n8", type: "primary" },
    { from: "n8", to: "n32", type: "primary" },
    { from: "n32", to: "n22", type: "primary" },
    { from: "n22", to: "n30", type: "primary" },
    { from: "n30", to: "n15", type: "primary" },
    { from: "n15", to: "n31", type: "primary" },
    { from: "n31", to: "n1", type: "primary" },

    // Inner-Bridge Connections
    { from: "n29", to: "n33", type: "secondary" },
    { from: "n33", to: "n34", type: "secondary" },
    { from: "n34", to: "n32", type: "secondary" },
    { from: "n32", to: "n36", type: "secondary" },
    { from: "n36", to: "n38", type: "secondary" },
    { from: "n38", to: "n30", type: "secondary" },
    { from: "n30", to: "n37", type: "secondary" },
    { from: "n37", to: "n35", type: "secondary" },
    { from: "n35", to: "n31", type: "secondary" },
    { from: "n31", to: "n33", type: "secondary" },

    // Central Core Connections (Converging to monogram area)
    { from: "n33", to: "n39", type: "secondary" },
    { from: "n34", to: "n40", type: "secondary" },
    { from: "n35", to: "n41", type: "secondary" },
    { from: "n36", to: "n42", type: "secondary" },
    { from: "n39", to: "n40", type: "secondary" },
    { from: "n40", to: "n42", type: "secondary" },
    { from: "n42", to: "n41", type: "secondary" },
    { from: "n41", to: "n39", type: "secondary" },

    // Far-reaching dust links
    { from: "n5", to: "n43", type: "tertiary" },
    { from: "n11", to: "n44", type: "tertiary" },
    { from: "n17", to: "n45", type: "tertiary" },
    { from: "n23", to: "n46", type: "tertiary" }
  ];

  // Map unstructured nodes and connections to Bezier-curved SVG path descriptions
  const graphConnections = unstructuredConnections.map((conn, idx) => {
    const fromNode = unstructuredNodes.find((n) => n.id === conn.from);
    const toNode = unstructuredNodes.find((n) => n.id === conn.to);
    if (!fromNode || !toNode) return null;

    const x1 = fromNode.x;
    const y1 = fromNode.y;
    const x2 = toNode.x;
    const y2 = toNode.y;

    // Pre-calculated deterministic curvature based on alphanumeric IDs to avoid hydration mismatches
    const curveSign = (conn.from.charCodeAt(1) + conn.to.charCodeAt(1)) % 2 === 0 ? 1 : -1;
    const curveAmount = 6 * curveSign;

    const dx = x2 - x1;
    const dy = y2 - y1;
    const px = -dy;
    const py = dx;
    const len = Math.sqrt(px * px + py * py) || 1;

    const ctrlX = (x1 + x2) / 2 + (px / len) * curveAmount;
    const ctrlY = (y1 + y2) / 2 + (py / len) * curveAmount;

    return {
      id: `c-${conn.from}-${conn.to}-${idx}`,
      d: `M ${x1} ${y1} Q ${ctrlX} ${ctrlY} ${x2} ${y2}`,
      type: conn.type,
      fromX: x1,
      fromY: y1,
      toX: x2,
      toY: y2
    };
  }).filter(Boolean) as { id: string; d: string; type: string; fromX: number; fromY: number; toX: number; toY: number }[];

  // Select a performant subset of connections for animated data flows (data packets)
  const animatedConnections = graphConnections.filter((_, idx) => idx % 3 === 0);

  return (
    <div className="w-full bg-[#0b0b10] border border-brand-border/60 rounded-2xl overflow-hidden shadow-2xl relative">
      <style>{`
        @keyframes flowChaos {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }
        .flow-line-chaos {
          animation: flowChaos 12s linear infinite;
        }
        @keyframes flowStructure {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        .flow-line-structure {
          animation: flowStructure 5s linear infinite;
        }
        @keyframes rotateHub {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .rotate-hub {
          animation: rotateHub 35s linear infinite;
        }
        @keyframes rotateHubRev {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        .rotate-hub-reverse {
          animation: rotateHubRev 28s linear infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 15px rgba(6, 182, 212, 0.45)); }
          50% { filter: drop-shadow(0 0 28px rgba(6, 182, 212, 0.8)); }
        }
        .pulse-glow-hub {
          animation: pulseGlow 4s ease-in-out infinite;
        }
        @keyframes pulseGlowGreen {
          0%, 100% { filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.4)); }
          50% { filter: drop-shadow(0 0 25px rgba(16, 185, 129, 0.7)); }
        }
        .pulse-glow-green {
          animation: pulseGlowGreen 4s ease-in-out infinite;
        }
      `}</style>

      {/* Header bar with Mode Toggle */}
      <div className="px-6 py-4 bg-[#111116] border-b border-brand-border/60 flex flex-col lg:flex-row items-center justify-between gap-4 z-10 relative">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_8px_#06b6d4]" />
          <h3 className="text-[13.5px] md:text-[14.5px] font-black font-mono tracking-wider uppercase text-slate-200">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">Factory Operation Visualizer</span>
          </h3>
        </div>

        {/* Tab Selector */}
        <div className="relative flex bg-[#07070a] border border-brand-border/80 p-1 rounded-xl shadow-inner overflow-hidden select-none">
          {/* Traditional Tab */}
          <button
            onClick={() => setActiveTab("before")}
            className={`relative px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide uppercase transition-all duration-300 z-10 cursor-pointer flex items-center gap-2 ${
              activeTab === "before" ? "text-red-400" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {activeTab === "before" && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 bg-red-950/35 border border-red-500/30 rounded-lg -z-10 shadow-[0_0_12px_rgba(239,68,68,0.15)]"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <span className={`w-1.5 h-1.5 rounded-full ${activeTab === "before" ? "bg-red-400 animate-pulse" : "bg-slate-600"}`} />
            Before Df-OS: Traditional
          </button>

          {/* Smart Digital Factory Tab */}
          <button
            onClick={() => setActiveTab("after")}
            className={`relative px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide uppercase transition-all duration-300 z-10 cursor-pointer flex items-center gap-2 ${
              activeTab === "after" ? "text-brand-cyan" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {activeTab === "after" && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 bg-brand-cyan/10 border border-brand-cyan/25 rounded-lg -z-10 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <span className={`w-1.5 h-1.5 rounded-full ${activeTab === "after" ? "bg-brand-cyan animate-pulse" : "bg-slate-600"}`} />
            With Df-OS: Smart Digital Factory
          </button>
        </div>
      </div>

      {/* Main visualization frame (Taller height to support 50% bigger graphics and 7 nodes) */}
      <div className="relative w-full h-[580px] md:h-[630px] overflow-hidden bg-brand-bg flex items-center justify-center">
        {/* Blueprint background grid */}
        <div className="absolute inset-0 blueprint-grid opacity-35" />
        <div className="absolute inset-0 blueprint-grid-fine opacity-20" />

        <AnimatePresence mode="wait">
          {activeTab === "before" ? (
            /* BEFORE STATE: CHAOTIC NETWORK */
            <motion.div
              key="before"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              {/* Central Floating Instructions */}
              <div className="absolute top-4 text-center pointer-events-none z-10 px-4">
                <p className="text-[12.5px] font-mono text-red-400/95 uppercase tracking-widest bg-red-500/5 px-4 py-1.5 rounded-full border border-red-500/15 inline-block">
                  Fragmented Factory Operations in Chaos
                </p>
                <p className="text-[11.5px] text-slate-400 mt-1.5 max-w-md mx-auto font-sans leading-normal">
                  Hover over any node to inspect operational friction.
                </p>
              </div>

              {/* SVG lines drawing chaos spiderweb */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {chaosConnections.map((conn, idx) => {
                  const fromCoord = getCoordinates(conn.from);
                  const toCoord = getCoordinates(conn.to);
                  const isHighlighted =
                    hoveredNode === conn.from || hoveredNode === conn.to;

                  return (
                    <g key={idx}>
                      {/* Faint static connection */}
                      <line
                        x1={`${fromCoord.x}%`}
                        y1={`${fromCoord.y}%`}
                        x2={`${toCoord.x}%`}
                        y2={`${toCoord.y}%`}
                        stroke={isHighlighted ? "rgba(239, 68, 68, 0.75)" : "rgba(255, 255, 255, 0.08)"}
                        strokeWidth={isHighlighted ? "2" : "1.2"}
                        style={{ transition: "stroke 0.2s, stroke-width 0.2s" }}
                      />
                      {/* Pulsing particle loop line */}
                      <line
                        x1={`${fromCoord.x}%`}
                        y1={`${fromCoord.y}%`}
                        x2={`${toCoord.x}%`}
                        y2={`${toCoord.y}%`}
                        stroke={isHighlighted ? "#ef4444" : "rgba(239, 68, 68, 0.35)"}
                        strokeWidth={isHighlighted ? "2" : "1.2"}
                        strokeDasharray="6 15"
                        className="flow-line-chaos"
                        style={{ transition: "stroke 0.2s, stroke-width 0.2s" }}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Floating Operator Avatars (helmet heads moving around) */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                  animate={{
                    x: ["20%", "50%", "30%", "20%"],
                    y: ["30%", "20%", "45%", "30%"]
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-5 h-5 bg-red-950/90 border border-red-500/40 rounded-full flex items-center justify-center text-[10px] shadow"
                >
                  <Users className="w-2.5 h-2.5 text-red-400" />
                </motion.div>
                <motion.div
                  animate={{
                    x: ["80%", "55%", "80%"],
                    y: ["30%", "50%", "30%"]
                  }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="absolute w-5 h-5 bg-red-950/90 border border-red-500/40 rounded-full flex items-center justify-center text-[10px] shadow"
                >
                  <Users className="w-2.5 h-2.5 text-red-400" />
                </motion.div>
                <motion.div
                  animate={{
                    x: ["50%", "80%", "50%"],
                    y: ["80%", "60%", "80%"]
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute w-5 h-5 bg-red-950/90 border border-red-500/40 rounded-full flex items-center justify-center text-[10px] shadow"
                >
                  <Users className="w-2.5 h-2.5 text-red-400" />
                </motion.div>
              </div>

              {/* Render Chaos Nodes */}
              {chaosNodes.map((node) => {
                const Icon = node.icon;
                const isHovered = hoveredNode === node.id;
                return (
                  <div
                    key={node.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? "bg-red-950/70 border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.4)] scale-110"
                          : "bg-brand-card/90 border-brand-border group-hover:border-slate-500 group-hover:scale-105"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-colors ${
                          isHovered ? "text-red-400" : "text-slate-400 group-hover:text-slate-200"
                        }`}
                      />
                    </div>
                    {/* Node text label */}
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-950/80 px-2.5 py-1 border border-brand-border/40 rounded text-[11px] font-mono text-slate-200">
                      {node.name}
                    </div>

                    {/* Context-Sensitive Tooltip (pops up next to/above node on hover) */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.18 }}
                          className="absolute bottom-16 left-1/2 -translate-x-1/2 w-64 bg-[#111116]/95 backdrop-blur-md border border-red-500/30 p-3 rounded-lg shadow-2xl z-40 pointer-events-none"
                        >
                          <h4 className="text-[13px] font-bold font-mono text-red-400 uppercase tracking-wider mb-1">
                            {node.name} Friction
                          </h4>
                          <p className="text-[11.5px] text-slate-200 leading-normal font-sans">
                            {node.info}
                          </p>
                          <p className="text-[10px] text-red-400 font-mono mt-1.5 uppercase tracking-wider border-t border-brand-border/40 pt-1">
                            Impact: {node.impact}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            /* AFTER STATE: STRUCTURED INTELLIGENCE PIPELINE (Enhanced) */
            <motion.div
              key="after"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full grid grid-cols-12 items-center px-6 md:px-12"
            >
              {/* Header Title */}
              <div className="absolute top-4 left-0 right-0 text-center pointer-events-none z-10 px-4">
                <p className="text-[12.5px] font-mono text-brand-cyan bg-brand-cyan/5 px-4 py-1.5 rounded-full border border-brand-cyan/15 inline-block uppercase tracking-widest">
                  Structured Operational Capabilities to Vish AI
                </p>
              </div>

              {/* Left Column: Product Features / Capability Inputs (fades on hover to avoid cluttering the massive expanded web) */}
              <div className={`col-span-4 flex flex-col gap-2 z-10 py-4 transition-all duration-500 ${isHubHovered ? "opacity-15 pointer-events-none blur-[0.5px]" : "opacity-100"}`}>
                <div className="text-[11.5px] font-mono text-slate-500 uppercase tracking-wider pl-1.5 mb-1.5">
                  Df-OS Capability Stack
                </div>
                {structuredSources.map((source) => {
                  const Icon = source.icon;
                  const isHovered = hoveredSource === source.id;
                  return (
                    <div
                      key={source.id}
                      className={`flex items-center gap-3 p-2.5 rounded-lg border bg-[#111116]/80 cursor-pointer transition-all duration-300 ${
                        isHovered
                          ? "border-brand-cyan shadow-[0_0_12px_rgba(6,182,212,0.3)] translate-x-2"
                          : "border-brand-border/60 hover:border-slate-500"
                      }`}
                      onMouseEnter={() => setHoveredSource(source.id)}
                      onMouseLeave={() => setHoveredSource(null)}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-slate-900 border border-brand-border flex items-center justify-center shrink-0 ${source.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col gap-0.5 overflow-hidden">
                        <span className="text-[11.5px] font-bold text-white font-mono uppercase tracking-wide truncate">
                          {source.name}
                        </span>
                        <span className="text-[9.5px] text-slate-400 font-mono truncate">
                          Active Digital Thread
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Middle Column: Glowing Df-OS Hub & 2-3x Expanding Unstructured Neural Web (Original Logo) */}
              <div
                className="col-span-4 flex flex-col items-center justify-center z-20 cursor-pointer h-full relative"
                onMouseEnter={() => setIsHubHovered(true)}
                onMouseLeave={() => setIsHubHovered(false)}
              >
                {/* Visualizer Area */}
                <div className="relative pulse-glow-hub flex items-center justify-center w-[360px] h-[360px]">
                  
                  {/* Glowing background halo */}
                  <div className="absolute inset-0 bg-brand-cyan/10 rounded-full blur-3xl scale-110 pointer-events-none" />

                  {/* AI Unstructured Knowledge Graph (Expands 2-3x on Hover, messy unorganized design style) */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none origin-center"
                    animate={{
                      scale: isHubHovered ? 2.6 : 1.0,
                      rotate: isHubHovered ? 12 : 0
                    }}
                    transition={{ type: "spring", stiffness: 65, damping: 13 }}
                  >
                    <svg viewBox="0 0 360 360" className="w-[360px] h-[360px] overflow-visible relative">
                      
                      {/* Connection lines (unorganized design style) */}
                      <g className="transition-all duration-300">
                        {graphConnections.map((conn) => {
                          const isSecondaryOrTertiary = conn.type === "secondary" || conn.type === "tertiary";
                          return (
                            <path
                              key={conn.id}
                              d={conn.d}
                              fill="none"
                              stroke={isHubHovered ? "rgba(6, 182, 212, 0.45)" : "rgba(255, 255, 255, 0.08)"} 
                              strokeWidth={isHubHovered ? "0.5" : "1.2"} 
                              style={{ 
                                transition: "stroke 0.3s, stroke-width 0.3s, opacity 0.3s",
                                opacity: isSecondaryOrTertiary ? (isHubHovered ? 0.75 : 0) : 1
                              }}
                            />
                          );
                        })}
                      </g>

                      {/* Unstructured Node Dots */}
                      {unstructuredNodes.map((node) => {
                        const isSecondaryOrTertiary = node.type === "secondary" || node.type === "tertiary";
                        return (
                          <circle
                            key={node.id}
                            cx={node.x}
                            cy={node.y}
                            r={node.size}
                            fill={node.color}
                            className="transition-all duration-300"
                            style={{
                              filter: `drop-shadow(0 0 3px ${node.color})`,
                              opacity: isSecondaryOrTertiary ? (isHubHovered ? 0.95 : 0) : 0.95,
                              transition: "opacity 0.3s, r 0.3s"
                            }}
                          />
                        );
                      })}

                      {/* Traveling Data Packets along chaotic paths */}
                      <g>
                        {animatedConnections.map((conn) => {
                          const isSecondaryOrTertiary = conn.type === "secondary" || conn.type === "tertiary";
                          return (
                            <circle
                              key={`pkt-${conn.id}`}
                              r={isHubHovered ? "1.4" : "2.0"}
                              fill="#ffffff"
                              className="filter drop-shadow-[0_0_4px_#06b6d4]"
                              style={{
                                transition: "opacity 0.3s",
                                opacity: isSecondaryOrTertiary ? (isHubHovered ? 0.95 : 0) : 0.95
                              }}
                            >
                              <animateMotion
                                dur={`${isHubHovered ? 1.5 : 3}s`}
                                repeatCount="indefinite"
                                path={conn.d}
                              />
                            </circle>
                          );
                        })}
                      </g>
                    </svg>
                  </motion.div>

                  {/* Rotating orbit rings around the central hub (stays static/unscaled under the hub) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border border-dashed border-brand-cyan/20 rotate-hub pointer-events-none z-5" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full border border-dotted border-brand-cyan/10 rotate-hub-reverse pointer-events-none z-5" />

                  {/* Central Monogram Wheel - Stays static/unscaled as anchor in the center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-brand-cyan/20 flex items-center justify-center bg-[#07070a] shadow-[0_0_30px_rgba(6,182,212,0.22)] z-10 overflow-hidden">
                    <div className="absolute inset-0 blueprint-grid-fine opacity-50 pointer-events-none" />
                    
                    {/* Original Df-OS Logo (Unchanged from the public logos directory) */}
                    <div className="relative w-28 h-14 select-none">
                      <Image
                        src="/logos/Df-OS final_logo-01.svg"
                        alt="Df-OS Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>

                  {/* Core badge */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-brand-cyan/15 border border-brand-cyan/30 text-[11.5px] font-mono text-brand-cyan font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-20">
                    Df-OS Core
                  </div>
                </div>

              </div>

              {/* Right Column: Factory Intelligence / Vish AI Console (fades on hover to avoid cluttering) */}
              <div className={`col-span-4 flex flex-col items-end z-10 transition-all duration-500 ${isHubHovered ? "opacity-15 pointer-events-none blur-[0.5px]" : "opacity-100"}`}>
                <div className="text-[11.5px] font-mono text-slate-500 uppercase tracking-wider pr-1.5 mb-3">
                  Factory Intelligence
                </div>
                
                <div className="w-full bg-[#111116]/80 border border-brand-green/30 rounded-xl p-4 shadow-xl pulse-glow-green relative">
                  <div className="absolute inset-0 blueprint-grid-fine opacity-20" />
                  <div className="flex items-center justify-between border-b border-brand-border/40 pb-2 mb-2.5 relative z-10">
                    <div className="flex items-center gap-1.5">
                      <Brain className="w-3.5 h-3.5 text-brand-green" />
                      <span className="text-[10.5px] font-mono text-brand-green uppercase font-bold tracking-wider">
                        Vish AI Console
                      </span>
                    </div>
                    <span className="text-[9px] bg-brand-green/15 text-brand-green px-1.5 py-0.5 rounded border border-brand-green/20 font-mono">
                      ACTIVE
                    </span>
                  </div>

                  {/* Live intelligence events */}
                  <div className="flex flex-col gap-1.5 relative z-10 font-mono">
                    <div className="text-[10px] text-slate-200 flex justify-between bg-brand-card/50 px-2 py-1 rounded">
                      <span>• Checksheet Comp</span>
                      <span className="text-brand-green">100%</span>
                    </div>
                    <div className="text-[10px] text-slate-200 flex justify-between bg-brand-card/50 px-2 py-1 rounded">
                      <span>• Process Deviation</span>
                      <span className="text-amber-400">Handled</span>
                    </div>
                    <div className="text-[10px] text-slate-200 flex justify-between bg-brand-card/50 px-2 py-1 rounded">
                      <span>• Alert Status</span>
                      <span className="text-brand-cyan">Triggered</span>
                    </div>
                  </div>
                </div>

                {/* Additional badge */}
                <div className="flex items-center gap-1 bg-[#10b981]/10 border border-[#10b981]/25 px-2.5 py-1 rounded-full mt-3">
                  <Activity className="w-3 h-3 text-[#10b981]" />
                  <span className="text-[9.5px] font-mono text-brand-green font-bold uppercase tracking-wider">
                    Traceable Factory Memory
                  </span>
                </div>
              </div>

              {/* SVG paths showing pipelining (fades on hover to focus the expanded web) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Lines from left column inputs to central Df-OS hub */}
                {structuredSources.map((source, index) => {
                  const isHovered = hoveredSource === source.id;
                  
                  // Left coordinates spread out for 7 nodes
                  const xStart = 28;
                  const yStart = 21 + index * 10.2; 
                  
                  // Middle endpoints converge at the monogram hub boundary
                  const xEnd = 42;
                  const yEnd = 50;

                  return (
                    <g key={index}>
                      {/* Curved flow paths */}
                      <path
                        d={`M ${xStart}% ${yStart}% C ${xStart + 6}% ${yStart}%, ${xEnd - 6}% ${yEnd}%, ${xEnd}% ${yEnd}%`}
                        fill="none"
                        stroke={isHovered ? "rgba(6, 182, 212, 0.85)" : "rgba(255, 255, 255, 0.08)"}
                        strokeWidth={isHovered ? "2" : "1.2"}
                        style={{
                          transition: "opacity 0.5s, stroke 0.5s",
                          opacity: isHubHovered ? 0.08 : 1
                        }}
                      />
                      {/* Pulsing flows */}
                      <path
                        d={`M ${xStart}% ${yStart}% C ${xStart + 6}% ${yStart}%, ${xEnd - 6}% ${yEnd}%, ${xEnd}% ${yEnd}%`}
                        fill="none"
                        stroke={isHovered ? "#06b6d4" : "rgba(6, 182, 212, 0.35)"}
                        strokeWidth={isHovered ? "2" : "1.2"}
                        strokeDasharray="4 12"
                        className="flow-line-structure"
                        style={{
                          transition: "opacity 0.5s, stroke 0.5s",
                          opacity: isHubHovered ? 0.08 : 1
                        }}
                      />
                    </g>
                  );
                })}

                {/* Single pipeline path from central Df-OS hub to Vish AI */}
                <path
                  d="M 58% 50% Q 66% 50% 74% 50%"
                  fill="none"
                  stroke="rgba(16, 185, 129, 0.4)"
                  strokeWidth="2.5"
                  style={{
                    transition: "opacity 0.5s",
                    opacity: isHubHovered ? 0.08 : 1
                  }}
                />
                <path
                  d="M 58% 50% Q 66% 50% 74% 50%"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  strokeDasharray="6 12"
                  className="flow-line-structure"
                  style={{
                    transition: "opacity 0.5s",
                    opacity: isHubHovered ? 0.08 : 1
                  }}
                />
              </svg>

              {/* Bottom typography - Single Line Full-Width Telemetry Header */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center px-6 z-30 pointer-events-none">
                <div className="text-center w-full max-w-4xl flex items-center justify-center gap-3">
                  <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-brand-cyan/40" />
                  <span className="text-[10.5px] md:text-[13px] font-black font-mono tracking-[0.25em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#1586FF] via-brand-cyan to-brand-green drop-shadow-[0_0_12px_rgba(6,182,212,0.35)]">
                    AI-Ready Factory Operating Layer for Modern Manufacturing
                  </span>
                  <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#10b981]/40" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Explanatory footer narrative bar */}
      <div className="px-6 py-4 bg-[#111116] border-t border-brand-border/60 text-center text-[13px] text-slate-300 font-sans leading-relaxed">
        {activeTab === "before" ? (
          <p>
            Traditional factories manage critical actions through disconnected papers, personal WhatsApp groups, and stagnant Excel sheets, leading to a <strong className="text-red-400 font-semibold">fragmented operation database</strong>.
          </p>
        ) : (
          <p>
            Df-OS integrates operational feeds into a unified Digital Thread, structuring checklist and shift handovers into <strong className="text-brand-cyan font-semibold">Factory Memory</strong>, allowing <strong className="text-brand-green font-semibold">Vish AI</strong> to safeguard operations.
          </p>
        )}
      </div>
    </div>
  );
}
