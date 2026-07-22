---
name: "Jarrod Ausborne Portfolio — Dark Editorial"
colors:
  background: "#141414"
  surface: "#181818"
  surface-raised: "#1f1f1f"
  border: "#2a2a2a"
  accent: "#F04735"
  accent-hover: "#d63a2a"
  text-primary: "#e5e5e5"
  text-secondary: "#999999"
  text-muted: "#666666"
  success: "#46d37b"
  warning: "#f5a623"
  info: "#4a9eff"
typography:
  display: "'DM Serif Display', Georgia, serif"
  body: "'DM Sans', system-ui, sans-serif"
  mono: "'JetBrains Mono', monospace"
  scale:
    xs: "0.75rem"
    sm: "0.875rem"
    base: "1rem"
    lg: "1.125rem"
    xl: "1.25rem"
    2xl: "1.5rem"
    3xl: "1.875rem"
    4xl: "2.25rem"
    5xl: "3rem"
rounded:
  sm: "4px"
  md: "6px"
  lg: "12px"
  full: "9999px"
spacing:
  page-x: "clamp(1.5rem, 5vw, 6rem)"
  section-y: "clamp(3rem, 8vw, 8rem)"
  card-p: "1.5rem"
components:
  card:
    background: "#181818"
    border: "1px solid #2a2a2a"
    radius: "6px"
    hover-border: "#F04735"
  button-primary:
    background: "#F04735"
    color: "#ffffff"
    radius: "4px"
    font-weight: "600"
  tag:
    background: "#1f1f1f"
    border: "1px solid #2a2a2a"
    color: "#999999"
    radius: "4px"
---

# Jarrod Ausborne Portfolio — Design System

## Brand & Style

Dark editorial — the aesthetic of a designer who takes craft seriously. Not a developer portfolio, not a SaaS product. Feels like a high-end design publication: substantial typography, careful whitespace, a single bold red accent that earns attention without shouting.

## Colors

One accent color (`#F04735`) used sparingly — on labels, active states, and the ONE element per page that should demand attention. Everything else lives in a tight range of near-blacks and grays. The background (`#141414`) is not pure black — it has warmth.

## Typography

Display headings use DM Serif Display — editorial, confident, slightly literary. Body copy uses DM Sans — clean, modern, legible at small sizes. The contrast between serif display and sans body is the typographic personality of the site.

## Layout & Spacing

Generous whitespace. Max content width 800px for reading, wider for grids. Horizontal padding scales with viewport. Never crowded.

## Elevation & Depth

Cards sit at `#181818` on a `#141414` background — a 7-unit difference that creates depth without shadow. Hover states shift border color to the accent rather than adding box-shadow.

## Components

Cards are minimal — dark bg, subtle border, hover gets a red border edge. Tags are quiet — muted text on dark surface. Buttons are rare and intentional — the primary CTA is always red.
