"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Education", "Skills", "Projects", "Experience", "Achievements", "Interests", "Contact"];

export default function Nav({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold">{name}</a>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <ul className="hidden gap-6 text-sm md:flex">
          {links.map((l) => (
            <li key={l}><a className="text-mute transition-colors hover:text-teal" href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="grid gap-1 border-t border-ink/10 px-6 py-3 md:hidden">
          {links.map((l) => (
            <li key={l}><a className="block py-2" href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
