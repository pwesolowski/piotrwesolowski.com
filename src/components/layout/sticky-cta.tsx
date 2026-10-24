import type { Messages } from "@/messages";

import { CalendlyButton } from "./calendly-button";

/** Mobile-only booking bar pinned to the bottom of the viewport. */
export function StickyCta({ t }: { t: Messages }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 material border-t border-border/70 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <CalendlyButton label={t.cta.bookShort} newTabLabel={t.cta.newTab} className="w-full" />
    </div>
  );
}
