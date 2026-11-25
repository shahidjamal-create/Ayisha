// Ayisha & Tahir — Wedding Invitation Website
// One-page invitation made of small components (see src/components).
import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import Couple from "./components/Couple";
import Countdown from "./components/Countdown";
import Events from "./components/Events";
import RsvpSection from "./components/RsvpSection";
import DeveloperGuide from "./components/DeveloperGuide";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import ScrollProgress from "./components/ScrollProgress";
import BackgroundAnimation from "./components/BackgroundAnimation";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal(); // gentle fade-in as sections scroll into view
  const showDevGuide = typeof window !== "undefined" && window.location.search.includes("dev=true");

  return (
    <div className="relative min-h-screen bg-[#692C2C] font-body text-brown overflow-x-hidden">
      <BackgroundAnimation />
      <ScrollProgress />
      <MusicPlayer />
      <main className="relative z-10">
        <Hero />
        <Invitation />
        <Couple />
        <Countdown />
        <Events />
        <RsvpSection />
        {showDevGuide && <DeveloperGuide />}
      </main>
      <Footer />
    </div>
  );
}