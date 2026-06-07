"use client";

import React from "react";
import Image from "next/image";

interface ProductScreenFrameProps {
  src: string;
  alt: string;
  url?: string;
  className?: string;
  priority?: boolean;
}

export default function ProductScreenFrame({
  src,
  alt,
  url = "app.df-os.com",
  className = "",
  priority = false,
}: ProductScreenFrameProps) {
  return (
    <div
      className={`relative rounded-2xl border border-brand-border/60 bg-slate-950/60 p-1.5 shadow-2xl backdrop-blur-md overflow-hidden group ${className}`}
    >
      {/* Subtle glow on hover */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-cyan/10 via-transparent to-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Browser chrome bar */}
      <div className="relative flex items-center gap-1.5 px-3 py-2 border-b border-brand-border/40 mb-1.5 bg-slate-950/40 rounded-t-xl">
        <span className="w-2 h-2 rounded-full bg-red-500/40" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/40" />
        <span className="w-2 h-2 rounded-full bg-green-500/40" />
        <div className="flex-1 flex justify-center">
          <span className="text-[9px] font-mono text-slate-500 bg-slate-900/60 px-3 py-0.5 rounded-full border border-brand-border/30">
            https://{url}
          </span>
        </div>
      </div>

      {/* Image with hover zoom */}
      <div className="overflow-hidden rounded-lg relative">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={750}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          priority={priority}
        />
        {/* Bottom fade for seamless blend */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
