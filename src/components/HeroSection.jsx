import { Download } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import hero from '../assets/hero.jpg';
import { Link } from "react-router-dom";
const HeroSection = () => {
  const roles = [
    'Frontend Developer',
    'React Developer',
    'Web Designer',
    'Computer Science Graduate'
  ]

  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    let currentText = roles[roleIndex]
    let charIndex = 0

    const typing = setInterval(() => {
      setText(currentText.slice(0, charIndex + 1))
      charIndex++

      if (charIndex === currentText.length) {
        clearInterval(typing)

        setTimeout(() => {
          setRoleIndex(
            (prev) => (prev + 1) % roles.length
          )
          setText('')
        }, 1500)
      }
    }, 100)

    return () => clearInterval(typing)
  }, [roleIndex])
  return (
    <section
        id="home"
        aria-label="Hero Section"
        className="min-h-screen relative z-0 overflow-hidden"
    >
    <div className='absolute top-0 inset-x-0 h-64 flex items-start'>
        <div className='h-24 w-2/3 bg-linear-to-br from-[#0c7fac]
        blur-2xl invisible opacity-40'></div>
        <div className='h-20 w-3/4 bg-linear-to-r from-[#289eff]
        opacity-40 blur-2xl'></div>
    </div>
    <div className='w-full px-5 sm:px-8 md:px-12 lg:px-8
    max-w-5xl lg:max-w-7xl mx-auto relative'>
        <div
            className="
            grid
            lg:grid-cols-2
            gap-10
            pt-24
            items-center
            max-w-7xl
            mx-auto
            overflow-hidden
            "
            >
            <div className='lg:py-6'>
                <div className='text-center lg:text-left'>
                    <h1 className='pt-4 text-white font-bold
                    text-4xl md:text-5xl lg:text-6xl '>
                        Hi, I'm{' '}
                        <span className='text-transparent 
                        bg-clip-text bg-linear-to-r from-primary
                        to-cyan-200'>
                            Farzana Ebrahimi 
                        </span>👋
                    </h1>
                    <div className='mt-4 h-10'>
                        <p className='text-primary text-xl md:text-2xl font-semibold'>
                            <span 
                             aria-live="polite"
                             aria-atomic="true">
                                {text}
                            </span>
                            <span className="animate-pulse">|</span>
                        </p>
                    </div>
                </div>
                <p className='text-gray-300 pt-8 text-center
                    lg:text-left mx-auto max-w-xl'>
                    I build modern, responsive, and accessible web applications using React, JavaScript, and Tailwind CSS. Passionate about creating user-friendly experiences and continuously improving my frontend development skills.
                </p>
                <p className="mt-4 text-gray-700">
                    Currently seeking opportunities to grow as a Frontend Developer, contribute to meaningful projects, and continue learning modern web technologies.
                </p>
                <p className="mt-4 text-cyan-300 font-medium">
                    Open to internships, collaborations, freelance projects, and entry-level frontend development opportunities.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">
                        React
                    </span>

                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">
                        JavaScript
                    </span>

                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">
                        Tailwind CSS
                    </span>

                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">
                        HTML
                    </span>

                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">
                        CSS
                    </span>
                    </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 sm:w-max lg:mx-0">

                        {/* <span className='absolute inset-0 
                        rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out 
                        bg-primary border-2 border-transparent'>

                        </span> */}
                        <Link
                            to="/contact"
                            aria-label="Go to contact page"
                            className="px-6 md:px-7 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white transition flex justify-center"
                        >
                            Let's Connect
                        </Link>

                        <div className='hover:scale-105
                        transition-all ease-in-out flex justify-center
                        items-center relative'>
                            <div className='svg-container'>
                                <Download size={18}
                                className='text-primary'/>
                                <div className='download-loader
                                text-white hidden'></div>
                            </div>
                            <a
                                href="/Farzana-Ebrahimi-CV.pdf"
                                download
                                aria-label="Download Farzana Ebrahimi Resume"
                                className="border border-cyan-400 px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center items-center"
                            >
                                Download resume
                            </a>
                            <a
                                href="/projects"
                                aria-label="View my projects"
                                className="px-6 md:px-7 py-3 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white hover:opacity-90 transition"
                             >
                                View Projects
                            </a>
                        </div>
                    
                </div>
            </div>
            <div className='lg:h-full flex justify-center items-center'>
                <div className='flex w-full h-96 min-h-96
                lg:min-h-0 lg:w-full lg:h-full items-center
                relative'>
                    {/* <div className='absolute z-0 top-1/2
                    -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)]
                    bg-linear-to-r opacity-10 from-[#0c64ac]
                    to-primary blur-3xl'>
                    </div> */}
                    <div
                        className="
                        relative
                        z-10
                        p-2
                        mx-auto
                        rounded-[30%_70%_70%_30%/30%_30%_70%_70%]
                        shadow-lg
                        border
                        border-cyan-500
                        max-w-[350px]
                        "
                        >
                        <img src={hero} alt="Portrait of Farzana Ebrahimi, Frontend Developer" 
                        // width="500"
                        // height="auto"
                        loading='eager'
                        fetchPriority='high'
                        className='w-full h-full object-cover 
                        hover:scale-105
                        transition-all
                        duration-500
                        rounded-[30%_70%_70%_30%/30%_30%_70%_70%]'/>
                    </div>

                </div>

            </div>
        </div>
    </div>

    </section>
  );
}
export default HeroSection
