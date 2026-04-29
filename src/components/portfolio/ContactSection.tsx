"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-24 z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">

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
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Let&apos;s build something great.</h3>
              <p className="text-gray-400">I am currently open for new opportunities. Reach out and I will get back to you within 24 hours.</p>
            </div>

            <div className="space-y-6">
              <a href="mailto:beshoymeshel15@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-green-400 group-hover:bg-green-500/10 transition-colors">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white font-medium group-hover:text-green-400 transition-colors">beshoymeshel15@gmail.com</p>
                </div>
              </a>

              <a href="tel:+201275809921" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors">+20 127 580 9921</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/10 transition-colors">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white font-medium group-hover:text-purple-400 transition-colors">Cairo, Egypt</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${focused === "name" || form.name ? "text-xs -top-2.5 bg-[#111] px-1 text-green-400" : "top-3.5 text-gray-500"}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-400/50 transition-colors"
                    required
                  />
                </div>

                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${focused === "email" || form.email ? "text-xs -top-2.5 bg-[#111] px-1 text-green-400" : "top-3.5 text-gray-500"}`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-400/50 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${focused === "message" || form.message ? "text-xs -top-2.5 bg-[#111] px-1 text-green-400" : "top-4 text-gray-500"}`}>
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white h-40 resize-none focus:outline-none focus:border-green-400/50 transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-shadow duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
