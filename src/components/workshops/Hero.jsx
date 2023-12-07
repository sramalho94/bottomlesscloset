import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <>
      <div className="relative">
        <Image
          src="/workshops/hero.jpg"
          alt="Women meeting around tables to discuss employment"
          width={1458}
          height={635}
          className="object-cover w-full h-full m-0 p-0"
        />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center ">
          <h1 className="text-white text-2xl sm:text-1xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-2 p-0 m-0 sm:mb-0 md:mb-1 lg:mb-2 xl:mb-2 text-center">
            Empowering New York
          </h1>
          <h1 className="text-white text-2xl sm:text-1xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-2 p-0 m-0 sm:mt-0 md:mt-1 lg:mt-2 xl:mt-2 text-center">
            Women in Need
          </h1>
        </div>
      </div>
      <div className="bg-core-red flex flex-col justify-center items-left p-4">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium">
          Upcoming Workshops
        </h1>
      </div>
    </>
  )
}

export default Hero
