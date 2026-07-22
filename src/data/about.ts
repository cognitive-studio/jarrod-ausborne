export interface About {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  currentFocus: string;
  yearsExperience: string;
  industries: string[];
  tools: string[];
  availability: string;
  email: string;
  linkedin: string;
}

export const about: About = {
  name: "Jarrod Ausborne",
  title: "Staff Product Designer",
  tagline: "I build design practices, not just products.",
  bio: [
    "I'm a Staff Product Designer with 8+ years of experience across some of the more demanding design problems in enterprise software — air defense systems at Hypergiant, in-store retail tooling at Best Buy, aircraft maintenance workflows at American Airlines, and insurance SaaS infrastructure at CRC. The through-line isn't the industry; it's the problem type. I go where the organizational complexity is real, the stakes are high, and there's no existing design practice to inherit.",
    "Most of my career has lived at the intersection of 0→1 product work and design systems — building the thing and building the infrastructure that makes the thing sustainable. At Gig Wage I was the founding designer, which meant owning product, marketing, and web as a solo designer while a two-sided fintech platform took shape around me. At CRC I came in as Staff Designer with no system, no standards, and no shared language between design and engineering, and established all three in 90 days. In between, I've designed for operators managing airspace threats in real time, technicians tracking aircraft parts across a maintenance shift, and associates closing big-ticket sales on a retail floor. The work is different every time. The method — talk to the people doing the job, build for the environment they're actually in, create systems that survive after you leave — is consistent.",
    "My current focus is AI-assisted enterprise UX and design systems at scale. The way I work has changed significantly over the last two years: prototyping is faster, synthesis has a first-pass assist, and the bar for 'good enough to test' has dropped in ways that change what research can accomplish in a sprint. I'm interested in teams that are thinking seriously about how to integrate AI tooling into a design practice without letting it replace the judgment that makes design valuable in the first place.",
    "I'm available for Staff IC and design lead roles — in-house, not contract. I work best in environments where design has a seat at the product table, where the work is complex enough to require real systems thinking, and where there's an appetite to build something that lasts. If that sounds like your team, I'd like to hear about the problem.",
  ],
  currentFocus: "AI-assisted enterprise UX, Design systems at scale",
  yearsExperience: "8+",
  industries: [
    "Insurance SaaS",
    "Fintech",
    "Enterprise B2B",
    "Retail",
    "Defense / Gov",
    "Aviation",
  ],
  tools: ["Figma", "Framer", "Cursor", "Notion", "Linear", "Lottie", "v0"],
  availability: "Open to Staff IC and Design Lead roles — in-house, not contract",
  email: "Jarrodausborne@gmail.com",
  linkedin: "https://www.linkedin.com/in/jarrodlee/",
};
