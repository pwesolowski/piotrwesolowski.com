import Image from "next/image";

import { Container } from "@/components/layout/container";
import { siteConfig, type TrustItem } from "@/config/site";
import type { Messages } from "@/messages";

function TrustList({ label, items }: { label: string; items: TrustItem[] }) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
      <p className="shrink-0 text-sm text-muted-foreground">{label}</p>
      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {items.map((item) => (
          <li key={item.name} className="text-sm font-semibold text-muted-foreground">
            {item.logo ? (
              <Image
                src={item.logo}
                alt={item.name}
                width={120}
                height={32}
                className="h-8 w-auto opacity-70 grayscale dark:invert"
              />
            ) : (
              item.name
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Hidden when siteConfig.trust has no entries. */
export function TrustBar({ t }: { t: Messages }) {
  const { industries, clients } = siteConfig.trust;
  if (industries.length === 0 && clients.length === 0) return null;

  return (
    <section aria-label={t.trust.label} className="border-y bg-muted/40 py-8">
      <Container className="flex flex-col gap-6">
        {industries.length > 0 ? <TrustList label={t.trust.label} items={industries} /> : null}
        {clients.length > 0 ? <TrustList label={t.trust.clientsLabel} items={clients} /> : null}
      </Container>
    </section>
  );
}
