"use client";

import { Send } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { Button } from "@/components/ui/button";
import { resume } from "@/src/data/resume";

export function Contact() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Contact</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-6xl">Let’s build secure systems.</h2>
            <p className="mt-6 leading-8 text-slate-300">
              Recruiters and engineering teams can reach out for cybersecurity internships, SOC projects, cloud security automation, and entry-level engineering opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {resume.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Button key={social.label} asChild variant="secondary">
                    <a href={social.href} target={social.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
                      <Icon className="size-4" />
                      {social.label}
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SpotlightCard>
            <form action={`mailto:${resume.email}`} className="grid gap-4">
              <label className="grid gap-2 text-sm text-slate-300">
                Name
                <input className="rounded-md border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300" name="name" required />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Email
                <input className="rounded-md border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300" name="email" type="email" required />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Message
                <textarea className="min-h-36 rounded-md border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300" name="message" required />
              </label>
              <Button type="submit" className="mt-2">
                <Send className="size-4" />
                Send message
              </Button>
            </form>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
