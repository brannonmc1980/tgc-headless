import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getAuthor, getAuthorArticles, AUTHORS } from '@/lib/api'
import ArticleCard from '@/components/Article/ArticleCard'

interface Params {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return AUTHORS.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const author = await getAuthor(slug)
  if (!author) return { title: 'Author Not Found' }
  return {
    title: author.name,
    description: author.bio,
  }
}

export default async function AuthorPage({ params }: Params) {
  const { slug } = await params
  const [author, articles] = await Promise.all([
    getAuthor(slug),
    getAuthorArticles(slug),
  ])

  if (!author) notFound()

  return (
    <div className="min-h-screen bg-[#f5f5f2]">
      {/* Author header */}
      <div className="border-b border-stone-200 bg-[#d3cfca]/40">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-ui text-stone-400 mb-8">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal">Contributors</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden ring-4 ring-stone-200">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  className="object-cover"
                  sizes="144px"
                  priority
                />
              </div>
            </div>

            {/* Author info */}
            <div className="flex-1 min-w-0">
              <h1 className="font-headline text-4xl lg:text-5xl text-charcoal leading-tight">
                {author.name}
              </h1>
              {author.role && (
                <p className="font-ui text-sm text-stone-500 mt-2 uppercase tracking-widest">
                  {author.role}
                </p>
              )}
              {author.bio && (
                <p className="font-body text-stone-600 text-lg mt-4 leading-relaxed max-w-2xl">
                  {author.bio}
                </p>
              )}
              <p className="font-ui text-xs text-stone-400 mt-5 uppercase tracking-widest">
                {articles.length} {articles.length === 1 ? 'Article' : 'Articles'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {articles.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-ui text-stone-400 text-lg">No articles found for this author.</p>
          </div>
        ) : (
          <>
            <h2 className="font-ui text-xs font-bold uppercase tracking-widest text-stone-400 mb-8">
              All Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {articles.map(article => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  variant="default"
                  showCategory
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
