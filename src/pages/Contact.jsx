import { useEffect } from "react";
import ContactSection from "../components/ContactSection";

export default function Contact() {

  useEffect(() => {
    document.title = "Farzana Ebrahimi | Contact";
  }, []);

  return <ContactSection />;
}