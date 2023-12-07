import React from 'react'
import Image from 'next/image'

function BlobImage() {
    return (
        <div className="relative h-[5px] mt-[20px]">
            <Image
                src="./big-blob.svg"
                width={930}
                height={20}
                alt="hired"
            />
        </div>
    )
}

export default BlobImage