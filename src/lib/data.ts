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
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", name: "Material UI" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg", name: "Bootstrap" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", name: "Express" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", name: "GitHub" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", name: "Figma" },
];

export const projects = [
  {
    id: 1,
    title: "Kevta",
    description: "Kevta — Full-stack agile task and board app. Built and maintained a monorepo with Next.js 15 (React 19, App Router) and Node.js/Express (TypeScript), MongoDB/Mongoose, JWT + Google OAuth, workspaces, Kanban-style boards with custom columns, rich-text task descriptions (TipTap), comments, and workspace management.",
    image: "/kevta.png",
    link: "https://kevta.matrixmindsit.com/",
    github: "https://github.com/matrixmindsit-eg/todo-list",
    tech: "React, Next.js, TypeScript, Tailwind CSS, Node.js, MongoDB",
    type: "Personal Project",
  },
  {
    id: 2,
    title: "Safety Zone (2025)",
    description: "Developed modern, responsive web applications using React, Next.js, and TypeScript. Implemented reusable UI components using Tailwind CSS. Translated Figma designs into clean, maintainable frontend code. Ensured cross-browser compatibility and consistent UI behavior.",
    image: "/safty zone.png",
    link: "#",
    tech: "React, Next.js, TypeScript, Tailwind CSS",
    type: "Client Project",
  },
  {
    id: 3,
    title: "Course Master Platform (2023)",
    description: "Built an e-learning platform for teachers and students. Implemented course uploads, attendance tracking, and multi-tenant features. Worked on scalable UI flows and dashboard components.",
    image: "/cm.png",
    link: "#",
    tech: "React, Next.js, TypeScript, Tailwind CSS",
    type: "Client Project",
  },
  {
    id: 4,
    title: "Oriented Coders Dashboard (2022-2023)",
    description: "Developed the official marketing website. Built an internal dashboard to manage jobs, news, reviews, and applications. Ensured responsive layouts and cross-browser compatibility.",
    image: "/oc-dashboard1.png",
    link: "#",
    tech: "React, Next.js, TypeScript, Tailwind CSS",
    type: "Client Project",
  },
];

export const experience = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Matrix Minds IT",
    date: "2025 - Present",
    points: [
      "Developed and maintained frontend features using React.js and Next.js.",
      "Built responsive user interfaces optimized for desktop and mobile devices.",
      "Integrated UI components with backend REST APIs securely.",
      "Collaborated with designers and backend developers to deliver production-ready features.",
      "Worked on form-based and workflow-driven interfaces to improve usability."
    ]
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Oriented Coders",
    date: "Oct 2023 - Oct 2025",
    points: [
      "Developed modern, responsive web applications using React, Next.js, and TypeScript.",
      "Implemented reusable UI components using Tailwind CSS.",
      "Translated Figma designs into clean, maintainable frontend code.",
      "Ensured cross-browser compatibility and consistent UI behavior."
    ]
  }
];
