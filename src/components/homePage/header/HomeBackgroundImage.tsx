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
            />
            <div className="h-[0px] relative bottom-[475px] ml-[70px]">
                <div className="w-[636px]">
                    <h1 className="text-white text-[48px] font-bold">
                        Empowering Women, Elevating Careers
                    </h1>
                </div>
                <div className="w-[521px] mt-[30px]">
                    <h1 className="text-white text-[20px]">
                        The Bottomless Closet experience is all about making women
                        feel confident, prepared, and empowered to ace their job interviews,
                        start that new job, and begin their journey to self-sufficiency.
                    </h1>
                </div>
                <div className="mt-[45px]">
                    <GetInvolvedBtn />
                </div>
            </div>
        </div>
    )
}

export default HomeBackgroundImage;
