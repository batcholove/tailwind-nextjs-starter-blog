import FeaturedCard from './FeaturedCard'
import Link from './Link'

interface FeaturedProject {
  title: string
  description: string
  imgSrc: string
  href: string
}

const featuredProjects: FeaturedProject[] = [
  {
    title: 'Growing UX Maturity',
    description: 'Scaling design across teams',
    imgSrc: '/static/images/ux-maturity-cover.png',
    href: '/projects/growing-ux-maturity',
  },
  {
    title: 'Design Systems',
    description: 'Consistency that accelerates delivery',
    imgSrc: '/static/images/design-systems-cover.gif',
    href: '/projects/design-systems',
  },
  {
    title: 'System Design',
    description: 'Connecting experiences end to end',
    imgSrc: '/static/images/system-design-cover.png',
    href: '/projects/system-design',
  },
]

export default function FeaturedWorkSection() {
  return (
    <section
      id="featured-work-section"
      className="w-full bg-white px-4 py-12 sm:px-6 md:py-24 lg:py-32 xl:px-0 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-3xl xl:max-w-5xl">
        <div className="space-y-8">
          {/* Headline */}
          <h2 className="text-4xl leading-[1.15] font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl dark:text-white">
            Selected work. Real outcomes.
          </h2>

          {/* Intro */}
          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            A snapshot of how strategy and design come together to create impact.
          </p>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <FeaturedCard
                key={project.title}
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                href={project.href}
              />
            ))}
          </div>

          {/* CTA */}
          <div>
            <Link
              href="/projects"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center gap-2 text-base leading-6 font-medium transition-colors"
              aria-label="Explore case studies"
            >
              Explore case studies
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
      </div>
    </section>
  )
}
