'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const BROWSE_CATEGORIES = [
  { label: 'Arts & Culture', href: '/arts-culture' },
  { label: 'Bible & Theology', href: '/bible-theology' },
  { label: 'Christian Living', href: '/christian-living' },
  { label: 'Current Events', href: '/current-events' },
  { label: 'Faith & Work', href: '/faith-work' },
  { label: 'Ministry', href: '/ministry' },
  { label: 'The Carson Center', href: '/carson-center' },
  { label: 'The Keller Center', href: '/keller-center' },
]

const NAV_ITEMS = [
  { label: 'Articles', href: '/articles' },
  { label: 'Podcasts', href: '/podcasts' },
  { label: 'Videos', href: '/videos' },
  { label: 'Commentary', href: '/commentary' },
  { label: 'Essays', href: '/essays' },
  { label: 'Courses', href: '/courses' },
  { label: 'Store', href: '/store' },
]

export default function MainNav() {
  const [browseOpen, setBrowseOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const browseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (browseRef.current && !browseRef.current.contains(e.target as Node)) {
        setBrowseOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="bg-[#fbfbfa] border-b border-stone-200 sticky top-0 z-50">
      {/* Top bar */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/TGC-logo.svg"
              alt="The Gospel Coalition"
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Browse dropdown */}
            <div className="relative" ref={browseRef}>
              <button
                onClick={() => setBrowseOpen(!browseOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-ui font-semibold text-charcoal hover:text-navy transition-colors uppercase tracking-wide"
              >
                Browse
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${browseOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {browseOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-[#fbfbfa] border border-stone-200 shadow-lg rounded-sm z-50">
                  <div className="py-2">
                    {BROWSE_CATEGORIES.map(cat => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        onClick={() => setBrowseOpen(false)}
                        className="block px-4 py-2.5 text-sm font-ui text-charcoal hover:bg-stone-50 hover:text-navy transition-colors"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Regular nav items */}
            {NAV_ITEMS.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-ui font-semibold text-charcoal hover:text-navy transition-colors uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side: search + subscribe */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              aria-label="Search"
              className="p-2 text-charcoal hover:text-navy transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link
              href="/newsletters"
              className="px-4 py-1.5 bg-navy text-white text-sm font-ui font-semibold rounded-sm hover:bg-navy/90 transition-colors tracking-wide"
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#fbfbfa]">
          <div className="px-4 py-3 space-y-1">
            <p className="text-xs font-ui font-semibold text-stone-400 uppercase tracking-widest px-3 py-1">Browse</p>
            {BROWSE_CATEGORIES.map(cat => (
              <Link
                key={cat.href}
                href={cat.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm font-ui text-charcoal hover:text-navy"
              >
                {cat.label}
              </Link>
            ))}
            <div className="border-t border-stone-100 my-2" />
            {NAV_ITEMS.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm font-ui font-semibold text-charcoal hover:text-navy uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/newsletters"
                className="block w-full text-center px-4 py-2 bg-navy text-white text-sm font-ui font-semibold rounded-sm"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
