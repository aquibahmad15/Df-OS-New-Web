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
    modules: [
      { id: "prod-planning", label: "Production Planning", priority: "primary", x: 170, y: 35 },
      { id: "oee-monitoring", label: "OEE Monitoring", priority: "primary", x: 250, y: 15 },
      { id: "shift-handover", label: "Shift Handover", priority: "primary", x: 330, y: 35 },
      { id: "downtime-analysis", label: "Downtime Analysis", priority: "secondary", x: 190, y: 85 }
    ]
  },
  {
    id: "quality",
    label: "Quality",
    icon: "ShieldCheck",
    x: 395,
    y: 110,
    color: "indigo",
    modules: [
      { id: "in-process-insp", label: "In-Process Inspection", priority: "primary", x: 450, y: 70 },
      { id: "non-conformance", label: "Non-Conformance", priority: "primary", x: 460, y: 125 },
      { id: "spc-analysis", label: "SPC Analysis", priority: "primary", x: 420, y: 165 }
    ]
  },
  {
    id: "maintenance",
    label: "Maintenance",
    icon: "Wrench",
    x: 440,
    y: 235,
    color: "blue",
    modules: [
      { id: "preventive-maint", label: "Preventive Maintenance", priority: "primary", x: 490, y: 195 },
      { id: "breakdown-rep", label: "Breakdown Reporting", priority: "primary", x: 495, y: 255 },
      { id: "cond-monitoring", label: "Condition Monitoring", priority: "primary", x: 440, y: 300 }
    ]
  },
  {
    id: "safety",
    label: "Safety",
    icon: "Shield",
    x: 375,
    y: 365,
    color: "green",
    modules: [
      { id: "hazard-reporting", label: "Hazard Reporting", priority: "primary", x: 430, y: 395 },
      { id: "incident-inv", label: "Incident Investigation", priority: "primary", x: 385, y: 425 },
      { id: "work-permit", label: "Work Permit", priority: "primary", x: 325, y: 410 }
    ]
  },
  {
    id: "esg",
    label: "ESG",
    icon: "Gauge",
    x: 250,
    y: 415,
    color: "teal",
    modules: [
      { id: "esg-monitoring", label: "ESG Monitoring", priority: "primary", x: 250, y: 470 }
    ]
  },
  {
    id: "utility",
    label: "Utility",
    icon: "Zap",
    x: 125,
    y: 365,
    color: "amber",
    modules: [
      { id: "energy-tracking", label: "Energy Tracking", priority: "primary", x: 70, y: 395 },
      { id: "water-logbook", label: "Water Logbook", priority: "primary", x: 115, y: 425 },
      { id: "elec-logbook", label: "Electricity Logbook", priority: "primary", x: 175, y: 410 }
    ]
  },
  {
    id: "supply-chain",
    label: "Supply Chain",
    icon: "Warehouse",
    x: 60,
    y: 235,
    color: "emerald",
    modules: [
      { id: "supplier-perf", label: "Supplier Performance", priority: "primary", x: 10, y: 195 },
      { id: "warehouse-auditing", label: "Warehouse Auditing", priority: "primary", x: 5, y: 255 },
      { id: "goods-rec-insp", label: "Goods Received Inspection", priority: "primary", x: 60, y: 300 }
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
      "prod-planning",
      "oee-monitoring",
      "in-process-insp",
      "preventive-maint",
      "hazard-reporting",
      "energy-tracking",
      "supplier-perf",
      "esg-monitoring"
    ],
    highlightedLinks: []
  },
  1: {
    mode: "chaos",
    activeDepartments: ["production", "quality", "maintenance", "safety", "utility"],
    activeModules: [
      "downtime-analysis",
      "non-conformance",
      "breakdown-rep",
      "incident-inv",
      "energy-tracking"
    ],
    highlightedLinks: [],
    showBrokenLinks: true,
    showExternalFragments: true
  },
  2: {
    mode: "operating-layer",
    activeDepartments: ["production", "quality", "maintenance", "safety", "utility", "supply-chain"],
    activeModules: [
      "prod-planning",
      "oee-monitoring",
      "shift-handover",
      "in-process-insp",
      "preventive-maint",
      "work-permit",
      "energy-tracking",
      "warehouse-auditing"
    ],
    highlightedLinks: ["link-prod-qual", "link-prod-maint", "link-qual-sc", "link-maint-util"]
  },
  3: {
    mode: "intelligence",
    activeDepartments: ["production", "maintenance", "quality"],
    activeModules: [
      "oee-monitoring",
      "downtime-analysis",
      "breakdown-rep",
      "cond-monitoring",
      "in-process-insp",
      "non-conformance",
      "spc-analysis"
    ],
    highlightedLinks: ["link-prod-maint", "link-prod-qual"],
    showAiHalo: true
  },
  4: {
    mode: "stack",
    activeDepartments: ["production", "quality", "maintenance", "safety", "utility", "supply-chain", "esg"],
    activeModules: [
      "prod-planning",
      "oee-monitoring",
      "in-process-insp",
      "preventive-maint",
      "work-permit",
      "energy-tracking",
      "supplier-perf",
      "esg-monitoring"
    ],
    highlightedLinks: ["link-prod-maint", "link-safe-maint", "link-util-esg"],
    showMachineIngress: true,
    showAiHalo: true
  }
};
