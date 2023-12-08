import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative">
      <Image
        src="/mission/mission-hero.png"
        alt="mission-hero"
        width={1536}
        height={1025}
        className="object-cover w-full h-full"
      />
      <div className="bg-core-red flex flex-col justify-center items-center p-4">
        <h1 className="text-white text-xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-mont">
          Embodying the philosophy of women helping women
        </h1>
      </div>
    </div>
  );
}

export default Hero;
