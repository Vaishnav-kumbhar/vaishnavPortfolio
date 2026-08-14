import { PROFILE } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="max-w-2xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-600">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <p>Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}
