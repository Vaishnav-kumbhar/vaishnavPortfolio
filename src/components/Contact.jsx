import { PROFILE } from "../data/profile";
import Section from "./ui/Section";
import { GitHubIcon, LinkedInIcon, ArrowUpRightIcon } from "./icons";

export default function Contact() {
  return (
    <Section id="contact" label="Contact">
      <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100 leading-snug">
        Have a project in mind? Let's talk.
      </p>
      <p className="mt-4 leading-relaxed text-zinc-400">
        I'm open to freelance work and full-time roles. Email is the fastest
        way to reach me.
      </p>
      <a
        href={`mailto:${PROFILE.email}`}
        className="mt-6 inline-block text-lg text-zinc-100 underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-100 transition-colors"
      >
        {PROFILE.email}
      </a>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        <a
          href={PROFILE.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          <GitHubIcon />
          GitHub
          <ArrowUpRightIcon className="w-3 h-3" />
        </a>
        <a
          href={PROFILE.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          <LinkedInIcon />
          LinkedIn
          <ArrowUpRightIcon className="w-3 h-3" />
        </a>
        <a
          href={PROFILE.phoneHref}
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          {PROFILE.phone}
        </a>
      </div>
    </Section>
  );
}
