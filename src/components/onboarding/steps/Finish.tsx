import Image from "next/image";
import React from "react";
import { useContext } from "react";
// import { StepperContext } from "@/contexts/OnboardingContext";

function Finish() {
  // const { userData, setUserData } = useContext(StepperContext);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Thank you for signing up!</h1>
          <p className="py-6">
            We're here to support you on your journey. Keep an eye on your
            email, as we'll be sending a confirmation shortly. Let's work
            together toward your success!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Image src="./woman.svg" width={20} height={20} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Finish;
