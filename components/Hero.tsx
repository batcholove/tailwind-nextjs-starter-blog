'use client'

import Link from './Link'
import TypingAnimation from './TypingAnimation'

export default function Hero() {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="space-y-2 px-4 pt-6 pb-8 sm:px-8 md:space-y-5 lg:px-20 xl:px-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        {/* Main heading */}
        <div className="space-y-3">
          <p className="text-lg font-bold text-black sm:text-xl md:text-2xl dark:text-white">
            Ryan Batch
          </p>
          <p className="text-4xl font-black text-black sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            Multidisciplinary Design Strategist
          </p>
          <h1 className="text-2xl leading-8 font-semibold tracking-tight text-black sm:text-3xl sm:leading-9 md:text-4xl md:leading-10 dark:text-white">
            I design outcomes across products and experiences{' '}
            <TypingAnimation
              prefix=""
              phrases={[
                'with teams.',
                'with people.',
                'with empathy.',
                'with intention.',
                'with strategy.',
              ]}
              speed={80}
              backspaceSpeed={40}
              delayBetweenPhrases={2000}
            />
          </h1>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
          <button
            onClick={() => handleScroll('philosophy-section')}
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            See how I work
          </button>
        </div>
      </div>
    </div>
  )
}
