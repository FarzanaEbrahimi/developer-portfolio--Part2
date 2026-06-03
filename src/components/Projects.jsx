import React, { useState } from 'react'
import schoolportal from "../assets/school-portal.PNG";
import invoiceapp from "../assets/client-manager.PNG";
import booklog from "../assets/book-reading-log.PNG";
import movietheater from "../assets/movie-theater.PNG";
import personalweb from "../assets/personal-webpage.PNG";
import portfolio from '../assets/DeveloperPortfolio.png';

const Projects = () => {
    const projects =[
        {
            id: 1,
            image: schoolportal,
            title: ' School Portal',
            desc: 'small multi-page School Portal',
            details: 'building a small multi-page School Portal that simulates a simplified student management system.',
            tech: ['DOM manipulation', 'addEventListener()', 'Form validation'],
            github:'https://github.com/FarzanaEbrahimi/School-Portal.git',
            demo:'https://farzanaebrahimi.github.io/School-Portal/',
            featured: true
            
         },
         {
            id:2,
            image: invoiceapp,
            title: 'Freelance Invoice & Client Manager App',
            desc: 'for managing clients and invoices',
            details:'building a modern, web application to manage clients and invoices',
            tech: ['JavaScript', 'CRUD operations' ],
            github: 'https://github.com/FarzanaEbrahimi/Freelance-Invoice-Client-Manager-App.git',
            demo:   'https://farzanaebrahimi.github.io/Freelance-Invoice-Client-Manager-App/'
        },
         {
            id:3,
            featured:true,
            image: booklog,
            title: 'Book Reading Log',
            desc: 'a dynamic JavaScript system',
            details:' building a dynamic JavaScript system to track reading progress among competitors.',
            tech: ['JavaScript', 'arrays', 'loops'] ,
            demo:'https://demo-link.com',
            github:'https://github.com/FarzanaEbrahimi/reading-championship.git'
        },
           {
            id:4,
            image: movietheater,
            title: 'Responsive Movie Theater Web Page',
            desc: ' responsive landing page',
            details:'building a responsive landing page for a fictional movie theater ',
            tech: ['HTML', 'CSS', 'Flexbox'] ,
            demo:'https://farzanaebrahimi.github.io/movie-theater-page/',
            github:'https://github.com/FarzanaEbrahimi/movie-theater-page.git'
        },
           {
            id:5,
            image: personalweb,
            title: 'Personal Web',
            desc: 'single-page personal website',
            details:'builing a single-page personal website using HTML and basic CSS ',
            tech: ['HTML', 'CSS' ] ,
            demo:' https://farzanaebrahimi.github.io/personal-webpage/',
            github:'https://github.com/FarzanaEbrahimi/personal-webpage.git'
        },
           {
            id:6,
            image: portfolio,
            title: 'Developer Portfolio',
            desc: ' personal developer portfolio',
            details:'building personal developer portfolio using React',
            tech: ['React', 'reusable components','props'] ,
            demo:'https://developer-portfolio-3hqg.vercel.app/',
            github:'https://github.com/FarzanaEbrahimi/developer-portfolio-.git'
        },

        
    ]
    const [selectedTech, setSelectedTech] = useState('All')
    const [openProject, setOpenProject] = useState(null)
    const technologies = [
        'All',
        ...new Set(projects.flatMap(project => project.tech))
    ] 
    const filteredProjects =
        selectedTech === 'All'
            ? projects
            : projects.filter(project =>
                project.tech.includes(selectedTech)
            )     
  return (
   <section className='py-16 bg-gray-900' id='projects'>
        <div className='container mx-auto px-4 max-w-7xl'>
            <div className='text-center mb-10'>
                <h2 className='text-4xl md:text-5xl font-extrabold
                text-white'>Projects.</h2>
                <div className='w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl'></div>
            </div>
            <div className='text-center mb-6'>
                <p className='text-gray-400'>
                    Showing {filteredProjects.length} Projects
                </p>
            </div>
            <div className='flex flex-wrap justify-center gap-3 mb-10'>
                {technologies.map((tech) => (
                    <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                        selectedTech === tech
                        ? 'bg-primary text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                    >
                    {tech}
                    </button>
                ))}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-5'>
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className='group relative bg-gray-800 rounded-lg overflow-hidden
                        shadow-sm hover:shadow-2xl hover:scale-105
                        hover:-translate-y-2
                        transition-all duration-500 flex flex-col'
                    >
                        {project.featured && (
                            <div className='absolute top-3 right-3 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-bold'>
                                🌟 Featured
                            </div>
                        )}
                    <div className="aspect-video overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-52 object-contain bg-gray-900 p-2 hover:opacity-90 transition-opacity duration-300'
                        />
                    </div>

                        <div className='p-4'>
                            <h3 className='text-lg font-semibold text-white group-hover:text-primary transition-colors'>
                                {project.title}
                            </h3>

                            <p className='text-gray-400 text-sm mt-1'>
                                {project.desc}
                            </p>
                            <button
                                onClick={() =>
                                    setOpenProject(
                                    openProject === project.id
                                        ? null
                                        : project.id
                                    )
                                }
                                className='mt-3 text-primary text-sm font-medium'
                                >
                                {openProject === project.id
                                    ? 'Hide Details'
                                    : 'View Details'}
                            </button>
                            {openProject === project.id && (
                                <div className='mt-3 p-3 bg-gray-700 rounded-lg text-sm text-gray-300'>
                                    {project.details}
                                </div>
                            )}
                            <div className='flex flex-wrap gap-1.5 mt-4'>
                                {project.tech.map((tec, idx) => (
                                    <span
                                        key={idx}
                                        className='text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded hover:bg-primary hover:text-white transition-colors duration-300'
                                    >
                                        {tec}
                                    </span>
                                ))}
                            </div>

                            <div className='flex gap-3 mt-4'>
                                <a
                                    href={project.github}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-primary text-sm font-medium hover:underline'
                                >
                                    GitHub
                                </a>

                                <a
                                    href={project.demo}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-primary text-sm font-medium hover:underline'
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
                {filteredProjects.length === 0 && (
                    <div className='col-span-full text-center py-10'>
                        <div>
                            <p className='text-5xl mb-4'>🚫</p>
                            <p className='text-gray-400 text-lg'>
                                No projects match this technology.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
   </section>
  )
}

export default Projects
