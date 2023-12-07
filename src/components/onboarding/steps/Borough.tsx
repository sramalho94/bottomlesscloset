import React from "react";
import { useContext } from "react";
import Image from "next/image";
import "./Borough.css";
// import { StepperContext } from "@/contexts/OnboardingContext";

function Borough() {
  // const { userData, setUserData } = useContext(StepperContext);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };

  return (
    <div className="flex flex-col">
      <div className=" font-bold">
        What part of New York City do you live in?
      </div>
      <div className="text-core-red">
        We currently only serve the 5 boroughs of New York City.{" "}
      </div>
      <div className="mt-5 form-control flex flex-row flex-wrap justify-center mt-0">
        <label className="label cursor-pointer">
          <input type="radio" name="Borough" defaultChecked />
          <Image
            src="./boroughs/Manhattan.svg"
            alt="Option 1"
            width={250}
            height={250}
          />
        </label>
        <label className="label cursor-pointer">
          <input type="radio" name="Borough" />
          <Image
            src="./boroughs/Brooklyn.svg"
            alt="Option 1"
            width={250}
            height={250}
          />
        </label>
        <label className="label cursor-pointer">
          <input type="radio" name="Borough" />
          <Image
            src="./boroughs/Bronx.svg"
            alt="Option 1"
            width={250}
            height={250}
          />
        </label>
        <label className="label cursor-pointer">
          <input type="radio" name="Borough" />
          <Image
            src="./boroughs/StatenIsland.svg"
            alt="Option 1"
            width={250}
            height={250}
          />
        </label>
        <label className="label cursor-pointer">
          <input type="radio" name="Borough" />
          <Image
            src="./boroughs/Queens.svg"
            alt="Option 1"
            width={250}
            height={250}
          />
        </label>
      </div>
    </div>
  );
}

export default Borough;
