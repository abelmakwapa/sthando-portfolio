"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { navItems, profile } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-[0_1px_0_rgba(148,163,184,0.08)]" : "bg-transparent"
      )}
    >
      <nav className="container-edge flex h-16 items-center justify-between">
        <a
          href="#home"
          className="reticle flex items-center gap-2 px-2 py-1 font-mono text-sm tracking-tight text-foreground"
        >
          <span className="text-electric-bright">SAM</span>
          <span className="text-muted">// portfolio</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-electric-bright"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.cvPath}
          download
          className="hidden font-mono text-xs uppercase tracking-[0.15em] text-amber-bright transition-colors hover:text-amber md:inline-flex"
        >
          Download CV
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-foreground md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-border md:hidden">
          <ul className="container-edge flex flex-col gap-4 py-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-[0.15em] text-muted hover:text-electric-bright"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.cvPath}
                download
                className="font-mono text-sm uppercase tracking-[0.15em] text-amber-bright"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
