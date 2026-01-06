import { notFound } from 'next/navigation'
import { allProjects } from 'contentlayer/generated'
import projectsData from '@/data/projectsData'
import ExperimentalProjectDetail from '@/components/ExperimentalProjectDetail'

// Type definition for structured project data
interface StructuredProject {
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

// Map slug to structured project data
const projectStructuredData: Record<string, StructuredProject> = {
  'growing-ux-maturity': {
    title: 'Growing UX Maturity',
    subtitle: 'Crafting the conditions for design to scale.',
    description:
      'UX maturity was low across teams and stakeholders. Design was often seen as execution support rather than a strategic partner. This work focused on growing design capability, clarity, and influence across a large, multi-team government environment.',
    imgSrc: '/static/images/ux-maturity-cover.png',
    role: ['Senior UX Designer', 'DesignOps Lead', 'Mentor and facilitator'],
    focus: ['DesignOps', 'UX maturity and capability building', 'Team growth and alignment'],
    outcome:
      'Design became more visible, more trusted, and more influential. UX maturity increased measurably over time. Designers gained clearer roles, growth paths, and impact. Design shifted from reacting to requests to shaping the right problems.',
    overview:
      'This effort took place within a large Agile release train supporting a government agency. Multiple teams, vendors, and products operated with inconsistent design practices and a limited shared design language. **We approached UX maturity as a design problem.**',
    challenge:
      'When I started working with this agency I noticed several interconnected problems:\n\n• Inconsistent UX design engagement across product teams\n• Siloed design processes\n• A lack of shared understanding about design value\n• No design system foundation\n\n**Without addressing these problems our team effectiveness and product outcomes would be limited.**',
    approach:
      '## Make design visible\nWe introduced <a href="https://www.nngroup.com/articles/ux-maturity-model/" target="_blank" rel="noopener noreferrer" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 underline"><strong>maturity models</strong></a> and a **shared language** to show what **good design** looked like at different levels.\n\n• UX maturity assessments\n• Clear articulation of design responsibilities\n• Reframing design as problem definition, not just delivery\n\n[IMAGE:beyond-ux-ui]\n\n## Grow team capability\nWe mapped skills across the design team to identify strengths, gaps, and growth opportunities.\n\n[CAROUSEL:skills-mapping]\n\nWhat this enabled\n\n• Intentional skill development\n• Better alignment of designers to work\n• Clearer paths for progression\n\n**We started treating growth as a system rather than a one-time effort.**\n\n## Align with delivery\nDesign practices were embedded into existing Agile workflows rather than layered on top. The focus was improving how design showed up in the work, not adding process.',
    whatChanged:
      'The organization shifted from viewing design as a nice-to-have to seeing it as a core business capability. Engineering teams asked design questions upfront, product decisions were grounded in user research, and cross-functional collaboration became the norm.\n\n• Earlier and more consistent design involvement\n• Better stakeholder questions, not just requests\n• Clearer ownership and confidence among designers\n\n**We increased UX maturity across teams and leadership.**\n\n[IMAGE:ux-maturity-assessment]',
    whyMatters:
      'Good design starts with shared understanding: alignment on values, goals, and language. It requires intentional systems: processes and practices that scale. And it demands investment in people: growing capability and confidence. By focusing on maturity we created the conditions for better design to happen repeatedly and at scale. Growing UX maturity requires intentional investment in culture, process, and capability. Organizations that successfully mature their UX capabilities see tangible benefits in product quality, team efficiency, and user satisfaction.',
  },
  'system-design': {
    title: 'System Design',
    subtitle:
      'Redesigning a suite of government applications through holistic system architecture.',
    description:
      'Redesigning a suite of government applications through a holistic approach to system design. This project leverages a comprehensive design system and UI component library while thinking strategically about the entire system architecture, user workflows, and organizational impact across multiple applications.',
    imgSrc: '/static/images/system-design-cover.png',
    role: ['Lead Product Designer', 'Design Lead', 'System Architect'],
    focus: ['System Design', 'Design Systems', 'Information Architecture', 'User Workflows'],
    outcome:
      'Created a cohesive experience across multiple applications. Reduced user confusion and training time. Improved cross-application workflows and data consistency. Established a reusable design system that accelerated future development.',
    overview:
      'This project involved redesigning multiple interconnected government applications that served thousands of users across different agencies and departments. The applications operated in silos with inconsistent patterns, terminology, and workflows.',
    challenge:
      'Multiple applications had grown independently with inconsistent design patterns, terminology, and user workflows. Users struggled to transfer knowledge between applications. Developers duplicated work across codebases. There was no shared language or design standards across the suite.',
    approach:
      'We mapped all user workflows across applications to identify opportunities for consolidation and consistency. We created a comprehensive design system with reusable components and patterns. We redesigned each application to use the new system while respecting unique user needs and workflows.\n\n[CAROUSEL:system-design]\n\n## Map the system\nWe visualized the full service ecosystem to reveal relationships, handoffs, and breakdowns.\n\n• End-to-end journey maps\n• Service blueprints\n• Stakeholder and system mapping\n\n**This made the invisible visible.**\n\n## Design for orchestration\nRather than redesigning individual moments, we focused on how experiences connected.\n\n• Clarifying ownership across touchpoints\n• Identifying critical handoffs and failure points\n• Aligning teams around shared outcomes\n\n**The work shifted from what my team owns to what the user experiences.**\n\n[IMAGE:system-design-mapping]\n\n## Enable better decisions\nArtifacts were designed to be used, not admired.\n\nThey supported:\n\n• Cross-team planning\n• Prioritization conversations\n• Strategic trade-offs\n\n**Design became a tool for alignment.**',
    whatChanged:
      'Users experienced reduced cognitive load when switching between applications. Training time decreased significantly. Development velocity increased through component reuse. Support tickets related to user confusion decreased. The <a href="/projects-experimental/design-systems" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 underline">design system</a> became a reference for future development.\n\n[CAROUSEL:system-design-outcomes]',
    whyMatters:
      'Coherent system design improves user efficiency and satisfaction. Consistency across applications builds user confidence and reduces errors. A strong design system enables teams to move faster and maintain quality. Strategic thinking about the entire system prevents fragmented solutions.',
  },
  'putting-people-first': {
    title: 'Putting People First',
    subtitle: 'Building shared mental models through personas and archetypes.',
    description:
      'Learn how personas and archetypes align organizations around human-centered design. This project demonstrates how to build shared mental models that guide product decisions and foster empathy across teams.',
    imgSrc: '/static/images/archetypes-cover.png',
    role: ['UX Strategist', 'Research Lead', 'Workshop Facilitator'],
    focus: ['User Research', 'Personas', 'Stakeholder Alignment', 'Human-Centered Design'],
    outcome:
      'Organizational alignment around user needs. Shared language across product, design, and engineering. Reduced debates about product direction. More empathetic decision-making. Faster product development cycles.',
    overview:
      'This project focused on establishing shared understanding of who users are and what drives their behavior. By creating personas and archetypes, we gave teams a common reference point for decision-making.',
    challenge:
      'Teams held different assumptions about user needs. Product decisions were often debated without a shared reference point. User empathy varied across departments. Feature prioritization lacked a clear user-centered framework.',
    approach:
      'We conducted extensive user research across multiple segments. We synthesized findings into clear personas and archetypes. We facilitated workshops to introduce these mental models to stakeholders. We created artifacts to keep personas central to decision-making.',
    whatChanged:
      'Teams referenced personas when making decisions. Debates shifted from opinions to evidence. Feature prioritization became more user-centered. New team members understood user context faster. Product decisions became more consistent.',
    whyMatters:
      'Shared mental models reduce friction and align teams. Personas make research actionable and memorable. Archetypes help teams understand motivations beyond demographics. User empathy drives better product decisions.',
  },
  'design-systems': {
    title: 'Design Systems',
    subtitle: 'Building the bridge between design and development.',
    description:
      'Explore the importance of design systems and UI component libraries in bridging the gap between design and development. A well-crafted design system ensures consistency, accelerates development, reduces miscommunication, and creates a shared language that empowers both designers and developers to build better products.',
    imgSrc: '/static/images/design-systems-cover.png',
    role: ['Design System Lead', 'Component Architect', 'Design & Dev Liaison'],
    focus: ['Design Systems', 'Component Libraries', 'Documentation', 'Design-Dev Collaboration'],
    outcome:
      'Designers and developers speak the same language. Components are reused across products. Development speed increased by 40%. Design consistency improved significantly. Maintenance burden decreased.',
    overview:
      'This project established a design system as the single source of truth for design and development. It served as both a design tool and a development framework.',
    challenge:
      'Design and development operated independently. Components were duplicated across products. Design specifications were often unclear or incomplete. Inconsistencies appeared in products despite best intentions.',
    approach:
      'We defined a comprehensive set of design principles. We created modular components with clear usage guidelines. We documented everything with examples and code snippets. We trained teams on how to use the system.',
    whatChanged:
      'Designers could build faster by combining components. Developers implemented designs more accurately. Handoff between design and development became smoother. Products maintained consistent branding and patterns.',
    whyMatters:
      'Design systems scale design and development work. They reduce the cost of inconsistency. They enable teams to focus on problems rather than repeating solutions. They create a shared vocabulary between disciplines.',
  },
  'interface-flor': {
    title: 'Interface FLOR',
    subtitle: 'Designing modular solutions for complex problems.',
    description:
      'Designing modular flooring solutions while building digital design tools and improving operations. This project focused on increasing sales, customer and employee satisfaction while reducing returns through strategic UX design and operational excellence.',
    imgSrc: '/static/images/interface-flor-cover.jpg',
    role: ['Product Designer', 'UX Researcher', 'Prototyper'],
    focus: ['Product Design', 'Customer Experience', 'Operational Excellence', 'B2B UX'],
    outcome:
      'Sales increased by 25% in the first year. Customer satisfaction improved. Return rates decreased by 15%. Employees became more efficient. The digital tools became a competitive advantage.',
    overview:
      'Interface FLOR manufactures modular flooring solutions. We helped them improve customer experience and operational efficiency through digital tools and service design.',
    challenge:
      'Customers struggled to visualize and configure their flooring options. Sales consultants spent too much time on manual calculations. Orders had high return rates due to miscommunication. Internal processes were inefficient.',
    approach:
      'We created an interactive design tool allowing customers to visualize options in real-time. We streamlined the sales process with digital templates. We improved internal operations with better workflow tools.',
    whatChanged:
      'Customers felt more confident in their purchases. Sales consultants became more productive. Returns decreased significantly. Customer satisfaction increased. The company gained competitive advantage.',
    whyMatters:
      'Good design improves business outcomes. Digital tools can improve physical product sales. Better customer experience leads to reduced returns. Operational efficiency directly impacts profitability.',
  },
  'esri-maps-layer-preferences': {
    title: 'Esri Maps & Layer Preferences',
    subtitle: 'Solving complex mapping challenges through thoughtful design.',
    description:
      'A compelling design challenge and innovative solution. This project showcases strategic thinking, user research, and thoughtful design execution that resulted in meaningful user engagement and business impact.',
    imgSrc: '/static/images/layer-preferences-cover.png',
    role: ['UX Designer', 'Interaction Designer', 'User Researcher'],
    focus: [
      'Complex Interactions',
      'Mapping Applications',
      'User Engagement',
      'Data Visualization',
    ],
    outcome:
      'User engagement with layer management increased significantly. Power users found the new tools indispensable. Support tickets related to layer confusion decreased. Feature adoption exceeded expectations.',
    overview:
      'Esri Maps is a powerful tool for geospatial analysis. This project focused on improving how users manage and interact with map layers.',
    challenge:
      'Users found layer management confusing and time-consuming. Complex workflows required many steps. Power users had workarounds for limitations. New users gave up easily.',
    approach:
      'We conducted extensive user research to understand workflows. We prototyped multiple interaction models. We tested with real users and iterated based on feedback.',
    whatChanged:
      'Layer management became intuitive and powerful. Users could accomplish complex tasks in fewer steps. Power users got the tools they needed. Adoption increased significantly.',
    whyMatters:
      'Good design makes complex tools accessible. Thoughtful interaction design enables powerful workflows. User research prevents designing for assumptions.',
  },
  'interior-design-installations': {
    title: 'Interior Design & Installations',
    subtitle: 'Applying design principles across disciplines.',
    description:
      'Good design is good design—it transcends discipline. This project demonstrates how strong design principles apply across any facet of design. A skilled designer can transfer foundational knowledge from one discipline to another, creating cohesive, thoughtful experiences whether designing spaces or interfaces.',
    imgSrc: '/static/images/interior-design-installations-cover.jpg',
    role: ['Interior Designer', 'Spatial Designer', 'Art Director'],
    focus: ['Spatial Design', 'Material Selection', 'Aesthetic Direction', 'User Experience'],
    outcome:
      'Created a cohesive aesthetic that strengthened brand identity. Improved user experience in physical space. Enhanced employee satisfaction and productivity. Visitors had positive emotional responses.',
    overview:
      'This project involved designing interior spaces for a creative company. The goal was to create an environment that reflected company values and fostered creativity.',
    challenge:
      "Space felt disconnected from brand. Layout didn't support collaboration. Material choices seemed arbitrary. Overall aesthetic lacked intentionality.",
    approach:
      'We developed a design language reflecting company values. We restructured the space to support different work modes. We selected materials thoughtfully. We created a cohesive aesthetic.',
    whatChanged:
      'Employees felt proud of their workspace. Visitors had strong first impressions. The space naturally fostered collaboration. Brand identity became stronger.',
    whyMatters:
      'Design principles transfer across disciplines. Physical spaces impact behavior and emotion. Thoughtful design strengthens brand identity. Good design improves quality of life.',
  },
  'abba-haircare-brand-update': {
    title: 'Abba Haircare Brand Update',
    subtitle: 'Modernizing heritage while maintaining loyalty.',
    description:
      "A comprehensive brand refresh for a beloved haircare line. This project involved modernizing visual identity, packaging design, and digital presence while maintaining the brand's heritage and customer loyalty.",
    imgSrc: '/static/images/ah-cover.png',
    role: ['Brand Designer', 'Packaging Designer', 'Creative Director'],
    focus: ['Brand Identity', 'Packaging Design', 'Visual Design', 'Brand Strategy'],
    outcome:
      'Brand recognition increased among target demographic. Retail shelf presence improved. Customer loyalty remained strong despite visual changes. Sales grew in new markets.',
    overview:
      'Abba Haircare had a loyal customer base but felt outdated. We refreshed the brand identity while honoring its heritage.',
    challenge:
      "Visual identity felt dated compared to competitors. Packaging didn't stand out on shelves. Brand messaging wasn't resonating with younger customers. Digital presence was weak.",
    approach:
      'We modernized the visual language while retaining core brand elements. We redesigned packaging to be more eye-catching. We strengthened brand messaging. We built a digital presence.',
    whatChanged:
      'Brand felt contemporary while maintaining heritage. Packaging attracted new customers. Loyal customers remained engaged. Digital channels became important.',
    whyMatters:
      'Brands must evolve to stay relevant. Thoughtful refreshes honor heritage while attracting new audiences. Good design improves shelf presence and sales.',
  },
  'logo-design-marketing': {
    title: 'Logo Design & Marketing',
    subtitle: 'Building recognition and connection through visual identity.',
    description:
      "Discover the importance of a strong logo design in connecting with customers and communicating the brand's values. This project explores how thoughtful logo design creates lasting impressions, builds brand recognition, and becomes the visual cornerstone of a company's identity.",
    imgSrc: '/static/images/logo-design-marketing-cover.png',
    role: ['Logo Designer', 'Brand Designer', 'Visual Identity Designer'],
    focus: ['Logo Design', 'Brand Identity', 'Visual Communication', 'Market Positioning'],
    outcome:
      'Logo became instantly recognizable. Brand perception improved. Marketing materials had stronger impact. Customer recall increased significantly.',
    overview:
      'This project focused on creating a distinctive logo and visual identity system for a startup.',
    challenge:
      'Company lacked clear visual identity. Logo was forgettable. Marketing materials lacked cohesion. Brand positioning was unclear.',
    approach:
      'We developed a logo reflecting company values and market position. We created a comprehensive visual identity system. We applied the identity consistently across touchpoints.',
    whatChanged:
      'Logo became a valuable asset. Visual identity was distinctive and memorable. Marketing became more effective. Brand perception strengthened.',
    whyMatters:
      'Logos are the face of brands. Strong visual identity builds recognition. Consistent application strengthens brand impression. Design shapes perception.',
  },
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectPageExperimental({ params }: ProjectPageProps) {
  const { slug } = await params

  // Check if we have structured data for this project
  const structuredProject = projectStructuredData[slug]

  // Fall back to projectsData for basic info
  const projectIndex = projectsData.findIndex((p) => p.slug === slug)
  const fallbackProject = projectsData[projectIndex]

  if (!structuredProject && !fallbackProject) return notFound()

  // Use structured data if available, otherwise use fallback
  const project = structuredProject || {
    title: fallbackProject.title,
    description: fallbackProject.description,
    imgSrc: fallbackProject.imgSrc,
  }

  const previousProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null

  return (
    <ExperimentalProjectDetail
      project={project}
      previousProject={previousProject}
      nextProject={nextProject}
    />
  )
}
