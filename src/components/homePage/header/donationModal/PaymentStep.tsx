"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { PropsForDonateStep } from '@/types/types'

import SubmitDonationBtn from '../../btns/SubmitDonationBtn';

interface PropsForCustomStep{
    setDonationStep: (step: number) => void;
    donationAmount: number
    paymentType: string
}

function PaymentStep({ setDonationStep, donationAmount, paymentType }: PropsForCustomStep) {

    const handleSubmit = () => {
        console.log('Submitted ')
        setDonationStep(4)
    }
    return (
        <div className="flex flex-col  justify-between h-[100%] w-[368px]">
            <div className="flex flex-col items-center mt-[20px]">
                <p className='text-[#323232] text-[18px]'>
                    You are making a
                    <span className='font-bold'> {paymentType} </span>
                    donation of
                </p>
                <h1 
                    className='font-bold text-black text-[48px] [text-shadow:_0_4px_5px_rgb(0_0_0_/_40%)]'
                    aria-label='donation amount'
                >
                    ${donationAmount}
                </h1>
                <div className='flex justify-between items-center w-[85%] h-[20px]'>
                    <Image
                        src="./lock.svg"
                        width={15}
                        height={5}
                        alt="image of a lock"
                        aria-label='image of a lock'
                    />
                    <p className='text-[#323232] text-[14px]'>This is a secure SSL encrypted payment</p>
                </div>
            </div>


            <div>
                <h1 className='text-[#323232] text-[18px] text-center mt-[10px]'>
                    Choose your payment method
                </h1>

                <div
                    className="flex justify-center items-center bg-[#085047] w-[364px] h-[60px] rounded-[16px] mt-[10px]"
                    onClick={handleSubmit}
                    aria-label='Pay with credit card button'
                    >
                    <h1 className="text-[24px] font-bold text-white">
                        Credit Card
                    </h1>
                </div>
                <div
                    className="flex justify-center items-center bg-[#085047] w-[364px] h-[60px] rounded-[16px] mt-[10px]"
                    onClick={handleSubmit}
                    aria-label='Pay with Paypal button'
                >
                    <h1 className="text-[24px] font-bold text-white">
                        PayPal
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default PaymentStep