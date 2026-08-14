import { EDUCATION } from "../data/education";
import Section from "./ui/Section";

export default function Education() {
  return (
    <Section id="education" label="Education & Awards">
      <div className="space-y-6">
        {EDUCATION.map((edu) => (
          <div
            key={edu.title}
            className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6"
          >
            <p className="font-mono text-xs text-zinc-500 sm:pt-1">
              {edu.period}
            </p>
            <div>
              <h3 className="font-medium text-zinc-100">{edu.title}</h3>
              <p className="mt-0.5 text-sm text-zinc-500">{edu.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
