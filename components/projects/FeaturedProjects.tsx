"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  ExternalLink,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { projects } from "@/lib/data/content";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/utils/animations";


export default function FeaturedProjects() {
  const gateway = projects.semanticGateway;
  const auditor = projects.lookmlAuditor;

  return (
    <section
      id="work"
      className="section-band bg-white py-12 lg:py-14"
      aria-labelledby="work-heading"
    >
      <div className="section-container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-accent-blue">
                <span className="h-2 w-2 rounded-full bg-accent-blue" />
                Featured Projects
              </p>
              <h2
                id="work-heading"
                className="font-display text-3xl font-black leading-tight tracking-tight text-navy sm:text-4xl"
              >
                Real world data. Real impact.
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-text-secondary">
                Production-grade data platforms and tools that solve complex
                business problems.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.35fr_0.82fr]">
            <motion.div
              variants={fadeInUp}
              className="group relative min-h-[280px] overflow-hidden rounded-[18px] bg-navy text-white shadow-[0_28px_70px_rgba(7,23,57,0.22)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(139,92,246,0.38),transparent_32%),linear-gradient(135deg,#071739_0%,#10265f_52%,#38206f_100%)]" />
              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent" />

              <div className="relative z-10 grid h-full grid-cols-1 gap-5 p-5 md:grid-cols-[1fr_1fr] lg:p-6">
                <div className="flex flex-col">
                  <span className="mb-5 w-fit rounded-full bg-blue-400/15 px-3 py-1 text-[10px] font-black text-blue-100 ring-1 ring-blue-300/20">
                    Flagship Project
                  </span>
                  <h3 className="font-display text-2xl font-black leading-tight tracking-tight text-white lg:text-3xl">
                    {gateway.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[14px] leading-relaxed text-blue-50/82">
                    {gateway.shortDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {gateway.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[10px] font-bold text-white/82"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-4 pt-8">
                    <a
                      href={`/projects/${gateway.slug}`}
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-black text-navy shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all hover:bg-blue-50 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                    >
                      View project
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </a>
                    <a
                      href={gateway.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-[13px] font-black text-white backdrop-blur transition-all hover:bg-white/20"
                    >
                      Source
                      <ShieldCheck size={14} />
                    </a>
                  </div>
                </div>

                <div className="relative flex min-h-[160px] items-center justify-center">
                  <div className="absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-white/15" />
                  <div className="relative z-10 flex w-full max-w-[330px] flex-col gap-2">
                    {gateway.architectureFlow.slice(0, 6).map((step, i) => (
                      <motion.div
                        key={step.label}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.45 }}
                        className="ml-auto flex w-[82%] items-center gap-2.5 rounded-xl border border-white/10 bg-white/8 px-2 py-1 backdrop-blur"
                      >
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-white/10 text-[9px] font-black text-cyan-100 uppercase">
                          {step.label.split(' ').map(w => w[0]).join('').substring(0,2)}
                        </span>
                        <span className="text-[11px] font-bold text-white/86">
                          {step.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="card-base relative overflow-hidden p-5 lg:p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="rounded-full bg-cyan-50 px-3 py-1 text-[10px] font-black text-accent-blue">
                  Open Source Tool
                </span>
                <a
                  href={auditor.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LookML Auditor live demo"
                  className="text-text-muted transition-colors hover:text-accent-blue"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              <h3 className="font-display text-2xl font-black tracking-tight text-navy">
                {auditor.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                Static analysis tool that audits any LookML project and gives it
                a health score out of 100.
              </p>

              <div className="mt-6 grid grid-cols-[1fr_96px] gap-4">
                <div className="rounded-xl bg-navy p-3 text-white shadow-[0_18px_36px_rgba(7,23,57,0.16)]">
                  <div className="space-y-2.5 font-mono text-[11px]">
                    {auditor.checks.slice(0, 4).map((check) => (
                      <div key={check.label} className="flex items-center gap-2">
                        {check.status === "pass" ? (
                          <Check size={13} className="text-emerald-300" />
                        ) : (
                          <TriangleAlert size={13} className="text-amber-300" />
                        )}
                        <span className="text-white/82 truncate">{check.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid place-items-center rounded-xl border border-border-light bg-white">
                  <div
                    className="grid h-16 w-16 place-items-center rounded-full"
                    style={{
                      background:
                        `conic-gradient(#10b981 0 ${auditor.healthScore}%, #e8eef8 ${auditor.healthScore}% 100%)`,
                    }}
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-center">
                      <span className="font-display text-lg font-black text-navy">{auditor.healthScore}</span>
                      <span className="-mt-2.5 block text-[6px] font-black text-success">
                        Health
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {auditor.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-accent-blue"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href={`/projects/${auditor.slug}`}
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-[13px] font-black text-white shadow-[0_8px_16px_rgba(7,23,57,0.12)] transition-all hover:bg-navy-light hover:shadow-[0_12px_20px_rgba(7,23,57,0.2)]"
                >
                  View project
                  <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                </a>
                <a
                  href={auditor.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-[13px] font-black text-text-secondary transition-all hover:border-accent-blue/30 hover:text-navy hover:shadow-sm"
                >
                  Source
                  <ShieldCheck size={14} />
                </a>
              </div>

              <Bot className="absolute -right-6 -bottom-6 h-28 w-28 text-blue-50" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
