'use client'

import { useState, useEffect } from 'react'
import Image from '@/components/Image'

interface ImageCarouselProps {
  images: { src: string; alt: string }[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setNextIndex((prev) =>
        prev === null ? (currentIndex === images.length - 1 ? 0 : currentIndex + 1) : prev
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [currentIndex, images.length])

  useEffect(() => {
    if (nextIndex !== null) {
      const timer = setTimeout(() => {
        setCurrentIndex(nextIndex)
        setNextIndex(null)
      }, 600) // Match animation duration
      return () => clearTimeout(timer)
    }
  }, [nextIndex])

  const displayNextIndex = nextIndex !== null ? nextIndex : currentIndex

  return (
    <div className="mt-8 w-full">
      <style>{`
        @keyframes slideInFromRight {
          from {
            opacity: 1;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideOutToLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 1;
            transform: translateX(-100%);
          }
        }
      `}</style>
      <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-950">
        {/* Current image sliding out to the left */}
        <div
          className="absolute inset-0 flex min-h-[400px] w-full items-center justify-center bg-white dark:bg-gray-950"
          style={{
            animation: nextIndex !== null ? 'slideOutToLeft 0.6s ease-out forwards' : 'none',
            zIndex: nextIndex !== null ? 1 : 2,
          }}
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={1000}
            height={800}
            className="h-auto max-w-full object-contain"
          />
        </div>

        {/* Next image sliding in from the right */}
        <div
          className="relative flex min-h-[400px] w-full items-center justify-center bg-white dark:bg-gray-950"
          style={{
            animation: nextIndex !== null ? 'slideInFromRight 0.6s ease-out' : 'none',
          }}
        >
          <Image
            src={images[displayNextIndex].src}
            alt={images[displayNextIndex].alt}
            width={1000}
            height={800}
            className="h-auto max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}
