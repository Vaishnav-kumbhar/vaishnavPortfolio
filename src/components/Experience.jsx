import { EXPERIENCES } from "../data/experience";
import Section from "./ui/Section";

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <div className="space-y-12">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.company}
            className="grid sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6"
          >
            <p className="font-mono text-xs text-zinc-500 sm:pt-1">
              {exp.period}
            </p>
            <div>
              <h3 className="font-medium text-zinc-100">
                {exp.role}{" "}
                <span className="text-zinc-500 font-normal">
                  · {exp.company}
                </span>
              </h3>
              <p className="mt-0.5 text-xs text-zinc-500">{exp.location}</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-400 list-disc pl-4 marker:text-zinc-700">
                {exp.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <p className="mt-3 font-mono text-xs text-zinc-500">
                {exp.stack.join(" · ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
