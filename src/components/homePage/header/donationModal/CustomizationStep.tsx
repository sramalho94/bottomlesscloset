"use client";
import React, { useState } from 'react';
import { PropsForDonateStep } from '@/types/types'

import SubmitDonationBtn from '../../btns/SubmitDonationBtn';

function CustomizationStep({setDonationStep}: PropsForDonateStep) {
    const handleSubmit = () => {
        console.log('Submitted ')
        setDonationStep(2)
    }
  return (
    <div>
        <SubmitDonationBtn handleSubmit={handleSubmit} />
    </div>
  )
}

export default CustomizationStep