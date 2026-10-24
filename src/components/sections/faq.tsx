import { Section } from "@/components/layout/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Messages } from "@/messages";

export function Faq({ t }: { t: Messages }) {
  return (
    <Section id="faq" eyebrow={t.faq.eyebrow} title={t.faq.title}>
      <Accordion className="max-w-3xl border-t">
        {t.faq.items.map((item) => (
          <AccordionItem key={item.q} name="faq">
            <AccordionTrigger>{item.q}</AccordionTrigger>
            <AccordionContent>{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
