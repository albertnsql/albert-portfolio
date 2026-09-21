"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import {
  BadgeCheck,
  Bot,
  BarChart3,
  ChartNoAxesColumnIncreasing,
  Sparkles,
  Zap,
} from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 120 },
  { month: "Feb", revenue: 148 },
  { month: "Mar", revenue: 136 },
  { month: "Apr", revenue: 176 },
  { month: "May", revenue: 168 },
  { month: "Jun", revenue: 214 },
  { month: "Jul", revenue: 188 },
  { month: "Aug", revenue: 230 },
  { month: "Sep", revenue: 218 },
  { month: "Oct", revenue: 258 },
  { month: "Nov", revenue: 246 },
  { month: "Dec", revenue: 286 },
];

const topProducts = [
  { name: "Custom Pens", pct: 32 },
  { name: "Drinkware", pct: 24 },
  { name: "Notebooks", pct: 18 },
  { name: "Apparel", pct: 14 },
  { name: "Others", pct: 12 },
];

const tools = [
  { name: "Snowflake", src: "https://cdn.simpleicons.org/snowflake/29B5E8" },
  { name: "Looker", src: "https://cdn.simpleicons.org/looker/4285F4" },
  { name: "dbt", src: "/dbt-icon.png" },
];

export default function AnalyticsDashboard({
  mouseX = 0,
  mouseY = 0,
}: {
  mouseX?: number;
  mouseY?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[710px]"
    >
      <div className="absolute -left-10 top-14 hidden h-[360px] w-[360px] rounded-[42px] bg-blue-100/40 blur-3xl lg:block" />
      <div className="absolute -right-8 bottom-4 hidden h-[320px] w-[320px] rounded-[42px] bg-violet-100/50 blur-3xl lg:block" />

      <motion.div
        className="absolute -left-2 top-[44%] z-0 hidden h-[260px] w-[calc(100%+32px)] -rotate-6 rounded-[36px] border border-blue-100 bg-gradient-to-r from-blue-50/70 via-white/30 to-violet-50/70 lg:block"
        style={{
          transform: `translate3d(${mouseX * -5}px, ${mouseY * -4}px, 0) rotate(-6deg)`,
        }}
      />

      <motion.div
        className="relative z-10 rounded-[24px] border border-border bg-white/80 p-3 shadow-[0_34px_90px_rgba(38,84,160,0.16)] backdrop-blur-xl"
        style={{
          transform: `translate3d(${mouseX * -3}px, ${mouseY * -3}px, 0)`,
        }}
      >
        <div className="overflow-hidden rounded-[18px] border border-border-light bg-[#fbfdff]">
          <div className="flex h-12 items-center justify-between border-b border-border-light px-5">
            <div className="flex items-center gap-2">
              <div className="grid h-7 w-7 place-items-center rounded-lg bg-violet-50 text-violet-600">
                <Bot size={14} />
              </div>
              <span className="text-[12px] font-bold text-navy">
                Customer Analytics
              </span>
            </div>
            <span className="text-[10px] font-bold text-text-muted">+</span>
          </div>

          <div className="p-4 sm:p-5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border-light bg-white p-4 shadow-[0_8px_24px_rgba(39,71,124,0.04)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold text-text-muted">
                      Total Revenue
                    </p>
                    <p className="mt-1 font-display text-2xl font-black tracking-tight text-navy">
                      $2.4M
                    </p>
                    <p className="mt-1 text-[10px] font-bold text-success">
                      +12% vs. previous period
                    </p>
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-blue-50 text-accent-blue">
                    <ChartNoAxesColumnIncreasing size={21} />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border-light bg-white p-4 shadow-[0_8px_24px_rgba(39,71,124,0.04)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold text-text-muted">
                      Active Customers
                    </p>
                    <p className="mt-1 font-display text-2xl font-black tracking-tight text-navy">
                      1.2M
                    </p>
                    <p className="mt-1 text-[10px] font-bold text-success">
                      +18% vs. previous period
                    </p>
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-violet-50 text-violet-600">
                    <BarChart3 size={21} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-[1.18fr_0.82fr]">
              <div className="rounded-xl border border-border-light bg-white p-4 shadow-[0_8px_24px_rgba(39,71,124,0.04)]">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-[11px] font-black text-navy">Revenue Trend</p>
                  <span className="rounded-full bg-blue-50 px-2 py-1 text-[9px] font-bold text-accent-blue">
                    Live
                  </span>
                </div>
                <div className="relative h-[138px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.2} />
                          <stop offset="100%" stopColor="#4f46e5" stopOpacity={0.01} />
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        interval={1}
                        tick={{ fontSize: 9, fill: "#8190aa" }}
                      />
                      <Tooltip
                        contentStyle={{
                          fontSize: 11,
                          borderRadius: 10,
                          border: "1px solid #dfe8f7",
                          boxShadow: "0 14px 32px rgba(39,71,124,0.12)",
                        }}
                        formatter={(val) => [`$${Number(val)}K`, "Revenue"]}
                      />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#4f46e5"
                        strokeWidth={3}
                        fill="url(#revenueFill)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.45 }}
                    className="absolute right-7 top-9 rounded-xl border border-border-light bg-white px-3 py-2 shadow-[0_12px_28px_rgba(39,71,124,0.12)]"
                  >
                    <p className="text-[8px] font-bold text-text-muted">Mar 15</p>
                    <p className="font-display text-[12px] font-black text-navy">$186,432</p>
                  </motion.div>
                </div>
              </div>

              <div className="rounded-xl border border-border-light bg-white p-4 shadow-[0_8px_24px_rgba(39,71,124,0.04)]">
                <p className="mb-4 text-[11px] font-black text-navy">Top Products</p>
                <div className="space-y-3">
                  {topProducts.map((product, i) => (
                    <div
                      key={product.name}
                      className="grid grid-cols-[78px_1fr_30px] items-center gap-2"
                    >
                      <span className="truncate text-[10px] font-semibold text-text-secondary">
                        {product.name}
                      </span>
                      <div className="h-2 overflow-hidden rounded-full bg-blue-50">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${product.pct * 2.5}%` }}
                          transition={{ delay: 0.75 + i * 0.06, duration: 0.65 }}
                          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-violet-400"
                        />
                      </div>
                      <span className="text-right text-[10px] font-bold text-text-muted">
                        {product.pct}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.5 }}
        className="absolute -top-8 left-[28%] z-20 hidden items-center gap-3 rounded-xl border border-border bg-white/90 px-4 py-3 shadow-[0_16px_34px_rgba(39,71,124,0.12)] backdrop-blur-md lg:flex"
      >
        <Zap size={18} className="text-navy" />
        <span className="text-[11px] font-bold leading-tight text-text-secondary">
          <span className="text-accent-blue">Real-time insights</span>
          <br />
          from streaming data
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -right-8 top-10 z-20 hidden w-[102px] flex-col gap-3 rounded-2xl border border-border bg-white/90 p-4 shadow-[0_18px_42px_rgba(39,71,124,0.13)] backdrop-blur-md lg:flex"
      >
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 3.4 + i * 0.25, ease: "easeInOut" }}
            className="flex items-center gap-2"
          >
            <Image
              src={tool.src}
              alt=""
              width={15}
              height={15}
              unoptimized
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold text-text-secondary">{tool.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.35, duration: 0.45 }}
        className="absolute -bottom-4 left-8 z-20 hidden items-center gap-2 rounded-full border border-border bg-white px-3 py-2 shadow-[0_14px_28px_rgba(39,71,124,0.12)] lg:flex"
      >
        <BadgeCheck size={15} className="text-success" />
        <span className="text-[10px] font-black text-navy">Governed metrics</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.45, duration: 0.45 }}
        className="absolute -bottom-2 right-20 z-20 hidden items-center gap-2 rounded-full border border-border bg-white px-3 py-2 shadow-[0_14px_28px_rgba(39,71,124,0.12)] lg:flex"
      >
        <Sparkles size={15} className="text-violet-600" />
        <span className="text-[10px] font-black text-navy">NL - SQL</span>
      </motion.div>
    </motion.div>
  );
}
