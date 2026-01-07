'use client'

import Link from 'next/link'
import Image from '@/components/Image'
import ImageCarousel from '@/components/ImageCarousel'

interface ExperimentalProjectDetailProps {
  project: {
    title: string
    subtitle?: string
    description: string
    imgSrc?: string
    role?: string[]
    focus?: string[]
    outcome?: string
    overview?: string
    challenge?: string
    approach?: string
    whatChanged?: string
    whyMatters?: string
  }
  previousProject?: { title: string; slug: string } | null
  nextProject?: { title: string; slug: string } | null
}

// Helper function to parse bold markdown syntax and HTML anchors
function parseBoldText(text: string) {
  // First handle HTML anchor tags (both with and without strong tags)
  const anchorRegex =
    /<a\s+href=["']([^"']+)["']\s+(?:target=["']([^"']+)["']\s+)?(?:rel=["']([^"']+)["']\s+)?class=["']([^"']+)["']\s*>\s*(?:<strong>)?([^<]+)(?:<\/strong>)?\s*<\/a>/g
  const anchorMatches = Array.from(text.matchAll(anchorRegex))

  if (anchorMatches.length > 0) {
    const parts: Array<string | React.ReactNode> = []
    let lastIndex = 0

    anchorMatches.forEach((match) => {
      const href = match[1]
      const target = match[2]
      const rel = match[3]
      const className = match[4]
      const linkText = match[5]
      const matchStart = match.index!

      // Add text before anchor (with bold parsing)
      if (matchStart > lastIndex) {
        const textBefore = text.substring(lastIndex, matchStart)
        const boldParts = textBefore.split(/(\*\*.*?\*\*)/g)
        boldParts.forEach((part, idx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            parts.push(<strong key={`bold-${lastIndex}-${idx}`}>{part.slice(2, -2)}</strong>)
          } else if (part) {
            parts.push(part)
          }
        })
      }

      // Add anchor tag
      parts.push(
        <a
          key={`anchor-${matchStart}`}
          href={href}
          target={target || undefined}
          rel={rel || undefined}
          className={className}
        >
          <strong>{linkText}</strong>
        </a>
      )

      lastIndex = matchStart + match[0].length
    })

    // Add remaining text (with bold parsing)
    if (lastIndex < text.length) {
      const textAfter = text.substring(lastIndex)
      const boldParts = textAfter.split(/(\*\*.*?\*\*)/g)
      boldParts.forEach((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          parts.push(<strong key={`bold-${lastIndex}-${idx}`}>{part.slice(2, -2)}</strong>)
        } else if (part) {
          parts.push(part)
        }
      })
    }

    return parts
  }

  // Fall back to simple bold parsing if no anchors
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={idx}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

// Helper function to parse bold markdown syntax and links
function parseBoldAndLinks(text: string) {
  // First handle links: [LINK:text|url]
  const linkRegex = /\[LINK:([^|]+)\|([^\]]+)\]/g
  const linkMatches = Array.from(text.matchAll(linkRegex))

  if (linkMatches.length === 0) {
    // No links, just parse bold
    return parseBoldText(text)
  }

  const parts: Array<string | React.ReactNode> = []
  let lastIndex = 0

  // Process links
  linkMatches.forEach((match) => {
    const linkText = match[1]
    const linkUrl = match[2]
    const matchStart = match.index!

    // Add text before link (with bold parsing)
    if (matchStart > lastIndex) {
      const textBefore = text.substring(lastIndex, matchStart)
      parts.push(parseBoldText(textBefore))
    }

    // Add link
    parts.push(
      <a
        key={`link-${matchStart}`}
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 underline"
      >
        {linkText}
      </a>
    )

    lastIndex = match.index! + match[0].length
  })

  // Add remaining text (with bold parsing)
  if (lastIndex < text.length) {
    const textAfter = text.substring(lastIndex)
    parts.push(parseBoldText(textAfter))
  }

  return parts
}

// Helper function to parse text with bullets and line breaks
function parseTextWithBullets(text: string) {
  const parts = text.split('\n').filter((part) => part.trim())

  return parts.map((part, idx) => {
    if (part.trim().startsWith('•')) {
      const bulletText = part.trim().substring(1).trim()
      return (
        <li
          key={idx}
          className="ml-4 list-inside list-disc text-lg text-gray-700 dark:text-gray-300"
        >
          {parseBoldText(bulletText)}
        </li>
      )
    }
    return (
      <p key={idx} className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        {parseBoldText(part.trim())}
      </p>
    )
  })
}

