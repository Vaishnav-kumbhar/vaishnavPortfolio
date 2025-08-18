const projects = [
  {
    title: "Padachitraani",
    desc: "An interactive game where users shoot words at matching images to learn vocabulary.",
    tech: "React, MySQL, PHP",
    link: "https://sanskritkalp.com/samskrit-kreeda/padachitraani/",
  },
  {
    title: "Varnasanyogah",
    desc: "A Sanskrit learning puzzle game where users build complete words (e.g., पितामही) by arranging shuffled letters and syllables in the correct order.",
    tech: "React, MySQL, PHP",
    link: "https://sanskritkalp.com/samskrit-kreeda/varnasanyogah/",
  },
  {
    title: "Game Subscription Platform",
    desc: "Developed a subscription-based platform for accessing multiple games with Razorpay integration.",
    tech: "Javascript, React, MySQL, PHP",
    link: "https://sanskritkalp.com/plans",
  },
  {
    title: "Kloudeva Official Website",
    desc: "Designed and developed the official website of Kloudeva LLC as the sole engineer. Delivered responsive UI, optimized performance, and handled full deployment.",
    tech: "React, Tailwind CSS,",
    link: "https://kloudeva.com/",
  },
  {
    title: "Event Management Platform",
    desc: "Built a full-featured event management platform with ticket booking, event listings, and payment integration using Click.uz. Developed as the only engineer, handling frontend, backend, and deployment.",
    tech: "React, Tailwind CSS, Node.js, MongoDB, Click.uz",
    link: "https://event-management-website-tau.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2">{p.desc}</p>
            <p className="mt-2 text-sm text-gray-500">Tech: {p.tech}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-500 hover:underline font-medium"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
