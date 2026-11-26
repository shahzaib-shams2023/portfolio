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
    siteTitle: "Shahzaib Shams — Senior Full-Stack Engineer",
    siteDescription:
      "Results-driven Senior Full-Stack Developer with 6+ years of experience designing, developing, and deploying scalable web applications across React, Next.js, Three.js, Node.js, Spring Boot, Python, ASP.NET Core, and PHP.",
    highlightStrip:
      "Senior Full-Stack Engineer · 6+ Years · React · Next.js · Three.js · GSAP · Node.js · Spring Boot · Python · ASP.NET Core · Laravel",
  },
  identity: {
    name: "Shahzaib Shams",
    displayLineOne: "Senior Full-Stack",
    displayLineTwo: "Engineer",
    title:
      "Senior Full-Stack Engineer · React, Next.js, Three.js, Node.js, Spring Boot & Python",
    tagline:
      "Engineering scalable web applications, interactive 3D experiences, and resilient backend architectures.",
    intro:
      "Results-driven Senior Full-Stack Developer with 6+ years of experience designing, developing, and deploying scalable web applications. Proficient in JavaScript, TypeScript, Python, Java, PHP, C++, C#, SQL, and HTML/CSS, with expertise in React, Next.js, Three.js, Node.js, Spring Boot, and modern backend technologies.",
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
      "Scalable system architecture meets interactive craft—delivering high-performance software from 3D frontends to enterprise backends.",
    paragraphs: [
      "I am a Senior Full-Stack Engineer based in Karachi with 6+ years of experience designing, developing, and deploying scalable web applications. My stack spans React, Next.js, Three.js, GSAP, and Tailwind CSS on the frontend to Node.js, Java (Spring Boot), Python (Django, Flask, FastAPI), ASP.NET Core (C#), and PHP/Laravel on the backend.",
      "Across enterprise applications, CRM portals, eCommerce platforms, and interactive 3D showcases, I have led cross-functional Agile teams, mentored 100+ developers, achieved up to an 80% reduction in SPA page load times, and paired an Advanced Diploma in Software Engineering (Aptech Learning) with an M.A. in Economics (Shah Abdul Latif University).",
    ],
    interests: [
      "React, Next.js, Three.js & GSAP",
      "Node.js, Spring Boot, Django & ASP.NET Core",
      "RESTful & GraphQL APIs",
      "Cloud Deployments & CI/CD Automation",
      "System Architecture & Developer Mentorship",
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
    headline: "Featured Projects",
    description:
      "Interactive 3D web experiences, AI-powered platforms, intelligent document pipelines, and custom eCommerce solutions.",
    items: [
      {
        id: "hypercar-3d",
        index: "01",
        name: "HyperCar – Interactive 3D Automotive Experience",
        subtitle: "Immersive 3D Showcase & Scroll-Driven Storytelling",
        year: "Featured Project",
        category: "React · TypeScript · Three.js · GSAP",
        visualTheme: "topology",
        description:
          "Designed and developed an immersive, high-end automotive website featuring cinematic visuals, interactive 3D car experiences, smooth scroll-driven animations, and premium storytelling. Focused on delivering an engaging, modern user experience through dynamic transitions, immersive layouts, and responsive design.",
        problem:
          "Standard automotive showcases lack interactive depth and fail to convey the craftsmanship and dynamism of high-performance vehicles on the web.",
        role: "Full-Stack & Creative Developer",
        contributions: [
          "Built interactive 3D car experiences and cinematic camera transitions using Three.js and React.",
          "Choreographed smooth scroll-driven animations and dynamic page transitions with GSAP.",
          "Engineered responsive layouts and performance-tuned rendering in TypeScript.",
        ],
        features: [
          "Interactive 3D automotive experience",
          "Smooth scroll-driven GSAP animations",
          "Responsive, high-craft UI transitions",
        ],
        technologies: ["React", "TypeScript", "Three.js", "GSAP"],
      },
      {
        id: "apple-showcase",
        index: "02",
        name: "Apple Showcase",
        subtitle: "Interactive Product Presentation & Motion UI",
        year: "Featured Project",
        category: "Next.js · Three.js · GSAP",
        visualTheme: "waveform",
        description:
          "Developed a premium Apple-inspired product showcase featuring immersive visuals, interactive product presentations, smooth animations, and scroll-driven storytelling. Focused on pixel-perfect UI, responsive layouts, and engaging interactions to recreate a modern, high-end digital product experience.",
        problem:
          "Recreating flagship hardware launch storytelling on the web requires tight synchronization between 3D models, scroll physics, and responsive typography.",
        role: "Frontend & Creative Developer",
        contributions: [
          "Built interactive 3D product presentations using Next.js and Three.js.",
          "Implemented scroll-driven storytelling and fluid motion sequences with GSAP.",
          "Crafted pixel-perfect, responsive layouts across desktop and mobile viewports.",
        ],
        features: [
          "Interactive 3D product presentations",
          "Scroll-driven GSAP storytelling",
          "Pixel-perfect responsive UI",
        ],
        technologies: ["Next.js", "Three.js", "GSAP"],
      },
      {
        id: "integrity-poolscapes",
        index: "03",
        name: "Integrity Poolscapes",
        subtitle: "Custom WordPress & Payment-Enabled Business Platform",
        year: "Featured Project",
        category: "WordPress · Elementor · Stripe · PayPal",
        visualTheme: "ledger",
        description:
          "Designed and delivered a responsive, conversion-focused business website and service portal built on WordPress and Elementor, complete with integrated Stripe and PayPal payment workflows.",
        problem:
          "Service-based businesses need a fast, SEO-friendly web presence that showcases their portfolio while supporting seamless online payments.",
        role: "Full-Stack WordPress Developer",
        contributions: [
          "Built custom responsive layouts and service showcase pages using WordPress and Elementor.",
          "Integrated Stripe and PayPal payment gateways for seamless client transactions.",
          "Optimized site performance, mobile responsiveness, and on-page SEO.",
        ],
        features: [
          "Custom WordPress & Elementor design",
          "Stripe & PayPal payment integration",
          "SEO & mobile-first optimization",
        ],
        technologies: ["WordPress", "Elementor", "Stripe", "PayPal"],
      },
      {
        id: "autocv-builder",
        index: "04",
        name: "AutoCV – AI-Powered ATS-Friendly CV Builder",
        subtitle: "Structured Resume Generation & Customizable Templates",
        year: "Featured Project",
        category: "Next.js · AI · ATS Optimization",
        visualTheme: "compiler",
        description:
          "Developed an AI-powered CV builder that helps users create professional, ATS-friendly resumes with customizable templates and structured content. Focused on simplifying resume creation, improving readability, and generating job-ready CVs through an intuitive, responsive user interface.",
        problem:
          "Job seekers struggle to format resumes that pass Applicant Tracking Systems (ATS) while maintaining clean, readable visual hierarchy.",
        role: "Full-Stack Developer",
        contributions: [
          "Built an intuitive, responsive Next.js interface for real-time resume editing and preview.",
          "Implemented customizable, ATS-friendly templates with structured content sections.",
          "Integrated AI-assisted content generation to simplify resume creation and improve readability.",
        ],
        features: [
          "AI-powered resume content assistance",
          "ATS-friendly customizable templates",
          "Intuitive, responsive Next.js UI",
        ],
        technologies: ["Next.js", "React", "TypeScript", "AI"],
      },
      {
        id: "docuflow-pipeline",
        index: "05",
        name: "DocuFlow: Intelligent Document & Invoice Processing Pipeline",
        subtitle: "Automated Extraction & Schema-Validated Ingestion",
        year: "Featured Project",
        category: "Python 3.11 · FastAPI · Pydantic v2",
        visualTheme: "ledger",
        description:
          "Engineered an intelligent document and invoice processing pipeline using Python 3.11, FastAPI, and Pydantic v2 to automate structured data extraction, validation, and downstream workflow integration.",
        problem:
          "Manual invoice and document processing is slow, error-prone, and difficult to scale across high-volume operational pipelines.",
        role: "Backend & AI Pipeline Engineer",
        contributions: [
          "Architected high-throughput async API endpoints with Python 3.11 and FastAPI.",
          "Enforced strict schema validation and data normalization using Pydantic v2.",
          "Built automated document parsing and structured output pipelines for reliable downstream consumption.",
        ],
        features: [
          "Async FastAPI processing endpoints",
          "Strict Pydantic v2 schema validation",
          "Automated invoice & document extraction",
        ],
        technologies: ["Python 3.11", "FastAPI", "Pydantic v2"],
      },
      {
        id: "talentmatch-ai",
        index: "06",
        name: "TalentMatch AI: Resume Screening & Rubric Evaluation Platform",
        subtitle: "Automated Candidate Scoring & Structured Evaluation",
        year: "Featured Project",
        category: "Python 3.11 · FastAPI · Pydantic v2",
        visualTheme: "topology",
        description:
          "Developed an AI-driven resume screening and rubric evaluation platform powered by Python 3.11, FastAPI, and Pydantic v2, enabling structured candidate assessment against role-specific criteria.",
        problem:
          "High-volume recruiting teams need consistent, auditable, and fast candidate screening against structured hiring rubrics.",
        role: "Backend & AI Systems Developer",
        contributions: [
          "Built scalable evaluation APIs using Python 3.11 and FastAPI.",
          "Designed strongly-typed rubric schemas and scoring models with Pydantic v2.",
          "Automated resume parsing and structured candidate-to-rubric matching.",
        ],
        features: [
          "Rubric-based candidate evaluation",
          "FastAPI async evaluation service",
          "Pydantic v2 structured scoring models",
        ],
        technologies: ["Python 3.11", "FastAPI", "Pydantic v2"],
      },
    ],
  },
  experience: {
    eyebrow: "04 // Chronicle & Credentials",
    headline: "Experience & Education",
    description:
      "6+ years of industry delivery across enterprise applications, CRM portals, eCommerce platforms, and technical mentorship in Karachi, Pakistan.",
    items: [
      {
        id: "genone-technologies",
        period: "2024 — Present",
        role: "Senior Full-Stack Developer",
        organization: "Genone Technologies",
        location: "Karachi, Pakistan",
        type: "Experience",
        summary:
          "Architecting and deploying scalable full-stack applications using React, Next.js, Node.js, Java, Spring Boot, Python, Django, PHP, and ASP.NET—supporting thousands of daily users.",
        highlights: [
          "Architected and deployed scalable full-stack applications using React, Next.js, Node.js, Java, Spring Boot, Python, Django, PHP, and ASP.NET, supporting thousands of daily users.",
          "Developed secure RESTful and GraphQL APIs using Java, C#, Python, PHP, and Node.js, improving system integration and data performance.",
          "Optimized SPA performance using React, TypeScript, JavaScript, HTML5, CSS3, and modern frontend techniques, reducing page load times by up to 80%.",
          "Built backend services and database solutions using ASP.NET Core, Spring Boot, Django, SQL, and MySQL, ensuring reliability and scalability.",
          "Managed end-to-end SDLC in Agile environments, collaborating with cross-functional remote teams to deliver quality software on schedule.",
        ],
        stack: ["React", "Next.js", "Node.js", "Spring Boot", "Django", "ASP.NET Core"],
      },
      {
        id: "aptech-faculty",
        period: "2021 — 2024",
        role: "Senior Faculty",
        organization: "Aptech Learning",
        location: "Karachi, Pakistan",
        type: "Experience",
        summary:
          "Led cross-functional teams in developing production-ready modules while mentoring and training 100+ developers in modern full-stack engineering.",
        highlights: [
          "Led cross-functional teams in developing production-ready CRUD modules, authentication systems, and REST/GraphQL APIs using React, Node.js, Java, Spring Boot, Python, Django, and ASP.NET Core.",
          "Mentored and trained 100+ developers in JavaScript, TypeScript, Python, Java, C#, PHP, React, and modern backend frameworks, promoting clean code and best practices.",
          "Conducted comprehensive code reviews, enforced coding standards, and improved code quality, maintainability, security, and functional accuracy across projects.",
          "Analyzed technical requirements, estimated project timelines, and coordinated development tasks to ensure on-time delivery within product release schedules.",
        ],
        stack: ["React", "TypeScript", "Node.js", "Spring Boot", "Django", "ASP.NET Core"],
      },
      {
        id: "invinci-solutions",
        period: "2022 — 2023",
        role: "Full-Stack Developer",
        organization: "Invinci LT. Solutions",
        location: "Karachi, Pakistan",
        type: "Experience",
        summary:
          "Developed responsive, SEO-friendly websites and eCommerce platforms using PHP, Laravel, WordPress, Shopify, Magento, and other CMS technologies.",
        highlights: [
          "Developed responsive, SEO-friendly websites and eCommerce platforms using PHP, Laravel, WordPress, Shopify, Magento, and other CMS technologies.",
          "Built custom WordPress themes, plugins, Laravel applications, and Shopify storefronts with secure backend functionality and seamless third-party API integrations.",
          "Optimized website performance, mobile responsiveness, SEO, and eCommerce functionality to improve user experience and conversion potential.",
          "Collaborated with design and product teams to deliver pixel-perfect websites, custom CMS solutions, and scalable eCommerce experiences while maintaining clean coding standards.",
        ],
        stack: ["PHP", "Laravel", "WordPress", "Shopify", "Magento", "SEO"],
      },
      {
        id: "squad-cloud",
        period: "2020 — 2022",
        role: "Full-Stack Developer",
        organization: "Squad Cloud",
        location: "Karachi, Pakistan",
        type: "Experience",
        summary:
          "Engineered scalable CRM systems, business portals, and enterprise applications with SQL/NoSQL optimization, payment gateways, and CI/CD workflows.",
        highlights: [
          "Engineered scalable CRM systems, business portals, and enterprise applications using PHP, Laravel, WordPress, React, Node.js, Java, Spring Boot, Python, Django, and ASP.NET Core.",
          "Designed, managed, and optimized SQL and NoSQL databases, including MySQL, PostgreSQL, MongoDB, and SQL Server, ensuring performance and scalability.",
          "Developed and integrated RESTful and GraphQL APIs, payment gateways, third-party services, and automated data synchronization across platforms.",
          "Implemented CI/CD pipelines, Git-based version control, Docker, and cloud deployment workflows to streamline development, testing, and production releases.",
        ],
        stack: ["Laravel", "React", "Spring Boot", "PostgreSQL", "MongoDB", "Docker"],
      },
      {
        id: "edu-aptech",
        period: "2020 — 2023",
        role: "Advanced Diploma in Software Engineering in Computer Science",
        organization: "Aptech Learning",
        location: "Karachi, Pakistan",
        type: "Education",
        summary:
          "Comprehensive technical foundation in modern software development, Object-Oriented Programming (OOP), and full-stack architecture.",
        highlights: [
          "Focused on Object-Oriented Programming (OOP), full-stack web architecture, React, TypeScript, Java, Python, and enterprise databases.",
        ],
        stack: ["OOP", "React", "TypeScript", "Java", "Python"],
      },
      {
        id: "edu-salu",
        period: "2020 — 2024",
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
