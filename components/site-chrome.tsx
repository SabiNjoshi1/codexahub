'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  CircleHelp,
  Clock3,
  FolderKanban,
  LayoutDashboard,
  Menu,
  Sparkles,
  Users,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export const productLinks: [string, string, LucideIcon][] = [
  ['AI workspace', '/product/ai', Sparkles],
  ['Projects', '/product/projects', FolderKanban],
  ['Dashboards', '/product/dashboards', LayoutDashboard],
  ['Automation', '/product/automation', Zap],
]

export const solutionsLinks: [string, string, LucideIcon][] = [
  ['Marketing', '/solutions/marketing', Users],
  ['Product', '/solutions/product', LayoutDashboard],
  ['Engineering', '/solutions/engineering', Zap],
  ['Operations', '/solutions/operations', BarChart3],
]

export const resourcesLinks: [string, string, LucideIcon][] = [
  ['Resource center', '/resources', FolderKanban],
  ['Blog', '/resources/blog', Sparkles],
  ['Templates', '/resources/templates', Clock3],
  ['Help center', '/resources/help', CircleHelp],
]

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 font-semibold tracking-[-0.04em] ${dark ? 'text-white' : 'text-slate-950'}`}>
      <span className="grid size-8 place-items-center rounded-[10px] bg-[#5B4CF6] text-white shadow-[0_6px_16px_rgba(91,76,246,.28)]">
        <span className="size-3.5 rotate-45 rounded-[4px] border-2 border-white" />
      </span>
      <span className="text-[17px]">CODEXAHUB</span>
    </Link>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const menuData: Record<string, [string, string, LucideIcon][]> = {
    Product: productLinks,
    Solutions: solutionsLinks,
    Resources: resourcesLinks,
  }
  return (
    <>
      <div className="bg-[#15122d] px-5 py-2.5 text-center text-xs font-medium text-violet-100">
        <span className="mr-2 hidden text-violet-300 sm:inline">New from CodexaHub</span>
        <Link href="/product/ai" className="hover:text-white">
          Meet the smarter way to manage work <ArrowRight className="ml-1 inline size-3.5" />
        </Link>
      </div>
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-[#fbfbfe]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {['Product', 'Solutions', 'Resources'].map((item) => (
              <div key={item} className="relative">
                <button
                  onClick={() => setActiveMenu(activeMenu === item ? null : item)}
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-600 transition hover:text-slate-950"
                >
                  {item}
                  <ChevronDown className={`size-3.5 transition ${activeMenu === item ? 'rotate-180' : ''}`} />
                </button>
                {activeMenu === item && (
                  <div className="absolute left-1/2 top-10 w-64 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                    {menuData[item].map(([label, href, Icon]) => (
                      <Link
                        key={label}
                        href={href}
                        onClick={() => setActiveMenu(null)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-600 hover:bg-violet-50 hover:text-violet-700"
                      >
                        <span className="grid size-7 place-items-center rounded-lg bg-slate-50 text-violet-600">
                          <Icon className="size-3.5" />
                        </span>
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-950">Pricing</Link>
            <Link href="/enterprise" className="text-sm font-medium text-slate-600 hover:text-slate-950">Enterprise</Link>
          </nav>
          <div className="hidden items-center gap-5 md:flex">
            <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-950">Log in</Link>
          </div>
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-lg border border-slate-200 text-slate-600 md:hidden"
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-medium text-slate-600">
              {[...productLinks, ...solutionsLinks, ...resourcesLinks].map(([label, href, Icon]) => (
                <Link key={label} href={href} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-violet-50 hover:text-violet-700">
                  <Icon className="size-4" />
                  {label}
                </Link>
              ))}
              <Link href="/pricing" onClick={() => setMenuOpen(false)} className="rounded-lg px-2 py-2.5 hover:bg-violet-50">Pricing</Link>
              <Link href="/enterprise" onClick={() => setMenuOpen(false)} className="rounded-lg px-2 py-2.5 hover:bg-violet-50">Enterprise</Link>
              <Link href="/login" onClick={() => setMenuOpen(false)} className="rounded-lg px-2 py-2.5 hover:bg-violet-50">Log in</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-[#fbfbfe] px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-slate-500 sm:flex-row sm:items-center">
        <Logo />
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/about" className="hover:text-slate-900">About</Link>
          <Link href="/resources" className="hover:text-slate-900">Resources</Link>
          <Link href="/contact" className="hover:text-slate-900">Contact</Link>
          <a href="mailto:info@codexahub.club" className="hover:text-slate-900">info@codexahub.club</a>
          <Link href="/privacy" className="hover:text-slate-900">Privacy</Link>
        </div>
        <span>© 2026 CodexaHub</span>
      </div>
    </footer>
  )
}
