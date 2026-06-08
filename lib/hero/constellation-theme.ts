// ─────────────────────────────────────────────────────────────────────────────
// Df-OS Factory Constellation System — Theme
// Premium foreground palette designed to stand OUT against the blue/cyan
// background video. Carbon + gold + mint + violet + controlled amber/coral.
// Df-OS blue/cyan is reserved for the central core + controlled brand accents.
// ─────────────────────────────────────────────────────────────────────────────

export const THEME = {
  // Core surfaces (carbon)
  obsidian:     "#05080F",
  carbonGlass:  "#090E18",
  graphiteNavy: "#111827",

  // Premium highlights
  gold:    "#F6C96D", // Champagne Gold
  mint:    "#7CFFCB", // Soft Mint
  amber:   "#FFB84D", // Warm Amber
  coral:   "#FF6B6B", // Controlled Coral
  violet:  "#B69CFF", // Soft Violet
  green:   "#A3FF7A", // Sustainability Green

  // Text
  platinum:    "#F8FAFC", // Platinum White
  silver:      "#A8B3C7", // Muted Silver Blue

  // Df-OS brand anchor (core + controlled accents ONLY)
  brandBlue:   "#1E6BFF", // Df-OS Blue
  brandCyan:   "#19D4FF", // Electric Cyan
} as const;

// ── Brand-aligned "digital" accent system ───────────────────────────────────
// Cohesive cool spectrum derived from the Df-OS blue/cyan identity:
// electric cyan → teal → azure → indigo → aqua-green → brand blue → lavender.
// Harmonious with the blue network video while staying distinct per sector.
export const DIGITAL = {
  cyan:    "#2FE1FF", // electric cyan
  teal:    "#29F0CE", // teal
  azure:   "#4FB0FF", // sky azure
  indigo:  "#9D86FF", // indigo
  aqua:    "#57F0A6", // aqua-green
  blue:    "#6E93FF", // brand periwinkle blue
  lavender:"#C6A4FF", // lavender
} as const;

// Department → accent colour (cool digital, brand-aligned)
export const DEPT_ACCENT: Record<string, string> = {
  production:     DIGITAL.cyan,    // electric cyan — the live operating pulse
  quality:        DIGITAL.teal,    // teal
  maintenance:    DIGITAL.azure,   // sky azure
  safety:         DIGITAL.indigo,  // indigo
  esg:            DIGITAL.aqua,    // aqua-green (sustainability, cool)
  utility:        DIGITAL.blue,    // brand blue
  "supply-chain": DIGITAL.lavender,// lavender
};

// Convert hex → rgba string
export function rgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Frequently reused derived tokens
export const LINE = {
  softWhite:    rgba(THEME.platinum, 0.20),
  softWhiteDim: rgba(THEME.platinum, 0.08),
} as const;
