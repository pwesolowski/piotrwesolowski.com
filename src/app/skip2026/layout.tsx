import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";

import "./skip2026.css";

// TEMPORARY standalone root layout (no site header/footer), styled after skipgroup.pl.
const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "SKIP Group — film",
  robots: { index: false, follow: false },
};

export default function Skip2026Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" className={montserrat.variable}>
      <body className="skip">{children}</body>
    </html>
  );
}
