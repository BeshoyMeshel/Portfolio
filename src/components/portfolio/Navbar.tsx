"use client";

import { useState, useEffect } from "react";
import { links } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.id);
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let maxRatio = 0;
      let activeId = sectionIds[0];

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeId = entry.target.id;
          }
        }
      });

      if (maxRatio > 0) {
        setActive(activeId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full h-20 z-50 transition-all duration-500 border-b",
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50"
          : "bg-transparent border-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto h-full flex justify-between items-center px-6 md:px-12">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => {
            const lenis = (window as any).lenis;
            if (lenis) {
              lenis.scrollTo(0, { offset: 0 });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <span className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:scale-150 transition-transform duration-300"></span>
          <span className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            Beshoy
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer relative group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => {
                setActive(link.id);
                const lenis = (window as any).lenis;
                if (lenis) {
                  lenis.scrollTo(`#${link.id}`, { offset: -80 });
                } else {
                  document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span className={cn(
                "transition-colors",
                active === link.id ? "text-blue-500" : "text-gray-500 group-hover:text-blue-400"
              )}>
                {link.icon}
              </span>
              <span className={cn(
                "relative z-10 transition-colors",
                active === link.id ? "text-white" : ""
              )}>
                {link.label}
              </span>
              {active === link.id && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
