"use client";

import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/siteData";
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    jobTitle: "",
    industry: "",
    factorySize: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.company ||
      !formData.industry ||
      !formData.factorySize
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-[90vh] bg-brand-bg blueprint-grid relative py-16 md:py-24 overflow-hidden">
      {/* Background Particles & Beams */}
      <div className="particle-grid opacity-[0.8]" />
      <div className="scan-beam opacity-[0.05]" />
      
      {/* Subtle Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form Container */}
          <div className="lg:col-span-7">
            <Card variant="cyan" className="p-6 md:p-10 border border-brand-border bg-brand-card/70 backdrop-blur-md relative overflow-hidden">
              <div className="circuit-pattern opacity-[0.06] absolute inset-0 pointer-events-none" />
              <div className="scan-beam opacity-[0.03] absolute inset-0 pointer-events-none" />
              <div className="absolute inset-0 blueprint-grid-fine opacity-20 pointer-events-none" />
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                  <div className="flex flex-col gap-2">
                    <Badge variant="cyan" className="self-start">
                      Book a Session
                    </Badge>
                    <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight text-shimmer">
                      Schedule a Df-OS Platform Demo
                    </h1>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Connect with our solution experts to see how a Digital Factory Operating System fits into your plant&apos;s daily workflows.
                    </p>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/25 rounded-lg text-xs text-red-400">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="firstName" className="text-xs font-mono text-slate-400">
                        First Name <span className="text-brand-cyan">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="bg-[#050508] border border-brand-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan/60 focus:ring-1 focus:ring-brand-cyan/60 focus:shadow-[0_0_8px_rgba(6,182,212,0.15)] transition-all"
                        placeholder="John"
                      />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="lastName" className="text-xs font-mono text-slate-400">
                        Last Name <span className="text-brand-cyan">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="bg-[#050508] border border-brand-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan/60 focus:ring-1 focus:ring-brand-cyan/60 focus:shadow-[0_0_8px_rgba(6,182,212,0.15)] transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Work Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-slate-400">
                        Work Email <span className="text-brand-cyan">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-[#050508] border border-brand-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan/60 focus:ring-1 focus:ring-brand-cyan/60 focus:shadow-[0_0_8px_rgba(6,182,212,0.15)] transition-all"
                        placeholder="john.doe@company.com"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="text-xs font-mono text-slate-400">
                        Company Name <span className="text-brand-cyan">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-[#050508] border border-brand-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan/60 focus:ring-1 focus:ring-brand-cyan/60 focus:shadow-[0_0_8px_rgba(6,182,212,0.15)] transition-all"
                        placeholder="Global Mfg Inc."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-mono text-slate-400">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-[#050508] border border-brand-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan/60 focus:ring-1 focus:ring-brand-cyan/60 focus:shadow-[0_0_8px_rgba(6,182,212,0.15)] transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    {/* Job Title */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="jobTitle" className="text-xs font-mono text-slate-400">
                        Job Title
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="bg-[#050508] border border-brand-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan/60 focus:ring-1 focus:ring-brand-cyan/60 focus:shadow-[0_0_8px_rgba(6,182,212,0.15)] transition-all"
                        placeholder="Plant Head / VP Digital"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Industry Select */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="industry" className="text-xs font-mono text-slate-400">
                        Manufacturing Industry <span className="text-brand-cyan">*</span>
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        className="bg-[#050508] border border-brand-border rounded-lg px-4 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-brand-cyan/60 focus:ring-1 focus:ring-brand-cyan/60 focus:shadow-[0_0_8px_rgba(6,182,212,0.15)] transition-all cursor-pointer"
                      >
                        <option value="">Select your vertical</option>
                        <option value="fmcg">FMCG</option>
                        <option value="durables">Consumer Durables & Electronics</option>
                        <option value="fnb">Food & Beverages</option>
                        <option value="automotive">Automotive</option>
                        <option value="pharmaceuticals">Pharmaceuticals</option>
                        <option value="other">Other Manufacturing</option>
                      </select>
                    </div>

                    {/* Factory Size Select */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="factorySize" className="text-xs font-mono text-slate-400">
                        Factory Size <span className="text-brand-cyan">*</span>
                      </label>
                      <select
                        id="factorySize"
                        name="factorySize"
                        required
                        value={formData.factorySize}
                        onChange={handleChange}
                        className="bg-[#050508] border border-brand-border rounded-lg px-4 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-brand-cyan/60 focus:ring-1 focus:ring-brand-cyan/60 focus:shadow-[0_0_8px_rgba(6,182,212,0.15)] transition-all cursor-pointer"
                      >
                        <option value="">Select headcount range</option>
                        <option value="small">&lt; 100 workers</option>
                        <option value="medium">100 - 500 workers</option>
                        <option value="large">&gt; 500 workers</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-slate-400">
                      Additional Requirements / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-[#050508] border border-brand-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan/60 focus:ring-1 focus:ring-brand-cyan/60 focus:shadow-[0_0_8px_rgba(6,182,212,0.15)] transition-all resize-none"
                      placeholder="Tell us about your current shopfloor setup (e.g. ERP, MES integration needs)..."
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full py-3.5 mt-2 group">
                    Schedule My Platform Demo
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              ) : (
                // SUCCESS SCREEN
                <div className="flex flex-col items-center justify-center text-center py-12 gap-5 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-brand-cyan/10 border-2 border-brand-cyan flex items-center justify-center text-brand-cyan mb-2 shadow-lg shadow-brand-cyan/10 animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <h2 className="text-2xl font-extrabold text-white">
                    Demo Request Received!
                  </h2>
                  
                  <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                    Thank you, <strong className="text-brand-cyan">{formData.firstName}</strong>. 
                    Our manufacturing solutions team has received your request for <strong>{formData.company}</strong>.
                  </p>

                  <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
                    We will review your details (Industry: {formData.industry.toUpperCase()}) and send an invitation link to <strong>{formData.email}</strong> within 12 business hours.
                  </p>

                  <Button onClick={() => setSubmitted(false)} variant="secondary" className="mt-4">
                    Modify Details or Submit New Form
                  </Button>
                </div>
              )}
            </Card>
          </div>

          {/* Right Column: Contact info & Trust Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-6">
            <div className="flex flex-col gap-2">
              <Badge variant="blue">Get in Touch</Badge>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                Direct Contact Details
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Need technical support or have general inquiries? Reach out to us directly through these lines.
              </p>
            </div>

            {/* Direct Details */}
            <Card variant="default" className="flex flex-col gap-4 border border-brand-border bg-brand-card/45">
              <div className="flex items-start gap-3 text-xs">
                <MapPin className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5 text-slate-300">
                  <strong className="text-white text-sm">Physical HQ Address</strong>
                  <span className="text-xs">{siteConfig.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs border-t border-brand-border/40 pt-4">
                <Mail className="w-5 h-5 text-brand-cyan shrink-0" />
                <div className="flex flex-col gap-0.5 text-slate-300">
                  <strong className="text-white text-sm">Email Address</strong>
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-xs hover:text-white transition-colors">
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs border-t border-brand-border/40 pt-4">
                <Phone className="w-5 h-5 text-brand-cyan shrink-0" />
                <div className="flex flex-col gap-0.5 text-slate-300">
                  <strong className="text-white text-sm">Phone Support</strong>
                  <a href={`tel:${siteConfig.phone}`} className="text-xs hover:text-white transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </Card>

            {/* Security Highlights */}
            <Card variant="default" className="flex flex-col gap-4 border border-brand-border bg-brand-card/45">
              <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider flex items-center gap-1.5 border-b border-brand-border/40 pb-3">
                <ShieldCheck className="w-4 h-4 text-brand-green" /> Compliance & Security
              </h3>
              <div className="flex flex-col gap-3 text-xs text-slate-400">
                <p>
                  <strong className="text-white">ISO 27001 Certified:</strong> We maintain formal data security, audit tracking, and database isolation credentials.
                </p>
                <p>
                  <strong className="text-white">Data Protection:</strong> All records are encrypted at rest using AES-256 and in transit via TLS 1.3 algorithms.
                </p>
              </div>
            </Card>

          </div>

        </div>
      </div>
    </div>
  );
}
