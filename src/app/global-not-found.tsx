import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import { getMessages } from "@/messages";

import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin", "latin-ext"], display: "swap" });

export const metadata: Metadata = {
  title: "404 — Piotr Wesołowski",
  robots: { index: false },
};

/** Bilingual 404 for URLs outside the [locale] root layout. */
export default function GlobalNotFound() {
  const pl = getMessages("pl").notFound;
  const en = getMessages("en").notFound;

  return (
    <html lang="pl" className={`dark ${inter.variable}`}>
      <body className="flex min-h-screen items-center justify-center px-4">
        <main className="max-w-md space-y-8 text-center">
          <p className="text-6xl font-semibold text-primary-text">404</p>
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">{pl.title}</h1>
            <p className="text-muted-foreground">{pl.text}</p>
            <Link href="/" className="inline-block font-semibold text-primary-text underline">
              {pl.back}
            </Link>
          </div>
          <div lang="en" className="space-y-2 border-t pt-8 text-sm">
            <p className="font-semibold">{en.title}</p>
            <Link href="/en" className="text-primary-text underline">
              {en.back}
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
