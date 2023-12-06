"use client";
import React, { useState } from 'react';
import Image from 'next/image';

import SubmitDonationBtn from '../btns/SubmitDonationBtn';

const DonateModal = () => {

    const [paymentType, setPaymentType] = useState('one-time');
    const [donationAmount, setDonationAmount] = useState(0);

    const selectedStyling = "bg-[#630A0E] rounded-[20px] flex justify-center items-center w-[50%]";
    const unselectedStyling = " text-[#630A0E] flex justify-center items-center w-[50%]";
    const amountBtnStyling = 'flex items-center justify-center w-[88px] h-[59px] bg-[#FFDAD6] rounded-[20px] m-[2.5px]';

    const handleSubmit = () => {
        console.log('Submitted ' + donationAmount)
    }

    return (
        <div className="w-screen h-[475px] md:w-[470px] md:h-[575px] lg:mr-[10px] lg:absolute lg:bottom-[0] lg:right-[0px] lg:z-[2] lg:pt-[287px] xl:mr-[100px]">
            <div className="flex flex-col items-center p-[20px] bg-white w-screen h-[475px] md:w-[470px] md:h-[575px] rounded-[40px] shadow-[rgba(50,50,93,0.5)_0px_18px_16px_-9px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                <Image
                    src="./modal-logo.svg"
                    width={300}
                    height={20}
                    alt="Bottomless Logo"
                />

                <div className="flex flex-row bg-[#FFDAD6] rounded-[20px] w-[368px] h-[50px] mt-[40px] mb-[40px]">
                    <button
                        onClick={() => setPaymentType('one-time')}
                        className={paymentType === 'one-time' ? selectedStyling : unselectedStyling}
                    >
                        <h1 className='text-[20px]'>One Time</h1>
                    </button>
                    <button
                        onClick={() => setPaymentType('monthly')}
                        className={paymentType === 'monthly' ? selectedStyling : unselectedStyling}
                    >
                        <h1 className='text-[20px]'>Monthly</h1>
                    </button>
                </div>

                <div className='flex flex-col items-center'>
                    <p className='text-[#323232] text-[18px]'>
                        Choose your
                        <span className='font-bold'> {paymentType} </span>
                        donation amount
                    </p>
                    <div className='flex'>
                        <div
                            onClick={() => setDonationAmount(25)}
                            className={amountBtnStyling}
                        >
                            <p className='font-bold text-[#630A0E] text-[20px]'>$25</p>
                        </div>
                        <div
                            onClick={() => setDonationAmount(50)}
                            className={amountBtnStyling}
                        >
                            <p className='font-bold text-[#630A0E] text-[20px]'>$50</p>
                        </div>
                        <div
                            onClick={() => setDonationAmount(100)}
                            className={amountBtnStyling}
                        >
                            <p className='font-bold text-[#630A0E] text-[20px]'>$100</p>
                        </div>
                        <div
                            onClick={() => setDonationAmount(200)}
                            className={amountBtnStyling}
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
                            className='text-black text-[20px] w-[100%] h-[50px] bg-transparent focus:outline-none'
                            type='number'
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(Number(e.target.value))}
                        />
                    </div>
                </div>

                <SubmitDonationBtn handleSubmit={handleSubmit} />
                {/* <SubmitDonationBtn handleSubmit={handleSubmit} /> */}

            </div>
        </div>
    )
}

export default DonateModal;