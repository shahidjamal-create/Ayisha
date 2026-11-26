import { useEffect, useState } from "react";
import { CalendarPlus, ExternalLink, Heart, Sparkles } from "lucide-react";
import { WEDDING } from "../lib/wedding-data";
import { downloadCalendar, googleCalendarUrl } from "../lib/helpers";
import { SectionHeading, StarDivider } from "./decor";

// Live countdown to the Nikah — 12 December 2026, 12:15 PM IST.
type Parts = { days: number; hours: number; minutes: number; seconds: number; done: boolean };

function calculate(): Parts {
  const target = new Date(WEDDING.nikahISO).getTime();
  const diff = target - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
    done: false,
  };
}

export default function Countdown() {
  const [time, setTime] = useState<Parts>(calculate);

  useEffect(() => {
    const id = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(id);
  }, []);

  const boxes = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ];

  return (
    <section id="countdown" className="paper-texture scroll-mt-24 px-3.5 py-12 sm:px-6 sm:py-16" aria-label="Wedding countdown">
      <div className="mx-auto max-w-4xl text-center">
        {/* Section Heading with Elegant Non-Breaking Hierarchy */}
        <SectionHeading
          eyebrow="COUNTING THE BLESSED DAYS"
          title="Until the Nikah"
          subtitle="Saturday, 12th December 2026 · 12:15 PM · Masjid-e-Khaderpet, Vaniyambadi"
        />

        {time.done ? (
          <div className="reveal mx-auto mt-7 sm:mt-9 max-w-md rounded-2xl sm:rounded-3xl border-2 border-gold/75 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] p-6 sm:p-8 shadow-xl">
            <Heart className="mx-auto h-7 w-7 fill-gold text-gold" />
            <p className="font-display mt-3 text-xl font-semibold text-emerald-deep sm:text-2xl">
              Alhamdulillah
            </p>
            <p className="mt-1 text-sm text-gold-dark italic">A Beautiful New Beginning.</p>
            <p className="mt-2 text-xs sm:text-sm text-brown-soft">
              Ayisha and Tahir are now married. Please continue to keep them in your sincere duas.
            </p>
          </div>
        ) : (
          /* ================= BESPOKE ROYAL STATIONERY COUNTDOWN PLAQUE ================= */
          <div className="reveal relative mx-auto mt-7 sm:mt-9 max-w-xl rounded-2xl sm:rounded-3xl border-2 border-gold/75 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] p-2 sm:p-2.5 shadow-[0_22px_55px_-12px_rgba(0,0,0,0.45),0_8px_25px_-8px_rgba(197,160,89,0.25)]">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-gold-light/85 bg-paper/95 px-4 py-6 sm:px-8 sm:py-8 text-center">
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

              {/* Barakah Ribbon Badge */}
              <div className="mx-auto inline-flex items-center gap-1.5 rounded-full border border-gold/45 bg-gradient-to-r from-gold/10 via-gold/25 to-gold/10 px-3.5 py-1 shadow-2xs">
                <Sparkles className="h-3 w-3 text-gold-dark" />
                <span className="font-display text-[0.55rem] sm:text-[0.62rem] font-bold tracking-[0.24em] text-emerald-deep uppercase">
                  INSHA&rsquo; ALLAH · SACRED MOMENT APPROACHES
                </span>
                <Sparkles className="h-3 w-3 text-gold-dark" />
              </div>

              {/* 4 Gilded Royal Timepiece Cards */}
              <div className="mx-auto mt-5 sm:mt-6 grid grid-cols-4 gap-1.5 sm:gap-3.5 max-w-md" role="timer" aria-live="off">
                {boxes.map((box) => (
                  <div
                    key={box.label}
                    className="group relative flex flex-col items-center justify-center rounded-xl sm:rounded-2xl border border-gold/50 bg-gradient-to-b from-white via-[#FAF7F0] to-[#F5ECE0] p-2 sm:p-4 text-center shadow-2xs transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-md"
                  >
                    <span className="font-display block text-xl sm:text-3xl md:text-4xl font-semibold text-emerald-deep tabular-nums leading-none tracking-tight drop-shadow-[0_1px_1px_rgba(197,160,89,0.2)]">
                      {String(box.value).padStart(2, "0")}
                    </span>
                    <span className="font-display mt-1 sm:mt-2 block text-[0.48rem] sm:text-[0.62rem] font-bold tracking-[0.16em] sm:tracking-[0.22em] text-gold-dark uppercase truncate w-full">
                      {box.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Invitation Line */}
              <p className="mx-auto mt-4 max-w-md font-body text-[0.74rem] sm:text-[0.82rem] text-brown-soft italic leading-relaxed">
                {time.days} days until we unite in love, barakah &amp; prayer · Mark the date in your calendar.
              </p>

              <StarDivider className="my-4 opacity-75" />

              {/* Refined Symmetrical Dual Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 max-w-sm sm:max-w-md mx-auto">
                <button
                  type="button"
                  onClick={() => downloadCalendar("nikah")}
                  className="btn-royal-emerald group/btn h-11 sm:h-12 w-full min-w-0 !px-2.5 sm:!px-3 font-display text-[0.62rem] sm:text-[0.68rem] font-semibold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  aria-label="Download Nikah calendar event"
                >
                  <CalendarPlus className="h-3.5 w-3.5 text-gold-foil shrink-0 transition-transform duration-200 group-hover/btn:scale-110" />
                  <span className="truncate sm:whitespace-normal">ADD TO CALENDAR</span>
                </button>

                <a
                  href={googleCalendarUrl("nikah")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-royal-outline group/btn h-11 sm:h-12 w-full min-w-0 !px-2.5 sm:!px-3 font-display text-[0.62rem] sm:text-[0.68rem] font-semibold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  aria-label="Add to Google Calendar"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-gold shrink-0 transition-transform duration-200 group-hover/btn:scale-110" />
                  <span className="truncate sm:whitespace-normal">GOOGLE CALENDAR</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
