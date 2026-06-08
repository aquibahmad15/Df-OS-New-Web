export interface ModuleConfig {
  id: string;
  label: string;
  priority: "primary" | "secondary";
  x: number;
  y: number;
}

export interface DepartmentConfig {
  id: string;
  label: string;
  icon: string;
  x: number;
  y: number;
  color: "cyan" | "indigo" | "blue" | "green" | "teal" | "amber" | "emerald";
  accentColor: string;
  modules: ModuleConfig[];
}

export interface CrossLinkConfig {
  id: string;
  from: string;
  to: string;
  reason: string;
}

// Fixed coordinates in a 500x500 virtual viewbox
export const CENTER_NODE = {
  id: "df-os-core",
  label: "Df-OS Core",
  x: 250,
  y: 220,
};

export const departments: DepartmentConfig[] = [
  {
    id: "production",
    label: "Production",
    icon: "Activity",
    x: 250,
    y: 65,
    color: "cyan",
    accentColor: "#F6C96D",
    modules: [
      // Primary — arc from NW to NE above hub
      { id: "prod-logbook",      label: "Production Logbook",   priority: "primary",   x: 168, y: 24 },
      { id: "prod-planning",     label: "Planning & Scheduling", priority: "primary",   x: 250, y: 14 },
      { id: "oee-monitoring",    label: "OEE Monitoring",        priority: "primary",   x: 332, y: 24 },
      { id: "perf-dashboard",    label: "Performance Monitor",   priority: "primary",   x: 322, y: 54 },
      // Secondary
      { id: "batch-tracking",    label: "Batch Tracking",        priority: "secondary", x: 148, y: 50 },
      { id: "shift-handover",    label: "Shift Handover",        priority: "secondary", x: 172, y: 82 },
      { id: "wip-tracking",      label: "WIP Tracking",          priority: "secondary", x: 202, y: 100 },
      { id: "downtime-analysis", label: "Downtime Analysis",     priority: "secondary", x: 298, y: 100 },
      { id: "changeover-log",    label: "Changeover Log",        priority: "secondary", x: 348, y: 82 },
      { id: "fg-dispatch",       label: "FG Dispatch",           priority: "secondary", x: 352, y: 52 },
    ]
  },
  {
    id: "quality",
    label: "Quality",
    icon: "ShieldCheck",
    x: 395,
    y: 110,
    color: "indigo",
    accentColor: "#7CFFCB",
    modules: [
      // Primary — fan upper-right
      { id: "in-process-insp", label: "In-Process Inspection", priority: "primary",   x: 450, y: 60 },
      { id: "spc-analysis",    label: "SPC Analysis",          priority: "primary",   x: 468, y: 94 },
      { id: "non-conformance", label: "Non-Conformance",       priority: "primary",   x: 472, y: 128 },
      { id: "qav-audit",       label: "QAV Audit",             priority: "primary",   x: 452, y: 160 },
      // Secondary
      { id: "pdi-check",       label: "PDI Check",             priority: "secondary", x: 428, y: 55 },
      { id: "gamba-walk",      label: "GAMBA Walk",            priority: "secondary", x: 476, y: 74 },
      { id: "5s-audit",        label: "5S Audit",              priority: "secondary", x: 486, y: 110 },
      { id: "poka-yoke",       label: "Poka Yoke",             priority: "secondary", x: 480, y: 144 },
      { id: "supplier-audit",  label: "Supplier Audit",        priority: "secondary", x: 456, y: 174 },
      { id: "calibration",     label: "Calibration",           priority: "secondary", x: 418, y: 174 },
      { id: "incoming-insp",   label: "Incoming Insp.",        priority: "secondary", x: 428, y: 188 },
    ]
  },
  {
    id: "maintenance",
    label: "Maintenance",
    icon: "Wrench",
    x: 440,
    y: 235,
    color: "blue",
    accentColor: "#FFB84D",
    modules: [
      // Primary — fan right
      { id: "preventive-maint", label: "Preventive Maint.",    priority: "primary",   x: 488, y: 194 },
      { id: "breakdown-rep",    label: "Breakdown Reporting",  priority: "primary",   x: 492, y: 228 },
      { id: "cond-monitoring",  label: "Condition Monitoring", priority: "primary",   x: 490, y: 262 },
      { id: "work-order",       label: "Work Order Mgmt",      priority: "primary",   x: 476, y: 294 },
      // Secondary — fixed from x=510 to x≤490
      { id: "spares-mgmt",      label: "Spares Mgmt",          priority: "secondary", x: 472, y: 194 },
      { id: "jh-tags",          label: "JH Tags",              priority: "secondary", x: 484, y: 212 },
      { id: "asset-perf",       label: "Asset Performance",    priority: "secondary", x: 486, y: 248 },
      { id: "lubrication",      label: "Lubrication",          priority: "secondary", x: 482, y: 278 },
      { id: "sla-tracking",     label: "SLA Tracking",         priority: "secondary", x: 456, y: 308 },
    ]
  },
  {
    id: "safety",
    label: "Safety",
    icon: "Shield",
    x: 375,
    y: 365,
    color: "green",
    accentColor: "#FF6B6B",
    modules: [
      // Primary — fan lower-right
      { id: "hazard-reporting", label: "Hazard Reporting",       priority: "primary",   x: 438, y: 344 },
      { id: "incident-inv",     label: "Incident Investigation", priority: "primary",   x: 442, y: 378 },
      { id: "work-permit",      label: "Work Permit",            priority: "primary",   x: 428, y: 408 },
      { id: "loto-mgmt",        label: "LOTO Management",        priority: "primary",   x: 398, y: 428 },
      // Secondary
      { id: "visitor-mgmt",     label: "Visitor Management",     priority: "secondary", x: 418, y: 338 },
      { id: "hira-assessment",  label: "HIRA Assessment",        priority: "secondary", x: 452, y: 358 },
      { id: "ppe-compliance",   label: "PPE Compliance",         priority: "secondary", x: 456, y: 392 },
      { id: "safety-drill",     label: "Safety Drill",           priority: "secondary", x: 446, y: 422 },
      { id: "emergency-plan",   label: "Emergency Plan",         priority: "secondary", x: 416, y: 444 },
      { id: "fire-safety",      label: "Fire Safety",            priority: "secondary", x: 376, y: 448 },
      { id: "workplace-ergo",   label: "Workplace Ergonomics",   priority: "secondary", x: 342, y: 432 },
    ]
  },
  {
    id: "esg",
    label: "ESG",
    icon: "Gauge",
    x: 250,
    y: 415,
    color: "teal",
    accentColor: "#A3FF7A",
    modules: [
      // Primary — pulled inward from edge (was y=465)
      { id: "esg-monitoring", label: "ESG Monitoring", priority: "primary",   x: 250, y: 458 },
      // Secondary — pulled in from y=475
      { id: "energy-report",  label: "Energy Report",  priority: "secondary", x: 198, y: 450 },
      { id: "water-report",   label: "Water Report",   priority: "secondary", x: 218, y: 466 },
      { id: "sustainability", label: "Sustainability",  priority: "secondary", x: 282, y: 466 },
      { id: "compliance-log", label: "Compliance Log", priority: "secondary", x: 302, y: 450 },
    ]
  },
  {
    id: "utility",
    label: "Utility",
    icon: "Zap",
    x: 125,
    y: 365,
    color: "amber",
    accentColor: "#7CFFCB",
    modules: [
      // Primary — fan lower-left
      { id: "energy-tracking", label: "Energy Tracking",     priority: "primary",   x: 60,  y: 342 },
      { id: "water-logbook",   label: "Water Logbook",       priority: "primary",   x: 55,  y: 378 },
      { id: "elec-logbook",    label: "Electricity Logbook", priority: "primary",   x: 68,  y: 408 },
      { id: "chiller-log",     label: "Chiller Log",         priority: "primary",   x: 98,  y: 428 },
      // Secondary
      { id: "etp-monitor",     label: "ETP Monitor",         priority: "secondary", x: 78,  y: 338 },
      { id: "boiler-log",      label: "Boiler Log",          priority: "secondary", x: 42,  y: 360 },
      { id: "fuel-tracking",   label: "Fuel Tracking",       priority: "secondary", x: 36,  y: 393 },
      { id: "steam-log",       label: "Steam Log",           priority: "secondary", x: 50,  y: 422 },
      { id: "solar-monitor",   label: "Solar Monitor",       priority: "secondary", x: 78,  y: 442 },
    ]
  },
  {
    id: "supply-chain",
    label: "Supply Chain",
    icon: "Warehouse",
    x: 60,
    y: 235,
    color: "emerald",
    accentColor: "#B69CFF",
    modules: [
      // Primary — fixed from x=-10/x=0; labels shortened to fit near left edge
      { id: "supplier-perf",      label: "Supplier Perf",   priority: "primary",   x: 52, y: 182 },
      { id: "warehouse-auditing", label: "WH Auditing",     priority: "primary",   x: 40, y: 222 },
      { id: "truck-tracking",     label: "Truck Tracking",  priority: "primary",   x: 42, y: 260 },
      { id: "goods-rec-insp",     label: "GRN Inspection",  priority: "primary",   x: 50, y: 298 },
      // Secondary — fixed from x=-10
      { id: "inventory-mgmt",     label: "Inventory Mgmt",  priority: "secondary", x: 38, y: 200 },
      { id: "material-indent",    label: "Material Indent", priority: "secondary", x: 36, y: 242 },
      { id: "dispatch-log",       label: "Dispatch Log",    priority: "secondary", x: 42, y: 278 },
      { id: "grn-tracking",       label: "GRN Tracking",   priority: "secondary", x: 58, y: 314 },
    ]
  }
];

