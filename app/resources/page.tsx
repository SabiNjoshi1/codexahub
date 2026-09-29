import { BookOpen } from 'lucide-react'
import { MarketingPage } from '@/components/marketing-page'

export default function Page() {
  return (
    <MarketingPage
      icon={BookOpen}
      eyebrow="Resources"
      title="Guides, templates, and help — all in one place."
      description="Everything you need to get the most out of CodexaHub, from onboarding guides to ready-made project templates and support articles."
      tone="violet"
      highlights={[
        { title: 'Blog', text: 'Product updates, playbooks, and stories from teams using CodexaHub.' },
        { title: 'Templates', text: 'Jumpstart new projects with pre-built workflows for common use cases.' },
        { title: 'Help center', text: 'Find answers fast with searchable articles and step-by-step guides.' },
      ]}
      ctaLabel="Browse resources"
    />
  )
}
