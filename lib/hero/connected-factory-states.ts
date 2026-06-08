// ─────────────────────────────────────────────────────────────────────────────
// Df-OS Factory Constellation System — Slide states
// One reusable, state-driven model. The constellation never rebuilds per slide;
// it transitions between these states across the 5 hero scroll slides.
// ─────────────────────────────────────────────────────────────────────────────

export type ConstellationMode =
  | "brand"            // Slide 1 — full system connected
  | "chaos"            // Slide 2 — fragmented operations
  | "operating-layer"  // Slide 3 — unified operating layer
  | "intelligence"     // Slide 4 — Vish AI
  | "stack";           // Slide 5 — AI factory stack

export interface SlideState {
  mode: ConstellationMode;
  /** Departments emphasised this slide (others dim). Empty ⇒ all equal. */
  focusDepartments: string[];
  /** Department spokes shown broken/dashed (chaos). */
  brokenDepartments: string[];
  /** Cross-links lit this slide. */
  highlightedLinks: string[];
  showAiHalo: boolean;
  showFragments: boolean;
  showStack: boolean;
  overlayLabel?: string;
}

const ALL = ["production", "quality", "maintenance", "safety", "utility", "supply-chain", "esg"];

export const SLIDE_STATES: Record<number, SlideState> = {
  0: {
    mode: "brand", focusDepartments: [], brokenDepartments: [],
    highlightedLinks: [], showAiHalo: false, showFragments: false, showStack: false,
  },
  1: {
    mode: "chaos", focusDepartments: [],
    brokenDepartments: ["production", "maintenance", "utility", "safety"],
    highlightedLinks: [], showAiHalo: false, showFragments: true, showStack: false,
  },
  2: {
    mode: "operating-layer", focusDepartments: ALL, brokenDepartments: [],
    highlightedLinks: ["prod-qual", "prod-maint", "qual-sc", "maint-util", "util-esg"],
    showAiHalo: false, showFragments: false, showStack: false,
    overlayLabel: "Unified Operating Layer",
  },
  3: {
    mode: "intelligence", focusDepartments: ["production", "maintenance", "quality"],
    brokenDepartments: [],
    highlightedLinks: ["prod-maint", "prod-qual"],
    showAiHalo: true, showFragments: false, showStack: false,
  },
  4: {
    mode: "stack", focusDepartments: ALL, brokenDepartments: [],
    highlightedLinks: ["prod-maint", "maint-safe", "util-esg"],
    showAiHalo: true, showFragments: false, showStack: true,
  },
};

// Chaos-state warning markers on specific signals (amber/coral).
export const WARNING_CHIPS: Record<string, "amber" | "coral"> = {
  "downtime-analysis": "amber",
  "non-conformance":   "coral",
  "breakdown-rep":     "coral",
  "incident-inv":      "coral",
  "energy-tracking":   "amber",
};

// Slide 2 — off-system fragments (trapped intelligence), fixed in the 840 box.
export interface Fragment { id: string; label: string; x: number; y: number; }
export const EXTERNAL_FRAGMENTS: Fragment[] = [
  { id: "paper",    label: "Paper Logbook",     x: 120, y: 96 },
  { id: "excel",    label: "Excel Sheet",       x: 712, y: 104 },
  { id: "whatsapp", label: "WhatsApp Follow-up", x: 742, y: 392 },
  { id: "approval", label: "Manual Approval",   x: 700, y: 720 },
  { id: "alarm",    label: "Local Machine Alarm", x: 150, y: 726 },
  { id: "delayed",  label: "Delayed Review",    x: 92,  y: 392 },
];

// Slide 4 — Vish AI reasoning path (ordered node / hub ids).
export const AI_PATH: string[] = [
  "prod-planning", "oee-monitoring", "downtime-analysis",
  "maintenance", "quality", "non-conformance",
];

// Slide 4 — Vish AI conversation chips.
export const AI_CHIPS = {
  query:   "Why did output drop after the last changeover?",
  insight: "Recurring downtime pattern detected",
  action:  "Trigger RCA workflow",
};

// Slide 5 — AI factory stack layers.
export const STACK_SIGNAL_LAYER = ["Machines", "PLCs", "Sensors", "Hectos", "X-Konnect"];
export const STACK_INTEL_LAYER  = ["Vish AI", "Control Tower", "Decision Intelligence"];
