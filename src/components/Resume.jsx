export default function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-6"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Download my latest resume to explore my education, skills, and
          professional experience in detail.
        </p>

        <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow max-w-md mx-auto">
          {/* Resume Title */}
          <h3 className="text-xl font-semibold mb-5">My Resume</h3>

          {/* Download Button with SVG */}
          <a
            href="https://drive.google.com/file/d/1iieQtA44yU8CJRaUhZaWUnfxhjfS5n4Q/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v12m0 0l-4-4m4 4l4-4m-9 8h10"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
