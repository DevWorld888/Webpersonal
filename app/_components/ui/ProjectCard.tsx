import Image from "next/image"
import { ExternalLink  } from "lucide-react"

import { Button } from "@/components/ui/button"

export interface ProjectCardProps {
  title: string
  description: string
  image: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
}

export function ProjectCard({
  title,
  description,
  image,
  tech,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-black/20">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-muted sm:h-52">
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* subtle dark overlay on hover for depth */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold leading-snug text-foreground">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-muted px-3 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex gap-2 border-t border-border px-5 py-4">
        {liveUrl && (
          <Button size="sm" asChild className="flex-1">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
              Live Demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button size="sm" variant="outline" asChild className="flex-1">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
              GitHub
            </a>
          </Button>
        )}
      </div>
    </article>
  )
}
