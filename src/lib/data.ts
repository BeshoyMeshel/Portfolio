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
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"]
  },
  {
    title: "Backend (Working Knowledge)",
    skills: ["Node.js", "Express.js", "REST API Design"]
  },
  {
    title: "UI & Styling",
    skills: ["Tailwind CSS", "Responsive Design", "Mobile-First", "Accessibility (WCAG)", "Figma to Code"]
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "REST APIs", "Vercel", "Cursor", "ChatGPT", "Claude"]
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
    title: "Kevta — Task & Board Management Platform",
    description: "GitHub-like project management platform with workspaces, boards, and item-based task organization. Created Kanban-style boards with draggable items, status columns, and structured task workflows.",
    image: "/kevta-img.png",
    link: "https://kevta.app/",
    github: "https://github.com/matrixmindsit-eg/todo-list",
    tech: "React.js, Next.js, TypeScript, Tailwind CSS",
    type: "Collaborative Platform",
  },
  {
    id: 2,
    title: "Folier — No-Code Portfolio Builder",
    description: "No-code SaaS platform enabling users to build and publish personal portfolio websites without writing code. Implemented customizable templates, live preview, and a streamlined publishing workflow.",
    image: "/folier.png",
    link: "https://folier.app",
    github: "https://github.com/matrixmindsit-eg/portfolio",
    tech: "React.js, Next.js, TypeScript, Tailwind CSS",
    type: "No-Code SaaS Platform",
  },
  {
    id: 3,
    title: "Matrix Minds IT — Company Website",
    description: "Official corporate website showcasing IT services with mobile-first responsive design and SEO-optimized structure.",
    image: "/Screenshot (1620).png",
    link: "https://matrixmindsit.com",
    github: "https://github.com/matrixmindsit-eg/mm-system",
    hasPage: true,
    tech: "React.js, Next.js, TypeScript, Tailwind CSS",
    type: "Company Website",
  },
  {
    id: 4,
    title: "Course Master — E-Learning Platform",
    description: "Role-based e-learning platform with separate dashboards for instructors and students. Implemented course management, enrollment handling, and structured learning workflows.",
    image: "/cm.png",
    tech: "Next.js, TypeScript, Tailwind CSS",
    type: "E-Learning Platform",
  },
  {
    id: 5,
    title: "Safety Zone — Fire Protection System & Dashboard",
    description: "Internal system and dashboard for a fire protection company to manage services and operations.",
    image: "/safty zone.png",
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
      "Integrate REST APIs and implement dynamic frontend workflows.",
      "Collaborate with designers and backend developers in a cross-functional team environment."
    ]
  },
  {
    id: 2,
    role: "Front-End Developer",
    company: "Oriented Coders",
    date: "Oct 2024 – Oct 2025",
    points: [
      "Developed modern web applications using React.js and Next.js.",
      "Converted Figma designs into responsive and production-ready interfaces.",
      "Improved component structure and overall code quality.",
      "Tested applications across browsers and screen sizes to ensure compatibility."
    ]
  }
];
