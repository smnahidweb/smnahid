export interface TechnologyItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "UI / Design Systems" | "Forms / Data" | "CMS / Platforms";
  description: string;
  usageContext: string;
  projects: string[];
  level: "Advanced" | "Proficient" | "Specialized";
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  featured: boolean;
  overview: string;
  problem: string;
  solution: string;
  role: string;
  stack: string[];
  features: string[];
  architecturePoints: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string }[];
  image: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  current?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  grade: string;
  period: string;
  status?: string;
  highlights: string[];
}

export interface RecognitionItem {
  id: string;
  title: string;
  term: string;
  issuer: string;
  description: string;
  certificateUrl?: string;
  tag: "Academic Excellence" | "Mentorship" | "Leadership";
}

export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export const PERSONAL_INFO = {
  name: "S.M. Nahid Hasan",
  shortName: "Nahid Hasan",
  title: "Available for opportunities",
  positioning: "Frontend-focused Software Engineer · Full Stack Developer · Product Builder",
  location: "Dhaka, Bangladesh",
  timezone: "UTC+6",
  email: "smnahidhasan788@gmail.com",
  github: "https://github.com/smnahidweb",
  linkedin: "https://linkedin.com/in/smnahidh59/",
  status: "Available for new engineering opportunities",
  yearsExperience: "2+",
  philosophy: "I care about building software that is simple to use, thoughtful in its architecture, and reliable in production.",
  headline: "Building thoughtful, high-performance software for the modern web.",
  subheadline: "Frontend-focused Software Engineer with deep experience crafting resilient production web applications using React, Next.js, TypeScript, and full-stack architecture.",
  bioParagraphs: [
    "I am a Software Engineer who bridges the gap between meticulous design engineering and scalable full-stack systems. With over two years of hands-on experience, my engineering foundation was forged through building intricate frontend applications, which evolved organically into architecting complete full-stack web products.",
    "I approach software development not merely as writing code, but as building reliable products. Every architectural choice, component boundary, and database schema is evaluated against real-world user experience, maintainability, and runtime performance.",
    "Currently pursuing my final year in Computer Science & Engineering at IUBAT while building production products, mentoring emerging engineers in modern web technologies, and constantly refining my mental model of modern software systems."
  ],
  stats: [
    { label: "Years of Experience", value: "2+" },
    { label: "Core Competency", value: "Frontend → Full Stack" },
    { label: "Academic Standing", value: "3.73 / 4.00" },
    { label: "Engineering Mindset", value: "Product First" }
  ]
};

export const ENGINEERING_PRINCIPLES: PrincipleItem[] = [
  {
    number: "01",
    title: "Understand the problem",
    description: "Code is the last step. Deeply analyzing user workflows, edge cases, and requirements precedes architecture.",
    detail: "Before writing any component or database model, I dissect the underlying domain requirements to ensure we are solving the actual problem rather than its symptoms."
  },
  {
    number: "02",
    title: "Design the system",
    description: "Establish clear boundaries, predictable state machines, and resilient contracts between frontend and backend.",
    detail: "Good architecture minimizes mental overhead. I design modular, self-contained systems with explicit data flows and type safety end-to-end."
  },
  {
    number: "03",
    title: "Build maintainable interfaces",
    description: "Write clean, accessible, and self-documenting codebases that empower teams to scale with confidence.",
    detail: "UI code should not be disposable. I construct reusable design systems, strict component APIs, and accessible semantic structures that stand the test of time."
  },
  {
    number: "04",
    title: "Keep complexity intentional",
    description: "Avoid premature optimization and unnecessary abstractions. Introduce complexity only when strictly justified.",
    detail: "Simplicity is a deliberate choice. I prefer straightforward, readable primitives over convoluted abstractions that confuse future maintainers."
  },
  {
    number: "05",
    title: "Ship, measure and improve",
    description: "Production is the source of truth. Continuous iteration based on telemetry, performance metrics, and user feedback.",
    detail: "Software value is realized in the hands of real users. I prioritize tight feedback loops, automated verification, and performance profiling."
  }
];

