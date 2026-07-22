export interface ImpactMetric {
  metric: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  readTime: string;
  matchScore: number;
  tags: string[];
  heroImage: string;
  overview: string;
  organizationalProblem: string;
  whatIOwnedVsInfluenced: string;
  hardCall: string;
  whatChangedAfter: string;
  whatIdDoDifferently: string;
  team: string[];
  impact: ImpactMetric[];
  featured: boolean;
  category: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "blue-shirt",
    title: "Blue Shirt: Every Associate Is the Expert",
    subtitle: "Best Buy",
    role: "Senior Product Designer",
    readTime: "7 min read",
    matchScore: 88,
    tags: ["Retail UX", "Mobile iOS/Android", "0→1", "Design Systems", "POS & Payments"],
    heroImage:
      "https://media.base44.com/images/public/6a2f9629c5ec9d48a5d3864d/e8300702b_hf_20260628_045846_75f825bb-d3fa-4dcf-90d2-d59d4102cf88.jpg",
    overview:
      "Blue Shirt is an in-store associate app that turns every Best Buy floor employee into a roaming product expert and a mobile checkout, so customers get help where they're standing and pay without ever finding a register.",
    organizationalProblem:
      "The store experience hadn't changed much in a decade. A customer with a question had to flag down whoever happened to walk by, hope that person knew the category, then carry their decision all the way to a front-of-store line that backed up the moment things got busy. Associates were anchored to departments and registers, and deep product knowledge lived with a handful of veterans. The company needed to ask: what would it take to bring the Apple Store model — every employee equipped to answer and to sell — to a big-box floor with tens of thousands of SKUs?",
    whatIOwnedVsInfluenced:
      "I owned end-to-end product design: shadowed associates through full shifts across 5 stores, ran research synthesis with PM, scoped the app to two jobs (expert routing + floor checkout) which kept the first release from sprawling. I influenced roadmap prioritization — pushed to ship the floor checkout before inventory features. Designed the component library with tokens mapped directly to Figma so engineering shipped the exact spacing, color, and states without drift.",
    hardCall:
      "We had two competing directions: build a full store management suite (inventory, scheduling, performance) or laser-focus on the two moments that lose sales (customer can't find help; associate can't close without a register). PM wanted the bigger scope. I pushed back with research evidence — the gap between 'I have a question' and 'someone who can answer it is free' was where sales died. We cut everything that didn't serve those two verbs and got a cleaner, faster adoption. That constraint is what kept the first release from sprawling into a tool nobody would open.",
    whatChangedAfter:
      "Checkout time on big-ticket items dropped from 12 to 7 minutes. In-store conversion rose from 33% to 47%. Newer associates could field specialist questions on day one — flattening the knowledge gap was the part store leaders kept asking us to expand. The design system we built became the foundation for subsequent associate tooling.",
    whatIdDoDifferently:
      "I'd instrument the 'assist handoff' flow earlier — we learned post-launch that some associates were using the app for product lookup but finishing the sale at the register anyway. Catching that behavior in pilot would have shaped the checkout UX before rollout.",
    team: [
      "Sr. Product Designer (Jarrod)",
      "Product Manager",
      "iOS / Android Eng Lead",
      "Retail Operations SME",
      "QA",
    ],
    impact: [
      { metric: "12min → 7min", label: "Checkout time on big-ticket items" },
      { metric: "33% → 47%", label: "In-store conversion rate" },
      { metric: "5-store pilot", label: "Regional test before wider rollout" },
    ],
    featured: true,
    category: "Enterprise Tools",
  },
  {
    slug: "chain-of-custody",
    title: "Chain of Custody: Every Part, Every Hand, Tracked",
    subtitle: "American Airlines",
    role: "Sr. Product Designer",
    readTime: "6 min read",
    matchScore: 86,
    tags: ["Mobile Android", "Internal Tools", "0→1", "Design Systems", "Aviation/MRO"],
    heroImage:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_370rTUn9sEnjGnmKNdrjhfllC6a/e9f72635-0a91-4d00-9f7c-4d28234ab6b1.jpg",
    overview:
      "A 0→1 aircraft-maintenance tool for Android tablets that tracks every part a technician installs, from the moment it goes on the aircraft to the day it's due for replacement — turning an invisible, archaic tracking process into a chain of custody every crew member could see.",
    organizationalProblem:
      "Parts were being pulled, installed, and sent out to service aircraft with a tracking process that was manual or effectively nonexistent. The accountability gap alone was costing the company roughly $3M a year in parts that couldn't be located. No visibility into where a part was, no record of who installed it, no way to know a part was nearing end of service life until it failed in the field.",
    whatIOwnedVsInfluenced:
      "Owned the tool end-to-end: information architecture, interaction design, and the lifecycle-tracking workflow. Worked directly with maintenance crews to understand how parts moved through a shift. Designed on top of the team's existing design system so the tool felt immediately familiar rather than like one more new system to learn. Influenced the decision to prioritize frontline adoption over feature depth — argued successfully for a single-shift pilot before committing to the full rollout.",
    hardCall:
      "Engineering wanted to build a custom notification system. I argued for reusing the existing crew communication channel — it would ship faster and crews already checked it. We lost two weeks of debate but ultimately shipped in the existing channel. Frontline adoption was the priority; novelty wasn't worth the risk.",
    whatChangedAfter:
      "Making part location and custody visible for the first time helped recover roughly $1.2M annually against a ~$3M/year parts-loss problem. Proactive lifecycle alerts caught parts nearing end-of-life before they failed in service instead of after.",
    whatIdDoDifferently:
      "I'd validate adoption rate and setup-time savings in the pilot phase before presenting impact numbers. Some metrics remain to be confirmed — I'd want those locked before using this in a hiring conversation.",
    team: [
      "Sr. Product Designer (Jarrod)",
      "Product Manager",
      "Android Engineering Lead",
      "Aircraft Maintenance Crews",
      "Aviation Operations Stakeholders",
    ],
    impact: [
      { metric: "~$1.2M", label: "Recovered annually against a ~$3M/year parts-loss problem" },
      { metric: "0→1", label: "Android tablet tool built from scratch" },
      { metric: "Proactive", label: "Lifecycle alerts before parts failed in service" },
    ],
    featured: true,
    category: "Enterprise Tools",
  },
  {
    slug: "design-practice-crc",
    title: "Design Practice at Scale: Zero to System in 90 Days",
    subtitle: "CRC Insurance Services",
    role: "Staff Product Designer",
    readTime: "8 min read",
    matchScore: 95,
    tags: ["Design Systems", "AI Tools", "Design Ops", "Enterprise SaaS", "Practice Building"],
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    overview:
      "CRC Insurance had no design foundation when I joined as Staff Product Designer — no system, no standards, no shared language between design and engineering. In 90 days I established the design practice: component library, token architecture, contribution model, and the workflow integrations that cut design-to-dev cycle time by 23%.",
    organizationalProblem:
      "The product org was shipping features but paying a compounding tax: every new screen reinvented UI patterns, engineers made visual decisions that belonged in design, and QA was catching inconsistencies that should never have shipped. There was no design system, no review process, and no shared vocabulary. At Staff level, this isn't a tools problem — it's an organizational problem masquerading as a tools problem.",
    whatIOwnedVsInfluenced:
      "I owned the entire practice build: audited 200+ existing screens to find the real component surface area, defined the token architecture, built the component library in Figma with prop APIs that matched the engineering implementation, wrote the contribution and review process, and ran the first three design critiques. I influenced engineering leadership to adopt the token system in their build pipeline — that required a roadmap conversation, not a Figma file.",
    hardCall:
      "Leadership wanted a full design system delivered on day 30. I pushed back: shipping a system before auditing existing patterns would create a system nobody used. We agreed on a phased approach — foundations (color, type, spacing tokens) in 30 days, core components in 60, contribution model live at 90. The phased approach is what made it stick. A design system that's ignored is worse than no system.",
    whatChangedAfter:
      "23% reduction in design-to-dev cycle time measured across the first three sprints post-launch. Engineers stopped making visual decisions because the system answered those questions before they asked. New designers onboarded against documented patterns instead of reverse-engineering existing screens. The system is still the foundation for all product work at CRC.",
    whatIdDoDifferently:
      "I'd instrument design system adoption earlier — component usage metrics from the start, not retrofitted. We added analytics to the library at month 4. I'd also run a formal 'system health review' at 6 months with the engineering lead — the system drifts without a scheduled review cadence.",
    team: [
      "Staff Product Designer (Jarrod)",
      "Engineering Lead",
      "Product Manager",
      "QA Lead",
      "2× Senior Designers (joined month 2)",
    ],
    impact: [
      { metric: "23%", label: "Reduction in design-to-dev cycle time" },
      { metric: "90 days", label: "From zero to live design system" },
      { metric: "200+", label: "Screens audited to define component surface area" },
    ],
    featured: true,
    category: "Design Systems",
  },
  {
    slug: "decoded",
    title: "Decoded: Making Data Make Sense",
    subtitle: "Disney+",
    role: "Senior Product Designer",
    readTime: "12 min read",
    matchScore: 97,
    tags: ["Internal Analytics", "Data Visualization", "Enterprise B2B", "AI Tools"],
    heroImage:
      "https://media.base44.com/images/public/6a2f9629c5ec9d48a5d3864d/2ddac9307_disney.jpg",
    overview:
      "An internal analytics tool that turned a firehose of streaming data into decisions non-technical teams could make on their own. Disney+ generates an enormous, continuous stream of viewership behavior: every title started, finished, abandoned, and rewatched, across millions of subscribers.",
    organizationalProblem:
      "Disney+ content and marketing teams were data-rich and insight-poor. The raw streaming data existed but lived in tools only data scientists could navigate. Business decisions about content strategy, marketing spend, and acquisition were being made on instinct or delayed waiting for analyst reports. The ask: make Disney+'s own data accessible to the people making daily decisions, without requiring SQL.",
    whatIOwnedVsInfluenced:
      "Owned the end-to-end UX: discovery research with content and marketing stakeholders, information architecture for a data model non-technical users could navigate, all interaction design and prototyping. Influenced the data model itself — worked with the data engineering team to surface the right aggregations, not just expose the raw schema. That conversation changed what got built.",
    hardCall:
      "The data team wanted to expose every metric they had. I argued for progressive disclosure — a curated default view for the most common decisions, with drill-down for analysts. This was a political call as much as a design call: it meant telling data engineers that most of their work would be invisible to most users most of the time. We shipped the curated view. Adoption validated the call.",
    whatChangedAfter:
      "Content and marketing teams began using the tool weekly for decisions that previously required analyst tickets. Analyst ticket volume for recurring report requests dropped. Non-technical stakeholders started arriving at product reviews with their own data pulled from the tool.",
    whatIdDoDifferently:
      "I'd establish success metrics for the tool before launch, not after. We defined 'adoption' too loosely — monthly active users matters less than whether specific decision types changed. I'd define the decision use cases upfront and track those.",
    team: [
      "Senior Product Designer (Jarrod)",
      "Data Engineering Lead",
      "Product Manager",
      "Content Strategy Stakeholders",
      "Marketing Analytics Stakeholders",
    ],
    impact: [
      {
        metric: "Self-serve",
        label: "Content & marketing teams making data-driven decisions without analyst tickets",
      },
      { metric: "Progressive", label: "Curated default view with drill-down for power users" },
      { metric: "12 min read", label: "Full case study available on request" },
    ],
    featured: false,
    category: "Enterprise Tools",
  },
  {
    slug: "skywarden",
    title: "Skywarden: Designing Homeland Security",
    subtitle: "Hypergiant",
    role: "Senior Product Designer",
    readTime: "9 min read",
    matchScore: 90,
    tags: ["Defense", "ABMS", "Design Systems", "High-Stakes UX"],
    heroImage:
      "https://media.base44.com/images/public/6a2f9629c5ec9d48a5d3864d/db69706f0_skywarden.jpg",
    overview:
      "A customizable air defense system that let operators manage complex threat detection and airspace control without extensive training, by borrowing design patterns from tools they already knew.",
    organizationalProblem:
      "Designing software for high-stakes environments means one thing: there's no room for confusion. When pilots and air traffic controllers are managing security scenarios in real time, every second of interface confusion is a second they're not managing the situation. Legacy systems required extensive specialized training. Operators were making errors not because of capability gaps but because of interface gaps.",
    whatIOwnedVsInfluenced:
      "Owned all interaction design and the operator workflow. Worked embedded with government client stakeholders across multiple site visits — understanding the real environment, not a simulation of it. Influenced the decision to anchor new UI patterns to familiar COTS tools rather than design a custom interaction language from scratch. That decision cut training time.",
    hardCall:
      "The client wanted a proprietary interaction model — they felt it would differentiate the product. I argued that in high-stakes environments, familiarity is a safety feature. Operators under stress revert to learned behavior; a novel UI becomes a liability at exactly the wrong moment. We shipped with familiar patterns. No operator training incidents.",
    whatChangedAfter:
      "Operators could manage the system with significantly less onboarding time than legacy systems. The 'familiarity as safety' principle became a design standard for subsequent Hypergiant defense products.",
    whatIdDoDifferently:
      "I'd push harder for usability testing in realistic stress conditions earlier in the design process. We got operator feedback in calm review sessions — the real test is when the threat board is active.",
    team: [
      "Senior Product Designer (Jarrod)",
      "Product Manager",
      "Engineering Lead",
      "Government Client Stakeholders",
      "Operator SMEs",
    ],
    impact: [
      { metric: "Reduced", label: "Operator onboarding time vs. legacy systems" },
      { metric: "0 training", label: "Interface-related incidents post-launch" },
      { metric: "Reused", label: "Familiar COTS patterns to eliminate custom training overhead" },
    ],
    featured: false,
    category: "Enterprise Tools",
  },
  {
    slug: "midnight-run",
    title: "The Midnight Run: Now It Comes to You",
    subtitle: "7-Eleven via Bottlerocket",
    role: "Lead UX Researcher / Designer",
    readTime: "6 min read",
    matchScore: 88,
    tags: [
      "Experience Research",
      "Service Design",
      "Physical + Digital",
      "Rapid Concepting",
      "Retail",
    ],
    heroImage:
      "https://media.base44.com/images/public/6a2f9629c5ec9d48a5d3864d/81e15cbf2_7.jpg",
    overview:
      "The Run reimagines the convenience-store visit: the quick, habitual trip that retail has barely touched in a decade. Brought in through Bottlerocket to help 7-Eleven sharpen its in-store experience, with a rare mandate: no predetermined brief.",
    organizationalProblem:
      "7-Eleven knew customers were frustrated but didn't know where the friction actually lived. The assumption was 'checkout is slow.' The reality was more distributed — 21 friction points mapped across the end-to-end journey. The real problem wasn't the line; it was that the line existed at all. Customers were tolerating a model that hadn't been challenged.",
    whatIOwnedVsInfluenced:
      "Led the entire research design: built the board-game research method, facilitated the journey study with 42 customers, synthesized 21 friction points, concepted all three experience prototypes. Influenced the reframe of the brief — we went in to 'make checkout faster' and came out with 'remove the line entirely.' That pivot required presenting an uncomfortable finding to a client who'd anchored on a different problem.",
    hardCall:
      "The client expected a checkout optimization recommendation. Our research said the problem was upstream — ordering and payment, not the register. Presenting a finding that contradicts the client's assumption is always a political call. I presented the research plainly, let the journey maps speak, and proposed three concepts that all bet on the same thesis. The client accepted the reframe.",
    whatChangedAfter:
      "Three testable experience concepts delivered: order-ahead pickup, in-store hot-grill ordering, and a location-aware food truck. The study reframed 7-Eleven's problem from 'make checkout faster' to 'remove the line entirely.' What I'd validate next: order-ahead adoption rate, hot-grill tablet throughput vs. counter wait time, and basket size when ordering moves off the register.",
    whatIdDoDifferently:
      "With today's AI prototyping tools, I'd build clickable versions of all three concepts in days and put them in front of customers inside the same research sprint, closing the gap between insight and tested prototype.",
    team: [
      "Lead Product Designer & Researcher (Jarrod)",
      "Product Manager",
      "iOS/Android Eng Lead",
      "Client stakeholders at 7-Eleven",
    ],
    impact: [
      { metric: "3", label: "Experience concepts delivered" },
      { metric: "21", label: "Friction points mapped across the end-to-end journey" },
      {
        metric: "42",
        label: "Customers in the journey study using a custom board-game research method",
      },
    ],
    featured: false,
    category: "Research",
  },
  {
    slug: "the-hustle",
    title: "The Hustle: Fintech for the Gig Economy",
    subtitle: "Gig Wage",
    role: "Chief Design Officer · Founding Designer",
    readTime: "6 min read",
    matchScore: 89,
    tags: ["Fintech", "0→1", "Design Systems", "Two-Sided Platform", "Design Leadership"],
    heroImage:
      "https://media.base44.com/images/public/6a2f9629c5ec9d48a5d3864d/110ef2203_GW1.jpg",
    overview:
      "Founding designer at a venture-backed fintech building instant payments, payroll, and tax-document tooling for 1099 contractors. Built the design foundation 0→1 and designed both sides of a two-sided platform.",
    organizationalProblem:
      "Gig Wage set out to make paying 1099 contractors as fast and simple as it should be. The pain lived on both sides: businesses needed to onboard contractors, run payments, and issue tax documents without wrestling legacy payroll tools; contractors needed to get paid quickly and see what was owed. There was no design foundation, no standards, no process — and I was the only designer.",
    whatIOwnedVsInfluenced:
      "Owned everything design: brand, product, marketing, web, and the design system that tied them together. In a founding role, 'influence' collapses into 'decide' — I was in the room for every product and strategy decision. Built the design foundation the whole company ran on: patterns, standards, component library, and the culture of using design as a thinking tool, not just a delivery function.",
    hardCall:
      "As the only designer for 18 months, every design decision was a prioritization decision. The hardest call was saying no to marketing requests while the core product experience was still immature. A beautiful acquisition flow that drops users into a confusing onboarding is a worse outcome than a plain acquisition flow that drops users into something that works. I held that line and the product improved faster for it.",
    whatChangedAfter:
      "Platform grew from 6 to 18 businesses during my tenure. Both sides of the platform — business dashboard and contractor experience — shipped coherently under one system. The design foundation I built was still in use after I left.",
    whatIdDoDifferently:
      "I'd establish a design review rhythm with the CEO earlier. For the first six months, design decisions happened in Slack. A weekly 30-minute review with the founder would have caught misalignments faster and built the organizational muscle for design feedback earlier.",
    team: [
      "Chief Design Officer / Founding Designer (Jarrod)",
      "Founder / CEO",
      "Engineering",
      "Product",
    ],
    impact: [
      { metric: "6→18", label: "Businesses on the platform during tenure" },
      { metric: "0→1", label: "Built design foundation from scratch as sole designer" },
      {
        metric: "Two-sided",
        label: "Designed both business dashboard and contractor-facing experience",
      },
    ],
    featured: false,
    category: "0→1",
  },
  {
    slug: "house-special",
    title: "House Special: Letting the Table Do the Ordering",
    subtitle: "Restaurant Group",
    role: "Product Design Lead",
    readTime: "8 min read",
    matchScore: 88,
    tags: ["Consumer", "Service Design", "Physical + Digital", "0→1"],
    heroImage:
      "https://media.base44.com/images/public/6a2f9629c5ec9d48a5d3864d/5e4ad11b0_pizza.jpg",
    overview:
      "Every table becomes its own counter. A product designer reimagines the dine-in pizza experience: every table becomes its own ordering station, eliminating wait staff dependency and letting customers order, modify, and pay at their own pace.",
    organizationalProblem:
      "The traditional dine-in model creates a coordination problem: the customer is ready to order when the server isn't available, and ready to pay when the server is busy with another table. The restaurant loses revenue to abandoned intent — customers who wanted a second round but didn't order because flagging someone down felt like too much effort.",
    whatIOwnedVsInfluenced:
      "Owned end-to-end design: research with dining customers and restaurant operations staff, service design of the full table experience (physical + digital touchpoints), all interaction design. Influenced the go-to-market sequencing — argued for piloting with high-turnover lunch service before dinner, where the stakes of getting it wrong are lower.",
    hardCall:
      "Operations staff were resistant — they saw table-side ordering as a threat to tips. I reframed the tool as a workload reducer: orders taken automatically means servers focus on experience, not logistics. That's a better tip story. Getting operations buy-in before launch made the pilot smoother.",
    whatChangedAfter:
      "Table turn time improved. Second-order and add-on conversion increased because the friction of flagging a server was removed. Operations staff adopted the tool faster than expected once the tip reframe landed.",
    whatIdDoDifferently:
      "I'd instrument 'abandoned cart' at the table level — customers who started an order and didn't complete it. That data would tell us where the flow broke and whether it was a UI problem or a decision problem.",
    team: [
      "Product Design Lead (Jarrod)",
      "Restaurant Operations Lead",
      "iOS Engineering",
      "POS Integration Engineer",
    ],
    impact: [
      { metric: "Improved", label: "Table turn time vs. traditional server model" },
      { metric: "Increased", label: "Add-on and second-order conversion" },
      { metric: "Pilot", label: "High-turnover lunch service before dinner rollout" },
    ],
    featured: false,
    category: "Consumer",
  },
  {
    slug: "book-it-find-it",
    title: "Book It, Find It: Wayfinding Meets Room Booking at Nike",
    subtitle: "Nike / CBRE",
    role: "Product Designer · CBRE",
    readTime: "5 min read",
    matchScore: 83,
    tags: ["Enterprise Internal Tools", "Wayfinding", "iOS", "Physical + Digital"],
    heroImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    overview:
      "A room-booking app for Nike's sprawling campus that paired indoor triangulation with hand-drawn wayfinding maps, so employees could see exactly where a room was, what was in it, and book it in a few taps instead of wandering to find it.",
    organizationalProblem:
      "Nike came to CBRE with a problem tied to the sheer scale of its campus: employees struggled to book a meeting room and, just as often, struggled to find it once booked. Two separate problems — booking friction and wayfinding failure — that together meant wasted time and underutilized spaces.",
    whatIOwnedVsInfluenced:
      "Owned all product design: user research with Nike employees across building types, the wayfinding model (pairing indoor triangulation data with hand-illustrated floor maps), all interaction design and prototyping. Influenced the decision to use hand-drawn maps over CAD floor plans — research showed hand-drawn felt less institutional and employees were more likely to trust and use them.",
    hardCall:
      "Engineering preferred CAD data (it was already available). I pushed for hand-drawn maps based on research: employees associated CAD floor plans with facilities management, not with finding a coffee meeting. The hand-drawn aesthetic reduced perceived friction. We spent extra time on the illustration; employees said it made the app feel like it was made for them, not for the building.",
    whatChangedAfter:
      "Meeting space utilization improved. Employees reported spending less time locating booked rooms. The wayfinding + booking pairing became the reference model for subsequent CBRE campus tool deployments.",
    whatIdDoDifferently:
      "I'd track 'time to room' as the primary success metric from day one — the actual behavior change we were after. We tracked bookings, which is a proxy. Time to room is the real number.",
    team: [
      "Product Designer (Jarrod)",
      "CBRE Project Lead",
      "iOS Engineering",
      "Nike Facilities Management",
      "Indoor Mapping Vendor",
    ],
    impact: [
      { metric: "Improved", label: "Meeting space utilization across campus" },
      { metric: "Reduced", label: "Time employees spent locating booked rooms" },
      { metric: "Reference", label: "Model for subsequent CBRE campus tool deployments" },
    ],
    featured: false,
    category: "Enterprise Tools",
  },
];

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
