import { Container, Eyebrow } from "./Section"

interface PageHeaderProps {
  eyebrow: string
  title: React.ReactNode
  description: React.ReactNode
  children?: React.ReactNode
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-gradient-to-b from-surface to-white pb-16 pt-32 sm:pb-20 sm:pt-40">
      <GridBackdrop />
      <Container>
        <div className="flex max-w-3xl flex-col gap-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-body sm:text-xl">{description}</p>
          {children}
        </div>
      </Container>
    </section>
  )
}

export function GridBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 [background-image:linear-gradient(rgb(37_99_235/0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(37_99_235/0.06)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_70%_0%,black,transparent)]"
    />
  )
}
