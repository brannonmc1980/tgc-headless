export type ArticleFormat = 'standard' | 'longread' | 'darkread'

export interface Author {
  id: number
  name: string
  slug: string
  avatar: string
  bio: string
  role?: string
}

export interface Category {
  id: number
  name: string
  slug: string
  description?: string
}

export interface Article {
  id: number
  slug: string
  title: string
  subheading: string
  excerpt: string
  content: string // HTML string
  author: Author
  category: Category
  tags: string[]
  publishedAt: string
  updatedAt: string
  readingTime: number // minutes
  format: ArticleFormat
  featuredImage: {
    src: string
    alt: string
    caption?: string
  }
  isFeatured?: boolean
  isEditorsPick?: boolean
  isSponsored?: boolean
}

export interface WPPost {
  id: number
  slug: string
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  date: string
  modified: string
  featured_media: number
  _embedded?: {
    author: Array<{ id: number; name: string; slug: string; avatar_urls: Record<string, string> }>
    'wp:featuredmedia': Array<{ source_url: string; alt_text: string }>
    'wp:term': Array<Array<{ id: number; name: string; slug: string; taxonomy: string }>>
  }
  acf?: {
    subheading?: string
    format?: ArticleFormat
    reading_time?: number
  }
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface SiteSettings {
  name: string
  description: string
  wpUrl: string
}
