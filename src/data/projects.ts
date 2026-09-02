export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  role: string;
  client?: string;
  description: string;
  techStack: string[];
  metrics: ProjectMetric[];
  status: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: "cybervoid-archive",
    number: "01",
    title: "CYBERVOID ARCHIVE",
    category: "HIGH-THROUGHPUT TELEMETRY ENGINE",
    year: "2025",
    role: "Lead Systems Architect & Frontend Engineer",
    client: "Autonomous Systems Lab",
    description:
      "Sub-millisecond query interface and real-time canvas visualizer for high-density neural vector telemetry and distributed blockchain logs.",
    techStack: ["Next.js 15", "Rust / WASM", "WebSockets", "Tailwind CSS v4", "GSAP"],
    metrics: [
      { label: "LATENCY", value: "< 0.4ms" },
      { label: "EVENT_THROUGHPUT", value: "120K ops/s" },
      { label: "TYPE_SAFETY", value: "100% Strict" },
    ],
    status: "SYS_STATUS: ACTIVE // PROD",
    liveUrl: "https://cybervoid.network",
    githubUrl: "https://github.com/leancarr/cybervoid-archive",
    featured: true,
    imageUrl: "https://picsum.photos/seed/cybervoid/1200/800",
  },
  {
    id: "kronos-protocol",
    number: "02",
    title: "KRONOS PROTOCOL",
    category: "DECENTRALIZED LIQUIDITY TERMINAL",
    year: "2025",
    role: "Senior Frontend Engineer",
    client: "Kronos Labs",
    description:
      "Institutional orderbook interface engineered with dark-mode brutalist mechanics, sub-frame order routing, and ultra-dense real-time market depth visualization.",
    techStack: ["React 19", "TypeScript", "Ethers.js", "Web Workers", "Lenis Scroll"],
    metrics: [
      { label: "24H_VOLUME", value: "$480M+" },
      { label: "SLIPPAGE_RATE", value: "0.0012%" },
      { label: "UPTIME", value: "99.99%" },
    ],
    status: "SYS_STATUS: MAINNET_V2",
    liveUrl: "https://kronos.fi",
    githubUrl: "https://github.com/leancarr/kronos-protocol",
    featured: true,
    imageUrl: "https://picsum.photos/seed/kronos/1200/800",
  },
  {
    id: "neo-synapse-os",
    number: "03",
    title: "NEO-SYNAPSE OS",
    category: "AUTONOMOUS AGENT ORCHESTRATION HUB",
    year: "2024",
    role: "Fullstack Systems Developer",
    client: "Synapse Research",
    description:
      "Command-line driven runtime inspector and interactive directed-acyclic-graph (DAG) debugger for multi-agent autonomous swarm coordination.",
    techStack: ["Next.js 15", "Motion / React", "tRPC", "PostgreSQL", "Tailwind CSS"],
    metrics: [
      { label: "SWARMS_ACTIVE", value: "14.2K" },
      { label: "DAG_RENDER_TIME", value: "16ms" },
      { label: "MEMORY_FOOTPRINT", value: "< 34MB" },
    ],
    status: "SYS_STATUS: STABLE",
    liveUrl: "https://neosynapse.ai",
    githubUrl: "https://github.com/leancarr/neo-synapse-os",
    featured: true,
    imageUrl: "https://picsum.photos/seed/neosynapse/1200/800",
  },
  {
    id: "hexacore-engine",
    number: "04",
    title: "HEXACORE DESIGN SYSTEM",
    category: "INDUSTRIAL COMPONENT ARCHITECTURE",
    year: "2024",
    role: "Design Technologist & Author",
    client: "Open Source Collective",
    description:
      "Zero-dependency brutalist component architecture optimized for low-latency developer consoles, telemetry boards, and high-frequency trading dashboards.",
    techStack: ["TypeScript", "Vanilla CSS Tokens", "Storybook", "NPM Registry"],
    metrics: [
      { label: "ATOM_COMPONENTS", value: "64 Items" },
      { label: "BUNDLE_SIZE", value: "8.4KB Gzip" },
      { label: "A11Y_COMPLIANCE", value: "WCAG AAA" },
    ],
    status: "SYS_STATUS: PUBLISHED v3.0",
    liveUrl: "https://hexacore.design",
    githubUrl: "https://github.com/leancarr/hexacore-engine",
    featured: false,
    imageUrl: "https://picsum.photos/seed/hexacore/1200/800",
  },
];

export default projects;
