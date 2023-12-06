"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const DonateModal = () => {

    const [paymentType, setPaymentType] = useState(1)

    const selectedStyling = "bg-[#630A0E] rounded-[20px] flex justify-center items-center w-[50%]"
    const unselectedStyling = " text-[#630A0E] flex justify-center items-center w-[50%]"

    return (
        <div className="w-screen h-[475px] md:w-[470px] md:h-[575px] lg:absolute lg:bottom-[0] lg:right-[0px] lg:z-[2] lg:mr-[100px] lg:pt-[287px]">
            <div className="flex flex-col items-center p-[20px] bg-white w-screen h-[475px] md:w-[470px] md:h-[575px] rounded-[40px] shadow-[rgba(50,50,93,0.5)_0px_18px_16px_-9px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                <Image
                    src="./modal-logo.svg"
                    width={300}
                    height={20}
                    alt="Bottomless Logo"
                />

                <div className="flex flex-row bg-[#FFDAD6] rounded-[20px] w-[368px] h-[50px] mt-[40px] mb-[40px]">
                    <button
                        onClick={() => setPaymentType(1)}
                        className={paymentType === 1 ? selectedStyling : unselectedStyling}
                    >
                        <h1 className='text-[20px]'>One Time</h1>
                    </button>
                    <button
                        onClick={() => setPaymentType(2)}
                        className={paymentType === 2 ? selectedStyling : unselectedStyling}
                    >
                        <h1 className='text-[20px]'>Monthly</h1>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default DonateModal;