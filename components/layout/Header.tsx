"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { headerMenu } from "@/data/siteData";
import Button from "../ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    const id = requestAnimationFrame(() => setIsOpen(false));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/80 backdrop-blur-md border-b border-brand-border/60 py-3 shadow-lg"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      {/* Subtle scanning beam background */}
      <div className="scan-beam opacity-[0.05] absolute inset-0 -z-10" />
      
      {/* Scroll glow bottom border */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent shadow-[0_1px_8px_rgba(6,182,212,0.2)]" />
      )}

      {/* Scroll-progress indicator — fills as the page is read */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-indigo shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative">
            {/* Soft glow on hover — lifts the mark off the dark bar */}
            <div className="absolute -inset-3 bg-brand-cyan/10 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="relative flex items-center transition-transform duration-300 group-hover:scale-[1.03]">
              <Image
                src="/logos/Df-OS final_logo-01.svg"
                alt="Df-OS Logo"
                width={120}
                height={57}
                className={`w-auto select-none relative z-10 transition-all duration-300 ${scrolled ? "h-[42px]" : "h-[55px]"}`}
                priority
              />
              {/* Pulsing signal dot beside logo */}
              <span className="absolute -top-0.5 -right-2 w-1.5 h-1.5 rounded-full bg-brand-green signal-dot" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {headerMenu.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 group ${
                    isActive
                      ? "text-brand-cyan font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-cyan rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            <Button href="/contact" variant="primary" className="group flex items-center gap-1.5">
              Book a Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-brand-bg/95 backdrop-blur-lg z-40 border-t border-brand-border/40">
          <div className="flex flex-col p-6 gap-6 h-full justify-between pb-24">
            <nav className="flex flex-col gap-5">
              {headerMenu.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-lg font-medium py-2 border-b border-brand-border/30 ${
                      isActive ? "text-brand-cyan" : "text-slate-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="flex flex-col gap-4">
              <Button href="/contact" variant="primary" className="w-full">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