// Helper function to parse approach section with subsection headers
function parseApproachSection(text: string) {
  const sections = text.split('##').filter((s) => s.trim())

  // Define carousel images
  const carouselImages = {
    'skills-mapping': [
      { src: '/static/images/skills-mapping-overall.png', alt: 'Skills mapping overall' },
      { src: '/static/images/skills-mapping-core.png', alt: 'Skills mapping core' },
      { src: '/static/images/skills-mapping-research.png', alt: 'Skills mapping research' },
      { src: '/static/images/skills-mapping-visual.png', alt: 'Skills mapping visual' },
      { src: '/static/images/skills-mapping-interaction.png', alt: 'Skills mapping interaction' },
      { src: '/static/images/skills-mapping-content.png', alt: 'Skills mapping content' },
      { src: '/static/images/skills-mapping-leadership.png', alt: 'Skills mapping leadership' },
    ],
    'system-design': [
      { src: '/static/images/system-design-carousel-1.png', alt: 'System Design Carousel 1' },
      { src: '/static/images/system-design-carousel-2.png', alt: 'System Design Carousel 2' },
      { src: '/static/images/system-design-carousel-3.png', alt: 'System Design Carousel 3' },
    ],
  }

  // Define single images
  const singleImages = {
    'beyond-ux-ui': {
      src: '/static/images/beyond-ux-ui.png',
      alt: 'Beyond UX and UI',
    },
    'ux-maturity-assessment': {
      src: '/static/images/ux-maturity-assessment.png',
      alt: 'UX Maturity Assessment',
    },
    'system-design-mapping': {
      src: '/static/images/system-design-mapping.png',
      alt: 'System Design Mapping',
    },
  }

  return sections.map((section, idx) => {
    const lines = section
      .trim()
      .split('\n')
      .filter((l) => l.trim())

    // For the first section (idx === 0), it's the introduction paragraph
    if (idx === 0) {
      const contentText = lines.join('\n')

      // Check for carousel markers
      const carouselMatch = contentText.match(/\[CAROUSEL:([^\]]+)\]/)
      const hasCarousel = !!carouselMatch
      const carouselType = carouselMatch?.[1]

      // Check for image markers
      const imageMatch = contentText.match(/\[IMAGE:([^\]]+)\]/)
      const hasImage = !!imageMatch
      const imageType = imageMatch?.[1]

      if (hasCarousel || hasImage) {
        const parts = contentText.split(/\[(?:CAROUSEL|IMAGE):[^\]]+\]/)
        const textBefore = parts[0].trim()
        const textAfter = parts[1]?.trim() || ''

        return (
          <div key={idx}>
            {textBefore && (
              <div className="mb-8 space-y-2">
                {textBefore
                  .split('\n')
                  .filter((l) => l.trim())
                  .map((line, lineIdx) => (
                    <p
                      key={`intro-${lineIdx}`}
                      className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                    >
                      {parseBoldText(line.trim())}
                    </p>
                  ))}
              </div>
            )}
            {hasCarousel && carouselImages[carouselType as keyof typeof carouselImages] && (
              <div className="my-8">
                <ImageCarousel
                  images={carouselImages[carouselType as keyof typeof carouselImages]}
                />
              </div>
            )}
            {hasImage && singleImages[imageType as keyof typeof singleImages] && (
              <div className="my-8 w-full">
                <Image
                  src={singleImages[imageType as keyof typeof singleImages].src}
                  alt={singleImages[imageType as keyof typeof singleImages].alt}
                  width={1000}
                  height={600}
                  className="h-auto w-full rounded-lg"
                />
              </div>
            )}
            {textAfter && (
              <div className="space-y-2">
                {textAfter
                  .split('\n')
                  .filter((l) => l.trim())
                  .map((line, lineIdx) => (
                    <p
                      key={`intro-after-${lineIdx}`}
                      className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                    >
                      {parseBoldText(line.trim())}
                    </p>
                  ))}
              </div>
            )}
          </div>
        )
      }

      return (
        <div key={idx}>
          <div className="space-y-2">
            {lines.map((line, lineIdx) => {
              const trimmedLine = line.trim()
              if (trimmedLine) {
                return (
                  <p
                    key={`intro-${lineIdx}`}
                    className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                  >
                    {parseBoldText(trimmedLine)}
                  </p>
                )
              }
              return null
            })}
          </div>
        </div>
      )
    }

    // For subsequent sections, treat as subsection with header
    const title = lines[0].trim()
    const contentText = lines.slice(1).join('\n')

    // Split content by carousel markers
    const carouselMatch = contentText.match(/\[CAROUSEL:([^\]]+)\]/)
    const hasCarousel = !!carouselMatch
    const carouselType = carouselMatch?.[1]

    // Split content by image markers
    const imageMatch = contentText.match(/\[IMAGE:([^\]]+)\]/)
    const hasImage = !!imageMatch
    const imageType = imageMatch?.[1]

    // Split content into before and after carousel/image
    let contentBefore: string[] = []
    let contentAfter: string[] = []
    let carouselContent: { src: string; alt: string }[] | null = null
    let imageContent: { src: string; alt: string } | null = null

    if (hasCarousel) {
      const parts = contentText.split(/\[CAROUSEL:[^\]]+\]/)
      contentBefore = parts[0]
        .trim()
        .split('\n')
        .filter((l) => l.trim())
      contentAfter =
        parts[1]
          ?.trim()
          .split('\n')
          .filter((l) => l.trim()) || []
      carouselContent = carouselImages[carouselType as keyof typeof carouselImages] || null
    } else if (hasImage) {
      const parts = contentText.split(/\[IMAGE:[^\]]+\]/)
      contentBefore = parts[0]
        .trim()
        .split('\n')
        .filter((l) => l.trim())
      contentAfter =
        parts[1]
          ?.trim()
          .split('\n')
          .filter((l) => l.trim()) || []
      imageContent = singleImages[imageType as keyof typeof singleImages] || null
    } else {
      contentBefore = contentText
        .trim()
        .split('\n')
        .filter((l) => l.trim())
    }

    return (
      <div
        key={idx}
        className={idx > 0 ? 'mt-8 border-t border-gray-200 pt-8 dark:border-gray-700' : ''}
      >
        <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <div className="space-y-2">
          {contentBefore.map((line, lineIdx) => {
            const trimmedLine = line.trim()
            if (trimmedLine.startsWith('•')) {
              const bulletText = trimmedLine.substring(1).trim()
              return (
                <li
                  key={`before-${lineIdx}`}
                  className="ml-4 list-inside list-disc text-lg text-gray-700 dark:text-gray-300"
                >
                  {parseBoldAndLinks(bulletText)}
                </li>
              )
            }
            return trimmedLine ? (
              <p
                key={`before-${lineIdx}`}
                className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              >
                {parseBoldText(trimmedLine)}
              </p>
            ) : null
          })}
        </div>
        {carouselContent && <ImageCarousel images={carouselContent} />}
        {imageContent && (
          <div className="hover:border-primary-500 dark:hover:border-primary-400 mt-8 w-full overflow-hidden rounded-lg border-2 border-gray-300 transition-all duration-200 hover:shadow-lg dark:border-gray-600">
            <Image
              src={imageContent.src}
              alt={imageContent.alt}
              width={1000}
              height={600}
              className="h-auto w-full"
            />
          </div>
        )}
        {contentAfter.length > 0 && (
          <div className="mt-6 space-y-2">
            {contentAfter.map((line, lineIdx) => {
              const trimmedLine = line.trim()
              if (trimmedLine.startsWith('•')) {
                const bulletText = trimmedLine.substring(1).trim()
                return (
                  <li
                    key={`after-${lineIdx}`}
                    className="ml-4 list-inside list-disc text-lg text-gray-700 dark:text-gray-300"
                  >
                    {parseBoldAndLinks(bulletText)}
                  </li>
                )
              }
              return trimmedLine ? (
                <p
                  key={`after-${lineIdx}`}
                  className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                >
                  {parseBoldText(trimmedLine)}
                </p>
              ) : null
            })}
          </div>
        )}
      </div>
    )
  })
}

