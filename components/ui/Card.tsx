import React from "react";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "green" | "blue";
  className?: string;
}

export default function Card({
  children,
  variant = "default",
  className = "",
}: CardProps) {
  const baseStyles = "rounded-xl p-6 glow-card transition-all duration-300 relative overflow-hidden group";
  
  const glowVariants = {
    default: "hover:border-brand-blue/30",
    cyan: "glow-card-cyan hover:border-brand-cyan/30",
    blue: "hover:border-brand-blue/30",
    green: "glow-card-green hover:border-brand-green/30",
  };

  const topBorderGlows = {
    default: "bg-brand-blue",
    cyan: "bg-brand-cyan",
    blue: "bg-brand-blue",
    green: "bg-brand-green",
  };

  return (
    <div className={`${baseStyles} ${glowVariants[variant]} ${className}`}>
      {/* Top border glow expansion on hover */}
      <div className={`absolute top-0 left-0 w-full h-[2px] ${topBorderGlows[variant]} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
      {children}
    </div>
  );
}
