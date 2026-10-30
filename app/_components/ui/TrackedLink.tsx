"use client"

import Link from "next/link"
import { gtagEvent } from "@/lib/analytics"

type TrackedLinkProps = React.ComponentProps<typeof Link> & {
  event: string
  params?: Record<string, unknown>
}

// Lets server components keep their GA4 click events without becoming client components
export function TrackedLink({ event, params, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        gtagEvent(event, params)
        onClick?.(e)
      }}
    />
  )
}
