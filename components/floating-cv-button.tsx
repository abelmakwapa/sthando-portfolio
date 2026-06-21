"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download } from "lucide-react";

import { profile } from "@/lib/data";

export function FloatingCvButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={profile.cvPath}
          download
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="glass fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-electric/30 px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-electric-bright shadow-glow transition-colors hover:border-amber/40 hover:text-amber-bright"
          aria-label="Download Sthando Abel Makwapa's CV as PDF"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Download CV</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
