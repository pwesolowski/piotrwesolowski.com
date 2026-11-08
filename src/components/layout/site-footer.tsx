import Link from "next/link";

import { siteConfig } from "@/config/site";
import { href, type Locale } from "@/i18n/routes";
import type { Messages } from "@/messages";

type SiteFooterProps = {
  locale: Locale;
  t: Messages;
};

export function SiteFooter({ locale, t }: SiteFooterProps) {
  return (
    <footer className="mx-auto flex w-full max-w-2xl flex-col items-center gap-2 border-t px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
      <p>
        © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
      </p>
      <Link href={href({ page: "privacy" }, locale)} className="hover:text-foreground">
        {t.footer.privacy}
      </Link>
    </footer>
  );
}
