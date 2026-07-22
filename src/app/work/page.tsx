"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/data/case-studies";

const FILTERS = [
  "All",
  "Enterprise Tools",
  "Design Systems",
  "0→1",
  "Research",
  "Consumer",
] as const;

type Filter = (typeof FILTERS)[number];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Page Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-[#F04735] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            WORK
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e5e5e5] leading-tight mb-4">
            Case Studies
          </h1>
          <p className="text-[#999999] text-base md:text-lg max-w-2xl leading-relaxed">
            8 years of enterprise design problems, 0→1 products, and design
            systems that outlasted the project.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={[
                "px-4 py-2 rounded-sm text-xs font-semibold tracking-wide uppercase transition-all duration-150 border",
                activeFilter === filter
                  ? "bg-[#F04735] text-white border-[#F04735]"
                  : "bg-transparent text-[#999999] border-[#2a2a2a] hover:border-[#F04735]/40 hover:text-[#e5e5e5]",
              ].join(" ")}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group block bg-[#181818] rounded-sm border border-[#2a2a2a] hover:border-[#F04735]/30 hover:-translate-y-1 transition-all duration-200 overflow-hidden"
            >
              {/* Hero Image */}
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={cs.heroImage}
                  alt={cs.title}
                  fill
                  className="object-cover rounded-sm group-hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Category tag */}
                <p className="text-[#F04735] text-[10px] font-semibold tracking-[0.18em] uppercase mb-2">
                  {cs.category}
                </p>

                {/* Title */}
                <h2 className="text-[#e5e5e5] text-lg font-semibold leading-snug mb-1 group-hover:text-white transition-colors">
                  {cs.title}
                </h2>

                {/* Company/subtitle */}
                <p className="text-[#999999] text-sm mb-3">{cs.subtitle}</p>

                {/* Role + read time */}
                <div className="flex items-center gap-2 text-[#999999] text-xs mb-3">
                  <span>{cs.role}</span>
                  <span className="text-[#2a2a2a]">·</span>
                  <span>{cs.readTime}</span>
                </div>

                {/* Match score badge + tags row */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  {/* Match score */}
                  <span className="inline-flex items-center px-2.5 py-1 rounded-sm bg-[#F04735]/10 text-[#F04735] text-[10px] font-bold tracking-wide uppercase border border-[#F04735]/20">
                    {cs.matchScore}% Match
                  </span>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {cs.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-[#141414] border border-[#2a2a2a] text-[#999999] text-[10px] rounded-sm tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                    {cs.tags.length > 3 && (
                      <span className="px-2 py-0.5 bg-[#141414] border border-[#2a2a2a] text-[#999999] text-[10px] rounded-sm tracking-wide">
                        +{cs.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-[#999999] text-sm">
              No case studies in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
