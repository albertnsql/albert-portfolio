"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "@/lib/data/content";
import ContactModal from "@/components/ui/ContactModal";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/utils/animations";

export default function Contact() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="contact" className="bg-white py-10 lg:py-14" aria-labelledby="contact-heading">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-[24px] border border-border bg-gradient-to-r from-blue-50 via-violet-50 to-cyan-50 p-7 shadow-[0_24px_60px_rgba(39,71,124,0.12)] sm:p-9 lg:p-10"
          >
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" />
            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-accent-blue">
                  <span className="h-2 w-2 rounded-full bg-accent-blue" />
                  Let&apos;s Work Together
                </p>
                <h2
                  id="contact-heading"
                  className="font-display text-2xl font-black leading-tight tracking-tight text-navy sm:text-3xl"
                >
                  Interested in working together?
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                  I&apos;m always open to discussing new opportunities, interesting
                  projects, or just talking about data, analytics and AI.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => setContactOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3 text-[13px] font-black text-white shadow-[0_14px_28px_rgba(7,23,57,0.16)] transition-colors hover:bg-navy-light"
                >
                  Get in touch
                  <ArrowRight size={15} />
                </button>
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-3 text-[13px] font-black text-navy shadow-sm transition-colors hover:border-accent-blue/30 hover:text-accent-blue"
                >
                  View resume
                  <Download size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}
