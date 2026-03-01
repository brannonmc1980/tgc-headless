import Link from 'next/link'
import Image from 'next/image'
import { Article } from '@/lib/types'

interface ArticleCardProps {
  article: Article
  variant?: 'default' | 'horizontal' | 'compact' | 'hero'
  showCategory?: boolean
  showExcerpt?: boolean
}

export default function ArticleCard({
  article,
  variant = 'default',
  showCategory = true,
  showExcerpt = false,
}: ArticleCardProps) {
  const href = `/article/${article.slug}`

  if (variant === 'hero') {
    return (
      <article className="group">
        <Link href={href} className="block overflow-hidden rounded-sm">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={article.featuredImage.src}
              alt={article.featuredImage.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
              priority
            />
          </div>
        </Link>
        <div className="pt-4">
          {showCategory && (
            <CategoryBadge name={article.category.name} slug={article.category.slug} />
          )}
          <Link href={href}>
            <h2 className="font-headline text-3xl lg:text-4xl xl:text-5xl font-bold text-charcoal mt-2 leading-tight group-hover:text-navy transition-colors">
              {article.title}
            </h2>
          </Link>
          <p className="text-stone-500 font-body text-base mt-2 line-clamp-2 hidden md:block">
            {article.subheading}
          </p>
          <div className="mt-3 flex items-center gap-3 text-stone-400 text-xs font-ui">
            <span>{article.author.name}</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>{formatDate(article.publishedAt)}</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>{article.readingTime} min read</span>
          </div>
        </div>
      </article>
    )
  }

  if (variant === 'horizontal') {
    return (
      <article className="flex gap-4 group">
        <Link href={href} className="flex-shrink-0 w-28 sm:w-36">
          <div className="relative aspect-video overflow-hidden rounded-sm">
            <Image
              src={article.featuredImage.src}
              alt={article.featuredImage.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="160px"
            />
          </div>
        </Link>
        <div className="flex-1 min-w-0">
          {showCategory && (
            <CategoryBadge name={article.category.name} slug={article.category.slug} />
          )}
          <Link href={href}>
            <h3 className="font-headline text-lg font-bold text-charcoal mt-1 leading-snug group-hover:text-navy transition-colors line-clamp-3">
              {article.title}
            </h3>
          </Link>
          <p className="text-stone-500 text-xs font-ui mt-1.5">
            {article.author.name} · {formatDate(article.publishedAt)}
          </p>
        </div>
      </article>
    )
  }

  if (variant === 'compact') {
    return (
      <article className="group border-b border-stone-100 pb-4 last:border-0 last:pb-0">
        {showCategory && (
          <CategoryBadge name={article.category.name} slug={article.category.slug} />
        )}
        <Link href={href}>
          <h3 className="font-headline text-lg font-bold text-charcoal mt-1.5 leading-snug group-hover:text-navy transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="text-stone-500 text-xs font-ui mt-1.5">
          {article.author.name} · {formatDate(article.publishedAt)}
        </p>
      </article>
    )
  }

  // Default card
  return (
    <article className="group flex flex-col">
      <Link href={href} className="block overflow-hidden rounded-sm">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={article.featuredImage.src}
            alt={article.featuredImage.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="pt-4 flex-1">
        {showCategory && (
          <CategoryBadge name={article.category.name} slug={article.category.slug} />
        )}
        <Link href={href}>
          <h3 className="font-headline text-xl lg:text-2xl font-bold text-charcoal mt-2 leading-snug group-hover:text-navy transition-colors">
            {article.title}
          </h3>
        </Link>
        {showExcerpt && (
          <p className="font-body text-stone-600 text-sm mt-2 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        )}
        <div className="flex items-center gap-2 mt-3 text-stone-500 text-xs font-ui">
          <span className="font-medium">{article.author.name}</span>
          <span className="w-1 h-1 rounded-full bg-stone-300" />
          <span>{formatDate(article.publishedAt)}</span>
          <span className="w-1 h-1 rounded-full bg-stone-300" />
          <span>{article.readingTime} min</span>
        </div>
      </div>
    </article>
  )
}

function CategoryBadge({ name, slug, light = false }: { name: string; slug: string; light?: boolean }) {
  return (
    <Link
      href={`/${slug}`}
      className={`inline-block text-xs font-ui font-bold uppercase tracking-widest transition-colors ${
        light
          ? 'text-crimson hover:text-crimson/80'
          : 'text-crimson hover:text-navy'
      }`}
    >
      {name}
    </Link>
  )
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
