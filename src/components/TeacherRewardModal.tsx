import React from "react";
import { ReactComponent as Money } from "../assets/Money.svg";

export const TeacherRewardModal = () => {
  return (
    <div className="absolute z-40 mx-[35%] my-[10%] px-[3%] pt-[3%] pb-[1%] w-[30%] h-[40%] bg-white bg-opacity- drop-shadow-lg shadow-zinc-800">
      <div className="mx-[35%] w-[30%] h-[50%]">
        <Money />
      </div>
      <div className="text-[18px] font-inter text-[#03435F]">
        <span className="font-[600]">Babajide</span>
        <span className="font-[400]">
          {" "}
          sent you a reward. Login to view your wallet balance.
        </span>
      </div>
      <div>
        <button className="bg-[#55A630] w-[100%] mt-[7%] text-white rounded h-[42px]">Login to continue</button>
      </div>
    </div>
  );
};
