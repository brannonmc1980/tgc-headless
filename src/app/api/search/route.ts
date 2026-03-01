import Fuse from 'fuse.js'
import { ARTICLES } from '@/lib/mockData'

const STOP_WORDS = new Set([
  'what', 'does', 'the', 'a', 'an', 'is', 'are', 'how', 'why', 'when',
  'where', 'who', 'which', 'that', 'this', 'to', 'of', 'in', 'on', 'for',
  'with', 'and', 'or', 'but', 'about', 'from', 'by', 'can', 'will', 'would',
  'should', 'say', 'says', 'do', 'did', 'tell', 'me', 'us', 'our', 'your',
  'my', 'we', 'it', 'its', 'be', 'been', 'have', 'has', 'had', 'at', 'as',
  'if', 'so', 'than', 'then', 'there', 'their', 'they', 'think', 'know',
  'make', 'get', 'go', 'just', 'like', 'also', 'more', 'into', 'he', 'she',
])

const fuse = new Fuse(ARTICLES, {
  keys: [
    { name: 'title', weight: 4 },
    { name: 'subheading', weight: 2 },
    { name: 'tags', weight: 2 },
    { name: 'excerpt', weight: 1.5 },
    { name: 'content', weight: 1 },
    { name: 'category.name', weight: 1 },
    { name: 'author.name', weight: 0.5 },
  ],
  threshold: 0.45,
  includeScore: true,
})

function searchArticles(query: string) {
  const seen = new Set<number>()
  const results: typeof ARTICLES = []

  function addResult(article: typeof ARTICLES[number]) {
    if (!seen.has(article.id)) {
      seen.add(article.id)
      results.push(article)
    }
  }

  // 1. Full query search
  fuse.search(query).forEach(r => addResult(r.item))

  // 2. Search individual meaningful words
  const words = query
    .toLowerCase()
    .replace(/[^a-z\s]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 3 && !STOP_WORDS.has(w))

  for (const word of words) {
    fuse.search(word).forEach(r => addResult(r.item))
    if (results.length >= 6) break
  }

  return results.slice(0, 6)
}

export async function POST(req: Request) {
  const { query } = await req.json()
  const results = query ? searchArticles(query) : []
  return Response.json(results)
}
