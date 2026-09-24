export const personalInfo = {
  name: "Albert Nadar",
  headline: "Senior Analytics Engineer | Semantic Layer & Metrics Modeling | Snowflake | dbt | Looker | SQL | Python",
  shortHeadline: "Senior Analytics Engineer",
  location: "Mumbai, Maharashtra, India",
  email: "albertnsql@gmail.com",
  linkedin: "https://www.linkedin.com/in/albertn97",
  github: "https://github.com/albertnsql",
  resume: "/Albert_Nadar_Senior_Analytics_Engineer_7YOE.pdf",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const impactMetrics = [
  {
    value: 30,
    suffix: "%",
    label: "Faster Reporting Turnaround",
    description: "Through scalable Looker dashboards and semantic models",
    icon: "TrendingUp" as const,
  },
  {
    value: 45,
    suffix: "%",
    label: "Dashboard Performance Gain",
    description: "Optimized Snowflake SQL, Explores and joins",
    icon: "Zap" as const,
  },
  {
    value: 1,
    suffix: "M+",
    label: "Customers in LTV Models",
    description: "Analytics infrastructure for Finance, Product and Marketing",
    icon: "Users" as const,
  },
  {
    value: 20,
    suffix: "+",
    label: "Dashboards & Semantic Models",
    description: "Across Finance, Operations, Supply Chain and more",
    icon: "LayoutDashboard" as const,
  },
] as const;

export const capabilities = [
  {
    number: "01",
    title: "Analytics Engineering",
    description:
      "Building robust, tested, and documented data transformations with dbt and SQL that power reliable analytics across the organization.",
    icon: "Database" as const,
  },
  {
    number: "02",
    title: "Semantic Layers & Metrics",
    description:
      "Designing LookML-based semantic layers and metric definitions that create a single source of truth for business intelligence.",
    icon: "Layers" as const,
  },
  {
    number: "03",
    title: "Data Platforms",
    description:
      "Architecting end-to-end data platforms from ingestion to visualization — Snowflake warehouses, ETL/ELT pipelines, and governance frameworks.",
    icon: "Server" as const,
  },
  {
    number: "04",
    title: "AI-Powered Analytics",
    description:
      "Building LLM gateways and natural language interfaces that let users query trusted data using conversational AI.",
    icon: "Brain" as const,
  },
] as const;

export const projects = {
  semanticGateway: {
    slug: "semantic-gateway",
    title: "SemanticGateway",
    shortDescription:
      "A governed semantic layer between natural language queries and your DuckDB warehouse. No hallucinated joins. No metric misuse. No grain violations.",
    longDescription:
      "SemanticGateway translates natural language into validated SQL. The LLM handles intent extraction and narrative generation only — the actual SQL comes from MetricFlow, a governed semantic layer that knows metric definitions, entity relationships, and valid dimension combinations. Every query goes through a semantic validator and an LLM SQL reviewer before a single byte hits DuckDB.",
    status: "Live Project" as const,
    tags: ["FastAPI", "dbt", "MetricFlow", "DuckDB", "React", "Gemini 3.1"],
    categories: ["AI", "Analytics Engineering", "Data Architecture"],
    featured: true,
    architectureFlow: [
      { id: "intent", label: "Intent Extraction", description: "Extracts metric, dimensions, and filters" },
      { id: "validator", label: "Semantic Validation", description: "Validates dimensions against registry" },
      { id: "cache", label: "SQL Cache (L1)", description: "Checks template cache to bypass MetricFlow" },
      { id: "metricflow", label: "MetricFlow CLI", description: "Generates governed SQL from manifest" },
      { id: "review", label: "SQL Review", description: "Checks for grain violations and filters" },
      { id: "exec", label: "DuckDB Execution", description: "Runs query against warehouse" },
      { id: "narrative", label: "Narrative Gen", description: "Summarizes results into insights" },
    ],
    engineeringHighlights: [
      "Built a multi-LLM fallback chain (Cerebras → Google → Groq) abstracted behind an OpenAI-compatible interface to keep the pipeline resilient.",
      "Implemented a two-layer caching system: an L1 SQL template cache that survives restarts and an L2 SHA256-keyed result cache.",
      "Designed a semantic validator that checks requested dimensions against the MetricFlow registry, failing fast with a clear error instead of generating bad SQL.",
      "Injected schema knowledge (grain definitions, physical column names) into prompts at runtime via a custom skills loader for accurate speculative SQL review."
    ],
    liveDemo: "https://semanticgateway.vercel.app",
    github: "https://github.com/albertnsql/semantic-gateway",
  },
  lookmlAuditor: {
    slug: "lookml-auditor",
    title: "LookML Auditor",
    shortDescription:
      "Static analysis tool for Looker projects. Catch broken references, duplicate definitions, and join integrity issues before they reach production.",
    longDescription:
      "LookML Auditor scans your entire LookML project and tells you what's broken, what's redundant, and what's making your dashboards wrong. Point it at a GitHub repo, a local folder, or a ZIP upload to get a health score (0-100), a ranked issue list with file and line numbers, and enough context to fix issues. The backend parser uses custom regex rather than AST parsing to handle real-world LookML files efficiently.",
    tags: ["React", "Vite", "FastAPI", "LookML Parser", "Python"],
    categories: ["Developer Tooling", "Static Analysis"],
    liveDemo: "https://lookml-auditor-web.vercel.app",
    github: "https://github.com/albertnsql/lookml-auditor-web",
    healthScore: 88,
    checks: [
      { label: "Broken references", status: "pass" as const },
      { label: "Duplicate definitions", status: "pass" as const },
      { label: "Join integrity", status: "warning" as const },
      { label: "Field quality", status: "warning" as const },
    ],
    engineeringHighlights: [
      "Built a custom regex-based LookML parser covering views, explores, joins, and field-level SQL.",
      "Designed a ratio-based health-scoring model (0-100) with severity caps so critical explore-breaking errors immediately drag down the score.",
      "Implemented a file-system access API mode to securely analyze local LookML projects without uploading code.",
      "Published and distributed the tool via LinkedIn, Medium, and Reddit; used it as a credibility signal in outreach to data leads."
    ],
  },
} as const;

export const technologies = {
  analytics: {
    label: "Analytics",
    items: [
      { name: "Snowflake", color: "#29B5E8" },
      { name: "dbt", color: "#FF694A" },
      { name: "Looker", color: "#4285F4" },
      { name: "LookML", color: "#6C63FF" },
    ],
  },
  engineering: {
    label: "Engineering",
    items: [
      { name: "SQL", color: "#336791" },
      { name: "Python", color: "#3776AB" },
      { name: "FastAPI", color: "#009688" },
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#000000" },
    ],
  },
  ai: {
    label: "AI",
    items: [
      { name: "LLMs", color: "#8B5CF6" },
      { name: "Natural Language Analytics", color: "#6366F1" },
      { name: "LLM Gateway", color: "#7C3AED" },
      { name: "AI-Powered Analytics", color: "#4F46E5" },
    ],
  },
} as const;

export const experience = [
  {
    period: "Dec 2020 — Present",
    title: "Senior Analytics Engineer",
    company: "National Pen Inc (Cimpress)",
    location: "Mumbai, India",
    highlights: [
      "Engineered an end-to-end dbt and Snowflake analytics warehouse, integrating 10+ sources and establishing a governed Looker semantic layer.",
      "Built predictive Customer Lifetime Value (LTV) models across 1M+ customers, driving a 15% increase in retention and 20% higher campaign ROI.",
      "Developed 60+ Looker dashboards and reports for Finance and Product teams, improving demand forecasting accuracy by 35%.",
    ],
  },
  {
    period: "Jun 2017 — Nov 2020",
    title: "Data Engineer | SQL DBA",
    company: "mLogica",
    location: "Mumbai, India",
    highlights: [
      "Optimized query performance across 200+ SQL Servers, accelerating slow-running queries by 50% and improving reporting efficiency.",
      "Architected an automated PowerShell monitoring tool, reducing manual database administration efforts by 60%.",
      "Revamped legacy SQL data pipelines and scripts, reducing execution time by 20% to accelerate analytics delivery.",
    ],
  },
] as const;
