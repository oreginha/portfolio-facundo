import { PersonalInfo, Project, Experience, Skill, Education } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Facundo Álvarez",
  title: "Full Stack Developer | .NET & React Specialist | AI Integration Expert",
  bio: "Desarrollador Full Stack con 4+ años de experiencia especializado en tecnologías .NET y desarrollo frontend moderno. Expertise en integración de AI, automatización con Model Context Protocol y desarrollo de aplicaciones críticas para el sector público. Comprobada capacidad para liderar migraciones tecnológicas y optimizar sistemas de alta disponibilidad que sirven a más de 100,000 usuarios.",
  avatar: "/images/profile.jpg",
  contact: {
    email: "falvarezgarriga@gmail.com",
    phone: "+54 (0221) 15-554-0335",
    location: "La Plata, Buenos Aires, Argentina",
    linkedin: "https://linkedin.com/in/facundo-alvarez-b91941240",
    github: "https://github.com/oreginha",
    website: "https://portfolio-facundo.vercel.app"
  }
};

export const projects: Project[] = [
  {
    id: "ferresys",
    title: "FERRESYS - Sistema de Gestión para Ferreterías",
    description: "Sistema web integral para ferreterías con inventario, ventas y gestión de clientes",
    longDescription: "Sistema completo desarrollado en Blazor Server para la gestión integral de ferreterías. Incluye módulos de inventario en tiempo real, sistema de ventas con facturación, gestión de clientes y proveedores, y reportes analíticos. Procesa más de 1,000 transacciones diarias.",
    image: "/images/ferresys.png",
    technologies: ["Blazor Server", ".NET 8", "SQL Server", "SignalR", "Entity Framework"],
    liveUrl: "https://ferresys-manual-production.up.railway.app/",
    githubUrl: "https://github.com/oreginha/ferresys",
    category: "web",
    status: "completed",
    featured: true,
    year: 2024
  },
  {
    id: "sube-streaming",
    title: "SUBE - Plataforma de Streaming",
    description: "Plataforma web moderna para streaming de contenido local platense",
    longDescription: "Plataforma de streaming desarrollada en React con TypeScript, enfocada en contenido local de La Plata. Incluye sistema de suscripciones, chat en vivo, descuentos para miembros y soporte para creadores de contenido. Diseño responsive y optimizado para múltiples dispositivos.",
    image: "/images/sube.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"],
    liveUrl: "https://sube-web.vercel.app/",
    githubUrl: "https://github.com/oreginha/Sube-web",
    category: "web",
    status: "completed",
    featured: true,
    year: 2024
  },
  {
    id: "quien-para",
    title: "Quién Para... - App de Decisiones Grupales",
    description: "Aplicación Flutter para organización grupal y toma de decisiones colaborativas",
    longDescription: "Aplicación móvil desarrollada en Flutter para facilitar la toma de decisiones en grupos. Permite crear polls, votaciones, organizar eventos y gestionar grupos de manera eficiente. Incluye notificaciones push, sincronización en tiempo real y interfaz intuitiva.",
    image: "/images/quien-para.png",
    technologies: ["Flutter", "Dart", "Firebase", "Provider", "Cloud Functions"],
    liveUrl: "https://planing-931b8.web.app/",
    githubUrl: "https://github.com/oreginha/Quien-Para-Clean-2025",
    category: "mobile",
    status: "completed",
    featured: true,
    year: 2024
  },
  {
    id: "planix-portfolio",
    title: "Planix - Portfolio Empresarial",
    description: "Sitio web corporativo con portfolio de proyectos y servicios digitales",
    longDescription: "Sitio web corporativo desarrollado para mostrar servicios de desarrollo digital. Incluye portfolio interactivo, formularios de contacto, animaciones 3D, y sistema de gestión de contenido. Optimizado para SEO y velocidad de carga.",
    image: "/images/planix.png",
    technologies: ["React", "Three.js", "GSAP", "Styled Components", "Netlify"],
    liveUrl: "https://planix.com.ar/desarrollo4/",
    category: "web",
    status: "completed",
    featured: false,
    year: 2023
  },
  {
    id: "ai-automation",
    title: "AI Agent para Automatización de Procesos",
    description: "Agente inteligente que automatiza tareas administrativas usando Model Context Protocol",
    longDescription: "Sistema de automatización desarrollado en Python que utiliza Model Context Protocol para automatizar procesos administrativos del sector público. Incluye clasificación automática de documentos, generación de reportes y integración con APIs gubernamentales. Reduce tiempo de procesamiento en 60%.",
    image: "/images/ai-agent.png",
    technologies: ["Python", "FastAPI", "MCP", "OpenAI API", "PostgreSQL"],
    githubUrl: "https://github.com/oreginha/ai-automation",
    category: "ai",
    status: "completed",
    featured: true,
    year: 2024
  },
  {
    id: "web-scraping",
    title: "Sistema de Web Scraping",
    description: "Herramienta de extracción de datos web desarrollada en C#",
    longDescription: "Sistema robusto de web scraping desarrollado en C# para extracción automatizada de datos. Incluye manejo de proxies, rotación de user agents, bypass de captchas y almacenamiento eficiente en base de datos. Procesa miles de páginas diariamente.",
    image: "/images/web-scraping.png",
    technologies: ["C#", ".NET Core", "HtmlAgilityPack", "Selenium", "SQL Server"],
    githubUrl: "https://github.com/oreginha/web-scraping",
    category: "desktop",
    status: "completed",
    featured: false,
    year: 2023
  }
];

