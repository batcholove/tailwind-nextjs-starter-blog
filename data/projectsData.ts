interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  slug: string
}

const projectsData: Project[] = [
  {
    title: 'Growing UX maturity',
    description: `Discover how to cultivate UX maturity across your organization. This case study 
    explores building a design-centric culture, establishing design systems, and 
    empowering teams to make user-centered decisions at every level.`,
    imgSrc: '/static/images/ux-maturity-cover.png',
    href: '/projects/growing-ux-maturity',
    slug: 'growing-ux-maturity',
  },
  {
    title: 'System Design',
    description: `Redesigning a suite of government applications through a holistic approach to system design. This project 
    leverages a comprehensive design system and UI component library while thinking strategically about the entire 
    system architecture, user workflows, and organizational impact across multiple applications.`,
    imgSrc: '/static/images/system-design-cover.png',
    href: '/projects/system-design',
    slug: 'system-design',
  },
  {
    title: 'Putting people first',
    description: `Learn how personas and archetypes align organizations around human-centered design. 
    This project demonstrates how to build shared mental models that guide product 
    decisions and foster empathy across teams.`,
    imgSrc: '/static/images/archetypes-cover.png',
    href: '/projects/putting-people-first',
    slug: 'putting-people-first',
  },
  {
    title: 'Design systems',
    description: `Explore the importance of design systems and UI component libraries in bridging the gap between 
    design and development. A well-crafted design system ensures consistency, accelerates development, reduces 
    miscommunication, and creates a shared language that empowers both designers and developers to build better products.`,
    imgSrc: '/static/images/design-systems-cover.gif',
    href: '/projects/design-systems',
    slug: 'design-systems',
  },
  {
    title: 'Esri maps & layer preferences',
    description: `A compelling design challenge and innovative solution. This project showcases 
    strategic thinking, user research, and thoughtful design execution that resulted 
    in meaningful user engagement and business impact.`,
    imgSrc: '/static/images/layer-preferences-cover.png',
    href: '/projects/esri-maps-layer-preferences',
    slug: 'esri-maps-layer-preferences',
  },
  {
    title: 'Interface FLOR',
    description: `Designing modular flooring solutions while building digital design tools and improving operations. 
    This project focused on increasing sales, customer and employee satisfaction while reducing returns through 
    strategic UX design and operational excellence.`,
    imgSrc: '/static/images/interface-flor-cover.jpg',
    href: '/projects/interface-flor',
    slug: 'interface-flor',
  },
  {
    title: 'Interior design & installations',
    description: `Good design is good design—it transcends discipline. This project demonstrates how strong design 
    principles apply across any facet of design. A skilled designer can transfer foundational knowledge from one 
    discipline to another, creating cohesive, thoughtful experiences whether designing spaces or interfaces.`,
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
    title: 'Logo design & marketing',
    description: `Discover the importance of a strong logo design in connecting with customers and communicating 
    the brand's values. This project explores how thoughtful logo design creates lasting impressions, builds brand 
    recognition, and becomes the visual cornerstone of a company's identity.`,
    imgSrc: '/static/images/logo-design-marketing-cover.png',
    href: '/projects/logo-design-marketing',
    slug: 'logo-design-marketing',
  },
]

export default projectsData
