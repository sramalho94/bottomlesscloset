import React from 'react';
import Image from 'next/image';

function LadyGetInvolved() {
  return (
    <div className="relative w-[40%] ml-[10%] md:ml-[5%] lg:ml-[0%]">
        <Image className='absolute left-[-55px] bottom-[0px]' src="./get-involved-lady.svg" height={404} width={365} alt='Get Involved Lady' />
    </div>
  )
}

export default LadyGetInvolved