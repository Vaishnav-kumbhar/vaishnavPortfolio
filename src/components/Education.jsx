export default function Education() {
  const education = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      institution: "RITEE College of Management, Raipur",
      period: "2020 – 2023",
      details:
        "Studied core computer science, programming, database management, and web technologies.",
    },
    {
      title: "Full Stack Web Development Certification",
      institution: "PW Skills",
      period: "2023",
      details:
        "Completed intensive training in MERN Stack, and modern web development.",
    },
  ];

  return (
    <section id="education" className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

      <div className="relative border-l-4 border-blue-500 dark:border-blue-400 ml-4">
        {education.map((edu, index) => (
          <div key={index} className="mb-10 ml-6">
            {/* Dot */}
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-4 ring-white dark:ring-gray-900"></span>

            {/* Card */}
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold">{edu.title}</h3>
              <p className="text-gray-500 dark:text-gray-300">
                {edu.institution}
              </p>
              <p className="text-sm text-gray-400">{edu.period}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-200">
                {edu.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
