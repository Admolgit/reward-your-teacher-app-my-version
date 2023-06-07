import React from "react";
import { ReactComponent as Done } from "../assets/done.svg";

export default function Alert() {
  return (
    // <div className='grid grid-cols-1 sm:grid-cols-0 h-screen w-full'>
    <div className=" flex flex-col justify-center drop-shadow-md box-shadow-5">
      <div className="max-w-[509px] w-full mx-auto bg-white p-10 px-10">
        <div className="mx-[40%] my-[9%]">
          <Done />
        </div>
        <h1 className="text-3xl font-bold text-center">
          Reward Sent Successfully
        </h1>
        <p className="text-2kl text-center">
          You just sent <span className="font-bold">N15,000</span> to{" "}
          <span className="font-bold">
            Chioma Awoniyi
          </span>
        </p>
        <button className="w-full mt-5 py-2 bg-lime-100 text-green-600 rounded-lg">
          Done
        </button>
      </div>
    </div>
  );
}
