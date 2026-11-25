import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

// Types of authentic project flowers for the background animation:
// 1. Jasmine Blossom (exact open white flower with golden pistil from floral-corner)
// 2. White Rose (delicate watercolor ivory rose from the project)
// 3. Jasmine Floret (small delicate 5-petal flower)
// 4. White Rose Petal (individual soft fluttering petal)
// 5. Golden Barakah Star (twinkling 4-point gold star)

type FlowerType = "jasmine" | "rose" | "floret" | "petal" | "star";

interface FlowerParticle {
  type: FlowerType;
  x: number;
  y: number;
  size: number;
  vy: number;
  vx: number;
  swaySpeed: number;
  swayAmp: number;
  swayPhase: number;
  rot: number;
  rotSpeed: number;
  flip: number;
  flipSpeed: number;
  alpha: number;
  scaleY: number;
  imgIndex?: number;
}

const FLOWER_SRCS = [
  "/images/flower-jasmine.png",
  "/images/flower-rose.png",
  "/images/flower-floret.png",
  "/images/flower-petal.png",
];

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [active, setActive] = useState(true);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let particles: FlowerParticle[] = [];
    let isTabVisible = true;
    let imagesLoaded = false;

    // Preload project flower images
    const loadedImgs: HTMLImageElement[] = [];
    let loadCounter = 0;

    FLOWER_SRCS.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadCounter++;
        if (loadCounter === FLOWER_SRCS.length) {
          imagesLoaded = true;
        }
      };
      loadedImgs.push(img);
    });

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setActive(false);
      return;
    }

    function handleResize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx?.scale(dpr, dpr);
      initParticles();
    }

    function createParticle(initialY?: number): FlowerParticle {
      const rand = Math.random();
      let type: FlowerType;
      let imgIndex = 0;
      let baseSize = 24;

      if (rand < 0.35) {
        // Jasmine blossom
        type = "jasmine";
        imgIndex = 0;
        baseSize = Math.random() * 14 + 22; // 22px - 36px
      } else if (rand < 0.6) {
        // Jasmine small floret
        type = "floret";
        imgIndex = 2;
        baseSize = Math.random() * 10 + 16; // 16px - 26px
      } else if (rand < 0.8) {
        // Single fluttering petal
        type = "petal";
        imgIndex = 3;
        baseSize = Math.random() * 8 + 14;  // 14px - 22px
      } else if (rand < 0.92) {
        // Full cream white rose
        type = "rose";
        imgIndex = 1;
        baseSize = Math.random() * 16 + 28; // 28px - 44px
      } else {
        // Golden starlight sparkle
        type = "star";
        baseSize = Math.random() * 3 + 2.5;
      }

      // Parallax depth: smaller flowers fall slower in background, larger fall slightly faster
      const depthFactor = baseSize / 30;

      return {
        type,
        imgIndex,
        x: Math.random() * width,
        y: initialY !== undefined ? initialY : Math.random() * height,
        size: baseSize,
        vy: (Math.random() * 0.45 + 0.35) * depthFactor,
        vx: (Math.random() - 0.5) * 0.35,
        swaySpeed: Math.random() * 0.018 + 0.008,
        swayAmp: Math.random() * 0.9 + 0.5,
        swayPhase: Math.random() * Math.PI * 2,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.016,
        flip: Math.random() * Math.PI * 2,
        flipSpeed: Math.random() * 0.02 + 0.01,
        alpha: Math.random() * 0.3 + 0.55, // soft opacity so it doesn't distract
        scaleY: 1,
      };
    }

    function initParticles() {
      // Responsive density:
      // Mobile (<768px): ~22 flowers (light, 60fps, zero lag)
      // Tablet (<1024px): ~34 flowers
      // Desktop: ~48 flowers
      const isMobile = width < 768;
      const isTablet = width < 1024;
      const count = isMobile ? 22 : isTablet ? 34 : 48;

      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(createParticle());
      }
    }

    function drawFourPointStar(
      context: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      r: number,
      alpha: number
    ) {
      context.save();
      context.beginPath();
      context.translate(cx, cy);

      const spikes = 4;
      const innerRadius = r * 0.3;
      let rot = -Math.PI / 2;
      const step = Math.PI / spikes;

      context.moveTo(0, -r);
      for (let i = 0; i < spikes; i++) {
        context.lineTo(Math.cos(rot) * r, Math.sin(rot) * r);
        rot += step;
        context.lineTo(Math.cos(rot) * innerRadius, Math.sin(rot) * innerRadius);
        rot += step;
      }
      context.closePath();

      context.shadowColor = "rgba(216, 189, 138, 0.7)";
      context.shadowBlur = r * 2.5;
      context.fillStyle = `rgba(181, 138, 69, ${alpha})`;
      context.fill();

      context.restore();
    }

    function render() {
      if (!ctx || !isTabVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Natural sinusoidal breeze sway
        p.swayPhase += p.swaySpeed;
        const sway = Math.sin(p.swayPhase) * p.swayAmp;

        p.y += p.vy;
        p.x += p.vx + sway;
        p.rot += p.rotSpeed;
        p.flip += p.flipSpeed;
        p.scaleY = Math.sin(p.flip);

        // 2. Interactive mouse breeze
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130 && dist > 0) {
            const force = (130 - dist) / 130;
            p.x += (dx / dist) * force * 1.5;
            p.y += (dy / dist) * force * 1.0;
          }
        }

        // 3. Wrap around screen smoothly
        if (p.y > height + 40) {
          p.y = -35;
          p.x = Math.random() * width;
        }
        if (p.x < -35) p.x = width + 35;
        if (p.x > width + 35) p.x = -35;

        // 4. Render flower or star
        if (p.type === "star") {
          const twinkle = 0.5 + 0.5 * Math.sin(p.swayPhase * 2);
          drawFourPointStar(ctx, p.x, p.y, p.size, p.alpha * twinkle);
        } else if (imagesLoaded && p.imgIndex !== undefined) {
          const img = loadedImgs[p.imgIndex];
          if (img && img.complete && img.naturalWidth > 0) {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);

            // 3D tumbling flutter effect (scaleY)
            const sy = Math.max(0.15, Math.abs(p.scaleY));
            ctx.scale(1, sy);

            ctx.globalAlpha = p.alpha;
            // Draw centered
            const halfSize = p.size / 2;
            ctx.drawImage(img, -halfSize, -halfSize, p.size, p.size);
            ctx.restore();
          }
        }
      }

      animId = requestAnimationFrame(render);
    }

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    function handleMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    }
    function handleMouseLeave() {
      mouseRef.current.active = false;
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    function handleVisibility() {
      isTabVisible = !document.hidden;
    }
    document.addEventListener("visibilitychange", handleVisibility);

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [active]);

  return (
    <>
      {/* Background ambient glowing gradient orbs (warm gold & soft ivory) */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-[15%] left-[10%] h-[550px] w-[550px] rounded-full bg-gradient-to-br from-gold/18 via-[#853737]/20 to-transparent blur-[90px] will-change-transform"
          style={{ animation: "orb-float-1 16s ease-in-out infinite alternate" }}
        />
        <div
          className="absolute top-[45%] -right-[10%] h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-[#692C2C]/25 via-gold/14 to-transparent blur-[100px] will-change-transform"
          style={{ animation: "orb-float-2 20s ease-in-out infinite alternate" }}
        />
        <div
          className="absolute -bottom-[10%] left-[25%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-gold/14 via-[#853737]/15 to-transparent blur-[85px] will-change-transform"
          style={{ animation: "orb-float-1 18s ease-in-out infinite alternate-reverse" }}
        />
      </div>

      {/* High-performance canvas for floating project flowers (roses, jasmine, florets, petals) */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 select-none"
        style={{ display: active ? "block" : "none" }}
      />
    </>
  );
}
