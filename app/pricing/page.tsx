import { Check } from 'lucide-react'
import Link from 'next/link'
import { SiteHeader, SiteFooter } from '@/components/site-chrome'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'For individuals and small teams getting organized.',
    features: ['Up to 5 members', 'Unlimited tasks', 'Basic dashboards', 'Community support'],
    tone: 'border-slate-200',
    cta: 'Get started',
  },
  {
    name: 'Growth',
    price: '$18',
    period: 'per member / mo',
    description: 'For growing teams that need automation and reporting.',
    features: ['Unlimited members', 'AI workspace', 'Advanced dashboards', 'Automation rules', 'Priority support'],
    tone: 'border-[#5B4CF6] ring-2 ring-[#5B4CF6]',
    highlight: true,
    cta: 'Start free trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'billed annually',
    description: 'For organizations with advanced security and scale needs.',
    features: ['SSO & SCIM', 'Dedicated success manager', 'Custom contracts', 'Uptime SLA', '24/7 support'],
    tone: 'border-slate-200',
    cta: 'Contact sales',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-violet-600">Pricing</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Simple pricing that scales with your team.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500">
            Start free. Upgrade when you need more automation, security, and support.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative flex flex-col rounded-2xl border bg-white p-6 ${plan.tone}`}>
              {plan.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-[#5B4CF6] px-3 py-1 text-[10px] font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-slate-950">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="text-3xl font-semibold tracking-tight text-slate-950">{plan.price}</span>
                <span className="text-xs text-slate-500">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-slate-500">{plan.description}</p>
              <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                  plan.highlight
                    ? 'bg-[#5B4CF6] text-white hover:bg-[#4a3ce0]'
                    : 'border border-slate-200 text-slate-900 hover:bg-slate-50'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
