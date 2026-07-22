import type { ReactNode } from "react";
import { resume } from "@/data/resume";
import { about } from "@/data/about";
import PrintButton from "./PrintButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Jarrod Ausborne",
  description: `${about.name} — ${about.title}. Resume and work history.`,
};

export default function ResumePage() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-20 print:py-8 print:px-8 print:text-black print:bg-white">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 print:mb-8">
        <div>
          <p className="text-brand-red text-xs tracking-widest uppercase font-mono mb-4 print:text-red-600">
            Resume
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-light tracking-tight mb-2 print:text-black">
            {about.name}
          </h1>
          <p className="text-brand-muted print:text-gray-600">{about.title}</p>
          <p className="text-brand-muted text-sm mt-1 print:text-gray-500">{about.email}</p>
        </div>
        <PrintButton />
      </div>

      <div className="max-w-4xl space-y-16 print:space-y-10">
        {/* Experience */}
        <section>
          <SectionLabel>Experience</SectionLabel>
          <div className="space-y-0">
            {resume.experience.map((job, i) => (
              <div
                key={i}
                className="py-8 border-b border-brand-border last:border-b-0 print:py-6 print:border-gray-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="text-brand-light text-xl font-semibold print:text-black">
                    {job.company}
                  </h3>
                  <div className="text-right shrink-0">
                    <span className="text-brand-muted text-xs font-mono print:text-gray-500">
                      {job.startDate} — {job.endDate}
                    </span>
                    <span className="text-brand-muted/60 text-xs font-mono ml-3 print:text-gray-400">
                      {job.duration}
                    </span>
                  </div>
                </div>
                <p className="text-brand-muted text-sm mb-5 print:text-gray-500">{job.title}</p>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-brand-muted text-sm leading-relaxed print:text-gray-700">
                      <span className="text-brand-red mt-1.5 shrink-0 print:text-red-600">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <SectionLabel>Skills</SectionLabel>
          <div className="flex flex-wrap gap-2 pt-2">
            {resume.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-brand-card border border-brand-border text-brand-light text-sm rounded-sm print:border-gray-300 print:text-black print:bg-gray-50"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <SectionLabel>Education</SectionLabel>
          <div className="pt-2">
            <h3 className="text-brand-light font-semibold print:text-black">
              {resume.education.school}
            </h3>
            <p className="text-brand-muted text-sm mt-1 print:text-gray-600">
              {resume.education.degree} &middot; {resume.education.year}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-brand-red text-xs tracking-widest uppercase font-mono mb-6 pb-4 border-b border-brand-border print:text-red-600 print:border-gray-200">
      {children}
    </p>
  );
}
