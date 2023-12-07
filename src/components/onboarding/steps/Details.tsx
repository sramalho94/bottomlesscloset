import React from "react";
import { useContext } from "react";
import "../../../app/globals.css"
// import { StepperContext } from "@/contexts/OnboardingContext";

function Details() {
  // const { userData, setUserData } = useContext(StepperContext);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };
  return (
    <div>
      <div className=" font-bold text-xl text-center md:w-full w-3/4 mx-auto">Please fill in your details</div>
      <div className="text-core-red text-center text-m w-3/4 md:w-full mx-auto mt-2">
        We currently only serve the 5 boroughs of New York City.
      </div>{" "}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-black">First Name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-black">Last Name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </label>
      <div className="flex flex-col w-full border-opacity-50">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-black">Email</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-white"
          />
        </label>
        <div className="divider mb-0">OR</div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-black">Phone</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-white"
          />
        </label>
      </div>
    </div>
  );
}

export default Details;
