import Link from "next/link";

import { siteConfig, socialLinks } from "@/config/site";
import { href, type Locale } from "@/i18n/routes";
import type { Messages } from "@/messages";

import { Container } from "./container";

type SiteFooterProps = {
  locale: Locale;
  t: Messages;
};

export function SiteFooter({ locale, t }: SiteFooterProps) {
  return (
    <footer className="border-t pb-24 md:pb-0">
      <Container className="flex flex-col gap-8 py-10 text-sm text-muted-foreground md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="font-semibold text-foreground">{siteConfig.name}</p>
          <p>{t.footer.tagline}</p>
          <p>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
              {siteConfig.email}
            </a>
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a href={social.url} target="_blank" rel="noopener me" className="hover:text-foreground">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="flex flex-col gap-2 border-t py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
        </p>
        <Link href={href({ page: "privacy" }, locale)} className="hover:text-foreground">
          {t.footer.privacy}
        </Link>
      </Container>
    </footer>
  );
}
