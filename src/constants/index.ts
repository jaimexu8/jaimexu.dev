import shibaTypeImage from "../assets/Shiba Type.png";
import homemadeHelperImage from "../assets/Homemade Helper.png";
import type { ExperienceItem, Project, BackgroundCircle } from "../types";

export const MAX_MENU_WIDTH = 768;

export const RESUME_PATH = "/jaime_xu_resume.pdf";

export const NAVIGATION_LINKS = [
  { label: "Home", href: "#section1" },
  { label: "Experience", href: "#section2" },
  { label: "Projects", href: "#section3" },
  { label: "Contact", href: "#section4" },
] as const;

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: "Bachelor of Science in Computer Science",
    company: "Purdue University",
    date: "August 2022 - May 2026",
    location: "West Lafayette, IN",
  },
  {
    title: "Software Engineer Intern",
    company: "Tenon",
    date: "May 2025 - August 2025",
    location: "Indianapolis, IN",
    description: [
      "Architected a customizable form SDK using ServiceNow, implementing Role-Based Access Control (RBAC).",
      "Enhanced global accessibility across 90+ custom ServiceNow components by integrating multilingual support.",
      "Collaborated within an Agile/Scrum development environment, participating in daily stand-ups and code reviews.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Fundwurx",
    date: "February 2024 - August 2024",
    location: "Philadelphia, PA",
    description: [
      "Deployed 12+ client-facing REST APIs using TypeScript and PostgreSQL for event management software.",
      "Facilitated management of 40+ events and 700+ service hours by optimizing backend data aggregation.",
      "Increased event signup rates by 25% by implementing a user interest tracking feature with React and Redux.",
    ],
  },
  {
    title: "Software Developer",
    company: "Hack the Future",
    date: "September 2023 - May 2024",
    location: "Philadelphia, PA",
    description: [
      "Developed an administrative dashboard to automate data aggregation, eliminating 30+ hours of monthly work.",
      "Engineered a signup form using React, Tailwind CSS, and MUI, processing 2,100+ user registrations.",
      "Implemented session-based user authentication and authorization to control access to administrative functionalities.",
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Shiba Type",
    description:
      "Customizable typing test website with a competitive leaderboard, shop, and selectable themes.",
    image: shibaTypeImage,
    imageAlt: "Shiba Type Project",
    githubUrl: "https://github.com/jaimexu8/shibatype",
  },
  {
    title: "Homemade Helper",
    description:
      "A web app that allows user to find recipes and chat with an AI cooking assistant.",
    image: homemadeHelperImage,
    imageAlt: "Homemade Helper Project",
    githubUrl: "https://github.com/jaimexu8/homemade-helper",
  },
];

export const BACKGROUND_CIRCLES: BackgroundCircle[] = [
  { className: "bg-circle-1", transformY: 0.3, transformX: 0.15 },
  { className: "bg-circle-2", transformY: -0.4, transformX: 0.25 },
  { className: "bg-circle-3", transformY: 0.35, transformX: -0.2 },
  { className: "bg-circle-4", transformY: -0.25, transformX: 0.3 },
  { className: "bg-circle-5", transformY: 0.45, transformX: -0.3 },
  { className: "bg-circle-6", transformY: -0.35, transformX: 0.2 },
  { className: "bg-circle-7", transformY: 0.5, transformX: -0.4 },
  { className: "bg-circle-8", transformY: -0.6, transformX: 0.35 },
  { className: "bg-circle-9", transformY: 0.25, transformX: -0.5 },
  { className: "bg-circle-10", transformY: -0.45, transformX: 0.6 },
  { className: "bg-circle-11", transformY: 0.7, transformX: -0.25 },
  { className: "bg-circle-12", transformY: -0.55, transformX: 0.4 },
  { className: "bg-circle-13", transformY: 0.8, transformX: -0.3 },
  { className: "bg-circle-14", transformY: -0.9, transformX: 0.5 },
  { className: "bg-circle-15", transformY: 0.4, transformX: -0.7 },
];
