import React from "react";
import { useContext } from "react";
import "../../../app/globals.css";
// import { StepperContext } from "@/contexts/OnboardingContext";


interface PropsForDetails {
    firstName: string
    setFirstName: (firstName: string) => void
    lastName: string
    setLastName: (lastName: string) => void
    email: string
    setEmail: (email: string) => void
}

function Details({ firstName, lastName, email, setFirstName, setLastName, setEmail }: PropsForDetails) {
    // const { userData, setUserData } = useContext(StepperContext);
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setUserData({ ...userData, [name]: value });
    // };
    return (
        <div>
            <div className=" font-bold text-xl text-center md:w-full w-3/4 mx-auto">
                Please fill in your details
            </div>
            <div className="text-core-red text-center text-m w-3/4 md:w-full mx-auto mt-2">
                This information is required to continue to the next steps
            </div>{" "}
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text text-black">First Name</span>
                </div>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs bg-white"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="lg:hidden">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black">Email</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs bg-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                <div className="hidden lg:block">
                    <div className="flex w-full align-middle">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-black">Email</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs bg-white"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <div className="divider divider-horizontal relative top-5">OR</div>
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
            </div>
        </div>
    );
}

export default Details;
