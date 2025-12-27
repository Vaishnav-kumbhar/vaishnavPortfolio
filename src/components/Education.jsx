export default function Education() {
  const education = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      institution: "RITEE College of Management, Raipur",
      period: "2020 – 2023",
      icon: "🎓",
      details: "Studied core computer science, programming, database management, and web technologies.",
      achievements: ["Strong foundation in programming", "Database Management", "Web Technologies"],
    },
    {
      title: "Full Stack Web Development Certification",
      institution: "PW Skills",
      period: "2023",
      icon: "📜",
      details: "Completed intensive training in MERN Stack, and modern web development.",
      achievements: ["MERN Stack", "Modern Web Development", "Industry Best Practices"],
    },
  ];

  return (
    <section
      id="education"
      className="py-24 min-h-screen"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full text-violet-300 text-sm font-medium mb-4 border border-violet-500/30">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building a strong foundation through continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 overflow-hidden card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative p-8">
                {/* Icon & Period */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {edu.icon}
                  </div>
                  <span className="px-4 py-2 bg-white/5 text-violet-300 rounded-full text-sm font-medium border border-violet-500/20">
                    {edu.period}
                  </span>
                </div>

                {/* Title & Institution */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                  {edu.title}
                </h3>
                <p className="text-fuchsia-400 font-medium mb-4">{edu.institution}</p>

                {/* Details */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {edu.details}
                </p>

                {/* Achievements */}
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
