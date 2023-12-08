"use client";
import React, { useState } from 'react';
import { PropsForDonateStep } from '@/types/types'

import SubmitDonationBtn from '../../btns/SubmitDonationBtn';

interface PropsForCreditCardStep{
    handleSubmit: (donationData: number) => void;
}

function CreditCardStep({ handleSubmit }: PropsForCreditCardStep) {

    const [cardNumber, setCardNumber] = useState('')
    const [expirationDate, setExpirationDate] = useState('')
    const [CVV, setCVV] = useState('')
    const [zipCode, setZipCode] = useState('')

    return (
        <div className="flex flex-col justify-between h-[100%] w-[368px]">

            <div className='mt-[20px]'>

                <div>
                    <p className="text-[#404040] mb-[5px]">Credit card number:</p>
                    <div className='flex items-center p-[5px] w-[100%] h-[40px] border border-[#8692A6] rounded-[6px]'>
                        <input
                            className='text-[#404040] text-[16px] w-[100%] bg-transparent focus:outline-none'
                            type='text'
                            value={cardNumber}
                            placeholder='1234 5678 9012 3456'
                            onChange={(e) => setCardNumber(e.target.value)}
                            aria-label='credit card number text input field'
                        />
                    </div>
                </div>

                <div className="flex justify-between mt-[20px]">
                    <div className="w-[45%]">
                        <p className="text-[#404040] mb-[5px]">Expiration date:</p>
                        <div className='flex items-center p-[5px] w-[100%] h-[40px] border border-[#8692A6] rounded-[6px]'>
                            <input
                                className='text-[#404040] text-[16px] w-[100%] bg-transparent focus:outline-none'
                                type='text'
                                value={expirationDate}
                                placeholder='01/29'
                                onChange={(e) => setExpirationDate(e.target.value)}
                                aria-label='card expiration date text input field'
                            />
                        </div>
                    </div>
                    <div className="w-[45%]">
                        <p className="text-[#404040] mb-[5px]">CVV:</p>
                        <div className='flex items-center p-[5px] w-[100%] h-[40px] border border-[#8692A6] rounded-[6px]'>
                            <input
                                className='text-[#404040] text-[16px] w-[100%] bg-transparent focus:outline-none'
                                type='text'
                                value={CVV}
                                placeholder='123'
                                onChange={(e) => setCVV(e.target.value)}
                                aria-label='CVV text input field'
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mt-[20px]">
                    <div className="w-[45%]">
                        <p className="text-[#404040] mb-[5px]">Zip code:</p>
                        <div className='flex items-center p-[5px] w-[100%] h-[40px] border border-[#8692A6] rounded-[6px]'>
                            <input
                                className='text-[#404040] text-[16px] w-[100%] bg-transparent focus:outline-none'
                                type='text'
                                value={zipCode}
                                placeholder='10990'
                                onChange={(e) => setZipCode(e.target.value)}
                                aria-label='Zip code text input field'
                            />
                        </div>
                    </div>
                </div>


            </div>

            <SubmitDonationBtn handleSubmit={handleSubmit} title="Donate" />

        </div>
    )
}

export default CreditCardStep;