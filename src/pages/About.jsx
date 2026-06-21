import { useEffect } from "react";
import AboutSection from "../components/AboutSection";

export default function About() {

  useEffect(() => {
    document.title = "Farzana Ebrahimi | About";
  }, []);

  return <AboutSection />;
}