import { Link } from "react-router-dom";
import profilePic from "../assets/myImage.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Profile Image */}
      <div className="flex-shrink-0 mt-16 mb-8 md:mt-0 md:mb-0 md:mr-16 relative z-10 animate-fade-in-left">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur-xl opacity-50 animate-pulse-glow"></div>
          <img
            src={profilePic}
            alt="Vaishnav Kumbhar"
            className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full shadow-2xl object-cover mx-auto ring-4 ring-white/20 animate-float"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-2xl flex flex-col justify-center relative z-10">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full text-violet-300 text-sm font-medium mb-4 border border-violet-500/30">
            Welcome to my portfolio
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Hi, I'm{" "}
          <span className="gradient-text">Vaishnav Kumbhar</span>
        </h1>
        
        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Full Stack Developer
        </h2>
        
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          A passionate <span className="text-violet-400 font-semibold">Software Developer</span> specializing in modern web
          applications and scalable solutions. Skilled in{" "}
          <span className="text-fuchsia-400 font-semibold">React, Next.js, Node.js, PHP, MySQL, MongoDB, and Express</span>, I
          enjoy building impactful products that solve real-world problems.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Link
            to="/projects"
            className="btn-primary px-8 py-4 text-white rounded-xl font-semibold flex items-center justify-center gap-2 text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            View Projects
          </Link>
          <Link
            to="/contact"
            className="btn-secondary px-8 py-4 text-white rounded-xl font-semibold flex items-center justify-center gap-2 text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Me
          </Link>
          <a
            href="https://drive.google.com/file/d/1jBn6gC7ipBpz3PtuUtLOEhVZ9NUxlQpI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-8 py-4 text-white rounded-xl font-semibold flex items-center justify-center gap-2 text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex flex-wrap gap-6 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="mailto:vshnvkmbhr9361@gmail.com"
            className="flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors duration-300 group"
          >
            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-violet-500/20 transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="hidden sm:inline">vshnvkmbhr9361@gmail.com</span>
          </a>
          <a
            href="https://github.com/Vaishnav-kumbhar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors duration-300 group"
          >
            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-violet-500/20 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vaishnav-kumbhar-1269a3236/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors duration-300 group"
          >
            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-violet-500/20 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
