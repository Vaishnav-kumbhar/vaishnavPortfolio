const projects = [
  {
    title: "Padachitraani",
    desc: "An interactive game where users shoot words at matching images to learn vocabulary.",
    tech: ["React", "MySQL", "PHP"],
    link: "https://sanskritkalp.com/samskrit-kreeda/padachitraani/",
    icon: "🎮",
  },
  {
    title: "Varnasanyogah",
    desc: "A Sanskrit learning puzzle game where users build complete words by arranging shuffled letters and syllables in the correct order.",
    tech: ["React", "MySQL", "PHP"],
    link: "https://sanskritkalp.com/samskrit-kreeda/varnasanyogah/",
    icon: "🧩",
  },
  {
    title: "Game Subscription Platform",
    desc: "Developed a subscription-based platform for accessing multiple games with Razorpay integration.",
    tech: ["JavaScript", "React", "MySQL", "PHP"],
    link: "https://sanskritkalp.com/plans",
    icon: "💳",
  },
  {
    title: "Kloudeva Official Website",
    desc: "Designed and developed the official website of Kloudeva LLC as the sole engineer. Delivered responsive UI, optimized performance, and handled full deployment.",
    tech: ["React", "Tailwind CSS"],
    link: "https://kloudeva.com/",
    icon: "☁️",
  },
  {
    title: "Event Management Platform",
    desc: "Built a full-featured event management platform with ticket booking, event listings, and payment integration using Click.uz.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    link: "https://event-management-website-tau.vercel.app/",
    icon: "🎪",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 min-h-screen"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full text-violet-300 text-sm font-medium mb-4 border border-violet-500/30">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for building impactful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <div
              key={p.title}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 overflow-hidden card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {p.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-300">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white/5 text-violet-300 rounded-full border border-violet-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors duration-300 group/link"
                >
                  <span>View Project</span>
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
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
