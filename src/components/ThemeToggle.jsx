import React from "react";

const ThemeToggle = ({ theme, setTheme }) => {
  const themes = ["dark", "light", "ocean"];

  return (
    <div className="flex gap-2">
      {themes.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setTheme(item)}
          aria-label={`Switch to ${item} theme`}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-all
          ${
            theme === item
              ? "bg-primary text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          {item === "dark" && "🌙"}
          {item === "light" && "☀️"}
          {item === "ocean" && "🌊"}

          {" "}
          {item}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;