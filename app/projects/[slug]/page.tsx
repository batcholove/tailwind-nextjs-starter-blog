import { notFound } from 'next/navigation'
import projectsData from '@/data/projectsData'
import Image from '@/components/Image'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)
  if (!project) return notFound()

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
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
      {project.href && (
        <a
          href={project.href}
          className="bg-primary-500 hover:bg-primary-600 inline-block rounded px-6 py-2 text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit project
        </a>
      )}
    </div>
  )
}
