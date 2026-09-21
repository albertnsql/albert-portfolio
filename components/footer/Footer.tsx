import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personalInfo } from "@/lib/data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10" role="contentinfo">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <span className="font-display text-accent-blue font-bold text-lg tracking-tight">
                AN
              </span>
              <span className="font-semibold text-sm text-text-primary">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-[12px] text-text-muted">
              {personalInfo.shortHeadline}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 -m-3 text-text-muted hover:text-text-primary transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 -m-3 text-text-muted hover:text-text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 -m-3 text-text-muted hover:text-text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border-light text-[11px] text-text-muted">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
