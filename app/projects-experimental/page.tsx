import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import SectionContainer from '@/components/SectionContainer'

export const metadata = genPageMetadata({ title: 'Projects Experimental' })

export default function ProjectsExperimental() {
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
            <div className="-m-4 flex flex-wrap">
              {projectsData.map((d) => (
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
        </div>
      </SectionContainer>
    </>
  )
}
