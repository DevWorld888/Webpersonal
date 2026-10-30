import Image from "next/image"
import { ArrowUpRight, CircleDot, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pageMetadata } from "@/lib/seo"
import { PROJECTS } from "@/lib/content/projects"
import { PageHeader } from "../_components/ui/PageHeader"
import { Container } from "../_components/ui/Section"
import { CtaPanel } from "../_components/ui/CtaPanel"

export const metadata = pageMetadata({
  title: "Website Projects & Case Studies",
  description:
    "Website case studies for Australian small businesses, including Prisma Coatings, a Sydney painting company, and Mana Fade Studio, a Hobart barbershop with online booking.",
  path: "/work",
})

export default function WorkPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Work"
        title="Real projects. Practical digital solutions."
        description="A closer look at the businesses I've worked with: the challenge they faced, what was delivered and where each project is now."
      />

      <Container className="flex flex-col gap-24 py-20 sm:py-28">
        {PROJECTS.map((project, i) => (
          <article
            key={project.slug}
            id={project.slug}
            aria-labelledby={`${project.slug}-title`}
            className="grid scroll-mt-24 items-start gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border bg-navy shadow-lift">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="rounded-full bg-secondary px-3 py-1 font-medium text-primary">{project.industry}</span>
                <span className="inline-flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {project.location}
                </span>
              </div>

              <div>
                <h2 id={`${project.slug}-title`} className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                  {project.name}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-body">{project.summary}</p>
              </div>

              <div>
                <h3 className="font-semibold text-navy">The challenge</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-body">{project.challenge}</p>
              </div>

              <div>
                <h3 className="font-semibold text-navy">The solution</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-body">{project.solution}</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <CheckList title="Before" items={project.before} tone="muted" />
                <CheckList title="What was delivered" items={project.delivered} tone="brand" />
              </div>

              <div>
                <h3 className="font-semibold text-navy">Services</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <li key={service} className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-body">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-surface/60 p-5">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-navy">
                  <CircleDot className="h-4 w-4 text-primary" aria-hidden="true" />
                  Current status
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-body">{project.status}</p>
              </div>

              <Button asChild size="xl" variant="outline" className="self-start">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Visit live website<span className="sr-only"> for {project.name} (opens in a new tab)</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </article>
        ))}
      </Container>

      <CtaPanel
        title="Want a website that works this hard for your business?"
        location="work_cta"
      />
    </main>
  )
}

function CheckList({ title, items, tone }: { title: string; items: string[]; tone: "muted" | "brand" }) {
  return (
    <div>
      <h3 className="font-semibold text-navy">{title}</h3>
      <ul className="mt-3 flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-body">
            <span
              aria-hidden="true"
              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${tone === "brand" ? "bg-primary" : "bg-slate-300"}`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
