import React from 'react';

interface PropsForSubmitDonationBtn{
    handleSubmit: any;
    title: string
}

function SubmitDonationBtn({handleSubmit, title}: PropsForSubmitDonationBtn) {
    return (
        <div 
            className="flex justify-center items-center bg-[#B0121A] w-[364px] h-[60px] rounded-[16px]"
            onClick={handleSubmit}
            aria-label={`${title} donation button`}
        >
            <h1 className="text-[24px] font-bold text-white">
                {title}
            </h1>
        </div>
    )
}

export default SubmitDonationBtn;