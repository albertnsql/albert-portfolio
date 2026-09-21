"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";
import { experience } from "@/lib/data/content";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/utils/animations";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-50 py-16 lg:py-20 relative overflow-hidden"
      aria-labelledby="experience-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />

      <div className="section-container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 gap-16 lg:grid-cols-[0.4fr_1.6fr]"
        >
          {/* Left Column: Heading (Sticky) */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <motion.div variants={fadeInUp}>
              <p className="mb-4 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-accent-blue">
                <span className="h-2 w-2 rounded-full bg-accent-blue shadow-[0_0_10px_rgba(41,181,232,0.5)]" />
                My Journey
              </p>
              <h2
                id="experience-heading"
                className="font-display text-4xl font-black leading-tight tracking-tight text-navy sm:text-5xl"
              >
                Building data platforms for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-indigo-600">5+ years.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-text-secondary/80">
                From optimizing SQL databases to architecting scalable semantic layers and analytics platforms, I&apos;ve consistently driven data-driven culture and technical excellence.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Timeline */}
          <div className="relative">
            {/* Main vertical line */}
            <div className="absolute left-6 lg:left-8 top-2 bottom-0 w-px bg-gradient-to-b from-accent-blue/40 via-border to-transparent hidden sm:block" />

            <div className="space-y-10">
              {experience.map((role, i) => (
                <motion.article
                  key={`${role.company}-${role.period}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  className="relative sm:pl-16 lg:pl-20"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 lg:left-2 top-1 hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-accent-blue/10 z-10 group-hover:scale-110 transition-transform duration-300">
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-accent-blue">
                      <Briefcase size={18} strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="group rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="font-display text-2xl font-black text-navy group-hover:text-accent-blue transition-colors">
                          {role.company}
                        </h3>
                        <p className="text-lg font-bold text-text-secondary mt-1">
                          {role.title}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:items-end gap-2 shrink-0">
                        <span className="flex items-center gap-2 text-sm font-semibold text-accent-blue bg-blue-50 px-3 py-1.5 rounded-full w-fit sm:w-auto">
                          <Calendar size={14} />
                          {role.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm font-medium text-text-muted">
                          <MapPin size={14} />
                          {role.location}
                        </span>
                      </div>
                    </div>

                    {/* Highlights List */}
                    <ul className="space-y-4">
                      {role.highlights.map((highlight, j) => {
                        const parts = highlight.split(': ');
                        const hasTitle = parts.length > 1 && parts[0].length < 60;
                        
                        return (
                          <motion.li 
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 + (j * 0.1) }}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-100 text-accent-blue">
                              <ChevronRight size={10} strokeWidth={3} />
                            </span>
                            <p className="text-[15px] leading-relaxed text-text-secondary">
                              {hasTitle ? (
                                <>
                                  <strong className="font-bold text-navy">{parts[0]}: </strong>
                                  {parts.slice(1).join(': ')}
                                </>
                              ) : (
                                highlight
                              )}
                            </p>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
