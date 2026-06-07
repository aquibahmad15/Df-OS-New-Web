import React from "react";
import Image from "next/image";

interface StockImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  overlay?: "dark" | "gradient" | "none";
  aspectRatio?: "landscape" | "portrait" | "square";
}

export default function StockImage({
  src,
  alt,
  className = "",
  priority = false,
  overlay = "gradient",
  aspectRatio = "landscape",
}: StockImageProps) {
  const aspectStyles = {
    landscape: "aspect-[16/9]",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
  };

  const overlayStyles = {
    dark: "bg-brand-bg/50",
    gradient:
      "bg-gradient-to-t from-brand-bg via-brand-bg/30 to-transparent",
    none: "",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-brand-border/30 ${aspectStyles[aspectRatio]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
      />
      {overlay !== "none" && (
        <div className={`absolute inset-0 ${overlayStyles[overlay]}`} />
      )}
    </div>
  );
}
