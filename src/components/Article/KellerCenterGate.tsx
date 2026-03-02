'use client'

import { useState, useEffect, useRef } from 'react'

const STORAGE_KEY = 'tgc_keller_reader'

function randomCode() {
  return String(Math.floor(100000 + Math.random() * 900000))
}

interface Props {
  previewHtml: string
  fullHtml: string
  dark?: boolean
  children?: React.ReactNode
}

export default function KellerCenterGate({ previewHtml, fullHtml, dark = false, children }: Props) {
  const [step, setStep] = useState<'email' | 'code' | 'unlocked'>('email')
  const [email, setEmail] = useState('')
  const [digits, setDigits] = useState(['', '', '', '', '', ''])
  const [sentCode, setSentCode] = useState('')
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const digitRefs = useRef<Array<HTMLInputElement | null>>([])

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) setStep('unlocked')
    } catch {}
  }, [])

  function submitEmail(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@') || !email.includes('.')) {
      setError('Enter a valid email address.')
      return
    }
    setSending(true)
    setError('')
    const code = randomCode()
    setSentCode(code)
    // In production, send via API. For now, log for dev testing.
    console.info('[Keller Center] Verification code:', code)
    setTimeout(() => { setSending(false); setStep('code') }, 800)
  }

  function handleDigit(i: number, val: string) {
    const d = val.replace(/\D/g, '').slice(-1)
    const next = digits.map((v, idx) => (idx === i ? d : v))
    setDigits(next)
    setError('')
    if (d && i < 5) digitRefs.current[i + 1]?.focus()
    if (i === 5 && d) {
      const entered = next.join('')
      if (entered === sentCode) unlock()
      else if (entered.length === 6) setError('Incorrect code. Please try again.')
    }
  }

  function handleKeyDown(i: number, e: React.KeyboardEvent) {
    if (e.key === 'Backspace' && !digits[i] && i > 0) digitRefs.current[i - 1]?.focus()
  }

  function handlePaste(e: React.ClipboardEvent) {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    const next = [...digits]
    pasted.split('').forEach((d, i) => { next[i] = d })
    setDigits(next)
    if (pasted.length === 6) {
      if (pasted === sentCode) unlock()
      else setError('Incorrect code. Please try again.')
    }
  }

  function verifyCode() {
    const entered = digits.join('')
    if (entered.length < 6) { setError('Enter all 6 digits.'); return }
    if (entered !== sentCode) {
      setError('Incorrect code. Please try again.')
      setDigits(['', '', '', '', '', ''])
      digitRefs.current[0]?.focus()
      return
    }
    unlock()
  }

  function unlock() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, unlockedAt: Date.now() }))
    } catch {}
    setStep('unlocked')
  }

  function resend() {
    const code = randomCode()
    setSentCode(code)
    setDigits(['', '', '', '', '', ''])
    setError('')
    console.info('[Keller Center] Resent code:', code)
  }

  const bg = dark ? '#20272a' : '#fbfbfa'
  const fadeStop = dark ? '#20272a' : '#fbfbfa'

  if (step === 'unlocked') {
    return (
      <>
        <div
          className="article-prose"
          dangerouslySetInnerHTML={{ __html: previewHtml + fullHtml }}
        />
        {children}
      </>
    )
  }

  return (
    <div>
      {/* Preview with fade-out */}
      <div className="relative overflow-hidden">
        <div
          className="article-prose"
          dangerouslySetInnerHTML={{ __html: previewHtml }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent, ${fadeStop})` }}
        />
      </div>

      {/* Permission wall */}
      <div style={{ background: bg }}>
        <div className="max-w-sm mx-auto pt-4 pb-12 px-4 text-center border-t-2 border-[#87b575]">

          {step === 'email' && (
            <>
              <p className="text-xs font-ui font-bold uppercase tracking-[0.18em] text-[#87b575] mb-4 mt-8">
                The Keller Center
              </p>
              <h2
                className="font-headline text-[2rem] leading-tight mb-4"
                style={{ color: dark ? '#f5f5f2' : '#20272a' }}
              >
                Continue reading<br />this article for free
              </h2>
              <p
                className="font-ui text-sm leading-relaxed mb-7"
                style={{ color: dark ? '#b8b3ad' : '#5a6668' }}
              >
                This is not a paywall. Keller Center resources are always free — we simply ask that you create a free account so we can serve our readers well. No subscription or payment of any kind is required.
              </p>

              <form onSubmit={submitEmail} className="space-y-2 text-left">
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError('') }}
                  placeholder="Your email address"
                  autoFocus
                  required
                  className="w-full px-4 py-3 text-sm font-ui border focus:outline-none focus:ring-1 transition-colors"
                  style={{
                    background: dark ? 'rgba(255,255,255,0.05)' : '#fff',
                    borderColor: dark ? 'rgba(255,255,255,0.12)' : '#d3cfca',
                    color: dark ? '#f5f5f2' : '#20272a',
                  }}
                />
                {error && (
                  <p className="text-[#87b575] text-xs font-ui">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 text-white font-ui font-bold text-sm uppercase tracking-widest transition-colors disabled:opacity-50"
                  style={{ background: dark ? '#2e3738' : '#20272a' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = dark ? '#424d4f' : '#171d1f' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = dark ? '#2e3738' : '#20272a' }}
                >
                  {sending ? 'Sending…' : 'Continue →'}
                </button>
              </form>

              <p className="mt-5 text-xs font-ui" style={{ color: '#6e7b7d' }}>
                Already have an account?{' '}
                <a
                  href="/sign-in"
                  className="font-medium hover:underline"
                  style={{ color: dark ? '#87b575' : '#20272a' }}
                >
                  Sign in
                </a>
              </p>
            </>
          )}

          {step === 'code' && (
            <>
              <div
                className="w-10 h-10 mx-auto mb-5 mt-8 flex items-center justify-center rounded-full"
                style={{ background: dark ? 'rgba(255,255,255,0.08)' : '#e8e4df' }}
              >
                <svg
                  className="w-5 h-5"
                  style={{ color: dark ? '#87b575' : '#5a6668' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>

              <h2
                className="font-headline text-2xl mb-2"
                style={{ color: dark ? '#f5f5f2' : '#20272a' }}
              >
                Check your inbox
              </h2>
              <p className="font-ui text-sm mb-1" style={{ color: dark ? '#b8b3ad' : '#5a6668' }}>
                We sent a 6-digit code to
              </p>
              <p className="font-ui text-sm font-semibold mb-7" style={{ color: dark ? '#f5f5f2' : '#20272a' }}>
                {email}
              </p>

              <div className="flex justify-center gap-2 mb-4" onPaste={handlePaste}>
                {digits.map((d, i) => (
                  <input
                    key={i}
                    ref={el => { digitRefs.current[i] = el }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={d}
                    onChange={e => handleDigit(i, e.target.value)}
                    onKeyDown={e => handleKeyDown(i, e)}
                    autoFocus={i === 0}
                    className="w-11 h-14 text-center text-xl font-ui font-bold border focus:outline-none focus:ring-2 transition-colors"
                    style={{
                      background: dark ? 'rgba(255,255,255,0.05)' : '#fff',
                      borderColor: dark ? 'rgba(255,255,255,0.12)' : '#d3cfca',
                      color: dark ? '#f5f5f2' : '#20272a',
                    }}
                  />
                ))}
              </div>

              {error && (
                <p className="text-[#87b575] text-xs font-ui mb-3">{error}</p>
              )}

              <button
                onClick={verifyCode}
                className="w-full py-3 text-white font-ui font-bold text-sm uppercase tracking-widest transition-colors"
                style={{ background: dark ? '#2e3738' : '#20272a' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = dark ? '#424d4f' : '#171d1f' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = dark ? '#2e3738' : '#20272a' }}
              >
                Verify &amp; Continue →
              </button>

              <p className="mt-5 text-xs font-ui" style={{ color: '#6e7b7d' }}>
                Didn&apos;t receive it?{' '}
                <button
                  onClick={resend}
                  className="font-medium hover:underline"
                  style={{ color: dark ? '#87b575' : '#20272a' }}
                >
                  Resend
                </button>
                {' · '}
                <button
                  onClick={() => { setStep('email'); setDigits(['', '', '', '', '', '']); setError('') }}
                  className="font-medium hover:underline"
                  style={{ color: dark ? '#87b575' : '#20272a' }}
                >
                  Wrong email?
                </button>
              </p>
            </>
          )}

        </div>
      </div>
    </div>
  )
}
