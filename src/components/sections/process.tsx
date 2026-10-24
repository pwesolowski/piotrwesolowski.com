import { Section } from "@/components/layout/section";
import type { Messages } from "@/messages";

import { Steps } from "./steps";

export function Process({ t }: { t: Messages }) {
  return (
    <Section
      id="wspolpraca"
      eyebrow={t.process.eyebrow}
      title={t.process.title}
      description={t.process.description}
      className="bg-muted"
    >
      <Steps steps={t.process.steps} />
    </Section>
  );
}
