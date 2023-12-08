import React from "react";
import { useContext } from "react";
// import { StepperContext } from "@/contexts/OnboardingContext";

interface PropsForReferrals{
    referralOrg: string
    setReferralOrg: (referralOrg: string) => void
}

function Referrals({referralOrg, setReferralOrg}: PropsForReferrals) {
  // const { userData, setUserData } = useContext(StepperContext);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };
  return (
    <div className="">
      <div className=" font-bold  text-xl text-center md:w-full w-3/4 mx-auto">Referrals</div>
      <div className="text-core-red text-center text-m w-3/4 md:w-full mx-auto mt-2">
        If referred, enter below; otherwise, feel free to skip.{" "}
      </div>
      <br />
      Do you have a referral?
      <br />
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs bg-white"
        onChange={(e) => setReferralOrg(e.target.value)}
      />
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-black">Bottomless Closet Referral Partner</span>
        </div>
        <select 
            className="select select-bordered bg-white" 
            onChange={(e) => setReferralOrg(e.target.value)}
        >
          <option disabled selected >
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
