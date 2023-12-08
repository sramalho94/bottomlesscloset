"use client";
import React, { useState } from 'react';
import Image from 'next/image';

import InfoStep from './InfoStep';
import CustomizationStep from './CustomizationStep';
import DonorInfoStep from './DonorInfoStep';
import PaymentStep from './PaymentStep';
import CreditCardStep from './CreditCardStep';
import ConfirmationStep from './ConfirmationStep';
import { createDonation } from '@/services/bcApi';

const DonateModal = () => {

    const [donationStep, setDonationStep] = useState(0);
    const [paymentType, setPaymentType] = useState('one-time');
    const [donationAmount, setDonationAmount] = useState(0);

    const [honoreeName, setHonoreeName] = useState('');
    const [comment, setComment] = useState('');
    const [organizationName, setOrganizationName] = useState('');

    const handleSubmit = () => {
        createDonation({
            donor_id: 1,
            initiative_id: 1,
            donationType: paymentType,
            donationValue: donationAmount,
            inMemoriam: honoreeName,
            comment: comment,
            orgMatchName: organizationName
        })
        setDonationStep(5)
    }

    return (
        <div className="w-screen h-[475px] md:w-[470px] md:h-[575px] lg:mr-[10px] lg:absolute lg:bottom-[110px] lg:right-[0px] lg:z-[2] lg:pt-[287px] xl:mr-[100px]">
            <div className="flex flex-col items-center p-[20px] bg-white w-screen h-[475px] md:w-[470px] md:h-[575px] rounded-[40px] shadow-[rgba(50,50,93,0.5)_0px_18px_16px_-9px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                <Image
                    src="./modal-logo.svg"
                    width={300}
                    height={20}
                    alt="Bottomless Logo"
                />
                {
                    donationStep === 0 ?
                        <InfoStep
                            setDonationStep={setDonationStep}
                            paymentType={paymentType}
                            setPaymentType={setPaymentType}
                            donationAmount={donationAmount}
                            setDonationAmount={setDonationAmount}
                        />
                        : donationStep === 1 ?
                            <CustomizationStep
                                setDonationStep={setDonationStep}
                                honoreeName={honoreeName}
                                setHonoreeName={setHonoreeName}
                                comment={comment}
                                setComment={setComment}
                                organizationName={organizationName}
                                setOrganizationName={setOrganizationName}
                            />
                            : donationStep === 2 ?
                                <DonorInfoStep
                                    setDonationStep={setDonationStep}
                                />
                                : donationStep === 3 ?
                                    <PaymentStep 
                                        setDonationStep={setDonationStep} 
                                        donationAmount={donationAmount}
                                        paymentType={paymentType}
                                    />
                                    : donationStep === 4 ?
                                        <CreditCardStep handleSubmit={handleSubmit} />
                                        : donationStep === 5 ?
                                            <ConfirmationStep setDonationStep={setDonationStep} />
                                            : <InfoStep
                                                setDonationStep={setDonationStep}
                                                paymentType={paymentType}
                                                setPaymentType={setPaymentType}
                                                donationAmount={donationAmount}
                                                setDonationAmount={setDonationAmount}
                                            />
                }

            </div>
        </div>
    )
}

export default DonateModal;