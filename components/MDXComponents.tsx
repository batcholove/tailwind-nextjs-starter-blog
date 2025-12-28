import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import OutcomeCard from './OutcomeCard'
import ProjectImage from './ProjectImage'
import Timeline from './Timeline'

export const components: MDXComponents = {
  Image,
  ProjectImage,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  OutcomeCard,
  Timeline,
}
