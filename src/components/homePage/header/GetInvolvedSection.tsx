import React from 'react';

import GetInvolvedBtn from '../btns/GetInvolvedBtn';
import LadyGetInvolved from './LadyGetInvolved';

function GetInvolvedSection() {
    return (
        <div className="flex flex-row h-[368px] ml-[5%] mt-[24px] lg:ml-[10%] lg:mt-[58px]">
            {/* <div className="h-[368px] ml-[5%] mt-[24px] lg:ml-[10%] lg:mt-[58px]"> */}
            <div className="w-[40%]">
                <div>
                    <div>
                        <p className='text-[20px] lg:text-[24px] text-black'>
                            “I feel stuck sometimes, but coming to Bottomless Closet reminds
                            me of how far I’ve come and the next step I can take. Coming here
                            makes me feel motivated and hopeful.”
                        </p>
                    </div>
                    <div className='flex justify-end'>
                        <p className='text-black mr-[7%] text-[20px] lg:text-[24px]'>
                            -
                            {/* TODO: Change text color to hex code when you have one */}
                            <span className='text-[#B0121A]'> Diana</span>
                        </p>
                    </div>
                </div>

                <GetInvolvedBtn />


            </div>

            <LadyGetInvolved />

        </div>
    )
}

export default GetInvolvedSection