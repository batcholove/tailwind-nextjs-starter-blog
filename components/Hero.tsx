'use client'

import Link from './Link'

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
          <h1 className="text-4xl leading-9 font-extrabold tracking-tight text-black sm:text-5xl sm:leading-10 md:text-6xl md:leading-14 dark:text-white">
            Transformative design starts with listening
          </h1>
          <p className="text-xl leading-8 text-black dark:text-white">
            I partner with teams and organizations to unlock clarity in complexity and shape
            experiences that resonate with real people.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
          <button
            onClick={() => handleScroll('about-section')}
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Learn More
          </button>
          <button
            onClick={() => handleScroll('projects-section')}
            className="inline-flex items-center justify-center rounded-md border border-gray-900 px-8 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:border-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
          >
            View Work
          </button>
        </div>
      </div>
    </div>
  )
}
