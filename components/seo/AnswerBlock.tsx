import React from "react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { Cpu } from "lucide-react";

interface AnswerBlockProps {
  question: string;
  answer: string;
  className?: string;
}

export default function AnswerBlock({
  question,
  answer,
  className = "",
}: AnswerBlockProps) {
  return (
    <Card
      variant="cyan"
      className={`relative overflow-hidden border border-brand-cyan/20 bg-brand-card/85 backdrop-blur-md p-6 md:p-8 ${className}`}
    >
      {/* Scanning beam overlay */}
      <div className="scan-beam opacity-[0.04] absolute inset-0 pointer-events-none" />

      {/* Decorative Blueprint Corner Line with CPU icon */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none border-t border-r border-brand-cyan/25 flex items-start justify-end p-2.5">
        <Cpu className="w-4 h-4 text-brand-cyan/30 animate-pulse" />
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none border-b border-l border-brand-cyan/25" />
      
      <div className="flex flex-col gap-4 relative z-10">
        <div className="flex items-center justify-between">
          <Badge variant="cyan" className="text-[10px]">
            AI-Readable Operational Context
          </Badge>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
          </div>
        </div>

        <h3 className="text-lg md:text-xl font-bold tracking-tight text-white flex items-start gap-2">
          <span className="text-brand-cyan font-mono select-none">Q:</span>
          {question}
        </h3>

        <div className="text-slate-300 text-sm md:text-base leading-relaxed pl-6 border-l-2 border-brand-cyan/40">
          <p>{answer}</p>
        </div>
      </div>
    </Card>
  );
}
