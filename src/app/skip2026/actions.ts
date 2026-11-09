"use server";

import { timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { ACCESS_TOKEN, COOKIE_NAME, PASSWORD } from "./auth";

export async function unlock(formData: FormData) {
  const given = String(formData.get("password") ?? "");
  const a = Buffer.from(given);
  const b = Buffer.from(PASSWORD);
  const ok = a.length === b.length && timingSafeEqual(a, b);

  if (!ok) redirect("/skip2026?error=1");

  (await cookies()).set(COOKIE_NAME, ACCESS_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  redirect("/skip2026");
}
