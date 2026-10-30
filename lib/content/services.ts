import {
  CalendarCheck,
  MapPin,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react"

export type ServiceSlug =
  | "website-design"
  | "local-seo"
  | "google-business-profile"
  | "online-booking"
  | "business-automation"
  | "website-maintenance"

export interface Service {
  slug: ServiceSlug
  title: string
  icon: LucideIcon
  summary: string
  benefit: string
  includes: string[]
  idealFor: string
  note?: string
}

export const SERVICES: Service[] = [
  {
    slug: "website-design",
    title: "Website Design & Development",
    icon: MonitorSmartphone,
    summary:
      "A fast, mobile-friendly website that clearly explains what you do and makes it easy for customers to get in touch.",
    benefit: "Turn more visitors into enquiries with a clear path to contact you on every page.",
    includes: [
      "Custom design that suits your brand",
      "Mobile-first, fast-loading build",
      "Clear service pages and calls to action",
      "On-page SEO foundations from day one",
      "Enquiry forms delivered straight to your inbox",
    ],
    idealFor: "New businesses, or businesses whose current website looks outdated or doesn't bring in enquiries.",
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    icon: Search,
    summary:
      "Help people in your area find your business when they search for the services you offer.",
    benefit: "Build long-term visibility in local search without relying only on paid ads.",
    includes: [
      "Keyword and competitor research for your area",
      "Service and location page structure",
      "Technical SEO fixes and site speed improvements",
      "Structured data so search engines understand your business",
      "Clear recommendations you can act on",
    ],
    idealFor: "Businesses that rely on local customers and want to show up when people search nearby.",
    note: "No one can honestly guarantee Google rankings. I focus on proven foundations and transparent reporting.",
  },
  {
    slug: "google-business-profile",
    title: "Google Business Profile Optimisation",
    icon: MapPin,
    summary:
      "Make your Google Business Profile complete, accurate and consistent with your website.",
    benefit: "Make a stronger first impression when locals find you on Google Search and Maps.",
    includes: [
      "Profile review, setup or verification support",
      "Categories, services and business description",
      "Photo and update recommendations",
      "A simple process for asking customers for reviews",
      "Consistent details across your profile and website",
    ],
    idealFor: "Service businesses whose customers search on Google Maps before they call.",
  },
  {
    slug: "online-booking",
    title: "Online Booking Systems",
    icon: CalendarCheck,
    summary:
      "Let customers book appointments online at any time, without the back-and-forth of calls and messages.",
    benefit: "Spend less time managing bookings and more time doing the work.",
    includes: [
      "Advice on the right booking platform for your business",
      "Integration with your existing booking tool",
      "Booking buttons placed where customers need them",
      "A smooth, mobile-friendly booking journey",
    ],
    idealFor: "Barbershops, beauty businesses, cleaners and other appointment-based services.",
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    icon: Workflow,
    summary:
      "Automate repetitive admin like enquiry follow-ups, notifications and moving data between tools.",
    benefit: "Save time on repetitive tasks and respond to new customers faster.",
    includes: [
      "Automatic, personalised replies to new enquiries",
      "Form submissions sent to email, spreadsheets or your CRM",
      "Notifications for new leads and bookings",
      "API integrations between the tools you already use",
    ],
    idealFor: "Busy owners who spend too much time on admin instead of running the business.",
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance & Support",
    icon: ShieldCheck,
    summary:
      "Keep your website secure, up to date and working properly, with a developer you can contact directly.",
    benefit: "Peace of mind, and quick updates whenever your business changes.",
    includes: [
      "Content, pricing and photo updates",
      "Performance and uptime checks",
      "Bug fixes and security updates",
      "Help with hosting, domains and email setup",
      "Small improvements over time",
    ],
    idealFor: "Businesses that want their website looked after without hiring in-house.",
  },
]

export const getService = (slug: ServiceSlug) =>
  SERVICES.find((service) => service.slug === slug)!

export const serviceHref = (slug: ServiceSlug) => `/services#${slug}`
