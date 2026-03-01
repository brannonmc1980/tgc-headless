'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Newsletter {
  id: string
  name: string
  tagline: string
  description: string
  frequency: string
  category: string
  accentColor: string
}

const NEWSLETTERS: Newsletter[] = [
  {
    id: 'weekly-digest',
    name: 'TGC Weekly Digest',
    tagline: 'The best of TGC, curated weekly.',
    description: 'Our flagship newsletter gathers the most-read articles, sermons, and resources from the week — covering theology, culture, and Christian living in one concise email.',
    frequency: 'Every Friday',
    category: 'General',
    accentColor: '#87b575',
  },
  {
    id: 'this-week-theology',
    name: 'This Week in Theology',
    tagline: 'Deep dives for the theologically curious.',
    description: 'A weekly roundup of the most important theological conversations, book releases, and biblical scholarship from TGC editors and contributors.',
    frequency: 'Every Tuesday',
    category: 'Theology',
    accentColor: '#5a7d9a',
  },
  {
    id: 'women-in-ministry',
    name: 'Women in the Word',
    tagline: 'Scripture, community, and faithful womanhood.',
    description: "Curated by TGC Women's team, this newsletter brings together articles, Bible studies, and resources for women pursuing Christ in every season of life.",
    frequency: 'Every Wednesday',
    category: 'Women',
    accentColor: '#9b7db5',
  },
  {
    id: 'pastors-leaders',
    name: 'For the Church',
    tagline: 'Equipping pastors and church leaders.',
    description: 'Practical theology for those who serve in ministry. Sermon resources, leadership insights, and pastoral wisdom delivered weekly to your inbox.',
    frequency: 'Every Monday',
    category: 'Ministry',
    accentColor: '#c47f5a',
  },
  {
    id: 'culture-commentary',
    name: 'Culture & Commentary',
    tagline: 'Faith engaging the world around us.',
    description: 'A thoughtful Christian perspective on art, media, politics, and cultural moments — helping you think clearly and act faithfully in an increasingly complex world.',
    frequency: 'Every Thursday',
    category: 'Culture',
    accentColor: '#7a9e8e',
  },
  {
    id: 'keller-center',
    name: 'The Keller Center',
    tagline: 'Gospel-centered city ministry.',
    description: 'Resources and reflections on urban ministry, church planting, and the intersection of the gospel with work, justice, and city life — from The Keller Center for Cultural Apologetics.',
    frequency: 'Twice monthly',
    category: 'Ministry',
    accentColor: '#4a6b8a',
  },
  {
    id: 'carson-center',
    name: 'The Carson Center',
    tagline: 'Thoughtful engagement with Scripture.',
    description: 'Biblical scholarship made accessible. The Carson Center newsletter brings you commentary, study resources, and reflections rooted in careful engagement with the biblical text.',
    frequency: 'Twice monthly',
    category: 'Theology',
    accentColor: '#8a6b4a',
  },
  {
    id: 'young-adults',
    name: 'Next Generation',
    tagline: 'For the rising generation of believers.',
    description: "Resources for young Christians navigating faith, vocation, relationships, and identity in their twenties and thirties. Honest, gospel-centered, and practically grounded.",
    frequency: 'Every other Wednesday',
    category: 'Young Adults',
    accentColor: '#6b8a4a',
  },
]

