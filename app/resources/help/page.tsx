import { LifeBuoy } from 'lucide-react'
import { MarketingPage } from '@/components/marketing-page'

export default function Page() {
  return (
    <MarketingPage
      icon={LifeBuoy}
      eyebrow="Help Center"
      title="Answers, fast."
      description="Searchable guides and step-by-step articles covering setup, billing, integrations, and everyday workflows in CodexaHub."
      tone="rose"
      highlights={[
        { title: 'Getting started', text: 'Set up your workspace, invite your team, and create your first project.' },
        { title: 'Billing & plans', text: 'Manage your subscription, seats, and invoices.' },
        { title: 'Contact support', text: 'Reach a real person when an article does not cover it.' },
      ]}
      ctaLabel="Visit help center"
    />
  )
}
