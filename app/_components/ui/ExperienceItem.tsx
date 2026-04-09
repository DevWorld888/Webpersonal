export interface ExperienceItemProps {
  role: string
  company: string
  period: string
  summary: string
  highlights: [string, string, string]
  tech?: string[]
}

export function ExperienceItem({
  role,
  company,
  period,
  summary,
  highlights,
  tech,
}: ExperienceItemProps) {
  return (
    <div className="group grid grid-cols-1 gap-4 border-t border-border py-10 sm:grid-cols-[180px_1fr] sm:gap-8">
      {/* Left — period & company */}
      <div className="flex flex-row items-start gap-3 sm:flex-col sm:gap-1.5">
        <span className="text-sm font-medium tabular-nums text-muted-foreground">
          {period}
        </span>
        <span className="hidden text-sm text-muted-foreground/60 sm:block">
          {company}
        </span>
      </div>

      {/* Right — content */}
      <div className="flex flex-col gap-4">
        {/* Role + company (mobile company shown inline here) */}
        <div>
          <h3 className="text-lg font-semibold text-foreground">{role}</h3>
          <p className="mt-0.5 text-sm font-medium text-muted-foreground sm:hidden">
            {company}
          </p>
        </div>

        {/* Summary */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {summary}
        </p>

        {/* Highlights */}
        <ul className="flex flex-col gap-2">
          {highlights.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30"
                aria-hidden="true"
              />
              <span className="leading-relaxed text-foreground/80">{point}</span>
            </li>
          ))}
        </ul>

        {/* Tech badges — optional */}
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-muted px-3 py-0.5 text-xs font-medium text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
