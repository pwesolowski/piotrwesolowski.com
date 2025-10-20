import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://piotrwesolowski.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Piotr Wesołowski — Senior Software Engineer",
    template: "%s | Piotr Wesołowski",
  },
  description:
    "Piotr Wesołowski is a senior software engineer building scalable, secure systems with Java, Node.js, and cloud-native technologies.",
  keywords: [
    "Piotr Wesołowski",
    "Senior Software Engineer",
    "Software Engineer",
    "Java",
    "Node.js",
    "TypeScript",
    "AWS",
    "Cloud",
  ],
  authors: [{ name: "Piotr Wesołowski" }],
  openGraph: {
    title: "Piotr Wesołowski — Senior Software Engineer",
    description:
      "Portfolio of Piotr Wesołowski showcasing senior software engineering experience, projects, and skills.",
    url: baseUrl,
    siteName: "piotrwesolowski.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Piotr Wesołowski — Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piotr Wesołowski — Senior Software Engineer",
    description:
      "Portfolio of Piotr Wesołowski showcasing senior software engineering experience, projects, and skills.",
    site: "@PiotrWesolowski",
    creator: "@PiotrWesolowski",
    images: [`${baseUrl}/og-image.png`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-white text-slate-950`}>
        {children}
      </body>
    </html>
  );
}
