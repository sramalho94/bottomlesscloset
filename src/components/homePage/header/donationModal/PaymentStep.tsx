"use client";
import React, { useState } from 'react';
import { PropsForDonateStep } from '@/types/types'

import SubmitDonationBtn from '../../btns/SubmitDonationBtn';

function PaymentStep({setDonationStep}: PropsForDonateStep) {
    const handleSubmit = () => {
        console.log('Submitted ')
        setDonationStep(4)
    }
  return (
    <div>
        <SubmitDonationBtn handleSubmit={handleSubmit} />
    </div>
  )
}

export default PaymentStep