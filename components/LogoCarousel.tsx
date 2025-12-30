'use client'

import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH

export interface Logo {
  src: string
  alt: string
  url?: string
}

interface LogosProps {
  logos: Logo[]
  title?: string
}

export default function LogoCarousel({ logos, title }: LogosProps) {
  return (
    <div className="w-full space-y-4">
      {title && (
        <h3 className="text-center text-sm font-semibold tracking-wide text-gray-600 uppercase dark:text-gray-400">
          {title}
        </h3>
      )}

      {/* Scrolling container */}
      <div className="overflow-hidden py-8">
        <div className="animate-scroll flex space-x-2">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`${index}-1`}
              className="flex h-32 w-48 flex-shrink-0 items-center justify-center"
            >
              {logo.url ? (
                <a
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 transition-opacity hover:opacity-100"
                >
                  <Image
                    src={`${basePath || ''}${logo.src}`}
                    alt={logo.alt}
                    width={128}
                    height={64}
                    className="h-full w-full object-contain dark:invert"
                  />
                </a>
              ) : (
                <Image
                  src={`${basePath || ''}${logo.src}`}
                  alt={logo.alt}
                  width={128}
                  height={64}
                  className="h-full w-full object-contain opacity-70 dark:invert"
                />
              )}
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`${index}-2`}
              className="flex h-32 w-48 flex-shrink-0 items-center justify-center"
            >
              {logo.url ? (
                <a
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 transition-opacity hover:opacity-100"
                >
                  <Image
                    src={`${basePath || ''}${logo.src}`}
                    alt={logo.alt}
                    width={128}
                    height={64}
                    className="h-full w-full object-contain dark:invert"
                  />
                </a>
              ) : (
                <Image
                  src={`${basePath || ''}${logo.src}`}
                  alt={logo.alt}
                  width={128}
                  height={64}
                  className="h-full w-full object-contain opacity-70 dark:invert"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-1800px);
          }
        }

        .animate-scroll {
          animation: scroll 25.2s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}
