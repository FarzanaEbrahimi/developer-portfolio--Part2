import React from 'react'
import educationImg from '../assets/education.png'

import {
  GraduationCap,
  Calendar,
  CheckCircle
} from 'lucide-react'

const Education = () => {

 const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Computer Science',
    institution: 'Herat University',
    duration: '2019 - 2023',
    details:
      'Graduated with a strong academic record in Software Engineering. Studied programming, databases, networking, software development, and problem-solving techniques.'
  },

  {
    id: 2,
    degree: 'Web & AI Development Bootcamp',
    institution: 'CW Bootcamps',
    duration: '2025 - Present',
    details:
      'Learning modern web development technologies including HTML, CSS, JavaScript, React, Tailwind CSS, Git, GitHub, and AI-powered development tools.'
  },

  {
    id: 3,
    degree: 'ICDL Certification',
    institution: 'WASSA',
    duration: 'Completed',
    details:
      'Completed training in Microsoft Office, Windows, internet usage, file management, and essential computer skills.'
  }
]

  return (

    <section
      className='text-white py-20 overflow-hidden'
      id='education'
    >

      <div className='max-w-7xl mx-auto px-6 lg:px-16'>

        {/* Heading */}
        <div className='mb-16'>

          <p className='text-primary text-sm uppercase'>
            Education & Training
          </p>

          <h2 className='text-4xl md:text-5xl font-extrabold'>
            Education
          </h2>
          <p className='text-gray-400 mt-3 max-w-xl'>
            My academic journey and professional training have built a strong foundation in software engineering, web development, and modern technologies.
          </p>

        </div>

        {/* Main Content */}
        <div className='flex flex-col lg:flex-row items-center gap-16'>

          {/* Image Section */}
          <div
            className='w-full lg:w-5/12 flex justify-center lg:justify-start relative'
            data-aos='fade-right'
          >

            <div
              className='absolute top-4 left-4
              w-80 h-80 md:w-96 md:h-96
              rounded-2xl border border-cyan-500
              z-0'
            >
            </div>

            <div
              className='relative z-10 bg-[#111a3e]
              rounded-2xl overflow-hidden border
              border-[#1f1641]
              shadow-2xl'
            >

              <img
                src={educationImg}
                alt="Education"
                className='w-80 h-80 md:w-96 md:h-96
                object-cover object-center
                transition-all duration-500
                hover:scale-105
                hover:brightness-110'
              />

            </div>

            <div
              className='absolute -top-4 -left-4
              bg-primary/20 w-16 h-16 rounded-full blur-2xl'
            >
            </div>

          </div>

          {/* Education Cards */}
          <div
            className='w-full lg:w-7/12 space-y-6'
            data-aos='fade-left'
          >

            {educationData.map((edu) => (

              <div
                key={edu.id}
                className='group relative p-6 rounded-2xl
                bg-[#111a3e]
                border border-[#1f1641]
                hover:border-primary/50
                hover:-translate-y-2
                hover:shadow-[0_0_25px_rgba(6,162,194,0.25)]
                transition-all duration-300'
              >

                <div
                  className='flex flex-col sm:flex-row
                  sm:items-center justify-between
                  gap-4 mb-4'
                >

                  <div className='flex items-center gap-3'>

                    <div
                      className='p-2 bg-[#050816]
                      rounded-lg border border-primary/20
                      group-hover:border-primary
                      transition-colors'
                    >

                      <GraduationCap
                        size={24}
                        className='text-primary'
                      />

                    </div>

                    <div>

                      <h3
                        className='text-lg font-bold text-white
                        group-hover:text-primary
                        transition-colors'
                      >
                        {edu.degree}
                      </h3>

                      <p className='text-gray-400 text-sm'>
                        {edu.institution}
                      </p>

                    </div>

                  </div>

                  <div
                    className='flex items-center gap-2
                    text-xs font-medium bg-[#050816]
                    px-3 py-1 rounded-full
                    border border-gray-700 w-fit'
                  >

                    <Calendar
                      size={12}
                      className='text-primary'
                    />

                    {edu.duration}

                  </div>

                </div>

                <p className='text-gray-300 leading-relaxed'>
                  {edu.details}
                </p>

                <div
                  className='flex items-center gap-2
                  text-[10px] uppercase tracking-wider
                  text-primary font-bold mt-4'
                >

                  <CheckCircle size={12} />

                  Continuous Learning

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};
export default Education;