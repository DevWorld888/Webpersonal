import { cn } from "@/lib/utils"

interface SectionProps extends React.ComponentProps<"section"> {
  tone?: "white" | "tint"
}

export function Section({ tone = "white", className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "scroll-mt-20 py-20 sm:py-28",
        tone === "tint" && "bg-surface",
        className
      )}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  )
}

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)} {...props} />
}

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  as?: "h1" | "h2"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </Heading>
      {description && <p className="text-lg leading-relaxed text-body">{description}</p>}
    </div>
  )
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-primary",
        className
      )}
    >
      <span aria-hidden="true" className="h-px w-5 bg-primary/60" />
      {children}
    </p>
  )
}
