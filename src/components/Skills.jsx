const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PHP", level: 88 },
      { name: "Express.js", level: 82 },
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 85 },
    ],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 85 },
      { name: "Shadcn UI", level: 90 },
      { name: "WordPress", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 min-h-screen"
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full text-violet-300 text-sm font-medium mb-4 border border-violet-500/30">
            What I Know
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 p-8 card-hover animate-fade-in-up"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center text-2xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover:text-violet-300 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-violet-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-xl font-semibold text-white mb-6">Also familiar with</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["REST APIs", "Responsive Design", "UI/UX", "Agile", "Problem Solving", "Team Collaboration"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/5 text-gray-300 rounded-full border border-white/10 hover:border-violet-500/50 hover:text-violet-300 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
