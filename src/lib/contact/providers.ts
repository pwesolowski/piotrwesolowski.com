import { siteConfig } from "@/config/site";

import type { ContactMessage, ContactProvider } from "./types";

/*
 * Ready-made adapters using plain fetch (no SDKs). None is active by default —
 * pick one with the CONTACT_PROVIDER env var (see .env.example), or add your own
 * adapter here and register it in getContactProvider().
 */

function plainText(message: ContactMessage) {
  return [
    `Imię: ${message.name}`,
    `Firma: ${message.company || "—"}`,
    `E-mail: ${message.email}`,
    `Język: ${message.locale}`,
    "",
    message.message,
  ].join("\n");
}

/** https://resend.com/docs/api-reference/emails/send-email */
function resendProvider(apiKey: string, from: string): ContactProvider {
  return {
    async send(message) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: [process.env.CONTACT_TO_EMAIL || siteConfig.email],
          reply_to: message.email,
          subject: `Kontakt ze strony: ${message.name}${message.company ? ` (${message.company})` : ""}`,
          text: plainText(message),
        }),
      });
      if (!response.ok) throw new Error(`Resend responded with ${response.status}`);
    },
  };
}

/** https://help.formspree.io/hc/en-us/articles/360013470814 */
function formspreeProvider(formId: string): ContactProvider {
  return {
    async send(message) {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ ...message, _replyto: message.email }),
      });
      if (!response.ok) throw new Error(`Formspree responded with ${response.status}`);
    },
  };
}

/** Returns null until a provider is configured — the form then points to e-mail. */
export function getContactProvider(): ContactProvider | null {
  switch (process.env.CONTACT_PROVIDER) {
    case "resend":
      return process.env.RESEND_API_KEY && process.env.RESEND_FROM
        ? resendProvider(process.env.RESEND_API_KEY, process.env.RESEND_FROM)
        : null;
    case "formspree":
      return process.env.FORMSPREE_FORM_ID ? formspreeProvider(process.env.FORMSPREE_FORM_ID) : null;
    default:
      return null;
  }
}
