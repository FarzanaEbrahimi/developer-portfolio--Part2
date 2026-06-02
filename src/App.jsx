import BackToTop from './components/BackToTop'
import ProjectUpdates from './components/ProjectUpdates';
import FeedbackWall from './components/FeedbackWall';
import ScrollProgress from './components/ScrollProgress';
import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import Education from './components/Education'
import Certificates from './components/Certificates.jsx'
import AboutSection from './components/AboutSection'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer'
const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  }); 
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:false,
      offset: 100,
    })
    }, []);
  useEffect(() => {
  localStorage.setItem("theme", theme);
  }, [theme]);
 
  
  return (
    <div
        className={`min-h-screen transition-all duration-500 ${
          theme === "dark"
          ? "bg-[#111827] text-white"
          : theme === "light"
          ? "bg-white text-black"
          : "bg-cyan-950 text-white"
        }`}
      >
      <ScrollProgress />
      <Header
        theme={theme}
        setTheme={setTheme}
      />
      <HeroSection />
      <Education />
      <Certificates />
      <AboutSection />
      <Experience />
      <Projects />
      <ProjectUpdates />
      <FeedbackWall />
      <ContactSection />
      <Footer />
      <BackToTop />

    </div>
  )
}

export default App
