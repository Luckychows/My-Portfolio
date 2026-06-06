import { Reveal } from "@/components/reveal";
import { resume } from "@/src/data/resume";

export function Timeline() {
  return (
    <section id="experience" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-200">Experience & Achievements</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-6xl">Impact & Recognition</h2>
        </Reveal>
        <div className="relative mt-14 space-y-8 before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-red-300 before:via-orange-400 before:to-transparent sm:before:left-1/2">
          {resume.achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className={`relative grid gap-5 sm:grid-cols-2 ${index % 2 ? "" : "sm:text-right"}`}>
                  <div className={`${index % 2 ? "sm:col-start-2" : ""} glass rounded-lg p-6`}>
                    <div className={`mb-4 flex items-center gap-3 ${index % 2 ? "" : "sm:justify-end"}`}>
                      <span className="rounded-md bg-red-300/10 p-2 text-red-200">
                        <Icon className="size-5" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">0{index + 1}</span>
                    </div>
                    <h3 className="font-display text-2xl text-white">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
