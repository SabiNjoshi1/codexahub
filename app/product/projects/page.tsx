import { FolderKanban } from 'lucide-react'
import { MarketingPage } from '@/components/marketing-page'

export default function Page() {
  return (
    <MarketingPage
      icon={FolderKanban}
      eyebrow="Projects"
      title="Plan work with momentum, not spreadsheets."
      description="Break big goals into milestones, assign clear owners, and track dependencies in one connected view — so every project keeps moving without status meetings."
      tone="blue"
      highlights={[
        { title: 'Milestones & dependencies', text: 'Map how work connects so you can spot risk before deadlines slip.' },
        { title: 'Flexible views', text: 'Switch between list, board, timeline, and calendar without losing context.' },
        { title: 'Owner accountability', text: 'Every task has a clear owner and due date, visible to the whole team.' },
      ]}
      ctaLabel="Start a project"
    />
  )
}
