import React from 'react';
import { PropsForDonateModal } from '@/types/types'


function SubmitDonationBtn({handleSubmit}: PropsForDonateModal) {
    return (
        <div 
            className="flex justify-center items-center bg-[#B0121A] w-[364px] h-[60px] rounded-[16px]"
            onClick={handleSubmit}
            aria-label='Continue donation button'
        >
            <h1 className="text-[24px] font-bold text-white">
                Continue
            </h1>
        </div>
    )
}

export default SubmitDonationBtn;