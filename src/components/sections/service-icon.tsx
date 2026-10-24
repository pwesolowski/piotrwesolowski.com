import { FileStack, Plug, ScanSearch, type LucideProps } from "lucide-react";

import type { ServiceId } from "@/config/services";

const icons = {
  audit: ScanSearch,
  agents: FileStack,
  mcp: Plug,
} satisfies Record<ServiceId, unknown>;

export function ServiceIcon({ id, ...props }: LucideProps & { id: ServiceId }) {
  const Icon = icons[id];

  return <Icon aria-hidden="true" {...props} />;
}
