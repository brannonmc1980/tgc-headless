'use client'

import { useState } from 'react'
import Image from 'next/image'

interface FollowAuthorButtonProps {
  author: {
    name: string
    avatar: string
    role?: string
  }
}

export default function FollowAuthorButton({ author }: FollowAuthorButtonProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="flex items-center gap-1.5 px-3 py-1.5 border border-[#87b575] text-[#87b575] text-xs font-ui font-semibold rounded-full hover:bg-[#87b575] hover:text-white transition-colors"
      >
        <span className="text-base leading-none">+</span>
        <span>Follow</span>
      </button>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/50"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative bg-white w-full max-w-sm rounded-sm shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#20272a] px-6 pt-8 pb-6 text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 ring-2 ring-[#87b575]">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="font-ui font-semibold text-white text-lg">Follow {author.name}</h2>
              {author.role && (
                <p className="text-stone-400 text-xs font-ui mt-1">{author.role}</p>
              )}
            </div>

            {/* Body */}
            <div className="px-6 py-6">
              {submitted ? (
                <div className="text-center py-4">
                  <div className="w-10 h-10 rounded-full bg-[#87b575]/15 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-[#87b575]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-ui font-semibold text-charcoal">You're following {author.name}</p>
                  <p className="text-stone-500 text-sm font-ui mt-1">We'll send new articles to {email}</p>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="mt-5 w-full py-2.5 bg-[#20272a] text-white text-sm font-ui font-semibold rounded-sm"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-stone-600 text-sm font-ui leading-relaxed mb-4">
                    Get notified by email when {author.name} publishes new articles on TGC.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="w-full px-4 py-2.5 border border-stone-200 rounded-sm text-sm font-ui text-charcoal placeholder-stone-400 focus:outline-none focus:border-[#87b575] transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#87b575] text-white text-sm font-ui font-semibold rounded-sm hover:bg-[#6d9960] transition-colors"
                    >
                      Follow Author
                    </button>
                  </form>
                  <p className="text-stone-400 text-xs font-ui mt-3 text-center">
                    Unsubscribe anytime. No spam.
                  </p>
                </>
              )}
            </div>

            {/* Close */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 p-1.5 text-stone-400 hover:text-stone-600 transition-colors"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
