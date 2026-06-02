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

          <p className='text-gray-400 text-sm mt-2'>
            Frontend Developer | Computer Science Graduate
          </p>
        </div>

        <div className='flex gap-5 text-2xl'>
          <a
            href='https://github.com/FarzanaEbrahimi'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary transition-colors'
          >
            <FaGithub />
          </a>

          <a
            href='https://www.linkedin.com/in/farzana-e-134367215/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary transition-colors'
          >
            <FaLinkedin />
          </a>

          <a
            href='mailto:farzanaebrhimi2001@gmail.com'
            className='hover:text-primary transition-colors'
          >
            <FaEnvelope />
          </a>
        </div>
        <button
          onClick={scrollTop}
          className='bg-primary px-4 py-2 rounded-lg
          hover:scale-105 transition-all'
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