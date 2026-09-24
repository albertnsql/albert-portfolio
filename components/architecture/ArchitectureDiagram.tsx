"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Database,
  GitBranch,
  Layers,
  Users,
  Workflow,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/utils/animations";

const steps = [
  {
    title: "Data Sources",
    detail: "Streaming + Batch",
    icon: Database,
    color: "text-blue-600 bg-blue-50",
  },
  {
    title: "Ingestion",
    detail: "ELT",
    icon: Workflow,
    color: "text-sky-600 bg-sky-50",
  },
  {
    title: "Transformations",
    detail: "dbt",
    icon: GitBranch,
    color: "text-rose-500 bg-rose-50",
  },
  {
    title: "Semantic Layer",
    detail: "Looker",
    icon: Layers,
    color: "text-indigo-600 bg-indigo-50",
  },
  {
    title: "AI Layer",
    detail: "LLM Gateway",
    icon: BrainCircuit,
    color: "text-violet-600 bg-violet-50",
  },
  {
    title: "Business Users",
    detail: "Insights & Decisions",
    icon: Users,
    color: "text-cyan-600 bg-cyan-50",
  },
];

export default function ArchitectureDiagram() {
  return (
    <section
      className="section-band overflow-hidden bg-[#fbfdff] py-20 lg:py-24"
      aria-label="Analytics architecture"
    >
      <div className="section-container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-center"
        >
          <motion.div variants={fadeInUp}>
            <p className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-accent-blue">
              <span className="h-2 w-2 rounded-full bg-accent-blue" />
              How I Build
            </p>
            <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-navy sm:text-4xl">
              From raw data to business impact.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-text-secondary">
              Modern data stack with semantic layer, AI and governance for
              trusted analytics.
            </p>
            <a
              href="/projects/semantic-gateway"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-[13px] font-black text-navy shadow-sm transition-colors hover:border-accent-blue/30 hover:text-accent-blue"
            >
              Explore architecture
              <ArrowRight size={15} />
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative">
            <div className="absolute inset-x-8 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-200 to-transparent lg:block" />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative">
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.45 }}
                      className="relative z-10 flex h-full min-h-[118px] flex-col items-center justify-center rounded-2xl border border-border bg-white/86 p-4 text-center shadow-[0_16px_38px_rgba(39,71,124,0.08)]"
                    >
                      <div className={`mb-3 grid h-12 w-12 place-items-center rounded-2xl ${step.color}`}>
                        <Icon size={22} />
                      </div>
                      <h3 className="text-[12px] font-black leading-tight text-navy">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[10px] font-bold text-text-muted">
                        {step.detail}
                      </p>
                    </motion.div>
                    {i < steps.length - 1 && (
                      <ArrowRight
                        size={15}
                        className="absolute -right-[14px] top-1/2 z-20 hidden -translate-y-1/2 text-accent-blue lg:block"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-5 text-[12px] font-black text-accent-blue">
              <span>Data Quality</span>
              <span>Governance</span>
              <span>Observability</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Bot className="absolute bottom-8 right-[8%] h-24 w-24 text-blue-50" />
    </section>
  );
}
