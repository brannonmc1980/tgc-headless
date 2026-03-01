import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { PODCASTS } from '@/lib/podcastData'

export const metadata: Metadata = {
  title: 'Podcasts',
  description: 'Gospel-centered conversations for the church and the world. Subscribe to any of our podcasts on your favorite platform.',
}

function SpotifyIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

function ApplePodcastsIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.34 0A5.328 5.328 0 0 0 0 5.34v13.32A5.328 5.328 0 0 0 5.34 24h13.32A5.328 5.328 0 0 0 24 18.66V5.34A5.328 5.328 0 0 0 18.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.608 1.685 2.484 3.937 2.484 6.351 0 4.936-3.466 8.912-8.54 8.912-4.936 0-8.54-3.976-8.54-8.912 0-2.414.876-4.666 2.484-6.351 1.608-1.685 3.72-2.587 6.056-2.587zm0 2.25c-3.625 0-6.291 2.846-6.291 6.688 0 3.696 2.52 6.416 6.291 6.416 3.771 0 6.29-2.72 6.29-6.416 0-3.842-2.665-6.688-6.29-6.688zm0 2.045c.674 0 1.232.558 1.232 1.232s-.558 1.232-1.232 1.232-1.232-.558-1.232-1.232.558-1.232 1.232-1.232zm0 3.109c1.656 0 3.006 1.35 3.006 3.006 0 1.197-.706 2.246-1.73 2.74v1.58h-2.552v-1.58c-1.024-.494-1.73-1.543-1.73-2.74 0-1.656 1.35-3.006 3.006-3.006z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

export default function PodcastsPage() {
  return (
    <div className="min-h-screen bg-[#fbfbfa]">
      {/* Page header */}
      <div className="border-b border-stone-200 bg-[#d3cfca]/40">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-center gap-2 text-xs font-ui text-stone-400 mb-8">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal">Podcasts</span>
          </div>
          <h1 className="font-headline text-5xl lg:text-6xl text-charcoal">Podcasts</h1>
          <p className="font-body text-stone-500 text-lg mt-4 max-w-2xl leading-relaxed">
            Gospel-centered conversations for the church and the world.
            Subscribe to any of our podcasts on Spotify, Apple Podcasts, or YouTube.
          </p>
        </div>
      </div>

      {/* Podcast list */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {PODCASTS.map((podcast) => (
          <div
            key={podcast.id}
            className="py-12 border-b border-stone-200 last:border-b-0"
          >
            <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
              {/* Square cover */}
              <div className="flex-shrink-0">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-sm overflow-hidden shadow-sm">
                  <Image
                    src={podcast.cover}
                    alt={podcast.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 384px, 320px"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h2 className="font-headline text-3xl lg:text-4xl text-charcoal leading-tight">
                  {podcast.name}
                </h2>
                {podcast.hosts && (
                  <p className="font-ui text-xs text-stone-500 uppercase tracking-widest mt-2">
                    {podcast.hosts}
                  </p>
                )}
                <p className="font-body text-stone-600 mt-3 leading-relaxed max-w-2xl">
                  {podcast.description}
                </p>

                {/* Platform buttons */}
                <div className="flex flex-wrap gap-2 mt-5">
                  <a
                    href={podcast.platforms.spotify}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1DB954] text-white text-xs font-ui font-semibold rounded-sm hover:opacity-90 transition-opacity"
                    aria-label={`${podcast.name} on Spotify`}
                  >
                    <SpotifyIcon />
                    Spotify
                  </a>
                  <a
                    href={podcast.platforms.apple}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#872EC4] text-white text-xs font-ui font-semibold rounded-sm hover:opacity-90 transition-opacity"
                    aria-label={`${podcast.name} on Apple Podcasts`}
                  >
                    <ApplePodcastsIcon />
                    Apple Podcasts
                  </a>
                  {podcast.platforms.youtube && (
                    <a
                      href={podcast.platforms.youtube}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FF0000] text-white text-xs font-ui font-semibold rounded-sm hover:opacity-90 transition-opacity"
                      aria-label={`${podcast.name} on YouTube`}
                    >
                      <YouTubeIcon />
                      YouTube
                    </a>
                  )}
                </div>

                {/* Recent episodes */}
                <div className="mt-7">
                  <h3 className="font-ui text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">
                    Recent Episodes
                  </h3>
                  <ol className="space-y-2.5">
                    {podcast.recentEpisodes.map((episode, i) => (
                      <li key={i} className="flex items-baseline gap-3">
                        <span className="font-ui text-xs text-stone-300 flex-shrink-0 w-4 text-right">
                          {i + 1}
                        </span>
                        <a
                          href="#"
                          className="font-body text-charcoal hover:text-navy transition-colors leading-snug"
                        >
                          {episode}
                        </a>
                      </li>
                    ))}
                  </ol>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 font-ui text-xs font-semibold text-navy uppercase tracking-widest mt-5 hover:opacity-70 transition-opacity"
                  >
                    All Episodes
                    <ChevronRightIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
