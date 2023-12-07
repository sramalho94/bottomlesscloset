import React from 'react'
import { stepperControlProps } from '@/types/types'


function StepperControl({
  handleClick,
  currentStep,
  steps
}: stepperControlProps) {


  return (
    <div className="container flex justify-around mt-4 mb-8">
      {/* Back Button */}
      <button
        onClick={() => handleClick('back')}
        className={`bg-white text-black uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-core-red hover:bg-pink-2 transition duration-200 ease-in-out ${
          currentStep === 1 ? 'opacity-50 cursor-not-allowed hidden' : ''
        }`}
      >
        Back
      </button>
      {/* Next Button */}
      <button
        onClick={() => handleClick('next')}
        className="bg-core-red text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-slate-300 hover:bg-red-brick hover:text-white transition duration-200 ease-in-out"
      >
        {currentStep === steps.length - 1 ? 'Confirm' : 'Next'}
      </button>
    </div>
  )
}

export default StepperControl
