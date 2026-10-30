import Link from "next/link"
import { ArrowRight, Clock, MonitorX, SearchX, TrendingDown, type LucideIcon } from "lucide-react"
import { getService, serviceHref, type ServiceSlug } from "@/lib/content/services"
import { Section, SectionHeading } from "../ui/Section"

const CHALLENGES: { icon: LucideIcon; problem: string; detail: string; solution: ServiceSlug }[] = [
  {
    icon: SearchX,
    problem: "Your business is difficult to find on Google.",
    detail: "If customers can't find you when they search locally, they'll find a competitor instead.",
    solution: "local-seo",
  },
  {
    icon: TrendingDown,
    problem: "Your website doesn't generate enough enquiries.",
    detail: "Visitors arrive, but there's no clear reason or easy way for them to get in touch.",
    solution: "website-design",
  },
  {
    icon: MonitorX,
    problem: "Your online presence looks outdated.",
    detail: "An old website or incomplete Google profile can quietly undermine customer trust.",
    solution: "google-business-profile",
  },
  {
    icon: Clock,
    problem: "You're spending too much time on repetitive tasks.",
    detail: "Answering the same questions and chasing bookings takes time away from real work.",
    solution: "business-automation",
  },
]

export function Challenges() {
  return (
    <Section tone="tint" aria-labelledby="challenges-title">
      <SectionHeading
        eyebrow="Sound familiar?"
        title={<span id="challenges-title">Is Your Business Missing Out on Online Customers?</span>}
        description="Most small businesses don't need more tech. They need a clear online presence that works as hard as they do."
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2">
        {CHALLENGES.map(({ icon: Icon, problem, detail, solution }) => {
          const service = getService(solution)
          return (
            <li
              key={problem}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-white p-7 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-navy">{problem}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-body">{detail}</p>
                </div>
              </div>
              <Link
                href={serviceHref(solution)}
                className="group mt-auto flex items-center justify-between gap-3 rounded-xl bg-surface px-4 py-3 text-sm transition-colors hover:bg-secondary/70"
              >
                <span className="text-body">
                  The fix: <span className="font-semibold text-primary">{service.title}</span>
                </span>
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
