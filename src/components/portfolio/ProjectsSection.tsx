"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center py-24 z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Featured <span className="text-pink-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-pink-500/20 rounded-2xl blur-xl group-hover:bg-pink-500/30 transition-all duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-[#111]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <span className="text-pink-400 font-medium tracking-wider text-sm mb-2 block">
                    {project.type}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl text-gray-300 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2 text-sm text-gray-400">
                  {project.tech.split(", ").map((tech, i) => (
                    <li key={i} className="font-mono text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-pink-400 transition-colors font-medium"
                    >
                      <FaGithub className="text-xl" /> Code
                    </a>
                  )}
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-pink-400 transition-colors font-medium"
                    >
                      <FaExternalLinkAlt className="text-lg" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
