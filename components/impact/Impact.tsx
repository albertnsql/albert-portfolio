"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  TrendingUp,
  Zap,
  Users,
  type LucideIcon,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { impactMetrics } from "@/lib/data/content";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/utils/animations";

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  TrendingUp,
  Zap,
  Users,
};

export default function Impact() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-label="Impact metrics">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {impactMetrics.map((metric, i) => {
              const Icon = iconMap[metric.icon];
              return (
                <motion.div
                  key={metric.label}
                  variants={fadeInUp}
                  className="card-base group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-[3px] hover:border-accent-indigo/20 lg:p-7"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-violet opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-accent-indigo shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Icon size={20} />
                  </div>
                  <div className="mb-1 font-display text-4xl font-black tracking-tight text-navy">
                    <AnimatedCounter
                      value={metric.value}
                      suffix={metric.suffix}
                    />
                  </div>
                  <h3 className="mb-2 text-[13px] font-black leading-tight text-navy">
                    {metric.label}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-text-secondary">
                    {metric.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