export default function NewslettersPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function toggle(id: string) {
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function selectAll() {
    setSelected(new Set(NEWSLETTERS.map(n => n.id)))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email && selected.size > 0) setSubmitted(true)
  }

  const selectedList = NEWSLETTERS.filter(n => selected.has(n.id))

  return (
    <div className="bg-[#fbfbfa] min-h-screen pb-32">
      {/* Hero */}
      <div className="bg-[#20272a]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-center gap-2 text-xs font-ui text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#87b575] font-semibold uppercase tracking-wider">Newsletters</span>
          </div>
          <div className="max-w-2xl">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-[#fbfbfa] leading-tight">
              Stay rooted in the gospel.
            </h1>
            <p className="font-ui text-stone-300 text-lg mt-4 leading-relaxed">
              Choose one or more newsletters and get the best of TGC delivered straight to your inbox — theology, culture, ministry, and more.
            </p>
            <button
              onClick={selectAll}
              className="mt-6 inline-block px-6 py-2.5 bg-[#87b575] text-white text-sm font-ui font-semibold hover:bg-[#6d9960] transition-colors"
            >
              Subscribe to all newsletters
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter grid */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {NEWSLETTERS.map(nl => {
            const isSelected = selected.has(nl.id)
            return (
              <button
                key={nl.id}
                onClick={() => toggle(nl.id)}
                className={`group text-left border transition-all duration-150 relative flex flex-col overflow-hidden ${
                  isSelected
                    ? 'border-[#87b575] bg-white shadow-md'
                    : 'border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm'
                }`}
              >
                {/* Accent bar */}
                <div className="h-1 w-full" style={{ backgroundColor: nl.accentColor }} />

                <div className="p-6">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-[10px] font-ui font-bold uppercase tracking-widest text-stone-400 block mb-1">
                        {nl.category}
                      </span>
                      <h2 className="font-ui font-semibold text-charcoal text-lg leading-snug">
                        {nl.name}
                      </h2>
                    </div>
                    {/* Checkbox */}
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all mt-0.5 ${
                        isSelected
                          ? 'border-[#87b575] bg-[#87b575]'
                          : 'border-stone-300 group-hover:border-stone-400'
                      }`}
                    >
                      {isSelected && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>

                  <p className="text-stone-500 text-xs font-ui font-semibold italic mb-2">
                    {nl.tagline}
                  </p>
                  <p className="text-stone-500 text-sm font-ui leading-relaxed line-clamp-3">
                    {nl.description}
                  </p>

                  <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-stone-100">
                    <svg className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs font-ui text-stone-400">{nl.frequency}</span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Sticky subscription bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-stone-200 shadow-[0_-4px_24px_rgba(0,0,0,0.10)]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {submitted ? (
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#87b575]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#87b575]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-ui font-semibold text-charcoal text-sm">You're subscribed!</p>
                  <p className="text-stone-500 text-xs font-ui">Check {email} for a confirmation email.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedList.map(nl => (
                  <span key={nl.id} className="px-2.5 py-1 bg-[#87b575]/10 text-[#4a7a3a] text-xs font-ui font-semibold rounded-full">
                    {nl.name}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Selection summary */}
                <div className="flex-1 min-w-0">
                  {selected.size === 0 ? (
                    <p className="text-stone-400 text-sm font-ui">
                      Select newsletters above, then enter your email to subscribe.
                    </p>
                  ) : (
                    <div className="flex flex-wrap gap-1.5 items-center">
                      <span className="text-stone-500 text-xs font-ui font-semibold whitespace-nowrap">
                        {selected.size === 1 ? '1 selected:' : `${selected.size} selected:`}
                      </span>
                      {selectedList.map(nl => (
                        <button
                          key={nl.id}
                          type="button"
                          onClick={() => toggle(nl.id)}
                          className="flex items-center gap-1 px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-charcoal text-xs font-ui rounded-full transition-colors"
                        >
                          {nl.name}
                          <svg className="w-2.5 h-2.5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Email + submit */}
                <div className="flex items-center gap-2 w-full sm:w-auto flex-shrink-0">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full sm:w-64 px-4 py-3 border border-stone-200 text-charcoal placeholder-stone-400 text-sm font-ui focus:outline-none focus:border-[#87b575] transition-colors bg-white"
                  />
                  <button
                    type="submit"
                    disabled={selected.size === 0}
                    className="px-6 py-3 bg-[#87b575] text-white text-sm font-ui font-semibold hover:bg-[#6d9960] transition-colors disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Legal links */}
              <p className="text-stone-400 text-[11px] font-ui mt-3">
                By subscribing you agree to our{' '}
                <Link href="/privacy" className="underline hover:text-charcoal transition-colors">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/terms" className="underline hover:text-charcoal transition-colors">
                  Terms of Use
                </Link>
                . Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
