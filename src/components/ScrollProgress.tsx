import { useEffect, useState } from "react";
import { scrollToId } from "../lib/helpers";

interface SectionWaypoint {
  id: string;
  label: string;
}

const SECTIONS: SectionWaypoint[] = [
  { id: "home", label: "Welcome" },
  { id: "invitation", label: "The Invitation" },
  { id: "couple", label: "The Couple" },
  { id: "countdown", label: "Countdown" },
  { id: "events", label: "Events" },
  { id: "rsvp", label: "RSVP" },
];

/**
 * Royal Spine Vertical Scroll Progress Indicator & Milestone Navigator
 * Exactly matches the requested vertical scroll tracker with:
 * - Vertical timeline spine with filled & unfilled tracks
 * - Waypoint milestones for each wedding section
 * - Illuminated glowing star/sun active thumb with corona rays
 * - Real-time scroll percentage display at the bottom (e.g. 20%)
 * - Interactive hover tooltips and smooth-scroll click navigation
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
        setProgress(currentProgress);

        // Detect currently visible section
        const scrollPosition = scrollTop + window.innerHeight * 0.35;
        for (let i = SECTIONS.length - 1; i >= 0; i--) {
          const el = document.getElementById(SECTIONS[i].id);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const percentage = Math.round(progress * 100);
  const spineHeight = 240; // px height of the vertical track

  return (
    <>
      {/* 1. Subtle Top Hairline Golden Scroll Bar */}
      <div
        className="no-print fixed top-0 left-0 z-50 h-[2.5px] bg-gradient-to-r from-gold via-gold-champagne to-gold shadow-[0_0_8px_rgba(245,227,184,0.6)] transition-all duration-100 ease-out pointer-events-none"
        style={{ width: `${percentage}%` }}
        aria-hidden="true"
      />

      {/* 2. Bespoke Royal Spine Vertical Scroll Navigator (Pinned on Right) */}
      <aside
        className="no-print fixed right-2.5 sm:right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center select-none"
        aria-label="Page scroll progress and section navigator"
      >
        {/* Vertical Spine Container */}
        <div
          className="relative flex items-center justify-center"
          style={{ height: `${spineHeight}px`, width: "24px" }}
        >
          {/* Background Unfilled Spine Line */}
          <div className="absolute top-0 bottom-0 w-[2px] rounded-full bg-white/20" />

          {/* Filled Active Golden Progress Line */}
          <div
            className="absolute top-0 w-[2px] rounded-full bg-gradient-to-b from-[#C5A059] via-[#F5E3B8] to-[#C5A059] shadow-[0_0_6px_rgba(245,227,184,0.7)] transition-all duration-100 ease-out"
            style={{ height: `${progress * spineHeight}px` }}
          />

          {/* Section Milestone Waypoints along the spine */}
          {SECTIONS.map((section, idx) => {
            const topPos = (idx / (SECTIONS.length - 1)) * spineHeight;
            const isPassed = progress >= idx / (SECTIONS.length - 1);
            const isCurrent = activeSection === section.id;
            const isHovered = hoveredSection === section.id;

            return (
              <div
                key={section.id}
                className="absolute flex items-center justify-center -translate-x-1/2 left-1/2 group"
                style={{ top: `${topPos}px` }}
              >
                {/* Clickable Waypoint Button */}
                <button
                  type="button"
                  onClick={() => scrollToId(section.id)}
                  onMouseEnter={() => setHoveredSection(section.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  aria-label={`Scroll to ${section.label}`}
                  title={section.label}
                  className={`relative flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? "h-4 w-4 bg-transparent"
                      : "h-3 w-3 hover:scale-125"
                  }`}
                >
                  {/* Waypoint Dot */}
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      isCurrent
                        ? "h-2 w-2 bg-[#F5E3B8] ring-2 ring-gold"
                        : isPassed
                        ? "h-2 w-2 bg-gold shadow-2xs"
                        : "h-1.5 w-1.5 border border-white/40 bg-[#4A1C1C]/80"
                    }`}
                  />
                </button>

                {/* Elegant Hover Tooltip on Left */}
                {isHovered && (
                  <div
                    className="pointer-events-none absolute right-7 flex items-center rounded-full border border-gold/70 bg-[#3B1414]/95 px-3 py-1 text-gold-foil font-display text-[0.62rem] font-semibold tracking-wider uppercase shadow-lg backdrop-blur-md whitespace-nowrap animate-in fade-in zoom-in-95 duration-150"
                    role="tooltip"
                  >
                    <span>✦ {section.label}</span>
                  </div>
                )}
              </div>
            );
          })}

          {/* Animated Illuminated Sun/Star Active Indicator moving along the spine */}
          <div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out flex items-center justify-center"
            style={{ top: `${progress * spineHeight}px` }}
            aria-hidden="true"
          >
            {/* Outer Pulsing Corona Radiance */}
            <div className="absolute h-7 w-7 rounded-full bg-gold/25 blur-xs animate-ping opacity-60" />

            {/* Glowing Corona Ring with Radiating Rays */}
            <div className="relative flex h-6 w-6 items-center justify-center rounded-full border border-gold/80 bg-gradient-to-br from-[#853737] via-[#692C2C] to-[#431616] shadow-[0_0_12px_rgba(245,227,184,0.85)] ring-1 ring-gold-champagne/60">
              {/* Radiating 4-point Corona Spikes */}
              <span className="absolute -top-1 h-1 w-[1.5px] bg-gold" />
              <span className="absolute -bottom-1 h-1 w-[1.5px] bg-gold" />
              <span className="absolute -left-1 h-[1.5px] w-1 bg-gold" />
              <span className="absolute -right-1 h-[1.5px] w-1 bg-gold" />

              {/* Inner Glowing White/Gold Center */}
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-white via-[#F5E3B8] to-gold shadow-sm" />
            </div>
          </div>
        </div>

        {/* Real-time Percentage Indicator at the Bottom */}
        <div className="mt-3.5 flex flex-col items-center">
          <span className="font-display text-[0.65rem] sm:text-[0.7rem] font-semibold text-gold-champagne tracking-wider tabular-nums drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            {percentage}%
          </span>
        </div>
      </aside>
    </>
  );
}
