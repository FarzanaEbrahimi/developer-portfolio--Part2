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
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <BrowserRouter>
      <ToastProvider>
          <div
            className={`min-h-screen transition-all duration-500 ${
              theme === "dark"
                ? "bg-[#111827] text-gray-100"
                : theme === "light"
                ? "bg-white text-gray-900"
                : "bg-cyan-950 text-white"
            }`}
          >
            <Header />

            <ScrollProgress />

            <main className="relative z-0">
              <AnimatedRoutes />
            </main>
            

            <Footer />
            <BackToTop />
          </div>
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;