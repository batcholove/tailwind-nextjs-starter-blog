import { notFound } from 'next/navigation'
import Link from 'next/link'
import projectsData from '@/data/projectsData'
import Image from '@/components/Image'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const projectIndex = projectsData.findIndex((p) => p.slug === slug)
  const project = projectsData[projectIndex]

  if (!project) return notFound()

  const previousProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {/* Back to Projects Button */}
      <Link
        href="/projects"
        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mb-8 inline-flex items-center gap-2 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to projects
      </Link>

      <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>
      {project.imgSrc && (
        <Image
          src={project.imgSrc}
          alt={project.title}
          width={800}
          height={400}
          className="mb-6 rounded-lg"
        />
      )}
      <p className="mb-8 text-lg">{project.description}</p>

      {/* Previous/Next Navigation */}
      <div className="mt-12 flex gap-4">
        {previousProject ? (
          <Link
            href={`/projects/${previousProject.slug}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex flex-1 items-center justify-center gap-2 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Previous project
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex flex-1 items-center justify-center gap-2 transition-colors"
          >
            Next project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  )
}
