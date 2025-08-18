import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold">
          Vaishnav Kumbhar
        </Link>
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-blue-500">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-700">
          <ul className="flex flex-col items-center p-4 space-y-3">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-blue-500"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
