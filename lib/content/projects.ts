// Project content comes from the original case studies on the site.
// Do not add metrics or testimonials here unless they've been verified with the client.

export interface Project {
  slug: string
  name: string
  industry: string
  location: string
  image: string
  imageAlt: string
  url: string
  summary: string
  challenge: string
  solution: string
  services: string[]
  before: string[]
  delivered: string[]
  status: string
}

export const PROJECTS: Project[] = [
  {
    slug: "prisma-coatings",
    name: "Prisma Coatings",
    industry: "Painting contractor",
    location: "Sydney, NSW",
    image: "/projects/prismaCoatings.jpg",
    imageAlt:
      "Prisma Coatings website shown on a laptop and mobile phone, with the headline House Painters Sydney",
    url: "https://www.prismacoatings.com.au/",
    summary:
      "A rebuilt website for a Sydney painting company, designed to make it easy for homeowners to request a quote.",
    challenge:
      "The business relied on word of mouth and had no reliable way to win new customers online. The old website didn't show up in local searches and wasn't built to turn visitors into calls.",
    solution:
      "Rebuilt the website from scratch with a clean layout, fast loading, clear service descriptions and a strong call to action on every page, designed mobile-first because that's where most customers search.",
    services: ["Website Design & Development", "Local SEO foundations", "Mobile optimisation"],
    before: [
      "No consistent way to get new customers online",
      "Website didn't appear in local Sydney searches",
      "Visitors landed and left without calling or requesting a quote",
      "Fully dependent on word of mouth and referrals",
    ],
    delivered: [
      "Fast, mobile-friendly rebuild",
      "Clear, plain-language service pages with direct calls to action",
      "A homepage that answers 'Why should I call these painters?'",
      "A simple contact flow that makes requesting a quote easy",
    ],
    status:
      "Live and actively being optimised. Pages and local search performance are being tracked over time.",
  },
  {
    slug: "mana-fade-studio",
    name: "Mana Fade Studio",
    industry: "Barbershop",
    location: "Mount Nelson, Hobart, TAS",
    image: "/projects/manafade.png",
    imageAlt:
      "Mana Fade Studio barbershop website shown on a laptop and mobile phone, with the headline Premium Barber Shop in Hobart Tasmania",
    url: "https://www.manafadebarbershop.com.au/",
    summary:
      "A premium barbershop website for a Hobart barber, with online booking and a local SEO structure.",
    challenge:
      "The barber relied mostly on word of mouth, phone calls and direct messages. There was no professional online presence, no online booking and no local SEO strategy to attract new clients consistently.",
    solution:
      "Designed and developed a premium barbershop website from scratch: a modern brand presence, mobile-first experience, service pages, online booking integration and an SEO-focused page structure.",
    services: [
      "Website Design & Development",
      "Online Booking Integration",
      "Local SEO foundations",
      "Google Business Profile (in progress)",
    ],
    before: [
      "No professional website",
      "No online booking system",
      "Limited visibility on Google",
      "Difficult for new clients to discover the business",
    ],
    delivered: [
      "Premium, brand-led design",
      "Fast, responsive website optimised for mobile",
      "Online booking integration (Bookeo)",
      "SEO-focused page structure with clear calls to action",
    ],
    status:
      "Website launched with online booking. Local SEO, Google Business Profile and a customer review process are being implemented.",
  },
]
