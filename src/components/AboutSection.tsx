"use client";

import { useTranslations } from "next-intl";

interface TechCategory {
  id: string;
  code: string;
  titleKey: "catFrontend" | "catAnimation" | "catBackend" | "catDevops";
  items: Array<{ name: string; tag: string; highlight?: boolean }>;
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "frontend",
    code: "01",
    titleKey: "catFrontend",
    items: [
      { name: "Next.js 15 (App Router)", tag: "CORE", highlight: true },
      { name: "React 19", tag: "ENGINE", highlight: true },
      { name: "TypeScript", tag: "STRICT", highlight: true },
      { name: "Tailwind CSS v4", tag: "STYLING" },
      { name: "Semantic HTML5 / A11y", tag: "SPEC" },
    ],
  },
  {
    id: "motion",
    code: "02",
    titleKey: "catAnimation",
    items: [
      { name: "GSAP (ScrollTrigger)", tag: "TIMELINE", highlight: true },
      { name: "Motion (Framer)", tag: "SPRINGS", highlight: true },
      { name: "Lenis Smooth Scroll", tag: "PHYSICS" },
      { name: "CSS Shaders & FX", tag: "VISUAL" },
      { name: "WebGL / Canvas", tag: "CREATIVE" },
    ],
  },
  {
    id: "backend",
    code: "03",
    titleKey: "catBackend",
    items: [
      { name: "Node.js / Bun", tag: "RUNTIME" },
      { name: "Supabase", tag: "AUTH_DB", highlight: true },
      { name: "PostgreSQL", tag: "SQL_CORE" },
      { name: "Drizzle ORM", tag: "TYPE_SAFE", highlight: true },
      { name: "REST & GraphQL", tag: "API_SPEC" },
    ],
  },
  {
    id: "devops",
    code: "04",
    titleKey: "catDevops",
    items: [
      { name: "Docker Containers", tag: "ISOLATION" },
      { name: "Linux / Shell", tag: "HOSTING", highlight: true },
      { name: "CI/CD & GitHub Actions", tag: "PIPELINE" },
      { name: "pnpm & Turborepo", tag: "OPTIMIZED" },
      { name: "VPS Standalone Deploy", tag: "DEPLOY", highlight: true },
    ],
  },
];

