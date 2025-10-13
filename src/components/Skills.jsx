const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "Shadcn UI" },
  { name: "PHP" },
  { name: "Node.js" },
  { name: "MySQL" },
  { name: "MongoDB" },
  {
    name: "Wordpress",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow text-center"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
