import React from "react";
import { useContext } from "react";
import { StepperContext } from "@/contexts/OnboardingContext";

function Finish() {
  // const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return <div>Finish</div>;
}

export default Finish;
