export const projects = [
  {
    id: "01",
    category: "AI AUTOMATION",
    title: "Insurance workflow harness",
    summary: "Reusable automation workflows designed to streamline motor-insurance operations, from quotation preparation through approval-dependent steps.",
    impact: "Reported quotation turnaround: ~15 min → under 1 min",
    stack: ["Python", "JavaScript", "Workflow orchestration", "JSON"],
    visual: "insurance",
    featured: true,
    details: [
      "Designed reusable workflow patterns for a motor line of business.",
      "Automated repetitive operational steps with human approval where required.",
      "Structured workflows to support future line-of-business expansion."
    ],
    note: "Metrics are based on the user's reported experience. Do not publish confidential employer data or internal screenshots."
  },
  {
    id: "02",
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
    id: "03",
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
    id: "04",
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
  },
  {
    id: "05",
    category: "DATA ANALYTICS",
    title: "Job trends & market analytics",
    summary: "A data analysis project exploring LinkedIn job trends using web scraping and structured market analysis.",
    impact: "From raw listings to insights",
    stack: ["Python", "SQL", "Data cleaning", "Visualization"],
    visual: "analytics",
    details: [
      "Collected and structured job-market data.",
      "Cleaned data to make roles and skills easier to compare.",
      "Used analysis to identify patterns in job demand."
    ]
  },
  {
    id: "06",
    category: "HACKATHON PROTOTYPE",
    title: "Doc’s Eye",
    summary: "A healthcare-themed hackathon prototype developed by a team in 24 hours at Navonmesh 2026.",
    impact: "Built in a 24-hour sprint",
    stack: ["Prototype", "Conversational UX", "Health tracking"],
    visual: "docs",
    details: [
      "Explored medical-report scanning with general informational guidance.",
      "Proposed a conversational support experience and body-activity tracking.",
      "The original project files were lost after a malware incident; this is a retrospective case study, not a live service."
    ],
    note: "Prototype only. Not medical advice, not a deployed medical product."
  }
];

export const experience = [
  {
    date: "JUN 2026 — AUG 2026",
    role: "Artificial Intelligence Trainer",
    company: "Agribook Tech Solutions And Allied Services Pvt. Ltd.",
    type: "Internship · Bhopal",
    points: [
      "Built an enterprise AI harness with 20+ reusable automation workflows.",
      "Reportedly reduced quotation turnaround from around 15 minutes to under one minute.",
      "Automated repetitive motor-insurance operational steps and reporting workflows."
    ]
  },
  {
    date: "OCT 2025 — JUL 2026",
    role: "Full Stack Developer",
    company: "ECH Business Solution",
    type: "Internship · Remote",
    points: [
      "Developed an inventory ERP module with Google Apps Script, HTML, JavaScript, and Google Sheets.",
      "Connected vendors, warehouses, sites, and employee workflows with movement traceability.",
      "Worked on transaction-based data models and operational automation."
    ]
  },
  {
    date: "APR 2025 — MAY 2025",
    role: "Data Analyst",
    company: "Elevate Labs",
    type: "Internship · Remote",
    points: [
      "Worked on data cleaning, exploratory analysis, SQL queries, and dashboard design.",
      "Led a LinkedIn job-trend analysis using web scraping and market analytics.",
      "Recognized as a Best Performer."
    ]
  }
];

export const skills = [
  { name: "Python", group: "Analytics" },
  { name: "Advanced Excel", group: "Analytics" },
  { name: "Power BI", group: "Analytics" },
  { name: "Data Cleaning", group: "Analytics" },
  { name: "Exploratory Data Analysis", group: "Analytics" },
  { name: "Data Visualization", group: "Analytics" },
  { name: "Google Looker Studio", group: "Analytics" },
  { name: "SQLite", group: "Analytics" },
  { name: "JavaScript", group: "Development" },
  { name: "HTML", group: "Development" },
  { name: "CSS", group: "Development" },
  { name: "Google Apps Script", group: "Development" },
  { name: "Supabase", group: "Development" },
  { name: "PostgreSQL", group: "Development" },
  { name: "REST API Integration", group: "Development" },
  { name: "Git & GitHub", group: "Development" },
  { name: "VS Code", group: "Development" },
  { name: "Jupyter Notebook", group: "Development" },
  { name: "Workflow Design", group: "Automation" },
  { name: "AI Harnesses", group: "Automation" },
  { name: "Process Automation", group: "Automation" },
  { name: "ERP Workflows", group: "Automation" },
  { name: "POS & CRM Workflows", group: "Automation" },
  { name: "n8n", group: "Automation" },
  { name: "Data Modeling", group: "Automation" },
  { name: "Power Query", group: "Data Tools" },
  { name: "Microsoft 365", group: "Data Tools" },
  { name: "Google Sheets", group: "Data Tools" },
  { name: "Excel Reporting", group: "Data Tools" },
  { name: "Dashboard Design", group: "Data Tools" }
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
