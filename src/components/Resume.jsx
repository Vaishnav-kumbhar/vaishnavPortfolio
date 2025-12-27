export default function Resume() {
  const resumeHighlights = [
    { icon: "💼", title: "1+ Years", subtitle: "Professional Experience" },
    { icon: "🚀", title: "10+", subtitle: "Projects Delivered" },
    { icon: "🎯", title: "12+", subtitle: "Technologies" },
    { icon: "⭐", title: "Award", subtitle: "Rising Star" },
  ];

  return (
    <section
      id="resume"
      className="py-24 min-h-screen flex items-center"
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
      }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full text-violet-300 text-sm font-medium mb-4 border border-violet-500/30">
            My Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Download <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get a comprehensive overview of my skills, experience, and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Card */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-white/10 overflow-hidden animate-fade-in-up">
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 p-8 border-b border-white/10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-violet-500/25">
                  VK
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-1">Vaishnav Kumbhar</h3>
                  <p className="text-violet-400 font-medium mb-2">Full Stack Developer</p>
                  <p className="text-gray-400 text-sm">Building scalable web applications with modern technologies</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 border-b border-white/10">
              {resumeHighlights.map((item, index) => (
                <div
                  key={item.title}
                  className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-xl font-bold text-white">{item.title}</div>
                  <div className="text-gray-400 text-sm">{item.subtitle}</div>
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Key Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-xl">🛠️</span> Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Node.js", "PHP", "MySQL", "MongoDB", "Tailwind CSS"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-violet-500/20 text-violet-300 rounded-full border border-violet-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* What's Inside */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-xl">📄</span> What's Inside
                  </h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Professional Experience & Achievements
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Technical Skills & Certifications
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Education & Projects Portfolio
                    </li>
                  </ul>
                </div>
              </div>

              {/* Download Button */}
              <div className="text-center">
                <a
                  href="https://drive.google.com/file/d/1jBn6gC7ipBpz3PtuUtLOEhVZ9NUxlQpI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-3 px-10 py-5 text-white rounded-xl font-semibold text-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume (PDF)
                </a>
                <p className="text-gray-500 text-sm mt-4">Last updated: December 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
