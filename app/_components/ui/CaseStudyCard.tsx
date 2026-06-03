"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface CaseStudyCardProps {
  title: string
  location?: string
  goal: string
  whatIDid: string
  focus: string
  result: string
  image: string
  liveUrl?: string
}

export function CaseStudyCard({
  title,
  location,
  goal,
  whatIDid,
  focus,
  result,
  image,
  liveUrl,
}: CaseStudyCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-black/20">
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={image}
          alt={`${title} website`}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="text-lg font-semibold leading-snug text-foreground">
            {title}
          </h3>
          {location && (
            <p className="mt-0.5 text-xs text-muted-foreground">{location}</p>
          )}
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <div>
            <span className="font-medium text-foreground">Goal: </span>
            <span className="text-muted-foreground">{goal}</span>
          </div>
          <div>
            <span className="font-medium text-foreground">What I did: </span>
            <span className="text-muted-foreground">{whatIDid}</span>
          </div>
          <div>
            <span className="font-medium text-foreground">Focus: </span>
            <span className="text-muted-foreground">{focus}</span>
          </div>
          <div>
            <span className="font-medium text-foreground">Result: </span>
            <span className="text-muted-foreground">{result}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      {liveUrl && (
        <div className="border-t border-border px-5 py-4">
          <Button size="sm" asChild className="w-full">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
              View Website
            </a>
          </Button>
        </div>
      )}
    </article>
  )
}
