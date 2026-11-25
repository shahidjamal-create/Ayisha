import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { WEDDING } from "../lib/wedding-data";
import { StarDivider } from "./decor";

// Closing footer with the family gratitude and dua.
export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="no-print fixed bottom-5 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold/70 bg-[#692C2C] text-gold-foil shadow-lg backdrop-blur-md sm:right-6 sm:bottom-6 cursor-pointer hover:bg-[#853737] hover:border-gold transition-all"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4 text-gold-foil" />
        </button>
      )}

      <footer className="no-print relative overflow-hidden bg-gradient-to-b from-[#4A1C1C] via-[#2F0F0F] to-[#1A0707] px-3.5 pt-12 pb-9 text-[#FAF7F0] sm:px-6 sm:pt-14">
        {/* Metallic Gold Foil Top Hairline */}
        <span className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />
        
        <div className="mx-auto max-w-2xl text-center">
          {/* Closing Gratitude in Arabic & English */}
          <p className="font-arabic text-3xl sm:text-4xl text-gold-foil tracking-wide font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" lang="ar" dir="rtl">
            جَزَاكَ اللّٰهُ خَيْرًا
          </p>
          <p className="font-display mt-1 text-[0.65rem] sm:text-xs font-semibold tracking-[0.28em] text-gold uppercase">
            JazakAllahu Khairan
          </p>

          <p className="mx-auto mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-[#FAF7F0]/90 italic font-body">
            &ldquo;May Allah bless this beautiful union and grant the couple a lifetime of happiness, love, peace, and barakah.&rdquo;
          </p>
          <p className="mt-2 text-xs sm:text-sm text-gold-light/90 italic font-body">
            With gratitude to all our family and friends.
          </p>

          <StarDivider className="mt-5 opacity-85" />

          <h2 className="font-serif mt-5 text-2xl sm:text-3xl font-light tracking-widest text-gold-foil">
            AYISHA <span className="font-serif text-gold italic font-normal">&amp;</span> TAHIR
          </h2>
          <p className="font-display mt-2 text-[0.6rem] sm:text-[0.66rem] font-semibold tracking-[0.3em] text-gold-light/75 uppercase">
            {WEDDING.dateText} · Vaniyambadi
          </p>

          <div className="mt-8 border-t border-white/10 pt-4">
            <p className="text-xs text-gold-light/75 italic font-body">
              With love from the family of {WEDDING.hostName} · Made with care for relatives &amp; friends, near and far.
            </p>
            <p className="mt-1 text-[0.68rem] text-[#FAF7F0]/40 font-body">
              Your presence and duas are the greatest gifts. Barakallahu Feekum.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
