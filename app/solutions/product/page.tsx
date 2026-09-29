import { LayoutDashboard } from 'lucide-react'
import { MarketingPage } from '@/components/marketing-page'

export default function Page() {
  return (
    <MarketingPage
      icon={LayoutDashboard}
      eyebrow="For Product Teams"
      title="Ship roadmaps your whole company can see."
      description="Connect discovery, planning, and delivery so product, design, and engineering always know what's next and why."
      tone="blue"
      highlights={[
        { title: 'Roadmapping', text: 'Turn strategy into a roadmap that stays accurate as priorities shift.' },
        { title: 'Feedback loops', text: 'Capture customer and stakeholder input right next to the work it informs.' },
        { title: 'Release tracking', text: 'See exactly what is shipping in each release, in real time.' },
      ]}
      ctaLabel="Build your roadmap"
    />
  )
}
