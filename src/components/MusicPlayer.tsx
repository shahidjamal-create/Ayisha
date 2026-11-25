import { useEffect, useRef } from "react";

/**
 * Universal Headless Background Music Player for Ayisha & Tahir Wedding
 * 
 * Bulletproof Mobile & Published Production Architecture:
 * 1. Deployment Path Agnostic: Dynamically utilizes `import.meta.env.BASE_URL` so audio
 *    resolves flawlessly on root domains (Vercel, Netlify, Custom Domains) and
 *    subpaths (GitHub Pages, staging environments).
 * 2. Mobile Safari (iOS) & Android Chrome Autoplay Compliance:
 *    - iOS/Android require a transient user activation gesture before permitting unmuted playback.
 *    - Listens to comprehensive mobile gesture triggers: `touchstart`, `touchend`, `click`,
 *      `pointerdown`, `pointerup`, and `keydown`.
 *    - Primes the Web Audio pipeline on first touch to bypass mobile hardware audio dormancy.
 * 3. Mobile Low-Power & Visibility Handling:
 *    - Automatically handles page visibility changes (when user minimizes browser or switches tabs).
 * 4. Dual-Codec Fallback: ISO BMFF .m4a (native hardware acceleration) + .aac fallback.
 * 5. Completely Headless: Zero visible button, icon, or logo on the frontend.
 */
export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.65;
    audio.loop = true;

    // Resolve audio paths relative to Vite's base deployment URL
    const baseUrl = import.meta.env.BASE_URL.endsWith("/")
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;
    
    const m4aSrc = `${baseUrl}audio/ayisha-tayyiba.m4a`;
    const aacSrc = `${baseUrl}audio/ayisha-tayyiba.aac`;

    // Ensure audio element has proper source if not already loaded
    if (!audio.src) {
      // Use canPlayType to select the optimal codec for the device
      const canPlayM4A = audio.canPlayType("audio/mp4; codecs=\"mp4a.40.2\"") || audio.canPlayType("audio/mp4");
      audio.src = canPlayM4A ? m4aSrc : aacSrc;
      audio.load();
    }

    // Set mobile MediaSession metadata if supported (iOS 15+, Android Chrome)
    if ("mediaSession" in navigator) {
      try {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: "Ayisha & Tahir Wedding",
          artist: "Royal Wedding Celebration",
          album: "Wedding Invitation",
        });
      } catch {
        // MediaSession optional
      }
    }

    const playAudio = async () => {
      try {
        // Prime Web Audio Context if available (wakes up mobile iOS/Android audio chip)
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          const tempCtx = new AudioContextClass();
          if (tempCtx.state === "suspended") {
            await tempCtx.resume();
          }
        }

        await audio.play();
        removeUnlockListeners();
      } catch {
        // Waiting for mobile user gesture
      }
    };

    // Attempt immediate playback (allowed on desktop unmuted tabs, or returning visitors)
    playAudio();

    // Comprehensive mobile and desktop interaction triggers
    const unlockEvents = [
      "touchstart",
      "touchend",
      "pointerdown",
      "pointerup",
      "click",
      "keydown",
    ];

    const unlockHandler = () => {
      playAudio();
    };

    const removeUnlockListeners = () => {
      unlockEvents.forEach((evt) => {
        window.removeEventListener(evt, unlockHandler);
        document.removeEventListener(evt, unlockHandler);
      });
    };

    unlockEvents.forEach((evt) => {
      window.addEventListener(evt, unlockHandler, { passive: true, once: true });
      document.addEventListener(evt, unlockHandler, { passive: true, once: true });
    });

    // Handle mobile tab switching / screen lock
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab hidden
      } else {
        // Tab visible again: if audio was playing, resume smoothly
        if (audio.paused && !audio.ended) {
          audio.play().catch(() => {});
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      removeUnlockListeners();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      audio.pause();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      preload="auto"
      loop
      playsInline
      aria-hidden="true"
      className="hidden"
    />
  );
}
