export default function Experience() {
  const experiences = [
    {
      role: "Software Developer (Sole Engineer)",
      company: "Kloudeva LLC Pvt. Ltd",
      period: "Feb 2025 – Aug 2025",
      type: "Full-time",
      icon: "☁️",
      highlights: [
        "Worked as the only engineer in the company, fully responsible for project development from concept to deployment",
        "Designed and implemented frontend UI/UX, backend APIs, and database schemas independently",
        "Delivered complete end-to-end web applications ensuring performance, scalability, and security",
        "Managed requirement analysis, architecture planning, coding, testing, and deployment",
        "Built reusable components and optimized performance to enhance user experience",
      ],
      skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      role: "Software Developer Intern + Probation",
      company: "AB&Kalp Pvt. Ltd",
      period: "May 2024 – Feb 2025",
      type: "Internship",
      icon: "🎮",
      highlights: [
        "Independently developed 8+ interactive games and web applications using React and MySQL",
        "Integrated Razorpay for payment systems and designed subscription modules",
        "Created dashboards, blogs with YouTube integration, and dynamic UI components",
        "Received Rising Star Award for outstanding performance during internship",
      ],
      skills: ["React", "PHP", "MySQL", "Razorpay"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 min-h-screen"
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full text-violet-300 text-sm font-medium mb-4 border border-violet-500/30">
            Career Path
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-fuchsia-500 to-violet-500 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 animate-fade-in-up ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transform -translate-x-1/2 mt-8 ring-4 ring-slate-900 z-10"></div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 p-8 card-hover">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {exp.icon}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-violet-500/20 text-violet-300 rounded-full mb-2">
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-fuchsia-400 font-medium">{exp.company}</p>
                      <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                        <svg className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-white/5 text-violet-300 rounded-full border border-violet-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
