import { SKILL_GROUPS } from "../data/skills";
import Section from "./ui/Section";

export default function Skills() {
  return (
    <Section id="skills" label="Skills">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-medium text-zinc-100">{group.title}</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-zinc-500">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
