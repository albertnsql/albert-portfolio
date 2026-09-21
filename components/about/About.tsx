"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";

const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-16 lg:py-20 bg-gradient-to-b from-white to-[#f4f7fa]" aria-labelledby="about-heading">
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

          {/* LEFT: Photo */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0} variants={fadeUp}
            className="col-span-1 lg:col-span-5 relative"
          >
            {/* Subtle blue glow border behind the photo */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-accent-blue/30 via-accent-indigo/20 to-accent-violet/30 blur-md" />
            <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto lg:mx-0 overflow-hidden rounded-2xl border border-white/50 bg-surface shadow-2xl p-2">
               <div className="relative h-full w-full overflow-hidden rounded-xl bg-gray-100">
                 <Image
                   src="/albert-photo.jpg"
                   alt="Albert Nadar"
                   fill
                   className="object-cover object-[70%_20%]"
                   priority
                 />
               </div>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={1} variants={fadeUp}
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-blue" />
                <p className="text-[14px] font-semibold text-navy">About Me</p>
              </div>
              <h2 id="about-heading" className="text-3xl font-black leading-tight tracking-tight text-navy lg:text-5xl">
                The middle of the data stack is where I do my best work
              </h2>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={2} variants={fadeUp}
              className="mt-6 space-y-5 text-[15px] leading-relaxed text-text-secondary lg:text-[16px]"
            >
              <p>
                I am a seasoned professional at the intersection of Data, Analytics, Engineering, and AI. 
                With 5+ years between raw source tables and the numbers a business actually makes decisions with, 
                I build systems that make data more accessible, trustworthy, and useful.
              </p>
              <p>
                My focus is extending strong analytics foundations into AI-powered experiences where 
                natural-language questions can interact with trusted data without sacrificing governance.
              </p>
            </motion.div>

            {/* Info Cards Row */}
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={3} variants={fadeUp}
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {/* Card 1 */}
              <div className="flex flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-accent-blue">
                  <Briefcase size={20} />
                </div>
                <p className="text-sm font-bold text-navy">Current Role</p>
                <p className="mt-1 text-sm text-text-secondary">Senior Analytics Engineer at Cimpress</p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-accent-blue">
                  <GraduationCap size={20} />
                </div>
                <p className="text-sm font-bold text-navy">Education</p>
                <p className="mt-1 text-sm text-text-secondary">M.Sc. IT, University of Mumbai</p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-accent-blue">
                  <Sparkles size={20} />
                </div>
                <p className="text-sm font-bold text-navy">Focus</p>
                <p className="mt-1 text-sm text-text-secondary">Semantic Layers &amp; AI Analytics</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}