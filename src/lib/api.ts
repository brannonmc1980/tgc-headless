import { Article, WPPost, Category } from './types'
import {
  ARTICLES,
  AUTHORS,
  CATEGORIES,
  getArticleBySlug,
  getArticlesByCategory,
  getAuthorBySlug,
  getArticlesByAuthorSlug,
  getFeaturedArticles,
  getEditorsPicks,
  getRecentArticles,
} from './mockData'

const WP_BASE_URL = process.env.WORDPRESS_API_URL || ''
const USE_MOCK = !WP_BASE_URL || process.env.USE_MOCK_DATA === 'true'

// ─── WordPress REST API helpers ─────────────────────────────────────────────

async function wpFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${WP_BASE_URL}/wp-json/wp/v2${path}`, {
    next: { revalidate: 60 },
    headers: { 'Accept': 'application/json' },
  })
  if (!res.ok) throw new Error(`WP API error: ${res.status} ${path}`)
  return res.json() as T
}

function transformWPPost(post: WPPost): Article {
  const author = post._embedded?.author?.[0]
  const media = post._embedded?.['wp:featuredmedia']?.[0]
  const terms = post._embedded?.['wp:term'] ?? []
  const categories = terms.find(t => t[0]?.taxonomy === 'category') ?? []
  const category = categories[0]

  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    subheading: post.acf?.subheading ?? '',
    excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ''),
    content: post.content.rendered,
    author: {
      id: author?.id ?? 0,
      name: author?.name ?? 'TGC Staff',
      slug: author?.slug ?? 'tgc-staff',
      avatar: author?.avatar_urls?.['96'] ?? '',
      bio: '',
    },
    category: {
      id: category?.id ?? 0,
      name: category?.name ?? 'Uncategorized',
      slug: category?.slug ?? 'uncategorized',
    },
    tags: [],
    publishedAt: post.date,
    updatedAt: post.modified,
    readingTime: post.acf?.reading_time ?? 5,
    format: post.acf?.format ?? 'standard',
    featuredImage: {
      src: media?.source_url ?? '',
      alt: media?.alt_text ?? post.title.rendered,
    },
  }
}

// ─── Public API ────────────────────────────────────────────────────────────

export async function getAllArticles(): Promise<Article[]> {
  if (USE_MOCK) return ARTICLES
  try {
    const posts = await wpFetch<WPPost[]>('/posts?_embed&per_page=100')
    return posts.map(transformWPPost)
  } catch {
    return ARTICLES
  }
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  if (USE_MOCK) return getArticleBySlug(slug)
  try {
    const posts = await wpFetch<WPPost[]>(`/posts?slug=${slug}&_embed`)
    if (!posts.length) return undefined
    return transformWPPost(posts[0])
  } catch {
    return getArticleBySlug(slug)
  }
}

export async function getArticlesBycat(categorySlug: string): Promise<Article[]> {
  if (USE_MOCK) return getArticlesByCategory(categorySlug)
  try {
    const categories = await wpFetch<Array<{ id: number; slug: string }>>(`/categories?slug=${categorySlug}`)
    if (!categories.length) return []
    const catId = categories[0].id
    const posts = await wpFetch<WPPost[]>(`/posts?_embed&categories=${catId}&per_page=20`)
    return posts.map(transformWPPost)
  } catch {
    return getArticlesByCategory(categorySlug)
  }
}

export async function getFeatured(): Promise<Article[]> {
  if (USE_MOCK) return getFeaturedArticles()
  try {
    const posts = await wpFetch<WPPost[]>('/posts?_embed&tags=featured&per_page=3')
    return posts.length ? posts.map(transformWPPost) : getFeaturedArticles()
  } catch {
    return getFeaturedArticles()
  }
}

export async function getEditors(): Promise<Article[]> {
  if (USE_MOCK) return getEditorsPicks()
  try {
    const posts = await wpFetch<WPPost[]>('/posts?_embed&tags=editors-pick&per_page=4')
    return posts.length ? posts.map(transformWPPost) : getEditorsPicks()
  } catch {
    return getEditorsPicks()
  }
}

export async function getRecent(limit = 6): Promise<Article[]> {
  if (USE_MOCK) return getRecentArticles(limit)
  try {
    const posts = await wpFetch<WPPost[]>(`/posts?_embed&per_page=${limit}&orderby=date&order=desc`)
    return posts.map(transformWPPost)
  } catch {
    return getRecentArticles(limit)
  }
}

export async function getAuthor(slug: string) {
  return getAuthorBySlug(slug) ?? null
}

export async function getAuthorArticles(slug: string) {
  return getArticlesByAuthorSlug(slug)
}

export { CATEGORIES, AUTHORS }
