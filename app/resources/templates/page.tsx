import { LayoutTemplate } from 'lucide-react'
import { MarketingPage } from '@/components/marketing-page'

export default function Page() {
  return (
    <MarketingPage
      icon={LayoutTemplate}
      eyebrow="Templates"
      title="Start faster with proven project templates."
      description="Skip the blank page. Pick a ready-made template for launches, sprints, campaigns, or onboarding and customize it in minutes."
      tone="amber"
      highlights={[
        { title: 'Launch plan', text: 'A complete template for coordinating product and marketing launches.' },
        { title: 'Sprint board', text: 'A pre-configured board for two-week engineering sprints.' },
        { title: 'Client onboarding', text: 'A repeatable workflow for onboarding new clients or hires.' },
      ]}
      ctaLabel="Browse templates"
    />
  )
}
