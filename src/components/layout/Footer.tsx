import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] bg-[#141414] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#999999] text-sm">
          &copy; 2026 Jarrod Ausborne
        </p>
        <nav className="flex items-center gap-6">
          <Link
            href="https://www.linkedin.com/in/jarrodlee/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#999999] hover:text-[#e5e5e5] transition-colors duration-150 tracking-wide"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:Jarrodausborne@gmail.com"
            className="text-sm text-[#999999] hover:text-[#e5e5e5] transition-colors duration-150 tracking-wide"
          >
            Email
          </Link>
        </nav>
      </div>
    </footer>
  );
}
