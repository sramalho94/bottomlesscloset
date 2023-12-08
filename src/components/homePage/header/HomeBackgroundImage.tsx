import React from 'react';
import Image from 'next/image';

import GetInvolvedBtn from '../btns/GetInvolvedBtn';

function HomeBackgroundImage() {
    return (
        <div className="w-screen bg-transparent">

            <Image
                src="./home-background-image.svg"
                className="w-screen"
                // shadow-[rgba(50,50,93,0.5)_0px_18px_16px_-9px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
                width={0}
                height={0}
                alt="Home Background Image"
                aria-label='Picture of women hanging clothing'
            />
            <div className="w-screen h-[0px] relative bottom-[185px] sm:bottom-[270px] md:bottom-[360px] lg:bottom-[475px] pl-[10px] sm:pl-[70px]">
                <div className="max-w-[636px]">
                    <h1 className="text-white text-[18px] md:text-[38px] lg:text-[48px] font-bold">
                        Empowering Women, Elevating Careers
                    </h1>
                </div>
                <div className="max-w-[521px] mt-[10px] md:mt-[20px] lg:mt-[30px]">
                    <h1 className="text-white text-[14px] sm:text-[20px]">
                        The Bottomless Closet experience is all about making women
                        feel confident, prepared, and empowered to ace their job interviews,
                        start that new job, and begin their journey to self-sufficiency.
                    </h1>
                </div>
                <div className="mt-[10px] md:mt-[25px] lg:mt-[45px]">
                    <GetInvolvedBtn />
                </div>
            </div>
        </div>
    )
}

export default HomeBackgroundImage;
