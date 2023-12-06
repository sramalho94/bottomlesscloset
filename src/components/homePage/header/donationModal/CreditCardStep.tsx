"use client";
import React, { useState } from 'react';
import { PropsForDonateStep } from '@/types/types'

import SubmitDonationBtn from '../../btns/SubmitDonationBtn';

function CreditCardStep({setDonationStep}: PropsForDonateStep) {
    const handleSubmit = () => {
        console.log('Submitted ')
        setDonationStep(5)
    }
  return (
    <div>
        <SubmitDonationBtn handleSubmit={handleSubmit} />
    </div>
  )
}

export default CreditCardStep