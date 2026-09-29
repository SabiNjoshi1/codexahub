import { Zap } from 'lucide-react'
import { MarketingPage } from '@/components/marketing-page'

export default function Page() {
  return (
    <MarketingPage
      icon={Zap}
      eyebrow="Automation"
      title="Let the busywork run itself."
      description="Automate status updates, approvals, hand-offs, and notifications with simple rules — freeing your team to focus on the work only humans can do."
      tone="rose"
      highlights={[
        { title: 'No-code rules', text: 'Build triggers and actions visually, without waiting on engineering.' },
        { title: 'Cross-team hand-offs', text: 'Automatically route work to the right person the moment a stage completes.' },
        { title: 'Smart notifications', text: 'Only get pinged when something needs your attention.' },
      ]}
      ctaLabel="Automate your workflow"
    />
  )
}
