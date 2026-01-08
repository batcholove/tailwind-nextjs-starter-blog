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
    <section className="w-full px-4 py-12 sm:px-6 md:py-24 lg:py-32 xl:px-0">
      <div className="mx-auto max-w-3xl xl:max-w-5xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {/* Main heading */}
          <div className="space-y-3">
            <p className="text-lg font-bold text-black sm:text-xl md:text-2xl dark:text-white">
              I'm Ryan Batch,
            </p>
            <p
              className="text-5xl font-black text-black sm:text-6xl md:text-7xl lg:text-8xl dark:text-white"
              style={{ fontWeight: 900 }}
            >
              a Design
              <br />
              Strategist.
            </p>
            <h1 className="text-3xl leading-10 font-semibold tracking-tight text-black sm:text-4xl sm:leading-12 md:text-5xl md:leading-14 dark:text-white">
              I craft outcomes
              <br />
              <TypingAnimation
                prefix=""
                phrases={['with people.', 'with empathy.', 'with intention.', 'that matter.']}
                speed={80}
                backspaceSpeed={40}
                delayBetweenPhrases={2000}
              />
            </h1>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
            <button
              onClick={() => handleScroll('featured-work-section')}
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-black bg-white px-8 py-3 text-base font-medium text-black transition-colors hover:bg-gray-100 dark:border-white dark:bg-white dark:text-black dark:hover:bg-gray-100"
            >
              See My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
