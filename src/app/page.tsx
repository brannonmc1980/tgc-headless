import { getFeatured, getEditors, getRecent, getArticlesBycat, CATEGORIES } from '@/lib/api'
import HeroSection from '@/components/Home/HeroSection'
import EditorsPicks from '@/components/Home/EditorsPicks'
import CategorySection from '@/components/Home/CategorySection'
import TrendingSection from '@/components/Home/TrendingSection'
import AdBlock from '@/components/Article/AdBlock'

export default async function HomePage() {
  const [featured, editorsPicks, recent] = await Promise.all([
    getFeatured(),
    getEditors(),
    getRecent(8),
  ])

  // Load articles for key categories
  const bibleTheologyArticles = await getArticlesBycat('bible-theology')
  const christianLivingArticles = await getArticlesBycat('christian-living')
  const artsArticles = await getArticlesBycat('arts-culture')
  const currentEventsArticles = await getArticlesBycat('current-events')
  const faithWorkArticles = await getArticlesBycat('faith-work')

  const bibleCategory = CATEGORIES.find(c => c.slug === 'bible-theology')!
  const christianCategory = CATEGORIES.find(c => c.slug === 'christian-living')!
  const artsCategory = CATEGORIES.find(c => c.slug === 'arts-culture')!
  const currentCategory = CATEGORIES.find(c => c.slug === 'current-events')!
  const faithCategory = CATEGORIES.find(c => c.slug === 'faith-work')!

  return (
    <>
      {/* Hero */}
      <HeroSection featured={featured} recent={recent} />

      {/* Top leaderboard ad */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <AdBlock variant="leaderboard" />
      </div>

      {/* Editors' Picks */}
      <EditorsPicks articles={editorsPicks} />

      {/* Bible & Theology */}
      {bibleTheologyArticles.length > 0 && (
        <CategorySection category={bibleCategory} articles={bibleTheologyArticles} />
      )}

      {/* Trending */}
      <TrendingSection articles={recent.slice(0, 4)} />

      {/* Christian Living */}
      {christianLivingArticles.length > 0 && (
        <CategorySection category={christianCategory} articles={christianLivingArticles} />
      )}

      {/* Mid-page ad */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <AdBlock variant="leaderboard" />
      </div>

      {/* Arts & Culture */}
      {artsArticles.length > 0 && (
        <CategorySection category={artsCategory} articles={artsArticles} />
      )}

      {/* Current Events */}
      {currentEventsArticles.length > 0 && (
        <CategorySection category={currentCategory} articles={currentEventsArticles} />
      )}

      {/* Faith & Work */}
      {faithWorkArticles.length > 0 && (
        <CategorySection category={faithCategory} articles={faithWorkArticles} />
      )}

      {/* Bottom leaderboard ad */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <AdBlock variant="leaderboard" />
      </div>
    </>
  )
}
