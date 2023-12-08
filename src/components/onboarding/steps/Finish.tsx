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
    <div >
      <div className="text-center text-xl font-bold md:text-4xl lg:w-4/5 mx-auto">
        Welcome to a Wardrobe of Opportunities at Bottomless Closet!
      </div>
      <div className="hero pt-0">
        <div className="hero-content flex-col lg:flex-row-reverse pt-2">
          <div className="text-center lg:text-left pt-2">
            <h1 className="text-xl m-0 p-0 font-bold">
              Thank you for signing up!
            </h1>
            <p className="py-6">
              We&apos;re here to support you on your journey. Keep an eye on
              your email, as we&apos;ll be sending a confirmation shortly.
              Let&apos;s work together toward your success!
            </p>
          </div>
          <div className="card shrink-0 max-w-sm shadow-2xl bg-base-100">
            <Image src="./woman.svg" width={400} height={200} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finish;
