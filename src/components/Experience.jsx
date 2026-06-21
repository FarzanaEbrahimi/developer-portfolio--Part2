import { Briefcase, Building,Calendar, Cpu,
     Layers, Layout, Terminal } from 'lucide-react'
import React from 'react'

const Experience = () => {
    const Skills = [
  {
    id: 1,
    name: 'HTML & CSS',
    width: '90%',
    icon: Layout,
    fact: 'Built 10+ responsive web pages'
  },

  {
    id: 2,
    name: 'JavaScript',
    width: '80%',
    icon: Terminal,
    fact: 'Created dynamic CRUD applications'

  },

  {
    id: 3,
    name: 'React JS',
    width: '75%',
    icon: Cpu,
    fact: 'Built interactive portfolio projects'
  },

  {
    id: 4,
    name: 'Tailwind CSS',
    width: '85%',
    icon: Layers,
    fact: 'Love designing modern UI components'
  }
]
    const Experiences = [
        {
        id:1,
        role:'Brand Shop Representative',
        company:'Afghan Wireless',
        date:'2024 - Present'
        },
        {
        id:2,
        role:'English Teacher',
        company:'Hamkar Learning Center',
        date:'2022 - 2023'
        },  
        {
        id:3,
        role:'ICDL Instructor',
        company:'Hamkar Learning Center',
        date:'2022 - 2023'
        },

    ];
  return (
    <section
      id='skills'
      aria-labelledby='skills-heading'
      className='text-white py-20 relative overflow-hidden'
    >
        <div className='max-w-7xl mx-auto px-6 lg:px-16 relative z-10 '>
            <div className='grid md:grid-cols-2 gap-16 items-start'>
                <div data-aos='fade-right'>
                    <h2
                      id='skills-heading'
                      className='text-4xl md:text-5xl font-extrabold mb-12'
                    >
                        Technical <span className='text-primary'>
                            Skills</span>
                    </h2>
                    <div className='space-y-8'>
                         {Skills.map((skill) => {

  const SkillIcon = skill.icon;

  return (

    <div key={skill.id} className='group'>

      <div className='flex items-center justify-between mb-2'>

        <div className='flex items-center gap-3'>

          <div
            className='p-2 bg-[#111a3e] rounded-lg
            group-hover:bg-primary transition-colors duration-300'
          >

            <SkillIcon
              size={20}
              className='text-primary group-hover:text-white'
            />

          </div>

          <span className='font-medium tracking-wide'>
            {skill.name}
          </span>

        </div>

        <span className='text-primary font-bold'>
          {skill.width}
        </span>

      </div>

      <div
        className='h-2 w-full bg-[#131d30]
        rounded-full p-0.5'
      >

        <div
          role="progressbar"
          aria-label={skill.name}
          aria-valuenow={parseInt(skill.width)}
          aria-valuemin="0"
          aria-valuemax="100"
          className='h-full rounded-full bg-linear-to-r
          from-primary to-cyan-400'
          style={{ width: skill.width }}
        >
        </div>
      </div>

      <p
        className='text-xs text-gray-500 mt-2
        opacity-0 group-hover:opacity-100
        transition-all duration-300'
      >
        💡 {skill.fact}
      </p>


    </div>

  );
})}
                    </div>

                </div>
                <div data-aos='fade-left'>
                    <h2 className='text-3xl md:text-5xl font-extrabold
                    mb-12'>
                        Work <span className='text-primary'>Experience</span>
                    </h2>
                    <div className='space-y-6'>
                        {Experiences.map((exp) => (
                            <div key={exp.id}
                              className='group relative p-6 rounded-2xl
                              bg-[#1f1641]
                              hover:border-primary/50
                              hover:-translate-y-1
                              hover:shadow-xl
                              transition-all duration-300'>
                                <div className='flex gap-4'>
                                    <div className='shrink-0 mt-1'>
                <div className='p-3 bg-[#050816] rounded-xl border
                border-gray-800 group-hover:border-primary
                transition-colors'>
                    <Briefcase className='text-primary' size={24}/>

                </div>
                                    </div>
                <div className='grow'>
                    <h3 className='text-xl font-bold text-white
                    group-hover:text-primary transition-colors'>
                        {exp.role}
                    </h3>
                    <div className='flex flex-col sm:flex-row
                    sm:items-center gap-2 sm:gap-4 mt-2 text-sm
                    text-gray-700'>
                        <span className='flex items-center gap-1.5'>
                            <Building size={14} className='text-primary'/>
                            {exp.company}
                        </span>
                        <span className='flex items-center gap-1.5'>
                            <Calendar size={14} className="text-primary" />
                            {exp.date}

                        </span>
                    </div>

                </div>

                                </div>

                            </div>

                        ))}

                    </div>
                </div>

            </div>
        </div>

    </section>
  )
}

export default Experience