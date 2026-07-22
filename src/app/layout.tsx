import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jarrod Ausborne — Staff Product Designer",
  description:
    "Staff Product Designer building enterprise design practices, systems, and products that last.",
  openGraph: {
    title: "Jarrod Ausborne — Staff Product Designer",
    description:
      "Staff Product Designer building enterprise design practices, systems, and products that last.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-[#141414] text-[#e5e5e5] font-sans antialiased">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
