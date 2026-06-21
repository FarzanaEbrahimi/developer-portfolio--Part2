import schoolportal from "../assets/school-portal.PNG";
import invoiceapp from "../assets/client-manager.PNG";
import booklog from "../assets/book-reading-log.PNG";
import movietheater from "../assets/movie-theater.jpg";
import personalweb from "../assets/personal-webpage.jpg";
import portfolio from "../assets/DeveloperPortfolio.PNG";

export const projectsData = [
  {
    id: 1,
    image: schoolportal,
    title: "School Portal",
    status: "Completed",
    progress: 100,
    desc: "small multi-page School Portal",
    problem:
      "Schools need an organized way to manage student information and navigation between different sections.",

    solution:
      "Built a multi-page school portal using JavaScript and DOM manipulation to provide structured access to school-related content.",

    outcome:
      "Created a simple and user-friendly portal that improves organization and navigation.",
    details: "Student management system project",
    tech: ["DOM", "JavaScript"],
    github: "https://github.com/FarzanaEbrahimi/School-Portal.git",
    demo: "https://farzanaebrahimi.github.io/School-Portal/"
  },
  {
    id: 2,
    image: invoiceapp,
    title: "Invoice App",
    status: "Completed",
    progress: 100,
    desc: "client manager",
    problem:
      "Freelancers and small businesses often struggle to organize client information and invoices efficiently.",

    solution:
      "Developed a React-based CRUD application for managing clients and invoice records.",

    outcome:
      "Improved data organization and made client management faster and more convenient.",
    details: "CRUD app",
    tech: ["React", "JavaScript"],
    github: "https://github.com/FarzanaEbrahimi/Freelance-Invoice-Client-Manager-App.git",
    demo: "https://farzanaebrahimi.github.io/Freelance-Invoice-Client-Manager-App/"
  },
  {
    id: 3,
    image: booklog,
    title: "Book Log",
    status: "Completed",
    progress: 100,
    desc: "reading tracker",
    problem:
      "Readers need an easy way to keep track of books they have read and monitor their reading progress.",

    solution:
      "Created a JavaScript-based reading tracker that allows users to record and manage books.",

    outcome:
      "Provides a simple system for tracking reading habits and staying motivated.",
    details: "tracks books",
    tech: ["JavaScript"],
    github: "https://github.com/FarzanaEbrahimi/reading-championship.git",
    demo: "https://demo-link.com"
  },
  {
    id: 4,
    image: movietheater,
    title: "Movie Page",
    status: "Completed",
    progress: 100,
    desc: "responsive UI",
    problem:
      "Movie theaters need attractive landing pages to present information and engage visitors.",

    solution:
      "Designed a responsive movie theater landing page using HTML and CSS.",

    outcome:
      "Delivered a visually appealing and mobile-friendly interface for showcasing movie content.",
    details: "landing page",
    tech: ["HTML", "CSS"],
    github: "https://github.com/FarzanaEbrahimi/movie-theater-page.git",
    demo: "https://farzanaebrahimi.github.io/movie-theater-page/"
  },
  {
    id: 5,
    image: personalweb,
    title: "Personal Web",
    status: "Completed",
    progress: 100,
    desc:"Responsive personal website showcasing profile, skills, and achievements.",
    problem:
      "Professionals need a personal website to present their background, skills, and achievements online.",

    solution:
      "Built a personal website using HTML and CSS with structured sections and responsive design.",

    outcome:
      "Established an online presence and improved personal branding.",
    details: "HTML CSS site",
    tech: ["HTML", "CSS"],
    github: "https://github.com/FarzanaEbrahimi/personal-webpage.git",
    demo: "https://farzanaebrahimi.github.io/personal-webpage/"
  },
  {
    id: 6,
    image: portfolio,
    title: "Portfolio",
    status: "Featured",
    progress: 100,
    desc: "React portfolio",
    problem:
      "Developers need a professional platform to showcase projects, skills, and experience to employers and clients.",

    solution:
      "Built a modern React portfolio featuring routing, project showcases, favorites, dark mode, animations, and responsive design.",

    outcome:
      "Created a professional developer portfolio that highlights technical skills and completed projects.",
    details: "main project",
    tech: ["React"],
    github: "https://github.com/FarzanaEbrahimi/developer-portfolio-.git",
    demo: "https://developer-portfolio-3hqg.vercel.app/"
  }
];