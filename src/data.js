export const projects = [
  {
    id: "01",
    category: "BUSINESS ANALYTICS",
    title: "Cars24 — Power BI business dashboard",
    summary: "An end-to-end analysis of a Cars24 dataset, from data preparation in Power Query to an interactive Power BI dashboard for exploring business performance and decision signals.",
    impact: "Data cleaning → analysis → dashboard",
    stack: ["Power BI", "Power Query", "Data Cleaning", "Data Visualization"],
    visual: "cars24",
    featured: true,
    details: [
      "Prepared and cleaned the Cars24 dataset using Power Query.",
      "Transformed the source data into an analysis-ready model.",
      "Built a Power BI dashboard to explore patterns and support more informed business questions."
    ],
    note: "Dashboard preview uses illustrative sample values. Replace it with screenshots and verified findings from the original report before publishing."
  },
  {
    id: "02",
    category: "BUSINESS ANALYTICS",
    title: "Automated Excel reporting dashboard",
    summary: "A refreshable Excel dashboard designed to make recurring reporting easier, with dashboard views updating when the underlying data is updated.",
    impact: "Less repetitive reporting work",
    stack: ["Advanced Excel", "Excel Reporting", "Dashboard Design", "Data Automation"],
    visual: "excel",
    details: [
      "Designed an Excel dashboard to present recurring business information in a clear visual format.",
      "Set up an update workflow so the dashboard can reflect changes in its source data.",
      "Focused on making routine reporting easier to refresh and interpret."
    ],
    note: "Preview is illustrative. Add a sanitized screenshot of the workbook and confirm the exact refresh method before publishing."
  },
  {
    id: "03",
    category: "AI AUTOMATION",
    title: "Insurance workflow harness",
    summary: "Reusable automation workflows designed to streamline motor-insurance operations, from quotation preparation through approval-dependent steps.",
    impact: "Reported quotation turnaround: ~15 min → under 1 min",
    stack: ["Python", "JavaScript", "Workflow Orchestration", "JSON"],
    visual: "insurance",
    featured: true,
    details: [
      "Designed reusable workflow patterns for a motor line of business.",
      "Automated repetitive operational steps with human approval where required.",
      "Structured workflows to support future line-of-business expansion."
    ],
    note: "Metrics are based on reported project experience. Do not publish confidential employer data, customer information, or internal screenshots."
  },
  {
    id: "04",
    category: "ERP ENGINEERING",
    title: "Inventory management ERP",
    summary: "A traceable inventory workflow connecting vendors, warehouses, sites, and stock movements in one operational model.",
    impact: "Centralized movement visibility",
    stack: ["Google Apps Script", "JavaScript", "HTML", "Google Sheets"],
    visual: "inventory",
    details: [
      "Designed transaction-oriented inventory movement records.",
      "Connected warehouse and site workflows with movement traceability.",
      "Focused on operational clarity and reliable stock history."
    ]
  },
  {
    id: "05",
    category: "PRODUCT / POS",
    title: "Meal service platform",
    summary: "An operations platform concept for meal subscriptions, customers, payments, and daily delivery tracking.",
    impact: "One view of daily operations",
    stack: ["Google Sheets", "Apps Script", "Dashboards", "CRM"],
    visual: "meal",
    details: [
      "Mapped customer, subscription, payment, and delivery records.",
      "Designed daily operational dashboard metrics for lunch and dinner.",
      "Explored automation to improve customer retention and delivery coordination."
    ]
  },
  {
    id: "06",
    category: "COMPUTER VISION",
    title: "Touchless Cursor",
    summary: "A hands-free desktop interaction prototype using webcam-based hand gestures to move and control the cursor.",
    impact: "Gesture → cursor interaction",
    stack: ["Python", "MediaPipe", "OpenCV", "PyAutoGUI"],
    visual: "cursor",
    details: [
      "Used hand landmarks to recognize gestures.",
      "Mapped gestures to cursor movement and actions.",
      "Explored accessible, touch-free interaction patterns."
    ]
  }
];

