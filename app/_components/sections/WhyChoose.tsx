import { Code2, FileCheck2, LifeBuoy, MapPin, MessagesSquare, Puzzle } from "lucide-react"
import { Section, SectionHeading } from "../ui/Section"

export const REASONS = [
  {
    icon: MapPin,
    title: "Australian-based developer",
    description: "Based in Hobart, working with businesses across Australia, in your time zone.",
  },
  {
    icon: MessagesSquare,
    title: "Direct communication",
    description: "You work directly with me, the person building your website. No account managers or middlemen.",
  },
  {
    icon: Puzzle,
    title: "Tailored solutions",
    description: "Recommendations based on what your business needs, not a one-size-fits-all package.",
  },
  {
    icon: FileCheck2,
    title: "Transparent project scope",
    description: "A clear written proposal before work starts, so you know what's included and what it costs.",
  },
  {
    icon: Code2,
    title: "Modern development practices",
    description: "Fast, secure, mobile-first websites built with current, well-supported technology.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing technical support",
    description: "Help after launch with updates, fixes and improvements as your business grows.",
  },
]

export function WhyChoose() {
  return (
    <Section tone="tint" aria-labelledby="why-title">
      <SectionHeading
        eyebrow="Why iAugustoDev"
        title={<span id="why-title">Personal Service. Professional Digital Solutions.</span>}
        description="iAugustoDev is founder-led. When you get in touch, you speak with the developer who will build your website, from the first conversation to launch and beyond."
      />

      <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map(({ icon: Icon, title, description }) => (
          <li key={title} className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-soft ring-1 ring-border">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-semibold text-navy">{title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-body">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
