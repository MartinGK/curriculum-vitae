export type Lang = "en" | "es";
export type L = Record<Lang, string>;

export const tr = (value: L, lang: Lang) => value[lang];

export const profile = {
  name: "Martin Gainza",
  role: { en: "Senior Software Engineer", es: "Senior Software Engineer" } as L,
  email: "mrtgeka@gmail.com",
  links: {
    calendly: "https://calendly.com/mrtgeka/talk-with-martin",
    linkedin: "https://www.linkedin.com/in/martin-gainza/",
    signal: "https://signal.dreammakers.tech",
  },
  status: { en: "Open to remote roles", es: "Disponible para roles remotos" } as L,
  headline: {
    en: "I design, build and ship full-stack software end to end — web, mobile, backend and cloud — and I measure it by what changes in production.",
    es: "Diseño, construyo y llevo a producción software full-stack de punta a punta — web, mobile, backend y cloud — y lo mido por lo que cambia en producción.",
  } as L,
  about: {
    en: "Senior Software Engineer with 7+ years of experience designing, building, and deploying full-stack software across web, mobile, backend, and cloud environments. Experienced in software architecture, REST and GraphQL APIs, relational databases, asynchronous processing, and LLM integrations across TypeScript, C#, and Python ecosystems. Takes end-to-end technical ownership — from data modeling and APIs to CI/CD and production monitoring — with a focus on reliable, maintainable systems.",
    es: "Senior Software Engineer con más de 7 años de experiencia diseñando, construyendo y desplegando software full-stack en web, mobile, backend y cloud. Experiencia en arquitectura de software, APIs REST y GraphQL, bases de datos relacionales, procesamiento asíncrono e integraciones con LLM en los ecosistemas de TypeScript, C# y Python. Asume la responsabilidad técnica de punta a punta — del modelado de datos y las APIs al CI/CD y el monitoreo en producción — con foco en sistemas confiables y mantenibles.",
  } as L,
};

export const techStack: { group: L; items: string[] }[] = [
  { group: { en: "Languages", es: "Lenguajes" }, items: ["TypeScript", "JavaScript", "C#", "Python", "SQL"] },
  {
    group: { en: "Backend & Data", es: "Backend y datos" },
    items: ["Node.js", "NestJS", ".NET", "Express.js", "PostgreSQL", "Redis", "Drizzle ORM", "Prisma", "REST APIs", "GraphQL"],
  },
  {
    group: { en: "Frontend & Mobile", es: "Frontend y mobile" },
    items: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS", "Zustand", "Storybook"],
  },
  {
    group: { en: "Cloud & DevOps", es: "Cloud y DevOps" },
    items: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Coolify", "Hetzner Cloud", "Cloudflare", "Linux"],
  },
  {
    group: { en: "AI Engineering", es: "Ingeniería de IA" },
    items: ["LLM API Integration", "AI Workflows", "Prompt Engineering", "Provider Fallbacks"],
  },
  {
    group: { en: "Testing & Observability", es: "Testing y observabilidad" },
    items: ["Vitest", "Playwright", "Unit Testing", "Integration Testing", "E2E Testing", "GlitchTip", "Umami"],
  },
  {
    group: { en: "AI Tooling", es: "Herramientas de IA" },
    items: ["Claude Code", "Claude", "Cursor", "Codex", "Gemini CLI", "Grok", "Grok Bots", "ChatGPT"],
  },
];

export const softSkills: L[] = [
  { en: "Leadership", es: "Liderazgo" },
  { en: "Adaptability", es: "Adaptabilidad" },
  { en: "Communication", es: "Comunicación" },
  { en: "Scrum & Kanban", es: "Scrum y Kanban" },
];

export const languages: { name: L; level: L }[] = [
  { name: { en: "Spanish", es: "Español" }, level: { en: "Native", es: "Nativo" } },
  { name: { en: "English", es: "Inglés" }, level: { en: "Bilingual", es: "Bilingüe" } },
  { name: { en: "Portuguese", es: "Portugués" }, level: { en: "Intermediate", es: "Intermedio" } },
];

export type Metric = {
  value: number;
  from?: number;
  prefix?: string;
  suffix?: string;
  label: L;
};

export type Entry = {
  id: string;
  kind: "job" | "client" | "project";
  org: string;
  role: L;
  context?: L;
  /** YYYY-MM */
  start: string;
  /** YYYY-MM, or null while ongoing */
  end: string | null;
  /** Overrides the formatted period when the CV states it differently. */
  periodLabel?: L;
  status?: L;
  url?: string;
  stack: string[];
  metrics?: Metric[];
  bullets: L[];
  children?: Entry[];
};

