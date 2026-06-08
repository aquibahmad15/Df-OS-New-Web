// ─────────────────────────────────────────────────────────────────────────────
// Df-OS Factory Constellation System — Structure data
// Radial "Factory Operating System Map" (inspired by WEF transformation maps):
//   Core  →  inner ring of 7 department hubs  →  outer ring of process nodes.
// Positions are COMPUTED in the component from this ordered data, so the ring
// stays evenly spaced and label-collision-free. Order of DEPARTMENTS and of
// each `processes` array defines the clockwise sweep around the map.
// ─────────────────────────────────────────────────────────────────────────────

export type ChipPriority = "primary" | "secondary";

export interface ProcessNode {
  id: string;
  label: string;
  priority: ChipPriority;
}

export interface Department {
  id: string;
  label: string;
  icon: string;          // lucide icon key (resolved in component)
  /** Full process/signal count shown on the hub badge. */
  processCount: number;
  countKind: "proc" | "sig";
  processes: ProcessNode[];
}

export interface CrossLink {
  id: string;
  from: string;
  to: string;
  reason: string;
}

export const CORE = {
  id: "df-os-core",
  title: "Df-OS",
  sub: "Factory Operating System",
  lower: "Factory Memory",
} as const;

// Clockwise from 12 o'clock. Each department owns a contiguous arc of the
// outer ring; its hub sits on the inner ring at that arc's centre.
export const DEPARTMENTS: Department[] = [
  {
    id: "production", label: "Production", icon: "Activity",
    processCount: 10, countKind: "proc",
    processes: [
      { id: "prod-logbook",      label: "Production Logbook",   priority: "primary" },
      { id: "prod-planning",     label: "Planning & Sched.", priority: "primary" },
      { id: "oee-monitoring",    label: "OEE Monitoring",        priority: "primary" },
      { id: "perf-monitoring",   label: "Performance Monitor", priority: "primary" },
      { id: "downtime-analysis", label: "Downtime Analysis",     priority: "secondary" },
      { id: "batch-tracking",    label: "Batch Tracking",        priority: "secondary" },
      { id: "wip-tracking",      label: "WIP Tracking",          priority: "secondary" },
      { id: "shift-handover",    label: "Shift Handover",        priority: "secondary" },
    ],
  },
  {
    id: "quality", label: "Quality", icon: "ShieldCheck",
    processCount: 11, countKind: "proc",
    processes: [
      { id: "in-process-insp", label: "In-Process Insp.", priority: "primary" },
      { id: "spc-analysis",    label: "SPC Analysis",          priority: "primary" },
      { id: "non-conformance", label: "Non-Conformance",       priority: "primary" },
      { id: "qav-audit",       label: "QAV Auditing",          priority: "primary" },
      { id: "pdi-check",       label: "PDI",                   priority: "secondary" },
      { id: "5s-audit",        label: "5S Audits",             priority: "secondary" },
      { id: "poka-yoke",       label: "Poka Yoke",             priority: "secondary" },
      { id: "calibration",     label: "Calibration",           priority: "secondary" },
    ],
  },
  {
    id: "maintenance", label: "Maintenance", icon: "Wrench",
    processCount: 9, countKind: "proc",
    processes: [
      { id: "preventive-maint", label: "Preventive Maint.", priority: "primary" },
      { id: "breakdown-rep",    label: "Breakdown Reporting",    priority: "primary" },
      { id: "cond-monitoring",  label: "Condition Monitor",   priority: "primary" },
      { id: "work-order",       label: "Work Order Mgmt",  priority: "primary" },
      { id: "spares-mgmt",      label: "Spares Inventory",       priority: "secondary" },
      { id: "lubrication",      label: "Lubrication",            priority: "secondary" },
      { id: "asset-perf",       label: "Asset Performance",      priority: "secondary" },
    ],
  },
  {
    id: "safety", label: "Safety", icon: "Shield",
    processCount: 11, countKind: "proc",
    processes: [
      { id: "hazard-reporting", label: "Hazard Reporting",       priority: "primary" },
      { id: "incident-inv",     label: "Incident Invest.", priority: "primary" },
      { id: "work-permit",      label: "Work Permit",            priority: "primary" },
      { id: "loto-mgmt",        label: "LOTO Process",           priority: "primary" },
      { id: "hira-assessment",  label: "HIRA",                   priority: "secondary" },
      { id: "ppe-compliance",   label: "PPE Monitoring",         priority: "secondary" },
      { id: "fire-drill",       label: "Fire Drill",             priority: "secondary" },
      { id: "emergency-resp",   label: "Emergency Response",     priority: "secondary" },
    ],
  },
  {
    id: "esg", label: "ESG", icon: "Gauge",
    processCount: 4, countKind: "sig",
    processes: [
      { id: "esg-monitoring", label: "ESG Monitoring",        priority: "primary" },
      { id: "energy-data",    label: "Energy Data",           priority: "secondary" },
      { id: "water-data",     label: "Water Data",            priority: "secondary" },
      { id: "sustainability", label: "Sustainability", priority: "secondary" },
    ],
  },
  {
    id: "utility", label: "Utility", icon: "Zap",
    processCount: 10, countKind: "proc",
    processes: [
      { id: "energy-tracking", label: "Energy Tracking",     priority: "primary" },
      { id: "water-logbook",   label: "Water Logbook",       priority: "primary" },
      { id: "elec-logbook",    label: "Electricity Logbook", priority: "primary" },
      { id: "chiller-log",     label: "Chiller Logbook",     priority: "primary" },
      { id: "etp-monitor",     label: "ETP Logbook",         priority: "secondary" },
      { id: "solar-energy",    label: "Solar Energy",        priority: "secondary" },
      { id: "boiler-log",      label: "Boiler Logbook",      priority: "secondary" },
    ],
  },
  {
    id: "supply-chain", label: "Supply Chain", icon: "Warehouse",
    processCount: 8, countKind: "proc",
    processes: [
      { id: "supplier-perf",  label: "Supplier Perf.", priority: "primary" },
      { id: "warehouse-audit", label: "Warehouse Audit",  priority: "primary" },
      { id: "truck-mgmt",     label: "Truck Management",      priority: "primary" },
      { id: "goods-rec-insp", label: "Goods Received",        priority: "primary" },
      { id: "inventory-vis",  label: "Inventory",  priority: "secondary" },
      { id: "dispatch-ready", label: "Dispatch Readiness",    priority: "secondary" },
    ],
  },
];

// Cross-department intelligence links (the inner web).
export const CROSS_LINKS: CrossLink[] = [
  { id: "prod-qual",  from: "production",   to: "quality",      reason: "Inspection deviations" },
  { id: "prod-maint", from: "production",   to: "maintenance",  reason: "OEE breakdowns" },
  { id: "prod-util",  from: "production",   to: "utility",      reason: "Energy correlation" },
  { id: "qual-sc",    from: "quality",      to: "supply-chain", reason: "Incoming inspections" },
  { id: "maint-safe", from: "maintenance",  to: "safety",       reason: "Work permits & LOTO" },
  { id: "maint-util", from: "maintenance",  to: "utility",      reason: "Utility maintenance" },
  { id: "util-esg",   from: "utility",      to: "esg",          reason: "Energy & emissions" },
  { id: "safe-esg",   from: "safety",       to: "esg",          reason: "Compliance signals" },
  { id: "sc-prod",    from: "supply-chain", to: "production",   reason: "Material readiness" },
  { id: "qual-esg",   from: "quality",      to: "esg",          reason: "Quality compliance" },
];

export function getDepartment(id: string): Department | undefined {
  return DEPARTMENTS.find((d) => d.id === id);
}
