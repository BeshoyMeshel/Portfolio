"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function ContactSection() {
  const contactDetails = [
    {
      icon: <FiMail className="text-2xl" />,
      label: "Email",
      value: "beshomeshel15@gmail.com",
      href: "mailto:beshomeshel15@gmail.com",
      color: "text-green-400",
      glowClass: "hover:shadow-[0_0_30px_rgba(74,222,128,0.15)] hover:border-green-400/30",
      actionText: "Email me",
      desc: "Available for contract & permanent roles"
    },
    {
      icon: <FiPhone className="text-2xl" />,
      label: "Phone",
      value: "+20 127 580 9921",
      href: "tel:+201275809921",
      color: "text-blue-400",
      glowClass: "hover:shadow-[0_0_30px_rgba(96,165,250,0.15)] hover:border-blue-400/30",
      actionText: "Call directly",
      desc: "Mon - Fri, 9 AM - 6 PM (GMT+2)"
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      label: "Location",
      value: "Cairo, Egypt",
      href: null,
      color: "text-purple-400",
      glowClass: "hover:shadow-[0_0_30px_rgba(192,132,252,0.15)] hover:border-purple-400/30",
      actionText: "Cairo & Remote",
      desc: "Available for local & global projects"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/beshoy-meshel-8177bb268/",
      color: "hover:text-[#0077b5] hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30",
      handle: "/in/beshoy-meshel"
    },
    {
      icon: <FaGithub className="text-xl" />,
      label: "GitHub",
      href: "https://github.com/BeshoyMeshel",
      color: "hover:text-white hover:bg-white/10 hover:border-white/20",
      handle: "@BeshoyMeshel"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-24 z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Get in <span className="text-green-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Looking for a Front-End Developer to join your team or build a high-performance web experience? Let&apos;s connect and discuss how I can help.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto"></div>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactDetails.map((item, idx) => {
            const CardContent = (
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-gray-300 group-hover:${item.color} group-hover:bg-white/10 transition-all duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-2">
                    {item.label}
                  </h3>
                  <p className="text-xl font-bold text-white mb-3 break-all tracking-tight leading-snug group-hover:text-white transition-colors">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {item.href && (
                  <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 group-hover:text-white transition-colors duration-300">
                    <span>{item.actionText}</span>
                    <FiArrowUpRight className="text-sm transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                )}
              </div>
            );

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`group relative overflow-hidden bg-white/[0.02] border border-white/[0.08] p-8 rounded-3xl backdrop-blur-md transition-all duration-300 ${item.glowClass} flex flex-col justify-between h-full`}
              >
                {item.href ? (
                  <a href={item.href} className="block h-full w-full">
                    {CardContent}
                  </a>
                ) : (
                  <div className="h-full w-full">
                    {CardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Social Connect panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/[0.01] border border-white/[0.05] rounded-3xl p-8 backdrop-blur-md max-w-2xl mx-auto text-center w-full"
        >
          <h4 className="text-lg font-semibold text-white mb-2">Connect on Professional Platforms</h4>
          <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
            Explore my code repositories, contributions, and professional background.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-between gap-6 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-gray-300 transition-all duration-300 font-medium ${link.color} group`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-xl">{link.icon}</div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{link.label}</p>
                    <p className="text-sm text-white group-hover:opacity-90">{link.handle}</p>
                  </div>
                </div>
                <FiArrowUpRight className="text-base text-gray-500 group-hover:text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
