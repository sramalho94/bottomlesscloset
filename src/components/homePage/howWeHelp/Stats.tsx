import React from 'react'

function Stats() {
    return (
        <div className="flex flex-col lg:flex-row mt-[30px] mb-[60px] ">
            <div className="flex m-[35px]">
            {/* <div className="flex ml-[35px] mr-[35px]"> */}
                <div className='h-[200px] border-l-[3px] border-salmon'>

                </div>
                <div className="w-[230px] ml-[40px]">
                    <h1 className="font-bold text-[64px] text-black">98%</h1>
                    <p className="text-black text-[20px]">
                        of our clients felt more confident and prepared after utilizing our programs
                    </p>
                </div>
            </div>

            <div className="flex m-[35px]">
            {/* <div className="flex ml-[35px] mr-[35px]"> */}
                <div className='h-[200px] border-l-[3px] border-dark-red'>

                </div>
                <div className="w-[230px] ml-[40px]">
                    <h1 className="font-bold text-[64px] text-black">1,056</h1>
                    <p className="text-black text-[20px]">
                        1:1 Pre-Interview & Post-Hire services provided to our clients in 2022                    </p>
                </div>
            </div>

            <div className="flex m-[35px]">
            {/* <div className="flex ml-[35px] mr-[35px]"> */}
                <div className='h-[200px] border-l-[3px] border-core-red'>

                </div>
                <div className="w-[230px] ml-[40px]">
                    <h1 className="font-bold text-[64px] text-black">53%</h1>
                    <p className="text-black text-[20px]">
                        of our clients of respondents were employed by the end of the year, in 2022                    </p>
                </div>
            </div>

        </div>
    )
}

export default Stats