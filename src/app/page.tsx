"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaTools,
  FaProjectDiagram,
  FaPhone,
} from "react-icons/fa";

export default function Home() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const logos = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      name: "Next.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      name: "TypeScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JavaScript (ES6+)",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "HTML5",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "CSS3",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      name: "Tailwind CSS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      name: "Material UI",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
      name: "Bootstrap",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      name: "Git",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      name: "Express",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      name: "GitHub",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      name: "Figma",
    },
  ];

  const links = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About Me", icon: <FaUser /> },
    { id: "experience", label: "Experience", icon: <FaBriefcase /> },
    { id: "skills", label: "Skills", icon: <FaTools /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "contact", label: "Contact Me", icon: <FaPhone /> },
  ];

  const projects = [
    {
      id: 1,
      title: "Todo Board Application",
      description:
        "A task management and collaboration board. Implemented task creation, editing, and status management with clean UI workflows. Focused on scalable component architecture and user experience.",
      image: "/Todo-list Photo.png",
      link: "https://todo.matrixmindsit.com",
      tech: "React, Next.js, TypeScript, Tailwind CSS",
      type: "Personal Project",
    },
    {
      id: 2,
      title: "Safety Zone (2025)",
      description:
        "Developed modern, responsive web applications using React, Next.js, and TypeScript. Implemented reusable UI components using Tailwind CSS. Translated Figma designs into clean, maintainable frontend code. Ensured cross-browser compatibility and consistent UI behavior.",
      image: "/safty zone.png",
      link: "#",
      tech: "React, Next.js, TypeScript, Tailwind CSS",
      type: "Client Project (Private)",
    },
    {
      id: 3,
      title: "Rovero (2023)",
      description:
        "Developed a mobile application for factory cashback management. Implemented multi-role permissions and user-based edit history. Focused on clean architecture and maintainable UI logic.",
      image: "/rovero1.png",
      link: "#",
      tech: "React Native, TypeScript",
      type: "Client Project (Private)",
    },
    {
      id: 4,
      title: "Course Master Platform (2023)",
      description:
        "Built an e-learning platform for teachers and students. Implemented course uploads, attendance tracking, and multi-tenant features. Worked on scalable UI flows and dashboard components.",
      image: "/cm.png",
      link: "#",
      tech: "React, Next.js, TypeScript, Tailwind CSS",
      type: "Client Project (Private)",
    },
    {
      id: 5,
      title: "Oriented Coders Website & Dashboard (2022-2023)",
      description:
        "Developed the official marketing website. Built an internal dashboard to manage jobs, news, reviews, and applications. Ensured responsive layouts and cross-browser compatibility.",
      image: "/oc-dashboard1.png",
      link: "#",
      tech: "React, Next.js, TypeScript, Tailwind CSS",
      type: "Client Project (Private)",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // Scroll-spy: Update active link based on scroll position using Intersection Observer
  useEffect(() => {
    const sectionIds = ["home", "about", "experience", "skills", "projects", "contact"];
    
    // Wait for DOM to be ready
    const timeoutId = setTimeout(() => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null);

      if (sections.length === 0) return;

      const observerOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        // Find the entry with the highest intersection ratio that's currently intersecting
        let maxRatio = 0;
        let activeId = sectionIds[0];

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio;
            if (ratio > maxRatio) {
              maxRatio = ratio;
              activeId = entry.target.id;
            }
          }
        });

        // Update active state if we found an intersecting section
        if (maxRatio > 0) {
          setActive(activeId);
        } else {
          // Fallback: find the section closest to the top of the viewport
          const scrollPosition = window.scrollY + window.innerHeight / 3;
          let closestSection = sectionIds[0];
          let closestDistance = Infinity;

          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const distance = Math.abs(scrollPosition - sectionTop);

            if (distance < closestDistance && sectionTop <= scrollPosition) {
              closestDistance = distance;
              closestSection = section.id;
            }
          });

          setActive(closestSection);
        }
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      sections.forEach((section) => {
        observer.observe(section);
      });

      // Initial check on mount - determine which section is currently visible
      const checkInitialSection = () => {
        const viewportTop = window.scrollY + window.innerHeight * 0.3;
        let closestSection = sectionIds[0];
        let closestDistance = Infinity;

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const sectionTop = window.scrollY + rect.top;
          const distance = Math.abs(viewportTop - sectionTop);

          if (distance < closestDistance && sectionTop <= viewportTop + 100) {
            closestDistance = distance;
            closestSection = section.id;
          }
        });

        setActive(closestSection);
      };

      checkInitialSection();

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (!windowSize.width) return null; 

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 z-20 pointer-events-none">
        {logos.map((logo, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * (windowSize.height - 100),
              rotate: Math.random() * 360,
            }}
            animate={{
              y: ["100vh", -100],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3,
            }}
            className="absolute"
          >
            <Image src={logo.src} alt={logo.name} width={20} height={20} />
          </motion.div>
        ))}
      </div>

      <header
        className={`fixed top-0 w-full h-16 md:h-20 z-50 shadow-md transition-all duration-300 border-b border-gray-800 
    ${scrolled ? "bg-black/70 backdrop-blur-md" : "bg-black/100"}`}
      >
        <nav className="max-w-10xl mx-auto flex justify-between  items-center px-16 py-4">
          <div className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>

            <span
              className="text-2xl md:text-4xl font-bold tracking-wide text-white"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Beshoy
            </span>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-12 text-white font-medium">
            {links.map((link) => (
              <li
                key={link.id}
                className={`flex items-center gap-1 cursor-pointer relative transition-colors duration-300 ${
                  active === link.id ? "text-blue-500" : "text-white"
                }`}
                onClick={() => {
                  setActive(link.id);
                  const section = document.getElementById(link.id);
                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                {link.icon}
                <span
                  className={`hidden md:inline relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 ${
                    active === link.id
                      ? "after:w-full text-blue-500"
                      : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 px-6 md:px-16 pt-32 bg-black text-white z-10"
      >
        {/* Text */}
        <div className="max-w-lg space-y-6 text-center md:text-left">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 font-semibold text-sm tracking-wide">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            FRONTEND DEVELOPER
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Beshoy Meshel
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Frontend Developer with 2 years of experience building{" "}
            <span className="text-blue-400 font-semibold">
              responsive, scalable, and high-performance
            </span>{" "}
            web applications using JavaScript, TypeScript, React.js, and Next.js. 
            Focused on modern UI/UX best practices, component architecture, state management, 
            and performance optimization.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition shadow-lg shadow-blue-500/40 font-semibold"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition font-semibold"
            >
              Contact Me
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-6 text-2xl text-gray-400 justify-center md:justify-start mt-6">
            <a
              href="https://github.com/BeshoyMeshel"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/beshoy-meshel-8177bb268/"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:beshoymeshel15@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <SiGmail />
            </a>
          </div>
        </div>

        {/* Image with animated shadow */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 40px 10px rgba(0,0,255,0.3)",
                "0 0 60px 20px rgba(0,0,255,0.6)",
                "0 0 40px 10px rgba(0,0,255,0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="rounded-full p-2 bg-gradient-to-tr from-blue-500 to-purple-500"
          >
            <Image
              src="/My Photo.jpg"
              alt="Beshoy"
              width={400}
              height={400}
              className="rounded-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== ABOUT ===== */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-16 bg-black text-center text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-4 tracking-wide">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl text-gray-300 text-lg md:text-xl leading-relaxed mb-12"
        >
          <p>
            I am a Frontend Developer with 2 years of experience building{" "}
            <span className="text-blue-400 font-semibold">
              responsive, scalable, and high-performance
            </span>{" "}
            web applications using JavaScript, TypeScript, React.js, and Next.js. 
            I focus on modern UI/UX best practices, component architecture, state management, 
            and performance optimization. I have experience building{" "}
            <span className="text-blue-400 font-semibold">
              enterprise-level dashboards and complex applications
            </span>
            , delivering clean and maintainable code. I am currently expanding my backend skills 
            with Node.js, Express, and API integrations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl hover:scale-105 hover:shadow-blue-500/20 transition-all duration-300 border border-gray-800 hover:border-blue-500/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <FaBriefcase className="text-blue-400 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-blue-400">Experience</h3>
            </div>
            <ul className="list-none text-gray-300 space-y-4">
              <li className="border-l-2 border-blue-500/50 pl-4">
                <span className="font-semibold text-blue-400 block">Frontend Developer</span>
                <span className="text-sm text-gray-400">Matrix Minds IT | 2025 - Present</span>
              </li>
              <li className="border-l-2 border-blue-500/50 pl-4">
                <span className="font-semibold text-blue-400 block">Frontend Developer</span>
                <span className="text-sm text-gray-400">Oriented Coders | Oct 2022 - Oct 2023</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl hover:scale-105 hover:shadow-blue-500/20 transition-all duration-300 border border-gray-800 hover:border-blue-500/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <FaUser className="text-blue-400 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-blue-400">Education</h3>
            </div>
            <ul className="list-none text-gray-300 space-y-3 mb-6">
              <li className="border-l-2 border-blue-500/50 pl-4">
                <span className="font-semibold text-blue-400 block">Bachelor of Law</span>
                <span className="text-sm text-gray-400">Assiut University | 2019 - 2023</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mb-4 mt-6">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-400 text-xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-400">Languages</h3>
            </div>
            <ul className="list-none text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Arabic: Native
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                English: Advanced
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10"
        >
          <a
            href="/Beshoy Meshel -Frontend developer.pdf"
            download
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105"
          >
            Download CV
          </a>
        </motion.div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section
        id="experience"
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-16 bg-black text-center text-white"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-12 tracking-wide">
          Work Experience
        </h2>

        <div className="max-w-4xl w-full space-y-8">
          <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 text-left">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-1">
                  Frontend Developer
                </h3>
                <p className="text-lg text-gray-300">Matrix Minds IT</p>
              </div>
              <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">
                2025 - Present
              </span>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
              <li>Developed and maintained frontend features using React.js and Next.js</li>
              <li>Built responsive user interfaces optimized for desktop and mobile devices</li>
              <li>Integrated UI components with backend REST APIs</li>
              <li>Collaborated with designers and backend developers to deliver production-ready features</li>
              <li>Worked on form-based and workflow-driven interfaces to improve usability</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 text-left">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-1">
                  Frontend Developer
                </h3>
                <p className="text-lg text-gray-300">Oriented Coders</p>
              </div>
              <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">
                Oct 2022 - Oct 2023
              </span>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
              <li>Developed modern, responsive web applications using React, Next.js, and TypeScript</li>
              <li>Implemented reusable UI components using Tailwind CSS</li>
              <li>Translated Figma designs into clean, maintainable frontend code</li>
              <li>Ensured cross-browser compatibility and consistent UI behavior</li>
              <li>Developed a responsive admin dashboard with authentication and form-based workflows</li>
              <li>Integrated frontend features with backend REST APIs</li>
              <li>Built reusable and scalable UI components with a focus on performance and accessibility</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center px-8 text-center z-10"
      >
        <h2 className="text-4xl font-bold text-blue-400 mb-12">Technical Skills</h2>
        <div className="max-w-6xl w-full space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-6">Frontend Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {logos.slice(0, 6).map((logo, i) => (
                <div
                  key={i}
                  className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition flex flex-col items-center justify-center"
                >
                  <Image src={logo.src} alt={logo.name} width={60} height={60} />
                  <p className="mt-3 text-gray-300 font-medium text-sm">{logo.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-6">UI & Styling</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {logos.slice(6, 9).map((logo, i) => (
                <div
                  key={i}
                  className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition flex flex-col items-center justify-center"
                >
                  <Image src={logo.src} alt={logo.name} width={60} height={60} />
                  <p className="mt-3 text-gray-300 font-medium text-sm">{logo.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-6">Backend & APIs</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition flex flex-col items-center justify-center">
                <Image src={logos[9].src} alt={logos[9].name} width={60} height={60} />
                <p className="mt-3 text-gray-300 font-medium text-sm">{logos[9].name}</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition flex flex-col items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" className="text-blue-400"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" className="text-blue-400"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" className="text-blue-400"/>
                </svg>
                <p className="mt-3 text-gray-300 font-medium text-sm">RESTful APIs</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition flex flex-col items-center justify-center">
                <Image src={logos[11].src} alt={logos[11].name} width={60} height={60} />
                <p className="mt-3 text-gray-300 font-medium text-sm">{logos[11].name}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-6">Tools & Practices</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition flex flex-col items-center justify-center">
                <Image src={logos[10].src} alt={logos[10].name} width={60} height={60} />
                <p className="mt-3 text-gray-300 font-medium text-sm">{logos[10].name}</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition flex flex-col items-center justify-center">
                <Image src={logos[12].src} alt={logos[12].name} width={60} height={60} />
                <p className="mt-3 text-gray-300 font-medium text-sm">{logos[12].name}</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition flex flex-col items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" className="text-blue-400"/>
                </svg>
                <p className="mt-3 text-gray-300 font-medium text-sm">Performance Optimization</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition flex flex-col items-center justify-center">
                <Image src={logos[13].src} alt={logos[13].name} width={60} height={60} />
                <p className="mt-3 text-gray-300 font-medium text-sm">UI/UX ({logos[13].name})</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-16 bg-black text-center text-white relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-4 tracking-wide">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>
        </motion.div>

        <div className="grid gap-8 max-w-6xl w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 flex flex-col overflow-hidden border border-gray-800 hover:border-blue-500/50 group"
            >
              {/* Image container with overlay on hover */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 left-3">
                  <span className="text-xs px-3 py-1.5 bg-blue-500/90 backdrop-blur-sm text-white rounded-full font-medium shadow-lg">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(", ").map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-md border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                {project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="mt-auto inline-flex items-center justify-center gap-2 bg-gray-700/50 text-gray-400 px-4 py-3 rounded-lg font-semibold cursor-not-allowed border border-gray-700">
                    Private Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-16  from-black via-gray-900 to-black text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-12 tracking-wide">
          Contact Me
        </h2>

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12">
          {/* معلومات الاتصال */}
          <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl space-y-6 hover:scale-105 transition-transform duration-300">
            <span className="text-xs uppercase tracking-widest text-gray-400">
              Contact
            </span>
            <h3 className="text-2xl font-bold text-white">
              Let&apos;s build something great.
            </h3>
            <p className="text-gray-400">I usually reply within 24h.</p>

            <div className="space-y-3 mt-6 text-left text-gray-200">
              <p className="flex items-center justify-between bg-gray-700 p-3 rounded hover:bg-gray-600 transition cursor-pointer">
                <span>
                  <span className="font-semibold">Email:</span>{" "}
                  beshomeshel15@gmail.com
                </span>
              </p>

              <p className="flex items-center justify-between bg-gray-700 p-3 rounded hover:bg-gray-600 transition cursor-pointer">
                <span>
                  <span className="font-semibold">Phone:</span> +201275809921
                </span>
              </p>

              <p className="bg-gray-700 p-3 rounded">
                <span className="font-semibold">Location:</span> Cairo, Egypt
              </p>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              Prefer email? Use the form or click the address to open your mail
              app.
            </p>
          </div>

          {/* نموذج الرسالة */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 p-10 border border-gray-700 rounded-2xl shadow-2xl space-y-5 hover:scale-105 transition-transform duration-300"
          >
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your email"
                className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white h-40 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
              >
                Send Message
              </button>
              <button
                type="button"
                className="flex-1 bg-gray-700 px-6 py-3 rounded-lg text-white font-semibold hover:bg-gray-600 transition"
              >
                Hire Me via Email
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-black py-12 mt-12 text-gray-400 z-10 relative border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold text-blue-500 mb-3">
              Beshoy Meshel
            </h3>
            <p className="text-sm text-gray-500">
              Frontend Developer passionate about crafting modern and scalable
              web apps.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-500 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Socials */}
          <div>
            <h3 className="text-lg font-semibold text-blue-500 mb-3">
              Connect
            </h3>
            <div className="flex gap-6 text-xl">
            <a
              href="https://github.com/BeshoyMeshel"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FaGithub />
            </a>
              <a
                href="https://www.linkedin.com/in/beshoy-meshel-8177bb268/"
                target="_blank"
                className="hover:text-blue-400"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/besho.meshei"
                target="_blank"
                className="hover:text-blue-400"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          © 2025 Beshoy Meshel. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
