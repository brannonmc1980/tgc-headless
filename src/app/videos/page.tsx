import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Videos',
  description: 'Video content from The Gospel Coalition — coming soon.',
}

export default function VideosPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#fbfbfa]">
      <div className="max-w-md text-center px-6 py-16">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center bg-stone-100 rounded-full">
          <svg
            className="w-8 h-8 text-stone-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z"
            />
          </svg>
        </div>

        <p className="text-xs font-ui font-bold uppercase tracking-[0.18em] text-crimson mb-4">
          Videos
        </p>
        <h1 className="font-headline text-4xl text-charcoal leading-tight mb-4">
          Coming Soon
        </h1>
        <p className="font-ui text-stone-500 text-base leading-relaxed mb-8">
          We&apos;re building something worth watching. TGC video content — sermons, lectures, interviews, and more — will be available here soon.
        </p>

        <div className="border-t border-stone-200 pt-8">
          <p className="font-ui text-sm text-stone-400 mb-4">
            In the meantime, explore our written content.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/articles"
              className="inline-block px-6 py-2.5 bg-charcoal text-white text-sm font-ui font-bold uppercase tracking-wider hover:bg-navy-dark transition-colors"
            >
              Browse Articles
            </a>
            <a
              href="/podcasts"
              className="inline-block px-6 py-2.5 border border-stone-300 text-charcoal text-sm font-ui font-bold uppercase tracking-wider hover:border-stone-400 transition-colors"
            >
              Listen to Podcasts
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
