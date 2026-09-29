import { Sparkles } from 'lucide-react'
import { MarketingPage } from '@/components/marketing-page'

export default function Page() {
  return (
    <MarketingPage
      icon={Sparkles}
      eyebrow="AI Workspace"
      title="An assistant that actually understands your work."
      description="CodexaHub AI reads across your projects, tasks, and conversations to surface blockers, summarize progress, and suggest the next best action — so nothing falls through the cracks."
      tone="violet"
      highlights={[
        { title: 'Daily briefings', text: 'Get a plain-language summary of what changed across every workspace you follow.' },
        { title: 'Blocker detection', text: 'Codexa AI flags stalled tasks and at-risk milestones before they slip.' },
        { title: 'Ask anything', text: 'Query your workspace in natural language and get answers grounded in real data.' },
      ]}
      ctaLabel="Try AI workspace"
    />
  )
}
