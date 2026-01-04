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
        <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
          <button
            onClick={() => handleScroll('philosophy-section')}
            className="bg-primary-700 hover:bg-primary-800 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 inline-flex items-center justify-center gap-2 rounded-md px-8 py-3 text-base font-medium text-white transition-colors"
          >
            See how I work
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
  )
}
