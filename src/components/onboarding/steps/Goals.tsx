import React from "react";
import { useContext } from "react";
import { StepperContext } from "@/contexts/OnboardingContext";

function Situation() {
  // const { userData, setUserData } = useContext(StepperContext);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };
  return (
    <div className="flex flex-col">
      How can we assist with your career goals?
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Professional Clothes</span>
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Resume Help</span>
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Interview Help</span>
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
    </div>
  );
}

export default Situation;
