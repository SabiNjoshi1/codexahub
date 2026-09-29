import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'

type Highlight = { title: string; text: string }

export function MarketingPage({
  icon: Icon,
  eyebrow,
  title,
  description,
  tone = 'violet',
  highlights,
  ctaLabel = 'Start building',
  ctaHref = '/register',
}: {
  icon: LucideIcon
  eyebrow: string
  title: string
  description: string
  tone?: 'violet' | 'blue' | 'amber' | 'rose'
  highlights: Highlight[]
  ctaLabel?: string
  ctaHref?: string
}) {
  const toneClasses: Record<string, string> = {
    violet: 'bg-violet-100 text-violet-600',
    blue: 'bg-blue-100 text-blue-600',
    amber: 'bg-amber-100 text-amber-600',
    rose: 'bg-rose-100 text-rose-600',
  }
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfbfe] text-slate-900">
      <SiteHeader />
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fff7ed_0%,#f5f3ff_42%,#eff6ff_100%)] px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute -left-24 top-10 size-[420px] rounded-full bg-fuchsia-300/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 size-[440px] rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className={`mx-auto mb-6 grid size-14 place-items-center rounded-2xl ${toneClasses[tone]}`}>
            <Icon className="size-6" />
          </div>
          <p className="text-sm font-bold uppercase tracking-[.15em] text-violet-600">{eyebrow}</p>
          <h1 className="mt-4 text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.05] tracking-[-.05em] text-slate-950">{title}</h1>
          <p className="mx-auto mt-6 max-w-xl text-justify text-lg leading-8 text-slate-600">{description}</p>
        </div>
      </section>
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,.03)]">
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#17133a] px-5 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.15em] text-violet-300">Ready when you are</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Work smarter. Move faster. Stay in control.</h2>
          </div>
          <Link href={ctaHref} className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[#4338CA] hover:bg-violet-50">
            {ctaLabel} <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
