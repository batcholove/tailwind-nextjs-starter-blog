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
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/archetypes-cover.png',
    href: '/projects/growing-ux-maturity',
    slug: 'growing-ux-maturity',
  },
  {
    title: 'Abba haircare brand update',
    description: `A comprehensive brand refresh for a beloved haircare line. This project involved 
    modernizing visual identity, packaging design, and digital presence while 
    maintaining the brand's heritage and customer loyalty.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/projects/abba-haircare-brand-update',
    slug: 'abba-haircare-brand-update',
  },
  {
    title: 'Project Case Study 1',
    description: `A compelling design challenge and innovative solution. This project showcases 
    strategic thinking, user research, and thoughtful design execution that resulted 
    in meaningful user engagement and business impact.`,
    imgSrc: '',
    href: '/projects/project-case-study-1',
    slug: 'project-case-study-1',
  },
  {
    title: 'Project Case Study 2',
    description: `Explore how design thinking solved a complex problem. From discovery to delivery, 
    this case study demonstrates the process of creating intuitive experiences that 
    resonate with users and drive measurable results.`,
    imgSrc: '',
    href: '/projects/project-case-study-2',
    slug: 'project-case-study-2',
  },
  {
    title: 'Project Case Study 3',
    description: `A deep dive into design strategy and execution. This project illustrates how 
    empathy, research, and iteration led to a product that truly serves user needs 
    while achieving business objectives.`,
    imgSrc: '',
    href: '/projects/project-case-study-3',
    slug: 'project-case-study-3',
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
