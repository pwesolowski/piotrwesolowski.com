import fs from "node:fs";
import path from "node:path";

import type { Locale } from "@/i18n/routes";

type CaseStudyCopy = {
  title: string;
  client: string;
  problem: string;
  solution: string;
  result: string;
};

export type CaseStudy = {
  id: string;
  order: number;
  /** Drafts render only in `next dev`, never in production builds. */
  draft?: boolean;
  /** Full write-up, usually on pioter.ai. */
  url: string;
  tags: string[];
} & Record<Locale, CaseStudyCopy>;

const directory = path.join(process.cwd(), "content", "case-studies");

export function getCaseStudies(): CaseStudy[] {
  const showDrafts = process.env.NODE_ENV === "development";

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".json"))
    .map((file) => JSON.parse(fs.readFileSync(path.join(directory, file), "utf8")) as CaseStudy)
    .filter((study) => showDrafts || !study.draft)
    .sort((a, b) => a.order - b.order);
}
