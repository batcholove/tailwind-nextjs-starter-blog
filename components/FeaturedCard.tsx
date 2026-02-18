'use client'

import Image from './Image'
import Link from './Link'

const FeaturedCard = ({ title, description, imgSrc, href }) => {
  const handleMouseDown = (e) => {
    // Allow text selection - don't navigate if user is selecting text
    const selection = window.getSelection()
    if (selection && selection.toString()) {
      e.preventDefault()
    }
  }

  return (
    <div onMouseDown={handleMouseDown} role="presentation">
      <Link
        href={href}
        aria-label={`Link to ${title}`}
        className="group h-full w-full focus-visible:outline-none"
      >
        <div className="group-hover:border-primary-500 group-focus-visible:border-primary-500 dark:group-hover:border-primary-400 dark:group-focus-visible:border-primary-400 flex h-full cursor-pointer flex-col overflow-hidden rounded-md border-2 border-gray-300 bg-white transition-all duration-200 group-hover:shadow-lg group-focus-visible:shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:group-hover:shadow-lg dark:group-focus-visible:shadow-lg">
          {imgSrc && (
            <>
              {imgSrc.endsWith('.gif') ? (
                <img
                  alt={title}
                  src={imgSrc}
                  className="h-auto w-full object-cover object-center md:h-36 lg:h-48"
                  style={{ display: 'block' }}
                />
              ) : (
                <Image
                  alt={title}
                  src={imgSrc}
                  className="object-cover object-center md:h-36 lg:h-48"
                  width={544}
                  height={306}
                />
              )}
            </>
          )}
          <div className="flex flex-grow flex-col p-6">
            <div className="flex-grow">
              <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight text-black dark:text-white">
                {title}
              </h2>
              <p className="prose max-w-none text-gray-500 dark:text-gray-400">{description}</p>
            </div>
            <div className="mt-4 flex justify-start">
              <div className="group-hover:border-primary-500 group-hover:bg-primary-50 group-focus-visible:border-primary-500 group-focus-visible:bg-primary-50 dark:group-hover:border-primary-400 dark:group-focus-visible:border-primary-400 inline-flex items-center justify-center rounded-full border-2 border-gray-300 bg-gray-50 p-2 transition-all dark:border-gray-600 dark:bg-gray-700 dark:group-hover:bg-gray-600 dark:group-focus-visible:bg-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-gray-700 dark:text-gray-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FeaturedCard