export const timeline: Entry[] = [
  {
    id: "signal",
    kind: "project",
    org: "Signal",
    role: { en: "AI Visibility Platform", es: "Plataforma de visibilidad en IA" },
    context: { en: "Independent project", es: "Proyecto independiente" },
    start: "2026-09",
    end: null,
    periodLabel: { en: "2026 – Present", es: "2026 – Actualidad" },
    status: { en: "In development", es: "En desarrollo" },
    url: "https://signal.dreammakers.tech",
    stack: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Redis",
      "LLM API Integration",
      "AI Workflows",
      "Provider Fallbacks",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Coolify",
      "E2E Testing",
    ],
    metrics: [
      { value: 118, label: { en: "pull requests merged", es: "pull requests mergeados" } },
      { value: 27, label: { en: "production releases", es: "releases a producción" } },
    ],
    bullets: [
      {
        en: "Architected a multi-tenant AI platform as a modular monolith using TypeScript, Next.js, PostgreSQL, and Drizzle, implementing organization-level authorization and subscription billing.",
        es: "Diseñé una plataforma de IA multi-tenant como monolito modular con TypeScript, Next.js, PostgreSQL y Drizzle, con autorización por organización y facturación por suscripción.",
      },
      {
        en: "Engineered asynchronous LLM evaluation pipelines integrating OpenAI, Anthropic, and Gemini, with pg-boss queues, Redis circuit breakers, concurrency controls, and automated retries.",
        es: "Construí pipelines asíncronos de evaluación con LLM que integran OpenAI, Anthropic y Gemini, con colas pg-boss, circuit breakers en Redis, control de concurrencia y reintentos automáticos.",
      },
      {
        en: "Automated Docker deployments through GitHub Actions and Coolify, coordinating web and worker services with health checks and end-to-end testing.",
        es: "Automaticé los deploys con Docker mediante GitHub Actions y Coolify, coordinando servicios web y workers con health checks y tests end-to-end.",
      },
    ],
  },
  {
    id: "nearsure",
    kind: "job",
    org: "Nearsure",
    role: { en: "Senior Software Engineer", es: "Senior Software Engineer" },
    start: "2023-10",
    end: "2026-09",
    stack: [],
    bullets: [],
    children: [
      {
        id: "bordoai",
        kind: "client",
        org: "BordoAI",
        role: { en: "AI platform", es: "Plataforma de IA" },
        context: { en: "Client project", es: "Proyecto de cliente" },
        start: "2024-10",
        end: "2025-12",
        stack: ["C#", ".NET", "React", "Next.js", "TypeScript", "Storybook", "Radix UI", "React Flow", "MobX", "Tailwind CSS"],
        bullets: [
          {
            en: "Developed Backend for Frontend (BFF) functionality in C# and .NET, integrating backend services with a React and Next.js application.",
            es: "Desarrollé la capa Backend for Frontend (BFF) en C# y .NET, integrando servicios de backend con una aplicación en React y Next.js.",
          },
          {
            en: "Built reusable UI component systems with Storybook and Radix UI, and implemented interactive graph visualizations with React Flow.",
            es: "Construí sistemas de componentes reutilizables con Storybook y Radix UI, e implementé visualizaciones de grafos interactivas con React Flow.",
          },
        ],
      },
      {
        id: "cenexel",
        kind: "client",
        org: "CenExel",
        role: { en: "US clinical organization", es: "Organización clínica de EE. UU." },
        context: { en: "Client project", es: "Proyecto de cliente" },
        start: "2023-10",
        end: "2024-10",
        stack: ["React Native", "Expo", "TypeScript", "React Native Paper", "Zustand", "Node.js", "NestJS", "REST APIs"],
        metrics: [{ value: 653, label: { en: "users on the production app", es: "usuarios en la app en producción" } }],
        bullets: [
          {
            en: "Led full-stack development of a production React Native application, defining its mobile architecture with Expo and TypeScript and coordinating technical decisions across teams.",
            es: "Lideré el desarrollo full-stack de una aplicación React Native en producción, definiendo su arquitectura mobile con Expo y TypeScript y coordinando decisiones técnicas entre equipos.",
          },
          {
            en: "Designed and implemented the supporting NestJS backend: a REST API with its own user management and an integration layer consuming a third-party API.",
            es: "Diseñé e implementé el backend en NestJS: una API REST con gestión de usuarios propia y una capa de integración con una API de terceros.",
          },
        ],
      },
    ],
  },
  {
    id: "vairix",
    kind: "job",
    org: "Vairix",
    role: { en: "Full-Stack Developer", es: "Full-Stack Developer" },
    start: "2023-04",
    end: "2023-10",
    stack: ["Next.js", "Tailwind CSS", "GraphQL", "Node.js", "PostgreSQL", "Unit Testing", "Integration Testing"],
    metrics: [
      { value: 90, from: 5, suffix: "%", label: { en: "test coverage, up from 5%", es: "de cobertura de tests, desde un 5%" } },
    ],
    bullets: [
      {
        en: "Contributed to the architecture and cross-team delivery of a web-based game through its public release.",
        es: "Participé en la arquitectura y la entrega entre equipos de un juego web hasta su lanzamiento público.",
      },
      {
        en: "Increased automated test coverage from 5% to 90%, improving code quality and maintainability.",
        es: "Llevé la cobertura de tests automatizados del 5% al 90%, mejorando la calidad y la mantenibilidad del código.",
      },
    ],
  },
  {
    id: "lanista",
    kind: "project",
    org: "Lanista",
    role: { en: "Multiplayer Browser Game", es: "Juego multijugador en navegador" },
    context: { en: "Independent project", es: "Proyecto independiente" },
    start: "2022-04",
    end: "2023-10",
    status: { en: "Retired", es: "Fuera de producción" },
    stack: ["JavaScript", "React", "Node.js", "Express.js", "REST APIs", "AWS"],
    metrics: [
      { value: 200, prefix: "~", label: { en: "REST API endpoints", es: "endpoints de API REST" } },
      { value: 150, label: { en: "players", es: "jugadores" } },
    ],
    bullets: [
      {
        en: "Independently architected and shipped a full-stack multiplayer browser game on the MERN stack, designing ~200 REST API endpoints and deploying it on AWS.",
        es: "Diseñé y lancé por mi cuenta un juego multijugador full-stack en navegador sobre el stack MERN, con ~200 endpoints de API REST, desplegado en AWS.",
      },
    ],
  },
  {
    id: "flydevs",
    kind: "job",
    org: "Flydevs",
    role: { en: "Full-Stack Developer", es: "Full-Stack Developer" },
    start: "2021-07",
    end: "2022-11",
    stack: ["React", "Next.js", "Tailwind CSS", "GraphQL", "Node.js", "PostgreSQL"],
    bullets: [
      {
        en: "Developed and distributed a shared React component library as a private npm package, enabling modular, maintainable reuse across multiple micro-frontend applications.",
        es: "Desarrollé y distribuí una librería compartida de componentes React como paquete npm privado, reutilizada de forma modular en varias aplicaciones micro-frontend.",
      },
    ],
  },
  {
    id: "globant",
    kind: "job",
    org: "Globant",
    role: { en: "Full-Stack Developer", es: "Full-Stack Developer" },
    start: "2019-06",
    end: "2020-12",
    stack: ["Python", "REST APIs", "GraphQL", "CI/CD"],
    bullets: [
      {
        en: "Developed Python backend functionality and REST and GraphQL API integrations supporting a machine learning product.",
        es: "Desarrollé funcionalidades de backend en Python e integraciones con APIs REST y GraphQL para un producto de machine learning.",
      },
      {
        en: "Implemented frontend components and full-stack features within a continuous-delivery workflow.",
        es: "Implementé componentes de frontend y funcionalidades full-stack dentro de un flujo de entrega continua.",
      },
    ],
  },
];

