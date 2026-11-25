import { useState } from "react";
import {
  CalendarPlus,
  ChevronDown,
  Clock,
  Heart,
  MapPin,
  MoonStar,
  Navigation,
  UtensilsCrossed,
} from "lucide-react";
import { WEDDING } from "../lib/wedding-data";
import { downloadCalendar } from "../lib/helpers";
import { MosqueIcon, SectionHeading, StarDivider } from "./decor";

export default function Events() {
  const [showOrderOfDay, setShowOrderOfDay] = useState(false);

  const steps = [
    {
      num: "01",
      time: "12:15 PM",
      title: "The Nikah",
      venue: "Masjid-e-Khaderpet",
      text: "The sacred marriage sermon & solemn union according to the Sunnah, Insha' Allah.",
      icon: <MosqueIcon className="h-4 w-4" />,
    },
    {
      num: "02",
      time: "Followed by",
      title: "Duas & Tahneeyah",
      venue: "The Congregation",
      text: "Congregation's heartfelt duas and congratulations for the bride, groom and families.",
      icon: <Heart className="h-4 w-4" />,
    },
    {
      num: "03",
      time: "Congregation",
      title: "Zohar Prayer",
      venue: "Masjid-e-Khaderpet",
      text: "Guests join together for the Zohar (Dhuhr) prayer before proceeding to the feast.",
      icon: <MoonStar className="h-4 w-4" />,
    },
    {
      num: "04",
      time: "After Zohar",
      title: "Valima Lunch",
      venue: "Miyan Shadi Mahal",
      text: "The traditional wedding banquet and hospitality for all honoured family and guests.",
      icon: <UtensilsCrossed className="h-4 w-4" />,
    },
  ];

  return (
    <section id="events" className="paper-texture scroll-mt-24 border-y border-gold/30 bg-gradient-to-b from-[#562222]/80 via-[#692C2C] to-[#562222]/80 px-3.5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        {/* ================= HEADER ================= */}
        <SectionHeading
          eyebrow="THE CELEBRATIONS"
          title="Wedding Events"
          subtitle="Insha’ Allah, both ceremonies take place in Vaniyambadi on the same blessed day."
        />

        {/* ================= 2-COLUMN ROYAL STATIONERY CARDS ================= */}
        <div className="mt-8 sm:mt-10 grid items-stretch gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {/* ----------------- EVENT 01: NIKAH ----------------- */}
          <article className="reveal group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border-2 border-gold/75 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] p-5 sm:p-7 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45),0_8px_25px_-8px_rgba(197,160,89,0.25)] transition-all duration-300 hover:border-gold hover:shadow-[0_24px_55px_-10px_rgba(0,0,0,0.55)]">
            <div>
              {/* Badge & Number */}
              <div className="flex items-center justify-between border-b border-gold/25 pb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-0.5 font-display text-[0.58rem] sm:text-[0.62rem] font-bold tracking-[0.24em] text-gold-dark uppercase">
                  EVENT 01
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0F2E23] font-display text-xs font-bold text-gold-foil">
                  01
                </span>
              </div>

              {/* Title & Ceremony Icon */}
              <div className="mt-4 flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-gold/50 bg-[#0F2E23] text-gold-foil shadow-sm">
                  <MosqueIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-emerald-deep">
                    The Nikah
                  </h3>
                  <p className="font-body text-xs sm:text-[0.82rem] text-gold-dark italic">
                    Solemnization of marriage according to Sunnah
                  </p>
                </div>
              </div>

              <div className="my-4 h-px w-full bg-gold/25" />

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-xs text-gold" aria-hidden="true">🗓️</span>
                  <div>
                    <p className="font-body text-xs sm:text-sm font-semibold text-emerald-deep">
                      {WEDDING.nikah.date}
                    </p>
                    <p className="text-[0.7rem] text-brown-soft italic">
                      {WEDDING.nikah.hijri}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-gold-dark mt-0.5" />
                  <div>
                    <p className="font-body text-xs sm:text-sm font-semibold text-emerald-deep">
                      {WEDDING.nikah.time} <span className="font-normal text-[0.72rem] text-brown-soft">(12:15 PM IST)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-gold-dark mt-0.5" />
                  <div>
                    <p className="font-body text-xs sm:text-sm font-semibold text-emerald-deep">
                      {WEDDING.nikah.venue}
                    </p>
                    <p className="text-[0.72rem] text-brown-soft leading-snug">
                      {WEDDING.nikah.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <a
                href={WEDDING.nikah.mapDirections}
                target="_blank"
                rel="noreferrer"
                className="btn-royal-emerald flex-1 text-[0.62rem] sm:text-[0.66rem] !py-2.5"
              >
                <Navigation className="h-3 w-3 text-gold-foil" />
                <span>Get Directions</span>
              </a>
              <button
                onClick={() => downloadCalendar("nikah")}
                className="btn-royal-outline flex-1 text-[0.62rem] sm:text-[0.66rem] !py-2.5"
              >
                <CalendarPlus className="h-3 w-3 text-gold" />
                <span>Add to Calendar</span>
              </button>
            </div>
          </article>

          {/* ----------------- EVENT 02: VALIMA ----------------- */}
          <article className="reveal group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border-2 border-gold/75 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] p-5 sm:p-7 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45),0_8px_25px_-8px_rgba(197,160,89,0.25)] transition-all duration-300 hover:border-gold hover:shadow-[0_24px_55px_-10px_rgba(0,0,0,0.55)]">
            <div>
              {/* Badge & Number */}
              <div className="flex items-center justify-between border-b border-gold/25 pb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-0.5 font-display text-[0.58rem] sm:text-[0.62rem] font-bold tracking-[0.24em] text-gold-dark uppercase">
                  EVENT 02
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0F2E23] font-display text-xs font-bold text-gold-foil">
                  02
                </span>
              </div>

              {/* Title & Ceremony Icon */}
              <div className="mt-4 flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-gold/50 bg-[#0F2E23] text-gold-foil shadow-sm">
                  <UtensilsCrossed className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-emerald-deep">
                    Valima Lunch
                  </h3>
                  <p className="font-body text-xs sm:text-[0.82rem] text-gold-dark italic">
                    Celebratory wedding feast &amp; warm reception
                  </p>
                </div>
              </div>

              <div className="my-4 h-px w-full bg-gold/25" />

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-xs text-gold" aria-hidden="true">🗓️</span>
                  <div>
                    <p className="font-body text-xs sm:text-sm font-semibold text-emerald-deep">
                      {WEDDING.dateText}
                    </p>
                    <p className="text-[0.7rem] text-brown-soft italic">
                      {WEDDING.nikah.hijri}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-gold-dark mt-0.5" />
                  <div>
                    <p className="font-body text-xs sm:text-sm font-semibold text-emerald-deep">
                      {WEDDING.valima.timing}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-gold-dark mt-0.5" />
                  <div>
                    <p className="font-body text-xs sm:text-sm font-semibold text-emerald-deep">
                      {WEDDING.valima.venue}
                    </p>
                    <p className="text-[0.72rem] text-brown-soft leading-snug">
                      {WEDDING.valima.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <a
                href={WEDDING.valima.mapDirections}
                target="_blank"
                rel="noreferrer"
                className="btn-royal-emerald flex-1 text-[0.62rem] sm:text-[0.66rem] !py-2.5"
              >
                <Navigation className="h-3 w-3 text-gold-foil" />
                <span>Get Directions</span>
              </a>
              <button
                onClick={() => downloadCalendar("valima")}
                className="btn-royal-outline flex-1 text-[0.62rem] sm:text-[0.66rem] !py-2.5"
              >
                <CalendarPlus className="h-3 w-3 text-gold" />
                <span>Add to Calendar</span>
              </button>
            </div>
          </article>
        </div>

        {/* ================= ORDER OF THE DAY ================= */}
        <div className="reveal mx-auto mt-8 sm:mt-10 max-w-2xl text-center">
          <button
            type="button"
            onClick={() => setShowOrderOfDay(!showOrderOfDay)}
            className="btn-royal-outline !text-[0.62rem] sm:!text-[0.68rem] !py-2 !px-4 cursor-pointer"
          >
            <span>{showOrderOfDay ? "Hide Detailed Schedule" : "View Order of the Day"}</span>
            <ChevronDown
              className={`h-3 w-3 text-gold transition-transform duration-300 ${
                showOrderOfDay ? "rotate-180" : ""
              }`}
            />
          </button>

          {showOrderOfDay && (
            <div className="mt-5 rounded-2xl sm:rounded-3xl border-2 border-gold/75 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] p-5 sm:p-6 shadow-xl text-left animate-in fade-in duration-300">
              <h4 className="font-display text-center text-xs sm:text-sm font-semibold tracking-[0.24em] text-emerald-deep uppercase">
                ORDER OF THE DAY
              </h4>
              <StarDivider className="mt-2 mb-4" />

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step) => (
                  <div
                    key={step.num}
                    className="flex flex-col justify-between rounded-xl border border-gold/40 bg-white/70 p-3 shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-gold/25 pb-1.5">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0F2E23] font-display text-[0.55rem] font-bold text-gold-foil">
                          {step.num}
                        </span>
                        <span className="font-display text-[0.58rem] font-bold text-gold-dark uppercase tracking-wider">
                          {step.time}
                        </span>
                      </div>
                      <h5 className="font-display mt-2 text-xs sm:text-sm font-semibold text-emerald-deep">
                        {step.title}
                      </h5>
                      <p className="font-display text-[0.58rem] font-bold tracking-wider text-gold-dark uppercase mt-0.5">
                        {step.venue}
                      </p>
                      <p className="mt-1 text-[0.7rem] leading-relaxed text-brown-soft">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
