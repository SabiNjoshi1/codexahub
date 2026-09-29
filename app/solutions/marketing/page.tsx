import { Users } from 'lucide-react'
import { MarketingPage } from '@/components/marketing-page'

export default function Page() {
  return (
    <MarketingPage
      icon={Users}
      eyebrow="For Marketing Teams"
      title="Campaigns that launch on time, every time."
      description="Coordinate briefs, content calendars, approvals, and launches in one workspace built for the pace of modern marketing."
      tone="violet"
      highlights={[
        { title: 'Content calendars', text: 'Plan and visualize every campaign from brief to launch.' },
        { title: 'Approval workflows', text: 'Route creative and copy for review without endless email threads.' },
        { title: 'Performance in context', text: 'Connect campaign results back to the plan that produced them.' },
      ]}
      ctaLabel="Plan your next campaign"
    />
  )
}
