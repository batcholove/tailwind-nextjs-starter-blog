'use client'

import { useCallback } from 'react'
import Image from '@/components/Image'

interface ClickableBodyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  onImageClick?: (src: string) => void
  onAddImage?: (src: string, alt: string) => void
}

export default function ClickableBodyImage({
  src,
  alt,
  width = 1000,
  height = 600,
  onImageClick,
  onAddImage,
}: ClickableBodyImageProps) {
  const handleClick = useCallback(() => {
    // Add image to the collection if callback provided
    if (onAddImage) {
      onAddImage(src, alt)
    }
    // Trigger the overlay
    if (onImageClick) {
      onImageClick(src)
    }
  }, [src, alt, onImageClick, onAddImage])

  return (
    <div
      className="hover:border-primary-500 dark:hover:border-primary-400 my-8 w-full cursor-pointer overflow-hidden rounded-lg border-2 border-gray-300 transition-all duration-200 hover:shadow-lg dark:border-gray-600"
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick()
        }
      }}
      role="button"
      tabIndex={0}
    >
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full" />
    </div>
  )
}
