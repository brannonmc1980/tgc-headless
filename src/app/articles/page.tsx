import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ARTICLES } from '@/lib/mockData'

export const metadata: Metadata = {
  title: 'Articles — The Gospel Coalition',
  description: 'Browse all articles from The Gospel Coalition.',
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function ArticlesPage() {
  const articles = [...ARTICLES].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  return (
    <div className="min-h-screen bg-[#fbfbfa]">
      {/* Page header */}
      <div className="bg-[#20272a] border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-xs font-ui mb-4">
            <Link href="/" className="text-stone-400 hover:text-stone-200 transition-colors">Home</Link>
            <span className="text-stone-600">/</span>
            <span className="text-[#86b474] font-semibold">Articles</span>
          </div>
          <h1 className="font-headline text-4xl lg:text-5xl text-[#fbfbfa]">Articles</h1>
          <p className="font-ui text-sm text-stone-400 mt-2">
            {articles.length} articles
          </p>
        </div>
      </div>

      {/* Article list */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="divide-y divide-stone-100">
          {articles.map(article => (
            <article key={article.id} className="flex flex-col sm:flex-row gap-5 sm:gap-8 py-7 group">
              {/* Thumbnail */}
              <Link
                href={`/article/${article.slug}`}
                className="flex-shrink-0 sm:w-52 overflow-hidden"
              >
                <div className="relative aspect-video sm:aspect-square overflow-hidden">
                  <Image
                    src={article.featuredImage.src}
                    alt={article.featuredImage.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 208px"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-1.5">
                  <Link
                    href={`/${article.category.slug}`}
                    className="text-xs font-ui font-bold uppercase tracking-widest text-crimson hover:text-navy transition-colors"
                  >
                    {article.category.name}
                  </Link>
                  <span className="text-stone-300 text-xs">·</span>
                  <span className="text-xs font-ui text-stone-400">{formatDate(article.publishedAt)}</span>
                </div>

                <Link href={`/article/${article.slug}`}>
                  <h2 className="font-headline text-2xl lg:text-3xl text-charcoal group-hover:text-navy transition-colors leading-snug">
                    {article.title}
                  </h2>
                </Link>

                {article.subheading && (
                  <p className="font-body text-stone-500 text-base mt-2 line-clamp-2 leading-relaxed hidden sm:block">
                    {article.subheading}
                  </p>
                )}

                <div className="mt-3 flex items-center gap-2 text-xs font-ui text-stone-400">
                  <Link
                    href={`/author/${article.author.slug}`}
                    className="font-semibold text-stone-600 hover:text-navy transition-colors"
                  >
                    {article.author.name}
                  </Link>
                  <span>·</span>
                  <span>{article.readingTime} min read</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
