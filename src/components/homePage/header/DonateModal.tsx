import React from 'react';
import Image from 'next/image';

function DonateModal() {
    return (
        <div className="w-screen h-[475px] md:w-[470px] md:h-[575px] lg:absolute lg:bottom-[0] lg:right-[0px] lg:z-[2] lg:mr-[100px] lg:pt-[287px]">
            <div className="flex flex-col items-center p-[20px] bg-white w-screen h-[475px] md:w-[470px] md:h-[575px] rounded-[40px] shadow-[rgba(50,50,93,0.5)_0px_18px_16px_-9px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                <Image
                    src="./modal-logo.svg"
                    width={300}
                    height={20}
                    alt="Bottomless Logo"
                />
                
            </div>
        </div>
    )
}

export default DonateModal;