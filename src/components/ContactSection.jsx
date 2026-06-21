import React, { useState, useEffect } from 'react'
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCheckCircle
} from 'react-icons/fa'

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        })

        const [errors, setErrors] = useState({})
        const [toast, setToast] = useState(false)
        const [savedDraft, setSavedDraft] = useState(false)
        const [emailHint, setEmailHint] = useState('')
        useEffect(() => {
            document.title = "Farzana Ebrahimi | Contact";
        }, []);
        useEffect(() => {
            const saved = localStorage.getItem('portfolio-contact')

            if (saved) {
                setFormData(JSON.parse(saved))
                setSavedDraft(true)
            }
        }, [])
       useEffect(() => {
            if (
                formData.name ||
                formData.email ||
                formData.message
            ) {
                localStorage.setItem(
                'portfolio-contact',
                JSON.stringify(formData)
                )
            }
            }, [formData])
        useEffect(() => {
            const timer = setTimeout(() => {
                if (!formData.email) {
                setEmailHint('')
                return
                }

                const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/

                if (!emailRegex.test(formData.email)) {
                setEmailHint('Please enter a valid email.')
                } else {
                setEmailHint('✓ Email looks good')
                }
            }, 400)

            return () => clearTimeout(timer)
        }, [formData.email])
        const handleChange = (e) => {
            const { name, value } = e.target

            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }))
        }
        const validateForm = () => {
            let newErrors = {}

            if (!formData.name.trim()) {
                newErrors.name = 'Name is required'
            }

            if (!formData.email.trim()) {
                newErrors.email = 'Email is required'
            } else if (
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                formData.email
                )
            ) {
                newErrors.email = 'Invalid email format'
            }

            if (!formData.message.trim()) {
                newErrors.message = 'Message is required'
            }

            setErrors(newErrors)

            return Object.keys(newErrors).length === 0
        }
        const handleSubmit = (e) => {
            e.preventDefault()

            if (!validateForm()) return

            setToast(true)
            setErrors({})
            setEmailHint('')


            localStorage.removeItem('portfolio-contact')

            setFormData({
                name: '',
                email: '',
                message: '',
            })

            setSavedDraft(false)

            setTimeout(() => {
                setToast(false)
            }, 3000)
        }


        const contactInfo = [
            {
                id: 1,
                icon: FaEnvelope,
                title: 'Email',
                value: 'farzanaebrhimi2001@gmail.com',
                link: 'mailto:farzanaebrhimi2001@gmail.com'
            },
             {
                id: 2,
                icon: FaPhone,
                title: 'Phone',
                value: '+93788457659',
                link: 'tel:+93788457659'
            },
             {
                id: 3,
                icon: FaLinkedin,
                title: 'LinkedIn',
                value: 'linkedin.com/in/farzana-e-134367215',
                link: 'https://www.linkedin.com/in/farzana-e-134367215/'
            },
             {
                id: 4,
                icon: FaMapMarkerAlt,
                title: 'Location',
                value: 'Herat, Afghanistan',
                link: null
            },
        ];
    return (
     
    <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-20 bg-gray-900"
        >
        <div className='container mx-auto px-4 max-w-7xl'>
            <div className='text-center mb-12'>
                <h2
                    id="contact-heading"
                    className='text-3xl md:text-5xl font-extrabold text-white mb-2'
                >
                    Contact Me
                </h2>
                <div className='w-28 h-1 bg-primary mx-auto mt-2
                rounded-2xl'></div>
            </div>
            <div className='grid md:grid-cols-2 gap-8'>
                <div>
                    <p className='text-gray-700 mb-8 leading-relaxed'>
                    Thank you for visiting my portfolio. I am a Computer Science graduate with experience in web development, teaching, customer service, and technology projects.

                    <br /><br />

                    I am open to internships, collaborations, freelance opportunities, and frontend development projects where I can contribute, learn, and grow as a developer. My goal is to contribute to meaningful projects while continuing to grow as a frontend developer.
                    </p>    
                    <div className="mt-6">
                        <h3 className="text-white font-semibold mb-2">
                            Available For
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">
                            Internships
                            </span>

                            <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">
                            Freelance Projects
                            </span>

                            <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">
                            Frontend Development
                            </span>

                            <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">
                            Collaborations
                            </span>
                        </div>
                    </div>    
                    <div className='space-y-6'>
                        {contactInfo.map((info) => {
                            const Icon = info.icon;
                            return(
                                <div key={info.id}
                                className='flex items-center gap-4 group' >
                                    <div className='w-10 h-10 rounded-full
                                    bg-primary/10 flex items-center justify-center
                                    group-hover:bg-primary/20 transition-colors '>
                                        <Icon size={18} className='text-primary' />
                                    </div>
                                    <div>
                                        <h4 className='text-white font-medium text-sm'>
                                            {info.title}
                                        </h4>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                aria-label={`${info.title}: ${info.value}`}
                                                className=' text-sm text-gray-300 hover:text-cyan-400 transition-colors'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                >
                                                {info.value}
                                            </a>
                                        ) :  (
                                        <p className='text-gray-700 text-sm'>
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* Contact Form */}
                <div className='bg-gray-800 rounded-lg p-6'>
                    {savedDraft && (
                        <div className='mb-4 bg-yellow-500/10 border border-yellow-500 text-yellow-300 p-3 rounded-lg'>
                            You have unsent message data saved!
                        </div>
                    )}
                    <form onSubmit={handleSubmit}
                        aria-label="Contact Form">
                        <div className='mb-4'>
                            <label
                                htmlFor="name"
                                className='text-white block mb-2 text-sm font-medium'
                            >
                                Name
                            </label>

                            <input
                                type='text'
                                name='name'
                                id='name'
                                required
                                value={formData.name}
                                onChange={handleChange}
                                minLength={3}
                                className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400'
                            />

                            {errors.name && (
                                <p
                                role="alert"
                                className='text-red-400 text-sm mt-1'
                                >
                                {errors.name}
                                </p>
                            )}
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="email" 
                            className='text-white block mb-2 text-sm
                            font-medium'>
                                Email
                            </label>
                            <input 
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                type='email' id='email'
                                className='w-full px-4 py-2 bg-gray-700
                                border border-gray-600 rounded-lg
                                text-white text-sm focus:outline-none 
                                focus:ring-2 focus:ring-cyan-400 transition-colors '
                                placeholder='your@email.com'
                                required 
                            />
                            {errors.email && (
                                <p role="alert"
                                className='text-red-400 text-sm mt-1'>
                                    {errors.email}
                                </p>
                                )}

                                {emailHint && (
                                    <p
                                        aria-live="polite"
                                        className='text-cyan-400 text-xs mt-1'
                                    >
                                        {emailHint}
                                    </p>
                                )}

                        </div>
                        <div className='mb-6'>
                            <label htmlFor="message" 
                            className='text-white block mb-2 text-sm
                            font-medium'>
                                Message
                            </label>
                            <textarea 
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                minLength={10}
                                id='message'
                                className='w-full px-4 py-2 bg-gray-700
                                border border-gray-600 rounded-lg
                                text-white text-sm focus:outline-none 
                                focus:ring-2 focus:ring-cyan-400 transition-colors '
                                placeholder='Your Message ....'
                                rows="4"
                                required 
                            />
                            {errors.message && (
                                <p role="alert"
                                className='text-red-400 text-sm mt-1'>
                                    {errors.message}
                                </p>
                            )}
                        </div>
                        <button
                            type='submit'
                            aria-label="Send Contact Message"
                            className='
                            w-full
                            px-6
                            py-2.5
                            bg-cyan-600 hover:bg-cyan-700
                            text-white
                            rounded-lg
                            font-medium
                            hover:bg-primary/80
                            focus:outline-none
                            focus:ring-2
                            focus:ring-cyan-400
                            '
                        >
                            Send Message
                        </button>
                    </form>
                    <div className='mt-8 border-t border-gray-700 pt-6'>
                        <h3 className='text-white font-semibold mb-4'>
                            📨 Live Message Preview
                        </h3>
                        <div className="mb-6 text-sm text-cyan-300">
                            Response time: Usually within 24–48 hours.
                        </div>

                       <div
                            aria-label="Message Preview"
                            aria-live="polite"
                            className='bg-[#1f2937] rounded-lg p-4 border border-primary/20'
                         >
                            <p className='text-white'>
                            <strong>Name:</strong> {formData.name || '...'}
                            </p>

                            <p className='text-white mt-2'>
                            <strong>Email:</strong> {formData.email || '...'}
                            </p>

                            <p className='text-white mt-2'>
                            <strong>Message:</strong>
                            </p>

                            <p className='text-gray-300 mt-1 break-all'>
                            {formData.message || 'Your message preview will appear here'}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            {toast && (
                <div
                 role="alert"
                 aria-live="assertive"
                 className='fixed bottom-6 right-6 bg-green-600 text-white px-6 py-4 rounded-xl shadow-xl flex items-center gap-2 z-50'>
                    <FaCheckCircle />
                    Message sent successfully!
                </div>
            )}
        </div>

     </section>
  )
}

export default ContactSection;
