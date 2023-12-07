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
      <div className="form-control flex flex-row flex-wrap justify-center">
        <label className="label cursor-pointer">

          <input
            type="radio"
            name="Manhattan"
            checked
          />
            <Image src="./boroughs/Manhattan.svg" alt="Option 1" width={250} height={250}/>

        </label>
        <label className="label cursor-pointer">

          <input
            type="radio"
            name="Manhattan"
            checked
          />
            <Image src="./boroughs/Manhattan.svg" alt="Option 1" width={250} height={250}/>

        </label>
        <label className="label cursor-pointer">

          <input
            type="radio"
            name="Manhattan"
            checked
          />
            <Image src="./boroughs/Manhattan.svg" alt="Option 1" width={250} height={250}/>

        </label>
        <label className="label cursor-pointer">

          <input
            type="radio"
            name="Manhattan"
            checked
          />
            <Image src="./boroughs/Manhattan.svg" alt="Option 1" width={250} height={250}/>

        </label>
        <label className="label cursor-pointer">

          <input
            type="radio"
            name="Manhattan"
            checked
          />
            <Image src="./boroughs/Manhattan.svg" alt="Option 1" width={250} height={250}/>

        </label>
        
      </div>
    </div>
  );
}

export default Borough;
