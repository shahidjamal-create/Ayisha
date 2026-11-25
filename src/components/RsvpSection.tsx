import { useState, type FormEvent } from "react";
import { Check, MessageCircle, RotateCcw } from "lucide-react";
import { WEDDING } from "../lib/wedding-data";
import { SectionHeading } from "./decor";

interface RsvpRecord {
  name: string;
  guests: number;
  attendance: "accept" | "decline";
  message: string;
  date: string;
}

const STORAGE_KEY = "ayisha-tahir-rsvp";

export default function RsvpSection() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [attendance, setAttendance] = useState<"accept" | "decline">("accept");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(() => {
    try {
      return Boolean(localStorage.getItem(STORAGE_KEY));
    } catch {
      return false;
    }
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;

    const record: RsvpRecord = {
      name: name.trim(),
      guests,
      attendance,
      message: message.trim(),
      date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    } catch {
      // storage unavailable fallback
    }

    setSubmitted(true);
  }

  function handleReset() {
    setSubmitted(false);
  }

  function shareResponseViaWhatsApp() {
    const text = `Assalamu Alaikum! Wedding RSVP for ${WEDDING.brideName} & ${WEDDING.groomName}:\n\n` +
      `Name: ${name || "Guest"}\n` +
      `Response: ${attendance === "accept" ? "Joyfully Accepting with pleasure" : "Regretfully Declining with heartfelt duas"}\n` +
      `Number of Guests: ${guests}\n` +
      (message ? `Message: "${message}"\n\n` : "\n") +
      `May Allah bless the wedding of Ayisha & Tahir!`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <section id="rsvp" className="paper-texture scroll-mt-24 border-y border-gold/30 bg-gradient-to-b from-[#562222]/80 via-[#692C2C] to-[#562222]/80 px-3.5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-xl text-center">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="KINDLY RESPOND"
          title="RSVP &amp; Attendance"
          subtitle="We would be deeply honoured by your presence. Kindly let us know if you can join us on our blessed day."
        />

        {/* Bespoke Royal Stationery Card Form */}
        <div className="reveal relative mx-auto mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border-2 border-gold/75 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] p-6 sm:p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45),0_8px_25px_-8px_rgba(197,160,89,0.25)] text-left">
          {submitted ? (
            <div className="py-4 text-center animate-in fade-in duration-300">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-[#692C2C] text-gold-foil shadow-sm">
                <Check className="h-6 w-6" />
              </span>
              <h3 className="font-display mt-4 text-xl sm:text-2xl font-semibold text-emerald-deep">
                JazakAllahu Khairan!
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-brown-soft leading-relaxed max-w-sm mx-auto">
                Your response has been received with warmth and gratitude. We look forward to celebrating together Insha&rsquo; Allah!
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={shareResponseViaWhatsApp}
                  className="btn-royal-emerald w-full justify-center !py-3"
                >
                  <MessageCircle className="h-4 w-4 text-gold-foil" />
                  <span>Share Response on WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-1.5 py-2 font-display text-[0.62rem] sm:text-[0.66rem] font-semibold tracking-wider text-brown-soft hover:text-emerald uppercase transition-colors cursor-pointer"
                >
                  <RotateCcw className="h-3 w-3" /> Edit your response
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* 1. Your Name */}
              <div>
                <label htmlFor="rsvp-name" className="font-display block text-[0.68rem] sm:text-xs font-semibold tracking-wider text-emerald-deep uppercase">
                  Your Name <span className="text-gold">*</span>
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Uncle Farooq & Family"
                  className="mt-1.5 w-full rounded-xl border border-gold/40 bg-white/90 px-4 py-2.5 font-body text-xs sm:text-sm text-brown placeholder:text-brown-soft/45 outline-none focus:border-[#0F2E23] focus:ring-1 focus:ring-[#0F2E23] transition-all shadow-2xs"
                />
              </div>

              {/* 2. Number of Guests */}
              <div>
                <label className="font-display block text-[0.68rem] sm:text-xs font-semibold tracking-wider text-emerald-deep uppercase">
                  Number of Guests <span className="text-gold">*</span>
                </label>
                <div className="mt-1.5 flex items-center justify-between rounded-xl border border-gold/40 bg-white/90 px-4 py-2.5 shadow-2xs">
                  <span className="font-body text-xs sm:text-sm font-medium text-emerald-deep">
                    {guests} {guests === 1 ? "Guest attending" : "Guests attending"}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      aria-label="Decrease guest count"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="flex h-7 w-7 items-center justify-center rounded-lg border border-gold/40 bg-white font-display text-xs text-brown hover:bg-gold/10 transition-colors cursor-pointer"
                    >
                      &minus;
                    </button>
                    <button
                      type="button"
                      aria-label="Increase guest count"
                      onClick={() => setGuests(Math.min(10, guests + 1))}
                      className="flex h-7 w-7 items-center justify-center rounded-lg border border-gold/40 bg-white font-display text-xs text-brown hover:bg-gold/10 transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* 3. Your Response (Radio) */}
              <div>
                <span className="font-display block text-[0.68rem] sm:text-xs font-semibold tracking-wider text-emerald-deep uppercase">
                  Your Response <span className="text-gold">*</span>
                </span>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <label
                    onClick={() => setAttendance("accept")}
                    className={`flex items-center justify-center gap-2 rounded-xl border p-2.5 text-center cursor-pointer transition-all select-none ${
                      attendance === "accept"
                        ? "border-[#0F2E23] bg-[#0F2E23] text-white shadow-xs"
                        : "border-gold/40 bg-white/80 text-emerald-deep hover:bg-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="accept"
                      checked={attendance === "accept"}
                      onChange={() => setAttendance("accept")}
                      className="sr-only"
                    />
                    <span className="font-display text-[0.62rem] sm:text-[0.68rem] font-semibold tracking-wider uppercase">
                      Joyfully Accept
                    </span>
                  </label>

                  <label
                    onClick={() => setAttendance("decline")}
                    className={`flex items-center justify-center gap-2 rounded-xl border p-2.5 text-center cursor-pointer transition-all select-none ${
                      attendance === "decline"
                        ? "border-[#0F2E23] bg-[#0F2E23] text-white shadow-xs"
                        : "border-gold/40 bg-white/80 text-emerald-deep hover:bg-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="decline"
                      checked={attendance === "decline"}
                      onChange={() => setAttendance("decline")}
                      className="sr-only"
                    />
                    <span className="font-display text-[0.62rem] sm:text-[0.68rem] font-semibold tracking-wider uppercase">
                      Regretfully Decline
                    </span>
                  </label>
                </div>
              </div>

              {/* 4. Message (optional) */}
              <div>
                <label htmlFor="rsvp-message" className="font-display block text-[0.68rem] sm:text-xs font-semibold tracking-wider text-emerald-deep uppercase">
                  Heartfelt Du'a or Message <span className="text-[0.65rem] text-brown-soft/60 font-normal normal-case">(optional)</span>
                </label>
                <textarea
                  id="rsvp-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a prayer or warm wishes for the couple..."
                  rows={2}
                  className="mt-1.5 w-full rounded-xl border border-gold/40 bg-white/90 px-4 py-2.5 font-body text-xs sm:text-sm text-brown placeholder:text-brown-soft/45 outline-none focus:border-[#0F2E23] focus:ring-1 focus:ring-[#0F2E23] transition-all resize-none shadow-2xs"
                />
              </div>

              {/* 5. Submit Button */}
              <button
                type="submit"
                className="btn-royal-emerald w-full justify-center !py-3 cursor-pointer"
              >
                <span>CONFIRM ATTENDANCE</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
