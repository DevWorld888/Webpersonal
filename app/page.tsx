import type { Metadata } from "next"
import { Hero } from "./_components/sections/Hero"
import { About } from "./_components/sections/About"
import Howitworks from "./_components/sections/Howitworks"
import { Projects } from "./_components/sections/Projects"
import { Contact } from "./_components/sections/Contact"

export const metadata: Metadata = {
  title: "Web Developer for Australian Tradies & Small Businesses",
  description:
    "I build websites for tradies and small businesses that turn visitors into paying customers. More calls, more jobs, more revenue — no tech jargon, no agency fees. Based in Australia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Web Developer for Australian Tradies & Small Businesses | Augusto Cáceres",
    description:
      "I build websites for tradies and small businesses that turn visitors into paying customers. More calls, more jobs, more revenue.",
    url: "/",
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Howitworks />
      <Contact />
    </main>
  )
}
