import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { Fade } from 'react-awesome-reveal'

const EventCard = ({ event }) => {
  return (
    <>
    <Fade direction='left'>
      <div className="flex max-w-[85vw] flex-col items-center rounded-md my-5 shadow-lg md:flex-row bg-white">
        <div className="h-full w-full md:w-[55vw] flex-1">
          <img
            src={event.logo}
            alt="Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div className='flex-[2]'>
          <div className="p-4 flex flex-col gap-5">
            <h1 className="inline-flex items-center text-3xl font-semibold">
              {event.name}
            </h1>
            <h2 className='uppercase font-semibold text-gray-700'>{event.id}</h2>
            <p className="text-sm text-gray-600">
              {event.description}
            </p>
            <Link to={`/event/${event.id}`}>
              <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:w-52">Read more</button>
            </Link>
          </div>
        </div>
      </div>
      </Fade>
    </>
  )
}

export default EventCard