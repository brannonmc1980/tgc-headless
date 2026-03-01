import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getArticlesBycat, CATEGORIES } from '@/lib/api'
import ArticleCard from '@/components/Article/ArticleCard'
import AdBlock from '@/components/Article/AdBlock'

interface Params {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return CATEGORIES.map(c => ({ category: c.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params
  const cat = CATEGORIES.find(c => c.slug === category)
  if (!cat) return { title: 'Category Not Found' }
  return {
    title: cat.name,
    description: cat.description,
  }
}

export default async function CategoryPage({ params }: Params) {
  const { category } = await params
  const cat = CATEGORIES.find(c => c.slug === category)
  if (!cat) notFound()

  const articles = await getArticlesBycat(category)

  const [heroArticle, ...rest] = articles

  return (
    <div className="min-h-screen bg-[#f5f5f2]">
      {/* Category header */}
      <div className="border-b border-stone-200 bg-warm-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-xs font-ui text-stone-400 mb-3">
            <a href="/" className="hover:text-navy transition-colors">Home</a>
            <span>/</span>
            <span className="text-charcoal font-semibold">{cat.name}</span>
          </div>
          <h1 className="font-headline text-4xl lg:text-5xl text-charcoal">
            {cat.name}
          </h1>
          {cat.description && (
            <p className="font-body text-stone-500 text-lg mt-3 max-w-2xl">
              {cat.description}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {articles.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-ui text-stone-400 text-lg">No articles found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main content */}
            <div className="lg:col-span-8">
              {/* Hero article */}
              {heroArticle && (
                <div className="mb-10">
                  <ArticleCard article={heroArticle} variant="hero" showCategory={false} />
                </div>
              )}

              {/* Article grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {rest.map((article, i) => (
                  <>
                    <ArticleCard
                      key={article.id}
                      article={article}
                      variant="default"
                      showCategory={false}
                      showExcerpt
                    />
                    {/* Inject inline ad every 4 articles */}
                    {(i + 1) % 4 === 0 && (
                      <div key={`ad-${i}`} className="col-span-1 sm:col-span-2">
                        <AdBlock variant="inline" />
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <AdBlock variant="sidebar" />

                {/* Category nav */}
                <div>
                  <h3 className="font-ui text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">
                    Browse Categories
                  </h3>
                  <ul className="space-y-1">
                    {CATEGORIES.map(c => (
                      <li key={c.slug}>
                        <a
                          href={`/${c.slug}`}
                          className={`block py-2 px-3 text-sm font-ui rounded-sm transition-colors ${
                            c.slug === category
                              ? 'bg-navy text-white font-semibold'
                              : 'text-charcoal hover:bg-stone-50 hover:text-navy'
                          }`}
                        >
                          {c.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <AdBlock variant="sidebar" />
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}
