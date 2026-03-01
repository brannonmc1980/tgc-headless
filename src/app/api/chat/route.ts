import Anthropic from '@anthropic-ai/sdk'
import Fuse from 'fuse.js'
import { ARTICLES } from '@/lib/mockData'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

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
  const { messages, query } = await req.json()

  const matchedArticles = query
    ? fuse.search(query).slice(0, 6).map(r => r.item)
    : []

  const articleContext = matchedArticles.length
    ? matchedArticles
        .map(
          a =>
            `- "${a.title}" by ${a.author.name} (${a.category.name}): ${a.excerpt}`
        )
        .join('\n')
    : 'No specific articles matched this query.'

  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const response = anthropic.messages.stream({
          model: 'claude-sonnet-4-6',
          max_tokens: 1024,
          system: `You are a helpful assistant for The Gospel Coalition (TGC), a Reformed evangelical Christian ministry. Help users explore content on the TGC website. Answer questions clearly and warmly, grounded in Scripture and Reformed theology. Keep answers concise (2-4 paragraphs).

When referencing TGC articles, mention them naturally by title. Do not fabricate articles.

Relevant TGC articles for this query:
${articleContext}`,
          messages,
        })

        for await (const event of response) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(event.delta.text))
          }
        }
      } catch (err) {
        controller.enqueue(
          encoder.encode('Sorry, I encountered an error. Please try again.')
        )
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
    },
  })
}
