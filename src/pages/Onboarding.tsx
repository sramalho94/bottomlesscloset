"use client";

import React from "react";
import { useState } from "react";
// import { OnboardingState } from "@/contexts/OnboardingContext";
import Stepper from "@/components/onboarding/Stepper";
import StepperControl from "@/components/onboarding/StepperControl";
import Borough from "@/components/onboarding/steps/Borough";
import Situation from "@/components/onboarding/steps/Situation";
import Details from "@/components/onboarding/steps/Details";
import Goals from "@/components/onboarding/steps/Goals";
import Referrals from "@/components/onboarding/steps/Referrals";
import Attire from "@/components/onboarding/steps/Attire";
import Finish from "@/components/onboarding/steps/Finish";

function Onboarding() {
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



  const displayStep = (step) => {
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

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* // Stepper */}
      <div className="container horizontal mt-5">
        {/* <Stepper steps={steps} currentStep={currentStep} /> */}

        <div className="my-10 p-10">
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
