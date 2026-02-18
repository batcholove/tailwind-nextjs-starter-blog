interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  slug: string
}

const projectsData: Project[] = [
  {
    title: 'Growing UX Maturity',
    description: `Building UX maturity across a large organization by strengthening capability, clarifying roles, and embedding design into delivery. This work focused on shifting design from execution support to strategic partnership.`,
    imgSrc: '/static/images/ux-maturity-cover.png',
    href: '/projects/growing-ux-maturity',
    slug: 'growing-ux-maturity',
  },
  {
    title: 'System & Service Design',
    description: `Orchestrating a cohesive experience across multiple government applications by redesigning workflows, architecture, and shared systems. This work aligned teams around a unified design language while improving consistency, usability, and delivery speed.`,
    imgSrc: '/static/images/system-design-cover.png',
    href: '/projects/system-service-design',
    slug: 'system-service-design',
  },
  {
    title: 'Putting People First',
    description: `Centering product and system decisions around shared understanding of real users. This work translated research into personas, archetypes, and journeys that aligned teams and grounded strategy in human needs.`,
    imgSrc: '/static/images/archetypes-cover.png',
    href: '/projects/putting-people-first',
    slug: 'putting-people-first',
  },
  {
    title: 'Design Systems',
    description: `Establishing shared design infrastructure to connect design and development. This work created reusable components, standards, and governance models that improved consistency, accessibility, and team efficiency at scale.`,
    imgSrc: '/static/images/design-systems-cover.png',
    href: '/projects/design-systems',
    slug: 'design-systems',
  },
  {
    title: 'Esri Maps & Layers',
    description: `Reducing complexity in a critical mapping workflow through clearer language, familiar patterns, and applied system thinking. This work improved usability without sacrificing capability, demonstrating how focused interaction design can drive system-level impact.`,
    imgSrc: '/static/images/layer-preferences-cover.png',
    href: '/projects/esri-maps-layers',
    slug: 'esri-maps-layers',
  },
  {
    title: 'Interface FLOR',
    description: `Designing an end-to-end service experience across physical space, digital tools, and operations. This work aligned customer experience with business realities, increasing sales while reducing friction for customers and employees.`,
    imgSrc: '/static/images/interface-flor-cover.jpg',
    href: '/projects/interface-flor',
    slug: 'interface-flor',
  },
  {
    title: 'Interior Design & Installations',
    description: `Designing physical environments as cohesive experience systems. These projects demonstrate how spatial design, movement, and material choices shape behavior, reinforce identity, and reduce friction over time.`,
    imgSrc: '/static/images/interior-design-installations-cover.jpg',
    href: '/projects/interior-design-installations',
    slug: 'interior-design-installations',
  },
  // {
  //   title: 'Abba haircare brand update',
  //   description: `A comprehensive brand refresh for a beloved haircare line. This project involved
  //   modernizing visual identity, packaging design, and digital presence while
  //   maintaining the brand's heritage and customer loyalty.`,
  //   imgSrc: '/static/images/ah-cover.png',
  //   href: '/projects/abba-haircare-brand-update',
  //   slug: 'abba-haircare-brand-update',
  // },
  {
    title: 'Brand Systems',
    description: `Creating scalable brand systems that express identity consistently across digital and physical touchpoints. This work focuses on structure, clarity, and durability so brands can evolve without losing recognition or intent.`,
    imgSrc: '/static/images/logo-design-marketing-cover.png',
    href: '/projects/brand-systems',
    slug: 'brand-systems',
  },
]

export default projectsData
