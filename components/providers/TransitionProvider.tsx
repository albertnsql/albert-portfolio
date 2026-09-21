"use client";

import { TransitionRouter } from "next-transition-router";
import { ReactNode } from "react";
import { animate } from "framer-motion";

export function TransitionProvider({ children }: { children: ReactNode }) {
  return (
    <TransitionRouter
      auto={true}
      leave={(next) => {
        animate(
          "#main-content",
          { opacity: [1, 0], y: [0, -20], filter: ["blur(0px)", "blur(8px)"] },
          { duration: 0.3, ease: "easeIn", onComplete: next }
        );
      }}
      enter={(next) => {
        animate(
          "#main-content",
          { opacity: [0, 1], y: [20, 0], filter: ["blur(8px)", "blur(0px)"] },
          { duration: 0.4, ease: "easeOut", onComplete: next }
        );
      }}
    >
      {children}
    </TransitionRouter>
  );
}
