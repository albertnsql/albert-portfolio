"use client";

import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck, Calendar, MapPin } from "lucide-react";

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
    color: "from-emerald-400 to-emerald-600",
    shadow: "shadow-emerald-500/20",
  },
  {
    name: "Microsoft Certified: Azure Database Administrator Associate",
    issuer: "Microsoft",
    icon: "M",
    color: "from-blue-500 to-blue-700",
    shadow: "shadow-blue-500/20",
  },
];

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Education() {
  return (
    <section 
      id="education" 
      className="relative py-24 lg:py-32 overflow-hidden bg-navy" 
      aria-label="Education and Certifications"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-accent-indigo/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-accent-blue/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeUp}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-pulse" />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent-blue">
              Education & Certifications
            </p>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Built on a strong <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
              academic foundation.
            </span>
          </h2>
          
          <p className="max-w-2xl text-lg text-blue-100/70 font-medium">
            Continuous learning and formal education that backs up my technical expertise, ensuring I stay at the cutting edge of data and analytics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12">
          {/* LEFT: Education Feature Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
            variants={fadeUp}
            className="group relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 sm:p-10 overflow-hidden backdrop-blur-md transition-all duration-500 hover:border-white/20"
          >
            <div className="absolute -top-10 -right-10 text-white/5 group-hover:text-white/10 transition-colors duration-500 group-hover:scale-110 group-hover:-rotate-12">
              <GraduationCap size={240} strokeWidth={1} />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-indigo to-accent-blue flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(79,70,229,0.3)] group-hover:scale-110 transition-transform duration-500">
                <GraduationCap size={32} className="text-white" />
              </div>
              
              <div className="mt-auto">
                <h3 className="text-3xl sm:text-4xl font-display font-black text-white mb-3 leading-tight tracking-tight">
                  {education[0].degree}
                </h3>
                <p className="text-blue-300 text-xl font-bold mb-8">
                  {education[0].institution}
                </p>
                
                <div className="flex flex-wrap gap-3 text-[13px] font-bold text-white/80">
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/5">
                    <Calendar size={15} className="text-accent-blue" />
                    {education[0].period}
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/5">
                    <MapPin size={15} className="text-accent-blue" />
                    {education[0].location}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Certifications List */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={i + 2}
                variants={fadeUp}
                className="group relative rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 p-6 sm:p-8 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
                  <div className={`w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg ${cert.shadow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <span className="text-2xl font-black text-white">{cert.icon}</span>
                  </div>
                  
                  <div>
                    <div className="flex items-start gap-2 mb-1.5">
                      <h4 className="text-[17px] sm:text-[19px] font-bold text-white leading-snug">
                        {cert.name}
                      </h4>
                      <BadgeCheck size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                    </div>
                    <p className="text-blue-100/60 font-medium text-[15px]">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}