import Link from 'next/link'
import { Article } from '@/lib/types'

interface TrendingSectionProps {
  articles: Article[]
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export default function TrendingSection({ articles }: TrendingSectionProps) {
  if (!articles.length) return null

  return (
    <section className="bg-navy text-white py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-6 bg-crimson rounded-full" />
          <h2 className="font-ui text-xs font-bold uppercase tracking-widest text-stone-300">
            Now Trending
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {articles.slice(0, 4).map((article, i) => (
            <Link
              key={article.id}
              href={`/article/${article.slug}`}
              className="group bg-navy hover:bg-navy/80 transition-colors p-6"
            >
              <div className="text-crimson font-headline font-bold text-4xl mb-4 leading-none opacity-60">
                {String(i + 1).padStart(2, '0')}
              </div>
              <span className="text-crimson text-xs font-ui font-bold uppercase tracking-widest">
                {article.category.name}
              </span>
              <h3 className="font-headline text-lg text-white mt-2 leading-snug group-hover:text-stone-200 transition-colors">
                {article.title}
              </h3>
              <p className="text-stone-400 text-xs font-ui mt-3">
                {article.author.name} · {formatDate(article.publishedAt)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
