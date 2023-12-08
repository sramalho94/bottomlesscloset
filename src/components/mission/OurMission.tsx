import React from "react";
import Image from "next/image";

export default function OurMission() {
  return (
      <div className="grid md:grid-cols-2 pt-8 md:pt-16 px-12 md:px-16 xl:px-20  ">
        <div>
          <h1 className="md:text-2xl text-base font-mont font-bold text-core-red text-start mb-2 md:mb-4">
            Our Mission
          </h1>
          <p className=" font-osans md:text-xl text-sm font-medium break-words text-black">
            Bottomless Closet empowers disadvantaged New York City women for
            workforce entry, impacting over 46,000 lives with dedicated
            volunteers and partners.
          </p>
          <button className="bg-pink-2 text-dark-red font-osans font-semibold text-xs md:text-base  px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl my-4 ">
            GET INVOLVED
          </button>
        </div>
        <div className="md:ml-8 xl:ml-32">
          <Image
            src="/mission/ourmission.png"
            width={575}
            height={384}
            alt=""
            className="object-cover rounded-md w-80 h-36 md:h-[250px] md:w-[405px] xl:w-[575px] xl:h-[284px]"
          />
        </div>
      </div>
  );
}