export const education = {
  degree: { en: "Systems Engineering", es: "Ingeniería en Sistemas" } as L,
  school: "Universidad Tecnológica Nacional",
  period: "2013 – 2018",
};

/** Every technology an entry (or any of its children) lists. */
export function entryStack(entry: Entry): Set<string> {
  const all = new Set(entry.stack);
  entry.children?.forEach((child) => child.stack.forEach((item) => all.add(item)));
  return all;
}

export const ui = {
  nav: {
    timeline: { en: "Timeline", es: "Trayectoria" },
    stack: { en: "Stack", es: "Stack" },
    contact: { en: "Contact", es: "Contacto" },
  },
  bookCall: { en: "Book a call", es: "Agendar una llamada" },
  bookCallShort: { en: "Book a call", es: "Agendar" },
  emailMe: { en: "Email me", es: "Escribime" },
  yearsLabel: { en: "years shipping software", es: "años construyendo software" },
  timelineTitle: { en: "Seven years, told by results", es: "Siete años, contados por resultados" },
  timelineIntro: {
    en: "Pick a technology to see exactly where and when I used it.",
    es: "Elegí una tecnología para ver exactamente dónde y cuándo la usé.",
  },
  filterLabel: { en: "Filter by technology", es: "Filtrar por tecnología" },
  showing: { en: "Showing", es: "Mostrando" },
  clear: { en: "Clear", es: "Quitar" },
  usedIn: { en: "Used in", es: "Usada en" },
  notInTimeline: {
    en: "Part of my toolkit, not tied to a single role below.",
    es: "Parte de mis herramientas, sin un rol puntual en la trayectoria.",
  },
  present: { en: "Present", es: "Actualidad" },
  visit: { en: "Visit", es: "Visitar" },
  education: { en: "Education", es: "Formación" },
  languages: { en: "Languages", es: "Idiomas" },
  softSkills: { en: "How I work", es: "Cómo trabajo" },
  about: { en: "About", es: "Sobre mí" },
  closingTitle: { en: "Hiring for a remote team?", es: "¿Buscás a alguien para un equipo remoto?" },
  closingBody: {
    en: "Let's talk for 30 minutes about the role, the team and what you need shipped.",
    es: "Hablemos 30 minutos sobre el rol, el equipo y qué necesitás llevar a producción.",
  },
  switchLang: { en: "Español", es: "English" },
};
