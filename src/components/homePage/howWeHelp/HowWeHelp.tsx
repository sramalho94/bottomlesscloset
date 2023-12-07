import React from 'react'

import HelpCards from './helpCards/HelpCards'

function HowWeHelp() {
    return (
        <div className="flex flex-col items-center w-screen">
            <h1 className="text-black font-bold text-[40px] md:text-[48px] m-[35px] mt-[125px]">How We Help</h1>
        
            <HelpCards />

        </div>
    )
}

export default HowWeHelp