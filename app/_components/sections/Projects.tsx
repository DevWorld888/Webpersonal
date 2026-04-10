"use client"

import { motion } from "motion/react"
import { ProjectCard } from "@/app/_components/ui/ProjectCard"

const PROJECTS = [
  {
    title: "Prisma Coatings",
    description:
      "Painting company website built with Next.js, TypeScript, and Tailwind CSS. Features a modern design, responsive layout, and smooth animations to showcase services and portfolio effectively.",
    image: "/projects/prismacoatingsProject.jpeg",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://www.prismacoatings.com.au/",
    githubUrl: "https://github.com/DevWorld888",
  },
  {
    title: "KWord Agency",
    description:
      "A digital agency website built with React, Node.js, and MySQL. Features a modern design, responsive layout, and smooth animations to showcase services and portfolio effectively.",
    image: "/projects/kwordagency.jpeg",
    tech: ["React", "Node.js", "MySQL"],
    liveUrl: "https://kwordagency-seven.vercel.app/",
    githubUrl: "https://github.com/DevWorld888",
  },
  // {
  //   title: "Project Three",
  //   description:
  //     "A short description of what the project does and the problem it solves.",
  //   image: "/projects/project-three.png",
  //   tech: ["TypeScript", "Express", "PostgreSQL"],
  //   githubUrl: "https://github.com",
  // },
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
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
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
