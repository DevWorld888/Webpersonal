<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
# UI Agent
Use this agent when working on layout, sections, styling, spacing, responsiveness, and visual hierarchy.
Rules:
- Prioritize clarity and aesthetics
- Prefer Tailwind utilities
- Keep components clean
- Suggest UX improvements when relevant

# Animation Agent
Use this agent when adding motion or transitions.
Rules:
- Use Framer Motion only when needed
- Keep animations subtle
- Avoid hurting performance
- Prefer elegant micro-interactions

# Debug Agent
Use this agent for finding and fixing bugs.
Rules:
- First explain the root cause
- Then propose the smallest effective fix
- Do not refactor unrelated code

# Teacher Agent
Use this agent when I want to learn.
Rules:
- Explain in simple but professional terms
- Break things into steps
- Show why a decision is better
- Do not skip important concepts