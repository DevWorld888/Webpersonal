import { Suspense } from "react"
import { Clock, Mail, MapPin } from "lucide-react"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { Container, Eyebrow } from "../_components/ui/Section"
import { GridBackdrop } from "../_components/ui/PageHeader"
import { TrackedLink } from "../_components/ui/TrackedLink"
import { EnquiryForm, EnquiryFormFromParams } from "../_components/forms/EnquiryForm"

export const metadata = pageMetadata({
  title: "Get a Free Quote or Website Review",
  description:
    "Get a free quote for a new website, local SEO, online booking or automation, or request a free review of your existing website. iAugustoDev, Hobart, Tasmania.",
  path: "/contact",
})

const NEXT_STEPS = [
  "I personally read your enquiry and reply within 24–48 hours.",
  "We have a short chat about your business and goals.",
  "You receive clear recommendations or a written proposal. No obligation.",
]

export default function ContactPage() {
  return (
    <main id="main" className="relative isolate bg-gradient-to-b from-surface to-white pb-24 pt-32 sm:pt-40">
      <GridBackdrop />
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <div className="flex flex-col gap-5">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
              Let&apos;s grow your business online
            </h1>
            <p className="text-lg leading-relaxed text-body">
              Need a new website or digital service? Ask for a free quote. Already have a website? Request a
              free review and I&apos;ll show you what could be working harder.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
            <h2 className="font-semibold text-navy">What happens next</h2>
            <ol className="mt-4 flex flex-col gap-4">
              {NEXT_STEPS.map((step, i) => (
                <li key={step} className="flex gap-3 text-[15px] leading-relaxed text-body">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-primary">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <ul className="flex flex-col gap-3 text-[15px]">
            <li>
              <TrackedLink
                href={`mailto:${siteConfig.email}`}
                event="click_email"
                params={{ location: "contact_page" }}
                className="inline-flex items-center gap-3 break-all text-navy transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                {siteConfig.email}
              </TrackedLink>
            </li>
            <li className="flex items-center gap-3 text-body">
              <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              Hobart, Tasmania · Serving all of Australia
            </li>
            <li className="flex items-center gap-3 text-body">
              <Clock className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              Replies within 24–48 hours
            </li>
          </ul>
        </div>

        <div id="enquiry">
          <Suspense fallback={<EnquiryForm />}>
            <EnquiryFormFromParams />
          </Suspense>
        </div>
      </Container>
    </main>
  )
}
