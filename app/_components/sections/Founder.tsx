import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section, Eyebrow } from "../ui/Section"

const PRINCIPLES = [
  "Plain-English advice, no tech jargon",
  "Practical solutions that suit your budget and goals",
  "Honest recommendations, including what you don't need",
]

export function Founder() {
  return (
    <Section id="about" aria-labelledby="founder-title">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-[#13254a] to-primary p-8 shadow-lift">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sky/30 blur-3xl"
            />
            <span
              aria-hidden="true"
              className="absolute left-8 top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-white ring-1 ring-white/20"
            >
              iA
            </span>
            <p className="relative text-2xl font-semibold leading-snug text-white">
              Practical websites and systems that make a real difference to how your business runs.
            </p>
            <p className="relative mt-6 text-sm font-medium text-blue-100">
              Augusto Cáceres
              <span className="block font-normal text-blue-200/80">Founder, iAugustoDev · Hobart</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6">
          <Eyebrow>About the founder</Eyebrow>
          <h2 id="founder-title" className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Hi, I&apos;m Augusto. I help small businesses grow online.
          </h2>
          <p className="text-lg leading-relaxed text-body">
            iAugustoDev is a founder-led digital solutions business based in Hobart, Tasmania. I work
            with tradies, local service providers and growing businesses to build websites, improve
            their local visibility and automate the admin that slows them down.
          </p>
          <p className="text-lg leading-relaxed text-body">
            My approach is simple: understand your business first, then build what will actually help,
            whether that&apos;s a new website, a stronger Google presence or an easier way for customers
            to book.
          </p>
          <ul className="flex flex-col gap-3">
            {PRINCIPLES.map((item) => (
              <li key={item} className="flex items-start gap-3 text-navy">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button asChild size="xl" variant="outline" className="mt-2">
            <Link href="/about">
              More about me <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
