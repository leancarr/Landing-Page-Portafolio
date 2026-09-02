"use client";

import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";

export function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t("projects"), href: "#projects", code: "01" },
    { label: t("about"), href: "#about", code: "02" },
    { label: t("stack"), href: "#stack", code: "03" },
    { label: t("contact"), href: "#contact", code: "04" },
  ];

  const handleLocaleChange = (nextLocale: "es" | "en") => {
    if (nextLocale === locale || isPending) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <header className="sticky top-0 z-50 h-16 max-h-16 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#262626] select-none">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#00ff88]"
          aria-label="Home"
        >
          <div className="relative flex items-center justify-center w-3 h-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-bold text-sm tracking-widest text-[#f5f5f5] group-hover:text-[#00ff88] transition-colors">
              LEANDRO CARRION
            </span>
            <span className="font-mono text-[10px] text-[#737373] tracking-wider uppercase -mt-1 hidden sm:block">
              {"// DEV_PORTFOLIO"}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#737373] hover:text-[#f5f5f5] transition-colors flex items-center gap-1.5 py-1 px-2 border border-transparent hover:border-[#262626] hover:bg-[#141414]"
            >
              <span className="text-[#00ff88] text-[10px]">[{link.code}]</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Actions: Language Switcher + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div
            className="flex items-center border border-[#262626] bg-[#141414] p-0.5 font-mono text-xs"
            role="group"
            aria-label="Language selector"
          >
            <button
              type="button"
              onClick={() => handleLocaleChange("es")}
              disabled={isPending}
              className={`px-2 py-1 uppercase tracking-wider transition-all duration-150 ${
                locale === "es"
                  ? "bg-[#00ff88] text-black font-bold shadow-sm"
                  : "text-[#737373] hover:text-[#f5f5f5] hover:bg-[#1a1a1a]"
              } ${isPending ? "opacity-50 cursor-wait" : "cursor-pointer"}`}
              aria-pressed={locale === "es"}
              aria-label="Cambiar idioma a Español"
            >
              ES
            </button>
            <div className="w-[1px] h-3 bg-[#262626]" />
            <button
              type="button"
              onClick={() => handleLocaleChange("en")}
              disabled={isPending}
              className={`px-2 py-1 uppercase tracking-wider transition-all duration-150 ${
                locale === "en"
                  ? "bg-[#00ff88] text-black font-bold shadow-sm"
                  : "text-[#737373] hover:text-[#f5f5f5] hover:bg-[#1a1a1a]"
              } ${isPending ? "opacity-50 cursor-wait" : "cursor-pointer"}`}
              aria-pressed={locale === "en"}
              aria-label="Switch language to English"
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 border border-[#262626] bg-[#141414] text-[#f5f5f5] hover:border-[#00ff88] hover:text-[#00ff88] font-mono text-xs transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? t("close") : t("menu")}
          >
            {isMobileMenuOpen ? `[ ${t("close")} ]` : `[ ${t("menu")} ]`}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#262626] bg-[#0a0a0a]/98 backdrop-blur-xl px-4 py-4 space-y-3 font-mono text-xs">
          <div className="text-[10px] text-[#737373] uppercase tracking-widest pb-1 border-b border-[#1f1f1f]">
            {"SYS_NAV // SECTIONS"}
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-2 border border-[#1f1f1f] bg-[#141414] text-[#f5f5f5] hover:border-[#00ff88] hover:text-[#00ff88] transition-colors"
            >
              <span>{link.label}</span>
              <span className="text-[#00ff88] text-[10px]">[{link.code}]</span>
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between text-[10px] text-[#737373]">
            <span>STATUS: [ONLINE]</span>
            <span className="text-[#00ff88]">SYS_READY</span>
          </div>
        </div>
      )}
    </header>
  );
}
