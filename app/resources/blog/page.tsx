import { Newspaper } from 'lucide-react'
import { MarketingPage } from '@/components/marketing-page'

export default function Page() {
  return (
    <MarketingPage
      icon={Newspaper}
      eyebrow="Blog"
      title="Ideas on how the best teams work."
      description="Product updates, playbooks, and stories from teams using CodexaHub to plan, ship, and grow faster."
      tone="blue"
      highlights={[
        { title: 'Product updates', text: 'See what is new in CodexaHub as soon as it ships.' },
        { title: 'Playbooks', text: 'Practical frameworks for planning, running, and reviewing work.' },
        { title: 'Customer stories', text: 'Learn how real teams use CodexaHub to move faster.' },
      ]}
      ctaLabel="Read the blog"
    />
  )
}
