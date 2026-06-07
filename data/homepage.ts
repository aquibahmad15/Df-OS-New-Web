export interface HeroSlide {
  id: number;
  eyebrow: string;
  headline: string;
  subheadline: string;
  microcopy: string;
  ctaText: string;
  ctaHref: string;
  visualDirection: string;
}

export interface BulletPoint {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const homepageData = {
  seo: {
    title: "Df-OS | AI-Ready Digital Factory Operating System for Manufacturing",
    description: "Df-OS is an AI-ready Digital Factory Operating System that helps manufacturers digitize, connect, automate, and optimize factory operations across people, machines, materials, methods, systems, and decisions powering real-time visibility, factory memory, Vish AI, and connected operational intelligence.",
  },
  heroSlides: [
    {
      id: 0,
      eyebrow: "INTRODUCING A NEW CATEGORY IN MANUFACTURING",
      headline: "Df-OS",
      subheadline: "Digital Factory Operating System",
      microcopy: "AI-Ready Manufacturing",
      ctaText: "Book a Demo",
      ctaHref: "/contact",
      visualDirection: "Df-OS Monogram Operating Core at the center surrounded by concentric rotating rings of trusted client logo capsules.",
    },
    {
      id: 1,
      eyebrow: "Manufacturing Is Complex by Nature",
      headline: "Your Factory Is Generating Intelligence. But It Is Still Trapped in Chaos.",
      subheadline: "Every shift, machine, material, method, inspection, deviation, approval, and decision creates operational signals. But when these signals stay scattered across paper, Excel, WhatsApp, machines, and disconnected systems, the factory’s real operating truth remains delayed, fragmented, and difficult to act on.",
      microcopy: "To most systems, this complexity looks like noise. To Df-OS, it is a pattern waiting to be decoded.",
      ctaText: "See How Df-OS Works",
      ctaHref: "#narrative",
      visualDirection: "Fragmented data points, paper logs, machine signals, dashboards, alerts, and disconnected department nodes floating separately. Gradually reveal hidden patterns beneath the complexity.",
    },
    {
      id: 2,
      eyebrow: "Digital Factory Operating System",
      headline: "Run Your Factory Like a Digital System.",
      subheadline: "Df-OS digitizes, connects, and automates factory operations across production, quality, maintenance, safety, utility, warehouse, workforce, suppliers, audits, compliance, and leadership reviews creating one unified operating layer for the factory.",
      microcopy: "Create process blueprints. Build connected factory apps. Generate live digital threads.",
      ctaText: "Explore Df-OS",
      ctaHref: "/platform/df-os",
      visualDirection: "Disconnected operational nodes begin connecting into one structured operating layer. Show process flows, workflows, alerts, dashboards, and factory modules forming a unified system.",
    },
    {
      id: 3,
      eyebrow: "Vish AI | Manufacturing Intelligence Layer",
      headline: "Move From Dashboards to Decisions.",
      subheadline: "Df-OS creates the operating record and factory memory. Vish AI turns that memory into answers, explanations, risk signals, priorities, playbooks, and actions helping teams ask the factory, understand deviations, and act with intelligence.",
      microcopy: "Df-OS makes the factory AI-ready. Vish AI makes it AI-intelligent.",
      ctaText: "Meet Vish AI",
      ctaHref: "/platform/vish-ai",
      visualDirection: "Factory operating record becomes an intelligence graph. Show natural-language question bubbles, connected graph nodes, alerts, recommended actions, and AI agents for quality, maintenance, production, safety, planning, and leadership.",
    },
    {
      id: 4,
      eyebrow: "Df-OS + X-Konnect + Vish AI",
      headline: "From Machine Signals to AI-Ready Factory Intelligence.",
      subheadline: "X-Konnect connects machines, PLCs, sensors, and industrial systems. Df-OS structures operations into factory memory. Vish AI turns that memory into decisions. Together, they create the AI-ready factory stack for modern manufacturing.",
      microcopy: "Connect machines. Structure operations. Act with intelligence.",
      ctaText: "Book a Demo",
      ctaHref: "/contact",
      visualDirection: "Show the full platform stack: shopfloor machines and sensors at the bottom, X-Konnect/Hectos connectivity layer, Df-OS operating layer, factory memory, Vish AI intelligence layer, and leadership control tower at the top.",
    },
  ],
  staticFallback: {
    headline: "The Digital Factory Operating System for AI-Ready Manufacturing",
    subheadline: "Df-OS helps manufacturers digitize, connect, automate, and optimize factory operations through one unified operating layer turning fragmented shopfloor and factory-management processes into real-time visibility, factory memory, and AI-ready operational intelligence.",
    trustLine: "Disrupt without disruption | Modernize factory operations without replacing the systems that already work.",
  },
  categoryNarrative: {
    title: "From Fragmented Operations to Connected Intelligence",
    paragraphs: [
      "Factories are not simple systems. They are living networks of people, machines, materials, methods, systems, suppliers, workflows, exceptions, and decisions.",
      "But most factories still run through disconnected tools and delayed information flows: production reports live in Excel, quality checks sit in logbooks, maintenance actions are tracked manually, safety observations are closed over follow-ups, utility data stays in isolated meters, supplier issues sit outside the operating view, and leadership reviews happen after the opportunity to act has passed.",
      "Df-OS changes this. It brings daily factory execution into one connected Digital Factory Operating System — giving manufacturers the operating layer required for visibility, standardization, workflow automation, traceability, and AI-ready decision-making."
    ]
  },
  whatIsDfOs: {
    title: "One Operating Layer for People, Machines, Materials, Methods, and Decisions",
    description: "Df-OS is a manufacturing-first platform that digitizes and connects factory operations across departments, plants, and systems. It helps manufacturers create process blueprints, configure factory apps, automate workflows, connect machines and software systems, monitor performance, manage deviations, trigger alerts, and create structured factory memory. Built for real manufacturing complexity: shift-based operations, shopfloor execution, quality discipline, safety compliance, machine connectivity, cross-functional accountability, and multi-plant scalability.",
    capabilities: [
      {
        title: "Digitize Manual Inputs",
        description: "Convert paper logbooks, check sheets, inspection forms, audits, and approvals into fast digital records."
      },
      {
        title: "Automate Workflows",
        description: "Route tasks, trigger alerts, manage deviations, coordinate root-cause-analyses (RCA), and complete corrective actions (CAPA)."
      },
      {
        title: "Real-Time Visibility",
        description: "Monitor live operations, KPIs, escalations, shift performance, and multi-plant dashboards from a single control tower."
      },
      {
        title: "Industrial Integrations",
        description: "Integrate ERP (SAP/Oracle), MES, QMS, SCADA, PLCs, utility meters, and sensors into one operating layer."
      },
      {
        title: "Frontline Adoption",
        description: "Designed for shopfloor reality with high-speed mobile layouts (Android/iOS) and complete offline synchronization."
      },
      {
        title: "Factory Memory",
        description: "Turn every process check, deviation, and review into a connected historical log to prepare for AI-driven intelligence."
      }
    ]
  },
  factoryMemory: {
    title: "Because Factories Cannot Become Intelligent Until They Can Remember",
    description: "Every factory has memory. It exists in logbooks, operator experience, inspection records, deviation notes, maintenance actions, batch records, audit findings, quality checks, safety observations, escalation histories, and leadership reviews. But when this memory is scattered, the factory cannot learn from itself. Df-OS turns daily factory activity into structured factory memory.",
    benefits: [
      "Better root-cause visibility",
      "Faster deviation understanding",
      "Stronger audit readiness",
      "Traceable decisions and approvals",
      "Reusable RCA and CAPA history",
      "Pattern recognition across recurring issues",
      "AI-ready operational context for Vish AI"
    ]
  },
  solutions: [
    {
      title: "Production",
      description: "Production logbooks, plan vs actual, OEE, downtime, shift handover, batch tracking, changeover, line performance, output visibility, and daily production reviews."
    },
    {
      title: "Quality",
      description: "Inspections, in-process checks, batch QC, release checks, deviations, CAPA, RCA, FMEA, SPC, supplier quality, traceability, and audit-ready documentation."
    },
    {
      title: "Maintenance",
      description: "Breakdown reporting, preventive maintenance, condition monitoring, MTTR, MTBF, spares, machine health, technician workflows, and equipment reliability."
    },
    {
      title: "Safety / EHS",
      description: "Hazards, incidents, near misses, work permits, HIRA, PPE checks, LOTO, fire safety, safety audits, corrective actions, and compliance workflows."
    },
    {
      title: "Utility / Energy / ESG",
      description: "Energy, water, compressed air, boiler, chiller, HVAC, ETP, STP, consumption trends, sustainability metrics, ESG data, and resource optimization."
    },
    {
      title: "Warehouse & Supply Chain",
      description: "GRN, inventory, FIFO, stock movement, dispatch, inward and outward material tracking, warehouse audits, material availability, and logistics coordination."
    },
    {
      title: "Procurement & Supplier",
      description: "Supplier audits, vendor risk, PO approvals, supplier quality, QAV, documentation, compliance tracking, and supplier collaboration workflows."
    },
    {
      title: "HR / Workforce",
      description: "Attendance, skill matrix, training, onboarding, shift allocation, certification tracking, workforce capability, and operator readiness."
    }
  ],
  industries: [
    {
      id: "fmcg",
      name: "FMCG",
      description: "High-speed production, frequent changeovers, SKU complexity, sanitation, quality checks, utility monitoring, and real-time line performance."
    },
    {
      id: "durables",
      name: "Consumer Durables & Electronics",
      description: "Assembly operations, component traceability, brought-out parts quality, seasonal demand, supplier quality, and multi-factory visibility."
    },
    {
      id: "fnb",
      name: "Food & Beverages",
      description: "Batch consistency, hygiene workflows, CCP monitoring, cleaning validation, process parameters, compliance, and quality release readiness."
    },
    {
      id: "automotive",
      name: "Automotive",
      description: "Supplier quality, component traceability, PQCS, vendor audits, line performance, maintenance reliability, safety, and compliance discipline."
    },
    {
      id: "pharmaceuticals",
      name: "Pharmaceuticals",
      description: "Batch control, documentation, deviation workflows, CAPA, audit trails, equipment readiness, quality checks, compliance, and process discipline."
    },
    {
      id: "other",
      name: "Other Manufacturing",
      description: "Chemicals, cement, heavy manufacturing, packaging, metals, textiles, plastics, industrial equipment, electrical equipment, medical devices, and other process or discrete manufacturing environments."
    }
  ],
  vishAiTeaser: {
    title: "Introducing Vish AI",
    subtitle: "The Manufacturing Intelligence Layer for AI-Ready Factories",
    description: "Df-OS creates the factory memory. Vish AI gives it intelligence. Vish AI helps factory teams ask questions, understand deviations, detect risks, generate summaries, prioritize actions, reuse playbooks, and move from dashboards to decisions.",
    features: [
      {
        title: "Conversational Intelligence",
        description: "Ask natural-language questions across production, quality, maintenance, planning, and utility. (e.g., 'Which batches are at risk today and why?', 'What were the top recurring downtime reasons this week?')"
      },
      {
        title: "Agentic AI Assistants",
        description: "Deploy digital SMEs for factory functions. These agents monitor, reason, recommend, escalate, and support action while keeping human teams in control."
      }
    ]
  },
  outcomes: [
    "Real-time visibility and plan compliance across factory operations",
    "Drastic reductions in OEE losses and breakdown response times",
    "Streamlined quality checks and rapid deviation/CAPA closures",
    "Strengthened safety compliance and work permit tracking",
    "Precise utility/energy tracking to reduce consumption spikes",
    "Seamless audit readiness with structured digital records",
    "Standardized operational reviews across shifts and plants",
    "High frontline shopfloor adoption with mobile and offline app use"
  ],
  whyDfOs: [
    {
      title: "Manufacturing-First",
      description: "Built for real factory conditions — shifts, machines, compliance, frontline users, and cross-functional operations."
    },
    {
      title: "Unified Operating Layer",
      description: "Connects production, quality, maintenance, safety, utility, supply chain, workforce, and reviews in one database."
    },
    {
      title: "Configurable To Your Factory",
      description: "Adapts to plant-specific workflows, approvals, rules, roles, and processes without writing code."
    },
    {
      title: "AI-Ready by Design",
      description: "Structures daily factory execution into operating memory that can power Vish AI-led decision intelligence."
    },
    {
      title: "Disrupt Without Disruption",
      description: "Works with existing SAP/ERP, MES, QMS, PLC, and SCADA systems without requiring expensive replacements."
    }
  ],
  faqs: [
    {
      question: "Is Df-OS an MES or ERP replacement?",
      answer: "No. Df-OS is a Digital Factory Operating System that works alongside your existing ERP and MES. It acts as a connected operating layer to capture shift execution, checklists, approvals, deviations, and offline data that ERPs/MES cannot easily manage, creating one unified record of daily factory truth."
    },
    {
      question: "What is Hectos and how does machine connectivity work?",
      answer: "Hectos is the proprietary edge gateway under X-Konnect. It connects directly to your PLCs, SCADA, meters, and sensors using industrial protocols like OPC UA, Modbus, MQTT, and PROFINET. It normalizes this data and feeds it directly into Df-OS workflows, alarms, and dashboards."
    },
    {
      question: "How does Df-OS make a factory AI-ready?",
      answer: "AI requires structured, contextual data to work. In most factories, data is hidden in papers, Excel, or isolated databases. Df-OS structures your daily checklists, shift notes, machine stoppages, and resolutions into a single database. This creates a 'factory memory' that Vish AI can query and reason over."
    },
    {
      question: "Does the system support offline operations on the shop floor?",
      answer: "Yes. Df-OS has built-in mobile applications (Android & iOS) designed for shopfloor environments. Frontline operators can execute inspections, logs, and checks without an internet connection, and the system automatically syncs records once network connectivity is restored."
    }
  ]
};
