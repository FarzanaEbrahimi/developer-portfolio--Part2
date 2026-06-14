import HeroSection from '../components/HeroSection'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Certificates from '../components/Certificates'
import Projects from './Projects'
import FeedbackWall from '../components/FeedbackWall'
import ProjectUpdates from '../components/ProjectUpdates'
import ContactSection from '../components/ContactSection'
import { motion } from "framer-motion";


const Home = () => {
  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <HeroSection />
      <Education />
      <Experience />
      <Certificates />
      <Projects />
      <ProjectUpdates />
      <FeedbackWall />
      <ContactSection />
    </motion.div>
  )
}

export default Home