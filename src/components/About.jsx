import Section from "./ui/Section";

export default function About() {
  return (
    <Section id="about" label="About">
      <div className="space-y-4 leading-relaxed text-zinc-400">
        <p>
          I got my start after a BCA at RITEE College, Raipur, joining AB&Kalp
          as an intern — where I independently built 8+ Sanskrit learning games
          that lifted user engagement by 80%, and earned the company's Rising
          Star Award along the way.
        </p>
        <p>
          From there I went fully remote as the sole engineer at Kloudeva LLC,
          an Uzbekistan-based company — shipping their official website and a
          complete event ticketing platform on my own, from architecture and
          API design to payments and deployment. Working solo taught me to own
          every layer of a product and to communicate directly with
          stakeholders, not just tickets.
        </p>
        <p>
          Since November 2025 I've been at Setupfx Softech, building forex
          trading platforms — Python and FastAPI services on PostgreSQL,
          running on AWS.
        </p>
      </div>
    </Section>
  );
}
