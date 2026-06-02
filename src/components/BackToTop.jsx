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
      onClick={scrollTop}
      className='fixed bottom-6 right-6
      bg-primary text-white
      w-12 h-12 rounded-full
      shadow-xl z-50
      hover:scale-110
      transition-all duration-300'
    >
      ↑
    </button>
  )
}

export default BackToTop