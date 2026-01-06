import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { components } from '@/components/MDXComponents'
import SectionContainer from '@/components/SectionContainer'
import Link from '@/components/Link'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <SectionContainer>
        <AuthorLayout content={mainContent}>
          <MDXLayoutRenderer code={author.body.code} components={components} />
        </AuthorLayout>
      </SectionContainer>

      {/* See My Work Button */}
      <div className="flex justify-center pb-12">
        <Link
          href="/#featured-work-section"
          className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-black bg-white px-8 py-3 text-base font-medium text-black transition-colors hover:bg-gray-100 dark:border-white dark:bg-white dark:text-black dark:hover:bg-gray-100"
        >
          See My Work
        </Link>
      </div>
    </>
  )
}
