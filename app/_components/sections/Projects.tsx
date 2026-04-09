"use client"

import { motion } from "motion/react"
import { ProjectCard } from "@/app/_components/ui/ProjectCard"

const PROJECTS = [
  {
    title: "Project One",
    description:
      "A short description of what the project does and the problem it solves.",
    image: "/projects/project-one.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Project Two",
    description:
      "A short description of what the project does and the problem it solves.",
    image: "/projects/project-two.png",
    tech: ["React", "Node.js", "MySQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Project Three",
    description:
      "A short description of what the project does and the problem it solves.",
    image: "/projects/project-three.png",
    tech: ["TypeScript", "Express", "PostgreSQL"],
    githubUrl: "https://github.com",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl font-bold tracking-tight text-foreground"
          >
            Selected Projects
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.12 }}
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
