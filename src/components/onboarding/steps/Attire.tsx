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
      <div className=" font-bold  text-xl text-center md:w-full w-3/4 mx-auto">
        How can we help with your interview attire?{" "}
      </div>
      <div className="text-core-red text-center text-m w-3/4 md:w-full mx-auto mt-2">Select items you might need </div>
      <div id="checkboxes" className="pt-5 flex flex-wrap gap-4 justify-center">
        <input type="checkbox" name="rGroup" value="1" id="r1" />
        <label className="whatever" htmlFor="r1">
          Blazer{" "}
        </label>
        <input type="checkbox" name="rGroup" value="2" id="r2" />
        <label className="whatever" htmlFor="r2">
          Dress Shirt
        </label>
        <input type="checkbox" name="rGroup" value="3" id="r3" />
        <label className="whatever" htmlFor="r3">
          Slacks
        </label>
        <input type="checkbox" name="rGroup" value="1" id="r4" />
        <label className="whatever" htmlFor="r4">
          Skirts{" "}
        </label>
        <input type="checkbox" name="rGroup" value="2" id="r5" />
        <label className="whatever" htmlFor="r5">
          Shoes{" "}
        </label>
        <input type="checkbox" name="rGroup" value="3" id="r6" />
        <label className="whatever" htmlFor="r6">
          Work Bags{" "}
        </label>
      </div>
    </div>
  );
}

export default Situation;
