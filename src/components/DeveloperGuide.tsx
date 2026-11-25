import { useState, type ReactNode } from "react";
import { Check, ChevronDown, Copy, ImageIcon, Rocket, Wrench } from "lucide-react";
import { copyText } from "../lib/helpers";

// For the family member / developer maintaining this website:
// how to run it, deploy it on Netlify, and update photos & text.
// Kept closed by default so guests see a clean invitation first.
function CodeBlock({ code, label }: { code: string; label: string }) {
  const [done, setDone] = useState(false);
  return (
    <div className="relative mt-3">
      <pre className="overflow-x-auto bg-brown px-4 py-4 font-mono text-[0.85rem] leading-relaxed text-cream">{code}</pre>
      <button
        onClick={async () => {
          if (await copyText(code)) {
            setDone(true);
            setTimeout(() => setDone(false), 2000);
          }
        }}
        className="absolute top-2 right-2 inline-flex items-center gap-1.5 border border-gold-light/60 bg-paper px-2.5 py-1.5 font-display text-[0.62rem] font-bold tracking-widest text-brown uppercase"
        aria-label={`Copy ${label}`}
      >
        {done ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        {done ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function GuideSection({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <details className="guide border border-gold-light/80 bg-paper">
      <summary className="flex items-center justify-between gap-3 px-5 py-4">
        <span className="font-display flex items-center gap-3 text-[0.92rem] font-semibold tracking-wide text-brown">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-light bg-cream text-gold-dark">{icon}</span>
          {title}
        </span>
        <ChevronDown className="guide-chevron h-4.5 w-4.5 shrink-0 text-gold-dark" />
      </summary>
      <div className="border-t border-gold-light/50 px-5 py-5 text-[1.02rem] leading-relaxed text-brown-soft">{children}</div>
    </details>
  );
}

export default function DeveloperGuide() {
  return (
    <section id="guide" className="no-print scroll-mt-24 px-4 pb-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="reveal text-center font-display text-[0.7rem] font-bold tracking-[0.3em] text-gold-dark uppercase">
          For the Developer
        </p>
        <h2 className="reveal font-display mt-2 text-center text-2xl font-semibold text-brown">
          Run · Update · Deploy
        </h2>
        <p className="reveal mx-auto mt-2 max-w-xl text-center text-brown-soft italic">
          Simple instructions to run this project on your computer, change photos and text,
          and publish it free on Netlify. Tap a heading to open it.
        </p>

        <div className="reveal mt-8 space-y-4">
          {/* 1 — Run locally */}
          <GuideSection icon={<Wrench className="h-4.5 w-4.5" />} title="1. Install & Run the Project">
            <ol className="list-decimal space-y-2 pl-5">
              <li>Install <strong className="text-brown">Node.js (LTS)</strong> from nodejs.org if you don&rsquo;t have it.</li>
              <li>Open a terminal inside the project folder.</li>
              <li>Install the packages and start the development server:</li>
            </ol>
            <CodeBlock label="install and run commands" code={"npm install\nnpm run dev"} />
            <p className="mt-3">Open the address shown in the terminal (usually <code className="bg-cream px-1.5 py-0.5 font-mono text-[0.9rem] text-brown">http://localhost:5173</code>). The page updates automatically as you edit files.</p>
            <p className="mt-3">To create the final production files (in a folder named <code className="bg-cream px-1.5 py-0.5 font-mono text-[0.9rem] text-brown">dist</code>):</p>
            <CodeBlock label="build command" code={"npm run build"} />
          </GuideSection>

          {/* 2 — Netlify */}
          <GuideSection icon={<Rocket className="h-4.5 w-4.5" />} title="2. Deploy Free on Netlify">
            <p><strong className="text-brown">Easiest way — drag &amp; drop:</strong></p>
            <ol className="mt-2 list-decimal space-y-2 pl-5">
              <li>Run <code className="bg-cream px-1.5 py-0.5 font-mono text-[0.9rem] text-brown">npm run build</code> on your computer.</li>
              <li>Go to netlify.com, sign in, and open <em>Sites → Add new site → Deploy manually</em>.</li>
              <li>Drag the <code className="bg-cream px-1.5 py-0.5 font-mono text-[0.9rem] text-brown">dist</code> folder onto the page. Your invitation is live in seconds.</li>
            </ol>
            <p className="mt-4"><strong className="text-brown">From GitHub (auto-updates on every change):</strong> connect the repository on Netlify and use these build settings:</p>
            <div className="mt-3 overflow-x-auto border border-gold-light/70">
              <table className="w-full text-left text-[0.98rem]">
                <tbody>
                  <tr className="border-b border-gold-light/50 bg-cream"><th className="px-4 py-2.5 font-semibold text-brown">Build command</th><td className="px-4 py-2.5 font-mono text-[0.9rem]">npm run build</td></tr>
                  <tr className="border-b border-gold-light/50"><th className="px-4 py-2.5 font-semibold text-brown">Publish directory</th><td className="px-4 py-2.5 font-mono text-[0.9rem]">dist</td></tr>
                  <tr className="bg-cream"><th className="px-4 py-2.5 font-semibold text-brown">Node version (optional)</th><td className="px-4 py-2.5 font-mono text-[0.9rem]">20</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">After deploying, open <em>Site configuration → Change site name</em> to get a friendly link such as <code className="bg-cream px-1.5 py-0.5 font-mono text-[0.9rem] text-brown">ayisha-tahir-wedding.netlify.app</code>, then share it on WhatsApp using the green Share button on this page.</p>
          </GuideSection>

          {/* 3 — Updating */}
          <GuideSection icon={<ImageIcon className="h-4.5 w-4.5" />} title="3. Update Text & Replace Photos">
            <p><strong className="text-brown">Wedding details:</strong> every name, date, venue and map link lives in one file — <code className="bg-cream px-1.5 py-0.5 font-mono text-[0.9rem] text-brown">src/lib/wedding-data.ts</code>. Edit it and the whole website updates.</p>
            <p className="mt-3"><strong className="text-brown">Gallery photos:</strong> after the wedding, replace these files in <code className="bg-cream px-1.5 py-0.5 font-mono text-[0.9rem] text-brown">public/images/</code> with real photographs, keeping the same names:</p>
            <CodeBlock
              label="gallery image file names"
              code={"gallery-rings.jpg\ngallery-mosque.jpg\ngallery-mehndi.jpg\ngallery-bouquet.jpg\ngallery-lanterns.jpg\ngallery-calligraphy.jpg\ncard-original.jpg   (the printed card — keep this one)"}
            />
            <p className="mt-3">To add more photos or change captions, edit the <code className="bg-cream px-1.5 py-0.5 font-mono text-[0.9rem] text-brown">GALLERY</code> list in <code className="bg-cream px-1.5 py-0.5 font-mono text-[0.9rem] text-brown">wedding-data.ts</code>. Then run <code className="bg-cream px-1.5 py-0.5 font-mono text-[0.9rem] text-brown">npm run build</code> and redeploy the new <code className="bg-cream px-1.5 py-0.5 font-mono text-[0.9rem] text-brown">dist</code> folder.</p>
            <p className="mt-3"><strong className="text-brown">Project structure:</strong> each section is a small component in <code className="bg-cream px-1.5 py-0.5 font-mono text-[0.9rem] text-brown">src/components/</code> (Navbar, Hero, Invitation, Couple, Countdown, Events, Gallery, DuaWall, LocationSection, Footer) — edit any one without touching the others.</p>
          </GuideSection>
        </div>
      </div>
    </section>
  );
}
