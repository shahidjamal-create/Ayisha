import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { GALLERY } from "../lib/wedding-data";
import { SectionHeading } from "./decor";

// Responsive photo gallery with a simple lightbox.
// To add real wedding photographs later, replace the files in
// public/images/ (keep the same names) or edit GALLERY in wedding-data.ts.
export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setSelected((cur) => (cur === null ? cur : (cur + dir + GALLERY.length) % GALLERY.length)),
    []
  );

  // Keyboard controls inside the lightbox.
  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close, step]);

  return (
    <section id="gallery" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Beautiful Moments"
          title="Wedding Gallery"
          subtitle="A little glimpse of the celebration to come. Wedding photographs will be added here after the big day, Insha' Allah."
        />

        <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3">
          {GALLERY.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setSelected(i)}
              className="group reveal relative overflow-hidden rounded-xs border-2 border-gold/70 bg-[#0F2E23] text-left shadow-sm transition-all duration-300 hover:border-gold hover:shadow-[0_12px_30px_rgba(15,46,35,0.25)]"
              aria-label={`View photo: ${photo.title}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0F2E23]/20">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="zoom-img h-full w-full object-cover"
                />
              </div>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#081A13]/95 via-[#0F2E23]/60 to-transparent px-3 pt-7 pb-2.5 sm:px-4 sm:pt-8 sm:pb-3">
                <span className="font-display block text-[0.62rem] sm:text-xs font-semibold tracking-[0.14em] text-gold-foil uppercase">
                  {photo.title}
                </span>
              </span>
              <span className="absolute top-2 right-2 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-xs bg-[#0F2E23]/90 text-gold-foil border border-gold/60 opacity-0 transition-opacity group-hover:opacity-100 shadow-xs">
                <Expand className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </span>
            </button>
          ))}
        </div>

        <p className="reveal mt-5 sm:mt-6 text-center text-xs sm:text-sm text-brown-soft italic">
          Tap any picture to view it larger. Family members may send their favourite photos to be added here.
        </p>
      </div>

      {/* ---------- LIGHTBOX ---------- */}
      {selected !== null && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-brown/92 p-4" onClick={close} role="dialog" aria-label="Photo viewer">
          <button className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center border border-gold-light bg-paper text-brown" onClick={close} aria-label="Close photo viewer">
            <X className="h-5 w-5" />
          </button>
          <button
            className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center border border-gold-light bg-paper text-brown sm:left-6"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center border border-gold-light bg-paper text-brown sm:right-6"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <figure className="max-h-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY[selected].src}
              alt={GALLERY[selected].title}
              className="mx-auto max-h-[74vh] w-auto border border-gold-light bg-paper object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center">
              <span className="font-display block text-sm font-semibold tracking-[0.2em] text-cream uppercase">
                {GALLERY[selected].title}
              </span>
              <span className="mt-1 block text-cream/85 italic">{GALLERY[selected].caption}</span>
              <span className="mt-2 block text-[0.85rem] text-gold-light">
                {selected + 1} of {GALLERY.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
