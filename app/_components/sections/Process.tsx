import { Compass, FileText, PenTool, Rocket } from "lucide-react"
import { Section, SectionHeading } from "../ui/Section"

const STEPS = [
  {
    icon: Compass,
    title: "Discovery",
    description: "A relaxed chat about your business, your customers and what you want your website to achieve.",
  },
  {
    icon: FileText,
    title: "Strategy & Proposal",
    description: "A clear written proposal covering scope, price and timeline, so you know exactly what you're getting.",
  },
  {
    icon: PenTool,
    title: "Design & Development",
    description: "Your website is designed and built, with regular check-ins so you can give feedback along the way.",
  },
  {
    icon: Rocket,
    title: "Launch & Ongoing Support",
    description: "We launch together, then I'm here for updates, improvements and support when you need them.",
  },
]

export function Process() {
  return (
    <Section id="how-it-works">
      <SectionHeading
        eyebrow="How it works"
        title="From Your Idea to a Stronger Online Presence"
        description="A simple, transparent process, with no surprises and no tech jargon."
      />

      <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {/* Connecting line on large screens */}
        <div
          aria-hidden="true"
          className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 lg:block"
        />
        {STEPS.map(({ icon: Icon, title, description }, i) => (
          <li key={title} className="relative flex flex-col items-start gap-4 lg:items-center lg:text-center">
            <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/15 bg-white text-primary shadow-soft">
              <Icon className="h-6 w-6" aria-hidden="true" />
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                {i + 1}
              </span>
            </span>
            <h3 className="text-lg font-semibold text-navy">{title}</h3>
            <p className="max-w-xs text-[15px] leading-relaxed text-body">{description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
