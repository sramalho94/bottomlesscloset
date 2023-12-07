import React from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

function GetInvolvedBtn() {
    return (
        <Link href="/">
            <div className="flex justify-center items-center bg-[#630A0E] w-[274px] h-[60px] rounded-[20px]">
                <h1 className={`${montserrat.className} text-[24px] font-bold`}>
                    GET INVOLVED
                </h1>
            </div>
        </Link>
    )
}

export default GetInvolvedBtn;