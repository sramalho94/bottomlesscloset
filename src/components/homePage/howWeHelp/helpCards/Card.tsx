import React from 'react'
import Image from 'next/image'

import { PropsForHelpCards } from '@/types/types'

function Card({ title, body }: PropsForHelpCards) {
    return (
        <div className="flex items-center  bg-white pl-[40px] w-[350px] h-[355px] shadow-xl m-[25px] mb-[50px] rounded-[20px]">
            <div className="flex flex-col justify-between h-[280px]">
                <div>
                    <h1 className="font-bold text-black text-[28px] mb-[30px]">
                        {title}
                    </h1>
                    <p className="text-black text-[20px] w-[260px]">
                        {body}
                    </p>
                </div>
                <Image
                    src="./arrow-right.svg"
                    width={25}
                    height={20}
                    alt="Arrow pointing right"
                />
            </div>
        </div>
    )
}

export default Card