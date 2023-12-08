import React from "react";
import { useContext } from "react";
import "./Situation.css";
// import { StepperContext } from "@/contexts/OnboardingContext";




function Situation() {
  // const { userData, setUserData } = useContext(StepperContext);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };
  return (
    <div className="flex flex-col">
      <div className=" font-bold text-xl text-center md:w-full w-3/4 mx-auto">
        Choose all the situations that apply to you
      </div>
      <div className="text-core-red text-center text-m w-3/4 md:w-full mx-auto mt-2">
        This information is used to determine whether you can qualify for our assistive services{" "}
      </div>
      <div id="checkboxes" className="pt-5 flex flex-wrap gap-4 justify-center">
        <input type="checkbox" name="rGroup" value="1" id="r1" />
        <label className="whatever" htmlFor="r1">
          Low Income
        </label>
        <input type="checkbox" name="rGroup" value="2" id="r2" />
        <label className="whatever" htmlFor="r2">
          High Living Costs
        </label>
        <input type="checkbox" name="rGroup" value="3" id="r3" />
        <label className="whatever" htmlFor="r3">
          Unemployment
        </label>
        <input type="checkbox" name="rGroup" value="1" id="r4" />
        <label className="whatever" htmlFor="r4">
          Underemployment
        </label>
        <input type="checkbox" name="rGroup" value="2" id="r5" />
        <label className="whatever" htmlFor="r5">
          Family Size
        </label>
        <input type="checkbox" name="rGroup" value="3" id="r6" />
        <label className="whatever" htmlFor="r6">
          Healthcare Expenses
        </label>
        <input type="checkbox" name="rGroup" value="3" id="r7" />
        <label className="whatever" htmlFor="r7">
          Housing Instability
        </label>
        <input type="checkbox" name="rGroup" value="3" id="r8" />
        <label className="whatever" htmlFor="r8">
          Debt Burden
        </label>
      </div>
    </div>
  );
}

export default Situation;
