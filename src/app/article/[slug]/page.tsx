import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getArticle, getAllArticles } from '@/lib/api'
import ArticleBody from '@/components/Article/ArticleBody'
import AuthorByline from '@/components/Article/AuthorByline'
import AdBlock from '@/components/Article/AdBlock'
import ArticleCard from '@/components/Article/ArticleCard'
import { ARTICLES } from '@/lib/mockData'
import { tagToSlug } from '@/lib/tagUtils'

interface Params {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) return { title: 'Article Not Found' }
  return {
    title: article.title,
    description: article.subheading || article.excerpt,
    openGraph: {
      title: article.title,
      description: article.subheading || article.excerpt,
      images: [{ url: article.featuredImage.src, width: 1920, height: 1080 }],
      type: 'article',
      authors: [article.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.subheading || article.excerpt,
      images: [article.featuredImage.src],
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

// Related articles (simple: same category, different slug)
function getRelated(currentSlug: string, categorySlug: string, limit = 3) {
  return ARTICLES.filter(a => a.slug !== currentSlug && a.category.slug === categorySlug).slice(0, limit)
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  const related = getRelated(article.slug, article.category.slug)
  const isDark = article.format === 'darkread'
  const isLongRead = article.format === 'longread' || article.format === 'darkread'

  /* ═══════════════════════════════════════════════════════
     LONG-READ & DARK-READ FORMAT
  ══════════════════════════════════════════════════════════ */
  if (isLongRead) {
    return (
      <div className={isDark ? 'dark-article' : ''}>
        {/* Full-width hero */}
        <div className="longread-hero">
          <div className="absolute inset-0">
            <Image
              src={article.featuredImage.src}
              alt={article.featuredImage.alt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div
              className={`absolute inset-0 ${
                isDark
                  ? 'bg-gradient-to-t from-[#20272a] via-[#20272a]/60 to-transparent'
                  : 'bg-gradient-to-t from-black/85 via-black/40 to-transparent'
              }`}
            />
          </div>

          {/* Hero content */}
          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-20">
            <div className="max-w-3xl">
              <Link
                href={`/${article.category.slug}`}
                className="inline-block text-crimson text-xs font-ui font-bold uppercase tracking-widest mb-4 hover:text-crimson/80 transition-colors"
              >
                {article.category.name}
              </Link>
              {isLongRead && (
                <span className="ml-3 inline-block text-white/60 text-xs font-ui font-bold uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded-sm">
                  Long Read
                </span>
              )}
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mt-2">
                {article.title}
              </h1>
              <p className="font-body text-stone-300 text-lg lg:text-xl mt-4 leading-relaxed max-w-2xl">
                {article.subheading}
              </p>
              <div className="flex items-center gap-3 mt-6 text-stone-400 text-sm font-ui">
                <Link href={`/author/${article.author.slug}`} className="font-semibold text-white hover:text-stone-200 transition-colors">
                  {article.author.name}
                </Link>
                <span className="w-1 h-1 rounded-full bg-stone-500" />
                <span>{formatDate(article.publishedAt)}</span>
                <span className="w-1 h-1 rounded-full bg-stone-500" />
                <span>{article.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className={`py-12 lg:py-16 ${isDark ? 'bg-[#20272a]' : 'bg-[#fbfbfa]'}`}>
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Main content */}
              <article className="lg:col-span-8 xl:col-span-7">
                <div className="article-prose">
                  <ArticleBody content={article.content} dark={isDark} />
                </div>

                {/* Author bio card */}
                <div className={`mt-12 p-6 rounded-sm border ${isDark ? 'border-white/10 bg-white/5' : 'border-stone-200 bg-stone-50'}`}>
                  <p className={`text-xs font-ui font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-stone-400' : 'text-stone-400'}`}>
                    About the Author
                  </p>
                  <div className="flex items-start gap-4">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      width={56}
                      height={56}
                      className="rounded-full flex-shrink-0"
                    />
                    <div>
                      <Link
                        href={`/author/${article.author.slug}`}
                        className={`font-ui font-semibold hover:text-crimson transition-colors ${isDark ? 'text-white' : 'text-charcoal'}`}
                      >
                        {article.author.name}
                      </Link>
                      <p className={`font-ui text-sm mt-1 leading-relaxed ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                        {article.author.bio}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                {article.tags.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-2">
                    {article.tags.map(tag => (
                      <Link
                        key={tag}
                        href={`/tag/${tagToSlug(tag)}`}
                        className={`px-3 py-1 text-xs font-ui rounded-full border transition-colors ${
                          isDark
                            ? 'border-white/20 text-stone-300 hover:border-white/40 hover:text-white'
                            : 'border-stone-200 text-stone-500 hover:border-stone-400 hover:text-charcoal'
                        }`}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-4 xl:col-span-5">
                <div className="sticky top-24 space-y-8">
                  <AdBlock variant="sidebar" />
                  {related.length > 0 && (
                    <div>
                      <h3 className={`font-ui text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-stone-400' : 'text-stone-400'}`}>
                        Related Articles
                      </h3>
                      <div className="space-y-4">
                        {related.map(rel => (
                          <ArticleCard key={rel.id} article={rel} variant="horizontal" showCategory />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* More from category */}
        {related.length > 0 && (
          <section className={`py-12 border-t ${isDark ? 'border-white/10 bg-[#20272a]' : 'border-stone-200 bg-stone-50'}`}>
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className={`font-headline text-2xl mb-8 ${isDark ? 'text-white' : 'text-charcoal'}`}>
                More from {article.category.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map(rel => (
                  <ArticleCard key={rel.id} article={rel} variant="default" showCategory />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    )
  }

  /* ═══════════════════════════════════════════════════════
     STANDARD ARTICLE FORMAT
  ══════════════════════════════════════════════════════════ */
  return (
    <div className="bg-[#fbfbfa]">
      {/* Article header */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-ui text-stone-400 mb-6">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/${article.category.slug}`} className="hover:text-navy transition-colors text-crimson font-semibold uppercase tracking-wider">
            {article.category.name}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main article content */}
          <article className="lg:col-span-8">
            {/* Article header */}
            <header className="mb-8">
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-charcoal leading-[1.15]">
                {article.title}
              </h1>
              {article.subheading && (
                <p className="font-body text-stone-500 text-xl mt-4 leading-relaxed">
                  {article.subheading}
                </p>
              )}
              <div className="mt-6">
                <AuthorByline
                  author={article.author}
                  publishedAt={article.publishedAt}
                  readingTime={article.readingTime}
                />
              </div>
            </header>

            {/* Featured image */}
            <div className="mb-8">
              <div className="relative aspect-video w-full overflow-hidden rounded-sm">
                <Image
                  src={article.featuredImage.src}
                  alt={article.featuredImage.alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
              {article.featuredImage.caption && (
                <p className="text-stone-400 text-xs font-ui mt-2 italic">
                  {article.featuredImage.caption}
                </p>
              )}
            </div>

            {/* Article body */}
            <div className="article-prose">
              <ArticleBody content={article.content} dark={false} />
            </div>

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap gap-2">
                <span className="text-xs font-ui text-stone-400 mr-1 self-center">Topics:</span>
                {article.tags.map(tag => (
                  <Link
                    key={tag}
                    href={`/tag/${tagToSlug(tag)}`}
                    className="px-3 py-1 text-xs font-ui text-stone-600 bg-stone-100 rounded-full border border-stone-200 hover:border-stone-400 hover:text-charcoal transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}

            {/* Author bio */}
            <div className="mt-10 p-6 bg-stone-50 border border-stone-200 rounded-sm">
              <p className="text-xs font-ui font-bold uppercase tracking-widest text-stone-400 mb-3">
                About the Author
              </p>
              <div className="flex items-start gap-4">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={56}
                  height={56}
                  className="rounded-full flex-shrink-0"
                />
                <div>
                  <Link
                    href={`/author/${article.author.slug}`}
                    className="font-ui font-semibold text-charcoal hover:text-crimson transition-colors"
                  >
                    {article.author.name}
                  </Link>
                  {article.author.role && (
                    <p className="text-stone-500 text-xs font-ui">{article.author.role}</p>
                  )}
                  <p className="font-ui text-sm text-stone-500 mt-2 leading-relaxed">
                    {article.author.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* More from category */}
            {related.length > 0 && (
              <section className="mt-12 pt-8 border-t border-stone-200">
                <h2 className="font-headline text-xl text-charcoal mb-6">
                  More from {article.category.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {related.slice(0, 2).map(rel => (
                    <ArticleCard key={rel.id} article={rel} variant="default" showCategory={false} />
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <AdBlock variant="sidebar" />

              {related.length > 0 && (
                <div>
                  <h3 className="font-ui text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">
                    Related Reading
                  </h3>
                  <div className="space-y-4 divide-y divide-stone-100">
                    {related.map(rel => (
                      <div key={rel.id} className="pt-4 first:pt-0">
                        <ArticleCard article={rel} variant="compact" showCategory />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletter CTA */}
              <div className="bg-navy text-white p-6 rounded-sm">
                <h3 className="font-headline text-lg mb-2">
                  Stay Connected
                </h3>
                <p className="text-stone-300 text-sm font-ui mb-4 leading-relaxed">
                  Get the best of TGC delivered to your inbox.
                </p>
                <Link
                  href="/newsletters"
                  className="block w-full text-center px-4 py-2.5 bg-crimson text-white text-sm font-ui font-bold rounded-sm hover:bg-crimson-dark transition-colors"
                >
                  Subscribe Free
                </Link>
              </div>

              <AdBlock variant="sidebar" />
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom padding */}
      <div className="pb-16" />
    </div>
  )
}
