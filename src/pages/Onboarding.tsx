"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
// import { OnboardingState } from "@/contexts/OnboardingContext";
// import Stepper from '@/components/onboarding/Stepper'
import StepperControl from "@/components/onboarding/StepperControl";
import Borough from "@/components/onboarding/steps/Borough";
import Situation from "@/components/onboarding/steps/Situation";
import Details from "@/components/onboarding/steps/Details";
import Goals from "@/components/onboarding/steps/Goals";
import Referrals from "@/components/onboarding/steps/Referrals";
import Attire from "@/components/onboarding/steps/Attire";
import Finish from "@/components/onboarding/steps/Finish";

function Onboarding() {
  interface ChangeProp {
    handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  }

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const userData = { ...user, [evt.target.name]: evt.target.value };
    setUser(userData);
  }

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState("");
  const steps = [
    "Borough",
    "Situation",
    "Details",
    "Referrals",
    "Goals",
    "Attire",
    "Finish",
  ];

  const displayStep = (step: number) => {
    switch (step) {
      case 1:
        return <Borough />;
      case 2:
        return <Situation />;
      case 3:
        return <Details />;
      case 4:
        return <Referrals />;
      case 5:
        return <Goals />;
      case 6:
        return <Attire />;
      case 7:
        return <Finish />;
    }
  };

  const handleClick = (direction: string) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div
      className={`md:w-3/4 mx-auto max-w-4xl rounded-xl mt-5 pb-2 bg-white mb-8 ${
        currentStep === 7 ? "bg-local bg-contain bg-no-repeat lg:bg-center" : "shadow-xl border"
      }`} style={currentStep === 7 ? { backgroundImage: 'url("/blob.svg")' } : {}}
      >
      {/* // Stepper */}
      <div className="container horizontal mt-5 mb-10">
        {/* <Stepper steps={steps} currentStep={currentStep} /> */}

        <div className="px-3">
          {/* <OnboardingState.Provider */}
          {/* value={{ userData, setUserData, finalData, setFinalData }} */}
          {displayStep(currentStep)}
          {/* </OnboardingState.Provider> */}
        </div>
      </div>
      {/* // Nav Controls */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default Onboarding;
