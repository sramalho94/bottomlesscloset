import React from "react";
import { useContext } from "react";
import { StepperContext } from "@/contexts/OnboardingContext";

function Details() {
  // const { userData, setUserData } = useContext(StepperContext);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };
  return (
    <div>
      Please Fill in some Details
      <br />
      First Name
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <br />
      Last Name
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <br />
      Email
      <br />
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <br />
      Phone Number
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
}

export default Details;
