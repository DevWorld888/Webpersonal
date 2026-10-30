const PRODUCTION_URL = "https://www.iaugustodev.com"

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  // Production deploys must never canonicalise to a *.vercel.app preview host
  if (process.env.VERCEL_ENV === "production") return PRODUCTION_URL
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return "http://localhost:3000"
}

export const siteConfig = {
  url: getBaseUrl(),
  brand: "iAugustoDev",
  name: "Augusto Cáceres",
  title: "iAugustoDev | Web Design Hobart & Digital Solutions for Small Businesses",
  tagline: "Websites & digital solutions that help your business grow",
  description:
    "Professional websites, local SEO and smart automation for Australian small businesses. Founder-led web design based in Hobart, Tasmania, serving businesses across Australia.",
  location: {
    city: "Hobart",
    region: "Tasmania",
    regionCode: "TAS",
    country: "Australia",
  },
  phone: "+61412053218",
  email: "augustocsuarez1985@gmail.com",
  social: {
    github: "https://github.com/DevWorld888",
    linkedin: "https://www.linkedin.com/in/augustocs/",
  },
  keywords: [
    "web developer Hobart",
    "web design Hobart",
    "website design Tasmania",
    "local SEO Hobart",
    "website design for tradies",
    "small business website design Australia",
    "cleaning business website design",
    "barbershop website design",
    "Google Business Profile optimisation",
    "online booking system website",
    "business automation Australia",
  ],
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

export const QUOTE_HREF = "/contact"
export const REVIEW_HREF = "/contact?type=review"
