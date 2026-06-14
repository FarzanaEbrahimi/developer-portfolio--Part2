import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";
import { FavoritesProvider } from "./context/FavoritesContext";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </ThemeProvider>
);