import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { serviceHref, type Service } from "@/lib/content/services"

export function ServiceCard({ slug, title, icon: Icon, summary, benefit }: Service) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
      <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary ring-1 ring-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-body">{summary}</p>
      <p className="mt-4 border-l-2 border-sky pl-3 text-sm font-medium leading-relaxed text-navy">
        {benefit}
      </p>
      <Link
        href={serviceHref(slug)}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary after:absolute after:inset-0 after:rounded-2xl"
      >
        Learn more<span className="sr-only"> about {title}</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  )
}
