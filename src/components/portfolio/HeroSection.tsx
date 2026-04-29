"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16 relative z-10 w-full">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-8 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium tracking-wide backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
            FRONT-END DEVELOPER
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Modern</span> Web Apps
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Hi, I&apos;m <span className="text-white font-semibold">Beshoy Meshel</span>. Experienced in building scalable web applications using React.js, Next.js, and TypeScript. Skilled in Figma-to-code, REST APIs, and responsive design.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md"
            >
              Let&apos;s Talk
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-6 text-2xl text-gray-500 pt-8 justify-center md:justify-start"
          >
            <a href="https://github.com/BeshoyMeshel" target="_blank" rel="noreferrer" className="hover:text-white hover:-translate-y-1 transition-all">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/beshoy-meshel-8177bb268/" target="_blank" rel="noreferrer" className="hover:text-[#0077b5] hover:-translate-y-1 transition-all">
              <FaLinkedin />
            </a>
            <a href="mailto:beshoymeshel15@gmail.com" className="hover:text-[#ea4335] hover:-translate-y-1 transition-all">
              <SiGmail />
            </a>
          </motion.div>
        </motion.div>

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-[80px] opacity-40 animate-pulse" />
          <div className="absolute inset-0 p-2 rounded-full bg-gradient-to-tr from-blue-500/50 to-purple-500/50 backdrop-blur-3xl border border-white/10 shadow-2xl">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#111]">
              <Image
                src="/My Photo.png"
                alt="Beshoy Meshel"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110 grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
