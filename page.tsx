import { Download, Mail, Linkedin, Github, MapPin, ArrowDown, Award, GraduationCap } from "lucide-react";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { content as c } from "@/lib/content";

const initials = c.name.split(" ").map((w) => w[0]).join("");

function Ext({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-teal">{icon}{label}</a>
  ) : (
    <span className="inline-flex items-center gap-2 text-mute">{icon}{label}: add link in lib/content.ts</span>
  );
}

export default function Home() {
  return (
    <>
      <Nav name={c.name} />
      <main id="top">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 md:grid-cols-[1.3fr_1fr] md:py-24">
          <div>
            <p className="flex items-center gap-2 text-mute"><MapPin size={16} />{c.location}</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-7xl">{c.name}</h1>
            <p className="mt-6 max-w-xl font-display text-2xl text-teal">{c.headline}</p>
            <p className="mt-4 max-w-xl text-lg text-mute">{c.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-teal px-5 py-3 font-medium text-white transition-colors hover:bg-ink">Explore my work <ArrowDown size={16} /></a>
              <a href={c.resumeFile} download className="inline-flex items-center gap-2 rounded-md border border-ink/25 px-5 py-3 font-medium transition-colors hover:border-teal hover:text-teal"><Download size={16} />Download resume</a>
            </div>
          </div>
          <div className="mx-auto w-64 md:w-full">
            <div className="aspect-[4/5] overflow-hidden rounded-t-full bg-teal-soft">
              {c.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.photo} alt={`Portrait of ${c.name}`} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center font-display text-7xl text-teal" role="img" aria-label="Photo placeholder">{initials}</div>
              )}
            </div>
            <div className="mt-4 space-y-2" aria-hidden="true">
              <div className="bar h-2 w-full rounded bg-teal/80" /><div className="bar h-2 w-2/3 rounded bg-sun" style={{ animationDelay: ".15s" }} />
            </div>
          </div>
        </div>

        <Section id="about" title="About me">
          <div className="max-w-prose space-y-4 text-lg leading-relaxed">{c.about.map((t) => <p key={t}>{t}</p>)}</div>
        </Section>

        <Section id="education" title="Education">
          {c.education.map((e) => (
            <div key={e.degree} className="flex gap-4 border-l-2 border-teal pl-5">
              <GraduationCap className="mt-1 shrink-0 text-teal" />
              <div>
                <h3 className="text-xl font-semibold">{e.degree}</h3>
                <p className="text-mute">{e.school}</p>
                <p className="mt-1 text-sm">{e.years} · {e.note}</p>
              </div>
            </div>
          ))}
        </Section>

        <Section id="skills" title="Skills">
          <dl className="space-y-6">
            {c.skills.map((s) => (
              <div key={s.group}>
                <dt className="font-semibold">{s.group}</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {s.items.map((i) => <span key={i} className="rounded-full border border-ink/20 px-3 py-1 text-sm">{i}</span>)}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="projects" title="Projects">
          <div className="space-y-12">{c.projects.map((p) => <ProjectCard key={p.title} p={p} />)}</div>
        </Section>

        <Section id="experience" title="Experience">
          {c.experience.length ? (
            <ol className="space-y-6 border-l-2 border-teal pl-5">
              {c.experience.map((x) => (
                <li key={x.role}><h3 className="font-semibold">{x.role}, {x.org}</h3><p className="text-sm text-mute">{x.period}</p><ul className="mt-2 list-disc pl-5">{x.points.map((p) => <li key={p}>{p}</li>)}</ul></li>
              ))}
            </ol>
          ) : (
            <p className="max-w-prose rounded-lg border border-dashed border-ink/25 p-5 text-mute">
              Placeholder: internships, volunteering or leadership roles go here. Until then, my projects are the best picture of my hands-on work.
            </p>
          )}
        </Section>

        <Section id="achievements" title="Achievements & certifications">
          <ul className="space-y-3">
            {c.certifications.map((x) => <li key={x} className="flex items-center gap-3"><Award className="shrink-0 text-sun" />{x}</li>)}
          </ul>
        </Section>

        <Section id="interests" title="Interests">
          <ul className="flex flex-wrap gap-2">{c.interests.map((i) => <li key={i} className="rounded-full bg-teal-soft px-4 py-2 text-teal">{i}</li>)}</ul>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-prose text-lg">Open to opportunities, internships and conversations about web development.</p>
          <a href={`mailto:${c.email}`} className="mt-6 inline-flex items-center gap-2 rounded-md bg-teal px-5 py-3 font-medium text-white hover:bg-ink"><Mail size={18} />{c.email}</a>
          <div className="mt-6 flex flex-col gap-3">
            <Ext href={c.links.linkedin} icon={<Linkedin size={18} />} label="LinkedIn" />
            <Ext href={c.links.github} icon={<Github size={18} />} label="GitHub" />
          </div>
        </Section>
      </main>
      <footer className="border-t border-ink/10 py-8 text-center text-sm text-mute">© {new Date().getFullYear()} {c.name}</footer>
    </>
  );
}
