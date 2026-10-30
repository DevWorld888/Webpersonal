import Link from "next/link"
import { ArrowRight, Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pageMetadata } from "@/lib/seo"
import { SERVICES } from "@/lib/content/services"
import { QUOTE_HREF } from "@/lib/site-config"
import { PageHeader } from "../_components/ui/PageHeader"
import { Container } from "../_components/ui/Section"
import { CtaPanel } from "../_components/ui/CtaPanel"

export const metadata = pageMetadata({
  title: "Web Design, Local SEO & Automation Services",
  description:
    "Website design and development, local SEO, Google Business Profile optimisation, online booking systems, business automation and website maintenance for small businesses in Hobart and across Australia.",
  path: "/services",
})

const INDUSTRIES = [
  "Tradies & painting contractors",
  "Cleaning companies",
  "Barbershops & beauty",
  "Local service providers",
  "Startups",
  "Small & medium businesses",
]

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Services"
        title="Digital solutions built around your business"
        description="Everything you need to look professional online, get found by local customers and spend less time on admin, delivered by one developer you can talk to directly."
      >
        <nav aria-label="Services on this page" className="mt-4 flex flex-wrap gap-2">
          {SERVICES.map(({ slug, title }) => (
            <a
              key={slug}
              href={`#${slug}`}
              className="rounded-full border border-border bg-white px-3.5 py-1.5 text-sm font-medium text-body transition-colors hover:border-primary/40 hover:text-primary"
            >
              {title}
            </a>
          ))}
        </nav>
      </PageHeader>

      <Container className="flex flex-col divide-y divide-border">
        {SERVICES.map(({ slug, title, icon: Icon, summary, benefit, includes, idealFor, note }) => (
          <section
            key={slug}
            id={slug}
            aria-labelledby={`${slug}-title`}
            className="grid scroll-mt-24 gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_1fr] lg:gap-16"
          >
            <div className="flex flex-col items-start gap-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary ring-1 ring-primary/10">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 id={`${slug}-title`} className="text-3xl font-semibold tracking-tight text-navy">
                {title}
              </h2>
              <p className="text-lg leading-relaxed text-body">{summary}</p>
              <p className="border-l-2 border-sky pl-4 font-medium leading-relaxed text-navy">{benefit}</p>
              <p className="text-[15px] leading-relaxed text-body">
                <span className="font-semibold text-navy">Ideal for: </span>
                {idealFor}
              </p>
              {note && (
                <p className="flex items-start gap-2 rounded-lg bg-muted p-3 text-sm leading-relaxed text-body">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {note}
                </p>
              )}
            </div>

            <div className="self-start rounded-2xl border border-border bg-surface/60 p-7 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">What&apos;s included</h3>
              <ul className="mt-5 flex flex-col gap-3.5">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-navy">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-8">
                <Link href={QUOTE_HREF}>
                  Enquire about this service<span className="sr-only">: {title}</span>
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </section>
        ))}
      </Container>

      <section aria-labelledby="industries-title" className="bg-surface py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-8 text-center">
          <h2 id="industries-title" className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            Who I work with
          </h2>
          <ul className="flex max-w-3xl flex-wrap justify-center gap-3">
            {INDUSTRIES.map((industry) => (
              <li
                key={industry}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-navy shadow-soft"
              >
                {industry}
              </li>
            ))}
          </ul>
          <p className="max-w-xl text-[15px] leading-relaxed text-body">
            Based in Hobart, Tasmania, and working with businesses anywhere in Australia.
          </p>
        </Container>
      </section>

      <CtaPanel
        title="Not sure which service you need?"
        description="Tell me about your business and I'll recommend what will make the biggest difference, with no obligation."
        location="services_cta"
      />
    </main>
  )
}
