export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-lg mb-4">
        Feel free to reach out to me via email or phone.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6">
        {/* Email */}
        <a
          href="mailto:vshnvkmbhr9361@gmail.com"
          className="text-blue-500 hover:underline text-lg"
        >
          vshnvkmbhr9361@gmail.com
        </a>

        {/* Phone */}
        <a
          href="tel:+91XXXXXXXXXX"
          className="text-blue-500 hover:underline text-lg"
        >
          +91-7489122806
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Vaishnav-kumbhar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-lg"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
