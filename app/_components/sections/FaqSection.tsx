import { FAQS } from "@/lib/content/faqs"
import { Section, SectionHeading } from "../ui/Section"
import { FaqJsonLd, FaqList } from "../ui/FaqList"

export function FaqSection() {
  return (
    <Section id="faq" tone="tint">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Questions Small Business Owners Ask"
          description="Can't find what you're looking for? Send me a message and I'll get back to you personally."
          className="lg:sticky lg:top-28 lg:self-start"
        />
        <FaqList faqs={FAQS} />
      </div>
      <FaqJsonLd faqs={FAQS} />
    </Section>
  )
}
