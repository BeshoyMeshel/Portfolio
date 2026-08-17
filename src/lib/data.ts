import React from "react";
import { FaHome, FaUser, FaBriefcase, FaTools, FaProjectDiagram, FaPhone } from "react-icons/fa";

export const links = [
  { id: "home", label: "Home", icon: React.createElement(FaHome) },
  { id: "about", label: "About Me", icon: React.createElement(FaUser) },
  { id: "experience", label: "Experience", icon: React.createElement(FaBriefcase) },
  { id: "skills", label: "Skills", icon: React.createElement(FaTools) },
  { id: "projects", label: "Projects", icon: React.createElement(FaProjectDiagram) },
  { id: "contact", label: "Contact Me", icon: React.createElement(FaPhone) },
];

export const logos = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", name: "Next.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS3" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", name: "GitHub" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", name: "Figma" },
];

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"]
  },
  {
    title: "UI & Styling",
    skills: ["Tailwind CSS", "Responsive Design", "Mobile-First Design", "Accessibility (WCAG)", "Figma to Code"]
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "REST APIs", "Vercel", "AI Dev Tools (Cursor, Claude, ChatGPT)"]
  },
  {
    title: "State Management",
    skills: ["Context API", "React Hooks"]
  },
  {
    title: "Core Concepts",
    skills: ["Component-Based Architecture", "Reusable Components", "API Integration", "Clean Code", "Performance Optimization"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Matrix Minds IT — Company Website",
    description: "Official corporate website developed to showcase IT services, featuring a mobile-first responsive design and an SEO-optimized structure. Focused on high performance and clean UI components for an optimal user experience.",
    image: "/Screenshot (1620).png",
    link: "https://matrixmindsit.com",
    hasPage: true,
    tech: "React.js, Next.js, TypeScript, Tailwind CSS",
    type: "Company Website",
  },
  {
    id: 2,
    title: "Kevta — Task & Board Management Platform",
    description: "A collaborative Kanban-style project management platform featuring workspace organization, board management, and structured task workflows. Built to streamline team tracking with drag-and-drop mechanics and custom task boards.",
    image: "/kevta-img.png",
    link: "https://kevta.app/",
    github: "", // Left blank as per CV info
    tech: "React.js, Next.js, TypeScript, Tailwind CSS",
    type: "Collaborative Platform",
  },
  {
    id: 3,
    title: "Course Master — E-Learning Platform",
    description: "A role-based e-learning dashboard for instructors and students. Facilitates structured learning paths, content organization, enrollment handling, and dynamic data rendering via REST API integrations.",
    image: "/cm.png",
    link: "#",
    tech: "Next.js, TypeScript, Tailwind CSS",
    type: "E-Learning Platform",
  },
  {
    id: 4,
    title: "Safety Zone — Fire Protection Dashboard",
    description: "An internal management system and operational dashboard designed for a fire protection firm to coordinate services and operations. Implements responsive admin interfaces for secure, seamless data handling.",
    image: "/safty zone.png",
    link: "#",
    tech: "React.js, Next.js, Tailwind CSS",
    type: "Internal Dashboard",
  },
];

export const experience = [
  {
    id: 1,
    role: "Front-End Developer",
    company: "Matrix Minds IT",
    date: "Oct 2025 – Present",
    points: [
      "Build and maintain web applications using React.js, Next.js, and TypeScript.",
      "Develop responsive interfaces for desktop and mobile devices.",
      "Integrate REST APIs and dynamic frontend workflows.",
      "Collaborate with designers and backend developers in a cross-functional team environment.",
      "Improve maintainability through reusable components and structured architecture."
    ]
  },
  {
    id: 2,
    role: "Front-End Developer",
    company: "Oriented Coders",
    date: "Oct 2023 – Oct 2025",
    points: [
      "Developed modern web applications using React.js and Next.js.",
      "Converted Figma designs into responsive and production-ready interfaces.",
      "Improved component structure and overall code quality.",
      "Worked within a team environment following professional development workflows.",
      "Tested applications across browsers and screen sizes to ensure compatibility."
    ]
  },
  {
    id: 3,
    role: "Freelance Front-End Developer",
    company: "Remote / Project-Based",
    date: "Dec 2022 – Oct 2023",
    points: [
      "Delivered responsive web applications for clients in remote collaboration environments.",
      "Communicated directly with clients to gather requirements and deliver production-ready solutions.",
      "Integrated REST APIs and optimized frontend performance.",
      "Leveraged AI tools to enhance development workflow and productivity."
    ]
  }
];
