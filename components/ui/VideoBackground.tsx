"use client";

import React, { useRef, useEffect, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
}

export default function VideoBackground({
  src,
  poster,
  className = "",
  overlayClassName = "bg-brand-bg/70",
  children,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      video.play().catch(() => {
        // Autoplay may be blocked; silently handle
      });
    } else {
      video.pause();
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Video layer */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        {isVisible && <source src={src} type="video/mp4" />}
      </video>

      {/* Dark overlay for text readability */}
      <div className={`absolute inset-0 ${overlayClassName}`} />

      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
