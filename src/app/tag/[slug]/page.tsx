import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ARTICLES } from '@/lib/mockData'
import { tagToSlug } from '@/lib/tagUtils'
import ArticleCard from '@/components/Article/ArticleCard'

interface Params {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = new Set<string>()
  ARTICLES.forEach(a => a.tags.forEach(t => slugs.add(tagToSlug(t))))
  return Array.from(slugs).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const tag = findTagLabel(slug)
  if (!tag) return { title: 'Tag Not Found' }
  return {
    title: `${tag} — The Gospel Coalition`,
    description: `Articles tagged with "${tag}" from The Gospel Coalition.`,
  }
}

function findTagLabel(slug: string): string | undefined {
  for (const article of ARTICLES) {
    for (const tag of article.tags) {
      if (tagToSlug(tag) === slug) return tag
    }
  }
  return undefined
}

export default async function TagPage({ params }: Params) {
  const { slug } = await params
  const tag = findTagLabel(slug)
  if (!tag) notFound()

  const articles = ARTICLES.filter(a => a.tags.some(t => tagToSlug(t) === slug))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return (
    <div className="min-h-screen bg-[#fbfbfa]">
      {/* Header */}
      <div className="bg-[#20272a] border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-xs font-ui mb-4">
            <Link href="/" className="text-stone-400 hover:text-stone-200 transition-colors">Home</Link>
            <span className="text-stone-600">/</span>
            <span className="text-[#86b474] font-semibold">{tag}</span>
          </div>
          <h1 className="font-headline text-4xl lg:text-5xl text-[#fbfbfa]">
            {tag}
          </h1>
          <p className="font-ui text-sm text-stone-400 mt-2">
            {articles.length} {articles.length === 1 ? 'article' : 'articles'}
          </p>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {articles.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-ui text-stone-400 text-lg">No articles found for this topic.</p>
            <Link href="/articles" className="inline-block mt-4 text-sm font-ui font-semibold text-navy hover:underline">
              Browse all articles
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <ArticleCard
                key={article.id}
                article={article}
                variant="default"
                showCategory
                showExcerpt
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
