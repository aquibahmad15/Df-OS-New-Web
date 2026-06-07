export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
}

export interface GlossaryItem {
  slug: string;
  term: string;
  definition: string;
}

export const resourcesPageData = {
  seo: {
    title: "Resources & Insights | Df-OS Manufacturing Thought Leadership",
    description: "Explore blogs, thought leadership articles, and glossary definitions about Digital Factory Operating Systems (Df-OS), AI-ready manufacturing, and shopfloor digitization.",
  },
  hero: {
    eyebrow: "Insights & Resources",
    headline: "Insights for Connected Manufacturing",
    subheadline: "Explore articles, guides, and glossary terms to understand how to digitize operations, connect legacy machines, build factory memory, and prepare for AI-led decisions."
  },
  blogPosts: [
    {
      slug: "what-is-a-digital-factory-operating-system",
      title: "What is a Digital Factory Operating System (Df-OS)?",
      category: "Category Education",
      excerpt: "Understand the core differences between traditional MES, rigid ERPs, and a Df-OS operating layer, and why factories require connected workflows to make processes AI-ready.",
      readTime: "6 min read",
      date: "June 4, 2026",
      author: "DesignX Research Team"
    },
    {
      slug: "how-to-make-your-factory-floor-ai-ready",
      title: "How to Make Your Factory Floor AI-Ready",
      category: "AI-Ready Manufacturing",
      excerpt: "A step-by-step guide to transforming paper-based logbooks and isolated PLC sensor signals into structured factory memory that LLM decision models can reason over.",
      readTime: "8 min read",
      date: "May 28, 2026",
      author: "Vish AI Solutions Team"
    },
    {
      slug: "connecting-legacy-machines-without-disruption",
      title: "Connecting Legacy Machines via Industrial IoT",
      category: "Industrial IoT",
      excerpt: "Learn how edge gateways like Hectos bridge Modbus, OPC UA, and legacy serial interfaces to feed live parameters directly into daily checks and alerts.",
      readTime: "5 min read",
      date: "May 15, 2026",
      author: "X-Konnect Engineering Team"
    }
  ] as BlogPost[],
  glossary: [
    {
      slug: "factory-memory",
      term: "Factory Memory",
      definition: "A structured, context-rich historical record compiled by Df-OS. It links process execution variables (Man, Machine, Material, Method) to establish continuous operational context for AI decision-support."
    },
    {
      slug: "digital-factory-operating-layer",
      term: "Digital Factory Operating Layer",
      definition: "A unified software layer that structures shopfloor checklists, PLC data, approvals, safety logs, and daily reviews into a single database schema, eliminating department point-solution silos."
    },
    {
      slug: "industrial-iot-middleware",
      term: "Industrial IoT Middleware",
      definition: "A software layer (like X-Konnect) that sits between physical OT assets (machines, sensors, meters) and IT operating applications, standardizing and routeing signal streams."
    },
    {
      slug: "hectos-edge-gateway",
      term: "Hectos Edge Gateway",
      definition: "A proprietary industrial gateway device under X-Konnect designed to securely extract, encrypt, and push signals from legacy and modern PLCs to the Df-OS operating layer."
    },
    {
      slug: "disrupt-without-disruption",
      term: "Disrupt Without Disruption",
      definition: "The Df-OS product philosophy of layering digital operating systems over existing plant assets, SCADA systems, and ERP structures, modernization without requiring expensive rip-and-replace capital projects."
    }
  ] as GlossaryItem[]
};
