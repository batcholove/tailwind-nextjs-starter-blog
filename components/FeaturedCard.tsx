import Image from './Image'
import Link from './Link'

const FeaturedCard = ({ title, description, imgSrc, href }) => (
  <Link href={href} aria-label={`Link to ${title}`} className="h-full w-full">
    <div className="flex h-full cursor-pointer flex-col overflow-hidden rounded-md border-2 border-gray-200/60 bg-white transition-all duration-200 hover:border-gray-300 hover:shadow-lg dark:border-gray-700/60 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:shadow-lg">
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
      <div className="flex-grow p-6">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight text-black dark:text-white">
          {title}
        </h2>
        <p className="prose max-w-none text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  </Link>
)

export default FeaturedCard
