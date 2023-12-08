import React from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

function GetInvolvedBtn() {
    return (
        <Link href="/">
            <div 
                className="flex justify-center items-center bg-[#FFDAD6] w-[200px] h-[40px] sm:w-[274px] sm:h-[60px] rounded-[20px]"
                aria-label='Get Involved Button'    
            >
                <h1 className={`${montserrat.className} text-[18px] sm:text-[24px] font-bold text-[#630A0E]`}>
                    GET INVOLVED
                </h1>
            </div>
        </Link>
    )
}

export default GetInvolvedBtn;