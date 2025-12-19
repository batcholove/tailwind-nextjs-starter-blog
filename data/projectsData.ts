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
    title: 'Abba haircare brand update',
    description: `A comprehensive brand refresh for a beloved haircare line. This project involved 
    modernizing visual identity, packaging design, and digital presence while 
    maintaining the brand's heritage and customer loyalty.`,
    imgSrc: '/static/images/ah-cover.png',
    href: '/projects/abba-haircare-brand-update',
    slug: 'abba-haircare-brand-update',
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
    title: 'Putting people first',
    description: `Learn how personas and archetypes align organizations around human-centered design. 
    This project demonstrates how to build shared mental models that guide product 
    decisions and foster empathy across teams.`,
    imgSrc: '/static/images/archetypes-cover.png',
    href: '/projects/putting-people-first',
    slug: 'putting-people-first',
  },
  {
    title: 'Interface FLOR',
    description: `Designing modular flooring solutions while building digital design tools and improving operations. 
    This project focused on increasing sales, customer and employee satisfaction while reducing returns through 
    strategic UX design and operational excellence.`,
    imgSrc: '',
    href: '/projects/interface-flor',
    slug: 'interface-flor',
  },
  {
    title: 'Project Case Study 4',
    description: `Transforming ideas into reality through thoughtful design. This case study reveals 
    the journey from concept to launch, highlighting the decisions and learnings that 
    shaped the final product.`,
    imgSrc: '',
    href: '/projects/project-case-study-4',
    slug: 'project-case-study-4',
  },
  {
    title: 'Project Case Study 5',
    description: `An exploration of design problem-solving. Through careful analysis and creative 
    thinking, this project demonstrates how good design can simplify complexity and 
    create delightful user experiences.`,
    imgSrc: '',
    href: '/projects/project-case-study-5',
    slug: 'project-case-study-5',
  },
  {
    title: 'Project Case Study 6',
    description: `Where vision meets execution. This project showcases a complete design process 
    from stakeholder alignment through user validation, resulting in a solution that 
    balances aesthetics with functionality.`,
    imgSrc: '',
    href: '/projects/project-case-study-6',
    slug: 'project-case-study-6',
  },
]

export default projectsData
