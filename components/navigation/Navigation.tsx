"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, Sun, X } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import ContactModal from "@/components/ui/ContactModal";
import { personalInfo, navLinks } from "@/lib/data/content";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Handle active state for non-home pages
    if (pathname !== "/") {
      if (pathname?.startsWith("/projects/")) {
        setActiveSection("Projects");
      } else {
        setActiveSection("");
      }
      return;
    }

    // Scroll spy for home page sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            const activeLink = navLinks.find((link) => link.href === id);
            if (activeLink) {
              setActiveSection(activeLink.label);
            }
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    // Give the DOM a tiny bit of time to render on navigation
    const timeoutId = setTimeout(() => {
      navLinks.forEach((link) => {
        if (link.href.startsWith("#")) {
          const id = link.href.substring(1);
          const element = document.getElementById(id);
          if (element) observer.observe(element);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/82 backdrop-blur-xl border-b border-border shadow-[0_8px_30px_rgba(17,36,79,0.06)]"
          : "bg-white/55 backdrop-blur-md"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="section-container flex items-center justify-between h-16 lg:h-[74px]">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Albert Nadar - Home"
        >
          <span className="font-display text-accent-blue font-black text-xl tracking-tight italic">
            AN
          </span>
          <span className="font-bold text-sm text-text-primary hidden sm:inline">
            {personalInfo.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          <div className="flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={pathname === "/" ? link.href : `/${link.href}`}
                onClick={() => setActiveSection(link.label)}
                className={`text-sm font-medium tracking-wide transition-colors relative group ${
                  activeSection === link.label
                    ? "text-accent-blue"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-3 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-accent-blue transition-all duration-300 ${
                    activeSection === link.label ? "w-8" : "w-0 group-hover:w-7"
                  }`}
                />
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3 ml-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="GitHub profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-2.5 rounded-full text-[12px] font-bold hover:bg-navy-light transition-colors shadow-[0_12px_24px_rgba(7,23,57,0.14)]"
            >
              Get in touch
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-3 -mr-3 text-text-secondary hover:text-text-primary transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={pathname === "/" ? link.href : `/${link.href}`}
                  onClick={() => {
                    setActiveSection(link.label);
                    setMobileOpen(false);
                  }}
                  className={`text-base font-medium transition-colors py-1 ${
                    activeSection === link.label
                      ? "text-accent-blue"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 -ml-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </a>
              </div>
              <button
                onClick={() => {
                  setContactOpen(true);
                  setMobileOpen(false);
                }}
                className="bg-navy text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-navy-light transition-colors shadow-sm inline-flex justify-center mt-2"
              >
                Get in touch →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </nav>
  );
}
