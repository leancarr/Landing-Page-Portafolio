"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      
      tl.fromTo(".hero-text-inner", {
        y: "110%",
      }, {
        y: "0%",
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2,
      });

      tl.fromTo(".hero-subtitle", {
        y: 20,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }, "-=0.6");
      
      tl.fromTo(".hero-decor", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      }, "-=0.8");
    },
    { scope: container }
  );

  return (
    <section 
      ref={container} 
      className="relative flex flex-col justify-center h-[100dvh] w-full p-6 md:p-12 overflow-hidden bg-[#0a0a0a] text-[#f5f5f5]"
    >
      <div className="absolute top-6 left-6 md:top-12 md:left-12 flex items-center gap-2 text-xs text-[#737373] uppercase tracking-wider font-mono hero-decor">
        <span className="inline-block w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
        <span>SYS_STATUS: ONLINE</span>
      </div>

      <div className="flex flex-col gap-4 z-10 w-full max-w-screen-2xl mx-auto">
        <div className="font-mono text-xs md:text-sm text-[#00ff88] uppercase tracking-[0.3em] hero-subtitle">
          [001 // INITIALIZED]
        </div>
        
        <h1 className="font-sans font-black uppercase text-[#f5f5f5] leading-[0.85] tracking-tighter text-[13vw] lg:text-[12vw] flex flex-col">
          <div className="overflow-hidden"><span className="hero-text-inner block">LEANDRO</span></div>
          <div className="overflow-hidden"><span className="hero-text-inner block">CARRION</span></div>
        </h1>

        <div className="font-mono text-sm md:text-base text-[#737373] mt-8 max-w-2xl leading-relaxed hero-subtitle border-l-2 border-[#00ff88] pl-4">
          <p>Industrial Brutalism &amp; High-Performance Web Development.</p>
          <p className="mt-2 text-[#f5f5f5]">Building &quot;The Void&quot; — Dark Mode Exclusive.</p>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 text-xs text-[#262626] font-mono hero-decor hidden md:block">
        {"/* SCROLL TO EXPLORE */"}
      </div>
      
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 font-mono text-xs text-[#00ff88] uppercase tracking-wider hero-decor flex items-center gap-2">
        <span className="animate-bounce">↓</span>
        <span>SCROLL</span>
      </div>
    </section>
  );
}