export const TECHNOLOGIES: TechnologyItem[] = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    level: "Advanced",
    description: "Modern UI library with Concurrent features, custom hooks, and state composition.",
    usageContext: "Core library for building reactive client interfaces, compound component patterns, and interactive UI systems.",
    projects: ["MULYAYON", "DevFlow Hub", "Zenith Commerce", "Apex UI System"]
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Advanced",
    description: "Production framework with App Router, Server Components, Streaming SSR, and optimized asset pipelines.",
    usageContext: "Primary framework for scalable, SEO-optimized web applications, hybrid rendering, and server actions.",
    projects: ["MULYAYON", "DevFlow Hub", "Portfolio Platform"]
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: "Advanced",
    description: "Strict typing, generic abstractions, utility types, and complete end-to-end type safety.",
    usageContext: "Standard language for all production projects, ensuring zero runtime type regressions and resilient APIs.",
    projects: ["MULYAYON", "DevFlow Hub", "Apex UI System", "Zenith Commerce"]
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Advanced",
    description: "Deep mastery of modern ESNext features, event loops, closures, asynchronous patterns, and web APIs.",
    usageContext: "Fundamental runtime knowledge applied across browser execution, DOM performance, and Node.js environments.",
    projects: ["All Applications", "MERN Stack Mentorship"]
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Advanced",
    description: "Utility-first CSS engine, custom token configurations, dynamic theming, and responsive design systems.",
    usageContext: "Rapid design system implementation with custom semantic design tokens, dark mode systems, and fluid typography.",
    projects: ["MULYAYON", "DevFlow Hub", "Apex UI System"]
  },
  {
    name: "HTML5 & CSS3",
    category: "Frontend",
    level: "Advanced",
    description: "Semantic web architecture, accessible DOM structures, modern CSS Grid/Flexbox, and custom CSS variables.",
    usageContext: "Ensuring strict WCAG accessibility standards, proper heading hierarchies, and responsive micro-layouts.",
    projects: ["All Applications"]
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    level: "Proficient",
    description: "Asynchronous runtime for high-throughput server backends, microservices, and tooling scripts.",
    usageContext: "Architecting RESTful services, server-side data processing pipelines, and authentication services.",
    projects: ["MULYAYON Backend API", "DevFlow API", "Zenith Commerce Services"]
  },
  {
    name: "Express",
    category: "Backend",
    level: "Proficient",
    description: "Minimalist web framework for robust routing, middleware pipelines, and RESTful API endpoints.",
    usageContext: "Building structured backend APIs with authentication middleware, error handlers, and rate limiters.",
    projects: ["MULYAYON Backend API", "Zenith Commerce Backend"]
  },
  {
    name: "REST APIs",
    category: "Backend",
    level: "Advanced",
    description: "Designing structured, predictable, versioned REST endpoints with consistent HTTP semantics and status codes.",
    usageContext: "Decoupled architecture contracts between Next.js frontends and Node.js backend services.",
    projects: ["MULYAYON", "DevFlow Hub", "Zenith Commerce"]
  },

  // Database
  {
    name: "PostgreSQL",
    category: "Database",
    level: "Proficient",
    description: "Relational database engine with relational integrity, indexing, joins, and complex constraints.",
    usageContext: "Primary structured database for multi-tenant data, user evaluation records, and transactional schemas.",
    projects: ["MULYAYON", "DevFlow Hub"]
  },
  {
    name: "Prisma ORM",
    category: "Database",
    level: "Proficient",
    description: "Next-generation type-safe ORM for automated migrations, schema modeling, and efficient querying.",
    usageContext: "Type-safe database layer ensuring database models sync directly with TypeScript definitions.",
    projects: ["MULYAYON", "DevFlow Hub"]
  },
  {
    name: "MongoDB",
    category: "Database",
    level: "Proficient",
    description: "Document-oriented NoSQL database for flexible schemas, document modeling, and aggregation pipelines.",
    usageContext: "Used in MERN architectures, rapid prototyping, and content-rich document collections.",
    projects: ["Academic DBMS Mentorship Projects", "Zenith Commerce Collections"]
  },

  // UI / Design Systems
  {
    name: "shadcn/ui",
    category: "UI / Design Systems",
    level: "Advanced",
    description: "Copy-and-paste accessible component architecture built on top of Radix UI primitives.",
    usageContext: "Crafting cohesive, accessible, unstyled primitives into custom design systems with custom tokens.",
    projects: ["MULYAYON", "DevFlow Hub", "Portfolio Platform"]
  },
  {
    name: "Radix UI",
    category: "UI / Design Systems",
    level: "Advanced",
    description: "Unstyled, accessible UI components with full WAI-ARIA compliance and keyboard navigation.",
    usageContext: "Building complex dialogs, popovers, dropdowns, and accessible interactive primitives.",
    projects: ["Apex UI System", "MULYAYON"]
  },
  {
    name: "Lucide Icons",
    category: "UI / Design Systems",
    level: "Advanced",
    description: "Crisp, tree-shakeable SVG icon toolkit with customizable stroke widths and sizes.",
    usageContext: "Consistent visual language and iconography across all user interfaces.",
    projects: ["All Applications"]
  },
  {
    name: "Framer Motion",
    category: "UI / Design Systems",
    level: "Proficient",
    description: "Production-ready motion library for React with physics-based springs and layout transitions.",
    usageContext: "Restrained micro-interactions, layout animations, exit transitions, and scroll-linked UI feedback.",
    projects: ["Portfolio Platform", "Apex UI System", "MULYAYON"]
  },

  // Forms / Data
  {
    name: "React Hook Form",
    category: "Forms / Data",
    level: "Advanced",
    description: "Performant, flexible form state management with uncontrolled inputs and minimal re-renders.",
    usageContext: "Complex enterprise forms, multi-step assessment wizards, and interactive survey inputs.",
    projects: ["MULYAYON", "DevFlow Hub", "Zenith Commerce"]
  },
  {
    name: "Zod",
    category: "Forms / Data",
    level: "Advanced",
    description: "TypeScript-first schema declaration and runtime validation with static type inference.",
    usageContext: "Validating API payloads, form input schemas, and environment configuration variables.",
    projects: ["MULYAYON", "DevFlow Hub", "Portfolio Contact Form"]
  },
  {
    name: "TanStack Table",
    category: "Forms / Data",
    level: "Proficient",
    description: "Headless UI for building powerful tables and datagrids with sorting, filtering, and pagination.",
    usageContext: "Teacher assessment rosters, student evaluation analytics, and high-density data views.",
    projects: ["MULYAYON Evaluation Roster", "DevFlow Dashboard"]
  },
  {
    name: "Recharts",
    category: "Forms / Data",
    level: "Proficient",
    description: "Composable charting library built on React components and SVG primitives.",
    usageContext: "Visualizing student performance trends, evaluation analytics, and system metrics.",
    projects: ["MULYAYON Analytics", "DevPulse Metrics"]
  },

  // CMS / Platforms
  {
    name: "Squarespace",
    category: "CMS / Platforms",
    level: "Specialized",
    description: "Custom platform customization, CSS injections, and client content architecture.",
    usageContext: "Delivering bespoke business websites with custom styling and optimized conversion paths.",
    projects: ["Client Web Solutions"]
  },
  {
    name: "Shopify",
    category: "CMS / Platforms",
    level: "Specialized",
    description: "Liquid templating, store configuration, theme customizations, and checkout setups.",
    usageContext: "Building branded e-commerce storefronts and custom merchant experiences.",
    projects: ["Merchant E-Commerce Deployments"]
  },
  {
    name: "Wix",
    category: "CMS / Platforms",
    level: "Specialized",
    description: "Velo development, dynamic datasets, and responsive layout implementations.",
    usageContext: "Rapid client website deployments with tailored business logic and integrations.",
    projects: ["Client Portfolio Sites"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "mulyayon",
    number: "01",
    title: "MULYAYON",
    tagline: "AI-Powered Assessment & Academic Evaluation Platform",
    category: "EdTech & Full Stack AI Platform",
    featured: true,
    overview: "A comprehensive assessment intelligence platform engineered to modernize academic evaluation for Bangladesh's educational ecosystem. MULYAYON streamlines exam creation, automated rubric-aligned grading, teacher review workflows, and deep student performance analytics.",
    problem: "Traditional academic assessment in large classroom settings is plagued by manual grading delays, inconsistent evaluation criteria, and a lack of granular actionable feedback for students and institutional leadership.",
    solution: "Architected an end-to-end evaluation engine utilizing Next.js, Express, and PostgreSQL with an integrated AI evaluation pipeline. Teachers upload student scripts or assessments, receive rubric-calibrated AI draft grading with line-by-line feedback, and review/override decisions via an ergonomic grading dashboard.",
    role: "Lead Full Stack & Frontend Architect — Designed complete UI system, server action workflows, database schema with Prisma, and AI inference integration pipelines.",
    stack: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Prisma", "AI Inference", "Tailwind CSS", "shadcn/ui", "React Hook Form", "Zod", "Recharts"],
    features: [
      "AI-Assisted Assessment: Rubric-based script evaluation with instant feedback generation",
      "Teacher Review Workflow: Side-by-side rubric verification with real-time score adjustment",
      "Bangladesh-Focused Workflow: Structured for local curriculum formats and grading conventions",
      "High-Density Analytics: Class-wide performance heatmaps, rubric mastery charts, and exportable reports",
      "Granular Role Permissions: Multi-tenant access controls for teachers, moderators, and students",
      "Responsive Grading Console: Keyboard-first interface engineered for rapid evaluation sessions"
    ],
    architecturePoints: [
      "Modular micro-service communication between Next.js App Router frontend and Node/Express AI processing worker",
      "PostgreSQL relational schema managed via Prisma with strict foreign key constraints for academic integrity",
      "Optimistic UI updates for high-speed grading interactions with background synchronization",
      "Strict runtime validation via Zod across all API endpoints and client submission forms"
    ],
    metrics: [
      { label: "Grading Efficiency", value: "65% faster" },
      { label: "Feedback Granularity", value: "Line-by-line" },
      { label: "Type Coverage", value: "100% Strict TS" },
      { label: "Design System", value: "Custom shadcn" }
    ],
    image: "/projects/mulyayon-preview.webp",
    liveUrl: "https://mulyayon.vercel.app",
    githubUrl: "https://github.com/smnahid/mulyayon"
  },
  {
    id: "devflow-hub",
    number: "02",
    title: "DevFlow Hub",
    tagline: "Developer Workflow & Engineering Knowledge Engine",
    category: "Productivity & Developer Tooling",
    featured: false,
    overview: "A focused collaborative workspace and knowledge base built for software engineering teams to manage technical documentation, architecture decision records (ADRs), and sprint deliverables in one unified hub.",
    problem: "Engineering knowledge often gets fragmented across disparate chat threads, outdated wikis, and issue trackers, causing friction during onboarding and architectural reviews.",
    solution: "Built a Markdown-native collaborative platform featuring live AST rendering, tag-based schema querying, and structured sprint decision tracking with seamless Git integration.",
    role: "Full Stack Engineer — Engineered real-time document sync, markdown parser integration, and database indexing.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Lucide"],
    features: [
      "Instant AST Markdown engine with syntax highlighting and LaTeX support",
      "Architecture Decision Record (ADR) lifecycle manager (Draft → Review → Accepted)",
      "Role-based workspace scoping with audit trails and revision histories",
      "Fast full-text search across all engineering documentation"
    ],
    architecturePoints: [
      "Optimized database indexing for sub-10ms full-text documentation search queries",
      "Client-side caching with SWR for instantaneous navigation between workspace nodes"
    ],
    metrics: [
      { label: "Search Latency", value: "<15ms" },
      { label: "Lighthouse Score", value: "98/100" }
    ],
    image: "/projects/devflow-preview.webp",
    githubUrl: "https://github.com/smnahid/devflow-hub"
  },
  {
    id: "zenith-commerce",
    number: "03",
    title: "Zenith Commerce",
    tagline: "High-Performance Modular E-Commerce Storefront",
    category: "Full Stack Web Application",
    featured: false,
    overview: "A lightweight, headless e-commerce experience designed for instant page transitions, dynamic inventory synchronization, and frictionless checkout flows with modern UI polish.",
    problem: "Heavy legacy e-commerce templates suffer from slow time-to-interactive (TTI), bloated bundle sizes, and poor mobile checkout conversion rates.",
    solution: "Crafted a headless storefront utilizing Next.js Server Components for zero-bundle product catalog rendering, paired with resilient client-side state for the shopping bag and checkout validation.",
    role: "Frontend & API Engineer — Built the reactive cart engine, product filtering architecture, and payment gateway integration.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Zod", "Framer Motion"],
    features: [
      "Instant faceted search and multi-criteria product filtering with URL state synchronization",
      "Optimistic cart operations with persistent local cache and server validation",
      "Streamlined multi-step checkout form with robust Zod client & server validation",
      "Mobile-first responsive drawer navigation and thumb-friendly checkout actions"
    ],
    architecturePoints: [
      "Streaming server-side rendering for catalog pages with granular suspense boundaries",
      "Atomic design system with reusable UI tokens for effortless white-label theming"
    ],
    metrics: [
      { label: "Core Web Vitals", value: "100% Green" },
      { label: "Bundle Size", value: "<45kB Initial" }
    ],
    image: "/projects/zenith-preview.webp",
    githubUrl: "https://github.com/smnahid/zenith-commerce"
  },
  {
    id: "apex-ui",
    number: "04",
    title: "Apex UI System",
    tagline: "Accessible Design Tokens & React Component Primitives",
    category: "Design System & Open Source",
    featured: false,
    overview: "An enterprise-grade, accessible React component library crafted with Radix UI primitives and Tailwind CSS. Built to enforce consistent design tokens, dark/light theme switching, and strict keyboard navigation.",
    problem: "Inconsistent UI patterns across projects lead to fragmented user experiences and redundant styling code duplication.",
    solution: "Created a centralized component system with zero accessibility compromises, comprehensive TypeScript prop types, and custom theming variables.",
    role: "Author & Maintainer — Engineered all component primitives, theme token engine, and documentation site.",
    stack: ["React", "TypeScript", "Radix UI", "Tailwind CSS", "Framer Motion"],
    features: [
      "35+ accessible components adhering strictly to WAI-ARIA authoring practices",
      "Seamless light, dark, and system theme token switching without layout shifts",
      "Compound component APIs with intuitive DX and full TypeScript autocompletion"
    ],
    architecturePoints: [
      "Zero-dependency core layer decoupling style tokens from behavior primitives",
      "Tree-shakeable export structure ensuring minimal bundle footprint"
    ],
    metrics: [
      { label: "Accessibility", value: "WCAG AAA" },
      { label: "Component Count", value: "35+ Primitives" }
    ],
    image: "/projects/apex-preview.webp",
    githubUrl: "https://github.com/smnahid/apex-ui-system"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Softvence Agency",
    role: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    period: "2025 — Present",
    type: "Full-time",
    current: true,
    description: "Engineering production-grade web applications, responsive client platforms, and custom digital systems with modern JavaScript/TypeScript ecosystems.",
    responsibilities: [
      "Architect and ship scalable frontend architectures using React, Next.js (App Router), and TypeScript with strict type safety.",
      "Design and integrate RESTful APIs and backend micro-services using Node.js, Express, and PostgreSQL/MongoDB.",
      "Build custom design systems and accessible UI components with Tailwind CSS, shadcn/ui, and Radix UI.",
      "Collaborate with international and local clients to transform product requirements into high-converting, resilient web solutions.",
      "Implement performance optimization strategies resulting in >95 Lighthouse scores across performance, SEO, and accessibility."
    ],
    achievements: [
      "Shipped 15+ bespoke client web platforms with 100% on-time milestone delivery.",
      "Reduced average page load times by 40% through server component migration and intelligent caching.",
      "Established reusable component libraries that accelerated subsequent project delivery by 2.5x."
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS", "shadcn/ui", "Zod"]
  },
  {
    id: "exp-2",
    company: "Academic Department — IUBAT",
    role: "Academic Peer Mentor (C/C++ & MERN Stack)",
    location: "Uttara-10, Dhaka, Bangladesh",
    period: "2022 — 2023",
    type: "Academic Mentorship",
    description: "Selected by university faculty to mentor junior computer science students, lead hands-on programming workshops, and facilitate real-world project development.",
    responsibilities: [
      "Conducted weekly practical programming sessions in C and C++, focusing on memory management, pointers, and data structures.",
      "Mentored student cohorts in Database Management Systems (DBMS) and full-stack web development with the MERN stack.",
      "Guided students through debugging methodologies, clean coding practices, and version control workflows with Git & GitHub.",
      "Evaluated student lab projects and provided structured code reviews to elevate engineering standards."
    ],
    achievements: [
      "Awarded Official Academic Mentor in Spring 2022 for outstanding contribution to C/C++ mentoring.",
      "Awarded Second Academic Mentor in Summer 2022 for DBMS & MERN stack student coaching.",
      "Mentored over 60+ junior students, with 90%+ achieving high letter grades in practical coursework."
    ],
    technologies: ["C", "C++", "JavaScript", "React", "Node.js", "Express", "MongoDB", "SQL / DBMS", "Git"]
  },

];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "edu-1",
    institution: "International University of Business Agriculture and Technology",
    degree: "B.Sc.",
    field: "Computer Science & Engineering",
    grade: "CGPA 3.73 / 4.00",
    period: "2021 — Present",
    status: "4th Year, Running",
    highlights: [
      "Consistent high academic standing with multiple Dean's List honors.",
      "Perfect 4.00/4.00 SGPA achieved in Summer 2023 semester.",
      "Appointed Official Academic Mentor for multiple consecutive semesters (C/C++, DBMS, Web Engineering).",
      "Core coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Computer Networks, Operating Systems."
    ]
  },
  {
    id: "edu-2",
    institution: "Rajshahi Cantonment Board School & College",
    degree: "HSC",
    field: "Science",
    grade: "GPA 5.00 / 5.00",
    period: "2018 — 2020",
    highlights: [
      "Achieved highest possible grade (GPA 5.00) in national curriculum examination.",
      "Concentration in Higher Mathematics, Physics, Chemistry, and Information Technology."
    ]
  },
  {
    id: "edu-3",
    institution: "Bilkarilla B.M. High School",
    degree: "SSC",
    field: "Science",
    grade: "GPA 5.00 / 5.00",
    period: "2016 — 2018",
    highlights: [
      "Achieved perfect GPA 5.00 in national secondary examinations.",
      "Demonstrated excellence in mathematics and general sciences."
    ]
  }
];

