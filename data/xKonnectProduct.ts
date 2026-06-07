export const xKonnectProductData = {
  seo: {
    title: "X-Konnect | Industrial IoT Middleware & Edge Gateway for Connected Factories",
    description: "X-Konnect is an Industrial IoT middleware platform that connects machines, PLCs, sensors, and industrial systems with Df-OS through the Hectos Edge Gateway, enabling real-time factory visibility, IoT workflows, alerts, dashboards, and Vish AI-powered intelligence.",
  },
  hero: {
    eyebrow: "X-Konnect | Industrial IoT Connectivity Layer",
    headline: "Connect Machines to Factory Intelligence",
    subheadline: "X-Konnect connects machines, PLCs, sensors, and industrial systems with Df-OS enabling real-time machine data capture, IoT-powered workflows, dashboards, alerts, and AI-ready factory intelligence.",
    supportingCopy: "Powered by the proprietary Hectos Edge Gateway, X-Konnect helps manufacturers bring live shopfloor data into the Digital Factory Operating System without major infrastructure changes. It enables machine signals, utility readings, process parameters, alarms, and production events to become part of Df-OS workflows, reports, control towers, and Vish AI-led decisions.",
    trustLine: "From machine signals to operational intelligence — without disrupting existing factory infrastructure."
  },
  positioning: {
    title: "The IoT Middleware Layer for Df-OS",
    description: "Factories generate critical machine and process data every second. But in many manufacturing environments, this data remains locked inside machines, PLCs, SCADA systems, sensors, meters, and shopfloor equipment. It may be visible locally, but it is not always connected to workflows, dashboards, deviations, maintenance actions, quality checks, utility monitoring, or leadership reviews.",
    body: "X-Konnect solves this connectivity gap. It works as the Industrial IoT middleware layer between shopfloor assets and Df-OS, helping manufacturers capture machine and sensor data and convert it into usable operating intelligence. Inside Df-OS, this data can power real-time dashboards, automated workflows, alerts, escalation matrices, deviation management, reports, factory control towers, and Vish AI decision intelligence."
  },
  hectos: {
    title: "Proprietary Edge Gateway for Industrial Connectivity",
    description: "Hectos is the proprietary edge gateway under X-Konnect, designed to connect machines, PLCs, sensors, meters, and industrial systems with Df-OS. It helps collect, normalize, and transmit shopfloor data from industrial assets to the digital factory layer without requiring manufacturers to replace existing machines or make large-scale changes to current infrastructure. Hectos enables factories to connect both legacy and modern shopfloor assets into a unified operating environment.",
    captures: [
      "Machine status (running, idle, stopped)",
      "Runtime, idle time, and downtime signals",
      "Cycle time and production counts",
      "Alarm and fault signals",
      "Process parameters (temperature, pressure, flow, humidity, vibration)",
      "Energy and utility consumption (power, water, gas)",
      "Equipment health indicators and line-level events",
      "Sensor and meter readings"
    ]
  },
  connectivity: {
    title: "Built for Diverse Manufacturing Environments",
    description: "X-Konnect is designed to connect a wide range of machines, equipment, PLCs, sensors, and industrial systems commonly used across manufacturing plants.",
    assets: [
      "CNC, VMC, and HMC machines",
      "Injection molding machines",
      "Packaging and filling machines",
      "Assembly lines and conveyors",
      "Press, stamping, welding, and cutting machines",
      "Robotic cells and pick-and-place systems",
      "Furnaces, ovens, boilers, and chillers",
      "Compressors, pumps, motors, HVAC systems, and DG sets",
      "ETP and STP systems",
      "Weighing scales and utility meters",
      "Vision systems and inspection equipment",
      "Energy, water, air, temperature, pressure, flow, level, vibration, and environmental sensors"
    ],
    protocols: [
      "OPC UA / OPC DA",
      "Modbus TCP / Modbus RTU",
      "MQTT / WebSockets",
      "Ethernet/IP / PROFINET / PROFIBUS",
      "EtherCAT / CAN bus / CANopen / DeviceNet",
      "BACnet / HART / IO-Link",
      "RS-232 / RS-485 / TCP/IP / Serial",
      "HTTP / HTTPS / REST APIs / FTP / SFTP / SNMP",
      "Siemens S7 communication / Mitsubishi MC Protocol / Omron FINS",
      "Allen-Bradley / Rockwell communication interfaces",
      "Digital & Analog inputs/outputs / Relay-based signals / Pulse counters"
    ],
    note: "Note: The exact protocol list is validated by the Df-OS engineering team for each deployment."
  },
  workflowIntegration: {
    title: "Connect. Capture. Contextualize.",
    description: "X-Konnect brings machine and industrial data into Df-OS, where it becomes part of the factory’s digital operating layer. Once connected, machine data is no longer limited to isolated screens or local systems. It can be used inside factory workflows, dashboards, alerts, deviations, reports, maintenance processes, quality checks, utility monitoring, and leadership views.",
    points: [
      "Real-time machine dashboards",
      "OEE and production monitoring",
      "Downtime event capture",
      "Utility and energy monitoring",
      "Abnormal condition alerts",
      "Quality parameter monitoring",
      "Maintenance task triggers",
      "Deviation workflows",
      "Escalation matrix activation",
      "Control-tower visibility",
      "Multi-plant performance tracking",
      "AI-ready factory memory for Vish AI"
    ]
  },
  vishAi: {
    title: "Give Vish AI Live Machine Context",
    description: "Vish AI becomes more powerful when it can reason over live and historical machine data. X-Konnect brings machine signals, alarms, downtime events, sensor readings, utility data, and process parameters into Df-OS. Vish AI can then use this connected operating record to explain deviations, detect recurring patterns, predict risks, prioritize actions, and support faster decisions.",
    questions: [
      "Why did this line lose output during the last shift?",
      "Which machine had abnormal downtime this week?",
      "Which alarm repeated before the breakdown?",
      "Which process parameter changed before the quality issue?",
      "Which utility reading crossed limits before the deviation?",
      "Which asset is showing early signs of failure?",
      "Did energy consumption increase during idle time?",
      "Which machine condition is linked to recurring defects?"
    ]
  },
  useCases: [
    {
      title: "OEE & Production Monitoring",
      description: "Capture runtime, idle time, cycle time, production counts, downtime events, stoppages, and machine-level performance data to improve production visibility and execution control."
    },
    {
      title: "Downtime & Breakdown Intelligence",
      description: "Connect machine alarms, fault signals, stoppage events, and breakdown indicators with Df-OS workflows to improve downtime tracking, RCA, and maintenance response."
    },
    {
      title: "Predictive & Preventive Maintenance",
      description: "Monitor temperature, vibration, current, runtime, alarms, equipment health indicators, and recurring asset patterns to support proactive maintenance workflows."
    },
    {
      title: "Utility & Energy Monitoring",
      description: "Connect energy meters, water meters, compressed air systems, boilers, chillers, HVAC, DG sets, ETP, STP, and other utility assets for real-time resource visibility and optimization."
    },
    {
      title: "Process Parameter Monitoring",
      description: "Capture critical process values such as temperature, pressure, flow, speed, humidity, weight, and machine conditions that may impact quality and compliance."
    },
    {
      title: "Safety & Environmental Monitoring",
      description: "Connect gas sensors, area sensors, environmental sensors, alarms, and safety-critical equipment signals to improve risk visibility and response."
    },
    {
      title: "Factory Control Tower",
      description: "Feed real-time machine and utility data into Df-OS dashboards and control-tower views for plant-level, department-level, and multi-site visibility."
    }
  ],
  whyXKonnect: [
    {
      title: "Powered by Hectos Edge Gateway",
      description: "Hectos enables edge-level machine data capture, signal normalization, and secure transmission into the Df-OS platform."
    },
    {
      title: "Works Without Infrastructure Disruption",
      description: "X-Konnect helps manufacturers connect existing legacy and modern assets and systems without forcing a rip-and-replace transformation model."
    },
    {
      title: "More Than Dashboards",
      description: "Machine data captured through X-Konnect is connected to Df-OS. It can trigger workflows, alerts, deviations, and escalation matrices directly."
    },
    {
      title: "Strengthens the AI Factory Stack",
      description: "By bringing live industrial data into Df-OS, X-Konnect enriches the factory memory that Vish AI uses for answers, explanations, predictions, and action support."
    }
  ],
  outcomes: [
    "Real-time machine and utility visibility",
    "Faster detection of downtime and abnormal conditions",
    "Better OEE and production performance tracking",
    "Improved maintenance response and equipment reliability",
    "Stronger process parameter monitoring",
    "Better energy and utility optimization",
    "Improved quality and safety visibility",
    "Reduced dependency on manual machine data entry",
    "Connected dashboards, alerts, and workflows inside Df-OS",
    "Richer factory memory for Vish AI-led intelligence",
    "IoT-enabled digital transformation without disrupting existing infrastructure"
  ]
};
