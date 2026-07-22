"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white text-sm font-medium rounded-sm hover:bg-[#d63e2f] transition-colors print:hidden"
    >
      Download PDF
    </button>
  );
}
