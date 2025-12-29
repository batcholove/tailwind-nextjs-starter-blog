'use client'

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
      <div className="overflow-hidden rounded-lg bg-gray-50 py-8 dark:bg-gray-900/50">
        <div className="animate-scroll flex space-x-12">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`${index}-1`}
              className="flex h-16 w-32 flex-shrink-0 items-center justify-center"
            >
              {logo.url ? (
                <a
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 transition-opacity hover:opacity-100"
                >
                  <img src={logo.src} alt={logo.alt} className="h-full w-full object-contain" />
                </a>
              ) : (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-full object-contain opacity-70"
                />
              )}
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`${index}-2`}
              className="flex h-16 w-32 flex-shrink-0 items-center justify-center"
            >
              {logo.url ? (
                <a
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 transition-opacity hover:opacity-100"
                >
                  <img src={logo.src} alt={logo.alt} className="h-full w-full object-contain" />
                </a>
              ) : (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-full object-contain opacity-70"
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
            transform: translateX(calc(-100% / 2));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
