'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import Fuse from 'fuse.js'
import { ARTICLES } from '@/lib/mockData'
import { tagToSlug } from '@/lib/tagUtils'

interface SearchOverlayProps {
  onClose: () => void
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState<'relevance' | 'date'>('relevance')
  const inputRef = useRef<HTMLInputElement>(null)

  const fuse = useMemo(
    () =>
      new Fuse(ARTICLES, {
        keys: [
          { name: 'title', weight: 3 },
          { name: 'author.name', weight: 2 },
          { name: 'subheading', weight: 1.5 },
          { name: 'tags', weight: 1 },
          { name: 'excerpt', weight: 0.8 },
          { name: 'category.name', weight: 0.8 },
        ],
        threshold: 0.35,
        includeScore: true,
        minMatchCharLength: 2,
      }),
    []
  )

  const results = useMemo(() => {
    if (!query.trim()) return []
    const raw = fuse.search(query)
    if (sortBy === 'date') {
      return [...raw]
        .sort(
          (a, b) =>
            new Date(b.item.publishedAt).getTime() -
            new Date(a.item.publishedAt).getTime()
        )
        .map(r => r.item)
    }
    return raw.map(r => r.item)
  }, [query, sortBy, fuse])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const recentArticles = [...ARTICLES]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 6)

  return (
    <div className="fixed inset-0 z-[200] bg-[#fbfbfa] flex flex-col animate-search-in">
      {/* Search bar — mirrors nav height */}
      <div className="border-b border-stone-200 flex-shrink-0">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 h-16">
            {/* Dimmed logo */}
            <Link href="/" onClick={onClose} className="flex-shrink-0 hidden sm:block">
              <img
                src="/TGC-logo.svg"
                alt="The Gospel Coalition"
                className="h-8 w-auto opacity-30"
              />
            </Link>

            {/* Search icon + input */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <svg
                className="w-5 h-5 text-stone-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search articles, authors, topics…"
                className="flex-1 min-w-0 bg-transparent text-lg font-ui text-charcoal placeholder-stone-300 outline-none py-4"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  aria-label="Clear"
                  className="text-stone-400 hover:text-charcoal transition-colors p-1 flex-shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 text-xs font-ui text-stone-400 hover:text-charcoal transition-colors flex-shrink-0"
            >
              <span className="hidden sm:inline">Close</span>
              <kbd className="px-1.5 py-0.5 bg-stone-100 border border-stone-200 rounded text-stone-500 font-mono text-xs">ESC</kbd>
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {query.trim() ? (
            <>
              {/* Sort + count */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-ui text-sm text-stone-400">
                  {results.length} {results.length === 1 ? 'result' : 'results'}
                </span>
                <div className="flex items-center border border-stone-200 rounded-sm overflow-hidden">
                  {(['relevance', 'date'] as const).map(s => (
                    <button
                      key={s}
                      onClick={() => setSortBy(s)}
                      className={`px-3 py-1.5 text-xs font-ui font-semibold capitalize transition-colors ${
                        sortBy === s
                          ? 'bg-navy text-white'
                          : 'text-stone-500 hover:text-navy bg-transparent'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {results.length > 0 ? (
                <div className="divide-y divide-stone-100">
                  {results.map(article => (
                    <Link
                      key={article.id}
                      href={`/article/${article.slug}`}
                      onClick={onClose}
                      className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-12 py-5 group hover:bg-stone-50/80 -mx-4 px-4 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <span className="font-ui text-xs text-stone-400 uppercase tracking-widest">
                          {article.category.name}
                        </span>
                        <h3 className="font-headline text-xl lg:text-2xl text-charcoal group-hover:text-navy transition-colors leading-snug mt-0.5">
                          {article.title}
                        </h3>
                        <p className="font-body text-stone-500 text-sm mt-1 line-clamp-1 hidden sm:block">
                          {article.subheading}
                        </p>
                        {article.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {article.tags.slice(0, 3).map(tag => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-xs font-ui text-stone-400 bg-stone-100 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="sm:text-right sm:flex-shrink-0 sm:w-44 sm:pt-1">
                        <p className="font-ui text-xs font-semibold text-stone-600">{article.author.name}</p>
                        <p className="font-ui text-xs text-stone-400 mt-0.5">{formatDate(article.publishedAt)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="font-headline text-3xl text-stone-200 mb-3">No results</p>
                  <p className="font-ui text-sm text-stone-400">
                    Try a different term, or{' '}
                    <Link href="/articles" onClick={onClose} className="text-navy hover:underline">
                      browse all articles
                    </Link>
                    .
                  </p>
                </div>
              )}
            </>
          ) : (
            /* Empty state: recent articles */
            <div className="max-w-2xl">
              <h2 className="font-ui text-xs font-semibold uppercase tracking-widest text-stone-400 mb-5">
                Recent Articles
              </h2>
              <div className="divide-y divide-stone-100">
                {recentArticles.map(article => (
                  <Link
                    key={article.id}
                    href={`/article/${article.slug}`}
                    onClick={onClose}
                    className="flex items-start justify-between gap-8 py-4 group hover:bg-stone-50/80 -mx-4 px-4 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="font-ui text-xs text-stone-400 uppercase tracking-widest">
                        {article.category.name}
                      </span>
                      <h3 className="font-headline text-lg text-charcoal group-hover:text-navy transition-colors leading-snug mt-0.5">
                        {article.title}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 text-right hidden sm:block pt-1">
                      <p className="font-ui text-xs font-semibold text-stone-500">{article.author.name}</p>
                      <p className="font-ui text-xs text-stone-400 mt-0.5">{formatDate(article.publishedAt)}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-stone-100">
                <Link
                  href="/articles"
                  onClick={onClose}
                  className="font-ui text-xs font-semibold uppercase tracking-widest text-navy hover:opacity-70 transition-opacity flex items-center gap-1"
                >
                  Browse all articles
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