export const experience = [
  {
    date: "JUN 2026 — AUG 2026",
    role: "Artificial Intelligence Trainer",
    company: "Agribook Tech Solutions And Allied Services Pvt. Ltd.",
    type: "Internship · Bhopal",
    points: [
      "Built an enterprise automation harness with 20+ reusable workflows for motor-insurance operations.",
      "Reportedly reduced quotation turnaround from around 15 minutes to under one minute.",
      "Automated repetitive operational steps and reporting while retaining human approval at defined checkpoints."
    ]
  },
  {
    date: "OCT 2025 — JUL 2026",
    role: "Full Stack Developer",
    company: "ECH Business Solution",
    type: "Internship · Remote",
    points: [
      "Developed an inventory ERP module connecting vendors, warehouses, sites, and stock movements.",
      "Designed transaction-based data flows to improve stock visibility and movement traceability.",
      "Worked across process requirements, data models, and workflow automation using Google Apps Script and Sheets."
    ]
  },
  {
    date: "APR 2025 — MAY 2025",
    role: "Data Analyst",
    company: "Elevate Labs",
    type: "Internship · Remote",
    points: [
      "Performed data cleaning, exploratory analysis, SQL querying, and dashboard design.",
      "Led a LinkedIn job-trend analysis using web scraping to examine job-market signals.",
      "Recognized as a Best Performer."
    ]
  }
];

export const skills = [
  { name: "Advanced Excel", group: "Analytics & Reporting" },
  { name: "Power BI", group: "Analytics & Reporting" },
  { name: "Power Query", group: "Analytics & Reporting" },
  { name: "Data Cleaning", group: "Analytics & Reporting" },
  { name: "Exploratory Data Analysis", group: "Analytics & Reporting" },
  { name: "Data Visualization", group: "Analytics & Reporting" },
  { name: "Descriptive Statistics", group: "Analytics & Reporting" },
  { name: "Web Analytics", group: "Analytics & Reporting" },
  { name: "Google Looker Studio", group: "Analytics & Reporting" },
  { name: "SQL / SQLite", group: "Analytics & Reporting" },
  { name: "Excel Reporting Automation", group: "Analytics & Reporting" },

  { name: "Process Mapping", group: "Operations" },
  { name: "Workflow Design", group: "Operations" },
  { name: "Operational Reporting", group: "Operations" },
  { name: "KPI Monitoring", group: "Operations" },
  { name: "Inventory & ERP Workflows", group: "Operations" },
  { name: "POS & CRM Workflows", group: "Operations" },
  { name: "Process Improvement", group: "Operations" },

  { name: "Market Research Fundamentals", group: "Business Foundations" },
  { name: "Marketing Fundamentals", group: "Business Foundations" },
  { name: "Customer Journey Understanding", group: "Business Foundations" },
  { name: "Sales Funnel Analysis", group: "Business Foundations" },
  { name: "Pipeline & Lead Tracking", group: "Business Foundations" },
  { name: "Business Model Thinking", group: "Business Foundations" },
  { name: "Entrepreneurial Problem-Solving", group: "Business Foundations" },

  { name: "Python", group: "Technology & Automation" },
  { name: "Google Apps Script", group: "Technology & Automation" },
  { name: "JavaScript", group: "Technology & Automation" },
  { name: "HTML & CSS", group: "Technology & Automation" },
  { name: "Supabase & PostgreSQL", group: "Technology & Automation" },
  { name: "REST API Integration", group: "Technology & Automation" },
  { name: "n8n", group: "Technology & Automation" },
  { name: "AI Workflow Harnesses", group: "Technology & Automation" },
  { name: "Git & GitHub", group: "Technology & Automation" },
  { name: "Microsoft 365", group: "Technology & Automation" }
];

export const awards = [
  { year: "2026", title: "Runner-Up — Crack the Case", detail: "Criminal Case Investigation · Jagran Lakecity University" },
  { year: "2025", title: "1st Place — Lights, Camera & Ads", detail: "Sagar Exuberance 4.0 · SISTec" },
  { year: "2025", title: "Winner — Ideathon", detail: "Global Entrepreneurship Week · CII" },
  { year: "2025", title: "Certificate of Distinction", detail: "TERI Green Olympiad for Youth · 96% score" },
  { year: "2025", title: "Chancellor’s Scholarship Award", detail: "Jagran Lakecity University" },
  { year: "2024", title: "Outstanding Talent", detail: "Deltron Technologies Pvt. Ltd." }
];

export const certifications = [
  "Deloitte — Data Analytics Job Simulation",
  "IBM — Data Fundamentals",
  "From Excel to Power BI — Knowledge Accelerators",
  "Power BI for Beginners — Simplilearn",
  "Bank of America — Investment Banking Job Simulation",
  "Infosys Springboard — Introduction to Business Intelligence",
  "Kaggle — Intro to Programming",
  "Accenture Nordics — Consultant Job Simulation",
  "JPMorganChase — Quantitative Research Job Simulation",
  "NAL Academy — Certificate Program in Mutual Funds"
];
