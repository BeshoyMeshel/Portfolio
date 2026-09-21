"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-24 z-10"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              Front-End Developer with 2+ years building responsive, scalable web apps in React.js, Next.js, and TypeScript.
            </p>

            <p>
              Shipped production dashboards and project-management platforms, translating Figma designs into pixel-accurate, accessible (WCAG) UIs. Fast at picking up new stacks and tools, with strong ability to use AI effectively to accelerate development while reviewing, understanding, and owning the resulting code.
            </p>

            <p>
              Bachelor of Law, Assiut University — career transition into Front-End Development via intensive project-based learning with React.js, Next.js, and TypeScript.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Beshoy-Meshel-Front-End_developer.pdf"
              download
              className="inline-flex items-center gap-3 mt-4 bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-3 rounded-xl text-white font-medium backdrop-blur-md transition-colors"
            >
              <FaDownload />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Quick Facts Bento Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Experience */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <span className="text-xs text-blue-400 font-semibold tracking-wider uppercase block mb-1">Experience</span>
              <h3 className="text-white font-bold text-xl mb-2">2+ years</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Shipped production dashboards and project-management platforms.
              </p>
            </div>

            {/* Core Competencies */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <span className="text-xs text-purple-400 font-semibold tracking-wider uppercase block mb-1">Certification</span>
              <h3 className="text-white font-bold text-xl mb-2">Claude Code 101</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Anthropic (2026)
              </p>
              <a href="https://verify.skilljar.com/c/euj8v6b6jeva" target="_blank" rel="noreferrer" className="text-blue-400 text-sm mt-3 inline-block">Verify certification</a>
            </div>

            {/* Education */}
            <div className="col-span-1 md:col-span-2 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <span className="text-xs text-cyan-400 font-semibold tracking-wider uppercase block mb-1">Education & Transition</span>
              <h4 className="text-white font-bold text-lg mb-1">Bachelor of Law</h4>
              <p className="text-gray-400 text-sm mb-3">Assiut University (2019 – 2023)</p>
              <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-3">
                Transitioned to Front-End Development through intensive project-based learning and hands-on experience with React.js, Next.js, and TypeScript.
              </p>
            </div>

            {/* Languages */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <span className="text-xs text-green-400 font-semibold tracking-wider uppercase block mb-1">Languages</span>
              <ul className="text-gray-300 text-sm space-y-1.5 mt-2">
                <li><span className="text-white font-medium">Arabic:</span> Native</li>
                <li><span className="text-white font-medium">English:</span> Professional Working Proficiency</li>
              </ul>
            </div>

            {/* Additional Info */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <span className="text-xs text-yellow-400 font-semibold tracking-wider uppercase block mb-1">Status</span>
              <ul className="text-gray-300 text-sm space-y-1.5 mt-2">
                <li><span className="text-white font-medium">Military Service:</span> Completed</li>
                <li><span className="text-white font-medium">Location:</span> Cairo, Egypt</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}