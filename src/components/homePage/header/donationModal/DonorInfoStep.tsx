"use client";
import React, { useState } from 'react';
import { PropsForDonateStep } from '@/types/types'

import SubmitDonationBtn from '../../btns/SubmitDonationBtn';

function DonorInfoStep({setDonationStep}: PropsForDonateStep) {
    const handleSubmit = () => {
        console.log('Submitted ')
        setDonationStep(3)
    }
  return (
    <div>
        <SubmitDonationBtn handleSubmit={handleSubmit} />
    </div>
  )
}

export default DonorInfoStep