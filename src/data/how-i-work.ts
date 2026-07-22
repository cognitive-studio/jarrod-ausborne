export interface HowIWorkSection {
  title: string;
  content: string[];
}

export interface HowIWork {
  runningAPractice: HowIWorkSection;
  workingWithProductAndEngineering: HowIWorkSection;
  research: HowIWorkSection;
  designSystems: HowIWorkSection;
  mentoring: HowIWorkSection;
  aiInDesign: HowIWorkSection;
}

export const howIWork: HowIWork = {
  runningAPractice: {
    title: "How I Run a Design Practice",
    content: [
      "The first thing I do when I join a team is establish a critique rhythm. Not because critique is a ritual worth performing, but because the absence of it tells you something: either the team doesn't think design decisions need defending, or they've learned that defending them isn't safe. A weekly critique — even thirty minutes, even just two designers — creates the conditions for honest feedback before work ships. At CRC, I ran the first three critiques myself, with no one else required to attend. By week six, engineers were showing up on their own. That's the outcome you're after: a practice that pulls people in because it produces better work, not one that depends on mandatory attendance.",
      "I define 'done' as the moment when the engineering implementation matches the design intent — not the moment the Figma file is closed. That sounds obvious, but most design-to-dev handoff processes are structured around the handoff event itself rather than around verifying the outcome. I build QA checkpoints into the sprint cycle: a design review at the end of engineering implementation, with a clear list of intent items (interaction states, spacing, edge cases) that someone checks against the build. The 23% reduction in design-to-dev cycle time at CRC came partly from this — when the design intent is written down and reviewed, engineers catch ambiguities before they become rework.",
      "I think about the design system as organizational infrastructure, not a component library. The distinction matters because it changes how you govern it. A component library is something the design team maintains for the design team. Organizational infrastructure is a contract between design and engineering — it defines what both sides agree to ship, and it requires both sides to maintain it. That framing shifts the conversation from 'does this component look right' to 'does this system reflect the decisions we've made together.' It also changes where the real work lives: not in the components, but in the token architecture, the contribution model, and the review process that keeps the system honest over time.",
      "Running a practice at Staff level means solving for the team's ability to make good decisions without me in the room. If the critique depends on me to function, I haven't built a practice — I've created a dependency. Every system I set up is designed to be run by someone else within six months. That's the exit criterion I hold myself to, and it's the reason I document process decisions as carefully as I document design decisions.",
    ],
  },

  workingWithProductAndEngineering: {
    title: "Working With Product & Engineering",
    content: [
      "I'm in roadmap conversations, not just design reviews. That means attending sprint planning, joining engineering architecture discussions when the surface area overlaps with UX, and being present in the stakeholder conversations where priorities get set before anyone opens Figma. Design that arrives after the roadmap is written is decoration. Design that shapes the roadmap is strategy. At Best Buy, the decision to ship floor checkout before inventory features came out of a roadmap conversation, not a design review — I was in the room where that trade-off got made, and I had the research to back the call.",
      "Every team eventually hits the moment where someone says 'we don't have time for design.' I've learned to hear that statement as a signal, not an obstacle. It usually means one of three things: design is being scoped as a phase rather than a thread, the team doesn't see design as a risk-reduction function, or the timeline was set before design was factored in. My response is always the same: 'What's the cost of getting this wrong?' I don't fight for design time in the abstract — I make the case for the specific design work that reduces the specific risk on the current sprint. That reframe lands differently than a general argument about process.",
      "Design-to-dev handoff is where intent goes to die, and I treat it accordingly. My handoffs include three things beyond the Figma file: a written list of interaction states and edge cases the design accounts for, a set of open questions the engineer should answer before closing the ticket, and a scheduled implementation review after the first build. The implementation review is the part most teams skip — it's also the part that prevents the slow drift where the shipped product diverges from the design intent sprint by sprint until you're looking at something that technically passed QA but doesn't work the way it was supposed to.",
    ],
  },

  research: {
    title: "Research as a Team Sport",
    content: [
      "I don't run research in isolation — I run it with whoever has a stake in what we find. That means pulling engineers into user interviews as observers, doing synthesis sessions with PM rather than dropping a findings doc in Notion, and treating the research output as something the team builds together rather than something I hand them. Shared synthesis produces different decisions than received synthesis. When a PM watches a customer struggle with a flow they scoped, that's a different experience than reading a summary that says 'users had friction with onboarding.' The former changes behavior; the latter gets acknowledged and filed.",
      "I think research synthesis is a leadership act, not just an analytical one. The synthesis moment is where the team decides what a set of observations means — and that decision shapes the product as much as any design decision downstream. I run synthesis sessions with structured framing: here's what we observed, here's what we're inferring, here's where we're uncertain. That last category is the one most teams skip. Surfacing uncertainty explicitly is what prevents false confidence from compressing into a roadmap that's built on an assumption nobody checked.",
      "For the 7-Eleven study at Bottlerocket, I invented a board-game research method to map the end-to-end convenience store journey. The conventional approach — intercepts at the register, exit surveys — would have given us data about the checkout moment but missed the 20 minutes that preceded it. Instead, I built a physical board that mapped the journey from 'I'm thinking about going' to 'I'm back in the car,' and ran 42 customers through a structured facilitation exercise that surfaced friction at every stage. We found 21 distinct friction points. The checkout line was number six. The real problems were earlier — hunger decision, store entry, product location, ordering mode. That's a finding you can only get if you research the whole journey, and that took a method built for the whole journey.",
    ],
  },

  designSystems: {
    title: "Design Systems as Organizational Infrastructure",
    content: [
      "A design system is a contract between design and engineering. That framing does more work than 'a component library' because it changes what success looks like. A component library succeeds when it has complete coverage and good documentation. A contract succeeds when both parties honor it — which means the system has to be built with engineering input, not just engineering handoff. At CRC, the token architecture was designed in a room with the engineering lead, not handed over after I'd defined it. That conversation changed the token naming convention, which changed how engineers consumed the system, which is what made adoption stick.",
      "The difference between a system that ships and a system that sticks is adoption equals contribution plus governance, not just component quality. I've seen teams build beautiful, thorough component libraries that six months later are ignored while engineers build their own patterns in code. The reason is always the same: the system had no contribution model, so engineers couldn't fix the things that didn't work for them, and no governance, so divergence accumulated without a review process to catch it. A system that welcomes contribution — with clear documentation of what gets accepted and why — is a system that engineers feel ownership over. Ownership is the only adoption strategy that works at scale.",
      "At CRC, I went from no design system to a live, contributor-adopted system in 90 days. The sequence mattered: I spent the first two weeks auditing 200+ existing screens to understand the real component surface area before defining a single token. Most system failures I've seen start with a designer proposing an idealized component architecture that doesn't match what's actually being built. The audit told me which patterns were already stable (and therefore candidates for formalization) and which were inconsistent (and therefore candidates for a decision, not just documentation). Foundations went live at 30 days, core components at 60, contribution model at 90 — and the phased release is what gave engineering time to integrate rather than face a full system swap all at once.",
    ],
  },

  mentoring: {
    title: "Growing Other Designers",
    content: [
      "My feedback philosophy is specific over general, behavior over trait. 'This flow is confusing' is a trait observation — it lands as a judgment and doesn't tell the designer what to change. 'This modal interrupts the task flow before the user has completed the input, which forces them to restart' is a behavior observation — it identifies the specific moment, the specific consequence, and points toward a specific fix. The difference in how feedback lands is dramatic, and it's the difference between a designer who improves and a designer who defends. I run 1:1s with designers as working sessions more than status checks: we look at current work together, I give feedback in real time, and we talk about the design decision underneath the design artifact. The artifact is just the surface. What I'm after is the thinking.",
      "The measure of a senior designer's growth isn't how good their work gets — it's how unnecessary they make themselves on the problems they've already solved. If I'm still the person the team calls for every design system question six months after I built the system, I failed to build the system's knowledge into the team. I actively work myself out of the rooms I've mastered: document the decisions I'd make, run the junior designers through the framework until they can run it without me, then redirect my attention to the next unsolved problem. That's not abdication — it's leverage. A practice that scales doesn't depend on a single person's taste or institutional memory.",
    ],
  },

  aiInDesign: {
    title: "AI in the Design Workflow",
    content: [
      "I use AI tools across three parts of my workflow: prototyping, research synthesis, and systems documentation. For prototyping, tools like v0 and Cursor have compressed the time from concept to interactive artifact from days to hours — sometimes less. That changes the economics of exploration. When a clickable prototype takes a day, you build one or two and commit. When it takes two hours, you build five and put them in front of users inside the same research sprint. The fidelity threshold for 'good enough to test' has dropped, and that changes how early you can get signal on an interaction direction. For synthesis, I use AI to find pattern clusters across interview transcripts — not to replace the synthesis work, but to surface candidate themes faster so the team's synthesis time focuses on interpretation rather than organization. For documentation, I use AI to generate first drafts of component specs and contribution guidelines, which I then edit. The editing is faster than writing from blank.",
      "AI fluency is a baseline expectation now, not a differentiator. The designers who will be valuable in the next five years aren't the ones who can use AI tools — everyone will be able to use AI tools. The valuable ones are the designers who know which problems AI makes easier and which problems it makes worse. AI accelerates generation; it doesn't improve judgment about what to generate. Knowing when to reach for a fast prototype and when to slow down and think through the problem first — that's still a human skill, and it's still the most important one in the room.",
    ],
  },
};
