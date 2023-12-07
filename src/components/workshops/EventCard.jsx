import React from 'react'
import Image from 'next/image'

function EventCard({ workshop }) {
  const { title, location, datetime, description, imageSrc } = workshop

  return (
    <div className="flex flex-col md:flex-row bg-white border-b border-gray-500">
      <div className="order-2 md:order-1 md:flex md:flex-col w-full md:w-1/4 m-5">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          className="rounded-sm bg-white"
        />
        <button className="py-2 px-4 text-s bg-dark-red text-white font-semibold rounded-xl shadow-md hover:bg-red-brick focus:outline-none">
          Register Now
        </button>
      </div>
      <div className="order-1 md:order-2 flex-1 bg-white rounded-lg p-6 mb-4 flex-col md:flex-row">
        <h1 className="text-2xl font-medium mb-2 text-black">{title}</h1>
        <div className="flex justify-start items-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Location:
          </h2>
          <p className="text-base text-black mb-4 mt-2 ml-2">{location}</p>
        </div>

        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Date/Time: {datetime.dayOfWeek}, {datetime.month} {datetime.day},{' '}
          {datetime.year} - {datetime.timeWindow}
        </h2>
        <p className="text-base text-black mb-4">{description}</p>
      </div>
    </div>
  )
}

export default EventCard
