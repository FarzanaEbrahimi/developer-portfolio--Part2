import React, { useEffect, useState } from 'react'


const updatesList = [
  '🚀 Developer Portfolio now supports Dark, Light and Ocean themes',
  '📚 Book Reading Log tracking system improved',
  '🧾 Invoice Manager CRUD functionality enhanced',
  '🏫 School Portal form validation optimized',
  '🎬 Movie Theater page responsiveness improved',
  '💻 Personal Website UI updated',
  '⚛️ React portfolio performance optimized'
]

const ProjectUpdates = () => {

  const [update, setUpdate] = useState(updatesList[0])
  const [history, setHistory] = useState([updatesList[0]])

  useEffect(() => {
    const interval = setInterval(() => {

      let randomUpdate;

      do {
        randomUpdate =
          updatesList[
            Math.floor(Math.random() * updatesList.length)
          ];
      } while (randomUpdate === update);

      setUpdate(randomUpdate);

      setHistory(prev => [
        randomUpdate,
        ...prev.filter(item => item !== randomUpdate)
      ].slice(0, 5));

    }, 15000);

    return () => clearInterval(interval);

  }, [update]);

  return (
    <section className='py-16 bg-gray-900'
     aria-labelledby='updates-heading'
    >
      <div className='max-w-5xl mx-auto px-4'>

        <h2 
        id='updates-heading'
        className='text-center text-4xl font-bold text-white mb-8'>
          Live Project Updates
        </h2>

        <div
          className='bg-gray-800 border border-primary
          rounded-xl p-6 text-center'
        >
          <p className='text-primary text-lg font-medium animate-pulse shadow-2xl'>
            {update}
          </p>

          <p className='text-gray-100 mt-3 text-sm'>
            Updates refresh every 15 seconds
          </p>
        </div>
        <div className='mt-6 space-y-2'>
          {history.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className='bg-gray-800 p-3 rounded-lg text-gray-300 animate-pulse'
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProjectUpdates