'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SignInPage() {
  const [keepSignedIn, setKeepSignedIn] = useState(false)
  const [mode, setMode] = useState<'signin' | 'register' | 'forgot'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [forgotSent, setForgotSent] = useState(false)
  const [error, setError] = useState('')

  function handleSignIn(e: React.FormEvent) {
    e.preventDefault()
    setError('Sign-in is not yet connected. Coming soon.')
  }

  function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setError('Account creation is not yet available. Coming soon.')
  }

  function handleForgot(e: React.FormEvent) {
    e.preventDefault()
    setForgotSent(true)
  }

  return (
    <div className="min-h-screen bg-[#fbfbfa] flex flex-col">
      {/* Main content */}
      <div className="flex-1 flex items-start justify-center px-4 pt-12 pb-16">
        <div className="w-full max-w-[360px]">

          {mode === 'signin' && (
            <>
              <h1 className="font-headline text-3xl text-charcoal mb-1">Sign in</h1>
              <p className="text-stone-500 text-sm font-ui mb-7">
                Access your TGC account.{' '}
                <button
                  onClick={() => { setMode('register'); setError('') }}
                  className="text-[#87b575] hover:underline font-semibold"
                >
                  Create account
                </button>
              </p>

              {error && (
                <div className="mb-4 p-3 bg-stone-100 border border-stone-200 rounded-sm text-sm font-ui text-stone-600">
                  {error}
                </div>
              )}

              <form onSubmit={handleSignIn} className="space-y-4">
                <div>
                  <label className="block text-xs font-ui font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 border border-stone-200 text-sm font-ui text-charcoal placeholder-stone-400 focus:outline-none focus:border-[#87b575] transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-ui font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    className="w-full px-4 py-3 border border-stone-200 text-sm font-ui text-charcoal placeholder-stone-400 focus:outline-none focus:border-[#87b575] transition-colors bg-white"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label
                    className="flex items-center gap-2 text-xs font-ui text-stone-500 cursor-pointer select-none"
                    onClick={() => setKeepSignedIn(v => !v)}
                  >
                    <div className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center transition-colors flex-shrink-0 ${keepSignedIn ? 'bg-[#87b575] border-[#87b575]' : 'border-stone-300'}`}>
                      {keepSignedIn && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    Keep me signed in
                  </label>
                  <button
                    type="button"
                    onClick={() => { setMode('forgot'); setError('') }}
                    className="text-xs font-ui text-stone-500 hover:text-navy transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#20272a] text-white text-sm font-ui font-semibold hover:bg-[#171d1f] transition-colors mt-2"
                >
                  Sign in
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-stone-200">
                <p className="text-xs font-ui text-stone-400 text-center mb-4">Or continue with</p>
                <button className="w-full py-3 border border-stone-200 text-sm font-ui text-charcoal hover:bg-stone-50 transition-colors flex items-center justify-center gap-3">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>
              </div>
            </>
          )}

          {mode === 'register' && (
            <>
              <h1 className="font-headline text-3xl text-charcoal mb-1">Create account</h1>
              <p className="text-stone-500 text-sm font-ui mb-7">
                Already have an account?{' '}
                <button
                  onClick={() => { setMode('signin'); setError('') }}
                  className="text-[#87b575] hover:underline font-semibold"
                >
                  Sign in
                </button>
              </p>

              {error && (
                <div className="mb-4 p-3 bg-stone-100 border border-stone-200 rounded-sm text-sm font-ui text-stone-600">
                  {error}
                </div>
              )}

              <form onSubmit={handleRegister} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-ui font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                      First name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-stone-200 text-sm font-ui text-charcoal focus:outline-none focus:border-[#87b575] transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-ui font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                      Last name
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-stone-200 text-sm font-ui text-charcoal focus:outline-none focus:border-[#87b575] transition-colors bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-ui font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 border border-stone-200 text-sm font-ui text-charcoal focus:outline-none focus:border-[#87b575] transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-ui font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                    className="w-full px-4 py-3 border border-stone-200 text-sm font-ui text-charcoal focus:outline-none focus:border-[#87b575] transition-colors bg-white"
                  />
                  <p className="text-xs font-ui text-stone-400 mt-1">At least 8 characters</p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#20272a] text-white text-sm font-ui font-semibold hover:bg-[#171d1f] transition-colors mt-2"
                >
                  Create account
                </button>
                <p className="text-xs font-ui text-stone-400 text-center leading-relaxed">
                  By creating an account you agree to our{' '}
                  <Link href="#" className="underline hover:text-navy">Terms</Link>{' '}
                  and{' '}
                  <Link href="#" className="underline hover:text-navy">Privacy Policy</Link>.
                </p>
              </form>
            </>
          )}

          {mode === 'forgot' && (
            <>
              <h1 className="font-headline text-3xl text-charcoal mb-1">Reset password</h1>
              <p className="text-stone-500 text-sm font-ui mb-7">
                Enter your email and we'll send you a reset link.
              </p>

              {forgotSent ? (
                <div className="p-4 bg-[#87b575]/10 border border-[#87b575]/30 rounded-sm">
                  <p className="text-sm font-ui text-charcoal font-semibold">Check your email</p>
                  <p className="text-sm font-ui text-stone-600 mt-1">
                    If an account exists for <strong>{email}</strong>, you'll receive a reset link shortly.
                  </p>
                  <button
                    onClick={() => { setMode('signin'); setForgotSent(false) }}
                    className="mt-4 text-sm font-ui text-[#87b575] hover:underline font-semibold"
                  >
                    ← Back to sign in
                  </button>
                </div>
              ) : (
                <form onSubmit={handleForgot} className="space-y-4">
                  <div>
                    <label className="block text-xs font-ui font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                      Email address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-stone-200 text-sm font-ui text-charcoal focus:outline-none focus:border-[#87b575] transition-colors bg-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#20272a] text-white text-sm font-ui font-semibold hover:bg-[#171d1f] transition-colors"
                  >
                    Send reset link
                  </button>
                  <button
                    type="button"
                    onClick={() => { setMode('signin'); setError('') }}
                    className="w-full text-sm font-ui text-stone-500 hover:text-navy transition-colors"
                  >
                    ← Back to sign in
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
