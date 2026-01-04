'use client'

import Link from './Link'
import CapabilitiesCarousel from './CapabilitiesCarousel'

interface Capability {
  title: string
  description: string
  icon: React.ReactNode
}

const capabilities: Capability[] = [
  {
    title: 'Product & UX Design',
    description: 'Designing intuitive, usable products that balance user needs and business goals.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-8 w-8"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="9" y1="9" x2="15" y2="9"></line>
        <line x1="9" y1="15" x2="15" y2="15"></line>
      </svg>
    ),
  },
  {
    title: 'Design Systems',
    description: 'Creating shared foundations that improve consistency, quality, and speed.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-8 w-8"
      >
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
    ),
  },
  {
    title: 'Service Design',
    description: 'Mapping and improving experiences across channels, teams, and touchpoints.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-8 w-8"
      >
        <circle cx="6" cy="6" r="2"></circle>
        <circle cx="18" cy="6" r="2"></circle>
        <circle cx="12" cy="18" r="2"></circle>
        <line x1="6" y1="8" x2="12" y2="16"></line>
        <line x1="18" y1="8" x2="12" y2="16"></line>
      </svg>
    ),
  },
  {
    title: 'Strategy & Facilitation',
    description: 'Helping teams align, make decisions, and move forward with clarity.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-8 w-8"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
  },
  {
    title: 'Cross-Disciplinary Design',
    description: 'Applying core design principles across digital, physical, and experiential work.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-8 w-8"
      >
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="12" cy="18" r="3"></circle>
        <path d="M9 9 L15 9 M6 9 L12 15 M18 9 L12 15"></path>
      </svg>
    ),
  },
  {
    title: 'Human-Centered Research',
    description: 'Grounding decisions in real user insight, not assumptions.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-8 w-8"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
]

export default function CapabilitiesSection() {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="capabilities-section"
      className="w-full bg-gray-100 bg-cover bg-top bg-no-repeat px-4 py-12 sm:px-6 md:py-24 lg:py-32 xl:px-0 dark:bg-gray-900"
      style={{
        backgroundImage: 'url(/static/images/philosophy-image-bkgd-light.png)',
        minHeight: '100vh',
      }}
    >
      <style>{`
        .dark #capabilities-section {
          background-image: url(/static/images/philosophy-image-bkgd-dark.png) !important;
        }
      `}</style>
      <div className="mx-auto max-w-3xl xl:max-w-5xl">
        <div className="space-y-8">
          {/* Headline */}
          <h2 className="text-4xl leading-[1.15] font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl dark:text-white">
            How I add value.
          </h2>

          {/* Intro */}
          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            A multidisciplinary skill set grounded in consistent design thinking.
          </p>

          {/* Capabilities Carousel */}
          <CapabilitiesCarousel capabilities={capabilities} />

          {/* CTA */}
          <div>
            <Link
              href="/projects"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center gap-2 text-base leading-6 font-medium transition-colors"
              aria-label="See how these skills show up in real work"
            >
              See how these skills show up in real work
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
        </div>

        {/* Scroll Down Button - scrolls to bottom of page or footer */}
        <div className="flex justify-center pt-12">
          <button
            onClick={() => {
              // Scroll to bottom of page or footer
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
            }}
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-black bg-white px-8 py-3 text-base font-medium text-black transition-colors hover:bg-gray-100 dark:border-white dark:bg-white dark:text-black dark:hover:bg-gray-100"
          >
            Continue
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
