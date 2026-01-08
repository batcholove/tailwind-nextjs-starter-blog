'use client'

import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

interface ImageWithCaptionProps extends ImageProps {
  caption?: string
}

const Image = ({ src, alt, caption, ...rest }: ImageWithCaptionProps) => {
  const fullSrc = `${basePath || ''}${src}`

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <NextImage src={fullSrc} alt={alt} {...rest} />
        {caption && (
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">{caption}</p>
        )}
      </div>
    </>
  )
}

export default Image
