export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}

export const siteConfig = {
  name: "Df-OS",
  title: "Df-OS | AI-Ready Digital Factory Operating System for Manufacturing",
  description: "Df-OS is an AI-ready Digital Factory Operating System that helps manufacturers digitize, connect, automate, and optimize factory operations across people, machines, materials, methods, systems, and decisions.",
  contactEmail: "info@df-os.com",
  phone: "+1 (800) 555-DFOS",
  address: "Connected Factory Plaza, Tech District, Suite 500",
  socials: {
    linkedin: "https://linkedin.com/company/df-os",
    twitter: "https://twitter.com/df_os",
    github: "https://github.com/df-os",
  },
};

export const headerMenu: NavItem[] = [
  { label: "Platform", href: "/platform/df-os" },
  { label: "X-Konnect", href: "/platform/x-konnect" },
  { label: "Vish AI", href: "/platform/vish-ai" },
  { label: "Industries", href: "/industries" },
  { label: "Our Story", href: "/about" },
];

export const footerSections: FooterSection[] = [
  {
    title: "Ecosystem Stack",
    links: [
      { label: "Df-OS Operating Layer", href: "/platform/df-os" },
      { label: "X-Konnect Middleware", href: "/platform/x-konnect" },
      { label: "Vish AI Intelligence", href: "/platform/vish-ai" },
      { label: "Hectos Edge Gateway", href: "/platform/x-konnect#hectos" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "FMCG", href: "/industries#fmcg" },
      { label: "Automotive", href: "/industries#automotive" },
      { label: "Pharmaceuticals", href: "/industries#pharmaceuticals" },
      { label: "Food & Beverage", href: "/industries#fnb" },
      { label: "Electronics", href: "/industries#durables" },
    ],
  },
  {
    title: "Company & Resources",
    links: [
      { label: "About Df-OS", href: "/about" },
      { label: "Resources & Insights", href: "/resources" },
      { label: "Category Glossary", href: "/resources#glossary" },
      { label: "Trust & Security", href: "/about#security" },
    ],
  },
];
