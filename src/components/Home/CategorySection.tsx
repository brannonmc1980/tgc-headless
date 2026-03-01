import Link from 'next/link'
import { Article, Category } from '@/lib/types'
import ArticleCard from '@/components/Article/ArticleCard'

interface CategorySectionProps {
  category: Category
  articles: Article[]
}

export default function CategorySection({ category, articles }: CategorySectionProps) {
  if (!articles.length) return null
  const [primary, ...rest] = articles

  return (
    <section className="py-10 border-b border-stone-200 last:border-0">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h2 className="font-ui font-semibold text-xl" style={{ color: '#303a3d' }}>
              {category.name}
            </h2>
          </div>
          <Link
            href={`/${category.slug}`}
            className="text-xs font-ui font-bold text-navy uppercase tracking-widest hover:text-crimson transition-colors flex items-center gap-1"
          >
            View all
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Primary article */}
          {primary && (
            <div className="lg:col-span-5">
              <ArticleCard article={primary} variant="default" showCategory={false} showExcerpt />
            </div>
          )}

          {/* Secondary articles */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-stone-100">
              {rest.slice(0, 3).map(article => (
                <div key={article.id} className="pt-5 pb-5 first:pt-0 last:pb-0">
                  <ArticleCard article={article} variant="horizontal" showCategory={false} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