export const RECOGNITIONS: RecognitionItem[] = [
  {
    id: "rec-1",
    title: "Academic Excellence — Perfect SGPA 4.00 / 4.00",
    term: "Summer 2023",
    issuer: "IUBAT Academic Faculty",
    tag: "Academic Excellence",
    description: "Achieved a flawless semester GPA of 4.00 / 4.00 in advanced computer science coursework, earning formal recognition for academic distinction.",
    certificateUrl: "https://smnahid.web.app/spga4.jpg"
  },
  {
    id: "rec-2",
    title: "Academic Mentor — C & C++ Programming",
    term: "Spring 2022",
    issuer: "Department of Computer Science & Engineering",
    tag: "Mentorship",
    description: "Recognized for exemplary dedication in mentoring junior students, conducting problem-solving sessions, and guiding hands-on programming projects.",
    certificateUrl: "https://smnahid.web.app/spring.jpg"
  },
  {
    id: "rec-3",
    title: "Academic Mentor — DBMS & MERN Stack",
    term: "Summer 2022",
    issuer: "Department of Computer Science & Engineering",
    tag: "Mentorship",
    description: "Recognized for mentoring peer cohorts in Database Management Systems and modern MERN stack development through practical project coaching.",
    certificateUrl: "https://smnahid.web.app/spring.jpg"
  }
];

