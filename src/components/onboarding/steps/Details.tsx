import React from "react";
import { useContext } from "react";
// import { StepperContext } from "@/contexts/OnboardingContext";

function Details() {
  // const { userData, setUserData } = useContext(StepperContext);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };
  return (
    <div>
      <div className=" font-bold">Please fill in your details</div>
      <div className="text-core-red">
        We currently only serve the 5 boroughs of New York City.
      </div>{" "}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">First Name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Last Name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <div className="flex flex-col w-full border-opacity-50">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <div className="divider mb-0">OR</div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Phone</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
      </div>
    </div>
  );
}

export default Details;
