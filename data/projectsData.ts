interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Growing UX maturity',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Project Case Study 1',
    description: `A compelling design challenge and innovative solution. This project showcases 
    strategic thinking, user research, and thoughtful design execution that resulted 
    in meaningful user engagement and business impact.`,
    imgSrc: '',
    href: '#',
  },
  {
    title: 'Project Case Study 2',
    description: `Explore how design thinking solved a complex problem. From discovery to delivery, 
    this case study demonstrates the process of creating intuitive experiences that 
    resonate with users and drive measurable results.`,
    imgSrc: '',
    href: '#',
  },
  {
    title: 'Project Case Study 3',
    description: `A deep dive into design strategy and execution. This project illustrates how 
    empathy, research, and iteration led to a product that truly serves user needs 
    while achieving business objectives.`,
    imgSrc: '',
    href: '#',
  },
  {
    title: 'Project Case Study 4',
    description: `Transforming ideas into reality through thoughtful design. This case study reveals 
    the journey from concept to launch, highlighting the decisions and learnings that 
    shaped the final product.`,
    imgSrc: '',
    href: '#',
  },
  {
    title: 'Project Case Study 5',
    description: `An exploration of design problem-solving. Through careful analysis and creative 
    thinking, this project demonstrates how good design can simplify complexity and 
    create delightful user experiences.`,
    imgSrc: '',
    href: '#',
  },
  {
    title: 'Project Case Study 6',
    description: `Where vision meets execution. This project showcases a complete design process 
    from stakeholder alignment through user validation, resulting in a solution that 
    balances aesthetics with functionality.`,
    imgSrc: '',
    href: '#',
  },
]

export default projectsData