export const GITHUB_METRICS = {
  profileUrl: "https://github.com/smnahid",
  username: "smnahid",
  bio: "Frontend-focused Software Engineer · Full Stack & Product Builder",
  publicRepos: 28,
  highlights: [
    { label: "Primary Languages", value: "TypeScript, JavaScript, C++" },
    { label: "Code Focus", value: "Clean Architecture & Design Systems" },
    { label: "Commit Cadence", value: "Consistent & Intentional" },
    { label: "Ecosystem", value: "Next.js, React, Node.js, Prisma" }
  ],
  pinnedRepos: [
    {
      name: "mulyayon",
      description: "AI-powered assessment & evaluation platform for academic institutions with automated grading and teacher analytics.",
      language: "TypeScript",
      stars: 14,
      forks: 4,
      url: "https://github.com/smnahid/mulyayon",
      tags: ["Next.js", "Express", "PostgreSQL", "Prisma", "AI"]
    },
    {
      name: "devflow-hub",
      description: "Developer workflow and architecture decision record management hub with AST Markdown renderer.",
      language: "TypeScript",
      stars: 8,
      forks: 2,
      url: "https://github.com/smnahid/devflow-hub",
      tags: ["React", "Next.js", "PostgreSQL", "Prisma"]
    },
    {
      name: "apex-ui-system",
      description: "Accessible, enterprise design system and tokenized component primitives for React applications.",
      language: "TypeScript",
      stars: 12,
      forks: 3,
      url: "https://github.com/smnahid/apex-ui-system",
      tags: ["Radix UI", "Tailwind CSS", "Framer Motion"]
    },
    {
      name: "zenith-commerce",
      description: "Headless e-commerce storefront with optimistic state updates, streaming SSR, and faceted search.",
      language: "TypeScript",
      stars: 7,
      forks: 1,
      url: "https://github.com/smnahid/zenith-commerce",
      tags: ["Next.js", "Node.js", "Express", "MongoDB"]
    }
  ]
};

export const NAVIGATION_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Engineering", href: "#engineering" },
  { name: "Projects", href: "#projects" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" }
];
