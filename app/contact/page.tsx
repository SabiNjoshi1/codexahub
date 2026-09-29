import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'

export const metadata = {
  title: 'Contact CodexaHub',
  description: 'Contact the CodexaHub team at info@codexahub.club.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfe] text-slate-900">
      <SiteHeader />
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fff7ed_0%,#f5f3ff_42%,#eff6ff_100%)] px-5 py-20 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-10 size-[420px] rounded-full bg-fuchsia-300/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 size-[440px] rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-violet-100 text-violet-600"><Mail className="size-6" /></span>
          <p className="mt-6 text-sm font-bold uppercase tracking-[.15em] text-violet-600">Contact</p>
          <h1 className="mt-4 text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.05] tracking-[-.05em] text-slate-950">Let&apos;s talk about your work.</h1>
          <p className="mx-auto mt-6 max-w-xl text-justify text-lg leading-8 text-slate-600">Questions about CodexaHub, partnerships, or getting started? Send our team a note and we&apos;ll be happy to help.</p>
          <Link href="mailto:info@codexahub.club" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(90deg,#7c3aed,#ec4899)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(168,85,247,.3)] transition hover:brightness-110">
            Email info@codexahub.club <ArrowRight className="size-4" />
          </Link>
          <p className="mt-5 text-sm text-slate-500">codexahub.club</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
