import profilePic from "../assets/myImage.jpg";
import { PROFILE } from "../data/profile";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  DownloadIcon,
} from "./icons";

const links = [
  { name: "GitHub", href: PROFILE.github.url, Icon: GitHubIcon, external: true },
  {
    name: "LinkedIn",
    href: PROFILE.linkedin.url,
    Icon: LinkedInIcon,
    external: true,
  },
  { name: "Email", href: `mailto:${PROFILE.email}`, Icon: MailIcon },
  {
    name: "Resume",
    href: PROFILE.resume.url,
    Icon: DownloadIcon,
    external: true,
  },
];

export default function Hero() {
  return (
    <section id="top">
      <img
        src={profilePic}
        alt={PROFILE.name}
        className="w-16 h-16 rounded-full object-cover ring-1 ring-zinc-800"
      />

      <h1 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100">
        {PROFILE.name}
      </h1>
      <p className="mt-2 text-zinc-500">
        {PROFILE.role} · {PROFILE.location}
      </p>

      <p className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </span>
        {PROFILE.availability}
      </p>

      <p className="mt-8 leading-relaxed text-zinc-400">
        I build web products end to end — from Sanskrit learning games to
        company websites shipped solo. Most recently I was the only engineer at
        Kloudeva LLC, responsible for everything from architecture to
        deployment. I work mainly with React, Next.js, Node.js, PHP, MySQL, and
        MongoDB.
      </p>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        {links.map(({ name, href, Icon, external }) => (
          <a
            key={name}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <Icon />
            {name}
          </a>
        ))}
      </div>
    </section>
  );
}
