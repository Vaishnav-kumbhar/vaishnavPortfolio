import { NAV_LINKS } from "../data/navigation";
import { PROFILE } from "../data/profile";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-900">
      <nav className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#top"
          className="font-semibold text-zinc-100 hover:text-white transition-colors"
        >
          {PROFILE.initials}
        </a>
        <div className="flex items-center gap-4 text-xs sm:gap-7 sm:text-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
