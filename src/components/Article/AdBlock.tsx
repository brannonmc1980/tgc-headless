interface AdBlockProps {
  variant?: 'inline' | 'sidebar' | 'leaderboard'
}

export default function AdBlock({ variant = 'inline' }: AdBlockProps) {
  if (variant === 'sidebar') {
    return (
      <div className="w-full">
        <div className="bg-stone-100 border border-stone-200 rounded-sm p-4 text-center">
          <p className="text-xs text-stone-400 font-ui uppercase tracking-widest mb-3">Advertisement</p>
          <div className="bg-stone-200 w-full h-60 flex items-center justify-center rounded-sm">
            <div className="text-center">
              <div className="text-stone-400 text-xs font-ui mb-1">300 × 250</div>
              <div className="text-stone-300 text-xs font-ui">Ad Placeholder</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'leaderboard') {
    return (
      <div className="my-8">
        <div className="bg-stone-100 border border-stone-200 rounded-sm p-3 text-center">
          <p className="text-xs text-stone-400 font-ui uppercase tracking-widest mb-2">Advertisement</p>
          <div className="bg-stone-200 w-full max-w-[728px] mx-auto h-24 flex items-center justify-center rounded-sm">
            <div className="text-stone-400 text-xs font-ui">728 × 90 Leaderboard</div>
          </div>
        </div>
      </div>
    )
  }

  // Inline
  return (
    <div className="my-10 not-prose">
      <div className="bg-stone-50 border border-stone-200 rounded-sm p-4 text-center">
        <p className="text-xs text-stone-400 font-ui uppercase tracking-widest mb-3">Advertisement</p>
        <div className="bg-stone-100 w-full max-w-[640px] mx-auto h-28 flex items-center justify-center rounded-sm border border-stone-200">
          <div className="text-center">
            <div className="text-stone-400 text-sm font-ui font-semibold">Your Ad Here</div>
            <div className="text-stone-300 text-xs font-ui mt-1">640 × 112</div>
          </div>
        </div>
      </div>
    </div>
  )
}
