import { createHash } from "node:crypto";

// TEMPORARY page (/skip2026) — delete src/app/skip2026 and public/skip2026 when no longer needed.
// Server-only values: never sent to the browser before the password is accepted.
export const PASSWORD = "RobertSkip";
export const YOUTUBE_ID = "B5AxPKMqhUk";
export const COOKIE_NAME = "skip2026";

/** Cookie value derived from the password, so changing the password logs everyone out. */
export const ACCESS_TOKEN = createHash("sha256").update(`skip2026:${PASSWORD}`).digest("hex");
