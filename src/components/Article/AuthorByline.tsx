import Image from 'next/image'
import Link from 'next/link'
import { Author } from '@/lib/types'

interface AuthorBylineProps {
  author: Author
  publishedAt: string
  readingTime: number
  variant?: 'full' | 'compact'
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function AuthorByline({
  author,
  publishedAt,
  readingTime,
  variant = 'full',
}: AuthorBylineProps) {
  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2 text-sm font-ui text-stone-500">
        <Link href={`/author/${author.slug}`} className="font-semibold text-charcoal hover:text-navy transition-colors">
          {author.name}
        </Link>
        <span className="w-1 h-1 rounded-full bg-stone-300" />
        <span>{formatDate(publishedAt)}</span>
        <span className="w-1 h-1 rounded-full bg-stone-300" />
        <span>{readingTime} min read</span>
      </div>
    )
  }

  return (
    <div className="flex items-start gap-4 py-5 border-t border-b border-stone-200">
      <Link href={`/author/${author.slug}`} className="flex-shrink-0">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
      </Link>
      <div>
        <Link
          href={`/author/${author.slug}`}
          className="font-ui font-semibold text-charcoal hover:text-navy transition-colors block"
        >
          {author.name}
        </Link>
        {author.role && (
          <p className="text-stone-500 text-xs font-ui mt-0.5">{author.role}</p>
        )}
        <div className="flex items-center gap-2 mt-1.5 text-stone-400 text-xs font-ui">
          <span>{formatDate(publishedAt)}</span>
          <span className="w-1 h-1 rounded-full bg-stone-300" />
          <span>{readingTime} min read</span>
        </div>
      </div>
    </div>
  )
}
