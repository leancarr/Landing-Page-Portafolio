"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

export function ContactSection() {
  let t: (key: string) => string;
  try {
    const translations = useTranslations("Contact");
    t = (key: string) => translations(key);
  } catch {
    // Fallback if rendered outside next-intl provider
    const fallbacks: Record<string, string> = {
      sectionTag: "[04 // CONTACT]",
      title: "INITIATE TRANSMISSION",
      description:
        "Have a project in mind or looking to elevate your technical interface infrastructure? Dispatch a command.",
      terminalPrompt: "leandro@void:~$ echo $CONTACT_EMAIL",
      email: "contact@leandrocarrion.dev",
      clickToCopy: "CLICK TO COPY TO CLIPBOARD",
      copied: "COPIED TO BUFFER // STDOUT: 200 OK",
      openMail: "OPEN IN MAIL CLIENT",
      status: "AVAILABLE FOR HIRE / CONTRACT",
      latency: "LATENCY: RESPONSE < 24H",
      location: "NODE: BUENOS AIRES (UTC-3)",
      encryption: "CHANNEL: TLS 1.3 ENCRYPTED",
      channelsTitle: "DIRECT CHANNELS",
      github: "GITHUB",
      linkedin: "LINKEDIN",
      calendar: "SCHEDULE CALL",
    };
    t = (key: string) => fallbacks[key] ?? key;
  }

  const [copied, setCopied] = useState(false);
  const [copyCount, setCopyCount] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const email = "contact@leandrocarrion.dev";

  const handleCopyEmail = useCallback(async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }

      setCopied(true);
      setCopyCount((prev) => prev + 1);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  }, [email]);

  const directChannels = [
    {
      name: t("github"),
      href: "https://github.com/leancarr",
      handle: "leancarr",
      code: "CH_01",
    },
    {
      name: t("linkedin"),
      href: "https://linkedin.com",
      handle: "in/leandrocarrion",
      code: "CH_02",
    },
    {
      name: t("calendar"),
      href: "mailto:contact@leandrocarrion.dev?subject=Project%20Inquiry%20//%20Schedule%20Sync",
      handle: "30m Direct Sync",
      code: "CH_03",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0a0a0a] text-[#f5f5f5] py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#262626] overflow-hidden select-none"
      aria-labelledby="contact-heading"
    >
      {/* Background Architectural Watermarks / Grid Markers */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-[#262626] hidden md:block select-none pointer-events-none">
        LOC_34.6037S_58.3816W // NODE_VOID
      </div>
      <div className="absolute top-4 right-4 font-mono text-[10px] text-[#262626] hidden md:block select-none pointer-events-none">
        SECURITY: TLS_1.3_STRICT
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Context, Heading & Telemetry Specs (5 cols) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between h-full space-y-8"
          >
            <div>
              {/* Section Tag */}
              <div className="flex items-center gap-2 font-mono text-xs text-[#00ff88] uppercase tracking-[0.2em] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                <span>{t("sectionTag")}</span>
              </div>

              {/* Main Brutalist Headline */}
              <h2
                id="contact-heading"
                className="font-sans font-black uppercase text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[0.9] tracking-tighter text-[#f5f5f5]"
              >
                {t("title")}
              </h2>

              {/* Statement Description */}
              <p className="font-mono text-xs sm:text-sm text-[#737373] leading-relaxed max-w-md border-l-2 border-[#00ff88] pl-4 mt-6">
                {t("description")}
              </p>
            </div>

            {/* Industrial Telemetry Block */}
            <div className="border border-[#1f1f1f] bg-[#0d0d0d] p-4 sm:p-5 font-mono text-xs space-y-2.5 relative">
              {/* Mechanical Corner Crosshairs */}
              <span className="absolute -top-1.5 -left-1.5 text-[10px] text-[#00ff88] leading-none font-bold">
                +
              </span>
              <span className="absolute -top-1.5 -right-1.5 text-[10px] text-[#00ff88] leading-none font-bold">
                +
              </span>
              <span className="absolute -bottom-1.5 -left-1.5 text-[10px] text-[#00ff88] leading-none font-bold">
                +
              </span>
              <span className="absolute -bottom-1.5 -right-1.5 text-[10px] text-[#00ff88] leading-none font-bold">
                +
              </span>

              <div className="text-[10px] text-[#525252] uppercase tracking-wider pb-1 border-b border-[#1a1a1a] flex justify-between items-center">
                <span>{"// TELEMETRY_DISPATCH"}</span>
                <span className="text-[#00ff88]">SYS_ACTIVE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
                <div className="flex items-center gap-2 text-[#a3a3a3]">
                  <span className="text-[#00ff88]">●</span>
                  <span>{t("status")}</span>
                </div>
                <div className="flex items-center gap-2 text-[#737373]">
                  <span className="text-[#525252]">▲</span>
                  <span>{t("latency")}</span>
                </div>
                <div className="flex items-center gap-2 text-[#737373]">
                  <span className="text-[#525252]">■</span>
                  <span>{t("location")}</span>
                </div>
                <div className="flex items-center gap-2 text-[#737373]">
                  <span className="text-[#525252]">◆</span>
                  <span>{t("encryption")}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Giant Interactive Terminal Prompt + Direct Channels (7 cols) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* THE GIANT TERMINAL PROMPT BUTTON */}
            <div className="w-full border-2 border-[#262626] bg-[#0d0d0d] overflow-hidden shadow-2xl transition-colors duration-200 group-hover:border-[#00ff88]/60">
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#141414] border-b border-[#262626] font-mono text-[11px] text-[#737373]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#262626] inline-block border border-[#333]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#262626] inline-block border border-[#333]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] inline-block shadow-[0_0_8px_#00ff88]" />
                  </div>
                  <span className="ml-2 text-[#a3a3a3] font-medium hidden sm:inline">
                    tty1: ~/dispatch/email
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[10px]">
                  <span className="text-[#525252] hidden sm:inline">
                    BUFFER: READY
                  </span>
                  <span className="px-1.5 py-0.5 border border-[#262626] bg-[#0a0a0a] text-[#00ff88]">
                    PORT: 443
                  </span>
                </div>
              </div>

              {/* Massive Interactive Button Surface */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full text-left p-6 sm:p-8 md:p-10 bg-[#0d0d0d] hover:bg-[#121212] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00ff88] relative group"
                aria-label={`${t("clickToCopy")}: ${email}`}
              >
                {/* Visual Scanning Line / Ambient Glitch Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff88]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Terminal Line 1: Command Invocation */}
                <div className="flex items-center justify-between font-mono text-xs sm:text-sm text-[#737373] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#00ff88] font-bold">&gt;</span>
                    <span className="text-[#a3a3a3]">{t("terminalPrompt")}</span>
                  </div>
                  <span className="text-[10px] text-[#525252] uppercase font-mono tracking-widest hidden sm:inline">
                    [EXEC]
                  </span>
                </div>

                {/* Terminal Line 2: Giant Monospace Email Address Display */}
                <div className="my-2 sm:my-4">
                  <div className="font-mono font-bold text-xl sm:text-3xl md:text-4xl xl:text-[2.6rem] leading-tight text-[#f5f5f5] group-hover:text-[#00ff88] transition-colors tracking-tight break-all flex items-center flex-wrap">
                    <span>{email}</span>
                    <span
                      className="inline-block w-2.5 sm:w-3.5 h-6 sm:h-8 md:h-9 bg-[#00ff88] ml-2 animate-pulse align-middle"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Terminal Line 3: Live Feedback Bar */}
                <div className="mt-6 pt-4 border-t border-[#1f1f1f] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
                  {/* Copy Status Badge with a11y live region */}
                  <div
                    aria-live="polite"
                    className="flex items-center gap-2"
                  >
                    {copied ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#00ff88] text-black font-bold text-xs tracking-wider animate-in fade-in duration-150">
                        <span>✓</span>
                        <span>{t("copied")}</span>
                        {copyCount > 1 && (
                          <span className="text-[10px] opacity-75">
                            ({copyCount}x)
                          </span>
                        )}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-[#737373] group-hover:text-[#f5f5f5] transition-colors">
                        <span className="text-[#00ff88] font-bold">&gt;</span>
                        <span className="tracking-wider">{t("clickToCopy")}</span>
                        <span className="text-[10px] text-[#525252] border border-[#262626] px-1.5 py-0.5 rounded-none">
                          CLIPBOARD
                        </span>
                      </span>
                    )}
                  </div>

                  {/* Fallback Direct Mailto Link */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center"
                  >
                    <a
                      href={`mailto:${email}`}
                      className="text-[11px] text-[#737373] hover:text-[#00ff88] underline underline-offset-4 decoration-[#262626] hover:decoration-[#00ff88] transition-colors flex items-center gap-1"
                      aria-label={`${t("openMail")} (${email})`}
                    >
                      <span>{t("openMail")}</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  </div>
                </div>
              </button>
            </div>

            {/* Direct Channels Matrix (Secondary Actions) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-[10px] text-[#525252] uppercase tracking-widest px-1">
                <span>{`// ${t("channelsTitle")}`}</span>
                <span>DIRECT_UPLINK</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                {directChannels.map((channel) => (
                  <a
                    key={channel.code}
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      channel.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="p-3.5 border border-[#262626] bg-[#0d0d0d] hover:bg-[#141414] hover:border-[#00ff88] text-[#f5f5f5] transition-all group flex flex-col justify-between gap-3 relative"
                  >
                    <div className="flex items-center justify-between text-[10px] text-[#525252]">
                      <span>{channel.code}</span>
                      <span className="text-[#737373] group-hover:text-[#00ff88] transition-colors">
                        ↗
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-xs group-hover:text-[#00ff88] transition-colors">
                        {channel.name}
                      </div>
                      <div className="text-[11px] text-[#737373] truncate">
                        {channel.handle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Transmission Fingerprint Footnote */}
            <div className="flex items-center justify-between pt-2 px-1 text-[10px] font-mono text-[#333] border-t border-[#1a1a1a]">
              <span>HASH: SHA256_e4d9_void</span>
              <span>READY_FOR_HANDSHAKE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
