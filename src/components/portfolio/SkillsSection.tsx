"use client";

import { motion } from "framer-motion";
import { logos } from "@/lib/data";
import Image from "next/image";

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center py-24 z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive list of technologies and tools I work with to build robust, modern web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 hover:border-cyan-500/30 transition-all cursor-default group backdrop-blur-sm shadow-lg"
            >
              <div className="relative w-16 h-16 flex items-center justify-center group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-300 font-medium text-sm text-center group-hover:text-white transition-colors">
                {logo.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
