"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Particle {
  x: number; // local coordinate relative to text center
  y: number;
  color: string;
  vx: number;
  vy: number;
  size: number;
}

export default function VishAiHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const particlesRef = useRef<Particle[]>([]);

  // Performance Optimization: Intersection Observer to play/pause video
  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideoVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVideoVisible) {
      video.play().catch(() => {
        // Handle potential autoplay block
      });
    } else {
      video.pause();
    }
  }, [isVideoVisible]);

  const initParticles = () => {
    if (typeof window === "undefined") return;
    const isMobile = window.innerWidth < 768;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set text canvas size
    const width = isMobile ? 600 : 1200;
    const height = isMobile ? 300 : 400;
    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height);

    // Draw text with brand Red-Blue-White shimmer gradient style
    const grad = ctx.createLinearGradient(width * 0.25, 0, width * 0.75, 0);
    grad.addColorStop(0, "#ffffff");
    grad.addColorStop(0.25, "#ffffff");
    grad.addColorStop(0.45, "#ef4444"); // brand red
    grad.addColorStop(0.65, "#3b82f6"); // brand blue
    grad.addColorStop(0.85, "#ffffff");
    grad.addColorStop(1, "#ffffff");

    ctx.fillStyle = grad;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Set fonts (20% reduction)
    const h1Font = isMobile ? "900 38px sans-serif" : "900 76px sans-serif";
    const subFont = isMobile ? "300 10px monospace" : "300 19px monospace";

    // Draw H1 "VISH AI"
    ctx.font = h1Font;
    const h1Y = isMobile ? height / 2 - 15 : height / 2 - 28;
    ctx.fillText("VISH AI", width / 2, h1Y);

    // Draw Subtitle "FACTORY INTELLIGENCE"
    ctx.font = subFont;
    const subtitleText = "FACTORY INTELLIGENCE";
    const subY = isMobile ? height / 2 + 20 : height / 2 + 28;

    const anyCtx = ctx as CanvasRenderingContext2D & { letterSpacing?: string };
    if (anyCtx.letterSpacing !== undefined) {
      anyCtx.letterSpacing = isMobile ? "3px" : "6px";
      anyCtx.fillText(subtitleText, width / 2, subY);
    } else {
      const chars = subtitleText.split("");
      const charGap = isMobile ? 10 : 19;
      const totalWidth = chars.length * charGap;
      const startX = width / 2 - totalWidth / 2 + charGap / 2;
      chars.forEach((c, idx) => {
        anyCtx.fillText(c, startX + idx * charGap, subY);
      });
    }

    // Extract pixel data
    const imgData = ctx.getImageData(0, 0, width, height);
    const tempParticles: Particle[] = [];
    const sampleRate = isMobile ? 3 : 2;

    const cx = width / 2;
    const cy = height / 2;

    for (let y = 0; y < height; y += sampleRate) {
      for (let x = 0; x < width; x += sampleRate) {
        const idx = (y * width + x) * 4;
        const alpha = imgData.data[idx + 3];
        if (alpha > 80) {
          const r = imgData.data[idx];
          const g = imgData.data[idx + 1];
          const b = imgData.data[idx + 2];

          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 2 + 0.5;

          tempParticles.push({
            x: x - cx,
            y: y - cy,
            color: `rgba(${r},${g},${b},${alpha / 255})`,
            vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 1.5,
            vy: Math.sin(angle) * speed - 1.5 - Math.random() * 2,
            size: Math.random() * 2 + 0.8,
          });
        }
      }
    }
    particlesRef.current = tempParticles;
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
    canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
  };

  useEffect(() => {
    initParticles();
    resizeCanvas();
    window.addEventListener("resize", () => {
      initParticles();
      resizeCanvas();
    });

    return () => {
      window.removeEventListener("resize", () => {
        initParticles();
        resizeCanvas();
      });
    };
  }, []);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !triggerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        end: "+=1200",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);

          const canvas = canvasRef.current;
          if (!canvas) return;
          const canvasCtx = canvas.getContext("2d");
          if (!canvasCtx) return;

          const W = canvas.width;
          const H = canvas.height;
          canvasCtx.clearRect(0, 0, W, H);

          // Draw particles if within the active disintegration range (0.02 to 0.70)
          if (progress > 0.02 && progress < 0.7) {
            const t = (progress - 0.02) / 0.58; // normalize progress from 0 to 1
            const cx = W / 2;
            const cy = H / 2;

            const activeParticles = particlesRef.current;
            activeParticles.forEach((p) => {
              // Dispersal physics
              const dx = p.vx * t * 250 + (t * t * 150);
              const dy = p.vy * t * 200 - (t * 180);
              const wave = Math.sin(p.y * 0.04 + t * 10) * 20 * t;

              const px = cx + p.x + dx + wave;
              const py = cy + p.y + dy;

              const alpha = Math.max(0, 1 - t * 1.6);
              if (alpha <= 0) return;

              canvasCtx.fillStyle = p.color;
              canvasCtx.globalAlpha = alpha;
              canvasCtx.beginPath();
              canvasCtx.arc(px, py, p.size, 0, Math.PI * 2);
              canvasCtx.fill();
            });
          }
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        ref={triggerRef}
        className="relative h-screen w-full bg-[#07070a] overflow-hidden"
      >
        {/* Video Background Layer - Absolute viewport cover */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/particle-ring.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Vignette & Radial Dark Overlay */}
        <div className="absolute inset-0 bg-brand-bg/10 bg-[radial-gradient(circle_at_center,rgba(7,7,10,0.05)_0%,rgba(7,7,10,0.65)_100%)] z-10 pointer-events-none" />

        {/* Fullscreen Dust Disintegration Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
        />

        {/* Content Wrapper - Enforces absolute 100% height centering */}
        <div className="relative z-10 w-full h-full">
          {/* Slide 1: Vish AI & Factory Intelligence (Centered) */}
          <div
            className="absolute left-1/2 text-center px-4 w-full"
            style={{
              top: "50%",
              opacity: Math.max(0, 1 - scrollProgress * 12),
              transform: `translate(-50%, -50%) scale(${1 - scrollProgress * 0.1})`,
              pointerEvents: scrollProgress > 0.08 ? "none" : "auto",
              transition: "transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-shimmer-brand-red-blue drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] uppercase">
                Vish AI
              </h1>
              <span className="block text-sm sm:text-xl md:text-2xl lg:text-3xl font-mono tracking-[0.25em] text-shimmer-brand-red-blue mt-2 font-light uppercase">
                Factory Intelligence
              </span>
            </div>
          </div>

          {/* Slide 2: Reworked Layout & Spacious Gaps */}
          <div
            className="absolute inset-0 px-4 sm:px-6 lg:px-8 text-center"
            style={{
              opacity: scrollProgress < 0.25 ? 0 : Math.min(1, (scrollProgress - 0.25) * 4),
              transform: `translateY(${scrollProgress < 0.25 ? 30 : Math.max(0, 30 - (scrollProgress - 0.25) * 120)}px) scale(${scrollProgress < 0.25 ? 0.96 : Math.min(1, 0.96 + (scrollProgress - 0.25) * 0.04)})`,
              pointerEvents: scrollProgress < 0.45 ? "none" : "auto",
              transition: "transform 0.1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.1s ease-out",
            }}
          >
            {/* Header Content & Body Content (Centered at 45% to allow 3x CTA gap) */}
            <div
              className="absolute left-1/2 text-center w-full max-w-4xl px-4 flex flex-col items-center"
              style={{
                top: "45%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Rest of the Header - Standard Shimmering Brand Header, 15% size increase */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-shimmer leading-tight max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Dashboards to Decisions
              </h2>

              {/* Gaps between header and content */}
              <div className="h-5 md:h-6" />

              {/* Body Content - Formatted into exactly 3 lines with reduced max-width to avoid touching the circle ring */}
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
                Vish AI is the manufacturing intelligence layer that uses <br className="hidden sm:block" />
                Df-OS factory memory to answer questions, explain deviations, <br className="hidden sm:block" />
                detect patterns, prioritize actions, and support faster decisions.
              </p>
            </div>

            {/* CTA Buttons - Separated to increase gap between body content and CTA, with 1.7x gap to bottom status line */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 flex flex-col items-center bottom-[23%] sm:bottom-[25%] md:bottom-[27%]"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto">
                <Button href="/contact" variant="primary" className="w-full sm:w-auto px-8 py-3">
                  Book a Demo
                </Button>
                <Button href="#capabilities" variant="secondary" className="w-full sm:w-auto px-8 py-3">
                  Explore AI Capabilities
                </Button>
              </div>
            </div>

            {/* Bottom Status Console Line - Cardless, single line, bold (non-italic), positioned near the absolute bottom of the slide */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-[90%] sm:w-[75%] max-w-5xl text-center font-mono font-bold text-[10.5px] sm:text-sm md:text-base lg:text-lg text-slate-300 select-none tracking-widest bottom-[2%] sm:bottom-[2.5%] md:bottom-[3%] flex items-center justify-center gap-3 z-20 opacity-80 hover:opacity-100 transition-opacity duration-300 leading-normal"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green signal-dot shrink-0 animate-pulse" />
              <span>
                <span className="text-blue-500 font-extrabold">Df-OS makes the factory <span className="underline decoration-blue-500/40 decoration-2 underline-offset-4">AI-Ready</span>.</span>
                <span className="mx-2 sm:mx-4 text-slate-500 font-normal">|</span>
                <span className="text-red-500 font-extrabold">Vish AI makes the Factory <span className="underline decoration-red-500/40 decoration-2 underline-offset-4">Intelligent</span>.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
