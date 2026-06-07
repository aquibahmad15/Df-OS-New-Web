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
      { id: "prod-logbook", label: "Production Logbook", priority: "primary", x: 170, y: 25 },
      { id: "prod-planning", label: "Production Planning", priority: "primary", x: 250, y: 10 },
      { id: "oee-monitoring", label: "OEE Monitoring", priority: "primary", x: 330, y: 25 },
      { id: "perf-dashboard", label: "Performance Dashboard", priority: "primary", x: 320, y: 55 },
      { id: "batch-tracking", label: "Batch Tracking", priority: "secondary", x: 145, y: 55 },
      { id: "shift-handover", label: "Shift Handover", priority: "secondary", x: 175, y: 85 },
      { id: "wip-tracking", label: "WIP Tracking", priority: "secondary", x: 200, y: 105 },
      { id: "downtime-analysis", label: "Downtime Analysis", priority: "secondary", x: 300, y: 105 },
      { id: "changeover-log", label: "Changeover Log", priority: "secondary", x: 350, y: 85 },
      { id: "fg-dispatch", label: "FG Dispatch", priority: "secondary", x: 355, y: 55 }
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
      { id: "in-process-insp", label: "In-Process Inspection", priority: "primary", x: 450, y: 60 },
      { id: "spc-analysis", label: "SPC Analysis", priority: "primary", x: 470, y: 95 },
      { id: "non-conformance", label: "Non-Conformance", priority: "primary", x: 475, y: 130 },
      { id: "qav-audit", label: "QAV Audit", priority: "primary", x: 455, y: 160 },
      { id: "pdi-check", label: "PDI Check", priority: "secondary", x: 430, y: 55 },
      { id: "gamba-walk", label: "GAMBA Walk", priority: "secondary", x: 480, y: 75 },
      { id: "5s-audit", label: "5S Audit", priority: "secondary", x: 490, y: 110 },
      { id: "poka-yoke", label: "Poka Yoke", priority: "secondary", x: 485, y: 145 },
      { id: "supplier-audit", label: "Supplier Audit", priority: "secondary", x: 460, y: 175 },
      { id: "calibration", label: "Calibration", priority: "secondary", x: 420, y: 175 },
      { id: "incoming-insp", label: "Incoming Inspection", priority: "secondary", x: 430, y: 185 }
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
      { id: "preventive-maint", label: "Preventive Maintenance", priority: "primary", x: 490, y: 195 },
      { id: "breakdown-rep", label: "Breakdown Reporting", priority: "primary", x: 500, y: 230 },
      { id: "cond-monitoring", label: "Condition Monitoring", priority: "primary", x: 495, y: 265 },
      { id: "work-order", label: "Work Order", priority: "primary", x: 480, y: 295 },
      { id: "spares-mgmt", label: "Spares Management", priority: "secondary", x: 475, y: 195 },
      { id: "jh-tags", label: "JH Tags", priority: "secondary", x: 510, y: 215 },
      { id: "asset-perf", label: "Asset Performance", priority: "secondary", x: 510, y: 250 },
      { id: "lubrication", label: "Lubrication", priority: "secondary", x: 505, y: 280 },
      { id: "sla-tracking", label: "SLA Tracking", priority: "secondary", x: 460, y: 310 }
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
      { id: "hazard-reporting", label: "Hazard Reporting", priority: "primary", x: 440, y: 345 },
      { id: "incident-inv", label: "Incident Investigation", priority: "primary", x: 445, y: 380 },
      { id: "work-permit", label: "Work Permit", priority: "primary", x: 430, y: 410 },
      { id: "loto-mgmt", label: "LOTO Management", priority: "primary", x: 400, y: 430 },
      { id: "visitor-mgmt", label: "Visitor Management", priority: "secondary", x: 420, y: 340 },
      { id: "hira-assessment", label: "HIRA Assessment", priority: "secondary", x: 455, y: 360 },
      { id: "ppe-compliance", label: "PPE Compliance", priority: "secondary", x: 460, y: 395 },
      { id: "safety-drill", label: "Safety Drill", priority: "secondary", x: 450, y: 425 },
      { id: "emergency-plan", label: "Emergency Plan", priority: "secondary", x: 420, y: 445 },
      { id: "fire-safety", label: "Fire Safety", priority: "secondary", x: 380, y: 450 },
      { id: "workplace-ergo", label: "Workplace Ergonomics", priority: "secondary", x: 345, y: 435 }
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
      { id: "esg-monitoring", label: "ESG Monitoring", priority: "primary", x: 250, y: 465 },
      { id: "energy-report", label: "Energy Report", priority: "secondary", x: 200, y: 455 },
      { id: "water-report", label: "Water Report", priority: "secondary", x: 220, y: 475 },
      { id: "sustainability", label: "Sustainability", priority: "secondary", x: 280, y: 475 },
      { id: "compliance-log", label: "Compliance Log", priority: "secondary", x: 300, y: 455 }
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
      { id: "energy-tracking", label: "Energy Tracking", priority: "primary", x: 60, y: 345 },
      { id: "water-logbook", label: "Water Logbook", priority: "primary", x: 55, y: 380 },
      { id: "elec-logbook", label: "Electricity Logbook", priority: "primary", x: 70, y: 410 },
      { id: "chiller-log", label: "Chiller Log", priority: "primary", x: 100, y: 430 },
      { id: "etp-monitor", label: "ETP Monitor", priority: "secondary", x: 80, y: 340 },
      { id: "boiler-log", label: "Boiler Log", priority: "secondary", x: 40, y: 360 },
      { id: "fuel-tracking", label: "Fuel Tracking", priority: "secondary", x: 35, y: 395 },
      { id: "steam-log", label: "Steam Log", priority: "secondary", x: 50, y: 425 },
      { id: "solar-monitor", label: "Solar Monitor", priority: "secondary", x: 80, y: 445 }
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
      { id: "supplier-perf", label: "Supplier Performance", priority: "primary", x: 10, y: 195 },
      { id: "warehouse-auditing", label: "Warehouse Auditing", priority: "primary", x: 0, y: 230 },
      { id: "truck-tracking", label: "Truck Tracking", priority: "primary", x: 5, y: 265 },
      { id: "goods-rec-insp", label: "Goods Received Inspection", priority: "primary", x: 20, y: 295 },
      { id: "inventory-mgmt", label: "Inventory Management", priority: "secondary", x: -10, y: 210 },
      { id: "material-indent", label: "Material Indent", priority: "secondary", x: -10, y: 250 },
      { id: "dispatch-log", label: "Dispatch Log", priority: "secondary", x: 5, y: 280 },
      { id: "grn-tracking", label: "GRN Tracking", priority: "secondary", x: 35, y: 310 }
    ]
  }
];

