import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from 'react-icons/fa'

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer
      role="contentinfo"
      className='mt-12 border-t border-[#33353f]
      text-white py-8'
    >
      <div
        className='max-w-7xl mx-auto px-6
        flex flex-col md:flex-row
        justify-between items-center gap-6'
      >
        <div>
          <h2 className='text-2xl font-black'>
            Farzana Ebrahimi
          </h2>

          <p className='text-gray-700 text-sm mt-2'>
            Frontend Developer | Computer Science Graduate
          </p>
          <p className='text-gray-500 text-sm mt-2 max-w-sm'>
            Open to internships, collaborations, and frontend development opportunities.
          </p>
        </div>

        <div className='flex gap-5 text-2xl'>
          <a
            href='https://github.com/FarzanaEbrahimi'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Visit my GitHub profile'
            className='hover:text-primary transition-colors
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-400
            rounded'
          >
            <FaGithub />
          </a>

          <a
            href='https://www.linkedin.com/in/farzana-e-134367215/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Visit my LinkedIn profile'
            className='hover:text-primary transition-colors
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-400
            rounded'
          >
            <FaLinkedin />
          </a>

          <a
            href='mailto:farzanaebrhimi2001@gmail.com'
            aria-label='Send me an email'
            className='hover:text-primary transition-colors
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-400
            rounded'
          >
            <FaEnvelope />
          </a>
        </div>
        <button
          type="button"
          aria-label="Scroll back to top"
          onClick={scrollTop}
          className='
          bg-cyan-600 hover:bg-cyan-700
          px-4
          py-2
          rounded-lg
          hover:scale-105
          transition-all
          focus:outline-none
          focus:ring-2
          focus:ring-cyan-400
          '
        >
          ↑ Top
        </button>
      </div>

      <div className='text-center mt-6'>
        <p className='text-gray-500 text-sm'>
          © 2026 Farzana Ebrahimi. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer