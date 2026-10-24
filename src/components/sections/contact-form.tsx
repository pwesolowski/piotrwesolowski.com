"use client";

import { useActionState } from "react";

import { sendContactMessage } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/site";
import type { ContactStatus } from "@/lib/contact/types";
import type { Messages } from "@/messages";

type ContactFormProps = {
  locale: string;
  t: Messages["contact"]["form"];
  privacyHref: string;
};

export function ContactForm({ locale, t, privacyHref }: ContactFormProps) {
  const [status, action, pending] = useActionState(
    sendContactMessage.bind(null, locale),
    "idle" as ContactStatus,
  );

  const feedback: Partial<Record<ContactStatus, string>> = {
    success: t.success,
    invalid: t.invalid,
    error: t.error,
    "not-configured": t.notConfigured,
  };

  if (status === "success") {
    return (
      <p role="status" className="rounded-xl border bg-accent p-6 text-accent-foreground">
        {t.success}
      </p>
    );
  }

  return (
    <form action={action} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="contact-name">{t.name}</Label>
          <Input id="contact-name" name="name" autoComplete="name" required maxLength={200} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="contact-company">{t.company}</Label>
          <Input id="contact-company" name="company" autoComplete="organization" maxLength={200} />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="contact-email">{t.email}</Label>
        <Input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={320} />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="contact-message">{t.message}</Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          maxLength={5000}
          placeholder={t.messagePlaceholder}
        />
      </div>

      {/* Honeypot — hidden from people and assistive tech. */}
      <div aria-hidden="true" className="hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className="text-xs text-muted-foreground">
        {t.privacy}{" "}
        <a href={privacyHref} className="underline hover:text-foreground">
          {t.privacyLink}
        </a>
        .
      </p>

      <div aria-live="polite">
        {feedback[status] ? (
          <p className={status === "not-configured" ? "text-sm" : "text-sm text-destructive"}>
            {feedback[status]}{" "}
            {status !== "invalid" ? (
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-primary-text underline">
                {siteConfig.email}
              </a>
            ) : null}
          </p>
        ) : null}
      </div>

      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {pending ? t.sending : t.submit}
      </Button>
    </form>
  );
}
