import React from 'react'

function GetInvolvedSection() {
    return (
        // <div className="h-[368px] bg-red-600 justify-end ml-[5%] lg:ml-[10%]">
        <div className="h-[368px] ml-[5%] mt-[24px] lg:ml-[10%] lg:mt-[58px]">
            <div>
                <div className='w-[40%]'>
                    <p className='text-[20px] lg:text-[24px] text-black'>
                        “I feel stuck sometimes, but coming to Bottomless Closet reminds
                        me of how far I’ve come and the next step I can take. Coming here
                        makes me feel motivated and hopeful.”
                    </p>
                </div>
                <div className='flex w-[40%] justify-end'>
                    <p className='text-black mr-[7%] text-[20px] lg:text-[24px]'>
                        - 
                        {/* TODO: Change text color to hex code when you have one */}
                        <span className='text-[#B0121A]'> Diana</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default GetInvolvedSection