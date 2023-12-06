"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { PropsForDonateStep } from '@/types/types'

import SubmitDonationBtn from '../../btns/SubmitDonationBtn';

function CustomizationStep({ setDonationStep }: PropsForDonateStep) {
    const handleSubmit = () => {
        console.log('Submitted ')
        setDonationStep(2)
    }
    return (
        <div className="flex flex-col justify-between h-[100%] w-[368px]">
            <div>
                <div className='flex justify-between items-start w-[364px] h-[43px] border-b-[1px] border-black mt-[20px]'>
                    <p className='text-black text-[20px]'>Decicate my donation to...</p>
                    <Image
                        className='m-[5px]'
                        src="./arrow-down.svg"
                        width={19}
                        height={20}
                        alt="Bottomless Logo"
                    />
                </div>
                <div className='flex justify-between items-start w-[364px] h-[43px] border-b-[1px] border-black mt-[20px]'>
                    <p className='text-black text-[20px]'>Leave a comment</p>
                    <Image
                        className='m-[5px]'
                        src="./arrow-down.svg"
                        width={19}
                        height={20}
                        alt="Bottomless Logo"
                    />
                </div>
                <div className='flex justify-between items-start w-[364px] h-[43px] border-b-[1px] border-black mt-[20px]'>
                    <p className='text-black text-[20px]'>Organization donation match</p>
                    <Image
                        className='m-[5px]'
                        src="./arrow-down.svg"
                        width={19}
                        height={20}
                        alt="Bottomless Logo"
                    />
                </div>
            </div>

            <SubmitDonationBtn handleSubmit={handleSubmit} />
        </div>
    )
}

export default CustomizationStep