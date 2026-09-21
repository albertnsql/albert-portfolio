"use client";

import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Information Technology",
    institution: "University of Mumbai",
    period: "Jun 2019 - Jun 2021",
    location: "Mumbai, India",
  },
];

const certifications = [
  {
    name: "Google Business Intelligence Certificate",
    issuer: "Google",
    icon: "G",
    color: "from-blue-500 to-green-500",
    textColor: "text-white",
  },
  {
    name: "Microsoft Certified: Azure Database Administrator Associate",
    issuer: "Microsoft",
    icon: "M",
    color: "from-blue-600 to-blue-400",
    textColor: "text-white",
  },
];

const fadeUp: any = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Education() {
  return (
    <section id="education" className="py-16 lg:py-20" aria-label="Education and Certifications">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="mb-12"
        >
          <p className="section-label mb-3">Education &amp; Certifications</p>
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Built on a strong{" "}
            <span className="gradient-text">academic foundation.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-widest text-text-muted">
              Education
            </p>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={i + 1}
                  variants={fadeUp}
                  className="group flex gap-4 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent-blue/30 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-indigo/10 text-accent-indigo transition-transform duration-300 group-hover:scale-110">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold leading-snug text-navy">
                      {edu.degree}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-accent-blue">
                      {edu.institution}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">
                      {edu.period} - {edu.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-widest text-text-muted">
              Certifications
            </p>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={i + 1}
                  variants={fadeUp}
                  className="group flex gap-4 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent-blue/30 hover:shadow-lg"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cert.color} text-lg font-black ${cert.textColor} shadow-sm transition-transform duration-300 group-hover:scale-110`}
                  >
                    {cert.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                      <p className="text-[15px] font-bold leading-snug text-navy">
                        {cert.name}
                      </p>
                      <BadgeCheck size={16} className="shrink-0 text-accent-blue" />
                    </div>
                    <p className="mt-1 text-sm text-text-muted">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}