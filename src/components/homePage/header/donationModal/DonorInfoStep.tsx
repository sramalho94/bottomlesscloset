"use client";
import React, { useState } from 'react';
import { PropsForDonateStep } from '@/types/types'

import SubmitDonationBtn from '../../btns/SubmitDonationBtn';

function DonorInfoStep({ setDonationStep }: PropsForDonateStep) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleSubmit = () => {
        console.log('Submitted ')
        setDonationStep(3)
    }

    return (
        <div className="flex flex-col justify-between h-[100%] w-[368px]">
            <div>
                <div className="flex justify-between mt-[20px]">
                    <div className="w-[45%]">
                        <p className="text-[#404040] mb-[5px]">First Name:</p>
                        <div className='flex items-center p-[5px] w-[100%] h-[40px] border border-[#8692A6] rounded-[6px]'>
                            <input
                                className='text-[#404040] text-[16px] w-[100%] bg-transparent focus:outline-none'
                                type='text'
                                value={firstName}
                                placeholder='John'
                                onChange={(e) => setFirstName(e.target.value)}
                                aria-label='First name text input field'
                            />
                        </div>
                    </div>
                    <div className="w-[45%]">
                        <p className="text-[#404040] mb-[5px]">Last Name:</p>
                        <div className='flex items-center p-[5px] w-[100%] h-[40px] border border-[#8692A6] rounded-[6px]'>
                            <input
                                className='text-[#404040] text-[16px] w-[100%] bg-transparent focus:outline-none'
                                type='text'
                                value={lastName}
                                placeholder='Doe'
                                onChange={(e) => setLastName(e.target.value)}
                                aria-label='Last name text input field'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-[20px]'>
                    <p className="text-[#404040] mb-[5px]">Email:</p>
                    <div className='flex items-center p-[5px] w-[100%] h-[40px] border border-[#8692A6] rounded-[6px]'>
                        <input
                            className='text-[#404040] text-[16px] w-[100%] bg-transparent focus:outline-none'
                            type='text'
                            value={email}
                            placeholder='myemail@gmail.com'
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label='email text input field'
                        />
                    </div>
                </div>
                <div className='mt-[20px]'>
                    <p className="text-[#404040] mb-[5px]">Phone Number:</p>
                    <div className='flex items-center p-[5px] w-[100%] h-[40px] border border-[#8692A6] rounded-[6px]'>
                        <input
                            className='text-[#404040] text-[16px] w-[100%] bg-transparent focus:outline-none'
                            type='text'
                            value={phoneNumber}
                            placeholder='845-935-2947'
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            aria-label='Phone number name text input field'
                        />
                    </div>
                </div>

            </div>

            <SubmitDonationBtn handleSubmit={handleSubmit} title="Continue" />
        </div>
    )
}

export default DonorInfoStep