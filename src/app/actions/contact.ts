"use server";

import { getContactProvider } from "@/lib/contact/providers";
import type { ContactStatus } from "@/lib/contact/types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, name: string, maxLength: number) {
  return String(formData.get(name) ?? "").trim().slice(0, maxLength);
}

export async function sendContactMessage(
  locale: string,
  _previous: ContactStatus,
  formData: FormData,
): Promise<ContactStatus> {
  // Honeypot: bots fill hidden fields, people don't. Pretend success.
  if (field(formData, "website", 200)) return "success";

  const message = {
    name: field(formData, "name", 200),
    company: field(formData, "company", 200),
    email: field(formData, "email", 320),
    message: field(formData, "message", 5000),
    locale,
  };

  if (!message.name || !emailPattern.test(message.email) || !message.message) return "invalid";

  const provider = getContactProvider();
  if (!provider) return "not-configured";

  try {
    await provider.send(message);
    return "success";
  } catch (error) {
    console.error("Contact form delivery failed", error);
    return "error";
  }
}