export const crossLinks: CrossLinkConfig[] = [
  { id: "link-prod-qual", from: "production", to: "quality", reason: "Inspection deviations" },
  { id: "link-prod-maint", from: "production", to: "maintenance", reason: "OEE breakdowns" },
  { id: "link-prod-util", from: "production", to: "utility", reason: "Energy correlation" },
  { id: "link-qual-sc", from: "quality", to: "supply-chain", reason: "Incoming inspections" },
  { id: "link-maint-util", from: "maintenance", to: "utility", reason: "Utility maintenance" },
  { id: "link-safe-maint", from: "safety", to: "maintenance", reason: "Work permits & LOTO" },
  { id: "link-util-esg", from: "utility", to: "esg", reason: "ESG sustainability" }
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
}

export const slideStates: Record<number, SlideState> = {
  0: {
    mode: "brand",
    activeDepartments: ["production", "quality", "maintenance", "safety", "utility", "supply-chain", "esg"],
    activeModules: [
      "prod-logbook", "prod-planning", "oee-monitoring", "perf-dashboard",
      "in-process-insp", "spc-analysis",
      "preventive-maint", "breakdown-rep",
      "hazard-reporting", "work-permit",
      "energy-tracking", "water-logbook",
      "supplier-perf", "warehouse-auditing",
      "esg-monitoring"
    ],
    highlightedLinks: []
  },
  1: {
    mode: "chaos",
    activeDepartments: ["production", "quality", "maintenance", "safety", "utility"],
    activeModules: [
      "downtime-analysis", "changeover-log",
      "non-conformance", "poka-yoke",
      "breakdown-rep", "jh-tags",
      "incident-inv", "ppe-compliance",
      "energy-tracking", "fuel-tracking"
    ],
    highlightedLinks: [],
    showBrokenLinks: true,
    showExternalFragments: true
  },
  2: {
    mode: "operating-layer",
    activeDepartments: ["production", "quality", "maintenance", "safety", "utility", "supply-chain"],
    activeModules: [
      "prod-logbook", "prod-planning", "oee-monitoring", "perf-dashboard",
      "in-process-insp", "spc-analysis", "non-conformance", "qav-audit",
      "preventive-maint", "breakdown-rep", "cond-monitoring",
      "hazard-reporting", "work-permit", "loto-mgmt",
      "energy-tracking", "water-logbook", "elec-logbook",
      "supplier-perf", "warehouse-auditing", "goods-rec-insp"
    ],
    highlightedLinks: ["link-prod-qual", "link-prod-maint", "link-qual-sc", "link-maint-util"]
  },
  3: {
    mode: "intelligence",
    activeDepartments: ["production", "maintenance", "quality"],
    activeModules: [
      "oee-monitoring", "downtime-analysis", "perf-dashboard", "changeover-log",
      "breakdown-rep", "cond-monitoring", "work-order",
      "in-process-insp", "non-conformance", "spc-analysis", "qav-audit"
    ],
    highlightedLinks: ["link-prod-maint", "link-prod-qual"],
    showAiHalo: true
  },
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
      "esg-monitoring"
    ],
    highlightedLinks: ["link-prod-maint", "link-safe-maint", "link-util-esg"],
    showMachineIngress: true,
    showAiHalo: true
  }
};