export function AboutSection() {
  const t = useTranslations("About");

  const telemetryMetrics = [
    {
      value: "100%",
      label: "DARK_THEME_LOCK",
      desc: "#0a0a0a void baseline. Zero flash.",
      code: "METRIC_01",
    },
    {
      value: "<100ms",
      label: "INTERACTION_LATENCY",
      desc: "Instant feedback & spring physics.",
      code: "METRIC_02",
    },
    {
      value: "99.9%",
      label: "RUNTIME_EFFICIENCY",
      desc: "Turbopack, App Router, pure vanilla CSS.",
      code: "METRIC_03",
    },
    {
      value: "0%",
      label: "TEMPLATE_SLOP",
      desc: "Tailored brutalist design, zero boilerplate.",
      code: "METRIC_04",
    },
  ];

  const parameters = [
    { key: "ROLE", val: t("bioRole") },
    { key: "STATUS", val: t("status"), active: true },
    { key: "EXP", val: "5+ YEARS" },
    { key: "LOCATION", val: "REMOTE // AR" },
    { key: "PARADIGM", val: "ZERO_SLOP" },
    { key: "CORE_DEP", val: "TS + NEXT15" },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-[#0a0a0a] text-[#f5f5f5] py-20 px-4 sm:px-6 lg:px-12 border-b border-[#262626] select-none"
    >
      {/* Background Blueprint Grid Lines Overlay (Subtle Industrial) */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_4rem]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="space-y-4 border-b border-[#262626] pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#00ff88] tracking-widest uppercase">
              <span className="inline-block w-2 h-2 bg-[#00ff88] animate-pulse" />
              <span>[{t("badge")}]</span>
            </div>
            <div className="text-[#737373] tracking-widest hidden sm:block">
              {"MODULE: BIO_STACK_V1.2 // SEC_REF: #02"}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-sans font-black uppercase text-4xl sm:text-6xl md:text-7xl tracking-tighter text-[#f5f5f5] leading-none">
              {t("sectionTitle")}
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#737373] max-w-md uppercase tracking-wider leading-relaxed">
              {t("sectionSubtitle")}
            </p>
          </div>
        </div>

        {/* Bento Box Master Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
          
          {/* Bento Cell 1: Bio Specification & Core Attributes (8 Cols) */}
          <div className="md:col-span-12 lg:col-span-8 bg-[#141414] border border-[#262626] p-6 sm:p-8 relative group hover:border-[#00ff88]/40 transition-colors flex flex-col justify-between">
            {/* Corner Crosshairs */}
            <span className="absolute top-2 left-2 text-[#333333] font-mono text-xs select-none pointer-events-none">+</span>
            <span className="absolute top-2 right-2 text-[#333333] font-mono text-xs select-none pointer-events-none">+</span>
            <span className="absolute bottom-2 left-2 text-[#333333] font-mono text-xs select-none pointer-events-none">+</span>
            <span className="absolute bottom-2 right-2 text-[#333333] font-mono text-xs select-none pointer-events-none">+</span>

            <div className="space-y-6">
              {/* Header Badge */}
              <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-[#262626]">
                <div className="flex items-center gap-2">
                  <span className="text-[#00ff88]">▶</span>
                  <span className="text-[#f5f5f5] font-bold tracking-wider">{t("bioBadge")}</span>
                </div>
                <span className="text-[#737373] text-[11px]">[SYS_VERIFIED]</span>
              </div>

              {/* Bio Content */}
              <div className="space-y-4">
                <p className="font-sans text-lg sm:text-xl md:text-2xl text-[#f5f5f5] font-bold tracking-tight leading-snug">
                  {t("bioDesc1")}
                </p>
                <p className="font-mono text-xs sm:text-sm text-[#737373] leading-relaxed">
                  {t("bioDesc2")}
                </p>
              </div>

              {/* Technical Parameter Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#262626] font-mono text-xs">
                {parameters.map((param) => (
                  <div key={param.key} className="bg-[#0a0a0a] border border-[#1f1f1f] p-2.5 space-y-1">
                    <div className="text-[10px] text-[#737373] tracking-widest uppercase">
                      {`// ${param.key}`}
                    </div>
                    <div className={`font-semibold truncate ${param.active ? "text-[#00ff88]" : "text-[#f5f5f5]"}`}>
                      {param.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="pt-6 mt-6 border-t border-[#1f1f1f] flex items-center justify-between font-mono text-[11px] text-[#525252]">
              <span>CORE_PHILOSOPHY: UNCOMPROMISING_SPEED</span>
              <span>BUFFER: CLEAR</span>
            </div>
          </div>

          {/* Bento Cell 2: System Telemetry & Metrics (4 Cols) */}
          <div className="md:col-span-12 lg:col-span-4 bg-[#141414] border border-[#262626] p-6 sm:p-8 relative group hover:border-[#00ff88]/40 transition-colors flex flex-col justify-between space-y-6">
            <span className="absolute top-2 left-2 text-[#333333] font-mono text-xs select-none pointer-events-none">+</span>
            <span className="absolute top-2 right-2 text-[#333333] font-mono text-xs select-none pointer-events-none">+</span>
            <span className="absolute bottom-2 left-2 text-[#333333] font-mono text-xs select-none pointer-events-none">+</span>
            <span className="absolute bottom-2 right-2 text-[#333333] font-mono text-xs select-none pointer-events-none">+</span>

            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-[#262626]">
                <span className="text-[#00ff88] font-bold tracking-wider">{t("telemetryTitle")}</span>
                <span className="w-1.5 h-1.5 bg-[#00ff88] rounded-full animate-ping" />
              </div>

              {/* Metrics Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {telemetryMetrics.map((m) => (
                  <div
                    key={m.code}
                    className="p-3 bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#333333] transition-colors space-y-1"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="font-sans font-black text-2xl text-[#00ff88] tracking-tight">
                        {m.value}
                      </span>
                      <span className="font-mono text-[10px] text-[#525252]">{m.code}</span>
                    </div>
                    <div className="font-mono text-xs font-bold text-[#f5f5f5] tracking-wider uppercase">
                      {m.label}
                    </div>
                    <div className="font-mono text-[11px] text-[#737373] leading-tight">
                      {m.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="font-mono text-[10px] text-[#525252] pt-2 border-t border-[#1f1f1f] flex justify-between">
              <span>CLOCK: 60FPS</span>
              <span>ENGINE: THE_VOID</span>
            </div>
          </div>

          {/* Section Subtitle: Tech Stack Arsenal */}
          <div id="stack" className="md:col-span-12 pt-6">
            <div className="flex items-center gap-3 font-mono text-xs border-b border-[#262626] pb-3 text-[#737373]">
              <span className="text-[#00ff88] font-bold">[003 // ARSENAL]</span>
              <span className="uppercase tracking-widest text-[#f5f5f5] font-bold">
                {t("stackTitle")}
              </span>
              <div className="flex-1 h-[1px] bg-[#1f1f1f]" />
              <span className="text-[10px] text-[#525252] hidden sm:inline">VERSION_MATRIX: 2026.1</span>
            </div>
          </div>

          {/* Bento Cells 3, 4, 5, 6: 4 Technical Stack Categories (3 Cols Each) */}
          {TECH_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="md:col-span-6 lg:col-span-3 bg-[#141414] border border-[#262626] p-5 sm:p-6 relative group hover:border-[#00ff88]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center justify-between pb-2 border-b border-[#262626] font-mono text-xs">
                  <span className="text-[#00ff88] font-mono text-[11px]">[{cat.code}]</span>
                  <span className="font-bold text-[#f5f5f5] tracking-wider text-[11px] uppercase">
                    {t(cat.titleKey)}
                  </span>
                </div>

                {/* Tech Item List */}
                <ul className="space-y-2 font-mono text-xs">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between p-2 bg-[#0a0a0a] border border-[#1f1f1f] group-hover:border-[#262626] transition-colors"
                    >
                      <span className={`text-xs ${item.highlight ? "text-[#f5f5f5] font-bold" : "text-[#a3a3a3]"}`}>
                        {item.name}
                      </span>
                      <span
                        className={`text-[9px] px-1.5 py-0.5 border ${
                          item.highlight
                            ? "border-[#00ff88]/50 text-[#00ff88] bg-[#00ff88]/5"
                            : "border-[#262626] text-[#737373] bg-[#141414]"
                        }`}
                      >
                        {item.tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Metric / Code */}
              <div className="pt-4 mt-4 border-t border-[#1f1f1f] flex items-center justify-between font-mono text-[10px] text-[#525252]">
                <span>STATUS: OK</span>
                <span>{`MOD_${cat.code}`}</span>
              </div>
            </div>
          ))}

          {/* Bento Cell 7: Engineering Directives & Architecture Framework (12 Cols) */}
          <div className="md:col-span-12 bg-[#141414] border border-[#262626] p-6 sm:p-8 relative group hover:border-[#00ff88]/40 transition-colors">
            <span className="absolute top-2 left-2 text-[#333333] font-mono text-xs select-none pointer-events-none">+</span>
            <span className="absolute top-2 right-2 text-[#333333] font-mono text-xs select-none pointer-events-none">+</span>
            <span className="absolute bottom-2 left-2 text-[#333333] font-mono text-xs select-none pointer-events-none">+</span>
            <span className="absolute bottom-2 right-2 text-[#333333] font-mono text-xs select-none pointer-events-none">+</span>

            <div className="space-y-6">
              <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-[#262626]">
                <div className="flex items-center gap-2">
                  <span className="text-[#00ff88]">❖</span>
                  <span className="text-[#f5f5f5] font-bold tracking-wider uppercase">
                    {t("directivesTitle")}
                  </span>
                </div>
                <span className="text-[#737373] text-[11px]">[SYSTEM_RULESET]</span>
              </div>

              {/* Directives Sub-Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
                <div className="space-y-2 p-4 bg-[#0a0a0a] border border-[#1f1f1f]">
                  <div className="text-xs font-bold text-[#00ff88] uppercase tracking-wider">
                    {t("dir1Title")}
                  </div>
                  <p className="text-xs text-[#737373] leading-relaxed">
                    {t("dir1Desc")}
                  </p>
                </div>

                <div className="space-y-2 p-4 bg-[#0a0a0a] border border-[#1f1f1f]">
                  <div className="text-xs font-bold text-[#00ff88] uppercase tracking-wider">
                    {t("dir2Title")}
                  </div>
                  <p className="text-xs text-[#737373] leading-relaxed">
                    {t("dir2Desc")}
                  </p>
                </div>

                <div className="space-y-2 p-4 bg-[#0a0a0a] border border-[#1f1f1f]">
                  <div className="text-xs font-bold text-[#00ff88] uppercase tracking-wider">
                    {t("dir3Title")}
                  </div>
                  <p className="text-xs text-[#737373] leading-relaxed">
                    {t("dir3Desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
