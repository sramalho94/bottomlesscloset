import React from 'react'
import Image from 'next/image'

function EventCard({ workshop }) {
  const { title, location, datetime, description, imageSrc } = workshop

  return (
    <>
      <div>
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          className="rounded-lg"
        />
        <button className="py-2 px-4 bg-dark-red text-white font-semibold rounded-lg shadow-md hover:bg-red-brick focus:outline-none">
          Register Now
        </button>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-md mb-4">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Location: {location}
        </h2>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Date/Time: {datetime.dayOfWeek}, {datetime.month} {datetime.day},{' '}
          {datetime.year} - {datetime.timeWindow}
        </h2>
        <p className="text-base text-gray-600 mb-4">{description}</p>
      </div>
    </>
  )
}

export default EventCard