export const crossLinks: CrossLinkConfig[] = [
  { id: "link-prod-qual",  from: "production",  to: "quality",      reason: "Inspection deviations" },
  { id: "link-prod-maint", from: "production",  to: "maintenance",  reason: "OEE breakdowns" },
  { id: "link-prod-util",  from: "production",  to: "utility",      reason: "Energy correlation" },
  { id: "link-qual-sc",    from: "quality",     to: "supply-chain", reason: "Incoming inspections" },
  { id: "link-maint-util", from: "maintenance", to: "utility",      reason: "Utility maintenance" },
  { id: "link-safe-maint", from: "safety",      to: "maintenance",  reason: "Work permits & LOTO" },
  { id: "link-util-esg",   from: "utility",     to: "esg",          reason: "ESG sustainability" },
];

export interface SlideState {
  mode: "brand" | "chaos" | "operating-layer" | "intelligence" | "stack";
  activeDepartments: string[];
  activeModules: string[];
  highlightedLinks: string[];
  showBrokenLinks?: boolean;
  showMachineIngress?: boolean;
  showAiHalo?: boolean;
  showExternalFragments?: boolean;
  /** Show cross-links as a very faint skeleton (brand/Slide 1 only) */
  showSubtleCrossLinks?: boolean;
}

export const slideStates: Record<number, SlideState> = {
  // Slide 1 — Brand / Category: full system connected, depth visible
  0: {
    mode: "brand",
    activeDepartments: ["production", "quality", "maintenance", "safety", "utility", "supply-chain", "esg"],
    activeModules: [
      // Production: 4 primary + 2 secondary
      "prod-logbook", "prod-planning", "oee-monitoring", "perf-dashboard",
      "batch-tracking", "shift-handover",
      // Quality: 3 primary + 2 secondary
      "in-process-insp", "spc-analysis", "qav-audit",
      "pdi-check", "5s-audit",
      // Maintenance: 3 primary + 2 secondary
      "preventive-maint", "breakdown-rep", "cond-monitoring",
      "spares-mgmt", "jh-tags",
      // Safety: 3 primary + 2 secondary
      "hazard-reporting", "work-permit", "loto-mgmt",
      "visitor-mgmt", "hira-assessment",
      // Utility: 3 primary + 2 secondary
      "energy-tracking", "water-logbook", "elec-logbook",
      "etp-monitor", "boiler-log",
      // Supply Chain: 3 primary + 2 secondary
      "supplier-perf", "warehouse-auditing", "goods-rec-insp",
      "inventory-mgmt", "dispatch-log",
      // ESG: primary + 2 secondary
      "esg-monitoring", "energy-report", "sustainability",
    ],
    highlightedLinks: [],
    showSubtleCrossLinks: true,
  },

  // Slide 2 — Chaos / Fragmented
  1: {
    mode: "chaos",
    activeDepartments: ["production", "quality", "maintenance", "safety", "utility"],
    activeModules: [
      "downtime-analysis", "changeover-log",
      "non-conformance", "poka-yoke",
      "breakdown-rep", "jh-tags",
      "incident-inv", "ppe-compliance",
      "energy-tracking", "fuel-tracking",
    ],
    highlightedLinks: [],
    showBrokenLinks: true,
    showExternalFragments: true,
  },

  // Slide 3 — Df-OS Operating Layer
  2: {
    mode: "operating-layer",
    activeDepartments: ["production", "quality", "maintenance", "safety", "utility", "supply-chain"],
    activeModules: [
      "prod-logbook", "prod-planning", "oee-monitoring", "perf-dashboard",
      "in-process-insp", "spc-analysis", "non-conformance", "qav-audit",
      "preventive-maint", "breakdown-rep", "cond-monitoring",
      "hazard-reporting", "work-permit", "loto-mgmt",
      "energy-tracking", "water-logbook", "elec-logbook",
      "supplier-perf", "warehouse-auditing", "goods-rec-insp",
    ],
    highlightedLinks: ["link-prod-qual", "link-prod-maint", "link-qual-sc", "link-maint-util"],
  },

  // Slide 4 — Vish AI Intelligence
  3: {
    mode: "intelligence",
    activeDepartments: ["production", "maintenance", "quality"],
    activeModules: [
      "oee-monitoring", "downtime-analysis", "perf-dashboard", "changeover-log",
      "breakdown-rep", "cond-monitoring", "work-order",
      "in-process-insp", "non-conformance", "spc-analysis", "qav-audit",
    ],
    highlightedLinks: ["link-prod-maint", "link-prod-qual"],
    showAiHalo: true,
  },

  // Slide 5 — AI Factory Stack
  4: {
    mode: "stack",
    activeDepartments: ["production", "quality", "maintenance", "safety", "utility", "supply-chain", "esg"],
    activeModules: [
      "prod-logbook", "oee-monitoring", "perf-dashboard",
      "in-process-insp", "spc-analysis",
      "preventive-maint", "cond-monitoring",
      "work-permit", "loto-mgmt",
      "energy-tracking", "chiller-log",
      "supplier-perf", "truck-tracking",
      "esg-monitoring",
    ],
    highlightedLinks: ["link-prod-maint", "link-safe-maint", "link-util-esg"],
    showMachineIngress: true,
    showAiHalo: true,
  },
};
