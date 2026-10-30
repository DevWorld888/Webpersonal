import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PROJECTS } from "@/lib/content/projects"
import { Section, SectionHeading } from "../ui/Section"
import { CaseStudyCard } from "../ui/CaseStudyCard"

export function Portfolio() {
  return (
    <Section id="projects" tone="tint">
      <SectionHeading
        eyebrow="Recent work"
        title="Real Projects. Practical Digital Solutions."
        description="Websites built for real Australian businesses, from a Sydney painting company to a Hobart barbershop."
      />

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <CaseStudyCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button asChild size="xl" variant="outline">
          <Link href="/work">
            Read the full case studies <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}
