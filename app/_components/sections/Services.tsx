import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/content/services"
import { Section, SectionHeading } from "../ui/Section"
import { ServiceCard } from "../ui/ServiceCard"

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title="Digital Solutions Built Around Your Business"
        description="From your first website to the systems that save you time each week: practical services that focus on results, not jargon."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <ServiceCard key={service.slug} {...service} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button asChild size="xl" variant="outline">
          <Link href="/services">
            View all services <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}
