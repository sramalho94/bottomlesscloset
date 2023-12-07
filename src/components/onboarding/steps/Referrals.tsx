import React from "react";
import { useContext } from "react";
// import { StepperContext } from "@/contexts/OnboardingContext";

function Referrals() {
  // const { userData, setUserData } = useContext(StepperContext);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };
  return (
    <div className="">
      <div className=" font-bold">Referrals</div>
      <div className="text-core-red">
        If referred, enter below; otherwise, feel free to skip.{" "}
      </div>
      <br />
      Do you have a referral?
      <br />
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Bottomless Closet Referral Partner</span>
        </div>
        <select className="select select-bordered">
          <option disabled selected>
            Pick one
          </option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </label>
    </div>
  );
}

export default Referrals;
