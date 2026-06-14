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
    <header className="sticky top-0 z-50 bg-[#111827]/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div
          className="text-white text-3xl font-black cursor-pointer"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          PORTFOLIO .
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 font-bold"
                  : "text-gray-300 hover:text-white transition-colors"
              }
            >
              {item.path === "/favorites" ? (
                <span className="flex items-center gap-2">
                  Favorites
                  <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">
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
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg transition"
          >
            Contact Me
          </NavLink>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#111827] z-50 transition-transform duration-300 md:hidden ${
          isMenuOpen
            ? "translate-x-0"
            : "translate-x-full"
        } p-8`}
      >
        <button
          className="self-end text-white mb-10"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>

        <ul className="flex flex-col gap-8">

          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-400 text-xl font-semibold"
                    : "text-white text-xl font-semibold"
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