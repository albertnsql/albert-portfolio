import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string | ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`${align === "center" ? "text-center" : ""} ${className}`}
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent-indigo mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-text-primary tracking-tight leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15px] leading-relaxed text-text-secondary max-w-xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
