// Small decorative pieces reused across sections —
// floral corners, gold dividers, the hanging lantern and mosque icon.

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

// White floral bunch placed in a corner (same style as the printed card).
export function FloralCorner({
  position,
  size = "w-36 sm:w-48",
  opacity = "opacity-100",
}: {
  position: Corner;
  size?: string;
  opacity?: string;
}) {
  const styles: Record<Corner, string> = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 -scale-x-100",
    "bottom-left": "bottom-0 left-0 -scale-y-100",
    "bottom-right": "bottom-0 right-0 rotate-180",
  };
  return (
    <img
      src="/images/floral-corner.png"
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute z-[1] select-none ${styles[position]} ${size} ${opacity}`}
    />
  );
}

// The modern four-point gold star.
export function GoldStar({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 1 L14.2 9.8 L23 12 L14.2 14.2 L12 23 L9.8 14.2 L1 12 L9.8 9.8 Z" fill="#C5A059" />
      <circle cx="12" cy="12" r="1.5" fill="#122B22" />
    </svg>
  );
}

// Modern Editorial Hairline Divider
export function StarDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 sm:gap-3 ${className}`} aria-hidden="true">
      <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-gold/70" />
      <span className="h-1 w-1 rounded-full bg-gold/80" />
      <GoldStar className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
      <span className="h-1 w-1 rounded-full bg-gold/80" />
      <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  );
}

// Small diamond ornament.
export function DiamondDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`} aria-hidden="true">
      <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold" />
      <span className="h-1.5 w-1.5 rotate-45 border border-gold" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <span className="h-1.5 w-1.5 rotate-45 border border-gold" />
      <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}

// Hanging lantern with subtle candlelight glow.
export function Lantern({ className = "h-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 120" className={className} aria-hidden="true" fill="none">
      <line x1="20" y1="0" x2="20" y2="34" stroke="#C5A059" strokeWidth="1" strokeDasharray="2 4" />
      <circle cx="20" cy="40" r="2" fill="#C5A059" />
      <path d="M14 46 L26 46 L29 54 L29 78 L26 88 L14 88 L11 78 L11 54 Z" stroke="#C5A059" strokeWidth="1.2" fill="#122B22" />
      <path d="M11 60 L29 60 M11 72 L29 72" stroke="#E6D2A8" strokeWidth="0.8" />
      <path d="M20 54 L20 88" stroke="#E6D2A8" strokeWidth="0.8" />
      <circle cx="20" cy="67" r="4.5" fill="#FAF0D8" className="lantern-glow" />
      <line x1="20" y1="88" x2="20" y2="100" stroke="#C5A059" strokeWidth="1" />
      <path d="M20 100 L22.5 105 L20 110 L17.5 105 Z" fill="#C5A059" />
      <circle cx="20" cy="114" r="1.2" fill="#C5A059" />
    </svg>
  );
}

// Mosque line-icon.
export function MosqueIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6c2.5 4 7 6.5 7 11H17c0-4.5 4.5-7 7-11Z" />
      <path d="M24 3v3" />
      <path d="M13 21h22M13 21v17M35 21v17M9 38h30" />
      <path d="M20 38v-7a4 4 0 0 1 8 0v7" />
      <path d="M7 38V20M41 38V20M4.5 20a2.5 2.5 0 0 1 5 0M38.5 20a2.5 2.5 0 0 1 5 0M7 17V13M41 17V13" />
    </svg>
  );
}

// Consistent modern editorial section heading.
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="reveal mx-auto max-w-xl px-4 text-center">
      <p className="font-display text-[0.6rem] sm:text-[0.66rem] font-bold tracking-[0.3em] text-gold-champagne uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
        {eyebrow}
      </p>
      <h2 className="font-display mt-1.5 text-2xl sm:text-3xl font-medium tracking-wide text-[#FFFDF9] drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
        {title}
      </h2>
      <StarDivider className="mt-2.5 sm:mt-3 opacity-90" />
      {subtitle && (
        <p className="mt-2 text-xs sm:text-[0.84rem] text-[#F5E3B8]/90 leading-relaxed italic max-w-lg mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