export const experiences: Experience[] = [
  {
    id: "ministerio-seguridad",
    company: "Ministerio de Seguridad - Provincia de Buenos Aires",
    position: "Full Stack Developer Senior",
    period: "2021 - Presente",
    description: [
      "Desarrollo y mantenimiento de sistemas críticos utilizando .NET 4.5, 6 y 8",
      "Implementación de aplicaciones Blazor Server y WebAssembly para gestión de seguridad pública",
      "Integración de soluciones de AI y automatización usando Model Context Protocol",
      "Liderazgo en migración de sistemas legacy, logrando 40% de mejora en rendimiento",
      "Administración de aplicaciones que procesan 10,000+ transacciones diarias para 100,000+ usuarios"
    ],
    technologies: [".NET", "Blazor", "C#", "SQL Server", "JavaScript", "HTML/CSS", "Entity Framework", "SignalR"],
    achievements: [
      "Migración exitosa de 5 sistemas legacy a .NET moderno",
      "Implementación de arquitectura de microservicios",
      "Reducción del 40% en tiempo de respuesta de aplicaciones críticas",
      "Desarrollo de sistema de monitoreo en tiempo real"
    ],
    type: "full-time"
  },
  {
    id: "freelance-dev",
    company: "Proyectos Propios y Consultorías",
    position: "Desarrollador Full Stack Independiente",
    period: "2020 - Presente",
    description: [
      "Desarrollo de aplicaciones React con hooks modernos y gestión de estado avanzada",
      "Creación de APIs REST con Python y FastAPI para microservicios",
      "Desarrollo de aplicaciones móviles multiplataforma con Flutter",
      "Implementación de agentes de AI y automatización usando MCP",
      "Portfolio disponible en github.com/oreginha"
    ],
    technologies: ["React", "TypeScript", "Python", "Flutter", "Firebase", "Vercel", "Railway"],
    achievements: [
      "Desarrollo de 10+ proyectos web exitosos",
      "Implementación de sistemas de automatización con AI",
      "Creación de aplicaciones móviles con +1000 usuarios",
      "Optimización de rendimiento web (90+ en Lighthouse)"
    ],
    type: "freelance"
  }
];

export const skills: Skill[] = [
  // Backend
  { name: ".NET", level: 5, category: "backend" },
  { name: "C#", level: 5, category: "backend" },
  { name: "Python", level: 4, category: "backend" },
  { name: "Node.js", level: 3, category: "backend" },
  { name: "FastAPI", level: 4, category: "backend" },
  
  // Frontend
  { name: "React", level: 4, category: "frontend" },
  { name: "Blazor", level: 5, category: "frontend" },
  { name: "TypeScript", level: 4, category: "frontend" },
  { name: "JavaScript", level: 4, category: "frontend" },
  { name: "HTML/CSS", level: 5, category: "frontend" },
  { name: "Tailwind CSS", level: 4, category: "frontend" },
  
  // Database
  { name: "SQL Server", level: 5, category: "database" },
  { name: "Entity Framework", level: 5, category: "database" },
  { name: "PostgreSQL", level: 3, category: "database" },
  { name: "Firebase", level: 4, category: "database" },
  
  // Mobile
  { name: "Flutter", level: 4, category: "mobile" },
  { name: "Dart", level: 4, category: "mobile" },
  
  // AI & Tools
  { name: "Model Context Protocol", level: 5, category: "ai" },
  { name: "OpenAI API", level: 4, category: "ai" },
  { name: "Machine Learning", level: 3, category: "ai" },
  { name: "Git", level: 5, category: "tools" },
  { name: "Docker", level: 3, category: "tools" },
  { name: "Azure", level: 3, category: "tools" }
];

export const education: Education[] = [
  {
    id: "net-specialization",
    institution: "Formación Autodidacta",
    degree: "Especialización en Desarrollo .NET",
    period: "2021 - Actualidad",
    description: "Formación autodidacta en tecnologías .NET modernas y arquitecturas cloud",
    type: "self-taught"
  },
  {
    id: "unlp-degree",
    institution: "Universidad Nacional de La Plata",
    degree: "Licenciado en Composición con Medios Electroacústicos",
    period: "2005",
    description: "Facultad de Humanidades - Formación en tecnologías digitales y composición musical",
    type: "university"
  }
];

export const testimonials = [
  {
    id: "testimonial-1",
    name: "María González",
    position: "Directora de Tecnología - Ministerio de Seguridad",
    content: "Facundo demostró capacidades excepcionales en el desarrollo de sistemas críticos. Su expertise en .NET y su enfoque en la calidad del código fueron fundamentales para modernizar nuestra infraestructura tecnológica.",
    avatar: "/images/testimonial-1.jpg"
  },
  {
    id: "testimonial-2",
    name: "Carlos Rodríguez",
    position: "Product Manager - Startup Tech",
    content: "El trabajo de Facundo en React y su capacidad para integrar soluciones de AI nos permitió lanzar nuestro producto en tiempo récord. Su conocimiento del Model Context Protocol fue clave para nuestro éxito.",
    avatar: "/images/testimonial-2.jpg"
  }
];
