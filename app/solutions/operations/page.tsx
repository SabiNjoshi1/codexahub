import { BarChart3 } from 'lucide-react'
import { MarketingPage } from '@/components/marketing-page'

export default function Page() {
  return (
    <MarketingPage
      icon={BarChart3}
      eyebrow="For Operations Teams"
      title="Run the business with one source of truth."
      description="Standardize processes, track SLAs, and keep every department's workflows visible in a single system of record."
      tone="amber"
      highlights={[
        { title: 'Process templates', text: 'Turn repeatable operations work into reusable, trackable playbooks.' },
        { title: 'SLA tracking', text: 'Catch at-risk commitments before they become missed ones.' },
        { title: 'Company-wide visibility', text: 'Give leadership a real-time view across every team.' },
      ]}
      ctaLabel="Streamline operations"
    />
  )
}
