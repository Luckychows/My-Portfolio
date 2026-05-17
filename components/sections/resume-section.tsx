import { Download, FileText } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { resume } from "@/src/data/resume";

export function ResumeSection() {
  return (
    <section id="resume" className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Resume</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-6xl">Preview the signal. Download the file.</h2>
            <p className="mt-6 leading-8 text-slate-300">
              A concise snapshot of cybersecurity focus areas, project depth, certifications, and hands-on SOC/cloud security work.
            </p>
            <Button asChild className="mt-8" size="lg">
              <a href={resume.resumeFile} download>
                <Download className="size-4" />
                Download resume
              </a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass overflow-hidden rounded-lg">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3 text-slate-200">
                <FileText className="size-5 text-cyan-200" />
                Resume Preview
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">DOCX source</span>
            </div>
            <div className="p-6">
              <div className="rounded-lg border border-white/10 bg-slate-950/70 p-6">
                <h3 className="font-display text-3xl text-white">{resume.name}</h3>
                <p className="mt-2 text-cyan-200">{resume.headline}</p>
                <p className="mt-5 leading-7 text-slate-300">{resume.summary}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {resume.majorProjects.map((project) => (
                    <div key={project.name} className="rounded-md border border-white/10 bg-white/5 p-4">
                      <p className="font-semibold text-white">{project.name}</p>
                      <p className="mt-2 text-sm text-slate-400">{project.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
