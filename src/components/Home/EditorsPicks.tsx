import { Article } from '@/lib/types'
import ArticleCard from '@/components/Article/ArticleCard'

interface EditorsPicksProps {
  articles: Article[]
}

export default function EditorsPicks({ articles }: EditorsPicksProps) {
  if (!articles.length) return null

  const [featured, ...rest] = articles

  return (
    <section className="bg-stone-50 border-y border-stone-200 py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1 h-6 bg-crimson rounded-full" />
          <h2 className="font-ui text-xs font-bold uppercase tracking-widest text-stone-500">
            Editors' Picks
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured pick */}
          {featured && (
            <div className="lg:col-span-5 xl:col-span-4">
              <ArticleCard article={featured} variant="default" showCategory showExcerpt />
            </div>
          )}

          {/* Divider */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="w-px h-full bg-stone-200 mx-auto" />
          </div>

          {/* Remaining picks */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {rest.slice(0, 3).map(article => (
                <ArticleCard key={article.id} article={article} variant="default" showCategory />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
