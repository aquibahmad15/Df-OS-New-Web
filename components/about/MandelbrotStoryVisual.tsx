"use client";

// ─────────────────────────────────────────────────────────────────────────────
// MandelbrotStoryVisual — original animated Mandelbrot visual for "Our Story".
// Df-OS is built on the Mandelbrot principle: infinite operational structure
// from one simple rule (z → z² + c). A real Mandelbrot set is computed on a
// canvas in the Df-OS palette (deep navy → brand blue → electric cyan → white
// filaments, black interior) with brand motion layered on top.
//   <MandelbrotStoryVisual />            → framed card (with annotations)
//   <MandelbrotStoryVisual background /> → full-bleed section background
// Reduced-motion safe: the fractal is static; only ambient overlays animate.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useEffect, useRef } from "react";

const STOPS: [number, [number, number, number]][] = [
  [0.0, [6, 16, 46]],
  [0.32, [16, 46, 120]],
  [0.56, [30, 107, 255]],
  [0.78, [25, 212, 255]],
  [1.0, [231, 246, 255]],
];

function palette(t: number): [number, number, number] {
  for (let i = 1; i < STOPS.length; i++) {
    if (t <= STOPS[i][0]) {
      const [t0, c0] = STOPS[i - 1];
      const [t1, c1] = STOPS[i];
      const f = (t - t0) / (t1 - t0 || 1);
      return [
        Math.round(c0[0] + (c1[0] - c0[0]) * f),
        Math.round(c0[1] + (c1[1] - c0[1]) * f),
        Math.round(c0[2] + (c1[2] - c0[2]) * f),
      ];
    }
  }
  return STOPS[STOPS.length - 1][1];
}

function drawMandelbrot(canvas: HTMLCanvasElement, w: number, h: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  canvas.width = w;
  canvas.height = h;
  const img = ctx.createImageData(w, h);
  const data = img.data;
  const maxIter = 120;
  const LOG2 = Math.log(2);
  const cx = -0.62;
  const spanY = 2.46;
  const spanX = spanY * (w / h);
  const xmin = cx - spanX / 2;
  const ymin = -spanY / 2;
  const dx = spanX / w;
  const dy = spanY / h;

  for (let py = 0; py < h; py++) {
    const y0 = ymin + py * dy;
    for (let px = 0; px < w; px++) {
      const x0 = xmin + px * dx;
      let x = 0, y = 0, x2 = 0, y2 = 0, iter = 0;
      while (x2 + y2 <= 4 && iter < maxIter) {
        y = 2 * x * y + y0;
        x = x2 - y2 + x0;
        x2 = x * x;
        y2 = y * y;
        iter++;
      }
      const idx = (py * w + px) * 4;
      if (iter >= maxIter) {
        data[idx] = 2; data[idx + 1] = 5; data[idx + 2] = 14; data[idx + 3] = 255;
      } else {
        const logZn = Math.log(x2 + y2) / 2;
        const nu = Math.log(logZn / LOG2) / LOG2;
        let t = (iter + 1 - nu) / maxIter;
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        t = Math.pow(t, 0.5);
        const c = palette(t);
        data[idx] = c[0]; data[idx + 1] = c[1]; data[idx + 2] = c[2]; data[idx + 3] = 255;
      }
    }
  }
  ctx.putImageData(img, 0, 0);
}

// Deterministic pseudo-random particle field (more density at the base).
const PARTICLES = Array.from({ length: 48 }, (_, i) => {
  const r = (n: number) => {
    const s = Math.sin((i + 1) * n) * 43758.5453;
    return s - Math.floor(s);
  };
  const baseHeavy = r(12.9) > 0.45; // bias roughly 60% toward the lower band
  return {
    left: Math.round(r(78.2) * 100),
    top: Math.round((baseHeavy ? 55 + r(45.1) * 43 : r(34.7) * 60)),
    size: +(1.6 + r(91.3) * 3).toFixed(1),
    dur: 5 + Math.round(r(53.7) * 6),
    delay: +(r(27.4) * 6).toFixed(1),
    drift: Math.round((r(63.1) - 0.5) * 26),
  };
});

