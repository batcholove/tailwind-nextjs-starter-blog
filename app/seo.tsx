import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({ title, description, image, ...rest }: PageSEOProps): Metadata {
  // Use full URL for og:image to ensure proper sharing
  // Build timestamp: 2026-01-12
  const ogImage = image ? image : siteMetadata.socialBanner
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${siteMetadata.siteUrl}${ogImage}`

  return {
    title,
    description: description || siteMetadata.description,
    openGraph: {
      title: `Ryan Batch | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: './',
      siteName: siteMetadata.title,
      images: [ogImageUrl],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title: `Ryan Batch | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: [ogImageUrl],
    },
    ...rest,
  }
}
