import { useEffect, useState, type FormEvent } from "react";
import { Heart, Quote, Send, Trash2 } from "lucide-react";
import { SEED_DUAS } from "../lib/wedding-data";
import { SectionHeading } from "./decor";

// Blessings Wall — guests leave a dua for the couple.
// Messages are saved in the browser's localStorage on this device.
type Dua = { name: string; message: string; date: string };
const STORAGE_KEY = "ayisha-tahir-duas";

export default function DuaWall() {
  const [duas, setDuas] = useState<Dua[]>(SEED_DUAS);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [thanks, setThanks] = useState(false);
  const [error, setError] = useState("");

  // Load saved duas when the page opens.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setDuas(JSON.parse(saved));
    } catch {
      // If storage is unavailable, the welcome duas still show.
    }
  }, []);

  function save(next: Dua[]) {
    setDuas(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore — the dua still appears for this visit
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) return setError("Please add your name so the couple knows who sent this dua.");
    if (message.trim().length < 5) return setError("Please write a short dua or message for the couple.");
    const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    save([{ name: name.trim(), message: message.trim(), date: today }, ...duas]);
    setName("");
    setMessage("");
    setError("");
    setThanks(true);
    setTimeout(() => setThanks(false), 4000);
  }

  function removeDua(index: number) {
    save(duas.filter((_, i) => i !== index));
  }

  return (
    <section id="duas" className="scroll-mt-24 border-y border-gold-light/60 bg-cream-2/60 px-3.5 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Your Prayers Mean the World"
          title="Leave a Dua"
          subtitle="Share a prayer or a kind word for Ayisha & Tahir as they begin this blessed chapter."
        />

        {/* The wedding dua */}
        <div className="reveal mx-auto mt-5 sm:mt-7 max-w-xl rounded-xs border-2 border-gold/70 bg-gradient-to-r from-[#0F2E23] via-[#1A4738] to-[#0F2E23] px-3.5 py-4 sm:px-5 sm:py-5 text-center shadow-md text-[#FAF7F0]">
          <p className="font-arabic text-base sm:text-xl md:text-2xl leading-[1.8] text-gold-foil" lang="ar" dir="rtl">
            بَارَكَ ٱللَّهُ لَكُمْ وَبَارَكَ عَلَيْكُمْ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
          <p className="mt-1.5 text-xs sm:text-sm text-gold-light italic">
            &ldquo;May Allah bless you, send blessings upon you, and bring you together in goodness.&rdquo;
          </p>
        </div>

        <div className="mt-6 sm:mt-8 grid items-start gap-5 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ---------- FORM ---------- */}
          <form onSubmit={handleSubmit} className="reveal rounded-xl border border-[#EADBCE] bg-[#FEFDFC] p-4 sm:p-5 shadow-[0_8px_25px_rgba(56,39,25,0.04)] text-left">
            <h3 className="font-display flex items-center gap-1.5 text-sm sm:text-base font-semibold tracking-wide text-[#526344]">
              <Heart className="h-4 w-4 fill-[#526344] text-[#526344]" /> Send Your Blessings
            </h3>

            <label className="font-serif mt-3.5 sm:mt-4 block text-xs sm:text-sm font-medium text-brown" htmlFor="dua-name">
              Your Name <span className="text-[#C9A96B]">*</span>
            </label>
            <input
              id="dua-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Aunty Naseema, Chennai"
              maxLength={60}
              className="mt-1 w-full rounded-lg border border-[#E2D8C6] bg-white px-3 py-2 font-body text-xs sm:text-sm text-brown placeholder:text-brown-soft/45 outline-none focus:border-[#526344] focus:ring-1 focus:ring-[#526344] transition-all"
            />

            <label className="font-serif mt-3 sm:mt-3.5 block text-xs sm:text-sm font-medium text-brown" htmlFor="dua-message">
              Your Dua / Message <span className="text-[#C9A96B]">*</span>
            </label>
            <textarea
              id="dua-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a dua for the couple…"
              rows={3}
              maxLength={400}
              className="mt-1 w-full resize-none rounded-lg border border-[#E2D8C6] bg-white px-3 py-2 font-body text-xs sm:text-sm text-brown placeholder:text-brown-soft/45 outline-none focus:border-[#526344] focus:ring-1 focus:ring-[#526344] transition-all"
            />
            <p className="mt-1 text-right text-[0.62rem] text-brown-soft">{message.length} / 400</p>

            {error && <p className="mt-1.5 text-xs font-semibold text-red-800">{error}</p>}
            {thanks && (
              <p className="mt-1.5 rounded-md border border-[#526344]/30 bg-[#526344]/10 text-[#526344] px-3 py-2 text-xs font-semibold">
                JazakAllahu Khairan! Your dua has been added to the wall below.
              </p>
            )}

            <button type="submit" className="mt-3.5 w-full rounded-lg bg-[#526344] py-2.5 px-4 font-display text-[0.7rem] font-semibold tracking-[0.16em] text-[#FAF7F0] uppercase shadow-xs transition-all hover:bg-[#3D4A34] cursor-pointer">
              <Send className="inline mr-1 h-3 w-3" /> Send Your Blessings
            </button>
            <p className="mt-2 text-center text-[0.68rem] text-brown-soft italic">
              Duas are saved on this device so you can see them whenever you return.
            </p>
          </form>

          {/* ---------- WALL ---------- */}
          <div className="reveal">
            <p className="font-display text-[0.62rem] sm:text-[0.68rem] font-bold tracking-[0.2em] text-gold-dark uppercase">
              {duas.length} Blessing{duas.length === 1 ? "" : "s"} Received
            </p>
            <div className="mt-2.5 sm:mt-3 grid gap-2.5 sm:gap-3 sm:grid-cols-2">
              {duas.map((dua, i) => (
                <article key={`${dua.name}-${i}`} className="relative border border-gold-light/80 bg-paper p-3 sm:p-3.5 shadow-2xs">
                  <Quote className="h-3.5 w-3.5 text-gold-light" aria-hidden="true" />
                  <p className="mt-1 text-[0.75rem] sm:text-xs leading-relaxed text-brown">{dua.message}</p>
                  <div className="mt-2.5 flex items-end justify-between gap-2.5 border-t border-gold-light/50 pt-2">
                    <div>
                      <p className="font-display text-xs font-semibold tracking-wide text-brown">{dua.name}</p>
                      <p className="text-[0.65rem] text-brown-soft">{dua.date}</p>
                    </div>
                    <button
                      onClick={() => removeDua(i)}
                      className="flex h-6 w-6 shrink-0 items-center justify-center border border-gold-light/70 text-brown-soft transition-colors hover:border-red-300 hover:text-red-700"
                      aria-label={`Remove dua from ${dua.name}`}
                      title="Remove this dua"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
            {duas.length === 0 && (
              <p className="border border-dashed border-gold-light bg-paper px-4 py-6 text-center text-xs text-brown-soft italic">
                No duas yet — be the first to bless the couple.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
