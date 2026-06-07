import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "link";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg text-sm transition-all duration-300 focus:outline-none cursor-pointer";
  
  const variants = {
    primary:
      "px-6 py-3 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue text-white bg-[length:200%_auto] hover:bg-right shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-500 focus:ring-2 focus:ring-brand-cyan focus:ring-offset-2 focus:ring-offset-brand-bg active:scale-[0.98]",
    secondary:
      "px-6 py-3 border border-brand-border bg-brand-card hover:bg-brand-card-hover text-brand-cyan hover:border-brand-cyan/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] focus:ring-2 focus:ring-brand-cyan focus:ring-offset-2 focus:ring-offset-brand-bg active:scale-[0.98]",
    link:
      "text-brand-cyan hover:text-white underline underline-offset-4 decoration-brand-cyan/40 hover:decoration-white focus:ring-2 focus:ring-brand-cyan/50 focus:ring-offset-1 focus:ring-offset-brand-bg rounded",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    // Check if internal or external link
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} className={combinedStyles}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
