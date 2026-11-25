import { GraduationCap, Heart, Sparkles } from "lucide-react";
import { WEDDING } from "../lib/wedding-data";
import { SectionHeading, StarDivider } from "./decor";

/**
 * Ultra-Premium Human-Crafted Royal Bride & Groom Section
 * Symmetrical 2-column layout matching "The Invitation" section:
 * - Equal height & width portrait plaques with warm antique parchment & double gold leaf framing
 * - Royal illuminated Arch Medallions with Arabic Calligraphy & Gold-Foil Monograms
 * - Lineage & Parentage heritage blocks honoring family roots
 * - Illuminated Quranic Du'a plaques (Surah Al-Furqan 25:74) with Arabic & translation
 * - Central interlocking Barakah heart medallion joining both families
 * - 100% fluid responsive across all mobile and desktop devices
 */
export default function Couple() {
  return (
    <section
      id="couple"
      className="paper-texture scroll-mt-24 border-y border-gold/30 bg-gradient-to-b from-[#562222]/80 via-[#692C2C] to-[#562222]/80 px-3.5 py-12 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="MASHAALLAH · TWO SOULS, ONE UNION"
          title="The Bride &amp; Groom"
          subtitle="Two families, two hearts — joined by the will and boundless mercy of Allah."
        />

        {/* ================= 2-COLUMN SYMMETRICAL CARDS CONTAINER ================= */}
        <div className="relative mx-auto mt-8 sm:mt-10 max-w-4xl">
          {/* Desktop Central Interlocking Barakah Medallion */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-gradient-to-br from-[#692C2C] via-[#853737] to-[#431616] shadow-[0_10px_25px_rgba(0,0,0,0.5)] ring-4 ring-[#FAF6EE] md:flex"
            aria-hidden="true"
          >
            <Heart className="h-5 w-5 fill-gold text-gold animate-pulse" />
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-8">
            {/* ================= 1. THE BRIDE CARD ================= */}
            <article className="reveal group relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border-2 border-gold/75 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] p-2 sm:p-2.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45),0_8px_25px_-8px_rgba(197,160,89,0.25)] transition-all duration-300 hover:border-gold hover:shadow-[0_24px_55px_-10px_rgba(0,0,0,0.55)]">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-gold-light/80 bg-paper/95 p-4 sm:p-6 text-center">
                {/* 4 Corner Arabesque Filigrees */}
                <svg className="pointer-events-none absolute top-2.5 left-2.5 h-4 w-4 text-gold/45" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M2 12C2 6.47715 6.47715 2 12 2H2V12Z" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                </svg>
                <svg className="pointer-events-none absolute top-2.5 right-2.5 h-4 w-4 -scale-x-100 text-gold/45" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M2 12C2 6.47715 6.47715 2 12 2H2V12Z" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                </svg>
                <svg className="pointer-events-none absolute bottom-2.5 left-2.5 h-4 w-4 -scale-y-100 text-gold/45" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M2 12C2 6.47715 6.47715 2 12 2H2V12Z" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                </svg>
                <svg className="pointer-events-none absolute bottom-2.5 right-2.5 h-4 w-4 rotate-180 text-gold/45" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M2 12C2 6.47715 6.47715 2 12 2H2V12Z" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                </svg>

                {/* Symmetrical Card Content */}
                <div className="flex flex-col gap-3 sm:gap-3.5">
                  {/* Eyebrow & Royal Arch Medallion */}
                  <div>
                    <div className="mx-auto flex h-20 w-16 sm:h-22 sm:w-18 items-center justify-center rounded-t-[4rem] border-2 border-gold bg-gradient-to-b from-[#692C2C] via-[#853737] to-[#431616] shadow-[0_8px_20px_rgba(0,0,0,0.4)] ring-2 ring-gold/40 transition-transform duration-300 group-hover:scale-105">
                      <div className="text-center">
                        <span className="font-arabic text-base sm:text-lg text-gold-light/90 block leading-none" lang="ar" dir="rtl">
                          عائشة
                        </span>
                        <span className="font-display text-xl sm:text-2xl font-bold text-gold-foil drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] block mt-0.5">
                          A
                        </span>
                      </div>
                    </div>

                    <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-0.5">
                      <Sparkles className="h-2.5 w-2.5 text-gold-dark" />
                      <p className="font-display text-[0.58rem] sm:text-[0.62rem] font-bold tracking-[0.28em] text-gold uppercase">
                        THE BRIDE
                      </p>
                      <Sparkles className="h-2.5 w-2.5 text-gold-dark" />
                    </div>
                  </div>

                  {/* Full Name & Degree Badge */}
                  <div>
                    <h3 className="font-display text-lg sm:text-2xl font-semibold tracking-wide text-emerald-deep">
                      {WEDDING.brideName}
                    </h3>
                    <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-gold/70 bg-gradient-to-r from-gold/10 via-gold/25 to-gold/10 px-3 py-0.5 font-display text-[0.65rem] sm:text-xs font-semibold tracking-wider text-emerald-deep shadow-2xs">
                      <GraduationCap className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gold-dark" />
                      <span>{WEDDING.brideDegree}</span>
                    </div>
                  </div>

                  <StarDivider className="my-0.5 opacity-80" />

                  {/* Family Heritage & Parentage Plaque */}
                  <div className="rounded-xl border border-gold/35 bg-[#0F2E23]/[0.03] p-2.5 sm:p-3 text-center transition-all hover:bg-[#0F2E23]/[0.06]">
                    <p className="font-display text-[0.55rem] sm:text-[0.58rem] font-bold tracking-[0.22em] text-gold uppercase mb-1">
                      PARENTAGE &amp; HERITAGE
                    </p>
                    <p className="font-display text-xs sm:text-sm font-semibold text-emerald-deep">
                      Daughter of <span className="text-gold-dark">{WEDDING.hostName}</span>
                    </p>
                    <p className="text-[0.68rem] sm:text-[0.72rem] text-brown-soft italic mt-0.5">
                      {WEDDING.hostLine}
                    </p>
                    <div className="mt-1.5 border-t border-gold/20 pt-1">
                      <p className="text-[0.68rem] sm:text-[0.72rem] text-brown-soft italic">
                        {WEDDING.brideLine}
                      </p>
                    </div>
                  </div>

                  {/* Illuminated Quranic Du'a Plaque */}
                  <div className="rounded-xl border border-gold/45 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 p-2.5 sm:p-3 text-center shadow-2xs">
                    <p className="font-arabic text-xs sm:text-sm text-gold-dark font-medium leading-relaxed" lang="ar" dir="rtl">
                      رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ
                    </p>
                    <p className="mt-1 font-body text-[0.66rem] sm:text-[0.72rem] text-brown-soft italic leading-snug">
                      &ldquo;Our Lord, grant us from among our spouses and offspring comfort to our eyes.&rdquo;
                    </p>
                    <p className="mt-0.5 font-display text-[0.5rem] sm:text-[0.54rem] font-bold tracking-widest text-gold uppercase">
                      — SURAH AL-FURQAN 25:74 —
                    </p>
                  </div>
                </div>

                {/* Cordial Family Blessing Footer */}
                <div className="mt-3 border-t border-gold/25 pt-2 text-center">
                  <p className="font-body text-[0.68rem] sm:text-[0.72rem] text-brown-soft italic">
                    With endless love &amp; prayers from the family
                  </p>
                  <p className="font-display text-[0.62rem] sm:text-[0.66rem] font-semibold text-emerald-deep uppercase tracking-wider mt-0.5">
                    Hafiz K. Makhdoom Ali &amp; Family
                  </p>
                </div>
              </div>
            </article>

            {/* Mobile Joining Heart Divider */}
            <div className="my-1 flex items-center justify-center md:hidden" aria-hidden="true">
              <span className="h-[1px] w-14 bg-gold/50" />
              <span className="mx-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-gold bg-gradient-to-br from-[#692C2C] via-[#853737] to-[#431616] shadow-md">
                <Heart className="h-4 w-4 fill-gold text-gold" />
              </span>
              <span className="h-[1px] w-14 bg-gold/50" />
            </div>

            {/* ================= 2. THE GROOM CARD ================= */}
            <article className="reveal group relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border-2 border-gold/75 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] p-2 sm:p-2.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45),0_8px_25px_-8px_rgba(197,160,89,0.25)] transition-all duration-300 hover:border-gold hover:shadow-[0_24px_55px_-10px_rgba(0,0,0,0.55)]">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-gold-light/80 bg-paper/95 p-4 sm:p-6 text-center">
                {/* 4 Corner Arabesque Filigrees */}
                <svg className="pointer-events-none absolute top-2.5 left-2.5 h-4 w-4 text-gold/45" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M2 12C2 6.47715 6.47715 2 12 2H2V12Z" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                </svg>
                <svg className="pointer-events-none absolute top-2.5 right-2.5 h-4 w-4 -scale-x-100 text-gold/45" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M2 12C2 6.47715 6.47715 2 12 2H2V12Z" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                </svg>
                <svg className="pointer-events-none absolute bottom-2.5 left-2.5 h-4 w-4 -scale-y-100 text-gold/45" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M2 12C2 6.47715 6.47715 2 12 2H2V12Z" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                </svg>
                <svg className="pointer-events-none absolute bottom-2.5 right-2.5 h-4 w-4 rotate-180 text-gold/45" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M2 12C2 6.47715 6.47715 2 12 2H2V12Z" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                </svg>

                {/* Symmetrical Card Content */}
                <div className="flex flex-col gap-3 sm:gap-3.5">
                  {/* Eyebrow & Royal Arch Medallion */}
                  <div>
                    <div className="mx-auto flex h-20 w-16 sm:h-22 sm:w-18 items-center justify-center rounded-t-[4rem] border-2 border-gold bg-gradient-to-b from-[#692C2C] via-[#853737] to-[#431616] shadow-[0_8px_20px_rgba(0,0,0,0.4)] ring-2 ring-gold/40 transition-transform duration-300 group-hover:scale-105">
                      <div className="text-center">
                        <span className="font-arabic text-base sm:text-lg text-gold-light/90 block leading-none" lang="ar" dir="rtl">
                          طاهر
                        </span>
                        <span className="font-display text-xl sm:text-2xl font-bold text-gold-foil drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] block mt-0.5">
                          T
                        </span>
                      </div>
                    </div>

                    <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-0.5">
                      <Sparkles className="h-2.5 w-2.5 text-gold-dark" />
                      <p className="font-display text-[0.58rem] sm:text-[0.62rem] font-bold tracking-[0.28em] text-gold uppercase">
                        THE GROOM
                      </p>
                      <Sparkles className="h-2.5 w-2.5 text-gold-dark" />
                    </div>
                  </div>

                  {/* Full Name & Degree Badge */}
                  <div>
                    <h3 className="font-display text-lg sm:text-2xl font-semibold tracking-wide text-emerald-deep">
                      {WEDDING.groomName}
                    </h3>
                    <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-gold/70 bg-gradient-to-r from-gold/10 via-gold/25 to-gold/10 px-3 py-0.5 font-display text-[0.65rem] sm:text-xs font-semibold tracking-wider text-emerald-deep shadow-2xs">
                      <GraduationCap className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gold-dark" />
                      <span>{WEDDING.groomDegree}</span>
                    </div>
                  </div>

                  <StarDivider className="my-0.5 opacity-80" />

                  {/* Family Heritage & Parentage Plaque */}
                  <div className="rounded-xl border border-gold/35 bg-[#0F2E23]/[0.03] p-2.5 sm:p-3 text-center transition-all hover:bg-[#0F2E23]/[0.06]">
                    <p className="font-display text-[0.55rem] sm:text-[0.58rem] font-bold tracking-[0.22em] text-gold uppercase mb-1">
                      PARENTAGE &amp; HERITAGE
                    </p>
                    <p className="font-display text-xs sm:text-sm font-semibold text-emerald-deep">
                      Son of <span className="text-gold-dark">Janab Alangayam Sayeed Basha Sahib</span>
                    </p>
                    <p className="text-[0.68rem] sm:text-[0.72rem] text-brown-soft italic mt-0.5">
                      Respected Family of Vaniyambadi
                    </p>
                    <div className="mt-1.5 border-t border-gold/20 pt-1">
                      <p className="text-[0.68rem] sm:text-[0.72rem] text-gold-dark font-medium italic">
                        A warm welcome to our family &amp; hearts
                      </p>
                    </div>
                  </div>

                  {/* Illuminated Quranic Du'a Plaque */}
                  <div className="rounded-xl border border-gold/45 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 p-2.5 sm:p-3 text-center shadow-2xs">
                    <p className="font-arabic text-xs sm:text-sm text-gold-dark font-medium leading-relaxed" lang="ar" dir="rtl">
                      وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا
                    </p>
                    <p className="mt-1 font-body text-[0.66rem] sm:text-[0.72rem] text-brown-soft italic leading-snug">
                      &ldquo;And make us leaders for the righteous, grounded in faith, love &amp; mercy.&rdquo;
                    </p>
                    <p className="mt-0.5 font-display text-[0.5rem] sm:text-[0.54rem] font-bold tracking-widest text-gold uppercase">
                      — SURAH AL-FURQAN 25:74 —
                    </p>
                  </div>
                </div>

                {/* Cordial Family Blessing Footer */}
                <div className="mt-3 border-t border-gold/25 pt-2 text-center">
                  <p className="font-body text-[0.68rem] sm:text-[0.72rem] text-brown-soft italic">
                    Joined in sacred love &amp; eternal barakah
                  </p>
                  <p className="font-display text-[0.62rem] sm:text-[0.66rem] font-semibold text-emerald-deep uppercase tracking-wider mt-0.5">
                    Alangayam Sayeed Basha Family
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
