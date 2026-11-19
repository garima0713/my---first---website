import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/content";

function Mock({ type }: { type: Project["mock"] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-ink/15 bg-white" aria-hidden="true">
      <div className="flex items-center gap-1.5 border-b border-ink/10 bg-teal-soft px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/25" /><span className="h-2.5 w-2.5 rounded-full bg-ink/25" /><span className="h-2.5 w-2.5 rounded-full bg-sun" />
        <span className="ml-3 h-4 flex-1 rounded bg-white/70" />
      </div>
      {type === "list" ? (
        <div className="space-y-3 p-4">
          <div className="h-8 rounded border border-ink/15" />
          {[90, 75, 82].map((w) => (
            <div key={w} className="flex items-center gap-3"><div className="h-9 w-9 rounded bg-teal-soft" /><div className="h-3 rounded bg-ink/15" style={{ width: `${w}%` }} /></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 p-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="space-y-2"><div className="h-14 rounded bg-teal-soft" /><div className="h-2.5 w-3/4 rounded bg-ink/15" /><div className="h-2.5 w-1/3 rounded bg-sun" /></div>
          ))}
        </div>
      )}
    </div>
  );
}

function LinkBtn({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-ink/20 px-3 py-1.5 text-sm transition-colors hover:border-teal hover:text-teal">{icon}{label}</a>
  ) : (
    <span className="inline-flex items-center gap-2 rounded-md border border-dashed border-ink/20 px-3 py-1.5 text-sm text-mute">{icon}{label}: add link</span>
  );
}

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="grid gap-6 border-b border-ink/10 pb-12 last:border-0 last:pb-0 lg:grid-cols-[1fr_1.1fr]">
      <Mock type={p.mock} />
      <div>
        <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
        <p className="mt-2 max-w-prose text-mute">{p.summary}</p>
        <p className="mt-4 text-sm"><strong>Features:</strong> {p.features.join(", ")}.</p>
        <p className="mt-2 text-sm"><strong>My role:</strong> {p.contribution}</p>
        <p className="mt-2 text-sm"><strong>Outcome:</strong> <span className="text-mute">{p.outcome}</span></p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {p.tech.map((t) => <li key={t} className="rounded-full bg-teal-soft px-3 py-1 text-sm text-teal">{t}</li>)}
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          <LinkBtn href={p.github} icon={<Github size={16} />} label="GitHub" />
          <LinkBtn href={p.live} icon={<ExternalLink size={16} />} label="Live site" />
        </div>
      </div>
    </article>
  );
}
