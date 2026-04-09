import { Hero } from "./_components/sections/Hero"
import { About } from "./_components/sections/About"
import { Experience } from "./_components/sections/Experience"
import { Projects } from "./_components/sections/Projects"
import { Contact } from "./_components/sections/Contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