export default function ExperimentalProjectDetail({
  project,
  previousProject,
  nextProject,
}: ExperimentalProjectDetailProps) {
  return (
    <div className="w-full">
      {/* Back to Projects Button */}
      <div className="mx-auto max-w-5xl px-4 pt-8 pb-4 sm:px-6">
        <Link
          href="/projects-experimental"
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
          Back to projects
        </Link>
      </div>

      {/* Hero Section with Summary */}
      <div className="relative w-full">
        {/* Background image with 50% opacity */}
        {project.imgSrc && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${project.imgSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.5,
            }}
          ></div>
        )}

        {/* Background overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-32">
          {/* Title and Subtitle */}
          <div className="mb-12 space-y-4">
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-xl font-medium text-gray-100 md:text-2xl">{project.subtitle}</p>
            )}
          </div>

          {/* About the Project */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">About the project</h2>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-100">
                {project.description}
              </p>
            </div>

            {/* Three-Column Info Block */}
            {(project.role || project.focus || project.outcome) && (
              <div className="grid gap-8 border-t border-white/20 pt-6 md:grid-cols-3">
                {project.role && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white">Role</h3>
                    <ul className="space-y-2 text-base text-gray-100">
                      {project.role.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.focus && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white">Focus</h3>
                    <ul className="space-y-2 text-base text-gray-100">
                      {project.focus.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.outcome && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white">Outcome</h3>
                    <p className="text-base leading-relaxed text-gray-100">{project.outcome}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="w-full space-y-0">
        {/* Project Overview */}
        {project.overview && (
          <section className="w-full bg-white py-16 md:py-24 dark:bg-gray-950">
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Project Overview
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {parseBoldText(project.overview)}
              </p>
            </div>
          </section>
        )}

        {/* The Challenge */}
        {project.challenge && (
          <section className="w-full bg-gray-50 py-16 md:py-24 dark:bg-gray-900">
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                The Challenge
              </h2>
              <ul className="space-y-2">{parseTextWithBullets(project.challenge)}</ul>
            </div>
          </section>
        )}

        {/* The Approach */}
        {project.approach && (
          <section className="w-full bg-white py-16 md:py-24 dark:bg-gray-950">
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                The Approach
              </h2>
              <div>{parseApproachSection(project.approach)}</div>
            </div>
          </section>
        )}

        {/* What Changed */}
        {project.whatChanged && (
          <section className="w-full bg-gray-50 py-16 md:py-24 dark:bg-gray-900">
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                What Changed
              </h2>
              <ul className="space-y-2">
                {(() => {
                  // Check for carousel
                  const carouselMatch = project.whatChanged.match(/\[CAROUSEL:([^\]]+)\]/)
                  if (carouselMatch) {
                    const carouselType = carouselMatch[1]
                    const outcomeCarouselImages = {
                      'system-design-outcomes': [
                        {
                          src: '/static/images/system-design-carousel-4.png',
                          alt: 'System Design Carousel 4',
                        },
                        {
                          src: '/static/images/system-design-carousel-5.png',
                          alt: 'System Design Carousel 5',
                        },
                        {
                          src: '/static/images/system-design-carousel-6.png',
                          alt: 'System Design Carousel 6',
                        },
                        {
                          src: '/static/images/system-design-cover.png',
                          alt: 'System Design Cover',
                        },
                      ],
                    }
                    const parts = project.whatChanged.split(/\[CAROUSEL:[^\]]+\]/)
                    const textContent = parts[0]
                    return (
                      <>
                        {parseTextWithBullets(textContent)}
                        {outcomeCarouselImages[
                          carouselType as keyof typeof outcomeCarouselImages
                        ] && (
                          <div className="mt-8 w-full">
                            <ImageCarousel
                              images={
                                outcomeCarouselImages[
                                  carouselType as keyof typeof outcomeCarouselImages
                                ]
                              }
                            />
                          </div>
                        )}
                      </>
                    )
                  }

                  // Check for image
                  const imageMatch = project.whatChanged.match(/\[IMAGE:([^\]]+)\]/)
                  if (imageMatch) {
                    const imageType = imageMatch[1]
                    const singleImages = {
                      'ux-maturity-assessment': {
                        src: '/static/images/ux-maturity-assessment.png',
                        alt: 'UX Maturity Assessment',
                      },
                    }
                    const parts = project.whatChanged.split(/\[IMAGE:[^\]]+\]/)
                    const textContent = parts[0]
                    return (
                      <>
                        {parseTextWithBullets(textContent)}
                        {singleImages[imageType as keyof typeof singleImages] && (
                          <div className="hover:border-primary-500 dark:hover:border-primary-400 mt-8 w-full overflow-hidden rounded-lg border-2 border-gray-300 transition-all duration-200 hover:shadow-lg dark:border-gray-600">
                            <Image
                              src={singleImages[imageType as keyof typeof singleImages].src}
                              alt={singleImages[imageType as keyof typeof singleImages].alt}
                              width={1000}
                              height={600}
                              className="h-auto w-full"
                            />
                          </div>
                        )}
                      </>
                    )
                  }
                  return parseTextWithBullets(project.whatChanged)
                })()}
              </ul>
            </div>
          </section>
        )}

        {/* Why This Matters */}
        {project.whyMatters && (
          <section className="w-full bg-white py-16 md:py-24 dark:bg-gray-950">
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Why This Matters
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  {project.whyMatters}
                </p>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Previous/Next Navigation */}
      {(previousProject || nextProject) && (
        <div className="w-full border-t border-gray-200 py-16 md:py-24 dark:border-gray-700">
          <div className="mx-auto flex max-w-5xl justify-between gap-8 px-4 sm:px-6">
            {previousProject ? (
              <Link
                href={`/projects-experimental/${previousProject.slug}`}
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
                href={`/projects-experimental/${nextProject.slug}`}
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
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
