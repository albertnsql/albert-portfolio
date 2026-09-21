"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Terminal, ChevronRight, Activity, Database, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { Link } from "next-transition-router";
import { projects } from "@/lib/data/content";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/utils/animations";

const flow = projects.semanticGateway.architectureFlow;

const nodeColors = [
  "bg-blue-50 text-blue-600 border-blue-200",
  "bg-sky-50 text-sky-600 border-sky-200",
  "bg-cyan-50 text-cyan-600 border-cyan-200",
  "bg-indigo-50 text-indigo-600 border-indigo-200",
  "bg-violet-50 text-violet-600 border-violet-200",
  "bg-purple-50 text-purple-600 border-purple-200",
  "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200",
];

const nodeIcons = [
  Terminal,
  CheckCircle2,
  Database,
  Activity,
  Terminal,
  Database,
  Activity,
];

export default function SemanticGatewayContent() {
  const project = projects.semanticGateway;

  return (
    <div className="min-h-screen bg-background selection:bg-accent-blue/20 pb-32">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-100/50 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-sky-100/50 blur-[100px]" />
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
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-accent-indigo bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
                  Flagship Project
                </span>
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                  {project.status}
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
              
              {/* Left Column: Pipeline Architecture */}
              <motion.div variants={fadeInUp} className="space-y-8">
                <div className="p-8 sm:p-10 rounded-[32px] bg-white border border-border shadow-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <h2 className="text-2xl font-bold text-navy mb-2 relative z-10">Pipeline Architecture</h2>
                  <p className="text-text-secondary mb-12 text-sm leading-relaxed relative z-10">
                    A governed 7-stage pipeline turning natural language into validated warehouse execution.
                  </p>

                  <div className="relative pl-6 sm:pl-10 z-10">
                    <div className="absolute left-[15px] sm:left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200" />

                    {flow.map((node, i) => {
                      const Icon = nodeIcons[i % nodeIcons.length];
                      return (
                        <motion.div
                          key={node.id}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                          viewport={{ once: true }}
                          className="relative mb-10 last:mb-0 group/node"
                        >
                          <div
                            className={`absolute -left-[30px] sm:-left-[46px] top-0 w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform duration-300 group-hover/node:scale-110 shadow-sm bg-white ${nodeColors[i % nodeColors.length]}`}
                          >
                            <Icon size={20} strokeWidth={2.5} />
                          </div>
                          <div className="ml-8 sm:ml-10 pt-1">
                            <div className="flex items-center gap-3 mb-1">
                              <span className="text-[10px] font-bold text-text-muted">0{i + 1}</span>
                              <h3 className="text-lg font-bold text-navy group-hover/node:text-accent-blue transition-colors">
                                {node.label}
                              </h3>
                            </div>
                            <p className="text-sm text-text-secondary leading-relaxed max-w-md">
                              {node.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
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
                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                          <ChevronRight size={12} className="text-accent-blue" strokeWidth={3} />
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
                    className="flex-1 flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 shadow-[0_10px_20px_rgba(7,23,57,0.15)] hover:-translate-y-1"
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
