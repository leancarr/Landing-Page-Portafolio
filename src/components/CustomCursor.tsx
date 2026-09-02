"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";

export type CursorVariant = "default" | "magnetic" | "text" | "hidden" | "view";

export interface CustomCursorProps {
  /** Optional custom accent color (defaults to Industrial Neon Green #00ff88) */
  accentColor?: string;
  /** Whether to enable magnetic pull on interactive elements */
  enableMagnetic?: boolean;
}

/**
 * CustomCursor
 * Industrial Brutalist ("The Void") spring-physics cursor with magnetic micro-interactions.
 * Compatible with Next.js 15 App Router (use client) & motion/react.
 */
export function CustomCursor({
  accentColor = "#00ff88",
  enableMagnetic = true,
}: CustomCursorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");
  const [cursorText, setCursorText] = useState<string>("");
  const [isFinePointer, setIsFinePointer] = useState(false);

  // Exact raw coordinates
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Target coordinates for outer spring reticle (incorporates magnetic offset)
  const targetX = useMotionValue(-100);
  const targetY = useMotionValue(-100);

  // High-response spring for the sharp center dot
  const dotSpringConfig = { stiffness: 1000, damping: 50, mass: 0.1 };
  const dotX = useSpring(rawX, dotSpringConfig);
  const dotY = useSpring(rawY, dotSpringConfig);

  // Heavy mechanical spring for the outer industrial follower / reticle
  const followerSpringConfig = { stiffness: 320, damping: 26, mass: 0.5 };
  const followerX = useSpring(targetX, followerSpringConfig);
  const followerY = useSpring(targetY, followerSpringConfig);

  // Ref tracking current magnetic target
  const magneticTargetRef = useRef<HTMLElement | null>(null);

  const calculateMagneticPos = useCallback(
    (clientX: number, clientY: number, el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Magnetic pull factor (stronger near center, soft resistance near bounds)
      const pullStrength = 0.3;
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      return {
        x: centerX + deltaX * pullStrength,
        y: centerY + deltaY * pullStrength,
      };
    },
    []
  );

  useEffect(() => {
    // Only activate for devices with a fine pointer (mouse / trackpad)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsFinePointer(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    if (!mediaQuery.matches) {
      return () => {
        mediaQuery.removeEventListener("change", handleMediaChange);
      };
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      rawX.set(clientX);
      rawY.set(clientY);

      if (!isVisible) {
        setIsVisible(true);
      }

      if (enableMagnetic && magneticTargetRef.current) {
        const magPos = calculateMagneticPos(clientX, clientY, magneticTargetRef.current);
        targetX.set(magPos.x);
        targetY.set(magPos.y);
      } else {
        targetX.set(clientX);
        targetY.set(clientY);
      }
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
      magneticTargetRef.current = null;
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Global delegation for interactive elements (links, buttons, data-cursor, etc.)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest<HTMLElement>(
        'a, button, [role="button"], input[type="submit"], input[type="button"], [data-cursor], [data-magnetic]'
      );

      if (interactive) {
        magneticTargetRef.current = interactive;

        const customText = interactive.getAttribute("data-cursor-text");
        const customVariant = interactive.getAttribute("data-cursor") as CursorVariant | null;

        if (customText) {
          setCursorText(customText);
          setCursorVariant("text");
        } else if (customVariant) {
          setCursorVariant(customVariant);
        } else {
          setCursorVariant("magnetic");
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      const target = e.target as HTMLElement | null;

      if (!target) return;

      const interactive = target.closest<HTMLElement>(
        'a, button, [role="button"], input[type="submit"], input[type="button"], [data-cursor], [data-magnetic]'
      );

      // If leaving interactive element or moving to a non-interactive child/parent
      if (interactive && (!related || !interactive.contains(related))) {
        magneticTargetRef.current = null;
        setCursorVariant("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [
    calculateMagneticPos,
    enableMagnetic,
    isVisible,
    rawX,
    rawY,
    targetX,
    targetY,
  ]);

  if (!isFinePointer) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden select-none"
          aria-hidden="true"
        >
          {/* Inner Sharp Precision Core (Dot / Reticle Core) */}
          <motion.div
            className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
            style={{
              x: dotX,
              y: dotY,
            }}
          >
            <motion.div
              animate={{
                scale: isPressed ? 0.5 : cursorVariant === "magnetic" ? 0 : 1,
                opacity: cursorVariant === "magnetic" ? 0 : 1,
              }}
              transition={{ duration: 0.12 }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
          </motion.div>

          {/* Outer Industrial Follower / Magnetic Frame */}
          <motion.div
            className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
            style={{
              x: followerX,
              y: followerY,
            }}
          >
            <motion.div
              animate={{
                scale: isPressed
                  ? 0.8
                  : cursorVariant === "magnetic"
                  ? 1.5
                  : cursorVariant === "text"
                  ? 2.2
                  : cursorVariant === "view"
                  ? 2.6
                  : 1,
                borderColor:
                  cursorVariant === "magnetic" || cursorVariant === "text"
                    ? accentColor
                    : "rgba(255, 255, 255, 0.35)",
                backgroundColor:
                  cursorVariant === "magnetic"
                    ? "rgba(0, 255, 136, 0.08)"
                    : cursorVariant === "text" || cursorVariant === "view"
                    ? "#0a0a0a"
                    : "transparent",
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className="relative flex items-center justify-center border w-8 h-8 rounded-full backdrop-blur-[1px]"
            >
              {/* Brutalist Corner / Crosshair Ticks for Industrial aesthetic */}
              {cursorVariant === "default" && (
                <>
                  <span
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-1 opacity-60"
                    style={{ backgroundColor: accentColor }}
                  />
                  <span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-1 opacity-60"
                    style={{ backgroundColor: accentColor }}
                  />
                  <span
                    className="absolute top-1/2 -left-1 -translate-y-1/2 w-1 h-0.5 opacity-60"
                    style={{ backgroundColor: accentColor }}
                  />
                  <span
                    className="absolute top-1/2 -right-1 -translate-y-1/2 w-1 h-0.5 opacity-60"
                    style={{ backgroundColor: accentColor }}
                  />
                </>
              )}

              {/* Text Badge for [data-cursor-text] or custom action */}
              {cursorVariant === "text" && cursorText && (
                <span
                  className="font-mono text-[9px] font-bold uppercase tracking-widest px-1 text-center truncate max-w-[80px]"
                  style={{ color: accentColor }}
                >
                  {cursorText}
                </span>
              )}

              {/* View / Inspect Tag */}
              {cursorVariant === "view" && (
                <span
                  className="font-mono text-[8px] font-bold uppercase tracking-wider text-black bg-[#00ff88] px-1 py-0.5"
                >
                  VIEW
                </span>
              )}

              {/* Magnetic Lock Indicator dots */}
              {cursorVariant === "magnetic" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="w-1 h-1 rounded-full animate-ping opacity-75"
                    style={{ backgroundColor: accentColor }}
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CustomCursor;
