import { Link } from "react-router-dom";
import profilePic from "../assets/mypro.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 bg-gray-50 dark:bg-gray-900"
    >
      {/* Profile Image */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
        <img
          src={profilePic}
          alt="Vaishnav Kumbhar"
          className="w-36 h-36 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full shadow-lg object-cover mx-auto"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-xl flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-blue-500">Vaishnav Kumbhar</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300">
          A passionate <b>Full Stack Developer</b> specializing in modern web
          applications and scalable solutions. Skilled in{" "}
          <b>React, Node.js, PHP, MySQL, MongoDB, and Express</b>, I enjoy
          building impactful products that solve real-world problems.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 justify-center md:justify-start">
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
            href="https://drive.google.com/file/d/1iieQtA44yU8CJRaUhZaWUnfxhjfS5n4Q/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            📄 Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 justify-center md:justify-start">
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
      </div>
    </section>
  );
}
