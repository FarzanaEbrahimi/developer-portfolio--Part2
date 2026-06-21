import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import { useFavorites } from "../context/FavoritesContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { theme, setTheme } = useTheme();
  const { favorites } = useFavorites();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Favorites", path: "/favorites" },
  ];

  return (
    <header className="sticky top-0 z-50  bg-slate-950 backdrop-blur-md border-b border-gray-800" role="banner">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          aria-label="Go to Home Page"
          className="
          text-white
          text-3xl
          font-black
          hover:text-cyan-400
          transition-colors
          duration-300
          "
        >
          PORTFOLIO .
          
        </NavLink>

        {/* Desktop Menu */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8"
        >

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
              `${
                isActive
                  ? "text-cyan-400 font-bold"
                  : "text-gray-300 hover:text-white"
              }
              transition-colors
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-500`
            }
              
            >
              {item.path === "/favorites" ? (
                <span className="flex items-center gap-2">
                  Favorites
                  <span 
                    aria-label={`${favorites.length} favorite projects`}
                    className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">
                    {favorites.length}
                  </span>
                </span>
              ) : (
                item.name
              )}
            </NavLink>
          ))}

          <ThemeToggle
            theme={theme}
            setTheme={setTheme}
          />

          <NavLink
            to="/contact"
            aria-label="Contact Me"
            className="
            bg-cyan-500
            hover:bg-cyan-600
            text-white
            px-5 py-2
            rounded-lg
            transition
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-400
            "
          >
            Contact Me
          </NavLink>
        </nav>

        {/* Mobile Button */}
        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="
            md:hidden
            text-white
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-500
            rounded
            "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-9998 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
    id="mobile-menu"
    role="dialog"
    aria-label="Mobile Navigation Menu"
    className={`fixed top-0 right-0 h-screen w-80
    bg-slate-950
    border-l border-cyan-500/20
    shadow-2xl
    z-[9999]
    transition-transform duration-300 ease-in-out
    md:hidden
    overflow-y-auto
    ${
      isMenuOpen
        ? "translate-x-0"
        : "translate-x-full"
    }
    p-8`}
  >
    <div className="flex justify-end mb-10">
      <button
        aria-label="Close Menu"
        className="text-white"
        onClick={() => setIsMenuOpen(false)}
      >
        <X size={32} />
      </button>
    </div>

    <ul className="flex flex-col gap-6">
      {menuItems.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `block py-3 px-4 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-cyan-500/10 text-cyan-400 font-bold"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            {item.path === "/favorites"
              ? `Favorites ⭐ (${favorites.length})`
              : item.name}
          </NavLink>
        </li>
      ))}

      <li>
        <ThemeToggle
          theme={theme}
          setTheme={setTheme}
        />
      </li>

      <li className="pt-4">
        <NavLink
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg inline-block"
        >
          Contact Me
        </NavLink>
      </li>
    </ul>
  </div>
    </header>
  );
};

export default Header;                      