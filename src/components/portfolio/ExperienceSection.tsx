"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative min-h-screen flex items-center justify-center py-24 z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Work <span className="text-purple-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-white/10 rounded-full">
            <motion.div
              className="absolute top-0 w-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-12 pl-8 md:pl-24">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/[0.07] transition-colors group"
              >
                {/* Glowing Dot */}
                <div className="absolute -left-[37px] md:-left-[101px] top-10 w-5 h-5 rounded-full bg-[#050505] border-4 border-purple-500 z-10 shadow-[0_0_15px_rgba(168,85,247,0.8)] group-hover:scale-125 transition-transform" />

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-gray-300 text-sm whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>

                <ul className="space-y-3 mt-6">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
