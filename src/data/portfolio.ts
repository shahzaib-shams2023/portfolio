export interface SocialLink {
  label: string;
  handle: string;
  href: string;
  platform: "github" | "linkedin" | "x" | "website";
}

export interface SkillItem {
  name: string;
  context: string;
  relatedProjectIds: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  code: string;
  summary: string;
  items: SkillItem[];
}

export interface ProjectItem {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  year: string;
  category: string;
  visualTheme: "topology" | "waveform" | "compiler" | "ledger";
  description: string;
  problem: string;
  role: string;
  contributions: string[];
  features: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: "Experience" | "Education" | "Milestone";
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface PhilosophyPillar {
  id: string;
  label: string;
  headline: string;
  detail: string;
}

export interface PortfolioData {
  meta: {
    siteTitle: string;
    siteDescription: string;
    highlightStrip: string;
  };
  identity: {
    name: string;
    displayLineOne: string;
    displayLineTwo: string;
    title: string;
    tagline: string;
    intro: string;
    location: string;
    timezone: string;
    availability: string;
    email: string;
    phone: string;
    copyrightOwner: string;
  };
  about: {
    eyebrow: string;
    leadQuote: string;
    paragraphs: string[];
    interests: string[];
    pillars: PhilosophyPillar[];
  };
  skills: {
    eyebrow: string;
    headline: string;
    description: string;
    categories: SkillCategory[];
  };
  projects: {
    eyebrow: string;
    headline: string;
    description: string;
    items: ProjectItem[];
  };
  experience: {
    eyebrow: string;
    headline: string;
    description: string;
    items: ExperienceItem[];
  };
  services: {
    eyebrow: string;
    headline: string;
    description: string;
    items: ServiceItem[];
  };
  contact: {
    eyebrow: string;
    headline: string;
    description: string;
    socials: SocialLink[];
  };
}

export const portfolioData: PortfolioData = {
  meta: {
    siteTitle: "Shahzaib Shams — Senior Full-Stack & Creative Developer",
    siteDescription:
      "Polyglot Senior Full-Stack Developer building across React, Next.js, Three.js, GSAP, TypeScript, ASP.NET Core, Java Spring Boot, Python, Node.js, and Go.",
    highlightStrip:
      "Polyglot Full-Stack · Next.js · React · Three.js · GSAP · ASP.NET Core · Spring Boot · Python · Node.js · Go",
  },
  identity: {
    name: "Shahzaib Shams",
    displayLineOne: "Senior Full-Stack",
    displayLineTwo: "Developer",
    title:
      "Senior Full-Stack & Creative Technologist · Next.js, Three.js, GSAP, ASP.NET Core, Java & Python",
    tagline:
      "Engineering immersive front-end experiences and polyglot back-end architectures across modern web, enterprise, and cloud stacks.",
    intro:
      "Over 4 years of experience designing, architecting, and deploying modern applications across ecosystems—combining interactive Next.js, React, Three.js, and GSAP front-ends with ASP.NET Core, Java Spring Boot, Python (Django/Flask/FastAPI), Node.js, and cloud-native CI/CD.",
    location: "Karachi, Pakistan",
    timezone: "PKT (UTC+05:00)",
    availability: "Open to senior full-stack & creative-tech collaborations",
    email: "shahzaib.jokhio16@gmail.com",
    phone: "+92 302-2034133",
    copyrightOwner: "Shahzaib Shams",
  },
  about: {
    eyebrow: "01 // About & Philosophy",
    leadQuote:
      "Language-agnostic engineering meets interactive craft—choosing the right runtime, shader, or architecture for every problem.",
    paragraphs: [
      "I am a Senior Full-Stack Developer based in Karachi with over 4 years of experience working across modern programming languages, front-end motion engines, and back-end platforms—from Next.js, React, Three.js, GSAP, and Tailwind CSS on the client to ASP.NET Core (C#), Java (Spring Boot), Python (Django, Flask, FastAPI), Node.js/NestJS, Go, and PHP/Laravel on the server.",
      "Across enterprise SaaS portals, CRM workflows, high-concurrency inventory systems, and interactive web builds, I have led cross-functional Agile teams, mentored 100+ developers, achieved up to an 80% reduction in SPA page load times, and paired Software Engineering (Aptech Learning) with quantitative rigor from an M.A. in Economics (Shah Abdul Latif University).",
    ],
    interests: [
      "Next.js, Three.js & WebGL / GSAP",
      "ASP.NET Core, Spring Boot & Microservices",
      "Polyglot Systems (TS, C#, Java, Python, Go, Rust)",
      "REST, GraphQL & gRPC APIs",
      "Cloud-Native CI/CD & Developer Mentorship",
    ],
    pillars: [
      {
        id: "architecture",
        label: "01 / Polyglot Full-Stack",
        headline:
          "Next.js & TypeScript clients backed by ASP.NET Core, Spring Boot, Python & Node.js.",
        detail:
          "Designing multi-tenant SaaS systems, clean REST/GraphQL/gRPC contracts, RBAC security, and high-availability SQL/NoSQL data layers tailored to each product's scale.",
      },
      {
        id: "interactive",
        label: "02 / Interactive & Motion Craft",
        headline:
          "Three.js shaders, GSAP choreography & up to 80% faster SPA load times.",
        detail:
          "Blending WebGL visual storytelling, smooth Lenis scroll physics, and Tailwind CSS architecture with strict Core Web Vitals budgets and accessibility.",
      },
      {
        id: "leadership",
        label: "03 / Engineering Leadership",
        headline:
          "Coding standards, peer reviews & 100+ developers mentored.",
        detail:
          "Leading Agile/Scrum teams from requirements analysis through automated testing, Docker containerization, and resilient CI/CD deployments.",
      },
    ],
  },
  skills: {
    eyebrow: "02 // Technical Capabilities",
    headline: "Languages, Frameworks & Stack",
    description:
      "Working across every modern programming language and web layer—select any technology or filter by discipline to inspect how it is applied.",
    categories: [
      {
        id: "frontend",
        title: "Frontend Development",
        code: "FE-01",
        summary:
          "Interactive web applications, SSR/RSC architectures, WebGL shaders, and fluid motion choreography.",
        items: [
          {
            name: "React.js & Next.js",
            context:
              "App Router, Server Components, streaming SSR, and high-performance SPAs serving thousands of daily users.",
            relatedProjectIds: [
              "enterprise-saas-portal",
              "inventory-management-system",
              "spa-api-platform",
            ],
          },
          {
            name: "Three.js, WebGL & GLSL",
            context:
              "Real-time 3D scenes, custom fragment/vertex shaders, and GPU-budgeted interactive browser canvases.",
            relatedProjectIds: ["spa-api-platform"],
          },
          {
            name: "GSAP & ScrollTrigger",
            context:
              "Timeline choreography, pinned horizontal storytelling, scrubbed scroll animations, and matchMedia responsiveness.",
            relatedProjectIds: ["spa-api-platform"],
          },
          {
            name: "Framer Motion & Lenis",
            context:
              "Physics-based UI spring transitions and synchronized smooth scrolling.",
            relatedProjectIds: ["spa-api-platform"],
          },
          {
            name: "Tailwind CSS & Modern CSS",
            context:
              "Design token systems, fluid typography, Grid/Flexbox layouts, and rendering optimizations cutting load times by 80%.",
            relatedProjectIds: ["spa-api-platform", "enterprise-saas-portal"],
          },
          {
            name: "Vue.js, Angular & Svelte",
            context:
              "Cross-framework component engineering, reactive state stores, and enterprise UI migration.",
            relatedProjectIds: ["crm-business-portals"],
          },
        ],
      },
      {
        id: "backend",
        title: "Backend Development",
        code: "BE-02",
        summary:
          "Enterprise APIs, multi-tenant SaaS architectures, microservices, and real-time distributed backends.",
        items: [
          {
            name: "ASP.NET Core & .NET",
            context:
              "Clean Architecture web APIs in C#, Entity Framework Core, SignalR real-time hubs, and enterprise RBAC.",
            relatedProjectIds: ["enterprise-saas-portal"],
          },
          {
            name: "Java & Spring Boot",
            context:
              "Multi-tenant SaaS backends, microservices, Spring Security RBAC, and high-throughput enterprise portals.",
            relatedProjectIds: ["enterprise-saas-portal", "crm-business-portals"],
          },
          {
            name: "Python (Django, Flask, FastAPI)",
            context:
              "High-concurrency inventory tracking, async FastAPI microservices, and automated reporting pipelines.",
            relatedProjectIds: [
              "inventory-management-system",
              "crm-business-portals",
              "spa-api-platform",
            ],
          },
          {
            name: "Node.js, Express & NestJS",
            context:
              "Event-driven APIs, modular TypeScript services, WebSockets, and BFF gateways.",
            relatedProjectIds: ["spa-api-platform"],
          },
          {
            name: "Go (Golang) & Rust",
            context:
              "Low-latency concurrent services, CLI tooling, and memory-safe performance-critical backends.",
            relatedProjectIds: ["inventory-management-system"],
          },
          {
            name: "PHP & Laravel",
            context:
              "Rapid full-stack web portals, queue workers, and Eloquent-backed business applications.",
            relatedProjectIds: ["crm-business-portals"],
          },
          {
            name: "RESTful, GraphQL & gRPC APIs",
            context:
              "Schema-driven APIs, caching strategies, payment gateways, and third-party data synchronization.",
            relatedProjectIds: [
              "enterprise-saas-portal",
              "crm-business-portals",
              "spa-api-platform",
            ],
          },
        ],
      },
      {
        id: "languages",
        title: "Programming Languages",
        code: "LG-03",
        summary:
          "Full-spectrum fluency across typed, scripting, systems, query, and shader languages.",
        items: [
          {
            name: "TypeScript & JavaScript (ES6+)",
            context:
              "End-to-end type safety across React, Next.js, Node.js, and motion libraries.",
            relatedProjectIds: [
              "enterprise-saas-portal",
              "inventory-management-system",
              "spa-api-platform",
            ],
          },
          {
            name: "C# (.NET)",
            context:
              "Enterprise ASP.NET Core services, LINQ data access, async pipelines, and strongly-typed domain logic.",
            relatedProjectIds: ["enterprise-saas-portal"],
          },
          {
            name: "Java",
            context:
              "Object-oriented enterprise platforms, Spring Boot APIs, and scalable multi-tenant systems.",
            relatedProjectIds: ["enterprise-saas-portal", "crm-business-portals"],
          },
          {
            name: "Python",
            context:
              "Django/Flask/FastAPI services, data automation, and quantitative scripting.",
            relatedProjectIds: [
              "inventory-management-system",
              "spa-api-platform",
            ],
          },
          {
            name: "Go & Rust",
            context:
              "Concurrent backend microservices, high-throughput workers, and systems utilities.",
            relatedProjectIds: ["inventory-management-system"],
          },
          {
            name: "PHP",
            context:
              "Laravel web applications, REST integrations, and server-rendered business systems.",
            relatedProjectIds: ["crm-business-portals"],
          },
          {
            name: "C / C++",
            context:
              "Foundational algorithms, memory management, and systems-level problem solving.",
            relatedProjectIds: [],
          },
          {
            name: "SQL & GLSL",
            context:
              "Relational query optimization across PostgreSQL/MySQL/MSSQL and custom WebGL shaders.",
            relatedProjectIds: [
              "inventory-management-system",
              "crm-business-portals",
              "spa-api-platform",
            ],
          },
        ],
      },
      {
        id: "frameworks",
        title: "Frameworks & Libraries",
        code: "FW-04",
        summary:
          "Modern full-stack, creative-coding, and enterprise frameworks across every major ecosystem.",
        items: [
          {
            name: "Next.js & React",
            context:
              "Production React Server Components, App Router APIs, and responsive SPAs.",
            relatedProjectIds: ["enterprise-saas-portal", "spa-api-platform"],
          },
          {
            name: "ASP.NET Core",
            context:
              "High-performance .NET web APIs, middleware pipelines, and identity management.",
            relatedProjectIds: ["enterprise-saas-portal"],
          },
          {
            name: "Spring Boot",
            context:
              "Enterprise Java REST/GraphQL backends, security filters, and service orchestration.",
            relatedProjectIds: ["enterprise-saas-portal", "crm-business-portals"],
          },
          {
            name: "Django, Flask & FastAPI",
            context:
              "Full-featured Python ORM backends alongside lightweight async API services.",
            relatedProjectIds: ["inventory-management-system", "spa-api-platform"],
          },
          {
            name: "NestJS & Express",
            context:
              "Structured Node.js microservices, validation pipes, and scalable server gateways.",
            relatedProjectIds: ["spa-api-platform"],
          },
          {
            name: "Three.js, R3F & GSAP",
            context:
              "Experiential 3D/WebGL scenes, shaders, and timeline-driven scroll animations.",
            relatedProjectIds: ["spa-api-platform"],
          },
          {
            name: "Vue / Nuxt, Angular & Laravel",
            context:
              "Versatile delivery across enterprise front-end and full-stack MVC teams.",
            relatedProjectIds: ["crm-business-portals"],
          },
        ],
      },
      {
        id: "databases",
        title: "Databases",
        code: "DB-05",
        summary:
          "High-availability database design, indexing, caching, and ORM modeling across SQL and NoSQL.",
        items: [
          {
            name: "PostgreSQL & MySQL",
            context:
              "Relational schema design, ACID transactions, indexing, and complex reporting queries.",
            relatedProjectIds: [
              "inventory-management-system",
              "crm-business-portals",
            ],
          },
          {
            name: "SQL Server (MSSQL)",
            context:
              "Enterprise .NET/Java relational persistence, stored procedures, and analytical workloads.",
            relatedProjectIds: ["enterprise-saas-portal"],
          },
          {
            name: "MongoDB (NoSQL)",
            context:
              "Flexible document schemas for high-throughput CRM portals and dynamic data feeds.",
            relatedProjectIds: ["crm-business-portals", "spa-api-platform"],
          },
          {
            name: "Redis & Caching",
            context:
              "Sub-millisecond response caching, session stores, pub/sub, and rate limiting.",
            relatedProjectIds: ["spa-api-platform"],
          },
          {
            name: "Prisma, EF Core & Hibernate",
            context:
              "Type-safe migrations and ORM query optimization across TypeScript, .NET, and Java.",
            relatedProjectIds: ["enterprise-saas-portal"],
          },
        ],
      },
      {
        id: "tools",
        title: "Tools & Platforms",
        code: "TL-06",
        summary:
          "Cloud-native infrastructure, containers, CI/CD automation, and modern deployment pipelines.",
        items: [
          {
            name: "Docker & Kubernetes",
            context:
              "Containerized multi-service environments and scalable cloud-native orchestration.",
            relatedProjectIds: ["enterprise-saas-portal", "spa-api-platform"],
          },
          {
            name: "AWS, Azure & GCP",
            context:
              "Cloud compute, managed databases, object storage, and serverless edge deployments.",
            relatedProjectIds: ["enterprise-saas-portal"],
          },
          {
            name: "Git, GitHub Actions & CI/CD",
            context:
              "Automated testing, linting, container builds, and zero-downtime release pipelines.",
            relatedProjectIds: [
              "crm-business-portals",
              "inventory-management-system",
            ],
          },
          {
            name: "Vercel, Cloudflare & Linux",
            context:
              "Global edge hosting, Nginx reverse proxies, and Core Web Vitals optimization.",
            relatedProjectIds: ["spa-api-platform"],
          },
        ],
      },
      {
        id: "other",
        title: "Other Relevant Skills",
        code: "OT-07",
        summary:
          "Software architecture principles, automated quality gates, accessibility, and engineering mentorship.",
        items: [
          {
            name: "OOP, SOLID & Design Patterns",
            context:
              "Clean, extensible architecture across C#, Java, Python, Go, and TypeScript systems.",
            relatedProjectIds: [
              "enterprise-saas-portal",
              "inventory-management-system",
            ],
          },
          {
            name: "Unit, Integration & E2E Testing",
            context:
              "Playwright, Jest/Vitest, xUnit, JUnit, and pytest for reliable production releases.",
            relatedProjectIds: ["inventory-management-system"],
          },
          {
            name: "Agile / Scrum & Mentorship",
            context:
              "Requirements analysis, peer code reviews, and mentoring 100+ full-stack developers.",
            relatedProjectIds: ["spa-api-platform"],
          },
          {
            name: "WCAG Accessibility & Web Vitals",
            context:
              "Semantic DOM, keyboard navigation, reduced-motion support, and LCP/INP/CLS tuning.",
            relatedProjectIds: ["spa-api-platform"],
          },
        ],
      },
    ],
  },
  projects: {
    eyebrow: "03 // Selected Works",
    headline: "Featured Case Studies",
    description:
      "Core platforms and full-stack systems architected across multi-tenant SaaS, high-concurrency inventory operations, CRM workflows, and enterprise SPAs.",
    items: [
      {
        id: "enterprise-saas-portal",
        index: "01",
        name: "Enterprise SaaS Portal",
        subtitle: "Multi-Tenant SaaS & RBAC Platform",
        year: "Featured Project",
        category: "SaaS Architecture · Full-Stack",
        visualTheme: "topology",
        description:
          "Architected and developed a scalable multi-tenant SaaS platform leveraging Java/Spring Boot for back-end services and React/TypeScript for a dynamic front-end experience, featuring role-based access control and real-time data visualization.",
        problem:
          "Enterprise tenants require strict data isolation, granular role-based permissions, and live operational visibility without sacrificing cloud-native scalability.",
        role: "Full-Stack Architect & Developer",
        contributions: [
          "Architected the multi-tenant back-end in Java/Spring Boot with role-based access control (RBAC).",
          "Built the dynamic React and TypeScript front-end featuring real-time data visualization views.",
          "Designed the platform around cloud-native deployment principles for scalable multi-tenant operation.",
        ],
        features: [
          "Multi-tenant isolation & RBAC",
          "Real-time operational data visualization",
          "Cloud-native deployment architecture",
        ],
        technologies: ["Java", "Spring Boot", "React.js", "TypeScript", "Docker"],
      },
      {
        id: "inventory-management-system",
        index: "02",
        name: "Inventory Management System",
        subtitle: "High-Concurrency Tracking & Automated Reporting",
        year: "Featured Project",
        category: "Python / Django · React & TypeScript",
        visualTheme: "ledger",
        description:
          "Developed a high-concurrency inventory tracking system utilizing Python/Django for the back-end and React/TypeScript for the interactive front-end, incorporating automated reporting and comprehensive unit testing coverage.",
        problem:
          "Concurrent inventory updates and manual reporting workflows introduce stock discrepancies and slow down operational decision-making.",
        role: "Full-Stack Developer",
        contributions: [
          "Engineered high-concurrency inventory tracking endpoints and data models in Python/Django.",
          "Created the interactive React/TypeScript front-end for live stock monitoring and workflow management.",
          "Implemented automated reporting pipelines backed by comprehensive unit test coverage.",
        ],
        features: [
          "High-concurrency inventory tracking",
          "Automated operational reporting",
          "Comprehensive unit testing coverage",
        ],
        technologies: ["Python", "Django", "React.js", "TypeScript", "Unit Testing"],
      },
      {
        id: "spa-api-platform",
        index: "03",
        name: "Enterprise SPA & GraphQL/REST Platform",
        subtitle: "80% Faster Front-End & Cached API Layer",
        year: "2024 — Present",
        category: "Genone Technologies · Production System",
        visualTheme: "waveform",
        description:
          "Enterprise-grade full-stack web architecture built with Spring Boot, Django, React, and TypeScript to serve thousands of daily users, pairing advanced authentication and caching with heavily optimized front-end delivery.",
        problem:
          "Heavy Single Page Applications and uncached API calls degrade responsiveness and bottleneck daily active enterprise users.",
        role: "Senior Full-Stack Developer",
        contributions: [
          "Designed and implemented REST and GraphQL APIs with advanced authentication and caching strategies.",
          "Optimized React & TypeScript SPAs and CSS rendering to achieve an 80% reduction in page load times.",
          "Delivered features end-to-end across remote Agile teams using Spring Boot and Django.",
        ],
        features: [
          "80% page load time reduction",
          "REST & GraphQL APIs with caching",
          "Scaled for thousands of daily users",
        ],
        technologies: ["Spring Boot", "Django", "React.js", "TypeScript", "GraphQL"],
      },
      {
        id: "crm-business-portals",
        index: "04",
        name: "CRM Systems & Payment Sync Portals",
        subtitle: "SQL/NoSQL Persistence & Third-Party Integrations",
        year: "2020 — 2022",
        category: "Squad Cloud · Production System",
        visualTheme: "compiler",
        description:
          "Engineered complex CRM systems and business portals using Java (Spring Boot) and Python frameworks, backed by dual SQL/NoSQL database optimization, third-party payment APIs, and automated CI/CD delivery.",
        problem:
          "Disconnected client management tools and manual payment/data synchronization slow down internal operations and increase deployment risk.",
        role: "Full-Stack Developer",
        contributions: [
          "Built CRM workflows and business portals in Java (Spring Boot) and Python to streamline client management.",
          "Managed high-availability database design and optimization across SQL and NoSQL environments.",
          "Integrated third-party REST/GraphQL APIs for payment processing and data synchronization with CI/CD automation.",
        ],
        features: [
          "Payment & data sync API integrations",
          "Hybrid SQL & NoSQL database tuning",
          "Automated Git & CI/CD release pipeline",
        ],
        technologies: ["Java", "Spring Boot", "Python", "MySQL", "MongoDB", "CI/CD"],
      },
    ],
  },
  experience: {
    eyebrow: "04 // Chronicle & Credentials",
    headline: "Experience & Education",
    description:
      "Over 4 years of industry delivery across enterprise SaaS, CRM portals, mobile-first web apps, and technical mentorship in Karachi, Pakistan.",
    items: [
      {
        id: "genone-technologies",
        period: "2024 — Present",
        role: "Senior Full-Stack Developer",
        organization: "Genone Technologies",
        location: "Karachi, Pakistan",
        type: "Experience",
        summary:
          "Architecting and deploying enterprise-grade full-stack web systems using Spring Boot, Django, React, and TypeScript—scaling reliably for thousands of daily users.",
        highlights: [
          "Architected and deployed enterprise full-stack systems using Spring Boot, Django, React, and TypeScript for thousands of daily users.",
          "Designed and implemented REST and GraphQL APIs with advanced authentication and caching strategies.",
          "Optimized React/TypeScript SPAs and CSS practices to achieve an 80% reduction in page load times.",
          "Managed full SDLC delivery within Agile remote cross-functional teams.",
        ],
        stack: ["Spring Boot", "Django", "React.js", "TypeScript", "GraphQL", "REST"],
      },
      {
        id: "aptech-faculty",
        period: "Senior Role",
        role: "Senior Faculty & Developer",
        organization: "Aptech Learning",
        location: "Karachi, Pakistan",
        type: "Experience",
        summary:
          "Led cross-functional development teams building production-ready modules while mentoring and coaching over 100+ developers in modern full-stack engineering.",
        highlights: [
          "Led cross-functional teams building production-ready CRUD modules, authentication systems, REST/GraphQL APIs, and unit tests.",
          "Mentored and coached 100+ developers across React, TypeScript, Java (Spring Boot), and Python frameworks.",
          "Conducted rigorous peer code reviews to enforce coding standards and functional accuracy.",
          "Analyzed software requirements, established project estimates, and kept delivery aligned with release timelines.",
        ],
        stack: ["React.js", "TypeScript", "Java", "Spring Boot", "Python", "Unit Testing"],
      },
      {
        id: "invinci-solutions",
        period: "2022 — 2023",
        role: "Full-Stack Developer",
        organization: "Invinci LT. Solutions",
        location: "Karachi, Pakistan",
        type: "Experience",
        summary:
          "Delivered responsive, mobile-first React and TypeScript applications paired with secure Java/Spring Boot and Python back-end services.",
        highlights: [
          "Developed mobile-first, pixel-accurate web applications in React and TypeScript with seamless API integration.",
          "Implemented Java/Spring Boot and Python back-end services with RBAC, server-side validation, and optimized search.",
          "Partnered with design and product teams to translate complex requirements into scalable software.",
        ],
        stack: ["React.js", "TypeScript", "Spring Boot", "Python", "RBAC"],
      },
      {
        id: "squad-cloud",
        period: "2020 — 2022",
        role: "Full-Stack Developer",
        organization: "Squad Cloud",
        location: "Karachi, Pakistan",
        type: "Experience",
        summary:
          "Engineered complex CRM systems and business portals with Java (Spring Boot) and Python, spanning SQL/NoSQL optimization, payment integrations, and CI/CD automation.",
        highlights: [
          "Engineered complex CRM systems and business portals using Java (Spring Boot) and Python frameworks.",
          "Managed database design and optimization for high availability across SQL and NoSQL environments.",
          "Integrated third-party REST and GraphQL APIs for payment processing and data synchronization.",
          "Championed CI/CD automation and Git workflows for continuous delivery.",
        ],
        stack: ["Java", "Spring Boot", "Python", "MySQL", "MongoDB", "CI/CD"],
      },
      {
        id: "edu-aptech",
        period: "2020 — 2023",
        role: "Advanced Diploma in Software Engineering",
        organization: "Aptech Learning",
        location: "Karachi, Pakistan",
        type: "Education",
        summary:
          "Comprehensive technical foundation in modern software development, Object-Oriented Programming (OOP), and full-stack architecture.",
        highlights: [
          "Focused on Object-Oriented Programming (OOP), full-stack web architecture, React, TypeScript, Java, and Python.",
        ],
        stack: ["OOP", "React.js", "TypeScript", "Java", "Python"],
      },
      {
        id: "edu-salu",
        period: "2021 — 2023",
        role: "Master of Arts in Economics",
        organization: "Shah Abdul Latif University",
        location: "Pakistan",
        type: "Education",
        summary:
          "Analytical and quantitative research training strengthening structured problem-solving and data analysis for complex software systems.",
        highlights: [
          "Applied quantitative modeling and analytical rigor directly transferable to system architecture and data-driven engineering.",
        ],
        stack: ["Quantitative Analysis", "Research", "Problem Solving"],
      },
    ],
  },
  services: {
    eyebrow: "05 // Solutions & Practice",
    headline: "What I Build",
    description:
      "Full-spectrum engineering across every major front-end, back-end, and creative-web stack—tailored to your product's scale and goals.",
    items: [
      {
        id: "srv-01",
        index: "01",
        title: "Experiential & Modern Frontends",
        tagline: "Next.js, React, Three.js, GSAP & Tailwind CSS.",
        description:
          "High-craft SPAs, SSR web platforms, and immersive interactive experiences pairing motion choreography and WebGL shaders with up to 80% faster load times.",
        deliverables: [
          "Next.js, React, Vue & Angular web apps",
          "Three.js / WebGL & GSAP motion systems",
          "Accessible, mobile-first Tailwind UIs",
        ],
      },
      {
        id: "srv-02",
        index: "02",
        title: "Enterprise Polyglot Backends",
        tagline: "ASP.NET Core, Spring Boot, Python, Node.js & Go.",
        description:
          "Multi-tenant SaaS architectures, microservices, and resilient business portals built with C#/.NET, Java Spring Boot, Django/FastAPI, NestJS, Go, or Laravel.",
        deliverables: [
          "ASP.NET Core & Java Spring Boot platforms",
          "Python (Django/FastAPI) & Node.js/NestJS APIs",
          "RBAC, authentication & clean validation",
        ],
      },
      {
        id: "srv-03",
        index: "03",
        title: "APIs, Databases & Integrations",
        tagline: "REST, GraphQL, gRPC, SQL & NoSQL at scale.",
        description:
          "Schema-driven API engineering, Redis caching strategies, third-party payment & sync pipelines, and high-availability SQL Server, PostgreSQL, MySQL & MongoDB tuning.",
        deliverables: [
          "REST, GraphQL & gRPC service contracts",
          "PostgreSQL, MySQL, MSSQL & MongoDB tuning",
          "Redis caching & payment gateway sync",
        ],
      },
      {
        id: "srv-04",
        index: "04",
        title: "Architecture, Testing & Cloud CI/CD",
        tagline: "Code standards, Docker, Kubernetes & cloud delivery.",
        description:
          "Raising engineering velocity through peer code reviews, automated unit/E2E testing, containerization, and automated AWS/Azure/GCP/Vercel release pipelines.",
        deliverables: [
          "Docker, Kubernetes & GitHub Actions CI/CD",
          "Unit, integration & Playwright E2E suites",
          "Technical mentorship & architecture audits",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "06 // Initiate Dialogue",
    headline: "Let’s build scalable software together.",
    description:
      "Based in Karachi, Pakistan and experienced with remote cross-functional teams. Available for senior full-stack engineering, creative frontend builds, and SaaS architecture consulting.",
    socials: [
      {
        label: "LinkedIn",
        handle: "linkedin.com/in/shahzaibshams",
        href: "https://www.linkedin.com/in/shahzaib-shams-9150b7269",
        platform: "linkedin",
      },
    ],
  },
};
