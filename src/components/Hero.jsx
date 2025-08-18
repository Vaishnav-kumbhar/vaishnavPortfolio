import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50 dark:bg-gray-900"
    >
      {/* Name & Title */}
      <h2 className="text-4xl md:text-6xl font-bold">
        Hi, I'm <span className="text-blue-500">Vaishnav Kumbhar</span>
      </h2>
      <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
        A passionate <b>Full Stack Developer</b> specializing in modern web
        applications and scalable solutions. Skilled in{" "}
        <b>React, Node.js, PHP, MySQL, MongoDB, and Express</b>, I enjoy
        building impactful products that solve real-world problems.
      </p>

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-4">
        <Link
          to="/projects"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          🚀 View Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          📩 Contact Me
        </Link>
        <a
          href="https://drive.google.com/file/d/1coVudAIWPtQEPKxaX78sA50wSOegWGYL/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          📄 Download Resume
        </a>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex space-x-6">
        <a
          href="mailto:vshnvkmbhr9361@gmail.com"
          className="text-blue-500 hover:underline"
        >
          vshnvkmbhr9361@gmail.com
        </a>
        <a
          href="https://github.com/Vaishnav-kumbhar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/vaishnav-kumbhar-1269a3236/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
