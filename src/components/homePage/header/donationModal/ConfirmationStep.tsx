"use client";
import React, { useState } from 'react';
import { PropsForDonateStep } from '@/types/types'

import SubmitDonationBtn from '../../btns/SubmitDonationBtn';

function ConfirmationStep({setDonationStep}: PropsForDonateStep) {
    const handleSubmit = () => {
        console.log('Submitted ')
        setDonationStep(0)
    }
  return (
    <div>
        <h1 className="text-black">Done</h1>
        <SubmitDonationBtn handleSubmit={handleSubmit} />
    </div>
  )
}

export default ConfirmationStep