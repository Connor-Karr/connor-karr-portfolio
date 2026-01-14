export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product management, shopping cart, and payment integration. Features include user authentication, order tracking, and admin dashboard.",
    longDescription: "Built a comprehensive e-commerce solution from scratch with a focus on performance and user experience. Implemented advanced features like real-time inventory management, recommendation system, and analytics dashboard.",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "TailwindCSS"],
    category: "Full Stack",
    featured: true,
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/connorkarr/ecommerce-platform",
    features: [
      "User authentication and authorization",
      "Product search and filtering",
      "Shopping cart with persistent state",
      "Stripe payment integration",
      "Order tracking and history",
      "Admin dashboard for inventory management"
    ],
    status: "completed",
    year: "2023"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
    longDescription: "Developed a Trello-like task management system with real-time collaboration features. Users can create boards, add tasks, assign team members, and track progress with visual kanban boards.",
    image: "/projects/task-manager.jpg",
    tags: ["React", "FastAPI", "PostgreSQL", "WebSocket", "Docker"],
    category: "Full Stack",
    featured: true,
    demoUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/connorkarr/task-manager",
    features: [
      "Real-time collaboration with WebSocket",
      "Drag-and-drop task management",
      "Team member assignments",
      "Due dates and priorities",
      "Activity history and notifications",
      "Responsive mobile design"
    ],
    status: "completed",
    year: "2023"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard that displays current weather conditions and forecasts for multiple locations with interactive maps and charts.",
    longDescription: "Created a comprehensive weather application that fetches data from multiple weather APIs and presents it in an intuitive, visually appealing interface with charts and maps.",
    image: "/projects/weather-dashboard.jpg",
    tags: ["React", "Chart.js", "OpenWeather API", "Mapbox", "TailwindCSS"],
    category: "Frontend",
    featured: false,
    demoUrl: "https://weather.example.com",
    githubUrl: "https://github.com/connorkarr/weather-dashboard",
    features: [
      "Current weather conditions",
      "7-day forecast",
      "Multiple location support",
      "Interactive weather maps",
      "Weather charts and visualizations",
      "Geolocation support"
    ],
    status: "completed",
    year: "2023"
  },
  {
    id: 4,
    title: "AI Chat Application",
    description: "An intelligent chatbot application powered by OpenAI's GPT models with conversation history and custom personality settings.",
    longDescription: "Built an AI-powered chat application that allows users to have natural conversations with AI. Features include conversation history, custom AI personalities, and markdown support.",
    image: "/projects/ai-chat.jpg",
    tags: ["React", "Python", "FastAPI", "OpenAI API", "WebSocket"],
    category: "Full Stack",
    featured: true,
    demoUrl: "https://chat.example.com",
    githubUrl: "https://github.com/connorkarr/ai-chat",
    features: [
      "Real-time AI responses",
      "Conversation history",
      "Custom AI personalities",
      "Markdown message support",
      "Code syntax highlighting",
      "Export conversations"
    ],
    status: "in-progress",
    year: "2024"
  },
  {
    id: 5,
    title: "Portfolio Builder",
    description: "A SaaS platform that helps developers create and customize their portfolio websites without coding, with drag-and-drop interface.",
    longDescription: "Developed a no-code portfolio builder that empowers developers to create stunning portfolio websites. Features include templates, drag-and-drop editor, and one-click deployment.",
    image: "/projects/portfolio-builder.jpg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vercel"],
    category: "Full Stack",
    featured: false,
    demoUrl: "https://portfoliobuilder.example.com",
    githubUrl: "https://github.com/connorkarr/portfolio-builder",
    features: [
      "Drag-and-drop editor",
      "Pre-built templates",
      "Custom domain support",
      "SEO optimization",
      "Analytics dashboard",
      "One-click deployment"
    ],
    status: "in-progress",
    year: "2024"
  },
  {
    id: 6,
    title: "Fitness Tracker API",
    description: "A RESTful API for tracking workouts, nutrition, and fitness goals with user authentication and data visualization endpoints.",
    longDescription: "Created a comprehensive fitness tracking API with endpoints for workout logging, nutrition tracking, and progress analytics. Includes JWT authentication and rate limiting.",
    image: "/projects/fitness-api.jpg",
    tags: ["Python", "FastAPI", "PostgreSQL", "JWT", "Docker"],
    category: "Backend",
    featured: false,
    demoUrl: "https://api.fitness.example.com/docs",
    githubUrl: "https://github.com/connorkarr/fitness-tracker-api",
    features: [
      "JWT authentication",
      "Workout logging",
      "Nutrition tracking",
      "Goal setting and tracking",
      "Progress analytics",
      "RESTful API design"
    ],
    status: "completed",
    year: "2023"
  }
];

export const projectCategories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Mobile"
];

export const projectStats = {
  total: projects.length,
  completed: projects.filter(p => p.status === "completed").length,
  inProgress: projects.filter(p => p.status === "in-progress").length,
  featured: projects.filter(p => p.featured).length
};
