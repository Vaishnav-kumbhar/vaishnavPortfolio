export default function About() {
  const highlights = [
    { icon: "💼", label: "Years Experience", value: "1+" },
    { icon: "🚀", label: "Projects Completed", value: "10+" },
    { icon: "🎯", label: "Technologies", value: "12+" },
    { icon: "⭐", label: "Awards", value: "Rising Star" },
  ];

  return (
    <section
      id="about"
      className="py-24 min-h-screen"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full text-violet-300 text-sm font-medium mb-4 border border-violet-500/30">
            Get To Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 p-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm <span className="text-violet-400 font-semibold">Vaishnav Kumbhar</span>, a passionate Software Developer with a BCA
                from <span className="text-fuchsia-400 font-semibold">RITEE College of Management, Raipur</span>. I specialize in
                building scalable web applications, interactive games, and delivering
                end-to-end solutions with modern technologies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🚀</span> My Journey
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I began my professional journey with a <span className="text-violet-400 font-medium">6-month internship</span> at
                <span className="text-violet-400 font-medium"> AB&Kalp Pvt. Ltd</span>, followed by a <span className="text-violet-400 font-medium">3-month probation period</span>.
                During this time, I independently developed multiple real-world
                projects, including games and web applications.
              </p>
              <p className="text-gray-400 leading-relaxed">
                In <span className="text-fuchsia-400 font-medium">February 2025</span>, I joined <span className="text-fuchsia-400 font-medium">Kloudeva LLC Pvt. Ltd</span> as a
                Software Developer, where I worked as the <span className="text-fuchsia-400 font-medium">sole engineer</span>. I was
                fully responsible for designing, developing, and deploying complete
                full-stack projects.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span> What I Bring
              </h3>
              <p className="text-gray-400 leading-relaxed">
                With extensive hands-on experience working independently and taking full
                ownership of projects, I bring strong <span className="text-violet-400 font-medium">problem-solving abilities</span>,
                <span className="text-violet-400 font-medium"> adaptability</span>, and <span className="text-violet-400 font-medium">accountability</span> to every project. I thrive in
                challenges and aim to create impactful digital solutions.
              </p>
            </div>
          </div>

          {/* Right Column - Stats & Info */}
          <div className="space-y-8 animate-fade-in-right">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 p-6 text-center card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-2xl font-bold gradient-text mb-1">{item.value}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">📋</span> Quick Info
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Name", value: "Vaishnav Kumbhar" },
                  { label: "Location", value: "Raipur, India" },
                  { label: "Email", value: "vshnvkmbhr9361@gmail.com" },
                  { label: "Availability", value: "Open to opportunities" },
                ].map((info) => (
                  <div key={info.label} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="text-gray-400">{info.label}</span>
                    <span className="text-white font-medium">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://drive.google.com/file/d/1jBn6gC7ipBpz3PtuUtLOEhVZ9NUxlQpI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
