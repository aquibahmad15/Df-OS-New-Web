import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "blue" | "indigo" | "green";
  className?: string;
}

export default function Badge({
  children,
  variant = "cyan",
  className = "",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border backdrop-blur-md";
  
  const variants = {
    cyan: "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20",
    blue: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
    indigo: "bg-brand-indigo/10 text-brand-indigo border-brand-indigo/20",
    green: "bg-brand-green/10 text-brand-green border-brand-green/20",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 signal-dot" />
      {children}
    </div>
  );
}
