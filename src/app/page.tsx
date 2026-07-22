import Link from "next/link";
import { getFeaturedCaseStudies } from "@/data/case-studies";
import { about } from "@/data/about";

const testimonials = [
  {
    quote:
      "Jarrod consistently demonstrated exceptional product thinking... Any organization would be fortunate to have him.",
    name: "Andrew R.",
    role: "Enterprise AI Product Strategist · American Airlines",
  },
  {
    quote:
      "He established our design system in under 3 months... 23% reduction in design cycle time was something we felt immediately across every sprint.",
    name: "Kim B.",
    role: "Product Analyst · CRC Insurance Group",
  },
  {
    quote: "Jarrod has a rare ability to bring structure to complexity...",
    name: "Craig L.",
    role: "Founder & Investor · Gig Wage",
  },
];

const pillars = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    heading: "Design Practice Building",
    body: "Establish systems, culture, and process that outlast the project.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    heading: "Enterprise Complexity",
    body: "Defense to retail to fintech — I work where the problems are hardest.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
    heading: "0→1 Ownership",
    body: "I join when there's a blank page and leave a foundation.",
  },
];

export default function HomePage() {
  const featured = getFeaturedCaseStudies();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-64px)] flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-20 pb-16 overflow-hidden">
        {/* Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 w-[600px] h-[600px] opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, #F04735 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-5xl">
          <p className="text-brand-muted text-sm tracking-widest uppercase mb-8 font-mono">
            Staff Product Designer
          </p>
          <h1
            className="font-sans font-bold leading-[1.05] tracking-tight text-brand-light mb-8"
            style={{ fontSize: "clamp(48px, 7vw, 96px)" }}
          >
            {about.tagline}
          </h1>
          <p className="text-brand-muted text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            {about.bio[0].split(".")[0]}.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-medium text-sm rounded-sm hover:bg-[#d63e2f] transition-colors"
            >
              View Work
            </Link>
            <Link
              href="/how-i-work"
              className="inline-flex items-center gap-2 px-6 py-3 border border-brand-border text-brand-light font-medium text-sm rounded-sm hover:border-brand-muted transition-colors"
            >
              How I Work
            </Link>
          </div>
        </div>

        {/* Stat pills */}
        <div className="relative z-10 flex flex-wrap gap-3 mt-20">
          {["8+ Years", "0→1 Specialist", "Staff IC"].map((stat) => (
            <span
              key={stat}
              className="px-4 py-2 border border-brand-border text-brand-muted text-sm font-mono rounded-sm"
            >
              {stat}
            </span>
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-2xl font-semibold text-brand-light">Selected Work</h2>
          <Link
            href="/work"
            className="text-sm text-brand-muted hover:text-brand-light transition-colors"
          >
            All work →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.slice(0, 3).map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group block bg-brand-card border border-brand-border rounded-sm overflow-hidden hover:-translate-y-1 hover:border-[#3a3a3a] transition-all duration-200"
            >
              <div className="relative aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cs.heroImage}
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-2 py-1 bg-[#141414]/80 backdrop-blur-sm text-brand-muted text-xs font-mono uppercase tracking-wider rounded-sm">
                  {cs.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-brand-light font-semibold text-base leading-snug">
                    {cs.title}
                  </h3>
                  <span className="shrink-0 px-2 py-0.5 bg-brand-red/10 text-brand-red text-xs font-mono rounded-sm">
                    {cs.matchScore}%
                  </span>
                </div>
                <p className="text-brand-muted text-sm mb-3">{cs.subtitle}</p>
                <p className="text-brand-muted text-xs font-mono">{cs.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* What I'm built for */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-brand-border">
        <p className="text-brand-red text-xs tracking-widest uppercase font-mono mb-6">
          What I&rsquo;m built for
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((p) => (
            <div key={p.heading}>
              <div className="text-brand-red mb-4">{p.icon}</div>
              <h3 className="text-brand-light font-semibold text-lg mb-3">{p.heading}</h3>
              <p className="text-brand-muted leading-relaxed text-sm">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-brand-border">
        <p className="text-brand-red text-xs tracking-widest uppercase font-mono mb-12">
          What people say
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col gap-6">
              <blockquote className="text-brand-light leading-relaxed text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <p className="text-brand-light text-sm font-medium">{t.name}</p>
                <p className="text-brand-muted text-xs mt-0.5">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-brand-red px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h2 className="text-2xl font-semibold text-white">Ready to talk?</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${about.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-brand-red font-medium text-sm rounded-sm hover:bg-[#f5f5f5] transition-colors"
            >
              {about.email}
            </a>
            <a
              href={about.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/40 text-white font-medium text-sm rounded-sm hover:border-white transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
