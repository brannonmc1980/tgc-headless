import { Article } from '@/lib/types'
import ArticleCard from '@/components/Article/ArticleCard'

interface HeroSectionProps {
  featured: Article[]
  recent: Article[]
}

export default function HeroSection({ featured, recent }: HeroSectionProps) {
  const [main, ...secondaries] = featured
  const sidebar = recent.slice(0, 4)

  return (
    <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main hero */}
        {main && (
          <div className="lg:col-span-7">
            <ArticleCard article={main} variant="hero" showCategory />
          </div>
        )}

        {/* Secondary features */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Two smaller featured articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {secondaries.slice(0, 2).map(article => (
              <ArticleCard key={article.id} article={article} variant="default" showCategory />
            ))}
          </div>

          {/* Sidebar recent articles */}
          <div className="border-t border-stone-200 pt-5">
            <h3 className="font-ui text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">
              Most Recent
            </h3>
            <div className="space-y-4">
              {sidebar.map(article => (
                <ArticleCard key={article.id} article={article} variant="horizontal" showCategory />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
