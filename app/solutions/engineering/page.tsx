import { Zap } from 'lucide-react'
import { MarketingPage } from '@/components/marketing-page'

export default function Page() {
  return (
    <MarketingPage
      icon={Zap}
      eyebrow="For Engineering Teams"
      title="Sprint planning without the tab-switching."
      description="Track sprints, bugs, and technical projects alongside the rest of the business — so engineering context never gets lost in translation."
      tone="rose"
      highlights={[
        { title: 'Sprint boards', text: 'Plan and run sprints with the flexibility your team already expects.' },
        { title: 'Bug triage', text: 'Prioritize and assign issues without a separate tracker.' },
        { title: 'Cross-functional visibility', text: 'Give product and leadership a clear view of engineering progress.' },
      ]}
      ctaLabel="Set up your team"
    />
  )
}
