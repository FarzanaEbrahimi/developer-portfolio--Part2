import webCert from '../assets/APP_Web Dev 1, C4 Certificate-27.pdf'
import icdlCert from '../assets/ICDL.pdf'
import wldCert from '../assets/Royesh.pdf'
import { Award, Calendar,
     ExternalLink, ShieldCheck } from 'lucide-react'
import React from 'react'

const Certificates = () => {
    const certifications = [
        {
            id: 1,
            title: 'Web Development Bootcamp',
            issuer: 'CW Bootcamps',
            date: '2025',
            link: webCert,
            desc: 'Completed training in HTML, CSS, JavaScript, React, and Tailwind CSS.'
        },

        {
            id: 2,
            title: 'ICDL Certification',
            issuer: 'WASSA',
            date: '2022',
            link: icdlCert,
            desc: 'Completed International Computer Driving License training.'
        },

        {
            id: 3,
            title: 'Women Leadership Development',
            issuer: 'Royesh Program',
            date: '2021',
            link: wldCert,
            desc: 'Developed leadership, communication, and workplace skills.'
        }
    ]
  return (
    <section className='text-white py-20' id='certificates' aria-labelledby='certificates-heading'>
        <div className='max-w-7xl mx-auto px-6 lg:px-16'>
            <div className='mb-16'>
                <p className='text-primary text-sm uppercase
                tracking-widest mb-2 font-semibold'>Achievements</p>
                <h2 id='certificates-heading' className='text-4xl md:text-5xl font-extrabold
                text-white'>
                    Certifications.
                </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-6'>
                 {certifications.map((cap) => (

                    <div
                        key={cap.id}
                        data-aos='zoom-in'
                        className='group relative bg-[#111a3e]
                        border border-[#1f1641] p-6 rounded-2xl
                        transition-all duration-300
                        hover:border-primary/50
                        hover:-translate-y-1
                        hover:shadow-xl'            
                    >

                        <div
                        className='absolute -top-4 -right-4
                        bg-primary p-3 rounded-xl shadow-lg
                        transform group-hover:rotate-12
                        transition-transform'
                        >

                        <Award
                            size={24}
                            className='text-white'
                        />

                        </div>

                        <div
                        className='flex items-center gap-4
                        mb-4 text-xs text-gray-700'
                        >

                        <span className='flex items-center gap-1'>

                            <ShieldCheck
                            size={14}
                            className='text-primary'
                            />

                            {cap.issuer}

                        </span>

                        <span className='flex items-center gap-1'>

                            <Calendar size={14} />

                            {cap.date}

                        </span>

                        </div>

                        <div className="flex items-center mb-3">
                            <h3
                                className='text-xl font-bold
                                group-hover:text-primary transition-colors'
                            >
                                {cap.title}
                            </h3>

                            <span className='ml-2 text-green-400 text-sm'>
                                ✓ Verified
                            </span>
                        </div>

                        <p
                        className='text-gray-700 text-sm mb-6
                        line-clamp-2'
                        >

                        {cap.desc}

                        </p>

                        <a
                        href={cap.link}
                        aria-label={`View ${cap.title} certificate`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2
                        text-sm font-medium text-primary
                        hover:text-white transition-colors
                        border-b border-transparent
                        hover:border-white pb-1
                        focus:outline-none
                        focus:ring-2
                        focus:ring-cyan-400
                        rounded'
                        >

                        View Certificate

                        <ExternalLink size={14} />

                        </a>

                    </div>

                 ))}

            </div>
        </div>
    </section>
  );
}

export default Certificates;
