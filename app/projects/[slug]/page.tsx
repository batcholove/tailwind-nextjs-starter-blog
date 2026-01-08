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
  'system-service-design': {
    title: 'System & Service Design',
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
      'We mapped all user workflows across applications to identify opportunities for consolidation and consistency. We created a comprehensive design system with reusable components and patterns. We redesigned each application to use the new system while respecting unique user needs and workflows.\n\n## Map the system\n\nWe visualized the full service ecosystem to reveal relationships, handoffs, and breakdowns.\n\n• End-to-end journey maps\n• Service blueprints\n• Stakeholder and system mapping\n\n**This made the invisible visible.**\n\n[CAROUSEL:system-service-design]\n\n## Design for orchestration\n\nRather than redesigning individual moments, we focused on how experiences connected.\n\n• Clarifying ownership across touchpoints\n• Identifying critical handoffs and failure points\n• Aligning teams around shared outcomes\n\n**The work shifted from what my team owns to what the user experiences.**\n\n[IMAGE:system-design-mapping]\n\n## Enable better decisions\n\nArtifacts were designed to be used, not admired.\n\nThey supported:\n\n• Cross-team planning\n• Prioritization conversations\n• Strategic trade-offs\n\n**Design became a tool for alignment.**',
    whatChanged:
      'Users experienced reduced cognitive load when switching between applications. Training time decreased significantly. Development velocity increased through component reuse. Support tickets related to user confusion decreased. The <a href="/projects/design-systems" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 underline">design system</a> became a reference for future development.\n\n[CAROUSEL:system-service-design-outcomes]',
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
      'Multiple teams and vendors at a government agengy were designing and building products independently. Inconsistencies in UI, interaction patterns, and language created friction for users and inefficiency for teams. This work focused on creating a shared system that supported quality, reuse, and scalability across products.',
    imgSrc: '/static/images/design-systems-cover.png',
    role: ['Design System Lead', 'Component Architect', 'Design & Dev Liaison'],
    focus: ['Design Systems', 'Component Libraries', 'Documentation', 'Design-Dev Collaboration'],
    outcome:
      'Design and development became faster and more consistent. Teams reused patterns instead of reinventing them. Users experienced clearer, more predictable interactions across products. The system scaled across teams, vendors, and platforms.',
    overview:
      'As products evolved, design decisions were being made repeatedly and inconsistently. Small differences added up to a fragmented experience and increased delivery cost. A design system was introduced to create alignment without constraining teams.',
    challenge:
      '• Inconsistent UI and interaction patterns\n• Repeated design and development effort\n• Accessibility and compliance risks\n• Limited shared ownership of design standards\n\n**Without a system, scale increased friction rather than efficiency.**',
    approach:
      'We defined a comprehensive set of design principles. We created modular components with clear usage guidelines. We documented everything with examples and code snippets. We trained teams on how to use the system.\n\n## Establish a foundation\n\nWe identified common patterns, components, and language across products.\n\n• Core UI components\n• Reusable interaction patterns\n• Shared UX writing guidelines\n• Accessibility standards baked in\n\n**The focus was clarity, not completeness.**\n\n## Build for adoption\n\nThe system was designed to be practical and easy to use.\n\n• Figma libraries for designers\n• Code-based components documented in Storybook\n• Clear usage guidance and examples\n\n**Adoption mattered more than perfection.**\n\n## Scale intentionally\n\nThe system evolved alongside product needs.\n\n• MVP first, then expansion\n• Feedback loops with designers and developers\n• Governance focused on enablement, not control\n\n**The system grew as trust grew.**',
    whatChanged:
      'Reduced design and development time\n\n• Improved consistency across products\n• Lower cognitive load for users\n• Fewer accessibility issues\n• Broad adoption across teams and vendors\n\n**The system became shared infrastructure.**',
    whyMatters:
      "Design systems aren't simply about UI kits. They're about reducing friction, supporting teams, and enabling quality at scale.\n\n**This work turned design principles into operational reality.**",
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
    title: 'Esri Maps & Layers',
    subtitle: 'Simplifying complex tools through clear language and familiar patterns.',
    description:
      'Mapping tools were powerful but difficult to use. Legacy patterns, dense terminology, and limited flexibility created friction for both new and experienced users. This work focused on redesigning a critical part of the mapping experience so it aligned with how users think, speak, and work.',
    imgSrc: '/static/images/layer-preferences-cover.png',
    role: [
      'Senior Product Designer',
      'UX and UI designer',
      'UX writing contributor',
      'User Researcher',
    ],
    focus: [
      'Complex Mapping Applications',
      'Applied design systems',
      'Interaction design',
      'UX writing and language',
    ],
    outcome:
      'The experience became easier to understand, faster to use, and easier to teach. Language was simplified. Interactions aligned with familiar patterns. New capabilities were introduced without increasing cognitive load.',
    overview:
      "At the USDA's Natural Resources Conservation Service, mapping tools were powerful but difficult to use. Legacy patterns, dense terminology, and limited flexibility created friction for both new and experienced users. This work focused on redesigning a critical part of the mapping experience so it aligned with how users think, speak, and work.\n\nMapping workflows were central to the product suite and tightly connected to other systems. Even small improvements had an outsized impact.\n\nLayer Preferences was a high-friction area that affected daily workflows, training, and support.\n\n**The opportunity was to reduce complexity without reducing capability.**",
    challenge:
      '• Dense, technical language\n• Legacy interaction patterns\n• Limited discoverability\n• High training overhead\n• Inconsistent behavior across tools\n\n**Users had to adapt to the system instead of the system adapting to users.**\n\n[IMAGE:layer-overview]',
    approach:
      '## Ground decisions in user understanding\nWe leveraged existing research, personas, and archetypes to anchor decisions in real workflows and mental models.\n\n• Mapped user mental models\n• Aligned design decisions with research\n• Validated with real workflows\n\n**This ensured the redesign reflected how users actually work, not how the system was structured.**\n\n[CAROUSEL:layer-language-mapping]\n\n## Simplify through language\nA major focus was UX writing. Plain language replaced technical terminology.\n\n• Labels reflected user vocabulary\n• Descriptions clarified intent and impact\n• Removed jargon throughout the interface\n\n**Language became a design tool, not an afterthought.**\n\n[CAROUSEL:layer-ui-updates]\n\n## Apply consistent patterns\nThe redesign used established patterns from the design system.\n\n• Familiar interactions reduced learning effort\n• Reusable components ensured consistency\n• New patterns introduced only when necessary\n\n**This reinforced predictability across the system.**\n\n[IMAGE:layer-side-drawer-update]\n\n## Add flexibility without friction\nNew capabilities were introduced carefully.\n\n• Layer search improved discoverability\n• Reordering supported user workflows\n• Preferences became easier to scan and manage\n\n**Functionality increased while effort decreased.**\n\n[IMAGE:layer-search-update]',
    whatChanged:
      'The redesigned interface made layer management intuitive and powerful. Users could accomplish complex tasks more easily.\n\n• Reduced cognitive load\n• Faster onboarding for new users\n• Easier training and support\n• Clearer alignment with other tools in the suite\n\n**The redesign demonstrated how small, focused improvements could have system-level impact.**\n\n[CAROUSEL:layer-drawer-animate]',
    whyMatters:
      "Complex tools don't have to feel complicated. By combining human-centered language, familiar interaction patterns, and system-aware design we created an experience that respected both user needs and technical constraints.",
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
      currentSlug={slug}
    />
  )
}
