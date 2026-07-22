export interface ResumeJob {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  duration: string;
  bullets: string[];
}

export interface ResumeEducation {
  degree: string;
  school: string;
  year: string;
}

export interface Resume {
  experience: ResumeJob[];
  skills: string[];
  education: ResumeEducation;
}

export const resume: Resume = {
  experience: [
    {
      company: "CRC Insurance Services",
      title: "Staff Product Designer",
      startDate: "Oct 2024",
      endDate: "May 2026",
      duration: "1 yr 8 mos",
      bullets: [
        "Built design system from 0→1 in 90 days, cutting design-to-dev cycle time 23%",
        "Led design for AI-assisted workflow tools across the insurance SaaS platform",
        "Established design critique rhythm and contribution model adopted by 2 senior designers",
      ],
    },
    {
      company: "American Airlines",
      title: "Sr. Product Designer",
      startDate: "Oct 2023",
      endDate: "Sep 2024",
      duration: "1 yr",
      bullets: [
        "Designed 0→1 Android tablet tool for aircraft maintenance crews, recovering ~$1.2M/year in parts losses",
        "Owned end-to-end: IA, interaction design, lifecycle-tracking workflow",
        "Built on existing design system; frontline adoption over novelty",
      ],
    },
    {
      company: "Best Buy",
      title: "Sr. Product Designer",
      startDate: "Mar 2022",
      endDate: "Oct 2023",
      duration: "1 yr 8 mos",
      bullets: [
        "Designed Blue Shirt, an associate app that raised in-store conversion 33%→47%",
        "Built component library with tokens mapped directly to engineering implementation — zero drift",
        "5-store regional pilot before wider rollout",
      ],
    },
    {
      company: "Hypergiant",
      title: "Sr. Product Designer",
      startDate: "Mar 2020",
      endDate: "Feb 2022",
      duration: "2 yrs",
      bullets: [
        "Designed Skywarden air defense system for DHS/DoD operators",
        "Contributed to ABMS program design system",
        "Established 'familiarity as safety' design principle for high-stakes operator interfaces",
      ],
    },
    {
      company: "Gig Wage",
      title: "Founding Designer / CDO",
      startDate: "Apr 2018",
      endDate: "Jan 2020",
      duration: "1 yr 10 mos",
      bullets: [
        "Founding designer; built design foundation and both sides of a two-sided fintech platform 0→1",
        "Grew platform from 6 to 18 business clients",
        "Owned design across product, marketing, and web as sole designer",
      ],
    },
  ],
  skills: [
    "Product Design",
    "Design Systems",
    "0→1 Product",
    "Enterprise UX",
    "Interaction Design",
    "Design Ops",
    "Research Leadership",
    "Stakeholder Management",
    "Figma",
    "AI-Assisted Design",
    "Android",
    "iOS",
    "Service Design",
  ],
  education: {
    degree: "BFA, Graphic Design",
    school: "University of North Texas",
    year: "2017",
  },
};
