import React from 'react'
import Image from 'next/image'

function HiredImage() {
    return (
        <div>
            <Image
                src="/hired-signs-women.png"
                width={990}
                height={20}
                alt="hired"
                aria-label='image of 4 women holding signs that say hired'
            />
        </div>
    )
}

export default HiredImage