import fs from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type OgInput = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

/** Shared 1200×630 OG card (light theme colors from tokens.css). */
export async function renderOgImage({ eyebrow, title, subtitle }: OgInput) {
  const photo = await fs.readFile(path.join(process.cwd(), "public", "profilePhoto.jpeg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#ffffff",
          color: "#1d1d1f",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 600, color: "#0066cc" }}>{eyebrow}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 1000 }}>{title}</div>
          {subtitle ? (
            <div style={{ display: "flex", fontSize: 30, color: "#6e6e73", maxWidth: 1000 }}>{subtitle}</div>
          ) : null}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photoSrc} width={72} height={72} style={{ borderRadius: 999 }} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 600 }}>{siteConfig.name}</div>
            <div style={{ fontSize: 22, color: "#6e6e73" }}>piotrwesolowski.com</div>
          </div>
          <div style={{ display: "flex", marginLeft: "auto", width: 120, height: 8, borderRadius: 999, background: "#0071e3" }} />
        </div>
      </div>
    ),
    ogSize,
  );
}
