import React, { useState, useEffect } from 'react'


const FeedbackWall = () => {
  const [sortBy, setSortBy] = useState('highest')
  const [name, setName] = useState('')
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')

  const [feedbacks, setFeedbacks] = useState(() => {
  const saved = localStorage.getItem('portfolio-feedbacks')

  return saved
    ? JSON.parse(saved)
    : [
        {
          id: 1,
          name: 'Sarah',
          rating: 5,
          comment: 'Amazing portfolio!'
        },
        {
          id: 2,
          name: 'John',
          rating: 4,
          comment: 'Very clean design.'
        }
      ]
  })
  useEffect(() => {
  localStorage.setItem(
    'portfolio-feedbacks',
    JSON.stringify(feedbacks)
  )
  }, [feedbacks])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !comment) return

    const newFeedback = {
      id: Date.now(),
      name,
      rating: Number(rating),
      comment
    }

    setFeedbacks([newFeedback, ...feedbacks])

    setName('')
    setRating(5)
    setComment('')
  }
  const sortedFeedbacks = [...feedbacks].sort((a, b) => {
  if (sortBy === 'highest') return b.rating - a.rating
  if (sortBy === 'lowest') return a.rating - b.rating
  return b.id - a.id
  })

  return (
    <section className='py-20 bg-gray-800'
    id='feedback'>
      <div className='max-w-6xl mx-auto px-4'>

        <div className='text-center mb-10'>
          <h2 className='text-4xl font-bold text-white'>
            Visitor Feedback Wall
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className='bg-gray-900 p-6 rounded-xl mb-10'
        >
          <div className='flex justify-end mb-4'>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className='bg-gray-700 text-white p-2 rounded'
            >
              <option value="latest">Latest</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </select>
          </div>
          <div className='grid md:grid-cols-2 gap-4'>

            <input
              type='text'
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='p-3 rounded bg-gray-700 text-white'
            />

            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className='p-3 rounded bg-gray-700 text-white'
            >
              <option value="1">⭐ 1</option>
              <option value="2">⭐⭐ 2</option>
              <option value="3">⭐⭐⭐ 3</option>
              <option value="4">⭐⭐⭐⭐ 4</option>
              <option value="5">⭐⭐⭐⭐⭐ 5</option>
            </select>

          </div>

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder='Leave your feedback...'
            rows='4'
            className='w-full mt-4 p-3 rounded bg-gray-700 text-white'
          />

          <button
            type='submit'
            className='mt-4 bg-primary px-6 py-3 rounded-lg text-white'
          >
            Submit Feedback
          </button>
        </form>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>

          {sortedFeedbacks.map((feedback) => (
            <div
              key={feedback.id}
              data-aos="fade-up"
              className='bg-gray-900 p-5 rounded-xl border border-gray-700
              hover:scale-105 transition-all duration-500'
            >

              {feedback.rating === 5 && (
                <span className='bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-bold'>
                  🌟 Featured
                </span>
              )}

              <h3 className='text-white font-bold mt-3'>
                {feedback.name}
              </h3>

              <p className='text-yellow-400 mt-2'>
                {'⭐'.repeat(feedback.rating)}
              </p>

              <p className='text-gray-300 mt-3'>
                {feedback.comment}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default FeedbackWall