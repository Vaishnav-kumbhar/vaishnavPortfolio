export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <form
        action="mailto:vshnvkmbhr9361@gmail.com"
        method="POST"
        encType="text/plain"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg"
          required
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>

      <div className="mt-6 text-center space-x-6">
        <a
          href="mailto:vshnvkmbhr9361@gmail.com?subject=Portfolio Inquiry&body=Hello Vaishnav,"
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
      </div>
    </section>
  );
}
