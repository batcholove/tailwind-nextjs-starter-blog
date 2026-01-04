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
        <div className="flex flex-col items-start justify-start space-y-4 text-left">
          {/* Main heading */}
          <div className="space-y-3">
            <p className="hidden text-lg font-bold text-black sm:text-xl md:text-2xl dark:text-white">
              Ryan Batch
            </p>
            <p className="text-4xl font-black text-black sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
              Design Strategist
            </p>
            <h1 className="text-2xl leading-8 font-semibold tracking-tight text-black sm:text-3xl sm:leading-9 md:text-4xl md:leading-10 dark:text-white">
              I design outcomes across
              <br />
              products and experiences
              <br />
              <TypingAnimation
                prefix="with "
                phrases={['teams.', 'people.', 'empathy.', 'intention.', 'strategy.']}
                speed={80}
                backspaceSpeed={40}
                delayBetweenPhrases={2000}
              />
            </h1>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
            <button
              onClick={() => handleScroll('philosophy-section')}
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-black bg-white px-8 py-3 text-base font-medium text-black transition-colors hover:bg-gray-100 dark:border-white dark:bg-white dark:text-black dark:hover:bg-gray-100"
            >
              How it works
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
                style={{ transform: 'rotate(90deg)' }}
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586L10.293 4.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
