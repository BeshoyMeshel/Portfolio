"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaPhone } from "react-icons/fa";

export default function Home() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  
  

  const logos = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", name: "Next.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg", name: "Bootstrap" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", name: "Material-UI" },


  ];

  const links = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About Me", icon: <FaUser /> },
    { id: "skills", label: "Skills", icon: <FaTools /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "contact", label: "Contact Me", icon: <FaPhone /> },
  ];

  const projects = [
    {
      id: 1,
      title: "German cars Website",
      description: "German Cars is a responsive web platform built with Next.js, TypeScript, and Tailwind CSS, featuring smooth Framer Motion animations. It showcases premium German brands like BMW, Audi, Porsche, and Mercedes-Benz with detailed car insights in a sleek browsing experience.",
      image: "/German cars Photo.png",
      link: "https://german-cars-lmtp.vercel.app/",
    },
    {
      id: 2,
      title: "Todo-list App",
      description: "A clean and interactive To-Do List app built with Next.js and TypeScript, styled using Tailwind CSS. Users can add, edit, and delete tasks with smooth animations and persistence (e.g., via localStorage). A lightweight yet functional app for managing daily to-dos.",
      image: "/Todo-list Photo.png",
      link: "https://todo-list-7w9.pages.dev/",
    },

  ];


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // بعد 50px يظهر الـ blur
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

  if (!windowSize.width) return null; // لو لسة مش جاهز على الكلاينت

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent!");
  };


  return (
    <div className="relative bg-black text-white overflow-x-hidden">

      {/* ===== FLOATING LOGOS FULL PAGE ===== */}
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


      {/* ===== HEADER ===== */}
      <header
        className={`fixed top-0 w-full h-16 md:h-20 z-50 shadow-md transition-all duration-300 border-b border-gray-800 
    ${scrolled ? "bg-black/70 backdrop-blur-md" : "bg-black/100"}`}
      >
        <nav className="max-w-10xl mx-auto flex justify-between  items-center px-16 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300">
            {/* Static dot */}
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>

            {/* Name */}
            <span
              className="text-2xl md:text-4xl font-bold tracking-wide text-white"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Beshoy
            </span>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-12 text-white font-medium">
            {links.map((link) => (
              <li
                key={link.id}
                className={`flex items-center gap-1 cursor-pointer relative transition-colors duration-300 ${active === link.id ? "text-blue-500" : "text-white"
                  }`}
                onClick={() => {
                  setActive(link.id);
                  const section = document.getElementById(link.id);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                {link.icon}
                <span
                  className={`hidden md:inline relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 ${active === link.id
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
            I build <span className="text-blue-400 font-semibold">fast, accessible, and scalable</span> web UIs. Let’s craft <span className="text-blue-400 font-semibold">delightful user experiences</span>.
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
            <a href="https://github.com/besho157" target="_blank" className="hover:text-blue-400 transition"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/beshoy-meshel-8177bb268/" target="_blank" className="hover:text-blue-400 transition"><FaLinkedin /></a>
            <a href="mailto:beshoymeshel15@gmail.com" className="hover:text-blue-400 transition"><SiGmail /></a>
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-8 tracking-wide">
          About Me
        </h2>

        <p className="max-w-3xl text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
          I’m a <span className="text-blue-400 font-semibold">passionate Frontend Developer</span> who loves building <span className="text-blue-400 font-semibold">fast, interactive, and accessible web applications</span>. Always learning and pushing limits to deliver <span className="text-blue-400 font-semibold">clean, scalable, and user-friendly products</span>.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl text-left">
          <div className="bg-gray-900 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-blue-500 mb-2">Skills</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>HTML, CSS, JavaScript, TypeScript</li>
              <li>React, Next.js, Tailwind CSS</li>
              <li>Responsive & Accessible Design</li>
              <li>Version Control (Git)</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-blue-500 mb-2">Interests</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Web Performance Optimization</li>
              <li>Learning New Frameworks & Libraries</li>
              <li>UI/UX Design Principles</li>
              <li>Open Source Contribution</li>
            </ul>
          </div>
        </div>

        <a
          href="/Beshoy_Meshel_FrontEnd_Developer.pdf"
          download
          className="mt-10 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
        >
          Download CV
        </a>

      </section>


      {/* ===== SKILLS ===== */}
      <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-8 text-center z-10">
        <h2 className="text-4xl font-bold text-blue-400 mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition flex flex-col items-center justify-center"
            >
              <Image src={logo.src} alt={logo.name} width={80} height={80} />
              <p className="mt-3 text-gray-300 font-medium">{logo.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-16 bg-black text-center text-white relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-12 tracking-wide">
          Projects
        </h2>

        <div className="grid gap-10 max-w-4xl w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-auto-fit minmax(300px, 1fr)">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="rounded-xl mb-4 w-full object-cover"
              />
              <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 flex-1 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition font-semibold"
              >
                View Project
              </a>
            </div>
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
                  <span className="font-semibold">Email:</span> beshomeshel15@gmail.com
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
              Prefer email? Use the form or click the address to open your mail app.
            </p>
          </div>

          {/* نموذج الرسالة */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 p-10 border border-gray-700 rounded-2xl shadow-2xl space-y-5 hover:scale-105 transition-transform duration-300"
          >
            <div>
              <label className="block text-sm mb-2 text-gray-300">Your Name</label>
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
              <label className="block text-sm mb-2 text-gray-300">Your Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">Message</label>
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
            <h3 className="text-lg font-semibold text-blue-500 mb-3">Beshoy Meshel</h3>
            <p className="text-sm text-gray-500">
              Frontend Developer passionate about crafting modern and scalable web apps.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-500 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-400">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
              <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Socials */}
          <div>
            <h3 className="text-lg font-semibold text-blue-500 mb-3">Connect</h3>
            <div className="flex gap-6 text-xl">
              <a href="https://github.com/besho157" target="_blank" className="hover:text-blue-400"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/beshoy-meshel-8177bb268/" target="_blank" className="hover:text-blue-400"><FaLinkedin /></a>
              <a href="https://www.facebook.com/besho.meshei" target="_blank" className="hover:text-blue-400"><FaFacebook /></a>
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
