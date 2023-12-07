"use client";
import React, { useState } from 'react';
import { PropsForDonateStep } from '@/types/types'

import SubmitDonationBtn from '../../btns/SubmitDonationBtn';

function PaymentStep({ setDonationStep }: PropsForDonateStep) {

    // TODO: get paymentType value from context
    const [paymentType, setPaymentType] = useState('one-time')

    const handleSubmit = () => {
        console.log('Submitted ')
        setDonationStep(4)
    }
    return (
        <div className="flex flex-col justify-between h-[100%] w-[368px]">
            <div>
                <p className='text-[#323232] text-[18px]'>
                    You are making a
                    <span className='font-bold'> {paymentType} </span>
                    donation of
                </p>
                <h1 className='font-bold text-black text-[48px]'>$50</h1>
            </div>
            <SubmitDonationBtn handleSubmit={handleSubmit} />
        </div>
    )
}

export default PaymentStep