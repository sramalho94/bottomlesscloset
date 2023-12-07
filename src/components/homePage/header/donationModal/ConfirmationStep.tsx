"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { PropsForDonateStep } from '@/types/types'

import SubmitDonationBtn from '../../btns/SubmitDonationBtn';

function ConfirmationStep() {
    
    return (
        <div className="flex flex-col justify-between items-center h-[100%] w-[368px]">
            <div className="flex flex-col items-center mt-[20px] w-[330px]">
                <Image
                    src="./big-check.svg"
                    width={100}
                    height={5}
                    alt="Big Checkmark"
                />
                <h1 className="font-bold text-black text-[24px] text-center mt-[20px]">
                    Thank you for your generous donation to Bottomless Closet!
                </h1>
                <h2 className="text-black text-[18px] text-center mt-[20px]">
                Your support empowers disadvantaged women in NYC for workforce entry, positively impacting over 46,000 lives.
                </h2>
            </div>

        </div>
    )
}

export default ConfirmationStep