export default function MandelbrotStoryVisual({ background = false }: { background?: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    let raf = 0;
    let lastKey = "";
    const render = () => {
      const cw = wrap.clientWidth;
      const ch = wrap.clientHeight;
      if (!cw || !ch) return;
      let w: number, h: number;
      if (background) {
        const scale = Math.min(1, 820 / cw) * 0.92; // cap internal resolution
        w = Math.max(360, Math.round(cw * scale));
        h = Math.max(240, Math.round(ch * scale));
      } else {
        w = Math.max(320, Math.round(Math.min(cw, 760) * 0.9));
        h = Math.round(w * 0.5625);
      }
      const key = `${w}x${h}`;
      if (key === lastKey) return;
      lastKey = key;
      drawMandelbrot(canvas, w, h);
    };
    raf = requestAnimationFrame(render);

    let t: ReturnType<typeof setTimeout>;
    const ro = new ResizeObserver(() => {
      clearTimeout(t);
      t = setTimeout(render, 160);
    });
    ro.observe(wrap);
    return () => { cancelAnimationFrame(raf); clearTimeout(t); ro.disconnect(); };
  }, [background]);

  const sharedOverlays = (
    <>
      <div
        className="mb-glow absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 58% 50%, rgba(25,212,255,0.18) 0%, transparent 45%)" }}
      />
      <div className="absolute inset-0 pointer-events-none">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="mb-dot absolute rounded-full"
            style={{
              left: `${p.left}%`, top: `${p.top}%`,
              width: p.size, height: p.size,
              background: i % 3 === 0 ? "#E7F6FF" : "#19D4FF",
              boxShadow: "0 0 6px rgba(25,212,255,0.9)",
              ["--d" as string]: `${p.dur}s`,
              ["--delay" as string]: `${p.delay}s`,
              ["--drift" as string]: `${p.drift}px`,
            }}
          />
        ))}
      </div>
      <div className="mb-scan absolute left-0 right-0 h-px pointer-events-none"
        style={{ top: 0, background: "linear-gradient(90deg, transparent, rgba(25,212,255,0.5), transparent)" }} />
    </>
  );

  const styleTag = (
    <style>{`
      @keyframes mb-breathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.15); } }
      @keyframes mb-pulse   { 0%,100% { opacity: .28; } 50% { opacity: .75; } }
      @keyframes mb-float    { 0%,100% { transform: translate(0,0); opacity:.4; } 50% { transform: translate(var(--drift,0px), -26px); opacity:1; } }
      @keyframes mb-scan     { 0% { transform: translateY(-20%); opacity:0; } 40% { opacity:.5; } 100% { transform: translateY(2400%); opacity:0; } }
      .mb-canvas { animation: mb-breathe 5.5s ease-in-out infinite; transform-origin: 58% 50%; }
      .mb-glow   { animation: mb-pulse 5.5s ease-in-out infinite; }
      .mb-dot    { animation: mb-float var(--d,8s) ease-in-out infinite; animation-delay: var(--delay,0s); }
      .mb-scan   { animation: mb-scan 10s linear infinite; }
      @media (prefers-reduced-motion: reduce) {
        .mb-canvas,.mb-glow,.mb-dot,.mb-scan { animation: none !important; }
      }
    `}</style>
  );

  // ── Full-bleed background variant ─────────────────────────────────────────
  if (background) {
    return (
      <div
        ref={wrapRef}
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ background: "radial-gradient(circle at 58% 45%, #0a1f55 0%, #050a1c 60%, #03060f 100%)" }}
        aria-hidden="true"
      >
        {styleTag}
        <canvas ref={canvasRef} className="mb-canvas absolute inset-0 w-full h-full" />
        {sharedOverlays}
      </div>
    );
  }

  // ── Framed card variant (with annotations) ───────────────────────────────
  return (
    <div
      ref={wrapRef}
      className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-brand-blue/25 shadow-2xl shadow-brand-blue/20 select-none"
      style={{ background: "radial-gradient(circle at 60% 50%, #0a1f55 0%, #050a1c 60%, #03060f 100%)" }}
    >
      {styleTag}
      <canvas ref={canvasRef} className="mb-canvas absolute inset-0 w-full h-full" aria-hidden="true" />
      {sharedOverlays}
      <div className="absolute inset-0 blueprint-grid opacity-[0.12] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 90px 20px rgba(3,6,15,0.85)" }} />
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1.5 rounded-lg bg-[#050a1c]/70 border border-brand-cyan/25 backdrop-blur-sm">
        <span className="font-mono text-[11px] sm:text-xs text-brand-cyan tracking-wide">z<sub className="text-[8px]">n+1</sub> = z<sub className="text-[8px]">n</sub>² + c</span>
      </div>
      <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 max-w-[78%]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#050a1c]/70 border border-brand-blue/30 backdrop-blur-sm mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan signal-dot" />
          <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.18em] text-brand-cyan font-bold">
            Built on the Mandelbrot principle
          </span>
        </div>
        <p className="text-sm sm:text-base font-semibold text-white leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Infinite operational structure, from one simple rule.
        </p>
      </div>
    </div>
  );
}
