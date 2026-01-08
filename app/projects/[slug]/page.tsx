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
      'We applied a multi-pronged approach to maximize our ability to mature with speed, scale, and depth in a sustainable way.\n\n## Make design visible\n\nWe introduced <a href="https://www.nngroup.com/articles/ux-maturity-model/" target="_blank" rel="noopener noreferrer" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 underline"><strong>maturity models</strong></a> and a **shared language** to show what **good design** looked like at different levels.\n\n• UX maturity assessments\n• Clear articulation of design responsibilities\n• Reframing design as problem definition, not just delivery\n\n[IMAGE:beyond-ux-ui]\n\n## Grow team capability\nWe mapped skills across the design team to identify strengths, gaps, and growth opportunities.\n\n[CAROUSEL:skills-mapping]\n\nWhat this enabled\n\n• Intentional skill development\n• Better alignment of designers to work\n• Clearer paths for progression\n\n**We started treating growth as a system rather than a one-time effort.**\n\n## Align with delivery\nDesign practices were embedded into existing Agile workflows rather than layered on top. The focus was improving how design showed up in the work, not adding process.',
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
    subtitle: 'Designing from human needs rather than system constraints.',
    description:
      'Products and systems were being designed around data, architecture, and process. The people using them were often discussed, but rarely centered in decision-making. This work focused on creating shared understanding of users so teams could design with empathy, clarity, and intent.',
    imgSrc: '/static/images/archetypes-cover.png',
    role: ['UX Strategist', 'Research Partner', 'Storyteller and Advocate'],
    focus: ['User research', 'Personas and archetypes', 'Journey and ecosystem mapping'],
    outcome:
      'Teams gained a shared understanding of real users and their needs. Research insights became visible and actionable. Design and product decisions aligned more closely with how people actually work.',
    overview:
      'Design decisions were often made without consistent reference to user needs. Research existed, but it was fragmented, hard to access, or limited to design teams. The opportunity was to leverage the research to become better aligned around people.',
    challenge:
      'Product decisions were often debated based on assumptions about user needs and feature prioritization lacked a clear user-centered framework.\n\n• Limited shared understanding of users\n• Research artifacts siloed within design\n• Difficulty connecting research to system-level decisions\n\n**Without a common view of users, systems drifted away from human needs.**',
    approach:
      'We conducted extensive user research across multiple segments. We synthesized findings into clear personas and archetypes. We facilitated workshops to introduce these mental models to stakeholders. We created artifacts to keep personas central to decision-making.\n\n## Create shared representations\n\nWe developed personas, archetypes, and journey maps that reflected real behaviors and constraints.\n\n• Lightweight proto-personas first\n• Deeper research over time\n• High-level archetypes to support system and service design\n\n**Artifacts were designed to evolve, not remain static.**\n\n[CAROUSEL:personas-journey]\n\n## Design for reuse\n\nResearch artifacts were built as modular templates.\n\n• Reusable components in Figma\n• Consistent structure across personas and journeys\n• Easy to update and share\n\n**This reduced friction and increased adoption.**\n\n## Make research usable\n\nArtifacts were designed to support conversations, not just documentation.\n\nThey helped teams:\n\n• Align on user needs\n• Prioritize work\n• Communicate insights to leadership\n\n**Research became a shared tool.**\n\n[CAROUSEL:research-usable]',
    whatChanged:
      'Stronger alignment across teams and stakeholders\n\n• Increased demand for research artifacts beyond design\n• Clearer focus on real user needs\n• Better system-level decisions\n\n**A key signal of success was leadership using these artifacts in their own presentations.**\n\n[IMAGE:ecosystem-map]',
    whyMatters:
      'Good systems start with people. By grounding design in shared understanding of users, we ensured that:\n\n• Services reflected real workflows\n• Design systems supported real needs\n• Outcomes improved for both employees and customers\n\n**This work ensured that human needs stayed visible as scale increased.**',
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
    subtitle: 'Designing across physical space, digital tools, and service delivery.',
    description:
      'FLOR is a modular carpet tile system designed for homes and commercial spaces. Selling and installing the product required coordinating design, sales, operations, and customer education across multiple touchpoints. This work focused on improving how people selected, designed, and installed flooring while supporting both customer and employee needs.',
    imgSrc: '/static/images/interface-flor-cover.jpg',
    role: [
      'Design lead and manager',
      'Service and experience designer',
      'Tool and process designer',
    ],
    focus: [
      'Service design',
      'Experience design',
      'Interior and spatial design',
      'Operational and process design',
    ],
    outcome:
      'Sales increased. Communication became clearer. Effort was reduced for customers and employees. Service delivery improved from initial consultation through installation. Design decisions supported business goals while improving the customer experience.',
    overview:
      'Customers were asked to make complex flooring decisions with limited tools and inconsistent guidance. Employees relied on manual processes that slowed delivery and increased the chance of error. The opportunity was to design a more coherent experience across the full service.',
    challenge:
      '• Complex product configurations\n• Time-consuming manual workflows\n• Inconsistent communication\n• High effort for customers and staff\n• Limited tools for visualization and decision-making\n\n**Without intervention, scale increased friction.**',
    approach:
      "It was important to design for the entire service experience to deliver on the promise of great service design. Here's how the holistic approach came together.\n\n## Design the service, not just the space\n\nWe examined the full customer journey from consultation to installation.\n\n• In-store experience\n• Sales conversations\n• Design decision-making\n• Installation and follow-up\n\n**This revealed gaps between intention and execution.**\n\n## Create tools that reduced effort\n\nWe designed tools and artifacts to improve clarity and speed.\n\n• Flooring layout tools for faster design exploration\n• Clear visual communication for customers\n• Instructional materials for staff and installers\n\n**These tools improved accuracy and confidence.**\n\n## Align experience with operations\n\nDesign decisions accounted for business realities.\n\n• Reduced errors and rework\n• Improved onboarding and training\n• More predictable delivery\n\n**The experience worked better because the system behind it worked better.**",
    whatChanged:
      '• Faster sales cycles\n• Clearer communication with customers\n• Reduced effort for employees\n• Improved service consistency\n• Stronger alignment between design and operations\n\n**Design became a driver of both experience and efficiency.**',
    whyMatters:
      'Good design connects experience to execution. This project shows how:\n\n• Service design applies beyond digital products\n• Systems thinking improves physical environments\n• Design principles translate across mediums\n\n**It reflects the foundation that later informed my digital product work.**',
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
      'We took a holistic view of the mapping tools across the agency so we could apply methods that would scale.\n\n## Ground decisions in user understanding\n\nWe leveraged existing research, personas, and archetypes to anchor decisions in real workflows and mental models.\n\n• Mapped user mental models\n• Aligned design decisions with research\n• Validated with real workflows\n\n**This ensured the redesign reflected how users actually work, not how the system was structured.**\n\n[CAROUSEL:layer-language-mapping]\n\n## Simplify through language\nA major focus was UX writing. Plain language replaced technical terminology.\n\n• Labels reflected user vocabulary\n• Descriptions clarified intent and impact\n• Removed jargon throughout the interface\n\n**Language became a design tool, not an afterthought.**\n\n[CAROUSEL:layer-ui-updates]\n\n## Apply consistent patterns\nThe redesign used established patterns from the design system.\n\n• Familiar interactions reduced learning effort\n• Reusable components ensured consistency\n• New patterns introduced only when necessary\n\n**This reinforced predictability across the system.**\n\n[IMAGE:layer-side-drawer-update]\n\n## Add flexibility without friction\nNew capabilities were introduced carefully.\n\n• Layer search improved discoverability\n• Reordering supported user workflows\n• Preferences became easier to scan and manage\n\n**Functionality increased while effort decreased.**\n\n[IMAGE:layer-search-update]',
    whatChanged:
      'The redesigned interface made layer management intuitive and powerful. Users could accomplish complex tasks more easily.\n\n• Reduced cognitive load\n• Faster onboarding for new users\n• Easier training and support\n• Clearer alignment with other tools in the suite\n\n**The redesign demonstrated how small, focused improvements could have system-level impact.**\n\n[CAROUSEL:layer-drawer-animate]',
    whyMatters:
      "Complex tools don't have to feel complicated. By combining human-centered language, familiar interaction patterns, and system-aware design we created an experience that respected both user needs and technical constraints.",
  },
  'interior-design-installations': {
    title: 'Interior Design & Installations',
    subtitle: 'Designing physical spaces as systems for human experience.',
    description:
      'This body of work spans residential, retail, and commercial interiors. Each project balanced aesthetics, function, and business constraints while shaping how people move through and experience a space. Interior design here is not decoration. It is experience design expressed physically.',
    imgSrc: '/static/images/interior-design-installations-cover.jpg',
    role: ['Interior designer', 'Experience designer', 'Client and stakeholder partner'],
    focus: [
      'Spatial design',
      'Experience design',
      'Human-centered environments',
      'Brand expression through space',
    ],
    outcome:
      'Spaces that felt intentional, cohesive, and human. Clients gained environments that supported behavior, identity, and use; not just visual appeal.',
    overview:
      'Across these projects, the goal was consistent: design spaces that communicate purpose and reduce friction. Every decision, from layout to materials, supported how people entered, moved, worked, gathered, and felt.',
    challenge:
      '• Translating abstract needs into physical form\n• Balancing brand, function, and budget\n• Designing for long-term use, not trends\n• Coordinating with contractors, vendors, and clients\n\n**The environment had to work before it looked good.**',
    approach:
      'Every project may be vastly different but we always start with understanding the people who use the space and their intent.\n\n## Design from intent, not aesthetics\n\nEach project started by clarifying the emotional and functional goals.\n\n• What should this space communicate?\n• How should people feel and behave here?\n• What must work flawlessly every day?\n\n**Design choices followed those answers.**\n\n## Treat space as a system\n\nSpaces were designed as connected experiences.\n\n• Entry points and first impressions\n• Flow and movement\n• Zones for focus, collaboration, or rest\n• Material and lighting consistency\n\n**Every element reinforced the whole.**\n\n## Align design with real-world constraints\n\nGood design survives contact with reality.\n\n• Budget-aware material choices\n• Practical layouts for daily use\n• Clear documentation for builders and installers\n\n**Design was successful because it was buildable and usable.**',
    whatChanged:
      '• More intuitive movement through space\n• Clearer expression of brand and purpose\n• Reduced friction in daily use\n• Spaces that aged well over time\n\n**Design supported behavior, not just aesthetics.**',
    whyMatters:
      'Interior design sharpened my ability to:\n\n• Design systems in physical space\n• Think in journeys, not screens\n• Balance creativity with constraints\n\n**Those same principles now drive my product and service design work.**',
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
    title: 'Brand Systems',
    subtitle:
      'Designing visual systems that express identity, scale across mediums, and remain recognizable over time.',
    description:
      'This case study represents a collection of brand systems created over many years for companies, organizations, products, and individuals. Rather than focusing on single logos, the work emphasizes identity as a system; how color, type, mark, and layout work together to communicate meaning consistently across physical and digital environments.',
    imgSrc: '/static/images/logo-design-marketing-cover.png',
    role: ['Brand designer', 'Visual identity designer', 'Marketing design partner'],
    focus: [
      'Identity systems',
      'Logo design',
      'Typography and color systems',
      'Marketing applications',
    ],
    outcome:
      'Cohesive brand systems that helped organizations launch, evolve, and communicate clearly across channels.',
    overview:
      'A logo is not the brand. A brand system is how an identity behaves across every context it appears. This work demonstrates how visual identity must scale, from small digital touchpoints to large physical applications, while preserving clarity, tone, and emotional resonance.',
    challenge:
      '• Brands appearing across many platforms and materials\n• Inconsistent application of logos and visual styles\n• Need for identities that are both distinctive and flexible\n\n**The challenge was creating systems that could adapt without losing their essence.**',
    approach:
      'Some lead-in paragraph text to go here.\n\n## Start with the emotional core\n\nEvery brand began with understanding its emotional epicenter; what it needed to communicate and how it should feel.\n\n• Personality and tone\n• Audience and context\n• Values and intent\n\n**Design choices were made in service of that core.**\n\n## Design for real-world use\n\nBrand systems were designed to work in practice, not just presentations.\n\n• Logos that function at multiple scales\n• Color systems that reproduce reliably\n• Typography that remains legible and expressive\n\n**The goal was durability, not decoration.**\n\n## Think beyond the mark\n\nEach identity extended beyond a logo.\n\n• Marketing materials\n• Digital interfaces\n• Print and physical products\n• Apparel and environmental graphics\n\n**The system was the product.**',
    whatChanged:
      '• Faster brand recognition\n• Consistent visual communication\n• Stronger emotional connection with audiences\n• A foundation for future growth\n\n**Brands could show up confidently wherever they needed to exist.**',
    whyMatters:
      'Brand systems follow the same principles as product and service design. They require:\n\n• Clear intent\n• Thoughtful constraints\n• Scalable structure\n\n**This work reinforced that good design is invisible. When it works, it simply feels right.**',
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
