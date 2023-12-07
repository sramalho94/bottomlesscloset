import React from "react";
import { useContext } from "react";
// import { StepperContext } from "@/contexts/OnboardingContext";

function Situation() {
  // const { userData, setUserData } = useContext(StepperContext);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };
  return (
    <div className="flex flex-col">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Low Income</span>
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">High Living Costs</span>
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Unemployment</span>
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Family Size</span>
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Healthcare Expenses</span>
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Underemployment</span>
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Housing Instability</span>
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Debt Burden</span>
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
    </div>
  );
}

export default Situation;
