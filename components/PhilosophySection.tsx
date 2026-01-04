'use client'

import Link from './Link'

export default function PhilosophySection() {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="philosophy-section"
      className="w-full bg-gray-100 bg-cover bg-top bg-no-repeat px-4 py-12 sm:px-6 md:py-24 lg:py-32 xl:px-0 dark:bg-gray-900"
      style={{
        backgroundImage: 'url(/static/images/philosophy-image-bkgd-light.png)',
        minHeight: '100vh',
      }}
    >
      <style>{`
        .dark #philosophy-section {
          background-image: url(/static/images/philosophy-image-bkgd-dark.png) !important;
        }
      `}</style>
      <div className="mx-auto max-w-3xl xl:max-w-5xl">
        <div className="space-y-8">
          {/* Headline */}
          <h2 className="text-left text-4xl leading-[1.15] font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl dark:text-white">
            Good design scales across disciplines.
          </h2>

          {/* Body Points */}
          <div className="space-y-4">
            <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
              Design principles don't change. Only the medium does. I focus on outcomes, not
              artifacts.
            </p>
          </div>

          {/* CTA */}
          <div>
            <Link
              href="/about"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center gap-2 text-base leading-6 font-medium transition-colors"
              aria-label="Learn more about my approach"
            >
              Learn more about my approach
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586L10.293 4.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* Beyond UX/UI Image */}
          <div className="flex justify-start overflow-hidden pt-8">
            <img
              src="/static/images/beyond-ux-ui.png"
              alt="Design disciplines visualization"
              className="h-80 w-80 object-cover"
            />
          </div>
        </div>

        {/* Scroll Down Button */}
        <div className="flex justify-center pt-12">
          <button
            onClick={() => handleScroll('featured-work-section')}
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-black bg-white px-8 py-3 text-base font-medium text-black transition-colors hover:bg-gray-100 dark:border-white dark:bg-white dark:text-black dark:hover:bg-gray-100"
          >
            What I built
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
    </section>
  )
}
