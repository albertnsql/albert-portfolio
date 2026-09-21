"use client";

import { motion } from "framer-motion";
import {
  Database,
  Layers,
  Server,
  Brain,
  type LucideIcon,
  ArrowDown,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { capabilities } from "@/lib/data/content";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/utils/animations";

const iconMap: Record<string, LucideIcon> = {
  Database,
  Layers,
  Server,
  Brain,
};

const semanticFlow = [
  { label: "Business Metric", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { label: "Semantic Model", color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
  { label: "SQL Query", color: "bg-violet-50 text-violet-700 border-violet-200" },
  { label: "Dashboard", color: "bg-cyan-50 text-cyan-700 border-cyan-200" },
  { label: "Decision", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
];

export default function Capabilities() {
  return (
    <section className="py-16 lg:py-20 border-t border-border" aria-labelledby="capabilities-heading">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeader
              eyebrow="What I Build"
              title={
                <>
                  From raw data to <br className="hidden sm:block" />
                  business impact.
                </>
              }
              description="Modern data stack with semantic layer, AI and governance for trusted analytics."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mt-16">
            {capabilities.map((cap) => {
              const Icon = iconMap[cap.icon];
              return (
                <motion.div
                  key={cap.number}
                  variants={fadeInUp}
                  className="card-base p-6 lg:p-8"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 text-accent-indigo flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                      <Icon size={20} />
                    </div>
                    <div className="text-[10px] font-bold text-text-muted/60 font-display">
                      {cap.number}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg text-text-primary mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed">
                    {cap.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Semantic Layer Flow */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 border-t border-border-light pt-12"
          >
            <div className="text-center mb-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent-indigo mb-2">
                Semantic Layer Flow
              </p>
              <p className="text-sm text-text-secondary">
                How business questions become trusted answers
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
              {semanticFlow.map((step, i) => (
                <div key={step.label} className="flex items-center gap-2 sm:gap-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.12, duration: 0.4 }}
                    viewport={{ once: true }}
                    className={`px-4 py-2.5 rounded-lg border text-[12px] font-semibold whitespace-nowrap ${step.color}`}
                  >
                    {step.label}
                  </motion.div>
                  {i < semanticFlow.length - 1 && (
                    <>
                      <ArrowDown size={14} className="text-text-muted sm:hidden" />
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: i * 0.12 + 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="hidden sm:block w-8 h-[1.5px] bg-border mx-1 origin-left"
                      />
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
