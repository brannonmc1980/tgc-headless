import AdBlock from './AdBlock'

interface ArticleBodyProps {
  content: string
  dark?: boolean
}

/**
 * Splits HTML content into chunks and injects ads every ~2000 characters.
 * Works by splitting on </p> tags to find natural paragraph breaks.
 */
function injectAds(html: string): Array<{ type: 'content' | 'ad'; content?: string }> {
  const paragraphs = html.split('</p>').filter(Boolean).map(p => p + '</p>')
  const chunks: Array<{ type: 'content' | 'ad'; content?: string }> = []
  let buffer = ''
  let charCount = 0
  let adCount = 0

  for (const para of paragraphs) {
    buffer += para
    charCount += para.length

    if (charCount > 1800 && adCount < 2) {
      chunks.push({ type: 'content', content: buffer })
      chunks.push({ type: 'ad' })
      buffer = ''
      charCount = 0
      adCount++
    }
  }

  if (buffer) {
    chunks.push({ type: 'content', content: buffer })
  }

  return chunks
}

export default function ArticleBody({ content, dark = false }: ArticleBodyProps) {
  const chunks = injectAds(content)

  const proseClass = dark
    ? `
      prose prose-lg max-w-none
      prose-invert
      prose-headings:font-headline prose-headings:font-bold
      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
      prose-p:font-body prose-p:leading-[1.85] prose-p:text-stone-300
      prose-blockquote:border-l-4 prose-blockquote:border-crimson
      prose-blockquote:pl-6 prose-blockquote:not-italic
      prose-blockquote:text-stone-200 prose-blockquote:font-headline
      prose-a:text-crimson prose-a:no-underline hover:prose-a:underline
      prose-strong:text-white
      [&_.article-lead]:text-xl [&_.article-lead]:font-body [&_.article-lead]:leading-relaxed [&_.article-lead]:text-stone-200 [&_.article-lead]:font-medium
      [&_.pull-quote]:not-prose [&_.pull-quote]:my-10 [&_.pull-quote]:py-8 [&_.pull-quote]:px-8 [&_.pull-quote]:border-y [&_.pull-quote]:border-crimson/30 [&_.pull-quote]:text-center
      [&_.pull-quote_p]:font-headline [&_.pull-quote_p]:text-2xl [&_.pull-quote_p]:font-bold [&_.pull-quote_p]:text-white [&_.pull-quote_p]:leading-snug [&_.pull-quote_p]:italic
    `
    : `
      prose prose-lg max-w-none
      prose-headings:font-headline prose-headings:font-bold prose-headings:text-charcoal
      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
      prose-p:font-body prose-p:leading-[1.85] prose-p:text-stone-700
      prose-blockquote:border-l-4 prose-blockquote:border-crimson
      prose-blockquote:pl-6 prose-blockquote:not-italic
      prose-blockquote:text-charcoal prose-blockquote:font-headline
      prose-a:text-navy prose-a:no-underline hover:prose-a:underline
      prose-strong:text-charcoal
      [&_.article-lead]:text-xl [&_.article-lead]:font-body [&_.article-lead]:leading-relaxed [&_.article-lead]:text-stone-700 [&_.article-lead]:font-medium
      [&_.pull-quote]:not-prose [&_.pull-quote]:my-10 [&_.pull-quote]:py-8 [&_.pull-quote]:px-8 [&_.pull-quote]:border-y [&_.pull-quote]:border-navy/20 [&_.pull-quote]:text-center
      [&_.pull-quote_p]:font-headline [&_.pull-quote_p]:text-2xl [&_.pull-quote_p]:font-bold [&_.pull-quote_p]:text-navy [&_.pull-quote_p]:leading-snug [&_.pull-quote_p]:italic
    `

  return (
    <div>
      {chunks.map((chunk, i) =>
        chunk.type === 'ad' ? (
          <AdBlock key={`ad-${i}`} variant="inline" />
        ) : (
          <div
            key={`content-${i}`}
            className={proseClass}
            dangerouslySetInnerHTML={{ __html: chunk.content ?? '' }}
          />
        )
      )}
    </div>
  )
}
