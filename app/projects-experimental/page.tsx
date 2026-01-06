import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import SectionContainer from '@/components/SectionContainer'

export const metadata = genPageMetadata({ title: 'Projects Experimental' })

export default function ProjectsExperimental() {
  const section1Projects = projectsData.slice(0, 4)
  const section2Projects = projectsData.slice(4, 6)
  const section3Projects = projectsData.slice(6, 8)

  const renderProjectSection = (title: string, lead: string, projects: typeof projectsData) => (
    <div className="py-12 first:pt-0">
      <div className="mb-8 space-y-3">
        <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-9 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-lg leading-7 text-gray-600 dark:text-gray-300">{lead}</p>
      </div>
      <div className="-m-4 flex flex-wrap">
        {projects.map((d) => (
          <Card
            key={d.title}
            title={d.title}
            description={d.description}
            imgSrc={d.imgSrc}
            href={`/projects-experimental/${d.slug}`}
          />
        ))}
      </div>
    </div>
  )

  return (
    <>
      <SectionContainer>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
              Projects (Experimental)
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Experimenting with new project layout designs.
            </p>
          </div>
          <div className="container py-12">
            {renderProjectSection(
              'Strategy & Impact',
              'Full case studies showing strategy, process, and measurable impact.',
              section1Projects
            )}
            {renderProjectSection(
              'Execution & Design',
              'Applied projects and prototypes that demonstrate execution and craft.',
              section2Projects
            )}
            {renderProjectSection(
              'Collections',
              'Curated explorations, concepts, and thematic work.',
              section3Projects
            )}
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
