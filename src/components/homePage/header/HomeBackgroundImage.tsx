import React from 'react';
import Image from 'next/image';

function HomeBackgroundImage() {
    return (
        <div className="w-screen bg-transparent">
            <Image 
                src="./home-background-image.svg" 
                className="w-screen shadow-[rgba(50,50,93,0.5)_0px_18px_16px_-9px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" 
                width="0" 
                height="0" 
                alt="Home Background Image" 
            />
        </div>
    )
}

export default HomeBackgroundImage;
