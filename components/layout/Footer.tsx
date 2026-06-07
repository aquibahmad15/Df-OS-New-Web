import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, footerSections } from "@/data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050507] border-t border-transparent text-slate-400 py-12 md:py-16 mt-auto overflow-hidden">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/30 to-brand-blue/30 opacity-70" />
      
      {/* Circuit board pattern overlay */}
      <div className="circuit-pattern opacity-[0.05] absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 group relative w-fit">
              {/* Glow orb behind logo */}
              <div className="absolute -inset-4 bg-brand-cyan/15 blur-md rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <Image
                src="/logos/Df-OS final_logo-01.svg"
                alt="Df-OS Logo"
                width={120}
                height={57}
                className="h-8 w-auto select-none relative z-10"
              />
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The AI-ready Digital Factory Operating System for modern manufacturing. 
              Digitize processes, connect shopfloor machines, automate workflows, and build the 
              operating memory required for Vish AI decision intelligence.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-brand-border bg-brand-card hover:border-brand-cyan/50 hover:text-white hover:shadow-[0_0_12px_rgba(6,182,212,0.35)] flex items-center justify-center transition-all duration-300"
                aria-label="Df-OS LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-brand-border bg-brand-card hover:border-brand-blue/50 hover:text-white hover:shadow-[0_0_12px_rgba(59,130,246,0.35)] flex items-center justify-center transition-all duration-300"
                aria-label="Df-OS Twitter Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-brand-border bg-brand-card hover:border-brand-cyan/50 hover:text-white hover:shadow-[0_0_12px_rgba(6,182,212,0.35)] flex items-center justify-center transition-all duration-300"
                aria-label="Df-OS GitHub Codebase"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Sitemap Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Col */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span className="leading-snug">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-white transition-colors">
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-border/40 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Df-OS Technologies Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about#security" className="hover:text-slate-300 transition-colors">
              Security & Trust
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
