"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, ChevronRight, Activity, ShieldCheck, Bug, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { Link } from "next-transition-router";
import { projects } from "@/lib/data/content";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/utils/animations";

export default function LookMLAuditorContent() {
  const project = projects.lookmlAuditor;

  return (
    <div className="min-h-screen bg-background selection:bg-accent-blue/20 pb-32">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-100/50 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-teal-100/50 blur-[120px]" />
        <div className="absolute top-[40%] right-[60%] w-[30%] h-[30%] rounded-full bg-cyan-100/50 blur-[100px]" />
      </div>

      <div className="relative z-10 pt-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={viewportConfig}
          >
            {/* Top Navigation */}
            <motion.div variants={fadeInUp} className="mb-16">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors group px-4 py-2 rounded-full bg-white border border-border shadow-sm hover:bg-surface-hover backdrop-blur-md"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform group-hover:-translate-x-1"
                />
                Back to Portfolio
              </Link>
            </motion.div>

            {/* Hero Section */}
            <motion.div variants={fadeInUp} className="max-w-4xl mb-24">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                  Open Source Tool
                </span>
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-accent-blue bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                  v1.2.0 Live
                </span>
              </div>
              <h1 className="text-5xl sm:text-7xl font-black text-navy tracking-tight leading-[1.1] mb-8">
                {project.title}
              </h1>
              <p className="text-xl sm:text-2xl text-text-secondary leading-relaxed max-w-3xl font-light">
                {project.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-10">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs font-semibold px-4 py-2 rounded-xl border border-border bg-surface-hover text-text-secondary"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
              
              {/* Left Column: Health Score Analysis */}
              <motion.div variants={fadeInUp} className="space-y-8">
                <div className="p-8 sm:p-10 rounded-[32px] bg-white border border-border shadow-sm relative overflow-hidden group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <h2 className="text-2xl font-bold text-navy mb-2 relative z-10">Health Score Analysis</h2>
                  <p className="text-text-secondary mb-12 text-sm leading-relaxed relative z-10">
                    Automatically scans and scores LookML projects for architectural debt, broken references, and modeling risks.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 relative z-10">
                    {/* Radial Score */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative w-40 h-40 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            className="stroke-emerald-100"
                            strokeWidth="8"
                            fill="none"
                          />
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            className="stroke-emerald-500 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={283}
                            initial={{ strokeDashoffset: 283 }}
                            whileInView={{ strokeDashoffset: 283 - (283 * project.healthScore) / 100 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-4xl font-black text-navy">{project.healthScore}</span>
                          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-1">Health</span>
                        </div>
                      </div>
                    </div>

                    {/* Audit Checks */}
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2">
                        Validation Rules
                      </div>
                      {project.checks.map((check, i) => (
                        <motion.div
                          key={check.label}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-4 bg-white border border-border shadow-sm rounded-2xl p-3"
                        >
                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              check.status === "pass"
                                ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                                : "bg-amber-50 text-amber-600 border border-amber-100"
                            }`}
                          >
                            {check.status === "pass" ? <ShieldCheck size={16} /> : <Bug size={16} />}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-navy">{check.label}</h4>
                            <p className="text-[11px] font-medium uppercase tracking-wider mt-0.5">
                              {check.status === "pass" 
                                ? <span className="text-emerald-600">Passed</span> 
                                : <span className="text-amber-600">Needs Review</span>
                              }
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Details */}
              <motion.div variants={staggerContainer} className="space-y-8">
                
                {/* Tech Stack */}
                <motion.div variants={fadeInUp} className="p-8 rounded-[32px] bg-white border border-border shadow-sm">
                  <h2 className="text-xl font-bold text-navy mb-6">Tech Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-xl bg-surface-hover border border-border text-sm font-medium text-text-secondary hover:text-navy transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Highlights */}
                <motion.div variants={fadeInUp} className="p-8 rounded-[32px] bg-white border border-border shadow-sm">
                  <h2 className="text-xl font-bold text-navy mb-6">Engineering Highlights</h2>
                  <ul className="space-y-6">
                    {project.engineeringHighlights.map((highlight, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                          <ChevronRight size={12} className="text-emerald-600" strokeWidth={3} />
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {highlight}
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Action Links */}
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 shadow-[0_10px_20px_rgba(5,150,105,0.15)] hover:-translate-y-1"
                  >
                    Launch Live Demo
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-surface-hover text-navy px-6 py-4 rounded-2xl font-bold border border-border transition-all duration-300 shadow-sm hover:-translate-y-1"
                  >
                    View Source
                    <GithubIcon size={18} />
                  </a>
                </motion.div>

              </motion.div>
            </div>

            {/* Bottom Navigation */}
            <motion.div variants={fadeInUp} className="mt-20 pt-10 border-t border-border flex items-center justify-between">
              <Link
                href="/#work"
                className="group inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-accent-blue transition-colors"
              >
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Link>
              <Link
                href="/#home"
                className="text-sm font-semibold text-text-secondary hover:text-navy transition-colors"
              >
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
