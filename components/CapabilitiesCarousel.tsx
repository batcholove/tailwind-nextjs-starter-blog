'use client'

import { useState, useRef, useEffect } from 'react'

interface Capability {
  title: string
  description: string
  icon: React.ReactNode
}

interface CapabilitiesCarouselProps {
  capabilities: Capability[]
}

export default function CapabilitiesCarousel({ capabilities }: CapabilitiesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3) // lg screens
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2) // md screens
      } else {
        setItemsPerView(1) // sm screens
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, capabilities.length - itemsPerView)

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setCurrentIndex(Math.min(currentIndex + 1, maxIndex))
    } else {
      setCurrentIndex(Math.max(currentIndex - 1, 0))
    }
  }

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current

      // If at the last slide, scroll to the end of the container
      if (currentIndex === maxIndex) {
        container.scrollTo({
          left: container.scrollWidth - container.offsetWidth,
          behavior: 'smooth',
        })
      } else {
        const cardWidth = container.offsetWidth / itemsPerView
        const gap = 24 // gap-6 = 1.5rem = 24px
        const totalCardWidth = cardWidth + gap
        const scrollAmount = currentIndex * totalCardWidth

        container.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        })
      }
    }
  }, [currentIndex, itemsPerView, maxIndex])

  return (
    <div className="space-y-6">
      {/* Carousel Container with Side Buttons */}
      <div className="relative flex items-center gap-4">
        {/* Left Button */}
        <button
          onClick={() => scroll('left')}
          disabled={currentIndex === 0}
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 flex-shrink-0 rotate-180 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Scroll left"
        >
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
        </button>

        {/* Carousel */}
        <div className="flex-grow overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth"
          >
            {capabilities.map((capability) => (
              <div key={capability.title} className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/3">
                <div className="flex h-48 flex-col rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                  <div className="text-primary-500 dark:text-primary-400 mb-3">
                    {capability.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    {capability.title}
                  </h3>
                  <p className="flex-grow text-gray-700 dark:text-gray-300">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll('right')}
          disabled={currentIndex === maxIndex}
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 flex-shrink-0 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Scroll right"
        >
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
        </button>
      </div>

      {/* Indicator Dots - Centered Below */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-6 bg-black dark:bg-white'
                : 'w-2 bg-gray-300 dark:bg-gray-700'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
