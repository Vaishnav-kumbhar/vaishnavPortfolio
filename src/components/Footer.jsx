import { PROFILE } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="max-w-2xl mx-auto px-6 py-8 text-center text-xs text-zinc-600">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
      </div>
    </footer>
  );
}
