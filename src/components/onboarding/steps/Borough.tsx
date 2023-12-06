import React from "react";
import { useContext } from "react";
import Image from "next/image";
import "./Borough.css" 
// import { StepperContext } from "@/contexts/OnboardingContext";

function Borough() {
  // const { userData, setUserData } = useContext(StepperContext);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };

  return (
    <div className="flex flex-col">
      What part of New York City do you live in?
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Manhattan</span>
          <input
            type="radio"
            name="Manhattan"
            className="radio checked:bg-red-500"
            checked
          />
            <Image src="https://via.placeholder.com/40x60/0bf/fff&text=A" alt="Option 1" width={50} height={50}/>

        </label>
        <label className="label cursor-pointer">
          <span className="label-text">Manhattan</span>
          <input
            type="radio"
            name="Manhattan"
            className="radio checked:bg-red-500"
            checked
          />
            <Image src="https://via.placeholder.com/40x60/0bf/fff&text=A" alt="Option 1" width={50} height={50}/>

        </label>
        <label className="label cursor-pointer">
          <span className="label-text">Manhattan</span>
          <input
            type="radio"
            name="Manhattan"
            className="radio checked:bg-red-500"
            checked
          />
            <Image src="https://via.placeholder.com/40x60/0bf/fff&text=A" alt="Option 1" width={50} height={50}/>

        </label>
        <label className="label cursor-pointer">
          <span className="label-text">Manhattan</span>
          <input
            type="radio"
            name="Manhattan"
            className="radio checked:bg-red-500"
            checked
          />
            <Image src="https://via.placeholder.com/40x60/0bf/fff&text=A" alt="Option 1" width={50} height={50}/>

        </label>
        <label className="label cursor-pointer">
          <span className="label-text">Manhattan</span>
          <input
            type="radio"
            name="Manhattan"
            className="radio checked:bg-red-500"
            checked
          />
            <Image src="https://via.placeholder.com/40x60/0bf/fff&text=A" alt="Option 1" width={50} height={50}/>

        </label>
      </div>
    </div>
  );
}

export default Borough;
