'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import Fuse from 'fuse.js'
import { ARTICLES } from '@/lib/mockData'
import { smartQuotes } from '@/lib/typography'
import { Article } from '@/lib/types'

interface SearchOverlayProps {
  onClose: () => void
}

interface Message {
  role: 'user' | 'assistant'
  content: string
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

const fuseInstance = new Fuse(ARTICLES, {
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
})

export default function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [streamingContent, setStreamingContent] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [sidebarArticles, setSidebarArticles] = useState<Article[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const chatInputRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const liveArticles = useMemo(() => {
    if (!input.trim()) return []
    return fuseInstance.search(input).slice(0, 6).map(r => r.item)
  }, [input])

  const recentArticles = useMemo(
    () =>
      [...ARTICLES]
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        )
        .slice(0, 6),
    []
  )

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
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, streamingContent])

  // Focus bottom chat input once conversation starts
  useEffect(() => {
    if (messages.length > 0 && !isStreaming) {
      chatInputRef.current?.focus()
    }
  }, [messages.length, isStreaming])

  async function handleSubmit() {
    const query = input.trim()
    if (!query || isStreaming) return

    const userMessage: Message = { role: 'user', content: query }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')

    setIsStreaming(true)
    setStreamingContent('')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          query,
        }),
      })

      if (!res.ok || !res.body) throw new Error('API error')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''
      let headerParsed = false
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })

        if (!headerParsed) {
          buffer += chunk
          const newlineIdx = buffer.indexOf('\n')
          if (newlineIdx !== -1) {
            const header = buffer.slice(0, newlineIdx)
            const rest = buffer.slice(newlineIdx + 1)
            if (header.startsWith('ARTICLES:')) {
              const slugs: string[] = JSON.parse(header.slice(9))
              setSidebarArticles(ARTICLES.filter(a => slugs.includes(a.slug)))
            }
            headerParsed = true
            accumulated += rest
            setStreamingContent(accumulated)
          }
        } else {
          accumulated += chunk
          setStreamingContent(accumulated)
        }
      }

      setMessages(prev => [...prev, { role: 'assistant', content: accumulated }])
      setStreamingContent('')
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' },
      ])
      setStreamingContent('')
    } finally {
      setIsStreaming(false)
    }
  }

  const hasConversation = messages.length > 0 || isStreaming

  return (
    <div className="fixed inset-0 z-[200] bg-[#fbfbfa] flex flex-col animate-search-in">
      {/* Header */}
      <div className="border-b border-stone-200 flex-shrink-0">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 h-16">
            <Link href="/" onClick={onClose} className="flex-shrink-0 hidden sm:block">
              <img
                src="/TGC-logo.svg"
                alt="The Gospel Coalition"
                className="h-9 w-auto"
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(69%) sepia(19%) saturate(513%) hue-rotate(67deg) brightness(94%) contrast(87%)',
                }}
              />
            </Link>

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
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSubmit()
                  }
                }}
                placeholder="Ask about faith, theology, culture…"
                className="flex-1 min-w-0 bg-transparent text-lg font-ui text-charcoal placeholder-stone-300 outline-none py-4"
                disabled={isStreaming}
              />
              {input && !isStreaming && (
                <button
                  onClick={handleSubmit}
                  className="px-3 py-1.5 bg-navy text-white text-xs font-ui font-semibold rounded-sm hover:bg-navy/90 transition-colors flex-shrink-0"
                >
                  Ask
                </button>
              )}
              {input && (
                <button
                  onClick={() => setInput('')}
                  aria-label="Clear"
                  className="text-stone-400 hover:text-charcoal transition-colors p-1 flex-shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              className="flex items-center gap-1.5 text-xs font-ui text-stone-400 hover:text-charcoal transition-colors flex-shrink-0"
            >
              <span className="hidden sm:inline">Close</span>
              <kbd className="px-1.5 py-0.5 bg-stone-100 border border-stone-200 rounded text-stone-500 font-mono text-xs">
                ESC
              </kbd>
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-hidden">
        {hasConversation ? (
          /* ── Two-column chat layout ── */
          <div className="h-full flex">
            {/* Left: conversation + bottom input */}
            <div className="flex-1 flex flex-col border-r border-stone-200 overflow-hidden">
              {/* Scrollable messages */}
              <div className="flex-1 overflow-y-auto">
                <div className="max-w-2xl mx-auto px-6 lg:px-10 py-8 space-y-8">
                  {messages.map((msg, i) =>
                    msg.role === 'user' ? (
                      <div key={i} className="flex justify-end">
                        <div className="bg-stone-200 text-charcoal px-4 py-3 rounded-lg max-w-sm font-ui text-sm leading-relaxed">
                          {msg.content}
                        </div>
                      </div>
                    ) : (
                      <div
                        key={i}
                        className="font-body text-charcoal leading-relaxed text-[15px] prose prose-stone max-w-none"
                      >
                        {msg.content}
                      </div>
                    )
                  )}

                  {/* Streaming response */}
                  {isStreaming && !streamingContent && (
                    <div className="flex gap-1.5 items-center py-2">
                      {[0, 150, 300].map(delay => (
                        <span
                          key={delay}
                          className="w-2 h-2 bg-stone-300 rounded-full animate-bounce"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  )}
                  {streamingContent && (
                    <div className="font-body text-charcoal leading-relaxed text-[15px] prose prose-stone max-w-none">
                      {streamingContent}
                      <span className="inline-block w-0.5 h-[1em] bg-navy animate-pulse ml-0.5 align-middle" />
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Bottom chat input */}
              <div className="flex-shrink-0 border-t border-stone-200 bg-[#fbfbfa] px-6 py-4">
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-end gap-3 border border-stone-200 rounded-xl bg-white px-4 py-3 shadow-sm focus-within:border-stone-300 transition-colors">
                    <textarea
                      ref={chatInputRef}
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault()
                          handleSubmit()
                        }
                      }}
                      placeholder="Ask a follow-up question…"
                      rows={1}
                      className="flex-1 bg-transparent font-ui text-sm text-charcoal placeholder-stone-300 outline-none resize-none leading-relaxed"
                      disabled={isStreaming}
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={!input.trim() || isStreaming}
                      aria-label="Send"
                      className="flex-shrink-0 p-1.5 bg-navy text-white rounded-lg disabled:opacity-30 hover:bg-navy/90 transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-center font-ui text-xs text-stone-300 mt-2">
                    Enter to send · Shift+Enter for new line
                  </p>
                </div>
              </div>
            </div>

            {/* Right: related articles */}
            <div className="w-72 xl:w-88 flex-shrink-0 overflow-y-auto bg-stone-50/60 border-l border-stone-100">
              <div className="px-5 py-6">
                <h2 className="font-ui text-xs font-semibold uppercase tracking-widest text-stone-400 mb-5">
                  Related Articles
                </h2>
                {sidebarArticles.length > 0 ? (
                  <div className="space-y-5">
                    {sidebarArticles.map(article => (
                      <Link
                        key={article.id}
                        href={`/article/${article.slug}`}
                        onClick={onClose}
                        className="block group"
                      >
                        <span className="font-ui text-[10px] font-semibold uppercase tracking-widest text-stone-400">
                          {article.category.name}
                        </span>
                        <h3 className="font-headline text-[15px] text-charcoal group-hover:text-navy transition-colors leading-snug mt-0.5">
                          {smartQuotes(article.title)}
                        </h3>
                        <p className="font-ui text-xs text-stone-400 mt-1">
                          {article.author.name} · {formatDate(article.publishedAt)}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="font-ui text-sm text-stone-400">No matching articles.</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* ── Idle state ── */
          <div className="overflow-y-auto h-full">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="max-w-2xl">
                <h2 className="font-ui text-xs font-semibold uppercase tracking-widest text-stone-400 mb-5">
                  {input.trim() && liveArticles.length > 0
                    ? `${liveArticles.length} article${liveArticles.length === 1 ? '' : 's'} found — press Enter to ask`
                    : 'Recent Articles'}
                </h2>
                <div className="divide-y divide-stone-100">
                  {(input.trim() ? liveArticles : recentArticles).map(article => (
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
                          {smartQuotes(article.title)}
                        </h3>
                      </div>
                      <div className="flex-shrink-0 text-right hidden sm:block pt-1">
                        <p className="font-ui text-xs font-semibold text-stone-500">
                          {article.author.name}
                        </p>
                        <p className="font-ui text-xs text-stone-400 mt-0.5">
                          {formatDate(article.publishedAt)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                {!input.trim() && (
                  <div className="mt-6 pt-6 border-t border-stone-100">
                    <Link
                      href="/articles"
                      onClick={onClose}
                      className="font-ui text-xs font-semibold uppercase tracking-widest text-navy hover:opacity-70 transition-opacity flex items-center gap-1"
                    >
                      Browse all articles
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
