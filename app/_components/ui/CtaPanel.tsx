import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QUOTE_HREF, REVIEW_HREF } from "@/lib/site-config"
import { Container } from "./Section"
import { TrackedLink } from "./TrackedLink"

interface CtaPanelProps {
  title?: string
  description?: string
  location: string
  id?: string
}

export function CtaPanel({
  title = "Ready to Grow Your Business Online?",
  description = "Let's discuss your business and find the right digital solution.",
  location,
  id,
}: CtaPanelProps) {
  return (
    <section id={id} className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#2158d8] to-brand-dark px-6 py-16 text-center shadow-lift sm:px-16 sm:py-20">
          {/* Decorative glow + grid */}
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-sky/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />

          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-blue-50">{description}</p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="xl" variant="inverse">
              <TrackedLink href={QUOTE_HREF} event="quote_request" params={{ location }}>
                Get a Free Quote <ArrowRight aria-hidden="true" />
              </TrackedLink>
            </Button>
            <Button asChild size="xl" variant="outline-inverse">
              <TrackedLink href={REVIEW_HREF} event="review_request" params={{ location }}>
                Request a Website Review
              </TrackedLink>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
