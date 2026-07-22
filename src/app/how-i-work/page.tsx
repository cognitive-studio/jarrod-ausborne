import Link from "next/link";
import { howIWork } from "@/data/how-i-work";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How I Work — Jarrod Ausborne",
  description:
    "Design leadership looks like this. How Jarrod Ausborne approaches practice building, product collaboration, research, and design systems.",
};

const sections = Object.values(howIWork);

export default function HowIWorkPage() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-20">
      {/* Page header */}
      <div className="max-w-2xl mb-20">
        <p className="text-brand-red text-xs tracking-widest uppercase font-mono mb-4">
          How I Work
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-brand-light tracking-tight leading-tight">
          Design leadership looks like this.
        </h1>
      </div>

      {/* Sections */}
      <div className="max-w-2xl mx-auto">
        {sections.map((section, i) => {
          const sectionNumber = String(i + 1).padStart(2, "0");
          return (
            <article
              key={section.title}
              className="py-16 border-b border-brand-border last:border-b-0"
            >
              <div className="flex items-start gap-6 mb-6">
                <span className="text-4xl font-bold text-brand-border font-mono shrink-0 leading-none mt-1">
                  {sectionNumber}
                </span>
                <h2 className="text-xl md:text-2xl font-semibold text-brand-light leading-snug">
                  {section.title}
                </h2>
              </div>
              <div className="pl-[calc(2.5rem+1.5rem)] space-y-5">
                {section.content.map((paragraph, j) => (
                  <p key={j} className="text-brand-muted leading-relaxed text-[15px]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      {/* CTA strip */}
      <div className="max-w-2xl mx-auto mt-20 pt-16 border-t border-brand-border">
        <p className="text-brand-muted text-sm mb-4">Want to see this in practice?</p>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-medium text-sm rounded-sm hover:bg-[#d63e2f] transition-colors"
        >
          View Case Studies →
        </Link>
      </div>
    </div>
  );
}
