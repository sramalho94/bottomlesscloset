"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { PropsForDonateStep } from '@/types/types'

import SubmitDonationBtn from '../../btns/SubmitDonationBtn';

interface PropsForCustomStep{
    setDonationStep: (step: number) => void;
    honoreeName: string
    setHonoreeName: (name: string) => void;
    comment: string
    setComment: (comment: string) => void;
    organizationName: string
    setOrganizationName: (orgName: string) => void;
}

function CustomizationStep({ 
    setDonationStep,
    honoreeName,
    setHonoreeName,
    comment,
    setComment,
    organizationName,
    setOrganizationName
}: PropsForCustomStep) {

    const [expand, setExpand] = useState(0);

    const handleSubmit = () => {
        setDonationStep(2)
    }
    return (
        <div className="flex flex-col justify-between h-[100%] w-[368px]">
            <div>
                <div className={`flex justify-between items-start w-[364px] h-[43px] ${expand !== 1 && 'border-b-[1px]'} border-black mt-[20px]`}>
                    <p className='text-black text-[20px]'>Dedicate my donation to...</p>
                    <div onClick={() => setExpand(expand === 1 ? 0 : 1)}>
                        <Image
                            className={`m-[5px] ${expand !== 1 && 'rotate-90'}`}
                            src="./arrow-down.svg"
                            width={19}
                            height={20}
                            alt="Shore more arrow button"
                            aria-label='Shore more arrow button'
                        />
                    </div>
                </div>

                {
                    expand === 1 &&
                    <div>
                        <p className='text-[#323232] text-[14px] mb-[5px]'>Honoree Name</p>
                        <div className='flex items-center text-black text-[20px] p-[5px] w-[100%] h-[40px] border border-[#8692A6] rounded-[6px]'>
                            <input
                                className='text-[#323232] text-[16px] w-[100%] bg-transparent focus:outline-none'
                                type='text'
                                value={honoreeName}
                                placeholder='John Doe'
                                onChange={(e) => setHonoreeName(e.target.value)}
                                aria-label='Dedicate my donation to text input field'
                            />
                        </div>
                    </div>
                }


                <div className={`flex justify-between items-start w-[364px] h-[43px] ${expand !== 2 && 'border-b-[1px]'} border-black mt-[20px]`}>
                    <p className='text-black text-[20px]'>Leave a comment</p>
                    <div onClick={() => setExpand(expand === 2 ? 0 : 2)}>
                        <Image
                            className={`m-[5px] ${expand !== 2 && 'rotate-90'}`}
                            src="./arrow-down.svg"
                            width={19}
                            height={20}
                            alt="Shore more arrow button"
                            aria-label='Shore more arrow button'
                        />
                    </div>
                </div>

                {
                    expand === 2 &&
                    <div>
                        <p className='text-[#323232] text-[14px] mb-[5px]'>Type your comment here</p>
                        <div className='flex items-center text-black text-[20px] p-[5px] w-[100%] h-[40px] border border-[#8692A6] rounded-[6px]'>
                            <input
                                className='text-[#323232] text-[14px] w-[100%] bg-transparent focus:outline-none'
                                type='text'
                                value={comment}
                                placeholder='We love the bottomless closet and everything they do.'
                                onChange={(e) => setComment(e.target.value)}
                                aria-label='Leave a comment text input field'
                            />
                        </div>
                    </div>
                }

                <div className={`flex justify-between items-start w-[364px] h-[43px] ${expand !== 3 && 'border-b-[1px]'} border-black mt-[20px]`}>
                    <p className='text-black text-[20px]'>Organization donation match</p>
                    <div onClick={() => setExpand(expand === 3 ? 0 : 3)}>
                        <Image
                            className={`m-[5px] ${expand !== 3 && 'rotate-90'}`}
                            src="./arrow-down.svg"
                            width={19}
                            height={20}
                            alt="Shore more arrow button"
                            aria-label='Shore more arrow button'
                        />
                    </div>
                </div>

                {
                    expand === 3 &&
                    <div>
                        <p className='text-[#323232] text-[14px] mb-[5px]'>Organization donation match</p>
                        <div className='flex items-center text-black text-[20px] p-[5px] w-[100%] h-[40px] border border-[#8692A6] rounded-[6px]'>
                            <input
                                className='text-[#323232] text-[16px] w-[100%] bg-transparent focus:outline-none'
                                type='text'
                                value={organizationName}
                                placeholder='google'
                                onChange={(e) => setOrganizationName(e.target.value)}
                                aria-label='Organization donation match text input field'
                            />
                        </div>
                    </div>
                }

            </div>

            <SubmitDonationBtn handleSubmit={handleSubmit} title="Continue" />
        </div>
    )
}

export default CustomizationStep