import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home">
            <img
              src={logo}
              alt="Dev Stack Logo"
              className="h-8 object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  index === 0
                    ? "text-pink-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Sign In
            </button>

            <button
              type="button"
              className="brand-gradient text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Buttons + Menu */}
          <div className="flex lg:hidden items-center gap-3">
            <button type="button" className="text-sm font-medium text-gray-600">
              Sign In
            </button>

            <button
              type="button"
              className="brand-gradient text-white px-4 py-1.5 rounded-full text-sm font-medium"
            >
              Sign Up
            </button>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-700"
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-2 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
