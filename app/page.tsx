import Hero from '@/components/Hero'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { components } from '@/components/MDXComponents'

export const metadata = genPageMetadata({ title: 'Home' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      {/* Hero Section with full-width background */}
      <section
        id="hero-section"
        className="flex h-screen w-full items-center justify-center bg-cover bg-bottom bg-no-repeat px-4 sm:px-6 xl:px-0"
        style={{
          backgroundImage: 'url(/static/images/hero-image-bkgd.png)',
        }}
      >
        <div className="mx-4 max-w-3xl sm:mx-8 lg:mx-auto xl:max-w-5xl">
          <Hero />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="px-4 py-12 sm:px-6 xl:px-0">
        <div className="mx-auto max-w-3xl xl:max-w-5xl">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
                Projects
              </h2>
              <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                A collection of things I've designed and learned from over the course of my career.
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
                    href={d.href}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with full-width background */}
      <section
        id="about-section"
        className="w-full bg-gray-100 px-4 py-12 sm:px-6 xl:px-0 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-3xl xl:max-w-5xl">
          <AuthorLayout content={mainContent}>
            <MDXLayoutRenderer code={author.body.code} components={components} />
          </AuthorLayout>
        </div>
      </section>
    </>
  )
}
