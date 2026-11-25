import { useState } from "react";
import { Expand, FileText, UtensilsCrossed, X } from "lucide-react";
import { WEDDING } from "../lib/wedding-data";
import { DiamondDivider, FloralCorner, MosqueIcon, SectionHeading, StarDivider } from "./decor";

/**
 * Human-Crafted Royal Wedding Invitation Section
 * Perfectly balanced 2-column layout with natural vertical rhythm & zero awkward gaps:
 * - Left: Official Printed Card in an arched gilded frame with zoom & text trigger
 * - Right: Companion Plaque with Arabic Basmala, Surah Ar-Rum 30:21, Ceremony Highlights,
 *          Sunnah Du'a, and Host Family Signature.
 * - 100% fluid responsive across all mobile screens and desktop.
 */
export default function Invitation() {
  const [showOriginal, setShowOriginal] = useState(false);
  const [showTextCard, setShowTextCard] = useState(false);

  return (
    <section id="invitation" className="paper-texture scroll-mt-24 px-3.5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <SectionHeading
          eyebrow="WITH GRATITUDE TO ALLAH"
          title="The Invitation"
          subtitle="Our printed wedding card, presented with love for family and friends near and far."
        />

        {/* 2-Column Symmetrical Grid — Naturally balanced proportions */}
        <div className="mt-8 sm:mt-10 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8 max-w-4xl mx-auto">
          {/* ============ LEFT COLUMN: PRINTED INVITATION CARD ============ */}
          <div className="reveal flex flex-col items-center">
            <div
              id="print-section"
              className="group relative flex h-full w-full max-w-[430px] flex-col justify-between rounded-2xl sm:rounded-3xl border-2 border-gold/75 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] p-2 sm:p-2.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45),0_8px_25px_-8px_rgba(197,160,89,0.25)] transition-all duration-300 hover:border-gold hover:shadow-[0_24px_55px_-10px_rgba(0,0,0,0.55)]"
            >
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-gold-light/80 bg-cream">
                {/* Image Trigger */}
                <button
                  type="button"
                  onClick={() => setShowOriginal(true)}
                  className="group/btn relative block w-full flex-1 cursor-zoom-in text-left focus:outline-none"
                  aria-label="Click to view official invitation card full size"
                >
                  <img
                    src="/images/card-original.jpg"
                    alt="Official Wedding Invitation Card of Ayisha and Tahir"
                    className="zoom-img block h-auto w-full object-contain"
                  />
                  {/* Luxury Tap to Zoom Badge */}
                  <span className="absolute right-3 bottom-3 flex items-center gap-1.5 rounded-full border border-gold/60 bg-[#0F2E23]/95 px-3 py-1 font-display text-[0.62rem] sm:text-[0.68rem] font-semibold tracking-wider text-gold-foil uppercase shadow-lg backdrop-blur transition-all group-hover/btn:bg-[#1A4738] group-hover/btn:scale-105">
                    <Expand className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gold" /> Tap to Zoom
                  </span>
                </button>

                {/* Symmetrical Integrated Action Bar */}
                <div className="no-print flex items-center justify-between border-t border-gold/30 bg-[#FAF7F0] px-4 py-2.5 text-xs text-brown-soft">
                  <button
                    type="button"
                    onClick={() => setShowOriginal(true)}
                    className="inline-flex items-center gap-1.5 font-display text-[0.65rem] sm:text-[0.7rem] font-semibold tracking-wider text-emerald-deep hover:text-gold uppercase transition-colors cursor-pointer"
                  >
                    <Expand className="h-3 w-3 text-gold" />
                    Full Resolution
                  </button>
                  <span className="text-gold/40">·</span>
                  <button
                    type="button"
                    onClick={() => setShowTextCard(true)}
                    className="inline-flex items-center gap-1.5 font-display text-[0.65rem] sm:text-[0.7rem] font-semibold tracking-wider text-gold hover:text-emerald-deep uppercase transition-colors cursor-pointer"
                  >
                    <FileText className="h-3 w-3 text-gold" />
                    Read Text Format
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ============ RIGHT COLUMN: ROYAL COMPANION CARD ============ */}
          <div className="reveal flex flex-col items-center">
            <div className="relative flex h-full w-full max-w-[430px] flex-col justify-between rounded-2xl sm:rounded-3xl border-2 border-gold/75 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] p-2 sm:p-2.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45),0_8px_25px_-8px_rgba(197,160,89,0.25)] transition-all duration-300 hover:border-gold hover:shadow-[0_24px_55px_-10px_rgba(0,0,0,0.55)]">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-gold-light/80 bg-paper/95 text-left">
                {/* Corner Filigree Ornaments */}
                <svg className="pointer-events-none absolute top-2.5 left-2.5 h-4 w-4 text-gold/45" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M2 12C2 6.47715 6.47715 2 12 2H2V12Z" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                </svg>
                <svg className="pointer-events-none absolute top-2.5 right-2.5 h-4 w-4 -scale-x-100 text-gold/45" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M2 12C2 6.47715 6.47715 2 12 2H2V12Z" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                </svg>
                <svg className="pointer-events-none absolute bottom-12 left-2.5 h-4 w-4 -scale-y-100 text-gold/45" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M2 12C2 6.47715 6.47715 2 12 2H2V12Z" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                </svg>
                <svg className="pointer-events-none absolute bottom-12 right-2.5 h-4 w-4 rotate-180 text-gold/45" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M2 12C2 6.47715 6.47715 2 12 2H2V12Z" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                </svg>

                {/* Main Card Body — Naturally & Gracefully Distributed */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5 gap-3 sm:gap-3.5">
                  {/* 1. Header & Basmala */}
                  <div className="text-center pt-0.5">
                    <p className="font-arabic text-base sm:text-xl text-gold-dark font-medium leading-normal" lang="ar" dir="rtl">
                      {WEDDING.bismillahArabic}
                    </p>
                    <p className="font-display text-[0.58rem] sm:text-[0.62rem] font-bold tracking-[0.28em] text-gold uppercase mt-0.5">
                      HONOURED GUESTS
                    </p>
                    <h3 className="font-display text-base sm:text-lg font-semibold tracking-wide text-emerald-deep mt-0.5">
                      A Note to Our Family &amp; Friends
                    </h3>
                    <StarDivider className="my-1 opacity-80" />
                  </div>

                  {/* 2. Welcome Greeting Message */}
                  <p className="text-center font-body text-[0.74rem] sm:text-[0.82rem] text-brown-soft leading-relaxed italic px-1">
                    Assalamu Alaikum. With hearts full of gratitude to Almighty Allah, our family joyfully invites
                    you to witness this blessed Nikah and join us for the Valima lunch. Your gracious presence
                    will be our honour, and your duas our greatest treasure.
                  </p>

                  {/* 3. Illuminated Quranic Verse Plaque */}
                  <div className="rounded-xl sm:rounded-2xl border border-gold/45 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 p-2.5 sm:p-3 text-center shadow-2xs">
                    <p className="font-arabic text-xs sm:text-[0.95rem] text-gold-dark leading-relaxed font-medium" lang="ar" dir="rtl">
                      وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
                    </p>
                    <p className="mt-1 font-body text-[0.68rem] sm:text-[0.74rem] text-brown-soft italic leading-snug">
                      &ldquo;And among His signs is that He created for you spouses from among yourselves, that you may find tranquillity in them, and He placed between you affection and mercy.&rdquo;
                    </p>
                    <p className="mt-1 font-display text-[0.52rem] sm:text-[0.56rem] font-bold tracking-widest text-gold uppercase">
                      — SURAH AR-RUM 30:21 —
                    </p>
                  </div>

                  {/* 4. Auspicious Union Honor Ribbon */}
                  <div className="rounded-xl border border-gold/40 bg-gradient-to-b from-[#0F2E23]/[0.03] to-[#0F2E23]/[0.06] px-3 py-2 text-center shadow-2xs">
                    <p className="font-display text-[0.52rem] sm:text-[0.56rem] font-bold tracking-[0.24em] text-gold uppercase">
                      IN CELEBRATION OF THE UNION
                    </p>
                    <p className="font-display text-sm sm:text-base font-semibold tracking-wide text-emerald-deep mt-0.5">
                      {WEDDING.brideName} <span className="font-serif italic font-normal text-gold">&amp;</span> {WEDDING.groomName}
                    </p>
                    <p className="text-[0.65rem] sm:text-[0.7rem] text-brown-soft italic mt-0.5">
                      Saturday, 12th December 2026 · {WEDDING.hijriDate}
                    </p>
                  </div>

                  {/* 5. Ceremony Highlights (Nikah & Valima) */}
                  <div>
                    <div className="flex items-center justify-center gap-2 mb-1.5">
                      <span className="h-px w-7 bg-gold/40" />
                      <p className="font-display text-[0.56rem] sm:text-[0.6rem] font-bold tracking-[0.24em] text-gold uppercase">
                        CEREMONY HIGHLIGHTS
                      </p>
                      <span className="h-px w-7 bg-gold/40" />
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2">
                      {/* Nikah */}
                      <div className="rounded-xl border border-gold/40 bg-[#0F2E23]/[0.03] p-2 sm:p-2.5 transition-all hover:bg-[#0F2E23]/[0.06] shadow-2xs">
                        <div className="flex items-center gap-1.5 border-b border-gold/25 pb-1">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0F2E23] text-gold-foil">
                            <MosqueIcon className="h-3 w-3" />
                          </span>
                          <span className="font-display text-[0.6rem] sm:text-[0.66rem] font-bold tracking-wider text-emerald-deep uppercase">
                            The Nikah
                          </span>
                        </div>
                        <p className="mt-1 font-display text-xs sm:text-sm font-semibold text-emerald-deep">
                          12:15 PM IST
                        </p>
                        <p className="text-[0.66rem] sm:text-[0.72rem] text-brown-soft">
                          Saturday, 12 Dec 2026
                        </p>
                        <p className="text-[0.63rem] sm:text-[0.68rem] text-gold-dark font-medium mt-0.5 truncate">
                          Masjid-e-Khaderpet
                        </p>
                      </div>

                      {/* Valima */}
                      <div className="rounded-xl border border-gold/40 bg-[#0F2E23]/[0.03] p-2 sm:p-2.5 transition-all hover:bg-[#0F2E23]/[0.06] shadow-2xs">
                        <div className="flex items-center gap-1.5 border-b border-gold/25 pb-1">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0F2E23] text-gold-foil">
                            <UtensilsCrossed className="h-3 w-3" />
                          </span>
                          <span className="font-display text-[0.6rem] sm:text-[0.66rem] font-bold tracking-wider text-emerald-deep uppercase">
                            Valima Lunch
                          </span>
                        </div>
                        <p className="mt-1 font-display text-xs sm:text-sm font-semibold text-emerald-deep">
                          After Zohar Prayer
                        </p>
                        <p className="text-[0.66rem] sm:text-[0.72rem] text-brown-soft">
                          Saturday, 12 Dec 2026
                        </p>
                        <p className="text-[0.63rem] sm:text-[0.68rem] text-gold-dark font-medium mt-0.5 truncate">
                          Miyan Shadi Mahal
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 6. Prophetic Du'a for Union & Barakah */}
                  <div className="rounded-xl border border-gold/35 bg-white/70 px-3 py-2 text-center shadow-2xs">
                    <p className="font-arabic text-xs sm:text-[0.85rem] text-gold-dark font-medium" lang="ar" dir="rtl">
                      بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
                    </p>
                    <p className="mt-0.5 font-body text-[0.66rem] sm:text-[0.72rem] text-brown-soft italic">
                      &ldquo;May Allah bless this union, shower His barakah upon you, and join you both in goodness.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Symmetrical Bottom Signature Bar — Matching Left Card's Action Bar */}
                <div className="border-t border-gold/30 bg-[#FAF7F0] px-4 py-2.5 text-center">
                  <p className="font-body text-[0.68rem] sm:text-[0.74rem] text-brown-soft italic">
                    With cordial invitation &amp; warm prayers from
                  </p>
                  <p className="font-display text-xs sm:text-sm font-semibold tracking-wide text-emerald-deep mt-0.5">
                    {WEDDING.hostName} &amp; Family
                  </p>
                  <p className="text-[0.62rem] sm:text-[0.68rem] text-brown-soft italic">
                    {WEDDING.hostLine} · Vaniyambadi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ ORIGINAL CARD LIGHTBOX MODAL ============ */}
      {showOriginal && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-brown/92 p-4 backdrop-blur-md"
          onClick={() => setShowOriginal(false)}
          role="dialog"
          aria-label="Original printed invitation card"
        >
          <button
            className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 bg-[#0F2E23] text-gold shadow-md hover:bg-[#1A4738] transition-colors cursor-pointer"
            onClick={() => setShowOriginal(false)}
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <figure className="max-h-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <img
              src="/images/card-original.jpg"
              alt="Original printed wedding invitation card of Ayisha and Tahir, full size"
              className="mx-auto max-h-[85vh] w-auto rounded-2xl border-2 border-gold bg-paper object-contain shadow-2xl"
            />
            <figcaption className="mt-2.5 text-center text-xs text-cream/90 italic">
              Original printed invitation card · Tap anywhere outside to close
            </figcaption>
          </figure>
        </div>
      )}

      {/* ============ TEXT FORMAT MODAL ============ */}
      {showTextCard && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-brown/90 p-4 backdrop-blur-md"
          onClick={() => setShowTextCard(false)}
          role="dialog"
          aria-label="Wedding invitation text transcript"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border-2 border-gold bg-[#FAF7F0] p-6 text-center shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full border border-gold/50 bg-[#0F2E23] text-gold hover:bg-[#1A4738] transition-colors cursor-pointer"
              onClick={() => setShowTextCard(false)}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <FloralCorner position="top-left" size="w-20 sm:w-28" />
            <FloralCorner position="bottom-right" size="w-20 sm:w-28" />
            <div className="relative z-10">
              <p className="font-arabic text-sm text-gold-dark" dir="rtl">{WEDDING.bismillahArabic}</p>
              <p className="text-xs text-brown-soft italic mt-0.5">{WEDDING.bismillah}</p>
              <h3 className="font-display mt-4 text-xl font-semibold text-emerald-deep sm:text-2xl">
                {WEDDING.hostName}
              </h3>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-emerald">{WEDDING.hostLine}</p>
              <p className="mt-1.5 text-xs sm:text-sm text-brown-soft italic">{WEDDING.hostInvite}</p>
              <p className="mt-4 text-xl sm:text-2xl font-semibold text-emerald-deep italic">
                {WEDDING.brideName}, <span className="text-[0.6em] font-bold not-italic">{WEDDING.brideDegree}</span>
              </p>
              <p className="mt-0.5 text-xs sm:text-sm text-brown-soft italic">{WEDDING.brideLine}</p>
              <p className="mt-2 text-sm text-gold italic">with</p>
              <p className="mt-1 text-xl sm:text-2xl font-semibold text-emerald-deep italic">
                {WEDDING.groomName}, <span className="text-[0.6em] font-bold not-italic">{WEDDING.groomDegree}</span>
              </p>
              <p className="mt-0.5 text-xs sm:text-sm text-brown-soft italic">{WEDDING.groomLine}</p>
              <DiamondDivider className="mt-4" />
              <p className="mt-3 text-sm text-gold italic">Insha&rsquo; Allah</p>
              <h4 className="font-display mt-1 text-base font-semibold tracking-widest text-emerald-deep">NIKAH</h4>
              <p className="mt-1 text-xs text-brown leading-relaxed">
                On Saturday, 12th December 2026, 2nd Rajjab 1448 Hijri<br />
                at 12:15 p.m., at Masjid-e-Khaderpet, Vaniyambadi.
              </p>
              <h4 className="font-display mt-3 text-base font-semibold tracking-widest text-emerald-deep">VALIMA</h4>
              <p className="mt-1 text-xs text-brown leading-relaxed">
                Lunch After Zohar Prayer<br />
                at Miyan Shadi Mahal, Mattekar Street, Muslimpur, Vaniyambadi.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
