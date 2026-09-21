"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Loader2 } from "lucide-react";
import { personalInfo } from "@/lib/data/content";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    
    try {
      // Replace this URL with your actual Formspree endpoint
      // Example: https://formspree.io/f/your_form_id
      const response = await fetch("https://formspree.io/f/moevvpow", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setTimeout(() => setStatus("idle"), 300); // Reset after modal closes
        }, 2500);
      } else {
        // If the URL is fake (like YOUR_FORM_ID), it will fail.
        // We'll gracefully fail and instruct the user to use email fallback for now if it fails.
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-navy/20 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-border overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between p-6 pb-0 flex-shrink-0">
                <h3 className="font-display text-2xl font-bold text-navy">Get in touch</h3>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 text-text-muted hover:text-navy transition-colors rounded-full hover:bg-surface-hover"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto">
                <p className="text-text-secondary text-sm mb-6">
                  I'm always open to discussing new opportunities, interesting projects, or just talking about data and AI. Fill out the form below or email me directly at{" "}
                  <a href={`mailto:${personalInfo.email}`} className="text-accent-blue font-medium hover:underline">
                    {personalInfo.email}
                  </a>.
                </p>

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-lg font-bold text-navy mb-2">Message Sent!</h4>
                    <p className="text-text-secondary text-sm">
                      Thanks for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Add a honeypot field to prevent spam */}
                    <input type="text" name="_gotcha" style={{ display: "none" }} />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-[13px] font-semibold text-navy">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Jane Doe"
                          className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-[13px] font-semibold text-navy">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="jane@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-[13px] font-semibold text-navy">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Hi Albert, I'd like to talk about..."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <div className="p-3 bg-red-50 text-red-600 rounded-lg text-xs font-medium border border-red-100">
                        Oops! There was a problem submitting your form. Please email me directly instead. (Make sure you replaced YOUR_FORM_ID in the code)
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-navy-light transition-all shadow-[0_12px_24px_rgba(7,23,57,0.14)] hover:shadow-[0_16px_32px_rgba(7,23,57,0.2)] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={16} className="ml-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
