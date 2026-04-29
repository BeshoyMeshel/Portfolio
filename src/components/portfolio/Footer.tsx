"use client";

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { links } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative bg-[#050505] py-12 mt-12 border-t border-white/10 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">

        <div>
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
            Beshoy <span className="text-blue-500">Meshel</span>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Frontend Developer passionate about crafting modern, scalable, and beautifully animated web experiences.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <div className="flex gap-4">
            <a href="https://github.com/BeshoyMeshel" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
              <FaGithub className="text-lg" />
            </a>
            <a href="https://www.linkedin.com/in/beshoy-meshel-8177bb268/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#0077b5] hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30 transition-all">
              <FaLinkedin className="text-lg" />
            </a>
            <a href="https://www.facebook.com/besho.meshei" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#1877f2] hover:bg-[#1877f2]/10 hover:border-[#1877f2]/30 transition-all">
              <FaFacebook className="text-lg" />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Beshoy Meshel. All rights reserved.
        </p>
        <p className="text-xs text-gray-500">
          Built with React & Next.js
        </p>
      </div>
    </footer>
  );
}
