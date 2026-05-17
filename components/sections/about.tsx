import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { resume } from "@/src/data/resume";
import { ExternalLink } from "lucide-react";

export function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">About</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold text-white sm:text-6xl">
            Security engineering instincts, cloud automation, and analyst-focused product thinking.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_.8fr]">
          <Reveal>
            <SpotlightCard className="h-full">
              <p className="text-lg leading-8 text-slate-300">{resume.summary}</p>
              <div className="mt-8">
                <p className="mb-4 font-display text-xl text-white">Certifications</p>
                <div className="grid gap-3">
                  {resume.certifications.map((cert) => (
                    <a
                      key={cert.name}
                      href={cert.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-md border border-cyan-300/15 bg-cyan-300/[0.08] px-4 py-3 text-sm text-cyan-50 transition hover:border-cyan-200/55 hover:bg-cyan-300/15"
                    >
                      <span>{cert.name}</span>
                      <ExternalLink className="size-4 shrink-0 text-cyan-200 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard className="h-full">
              <p className="font-display text-2xl text-white">{resume.education.school}</p>
              <p className="mt-3 text-slate-300">{resume.education.degree}</p>
              <p className="mt-2 text-cyan-200">{resume.education.period}</p>
              <div className="mt-8">
                <p className="mb-4 font-display text-xl text-white">Relevant Coursework</p>
                <div className="grid gap-3">
                  {resume.education.coursework.map((item) => (
                    <div key={item} className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
