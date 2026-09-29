import { Building2 } from 'lucide-react'
import { MarketingPage } from '@/components/marketing-page'

export default function Page() {
  return (
    <MarketingPage
      icon={Building2}
      eyebrow="Enterprise"
      title="Built for the scale and security enterprises need."
      description="Advanced permissions, SSO, audit logs, and a dedicated success team — so IT and security teams can say yes with confidence."
      tone="blue"
      highlights={[
        { title: 'SSO & SCIM', text: 'Provision and de-provision access automatically through your identity provider.' },
        { title: 'Audit logs', text: 'Full visibility into every change across your organization.' },
        { title: 'Dedicated support', text: 'A named success manager and guaranteed uptime SLA.' },
      ]}
      ctaLabel="Talk to sales"
    />
  )
}
