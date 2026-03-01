import Fuse from 'fuse.js'
import { ARTICLES } from '@/lib/mockData'

const fuse = new Fuse(ARTICLES, {
  keys: [
    { name: 'title', weight: 3 },
    { name: 'subheading', weight: 1.5 },
    { name: 'excerpt', weight: 1 },
    { name: 'tags', weight: 1 },
    { name: 'author.name', weight: 0.8 },
    { name: 'category.name', weight: 0.8 },
  ],
  threshold: 0.4,
})

export async function POST(req: Request) {
  const { query } = await req.json()
  const results = query
    ? fuse.search(query).slice(0, 6).map(r => r.item)
    : []
  return Response.json(results)
}
