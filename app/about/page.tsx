import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { PageHeader } from "../_components/ui/PageHeader"
import { Section, SectionHeading } from "../_components/ui/Section"
import { CtaPanel } from "../_components/ui/CtaPanel"
import { REASONS } from "../_components/sections/WhyChoose"
import { GitHubIcon, LinkedInIcon } from "../_components/ui/SocialIcons"

export const metadata = pageMetadata({
  title: "About Augusto Cáceres, Web Developer in Hobart",
  description:
    "iAugustoDev is a founder-led digital solutions business in Hobart, Tasmania. Meet Augusto Cáceres, the web developer helping Australian small businesses improve their online presence.",
  path: "/about",
})

const TOOLS = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "API integrations", "Automation"]

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="About"
        title="A founder-led business with a practical approach"
        description="iAugustoDev helps Australian small businesses look professional online, get found by local customers and save time with smart automation."
      />

      <Section aria-labelledby="story-title">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-body">
            <h2 id="story-title" className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Hi, I&apos;m Augusto.
            </h2>
            <p>
              I&apos;m the founder of iAugustoDev and the developer behind every project. I&apos;m based in Hobart,
              Tasmania, with more than three years of real-world experience building for the web, and I work with
              businesses right across Australia.
            </p>
            <p>
              Plenty of good local businesses miss out online. Some have websites that look outdated or
              don&apos;t bring in enquiries. Others have no website at all and rely entirely on word of mouth.
              iAugustoDev exists to fix that.
            </p>
            <p>
              My focus is simple: understand how your business works, then build what will actually help. That
              might be a new website, a stronger presence on Google, an easier way for customers to book, or
              automation that takes repetitive admin off your plate.
            </p>
            <p>
              Because iAugustoDev is founder-led, you deal with me directly, from the first conversation to launch
              and beyond. No account managers, no hand-offs and no tech jargon.
            </p>
          </div>

          <aside className="flex flex-col gap-6 self-start rounded-2xl border border-border bg-surface/60 p-8">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">At a glance</h2>
              <dl className="mt-5 flex flex-col gap-4 text-[15px]">
                <div>
                  <dt className="text-muted-foreground">Founder</dt>
                  <dd className="font-medium text-navy">{siteConfig.name}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Based in</dt>
                  <dd className="font-medium text-navy">Hobart, Tasmania</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Serving</dt>
                  <dd className="font-medium text-navy">Small businesses across Australia</dd>
                </div>
              </dl>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Built with</h2>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Modern, well-supported technology chosen for speed, security and easy maintenance.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {TOOLS.map((tool) => (
                  <li key={tool} className="rounded-md border border-border bg-white px-2.5 py-1 text-xs font-medium text-body">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2 text-sm font-medium text-navy transition-colors hover:border-primary/40 hover:text-primary"
              >
                <LinkedInIcon className="h-4 w-4" /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2 text-sm font-medium text-navy transition-colors hover:border-primary/40 hover:text-primary"
              >
                <GitHubIcon className="h-4 w-4" /> GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="tint" aria-labelledby="values-title">
        <SectionHeading
          eyebrow="How I work"
          title={<span id="values-title">What you can expect</span>}
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map(({ icon: Icon, title, description }) => (
              <li key={title} className="rounded-2xl border border-border bg-white p-7 shadow-soft">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-body">{description}</p>
              </li>
            ))}
        </ul>
      </Section>

      <CtaPanel
        title="Let's talk about your business"
        description="Whether you need a new website or want to improve the one you have, I'm happy to help you work out the next step."
        location="about_cta"
      />
    </main>
  )
}
