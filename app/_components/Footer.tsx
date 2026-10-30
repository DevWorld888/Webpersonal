import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
import { NAV_LINKS, siteConfig } from "@/lib/site-config"
import { SERVICES, serviceHref } from "@/lib/content/services"
import { Container } from "./ui/Section"
import { Logo } from "./ui/Logo"
import { TrackedLink } from "./ui/TrackedLink"
import { GitHubIcon, LinkedInIcon } from "./ui/SocialIcons"

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedInIcon },
  // { label: "GitHub", href: siteConfig.social.github, Icon: GitHubIcon },
]

const linkClass = "text-sm text-body transition-colors hover:text-primary"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border bg-white">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-body">
            Professional websites, local SEO and smart automation for Australian small businesses.
          </p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            Based in Hobart, Tasmania · Serving all of Australia
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="mb-4 text-sm font-semibold text-navy">Navigation</h2>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className={linkClass}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-navy">Services</h2>
          <ul className="flex flex-col gap-3">
            {SERVICES.map(({ slug, title }) => (
              <li key={slug}>
                <Link href={serviceHref(slug)} className={linkClass}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-navy">Get in touch</h2>
          <ul className="flex flex-col gap-3">
            <li>
              <TrackedLink
                href={`mailto:${siteConfig.email}`}
                event="click_email"
                params={{ location: "footer" }}
                className={`${linkClass} inline-flex items-center gap-2 break-all`}
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.email}
              </TrackedLink>
            </li>
            <li>
              <Link href="/contact" className={linkClass}>
                Get a free quote
              </Link>
            </li>
            <li>
              <Link href="/contact?type=review" className={linkClass}>
                Request a website review
              </Link>
            </li>
          </ul>
          <div className="mt-6 flex items-center gap-2">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (opens in a new tab)`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-body transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>&copy; {year} iAugustoDev. All rights reserved.</p>
          <p>Founder-led web design &amp; digital solutions · Hobart, Tasmania</p>
        </Container>
      </div>
    </footer>
  )
}
