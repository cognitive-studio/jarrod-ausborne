import type { ReactNode } from "react";
import { about } from "@/data/about";
import { resume } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Jarrod Ausborne",
  description: about.bio[0].slice(0, 160),
};

export default function AboutPage() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-20 max-w-7xl mx-auto">
      {/* Page header */}
      <div className="mb-16">
        <p className="text-brand-red text-xs tracking-widest uppercase font-mono mb-4">About</p>
        <h1 className="text-4xl md:text-6xl font-bold text-brand-light tracking-tight mb-4">
          {about.name}
        </h1>
        <p className="text-brand-muted text-xl">{about.title}</p>
      </div>

      {/* Two-column content */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-20">
        {/* Bio */}
        <div className="lg:col-span-3 space-y-6">
          {about.bio.map((paragraph, i) => (
            <p key={i} className="text-brand-muted leading-relaxed text-[15px]">
              {paragraph}
            </p>
          ))}

          {/* Contact buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={about.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-brand-border text-brand-light text-sm font-medium rounded-sm hover:border-brand-muted transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${about.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white text-sm font-medium rounded-sm hover:bg-[#d63e2f] transition-colors"
            >
              {about.email}
            </a>
          </div>
        </div>

        {/* Stats sidebar */}
        <aside className="lg:col-span-2">
          <div className="border border-brand-border rounded-sm divide-y divide-brand-border">
            <StatRow label="Current Focus" value={about.currentFocus} />
            <StatRow label="Experience" value={`${about.yearsExperience} years`} />
            <StatRow
              label="Industries"
              value={
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {about.industries.map((ind) => (
                    <span
                      key={ind}
                      className="px-2 py-0.5 bg-brand-card border border-brand-border text-brand-muted text-xs rounded-sm"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              }
            />
            <StatRow
              label="Tools"
              value={
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {about.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 bg-brand-card border border-brand-border text-brand-muted text-xs rounded-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              }
            />
            <StatRow label="Availability" value={about.availability} />
          </div>
        </aside>
      </div>

      {/* Work Experience Timeline */}
      <div className="border-t border-brand-border pt-16">
        <p className="text-brand-red text-xs tracking-widest uppercase font-mono mb-12">
          Experience
        </p>
        <div className="space-y-0">
          {resume.experience.map((job, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-12 py-10 border-b border-brand-border last:border-b-0"
            >
              {/* Left: date + duration */}
              <div className="md:col-span-1">
                <p className="text-brand-muted text-xs font-mono leading-relaxed">
                  {job.startDate} — {job.endDate}
                </p>
                <p className="text-brand-muted/60 text-xs font-mono mt-0.5">{job.duration}</p>
              </div>

              {/* Right: content */}
              <div className="md:col-span-3">
                <h3 className="text-brand-light font-semibold text-lg mb-1">{job.company}</h3>
                <p className="text-brand-muted text-sm mb-4">{job.title}</p>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-brand-muted text-sm leading-relaxed">
                      <span className="text-brand-red mt-1.5 shrink-0">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatRow({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="px-5 py-4">
      <p className="text-brand-muted text-xs font-mono uppercase tracking-wider mb-1">{label}</p>
      {typeof value === "string" ? (
        <p className="text-brand-light text-sm leading-relaxed">{value}</p>
      ) : (
        value
      )}
    </div>
  );
}
