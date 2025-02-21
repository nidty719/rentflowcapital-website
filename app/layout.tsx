import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RentFlow | DSCR Loans for Real Estate Investors",
  description: "Get approved for investment property loans based on rental income, not personal income. Fast approvals, no tax returns needed.",
  keywords: "DSCR loans, real estate investment, rental property financing, investment property loans, no income verification loans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
