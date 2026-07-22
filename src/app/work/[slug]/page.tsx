import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getCaseStudyBySlug, caseStudies } from "@/data/case-studies";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return { title: "Case Study Not Found" };
  return {
    title: `${cs.title} — Jarrod Ausborne`,
    description: cs.overview,
    openGraph: {
      title: `${cs.title} — Jarrod Ausborne`,
      description: cs.overview,
      images: [{ url: cs.heroImage }],
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) notFound();
  const study = cs!;

  const currentIndex = caseStudies.findIndex((s) => s.slug === params.slug);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#141414]">
      <div className="max-w-[800px] mx-auto px-6 py-16 md:py-24">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#999999] mb-10">
          <Link href="/work" className="hover:text-[#e5e5e5] transition-colors">Work</Link>
          <span className="text-[#2a2a2a]">›</span>
          <span className="text-[#e5e5e5] truncate">{study.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <p className="text-[#F04735] text-[10px] font-semibold tracking-[0.2em] uppercase mb-4">
            {study.category} · CASE STUDY
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#e5e5e5] leading-tight mb-5">
            {study.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
            <span className="text-[#999999] text-sm">{study.role}</span>
            <span className="text-[#2a2a2a] text-sm">·</span>
            <span className="text-[#999999] text-sm">{study.readTime}</span>
            <span className="text-[#2a2a2a] text-sm">·</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-sm bg-[#F04735]/10 text-[#F04735] text-[10px] font-bold tracking-wide uppercase border border-[#F04735]/20">
              {study.matchScore}% Match
            </span>
          </div>
          <p className="text-[#999999] text-base">{study.subtitle}</p>
        </header>

        {/* Hero Image */}
        <div className="relative w-full aspect-video rounded overflow-hidden mb-14">
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            className="object-cover"
            sizes="(max-width: 800px) 100vw, 800px"
            priority
          />
        </div>

        {/* Body Sections */}
        <div className="space-y-14">

          {/* Overview */}
          <section>
            <SectionLabel>OVERVIEW</SectionLabel>
            <p className="text-[#e5e5e5] text-lg leading-relaxed">{study.overview}</p>
          </section>

          {/* Success Metrics — at the top, before the work */}
          {study.successMetrics.length > 0 && (
            <section>
              <SectionLabel>SUCCESS METRICS</SectionLabel>
              <p className="text-[#999999] text-xs mb-4 leading-relaxed">
                Defined before the work started — the north star we designed toward.
              </p>
              <ul className="space-y-3">
                {study.successMetrics.map((metric, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#F04735] text-sm mt-0.5 flex-shrink-0">→</span>
                    <span className="text-[#e5e5e5] text-sm leading-relaxed">{metric}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* The Problem */}
          <section>
            <SectionLabel>THE PROBLEM</SectionLabel>
            <p className="text-[#e5e5e5] text-base leading-relaxed">{study.organizationalProblem}</p>
          </section>

          {/* What I Owned */}
          <section>
            <SectionLabel>WHAT I OWNED</SectionLabel>
            <p className="text-[#e5e5e5] text-base leading-relaxed">{study.whatIOwnedVsInfluenced}</p>
          </section>

          {/* The Hard Call */}
          <section>
            <SectionLabel>THE HARD CALL</SectionLabel>
            <div className="pl-5 border-l-2 border-[#F04735]">
              <p className="text-[#e5e5e5] text-base leading-relaxed">{study.hardCall}</p>
            </div>
          </section>

          {/* Process Images — if any */}
          {study.processImages.length > 0 && (
            <section>
              <SectionLabel>PROCESS & DESIGN</SectionLabel>
              <div className="space-y-6">
                {study.processImages.map((img, i) => (
                  <figure key={i} className="space-y-2">
                    <div className="relative w-full rounded overflow-hidden border border-[#2a2a2a] bg-[#181818]">
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full h-auto block"
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                      {/* Type badge */}
                      <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#141414]/80 backdrop-blur-sm text-[#999999] text-[10px] font-semibold tracking-[0.15em] uppercase rounded-sm border border-[#2a2a2a]">
                        {img.type === "before-after" ? "Before / After"
                          : img.type === "wireframe" ? "Wireframe"
                          : img.type === "research" ? "Research"
                          : img.type === "iteration" ? "Iteration"
                          : img.type === "system" ? "System Design"
                          : "Final"}
                      </span>
                    </div>
                    <figcaption className="text-[#999999] text-xs leading-relaxed px-1">
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* Impact */}
          <section>
            <SectionLabel>IMPACT</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {study.impact.map((item) => (
                <div key={item.label} className="bg-[#181818] border border-[#2a2a2a] rounded-sm p-5">
                  <p className="text-[#F04735] text-xl font-bold leading-tight mb-2">{item.metric}</p>
                  <p className="text-[#999999] text-xs leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What Changed After */}
          <section>
            <SectionLabel>WHAT CHANGED AFTER</SectionLabel>
            <p className="text-[#e5e5e5] text-base leading-relaxed">{study.whatChangedAfter}</p>
          </section>

          {/* What I'd Do Differently */}
          <section>
            <SectionLabel>WHAT I&apos;D DO DIFFERENTLY</SectionLabel>
            <p className="text-[#999999] text-sm leading-relaxed">{study.whatIdDoDifferently}</p>
          </section>

          {/* AI Tools */}
          {study.aiTools.length > 0 && (
            <section>
              <SectionLabel>AI TOOLS USED</SectionLabel>
              <div className="space-y-3">
                {study.aiTools.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 py-3 border-b border-[#2a2a2a] last:border-0">
                    <span className="text-[#e5e5e5] text-sm font-semibold min-w-[100px] flex-shrink-0">{item.tool}</span>
                    <span className="text-[#999999] text-sm leading-relaxed">{item.use}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Next Steps */}
          {study.nextSteps.length > 0 && (
            <section>
              <SectionLabel>NEXT STEPS</SectionLabel>
              <p className="text-[#999999] text-xs mb-4 leading-relaxed">
                Open questions and what I&apos;d explore with real usage data.
              </p>
              <ul className="space-y-4">
                {study.nextSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#2a2a2a] text-xs font-mono mt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#e5e5e5] text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* The Team */}
          <section>
            <SectionLabel>THE TEAM</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {study.team.map((member) => (
                <span key={member} className="px-3 py-1.5 bg-[#181818] border border-[#2a2a2a] text-[#e5e5e5] text-xs rounded-sm">
                  {member}
                </span>
              ))}
            </div>
          </section>

          {/* Tags */}
          <section>
            <SectionLabel>SKILLS &amp; TAGS</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-[#141414] border border-[#2a2a2a] text-[#999999] text-xs rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Bottom Nav */}
        <div className="mt-20 pt-8 border-t border-[#2a2a2a] grid grid-cols-2 gap-4">
          <div>
            {prevStudy ? (
              <Link href={`/work/${prevStudy.slug}`} className="group flex flex-col gap-1">
                <span className="text-[#999999] text-[10px] font-semibold tracking-[0.15em] uppercase group-hover:text-[#F04735] transition-colors">← Previous</span>
                <span className="text-[#e5e5e5] text-sm font-medium group-hover:text-white transition-colors leading-snug">{prevStudy.title}</span>
                <span className="text-[#999999] text-xs">{prevStudy.subtitle}</span>
              </Link>
            ) : (
              <Link href="/work" className="group flex flex-col gap-1">
                <span className="text-[#999999] text-[10px] font-semibold tracking-[0.15em] uppercase group-hover:text-[#F04735] transition-colors">← Back</span>
                <span className="text-[#e5e5e5] text-sm font-medium group-hover:text-white transition-colors">All Case Studies</span>
              </Link>
            )}
          </div>
          <div className="text-right">
            {nextStudy && (
              <Link href={`/work/${nextStudy.slug}`} className="group flex flex-col gap-1 items-end">
                <span className="text-[#999999] text-[10px] font-semibold tracking-[0.15em] uppercase group-hover:text-[#F04735] transition-colors">Next →</span>
                <span className="text-[#e5e5e5] text-sm font-medium group-hover:text-white transition-colors leading-snug">{nextStudy.title}</span>
                <span className="text-[#999999] text-xs">{nextStudy.subtitle}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#F04735] text-[10px] font-semibold tracking-[0.2em] uppercase mb-4">
      {children}
    </p>
  );
}
