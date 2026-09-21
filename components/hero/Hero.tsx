"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/utils/animations";
import { personalInfo } from "@/lib/data/content";
import { useState, useEffect } from "react";
import AnalyticsDashboard from "@/components/hero/AnalyticsDashboard";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <section
      id="home"
      className="section-band soft-grid relative overflow-hidden pt-16 pb-8 lg:pt-24 lg:pb-14"
    >
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      <div className="absolute left-0 top-0 h-full w-[18%] bg-gradient-to-r from-blue-50/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-[22%] bg-gradient-to-l from-violet-50/80 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-14 items-center">
          {/* Left — Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 mb-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-bold text-accent-blue ring-1 ring-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                Senior Analytics Engineer
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-[clamp(3.1rem,5.7vw,5.35rem)] font-black leading-[0.98] tracking-tight mb-6 text-navy"
            >
              Turning data into
              <br />
              <span className="gradient-text">trusted decisions</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base lg:text-[17px] leading-relaxed text-text-secondary max-w-[525px] mb-8 font-medium"
            >
              I design and build analytics infrastructure, semantic layers, and
              AI-powered data experiences that help teams move faster with
              confidence. 5+ years of experience with Snowflake, dbt, Looker,
              SQL and Python.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-navy-light transition-all shadow-[0_14px_28px_rgba(7,23,57,0.16)] group"
              >
                View my work
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-navy px-6 py-3 rounded-full text-sm font-bold border border-border hover:border-accent-indigo/30 hover:bg-surface-hover transition-all shadow-sm"
              >
                <Download size={15} />
                Download resume
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-6 text-[13px] font-medium text-slate-500"
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent-blue transition-colors"
              >
                <span className="grid h-5 w-5 place-items-center rounded-md bg-blue-50 text-[10px] font-black text-accent-blue">
                  in
                </span>
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent-blue transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                GitHub
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-accent-blue transition-colors"
              >
                <Mail size={15} />
                {personalInfo.email}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative lg:pl-10"
            style={{
              transform: `translate3d(${mousePosition.x * -4}px, ${mousePosition.y * -4}px, 0)`,
              transition: "transform 0.1s ease-out"
            }}
          >
            <AnalyticsDashboard mouseX={mousePosition.x} mouseY={mousePosition.y} />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-16 lg:mt-24 flex items-center gap-2 text-text-muted text-xs font-semibold"
        >
          <svg width="14" height="18" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="28" rx="7"/><path d="M12 10v4"/></svg>
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
