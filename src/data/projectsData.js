import schoolportal from "../assets/school-portal.PNG";
import invoiceapp from "../assets/client-manager.PNG";
import booklog from "../assets/book-reading-log.PNG";
import movietheater from "../assets/movie-theater.PNG";
import personalweb from "../assets/personal-webpage.PNG";
import portfolio from "../assets/DeveloperPortfolio.PNG";

export const projectsData = [
  {
    id: 1,
    image: schoolportal,
    title: "School Portal",
    status: "Featured",
    progress: 100,
    desc: "small multi-page School Portal",
    details: "Student management system project",
    tech: ["DOM", "JS"],
    github: "https://github.com/FarzanaEbrahimi/School-Portal.git",
    demo: "https://farzanaebrahimi.github.io/School-Portal/"
  },
  {
    id: 2,
    image: invoiceapp,
    title: "Invoice App",
    status: "Featured",
    progress: 100,
    desc: "client manager",
    details: "CRUD app",
    tech: ["React", "JS"],
    github: "https://github.com/FarzanaEbrahimi/Freelance-Invoice-Client-Manager-App.git",
    demo: "https://farzanaebrahimi.github.io/Freelance-Invoice-Client-Manager-App/"
  },
  {
    id: 3,
    image: booklog,
    title: "Book Log",
    status: "Featured",
    progress: 100,
    desc: "reading tracker",
    details: "tracks books",
    tech: ["JS"],
    github: "https://github.com/FarzanaEbrahimi/reading-championship.git",
    demo: "https://demo-link.com"
  },
  {
    id: 4,
    image: movietheater,
    title: "Movie Page",
    status: "Featured",
    progress: 100,
    desc: "responsive UI",
    details: "landing page",
    tech: ["HTML", "CSS"],
    github: "https://github.com/FarzanaEbrahimi/movie-theater-page.git",
    demo: "https://farzanaebrahimi.github.io/movie-theater-page/"
  },
  {
    id: 5,
    image: personalweb,
    title: "Personal Web",
    status: "Featured",
    progress: 100,
    desc: "basic website",
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
    details: "main project",
    tech: ["React"],
    github: "https://github.com/FarzanaEbrahimi/developer-portfolio-.git",
    demo: "https://developer-portfolio-3hqg.vercel.app/"
  }
];