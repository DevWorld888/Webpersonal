import { ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QUOTE_HREF } from "@/lib/site-config"
import { Container } from "../ui/Section"
import { GridBackdrop } from "../ui/PageHeader"
import { TrackedLink } from "../ui/TrackedLink"
import { HeroVisual } from "./HeroVisual"

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-b from-surface via-white to-white pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      <GridBackdrop />
      <div
        aria-hidden="true"
        className="absolute -right-40 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-sky/20 blur-3xl"
      />

      <Container className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="flex flex-col items-start gap-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-navy shadow-soft">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            Websites &amp; digital solutions for Australian small businesses
          </p>

          <h1 className="text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-navy sm:text-6xl lg:text-[4.1rem]">
            Your Business Deserves More Than{" "}
            <span className="bg-gradient-to-r from-primary to-sky bg-clip-text text-transparent">
              Just a Website.
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-body sm:text-xl">
            I build professional websites and digital solutions that help Australian small businesses
            get found online, attract more customers and grow.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild size="xl">
              <TrackedLink href={QUOTE_HREF} event="quote_request" params={{ location: "hero_cta" }}>
                Get a Free Quote <ArrowRight aria-hidden="true" />
              </TrackedLink>
            </Button>
            <Button asChild size="xl" variant="outline">
              <TrackedLink href="/work" event="view_work" params={{ location: "hero_cta" }}>
                Explore My Work
              </TrackedLink>
            </Button>
          </div>

          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            Based in Hobart, Tasmania • Serving Businesses Across Australia
          </p>
        </div>

        <HeroVisual />
      </Container>
    </section>
  )
}
