"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-[#262626] font-mono text-xs text-[#737373] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-[#1f1f1f]">
          {/* Identity & Core Info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff88]" />
              <span className="font-bold text-sm tracking-wider text-[#f5f5f5]">
                LEANDRO CARRION
              </span>
            </div>
            <p className="text-xs text-[#737373] max-w-md leading-relaxed">
              Industrial Brutalism &amp; High-Performance Web Engineering. Built with Next.js 15, Tailwind CSS v4, GSAP &amp; Lenis.
            </p>
            <div className="text-[11px] text-[#525252] space-y-0.5">
              <div>{"LATENCY: 12ms // BUFFER: OPTIMIZED"}</div>
              <div>{"STACK_ID: VOID_CORE_2026"}</div>
            </div>
          </div>

          {/* System & Architecture Status */}
          <div className="space-y-2">
            <div className="text-[10px] text-[#f5f5f5] uppercase tracking-widest font-bold">
              {"// SYSTEM_TELEMETRY"}
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[#00ff88]">●</span>
                <span className="text-[#a3a3a3]">{t("systemStatus")}</span>
              </div>
              <div className="text-[#737373]">{t("mode")}</div>
              <div className="text-[#737373]">NODE_ENV: PRODUCTION</div>
            </div>
          </div>

          {/* Connect / Links */}
          <div className="space-y-2">
            <div className="text-[10px] text-[#f5f5f5] uppercase tracking-widest font-bold">
              {`// ${t("social")}`}
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="https://github.com/leancarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00ff88] transition-colors flex items-center gap-1"
                >
                  <span>GITHUB</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00ff88] transition-colors flex items-center gap-1"
                >
                  <span>LINKEDIN</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@leandrocarrion.dev"
                  className="hover:text-[#00ff88] transition-colors flex items-center gap-1"
                >
                  <span>EMAIL</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Version, Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#737373]">
            <span>
              &copy; {currentYear} LEANDRO CARRION. {t("rights")}.
            </span>
            <span className="hidden sm:inline text-[#262626]">|</span>
            <span className="text-[#a3a3a3]">
              {t("version")}: <strong className="text-[#00ff88] font-normal">v0.1.0</strong>{" // BUILD_2026.08"}
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1 border border-[#262626] bg-[#141414] text-[#a3a3a3] hover:text-[#00ff88] hover:border-[#00ff88] transition-all focus:outline-none"
            aria-label={t("backToTop")}
          >
            <span>[^]</span>
            <span>{t("backToTop")}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
