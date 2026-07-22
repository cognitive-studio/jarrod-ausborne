"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "How I Work", href: "/how-i-work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-200",
        scrolled
          ? "bg-[#141414]/90 backdrop-blur-md border-b border-[#2a2a2a]"
          : "bg-[#141414]/80 backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="text-[#F04735] text-sm font-bold tracking-[0.2em] uppercase transition-opacity group-hover:opacity-80">
            JARROD
          </span>
          <span className="text-[#999999] text-[9px] font-medium tracking-[0.25em] uppercase mt-0.5">
            THE BUILDER
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "relative text-sm font-medium tracking-wide pb-0.5 transition-colors duration-150",
                  isActive
                    ? "text-[#e5e5e5]"
                    : "text-[#999999] hover:text-[#e5e5e5]",
                ].join(" ")}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-[#F04735]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={[
              "block w-5 h-px bg-[#e5e5e5] transition-all duration-200 origin-center",
              menuOpen ? "rotate-45 translate-y-[3.5px]" : "",
            ].join(" ")}
          />
          <span
            className={[
              "block w-5 h-px bg-[#e5e5e5] transition-all duration-200",
              menuOpen ? "opacity-0" : "",
            ].join(" ")}
          />
          <span
            className={[
              "block w-5 h-px bg-[#e5e5e5] transition-all duration-200 origin-center",
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : "",
            ].join(" ")}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#141414] border-b border-[#2a2a2a] py-4 px-6 flex flex-col gap-1">
          {navLinks.map(({ label, href }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "py-3 text-sm font-medium tracking-wide border-b border-[#2a2a2a] last:border-0 flex items-center justify-between transition-colors duration-150",
                  isActive
                    ? "text-[#e5e5e5]"
                    : "text-[#999999] hover:text-[#e5e5e5]",
                ].join(" ")}
              >
                {label}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F04735]" />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
