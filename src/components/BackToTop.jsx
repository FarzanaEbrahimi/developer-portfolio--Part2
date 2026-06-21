import React, { useEffect, useState } from 'react'

const BackToTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      )
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!show) return null

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Back to top"
      className='fixed bottom-6 right-6
      bg-cyan-600 text-white
      w-12 h-12 rounded-full
      shadow-xl z-50
      hover:bg-cyan-700 hover:scale-110
      focus:outline-none
      focus:ring-2
      focus:ring-cyan-300
      transition-all duration-300'
    >
      ↑
    </button>
  )
}

export default BackToTop