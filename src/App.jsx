import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";
import Favorites from "./pages/Favorites";

import { useTheme } from "./context/ThemeContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { ToastProvider } from "./context/ToastContext";

/* 
   PAGE WRAPPER (ANIMATION)
*/
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

/* 
   ROUTES (with animation)
 */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />

        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />

        <Route
          path="/projects"
          element={
            <PageWrapper>
              <Projects />
            </PageWrapper>
          }
        />

        <Route
          path="/projects/:id"
          element={
            <PageWrapper>
              <ProjectDetails />
            </PageWrapper>
          }
        />

        <Route
          path="/favorites"
          element={
            <PageWrapper>
              <Favorites />
            </PageWrapper>
          }
        />

        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />

        <Route
          path="*"
          element={
            <PageWrapper>
              <NotFound />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

/*  APP ROOT */
const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <ToastProvider>
        <FavoritesProvider>

          <div
            className={`min-h-screen transition-all duration-500 ${
              theme === "dark"
                ? "bg-[#111827] text-white"
                : theme === "light"
                ? "bg-white text-black"
                : "bg-cyan-950 text-white"
            }`}
          >
            <Header />

            <ScrollProgress />

            <AnimatedRoutes />

            <Footer />
            <BackToTop />
          </div>

        </FavoritesProvider>
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;