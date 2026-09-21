"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { BackgroundEffects } from "@/components/portfolio/BackgroundEffects";

export default function MatrixMindsProjectPage() {
  return (
    <div className="relative bg-[#050505] text-white min-h-screen selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      {/* Background decoration */}
      <BackgroundEffects />

      {/* Top Navigation */}
      <div className="absolute top-0 right-0 w-[45vw] h-[45vw] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[35vw] h-[35vw] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />
      <header className="fixed top-0 w-full h-20 z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-white/5 flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-12 w-full flex items-center justify-between">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <FaArrowLeft className="transform group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          <span className="text-sm font-semibold tracking-tight text-white/40">
            CASE STUDY
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-24 relative z-10 space-y-12">
        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-xs text-blue-400 font-semibold tracking-wider uppercase">Project</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Matrix Minds IT <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Company Website
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl pt-2">
            Official corporate website showcasing IT services with mobile-first responsive design and SEO-optimized structure.
          </p>
        </motion.div>

        {/* Live CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <a
            href="https://matrixmindsit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            <FaExternalLinkAlt className="text-sm" /> Visit Live Website
          </a>
            <span className="text-xs text-gray-500 font-mono">matrixmindsit.com</span>
        </motion.div>

        {/* Grid Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/10"
        >
          <div>
            <span className="text-xs text-gray-500 uppercase block mb-1">Project</span>
            <span className="text-white font-medium">Matrix Minds IT — Company Website</span>
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase block mb-1">Stack</span>
            <span className="text-white font-medium">React.js, Next.js, TypeScript, Tailwind CSS</span>
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase block mb-1">Live</span>
            <span className="text-white font-medium">matrixmindsit.com</span>
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase block mb-1">GitHub</span>
            <span className="text-white font-medium">github.com/matrixmindsit-eg/mm-system</span>
          </div>
        </motion.div>

        {/* Detailed Sections */}
        <div className="space-y-12">
          {/* Section 1: Challenge & Context */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-white">Project Description</h2>
            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
              Official corporate website showcasing IT services with mobile-first responsive design and SEO-optimized structure.
            </p>
          </motion.section>

          {/* Section 2: Technical Approach */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-white">Technologies</h2>
            <ul className="space-y-4">
              <li className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="text-blue-400 font-semibold mb-2">Built using</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  React.js, Next.js, TypeScript, and Tailwind CSS.
                </p>
              </li>
            </ul>
          </motion.section>

          {/* Section 3: Tech Stack & Tools */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
              ].map((tech, i) => (
                <span
                  key={i}
                  className="font-mono text-xs px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Footer Navigation */}
        <div className="pt-12 border-t border-white/10 flex justify-between items-center">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <FaArrowLeft className="transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <a
            href="https://matrixmindsit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Visit Live Site <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </main>
    </div>
  );
}
