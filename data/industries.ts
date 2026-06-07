export interface IndustryDetail {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  workflows: string[];
  outcomes: string[];
}

export const industriesPageData = {
  seo: {
    title: "Industries Served by Df-OS | Digital Factory Operating System",
    description: "Df-OS serves FMCG, consumer durables, electronics, food & beverages, automotive, pharmaceuticals, and other manufacturing industries with AI-ready factory digitalization, workflow automation, IoT visibility, and operational intelligence.",
  },
  hero: {
    eyebrow: "Industries We Serve",
    headline: "Built for Every Factory. Configured for Every Industry.",
    subheadline: "Df-OS helps manufacturers digitize, automate, connect, and optimize factory operations across industries — from FMCG and automotive to pharmaceuticals, electronics, food & beverages, and other complex manufacturing environments.",
    supportingCopy: "Every industry operates differently. Every factory has its own processes, machines, materials, methods, compliance needs, workforce realities, and performance priorities. Df-OS is built for this complexity. As an AI-ready Digital Factory Operating System, Df-OS adapts to each factory’s unique operating model while creating one connected layer across departments and reviews."
  },
  positioning: {
    title: "One Digital Factory Operating System. Multiple Manufacturing Realities.",
    description: "Manufacturing is not one industry. It is a world of different operating environments. An FMCG plant operates with high-speed lines and frequent changeovers. A consumer electronics factory depends on assembly accuracy, traceability, and supplier quality. A food and beverage plant must manage hygiene, batch consistency, quality checks, and compliance. An automotive manufacturer needs supplier control, component traceability, line performance, and quality discipline. A pharmaceutical plant runs on documentation, audit readiness, batch control, and process compliance.",
    body: "Df-OS is designed to support these different realities through configurable workflows, ready-to-use process modules, system integrations, IoT connectivity, dashboards, alerts, deviation workflows, escalation matrices, and factory memory. It helps manufacturers move from fragmented operations to connected intelligence — without disrupting existing systems."
  },
  list: [
    {
      id: "fmcg",
      name: "FMCG",
      subtitle: "Digitize high-speed, high-volume manufacturing operations.",
      description: "FMCG factories operate under constant pressure to deliver speed, consistency, efficiency, quality, safety, and cost control across fast-moving production environments. Frequent changeovers, multiple SKUs, production planning, quality checks, sanitation, utility usage, workforce coordination, and real-time line visibility are critical to daily performance.",
      workflows: [
        "Production monitoring and plan vs actual tracking",
        "OEE, downtime, and line performance visibility",
        "Batch and SKU-level traceability",
        "Changeover and sanitation workflows",
        "Quality inspections and in-process checks",
        "CCP monitoring and process parameter checks",
        "Utility, energy, water, boiler, chiller, ETP, and STP monitoring",
        "Safety observations, incidents, and compliance actions",
        "Shift handover and daily review automation",
        "Factory Control Tower and multi-plant visibility"
      ],
      outcomes: [
        "Faster production reviews",
        "Reduced manual reporting",
        "Better changeover discipline",
        "Improved quality and compliance visibility",
        "Stronger safety and sanitation control",
        "AI-ready factory memory across daily operations"
      ]
    },
    {
      id: "durables",
      name: "Consumer Durables & Electronics",
      subtitle: "Connect assembly, quality, maintenance, and supplier-driven operations.",
      description: "Consumer durables and electronics manufacturers operate across complex assembly lines, component-level traceability, brought-out parts quality, seasonal demand fluctuations, warranty expectations, and supplier-dependent production. Disconnected data across production, quality, maintenance, stores, suppliers, and sustainability makes it difficult to respond quickly during peak demand cycles.",
      workflows: [
        "Production plan vs actual monitoring",
        "Line-wise OEE and throughput tracking",
        "Component and product traceability",
        "Brought-out parts quality checks",
        "SPC and quality trend analysis",
        "Supplier quality workflows",
        "Breakdown and preventive maintenance",
        "Spare parts and store workflows",
        "ESG and sustainability data capture",
        "Digital lockers, documentation, and audit readiness",
        "Multi-factory dashboards and leadership reporting"
      ],
      outcomes: [
        "Better production compliance",
        "Faster response to quality issues",
        "Improved traceability from component to finished product",
        "Reduced manual coordination across departments",
        "Stronger supplier and store visibility",
        "Faster rollouts across multiple factories"
      ]
    },
    {
      id: "fnb",
      name: "Food & Beverages",
      subtitle: "Improve batch control, hygiene discipline, quality checks, and compliance.",
      description: "Food and beverage factories must manage consistency, hygiene, safety, quality, traceability, shelf-life sensitivity, equipment cleaning, production planning, and regulatory expectations. Paper-based records, delayed quality checks, manual sanitation logs, and disconnected production data can create serious operational and compliance risks.",
      workflows: [
        "Batch production records",
        "Recipe and process parameter monitoring",
        "In-process quality checks",
        "CCP and critical parameter monitoring",
        "Cleaning and sanitation workflows",
        "Changeover verification",
        "Material and batch traceability",
        "Rejection and giveaway tracking",
        "Equipment maintenance and breakdown reporting",
        "Utility and cold-chain related monitoring",
        "Compliance audits and digital documentation",
        "Shift-wise production and quality reviews"
      ],
      outcomes: [
        "Stronger batch traceability",
        "Faster quality release confidence",
        "Better hygiene and sanitation compliance",
        "Reduced manual documentation burden",
        "Improved visibility across production and quality teams",
        "Better audit readiness and process accountability"
      ]
    },
    {
      id: "automotive",
      name: "Automotive",
      subtitle: "Strengthen supplier quality, traceability, line performance, and compliance.",
      description: "Automotive and auto-component manufacturing depends on precision, supplier coordination, part traceability, production discipline, quality control, maintenance reliability, and compliance with industry standards. Frequent material transactions, supplier variability, Excel-based quality checks, delayed audit records, and disconnected factory systems can create quality, delivery, and compliance risks.",
      workflows: [
        "Supplier quality management",
        "Vendor audits and QAV workflows",
        "PQCS digitization",
        "Component-level traceability",
        "Incoming and in-process quality checks",
        "Non-conformance and CAPA tracking",
        "Line performance and OEE monitoring",
        "Breakdown and preventive maintenance workflows",
        "Fire and safety compliance",
        "Escalation engine and action tracking",
        "Audit documentation and compliance readiness",
        "Multi-site supplier collaboration"
      ],
      outcomes: [
        "Better supplier visibility",
        "Faster audit cycles",
        "Improved quality documentation",
        "Reduced manual errors",
        "Stronger component traceability",
        "Better action closure and compliance discipline"
      ]
    },
    {
      id: "pharmaceuticals",
      name: "Pharmaceuticals",
      subtitle: "Digitize compliance-heavy factory operations with traceability and control.",
      description: "Pharmaceutical manufacturing requires high levels of process discipline, documentation control, batch traceability, quality assurance, audit readiness, equipment validation, safety, and regulatory compliance. Manual records, delayed deviations, disconnected quality documentation, and weak approval trails can create compliance risk and slow down decision-making.",
      workflows: [
        "Batch records and production logbooks",
        "Quality checks and inspection workflows",
        "Deviation, RCA, and CAPA workflows",
        "Equipment cleaning and line clearance checks",
        "Preventive maintenance and calibration tracking",
        "Audit trails and approval workflows",
        "SOP compliance and digital documentation",
        "Environmental and utility parameter monitoring",
        "Safety, EHS, and permit workflows",
        "Training, skill matrix, and workforce readiness",
        "Compliance dashboards and leadership reporting"
      ],
      outcomes: [
        "Stronger compliance visibility",
        "Faster deviation closure",
        "Improved audit readiness",
        "Better batch and process traceability",
        "Reduced dependency on manual records",
        "Structured factory memory for quality and compliance intelligence"
      ]
    },
    {
      id: "other",
      name: "Other Manufacturing Industries",
      subtitle: "A configurable operating layer for every manufacturing environment.",
      description: "Df-OS is built to serve the broader manufacturing ecosystem beyond the core industries listed above. Because every factory has interdependent operations across people, machines, materials, methods, systems, and decisions, Df-OS can be configured for a wide range of manufacturing environments.",
      workflows: [
        "Process digitization and workflow automation",
        "Machine and IoT connectivity",
        "Maintenance and utility monitoring",
        "Quality and compliance workflows",
        "Safety and EHS digitization",
        "Warehouse, inventory, procurement, and supplier processes",
        "Real-time dashboards, deviation, and escalation management",
        "Factory Control Tower visibility",
        "AI-ready operating records for Vish AI"
      ],
      outcomes: [
        "Connected factory operations",
        "Faster visibility and response",
        "Reduced manual and Excel-based processes",
        "Improved standardization across plants",
        "Better operational resilience",
        "Scalable digital transformation without disruption"
      ]
    }
  ] as IndustryDetail[],
  whyWorks: {
    title: "Why Df-OS Works Across Industries",
    points: [
      {
        title: "Built for Manufacturing Complexity",
        description: "Df-OS is not limited to one industry or department. It is built around the common operating logic of factories: people, machines, materials, methods, workflows, exceptions, and decisions."
      },
      {
        title: "Configurable to Every Factory",
        description: "Every factory has its own way of working. Df-OS adapts to industry-specific processes, plant-specific workflows, approval structures, and compliance needs."
      },
      {
        title: "400+ Process Workflows",
        description: "Df-OS supports 400+ manufacturing processes and includes 100+ ready-to-use process modules that can be configured for specific factory environments."
      },
      {
        title: "Works With Existing Systems",
        description: "Df-OS integrates with existing ERP, MES, QMS, PLC, SCADA, IoT, machines, and sensors, enabling digital modernization without rip-and-replace disruption."
      }
    ]
  },
  challenges: [
    "Paper, Excel, and WhatsApp-based operations",
    "Delayed visibility into factory performance",
    "Manual follow-ups and duplicated reporting",
    "Disconnected production, quality, maintenance, safety, and utility teams",
    "Poor traceability across materials, batches, machines, suppliers, and actions",
    "Slow deviation, RCA, and CAPA closure",
    "Reactive maintenance and breakdown handling",
    "Weak safety and EHS reporting",
    "Compliance and audit documentation gaps",
    "Difficulty scaling digital transformation across plants",
    "Data that exists but is not ready for AI-led decision-making"
  ]
};
