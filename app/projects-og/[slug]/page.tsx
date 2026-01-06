import { notFound } from 'next/navigation'
import Link from 'next/link'
import { allProjects } from 'contentlayer/generated'
import projectsData from '@/data/projectsData'
import Image from '@/components/Image'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'

interface MDXProject {
  slug: string
  title: string
  description: string
  imgSrc?: string
  body: { code: string }
  [key: string]: unknown
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params

  // Try to find MDX project first
  let mdxProject: MDXProject | undefined
  try {
    const found = allProjects.find((p) => {
      const project = p as unknown as { slug?: string }
      return project.slug === slug
    })
    mdxProject = found as MDXProject | undefined
  } catch (e) {
    // Contentlayer not ready or project not found
  }

  // Fall back to projectsData
  const projectIndex = projectsData.findIndex((p) => p.slug === slug)
  const fallbackProject = projectsData[projectIndex]

  if (!mdxProject && !fallbackProject) return notFound()

  const project = mdxProject || fallbackProject
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

      {/* Render MDX content if available, otherwise fall back to description */}
      {mdxProject?.body?.code ? (
        <div className="prose dark:prose-invert mb-8 max-w-none">
          <MDXLayoutRenderer code={mdxProject.body.code} components={components} />
        </div>
      ) : (
        <p className="mb-8 text-lg">{project.description}</p>
      )}

      {/* Previous/Next Navigation */}
      <div className="mt-12 flex justify-between gap-8">
        {previousProject ? (
          <Link
            href={`/projects-og/${previousProject.slug}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center gap-2 transition-colors"
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
          <div />
        )}
        {nextProject ? (
          <Link
            href={`/projects-og/${nextProject.slug}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center gap-2 transition-colors"
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
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110 2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
