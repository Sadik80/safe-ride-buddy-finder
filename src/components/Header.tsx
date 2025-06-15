
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Routes", path: "/routes" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-teal-700/90 backdrop-blur-md z-50 shadow-lg">
      <div className="flex items-center justify-between py-3 px-6 lg:px-16">
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-2xl">
          {/* Removed 'directions_car' icon */}
          Busway <span className="font-light text-xl ml-2">Safe Ride</span>
        </Link>
        <nav className="hidden md:flex gap-6 font-semibold">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.path}
              className="text-white hover:text-teal-200 transition font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          <Menu size={32} />
        </button>
      </div>
      {/* Mobile Nav */}
      <nav className={`${open ? "flex" : "hidden"} md:hidden flex-col bg-teal-800 text-white`}>
        {navLinks.map(link => (
          <Link
            key={link.label}
            to={link.path}
            className="px-6 py-3 border-b border-teal-900 font-semibold"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

