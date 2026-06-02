import React, { useState } from 'react';
import aboutBg from '../assets/about-bg.png';
const AboutSection = () => {
  const [emoji, setEmoji] = useState('😊')
  const [showFact, setShowFact] = useState(false)
  const reactions = [
 '😊',
 '👋',
 '🚀',
 '💻',
 '🎯',
 '🔥'
]
  return (
    <section className='text-white mt-16 relative overflow-hidden' id='about' >
        <div className='max-w-7xl mx-auto px-4 md:grid md:grid-cols-2
        gap-10 lg:gap-16 items-center py-16 relative z-10 '>
            <div data-aos='fade-right'>
                <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-6'>
                     More <span className='text-primary'>About</span> Me
                </h2>
                <p className='text-gray-400 text-base lg:text-lg
                    mb-10 leading-relaxed'>
                    I am Farzana Ebrahimi, a Computer Science graduate with a passion for web development and technology. I have experience teaching English and computer skills, as well as working in customer service and sales. Through continuous learning and hands-on projects, I have developed strong skills in HTML, CSS, JavaScript, React, and responsive web design.

                    <br /><br />

                    I enjoy creating clean, interactive, and user-friendly websites that solve real-world problems. My goal is to become a highly skilled software developer and contribute to innovative technology projects while continuing to learn and grow professionally.
                </p>
                <div className='grid grid-cols-3 gap-6 max-w-xl'>
                    <div className='text-center rounded-2xl
                    bg-[#111a3e] border border-[#1f1641] p-5
                    transition-all duration-300 hover:border-primary/50'>
                        <h3 className='text-primary font-bold
                        text-2xl md:text-3xl'>10+</h3>
                        <p className='text-xs text-gray-400
                        uppercase tracking-wider mt-0.5'>Projects</p>

                    </div>
                    <div className='text-center rounded-2xl
                    bg-[#111a3e] border border-[#1f1641] p-5
                    transition-all duration-300 hover:border-primary/50'>
                         <h3 className='text-primary font-bold
                        text-2xl md:text-3xl'>3</h3>
                        <p className='text-xs text-gray-400
                        uppercase tracking-wider mt-0.5'>Languages</p>

                    </div>
                    <div className='text-center rounded-2xl
                    bg-[#111a3e] border border-[#1f1641] p-5
                    transition-all duration-300 hover:border-primary/50'>
                         <h3 className='text-primary font-bold
                        text-2xl md:text-3xl'>5+</h3>
                        <p className='text-xs text-gray-400
                        uppercase tracking-wider mt-0.5'>Certificates</p>
                    </div>
                </div>
            </div>
            <div className='mt-16 md:mt-0 flex justify-center
            lg:justify-end relative' data-aos='fade-left'>
                <div
                    className='absolute
                    w-80 h-80 md:w-96 md:h-96
                    rounded-full
                    border-2 border-primary
                    translate-x-4 translate-y-4
                    z-0'
                    >
                </div>
                <div
                    className='relative z-10
                    w-80 h-80 md:w-96 md:h-96
                    bg-[#111a3e]
                    rounded-full
                    overflow-hidden
                    border border-[#1f1641]
                    shadow-2xl'
                    onMouseEnter={() => {
                    setEmoji('👋')
                    setShowFact(true)
                    }}

                    onMouseLeave={() => {
                    setEmoji('😊')
                    setShowFact(false)
                    }}
                    onClick={() =>
                        setEmoji(
                        reactions[
                        Math.floor(
                            Math.random() * reactions.length
                        )
                        ]
                        )
                    }
                >
                    <img
                        src={aboutBg}
                        alt="About"
                        className='w-full h-full object-cover
                        transition-transform duration-500
                        hover:scale-110'
                    />
                </div>
                    <div className='absolute bottom-6 right-6 text-5xl animate-bounce z-20'>
                        {emoji}
                    </div>
                    {
                        showFact && (
                        <div
                        className='absolute top-5 left-5
                        bg-primary text-white
                        px-4 py-2 rounded-xl
                        text-sm shadow-lg z-20'
                        >
                        💡 Fun Fact: I speak 3 languages and love building React apps!
                        </div>
                        )
                    }
                

            </div>

        </div>
    </section>
  )
}

export default AboutSection
