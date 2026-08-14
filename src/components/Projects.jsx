import { PROJECTS } from "../data/projects";
import Section from "./ui/Section";
import { ArrowUpRightIcon } from "./icons";

export default function Projects() {
  return (
    <Section id="projects" label="Projects">
      <div className="grid sm:grid-cols-2 gap-5">
        {PROJECTS.map((p, index) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group rounded-xl border border-zinc-800/80 bg-zinc-900/30 overflow-hidden hover:border-zinc-600 transition-colors ${
              index === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <div className="aspect-video overflow-hidden border-b border-zinc-800/80">
              <img
                src={p.image}
                alt={`Screenshot of ${p.title}`}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-medium text-zinc-100">{p.title}</h3>
                <ArrowUpRightIcon className="w-4 h-4 shrink-0 text-zinc-600 transition-all group-hover:text-zinc-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                {p.desc}
              </p>
              <p className="mt-3 font-mono text-xs text-zinc-500">
                {p.tech.join(" · ")}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
