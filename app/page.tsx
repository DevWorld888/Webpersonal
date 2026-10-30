import { pageMetadata } from "@/lib/seo"
import { Hero } from "./_components/sections/Hero"
import { Challenges } from "./_components/sections/Challenges"
import { Services } from "./_components/sections/Services"
import { Portfolio } from "./_components/sections/Portfolio"
import { Process } from "./_components/sections/Process"
import { WhyChoose } from "./_components/sections/WhyChoose"
import { Founder } from "./_components/sections/Founder"
import { FaqSection } from "./_components/sections/FaqSection"
import { CtaPanel } from "./_components/ui/CtaPanel"

export const metadata = pageMetadata({
  title: "Web Design Hobart | Websites & Digital Solutions for Small Businesses | iAugustoDev",
  description:
    "Professional websites, local SEO, Google Business Profile optimisation, online booking and automation for Australian small businesses. Founder-led web design based in Hobart, Tasmania.",
  path: "/",
  absoluteTitle: true,
})

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Challenges />
      <Services />
      <Portfolio />
      <Process />
      <WhyChoose />
      <Founder />
      <FaqSection />
      {/* id="contact" keeps legacy /#contact links landing on a call to action */}
      <CtaPanel id="contact" location="home_final_cta" />
    </main>
  )
}
