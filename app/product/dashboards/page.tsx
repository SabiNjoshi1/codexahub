import { LayoutDashboard } from 'lucide-react'
import { MarketingPage } from '@/components/marketing-page'

export default function Page() {
  return (
    <MarketingPage
      icon={LayoutDashboard}
      eyebrow="Dashboards"
      title="Decisions, not dashboards full of noise."
      description="Build flexible reports that surface the signals leaders actually need — completion rates, risk, and velocity — without hours of manual spreadsheet work."
      tone="amber"
      highlights={[
        { title: 'Live reporting', text: 'Dashboards update automatically as work moves, so numbers are always current.' },
        { title: 'Custom views', text: 'Filter by team, project, or timeframe to answer the question in front of you.' },
        { title: 'Shareable snapshots', text: 'Send a link instead of a slide deck for your next status update.' },
      ]}
      ctaLabel="Explore dashboards"
    />
  )
}
