"use client";
import React, { useState } from 'react';
import { PropsForDonateStep } from '@/types/types'

import SubmitDonationBtn from '../../btns/SubmitDonationBtn';

interface PropsForInfoStep {
    setDonationStep: any
    paymentType: string
    setPaymentType: any
    donationAmount: number
    setDonationAmount: any
}

function InfoStep({ 
    setDonationStep, 
    paymentType, 
    setPaymentType, 
    setDonationAmount, 
    donationAmount
}: PropsForInfoStep) {

    

    const selectedStyling = "bg-[#630A0E] text-white rounded-[20px] flex justify-center items-center w-[50%]";
    const unselectedStyling = " text-[#630A0E] flex justify-center items-center w-[50%]";
    const amountBtnStyling = 'flex items-center justify-center w-[88px] h-[59px] bg-[#FFDAD6] rounded-[20px] m-[2.5px]';

    const handleSubmit = () => {
        setDonationStep(1)
    }

    return (
        <div className="flex flex-col justify-between h-[100%] w-[368px]">
            <div>
                <div className="flex flex-row bg-[#FFDAD6] rounded-[20px] w-[368px] h-[50px] mt-[40px] mb-[40px]">
                    <button
                        onClick={() => setPaymentType('one-time')}
                        className={paymentType === 'one-time' ? selectedStyling : unselectedStyling}
                        aria-label='select one time donation option button'
                        >
                        <h1 className='text-[20px]'>One Time</h1>
                    </button>
                    <button
                        onClick={() => setPaymentType('monthly')}
                        className={paymentType === 'monthly' ? selectedStyling : unselectedStyling}
                        aria-label='select monthly donation option button'
                    >
                        <h1 className='text-[20px]'>Monthly</h1>
                    </button>
                </div>

                <div className='flex flex-col items-center'>
                    <p className='text-[#323232] text-[16px] mb-[5px]'>
                        Choose your
                        <span className='font-bold'> {paymentType} </span>
                        donation amount
                    </p>
                    <div className='flex'>
                        <div
                            onClick={() => setDonationAmount(25)}
                            className={amountBtnStyling}
                            aria-label='choose 25 dollar donation amount'
                            >
                            <p className='font-bold text-[#630A0E] text-[20px]'>$25</p>
                        </div>
                        <div
                            onClick={() => setDonationAmount(50)}
                            className={amountBtnStyling}
                            aria-label='choose 50 dollar donation amount'
                            >
                            <p className='font-bold text-[#630A0E] text-[20px]'>$50</p>
                        </div>
                        <div
                            onClick={() => setDonationAmount(100)}
                            className={amountBtnStyling}
                            aria-label='choose 100 dollar donation amount'
                            >
                            <p className='font-bold text-[#630A0E] text-[20px]'>$100</p>
                        </div>
                        <div
                            onClick={() => setDonationAmount(200)}
                            className={amountBtnStyling}
                            aria-label='choose 200 dollar donation amount'
                        >
                            <p className='font-bold text-[#630A0E] text-[20px]'>$200</p>
                        </div>
                    </div>
                </div>

                <div className='w-[365px]'>
                    <p className='text-[#323232] text-[14px]'>Custom Donation Amount</p>

                    <div className='flex items-center text-black text-[20px] p-[5px] w-[100%] h-[50px] border border-[#8692A6] rounded-[6px]'>
                        <p className='text-black text-[20px] mr-[5px]'>$</p>
                        <input
                            aria-label='custom donation amount input'
                            className='text-black text-[20px] w-[100%] h-[50px] bg-transparent focus:outline-none'
                            type='number'
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(Number(e.target.value))}
                        />
                    </div>
                </div>
            </div>

            <SubmitDonationBtn handleSubmit={handleSubmit} title="Continue" />
        </div>
    )
}

export default InfoStep