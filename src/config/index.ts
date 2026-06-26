import { TECH_STACK } from "../constant/tech-stack";

export const CONFIG = {
  name: {
    first: "Godwin Abraham, Mashiruddin Mohammed",
    last: "& Mohammed Saihaan",
  },
  email: "godwinabraham2905@gmail.com",
  role: "Web, App & AI Automation Developer",
  location: "UAE",
  techStacks: [
    TECH_STACK.nextjs,
    TECH_STACK.reactjs,
    TECH_STACK.typescript,
    TECH_STACK.javascript,
    TECH_STACK.tailwindcss,
    TECH_STACK.reactnative,
    TECH_STACK.flutter,
    TECH_STACK.nodejs,
    TECH_STACK.firebase,
    TECH_STACK.supabase,
    TECH_STACK.postgresql,
    TECH_STACK.openai,
    TECH_STACK.figma,
    TECH_STACK.framer,
    TECH_STACK.webflow,
    TECH_STACK.wordpress,
    TECH_STACK.vercel,
    TECH_STACK.azure,
  ],
  projects: [
    {
      title: "Pictoirel",
      summary:
        "A luxury memory book e-commerce platform — Relationship, Travel, Occasion, Festival & Corporate editions. Built with custom design, product customisation, and seamless checkout.",
      image: "/projects/pictoirel.png",
      techStack: [
        TECH_STACK.wordpress,
        TECH_STACK.javascript,
        TECH_STACK.figma,
      ],
      urls: { demo: "https://pictoirel.com", github: undefined, figma: undefined },
      category: "Web App & Mobile App",
    },
    {
      title: "XAI-IDS",
      summary:
        "An AI-powered Intrusion Detection System using CNN-LSTM for live traffic classification. Features real-time threat logging, SOC Analyst AI, red team attack simulation, and SHAP-based explainability.",
      image: "/projects/xai-ids.jpg",
      techStack: [
        TECH_STACK.openai,
        TECH_STACK.reactjs,
        TECH_STACK.nodejs,
        TECH_STACK.postgresql,
      ],
      urls: { demo: undefined, github: undefined, figma: undefined },
      category: "AI Automation",
    },
    {
      title: "Saim Surfaces",
      summary:
        "A UAE-based flooring and outdoor surfaces company website — supply, installation and transformation of every surface. Covers flooring, outdoor surfaces, repairs & maintenance across sectors.",
      image: "/projects/saim-surfaces.png",
      techStack: [
        TECH_STACK.nextjs,
        TECH_STACK.tailwindcss,
        TECH_STACK.figma,
      ],
      urls: { demo: "https://siamgroup.vercel.app", github: undefined, figma: undefined },
      category: "Web App",
    },
    {
      title: "Intellix Info Tech",
      summary:
        "A UAE-based technology company website covering AI & Machine Learning solutions, chatbot integration, and web/mobile app development — helping businesses streamline operations through intelligent, customised tech.",
      image: "/projects/intellix.png",
      techStack: [
        TECH_STACK.nextjs,
        TECH_STACK.openai,
        TECH_STACK.firebase,
        TECH_STACK.figma,
      ],
      urls: { demo: "https://intellixuae.com", github: undefined, figma: undefined },
      category: "Web App",
    },
  ],
} satisfies Config;
