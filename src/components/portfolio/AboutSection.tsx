"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-24 z-10">
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
              I am a <span className="text-white font-semibold"> Front-End Developer</span> experienced in building scalable web applications. With a deep understanding of <span className="text-blue-400 font-medium">React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, and Tailwind CSS</span>, I focus on crafting clean and accessible user interfaces.
            </p>
            <p>
              I am highly skilled in Figma-to-code implementation, REST API integration, responsive design, SEO, accessibility, and ensuring cross-browser compatibility. My goal is always to deliver an exceptional and performant user experience.
            </p>
            <p>
              Beyond coding, I have a background in Law (Assiut University), which instilled in me a strong sense of analytical thinking, attention to detail, and problem-solving—skills that translate perfectly into writing maintainable logic and structuring large codebases.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Beshoy%20Meshel%20-Front-end%20developer.pdf"
              download="Beshoy_Meshel_CV.pdf"
              className="inline-flex items-center gap-3 mt-4 bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-3 rounded-xl text-white font-medium backdrop-blur-md transition-colors"
            >
              <FaDownload /> Download Resume
            </motion.a>
          </motion.div>

          {/* Quick Facts Bento Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 md:col-span-1 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <h3 className="text-blue-400 font-bold mb-2 text-xl">2+ Years</h3>
              <p className="text-gray-400 text-sm">Professional Experience in Frontend Development</p>
            </div>

            <div className="col-span-2 md:col-span-1 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <h3 className="text-purple-400 font-bold mb-2 text-xl">10+ Projects</h3>
              <p className="text-gray-400 text-sm">Delivered robust applications and client sites</p>
            </div>

            <div className="col-span-2 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white font-bold mb-4 text-lg">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {["Component Architecture", "State Management", "Responsive UI", "REST APIs", "Performance Optimization"].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-black/50 border border-white/5 rounded-full text-xs text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
