import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { shareOnWhatsApp } from "../lib/helpers";

// Simple sticky navigation with a mobile hamburger menu.
const LINKS = [
  { label: "Home", id: "home" },
  { label: "Invitation", id: "invitation" },
  { label: "Events", id: "events" },
  { label: "RSVP", id: "rsvp" },
  { label: "Blessings", id: "duas" },
  { label: "Location", id: "location" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Add a soft shadow once the guest starts scrolling.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently on screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function goTo(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`no-print sticky top-0 z-50 border-b border-gold/40 bg-[#0F2E23]/95 text-[#FAF7F0] backdrop-blur ${
        scrolled ? "shadow-[0_4px_24px_rgba(8,26,19,0.35)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3.5 py-2 sm:px-6 sm:py-2.5">
        {/* Logo */}
        <button
          onClick={() => goTo("home")}
          className="flex items-center gap-2 sm:gap-2.5 text-left"
          aria-label="Ayisha and Tahir — go to top"
        >
          <span className="font-display flex h-8 w-8 sm:h-8.5 sm:w-8.5 shrink-0 items-center justify-center rounded-full border border-gold bg-[#184635] text-[0.58rem] sm:text-[0.62rem] font-bold tracking-widest text-gold-foil shadow-xs">
            A·T
          </span>
          <span>
            <span className="font-display block text-xs sm:text-sm leading-tight font-semibold tracking-[0.1em] sm:tracking-[0.12em] text-[#FAF7F0]">
              AYISHA <span className="text-gold">&amp;</span> TAHIR
            </span>
            <span className="block text-[0.62rem] sm:text-[0.7rem] leading-tight text-gold-light/90 italic">
              Wedding Invitation · 12.12.2026
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex" aria-label="Main navigation">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              className={`font-display relative py-1 text-[0.68rem] sm:text-[0.72rem] font-semibold tracking-[0.14em] uppercase transition-colors ${
                active === link.id ? "text-gold-foil" : "text-gold-light/85 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute right-0 -bottom-0.5 left-0 h-px bg-gold transition-transform duration-300 ${
                  active === link.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          ))}
          <button onClick={shareOnWhatsApp} className="btn-gold !px-3 !py-1.5 text-[0.68rem]">
            <MessageCircle className="h-3 w-3" /> Share
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center border border-gold/60 bg-[#184635] text-gold shadow-xs lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-gold/40 bg-[#0F2E23] px-4 pt-2 pb-5 lg:hidden" aria-label="Mobile navigation">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              className={`font-display block w-full border-b border-gold/25 py-3 text-left text-[0.85rem] font-semibold tracking-[0.18em] uppercase ${
                active === link.id ? "text-gold-foil" : "text-gold-light"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button onClick={shareOnWhatsApp} className="btn-gold mt-4 w-full">
            <MessageCircle className="h-4 w-4" /> Share on WhatsApp
          </button>
        </nav>
      )}
    </header>
  );
}
