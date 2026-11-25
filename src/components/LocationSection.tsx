import { useState } from "react";
import { Check, Copy, ExternalLink, MapPin, Navigation } from "lucide-react";
import { WEDDING } from "../lib/wedding-data";
import { copyText } from "../lib/helpers";
import { MosqueIcon, SectionHeading } from "./decor";
import { UtensilsCrossed } from "lucide-react";

// Venue locations with live Google Maps (search based — no invented coordinates).
export default function LocationSection() {
  const [tab, setTab] = useState<"nikah" | "valima">("nikah");
  const [copied, setCopied] = useState("");

  async function handleCopy(text: string, key: string) {
    if (await copyText(text)) {
      setCopied(key);
      setTimeout(() => setCopied(""), 2200);
    }
  }

  const venues = [
    {
      key: "nikah" as const,
      icon: <MosqueIcon className="h-6 w-6" />,
      label: "Nikah Venue",
      name: WEDDING.nikah.venue,
      detail: "Vaniyambadi · Nikah at 12:15 PM",
      address: "Masjid-e-Khaderpet, Vaniyambadi.",
      directions: WEDDING.nikah.mapDirections,
      search: WEDDING.nikah.mapSearch,
      embed: WEDDING.nikah.mapEmbed,
    },
    {
      key: "valima" as const,
      icon: <UtensilsCrossed className="h-5 w-5" />,
      label: "Valima Venue",
      name: WEDDING.valima.venue,
      detail: "Lunch after Zohar Prayer",
      address: "Mattekar Street, Muslimpur, Vaniyambadi.",
      directions: WEDDING.valima.mapDirections,
      search: WEDDING.valima.mapSearch,
      embed: WEDDING.valima.mapEmbed,
    },
  ];

  const active = venues.find((v) => v.key === tab)!;

  return (
    <section id="location" className="scroll-mt-24 px-3.5 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Finding Your Way"
          title="Venue Locations"
          subtitle="Both venues are in Vaniyambadi. Tap Get Directions and Google Maps will guide you from wherever you are."
        />

        {/* Venue tabs */}
        <div className="reveal mx-auto mt-5 sm:mt-7 grid max-w-md grid-cols-2 rounded-xs border-2 border-gold/70 bg-paper p-1 shadow-sm" role="tablist" aria-label="Choose a venue">
          {venues.map((v) => (
            <button
              key={v.key}
              role="tab"
              aria-selected={tab === v.key}
              onClick={() => setTab(v.key)}
              className={`font-display flex items-center justify-center gap-1.5 px-2 py-2 sm:px-2.5 sm:py-2.5 text-[0.62rem] sm:text-[0.68rem] font-bold tracking-[0.12em] sm:tracking-[0.16em] uppercase transition-all rounded-xs ${
                tab === v.key ? "bg-gradient-to-r from-[#0F2E23] to-[#1A4738] text-gold-foil shadow-xs" : "text-emerald hover:bg-cream"
              }`}
            >
              {v.icon} {v.label}
            </button>
          ))}
        </div>

        {/* Live map */}
        <div className="reveal mt-3.5 sm:mt-4 overflow-hidden rounded-xs border-2 border-gold/70 bg-paper p-1 sm:p-1.5 shadow-sm">
          <iframe
            key={active.key}
            title={`Google Map — ${active.name}, Vaniyambadi`}
            src={active.embed}
            className="h-52 sm:h-64 md:h-72 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="flex flex-wrap items-center justify-between gap-2.5 px-3 py-2.5 sm:px-3.5 sm:py-3 bg-[#FAF7F0] border-t border-gold/30">
            <div>
              <p className="font-display text-xs sm:text-sm font-semibold text-emerald-deep">{active.name}</p>
              <p className="text-[0.7rem] sm:text-xs text-brown-soft">{active.address} · {active.detail}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <a href={active.directions} target="_blank" rel="noreferrer" className="btn-emerald !px-2.5 !py-1.5 text-[0.65rem]">
                <Navigation className="h-3 w-3" /> Directions
              </a>
              <button
                onClick={() => handleCopy(`${active.name}, ${active.address}`, active.key)}
                className="btn-outline !px-2.5 !py-1.5 text-[0.65rem]"
              >
                {copied === active.key ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                {copied === active.key ? "Copied" : "Copy Address"}
              </button>
              <a href={active.search} target="_blank" rel="noreferrer" className="btn-outline !px-2.5 !py-1.5 text-[0.65rem]">
                <ExternalLink className="h-3 w-3" /> Open Maps
              </a>
            </div>
          </div>
        </div>

        <p className="reveal mx-auto mt-4 max-w-md text-center text-[0.72rem] sm:text-xs text-brown-soft italic">
          Travelling from outside Vaniyambadi? The Directions button opens turn-by-turn
          guidance in Google Maps from your current location.
        </p>
      </div>
    </section>
  );
}
