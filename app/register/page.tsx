import Link from 'next/link'
import { SiteHeader, SiteFooter } from '@/components/site-chrome'

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <section className="flex items-center justify-center px-5 py-16 lg:px-8">
        <div className="w-full max-w-sm rounded-2xl border border-slate-200 p-7">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-950">Create your workspace</h1>
          <p className="mt-1.5 text-sm text-slate-500">Start free — no credit card required.</p>
          <form className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-medium text-slate-700">Full name</label>
              <input id="name" type="text" placeholder="Maya Chen" className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#5B4CF6] focus:ring-1 focus:ring-[#5B4CF6]" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium text-slate-700">Work email</label>
              <input id="email" type="email" placeholder="you@company.com" className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#5B4CF6] focus:ring-1 focus:ring-[#5B4CF6]" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-xs font-medium text-slate-700">Password</label>
              <input id="password" type="password" placeholder="••••••••" className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#5B4CF6] focus:ring-1 focus:ring-[#5B4CF6]" />
            </div>
            <button type="submit" className="mt-1 rounded-lg bg-[#5B4CF6] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4a3ce0]">
              Create account
            </button>
          </form>
          <p className="mt-5 text-center text-sm text-slate-500">
            Already have an account? <Link href="/login" className="font-medium text-[#5B4CF6] hover:underline">Sign in</Link>
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
