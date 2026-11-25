import { Calendar, Mail, Sparkles } from "lucide-react";
import { WEDDING } from "../lib/wedding-data";
import { scrollToId } from "../lib/helpers";
import { FloralCorner, GoldStar, StarDivider } from "./decor";

/**
 * Human-Crafted Royal Wedding Invitation Card
 * - Authentic bespoke wedding stationery feel: warm cotton parchment & gleaming gold leaf
 * - Imperial velvet emerald typography & gold-foil accents
 * - Full names displayed with royal dignity: Ayisha Tayyiba & Tahir Faizan
 * - Gilded Hijri & Gregorian date plaque
 * - 100% fluid responsive across all mobile screens and desktop
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="paper-texture relative flex min-h-[94vh] items-center justify-center overflow-hidden bg-transparent px-3.5 py-8 sm:px-6 sm:py-14"
    >
      {/* Warm ambient royal gold & burgundy glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.22)_0%,rgba(105,44,44,0.45)_55%,transparent_85%)]"
        aria-hidden="true"
      />

      {/* Elegant watercolor floral sprays framing the outer screen */}
      <FloralCorner position="top-left" size="w-32 sm:w-44 md:w-56" opacity="opacity-75" />
      <FloralCorner position="bottom-right" size="w-32 sm:w-44 md:w-56" opacity="opacity-75" />

      {/* Floating Bespoke Royal Stationery Card */}
      <div className="reveal relative z-10 w-full max-w-[380px] sm:max-w-[460px] md:max-w-[490px] rounded-3xl border-2 border-gold/75 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] p-2 sm:p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_10px_30px_-10px_rgba(197,160,89,0.35)]">
        {/* Inner fine pinstripe frame */}
        <div className="relative overflow-hidden rounded-2xl border border-gold-light/90 bg-gradient-to-b from-white via-[#FAF7F0] to-[#F6EFE2] px-4 py-6 sm:px-8 sm:py-9 text-center">
          {/* Subtle Islamic corner filigree accents */}
          <svg className="pointer-events-none absolute top-3 left-3 h-4 w-4 text-gold/45" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M2 12C2 6.47715 6.47715 2 12 2H2V12Z" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="5" cy="5" r="1.5" fill="currentColor" />
          </svg>
          <svg className="pointer-events-none absolute top-3 right-3 h-4 w-4 -scale-x-100 text-gold/45" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M2 12C2 6.47715 6.47715 2 12 2H2V12Z" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="5" cy="5" r="1.5" fill="currentColor" />
          </svg>
          <svg className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 -scale-y-100 text-gold/45" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M2 12C2 6.47715 6.47715 2 12 2H2V12Z" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="5" cy="5" r="1.5" fill="currentColor" />
          </svg>
          <svg className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 rotate-180 text-gold/45" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M2 12C2 6.47715 6.47715 2 12 2H2V12Z" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="5" cy="5" r="1.5" fill="currentColor" />
          </svg>

          {/* Top Arch Peak & Gold Star */}
          <div className="mx-auto flex flex-col items-center justify-center" aria-hidden="true">
            <span className="h-4 w-px bg-gradient-to-b from-transparent via-gold to-gold" />
            <GoldStar className="my-0.5 h-3.5 w-3.5 text-gold" />
          </div>

          {/* Illuminated Arabic Bismillah */}
          <p
            className="font-arabic mt-1 text-2xl sm:text-3xl text-gold-dark font-medium leading-relaxed drop-shadow-[0_1px_2px_rgba(197,160,89,0.25)]"
            lang="ar"
            dir="rtl"
          >
            {WEDDING.bismillahArabic}
          </p>

          {/* Translation */}
          <p className="font-display mt-0.5 text-[0.52rem] sm:text-[0.6rem] font-bold tracking-[0.28em] text-gold uppercase">
            {WEDDING.bismillah}
          </p>

          {/* Star Divider */}
          <StarDivider className="my-3 opacity-85" />

          {/* Full Bride & Groom Names */}
          <div className="mt-1 text-center">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-[2.45rem] font-medium tracking-wide text-emerald-deep leading-tight">
              Ayisha Tayyiba
            </h1>
            <span className="font-serif my-0.5 block text-lg sm:text-xl italic text-gold font-normal">
              &amp;
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.45rem] font-medium tracking-wide text-emerald-deep leading-tight">
              Tahir Faizan
            </h2>
            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gradient-to-r from-gold/10 via-gold/25 to-gold/10 px-3 py-0.5 shadow-2xs">
              <Sparkles className="h-2.5 w-2.5 text-gold-dark" />
              <span className="font-display text-[0.52rem] sm:text-[0.58rem] font-bold tracking-[0.26em] text-gold-dark uppercase">
                ROYAL WEDDING INVITATION
              </span>
              <Sparkles className="h-2.5 w-2.5 text-gold-dark" />
            </div>
          </div>

          {/* Invitation Prose */}
          <p className="mx-auto mt-3 max-w-[290px] sm:max-w-[320px] font-body text-[0.74rem] sm:text-[0.82rem] text-brown-soft leading-relaxed italic">
            With the blessings of Allah, we joyfully invite you to celebrate the Nikah and Valima of our beloved children.
          </p>

          {/* Gilded Date Plaque */}
          <div className="mt-4 inline-block rounded-xl border border-gold/70 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 px-4 py-2 sm:px-6 sm:py-2.5 shadow-2xs">
            <p className="font-display text-[0.52rem] sm:text-[0.56rem] font-bold tracking-[0.26em] text-gold uppercase">
              SATURDAY
            </p>
            <p className="font-display mt-0.5 text-xs sm:text-sm font-semibold tracking-[0.16em] text-emerald-deep uppercase">
              12 DECEMBER 2026
            </p>
            <p className="font-body mt-0.5 text-[0.68rem] text-gold-dark italic">
              {WEDDING.hijriDate} · Vaniyambadi
            </p>
          </div>

          {/* 100% Fluid Responsive Dual Action Buttons — Stacks cleanly on mobile, side-by-side on tablet/desktop */}
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-[360px] sm:max-w-md mx-auto">
            <button
              type="button"
              onClick={() => scrollToId("invitation")}
              className="btn-royal-emerald group/btn h-11 sm:h-12 w-full sm:flex-1 !px-3 sm:!px-4 font-display text-[0.66rem] sm:text-[0.7rem] font-semibold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md"
              aria-label="View official wedding invitation"
            >
              <Mail className="h-4 w-4 text-gold-foil shrink-0 transition-transform duration-200 group-hover/btn:scale-110" />
              <span>VIEW INVITATION</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToId("events")}
              className="btn-royal-outline group/btn h-11 sm:h-12 w-full sm:flex-1 !px-3 sm:!px-4 font-display text-[0.66rem] sm:text-[0.7rem] font-semibold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              aria-label="View ceremonies and events schedule"
            >
              <Calendar className="h-4 w-4 text-gold shrink-0 transition-transform duration-200 group-hover/btn:scale-110" />
              <span>CEREMONIES</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
