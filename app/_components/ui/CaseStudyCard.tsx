import Image from "next/image"
import { ArrowUpRight, MapPin } from "lucide-react"
import type { Project } from "@/lib/content/projects"

export function CaseStudyCard({ project, priority }: { project: Project; priority?: boolean }) {
  const { name, industry, location, image, imageAlt, url, challenge, solution, services } = project

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift">
      <div className="relative aspect-[3/2] overflow-hidden bg-navy">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-5 p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="rounded-full bg-secondary px-3 py-1 font-medium text-primary">{industry}</span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {location}
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-navy">{name}</h3>

        <dl className="flex flex-col gap-4 text-[15px] leading-relaxed">
          <div>
            <dt className="font-semibold text-navy">The challenge</dt>
            <dd className="mt-1 text-body">{challenge}</dd>
          </div>
          <div>
            <dt className="font-semibold text-navy">The solution</dt>
            <dd className="mt-1 text-body">{solution}</dd>
          </div>
        </dl>

        <ul aria-label="Services delivered" className="flex flex-wrap gap-2">
          {services.map((service) => (
            <li
              key={service}
              className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-body"
            >
              {service}
            </li>
          ))}
        </ul>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-primary hover:text-brand-dark"
        >
          Visit live website<span className="sr-only"> for {name} (opens in a new tab)</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
