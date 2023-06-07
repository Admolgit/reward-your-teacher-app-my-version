import React from "react";

export const LogoutConfirmationModal = () => {
  return (
    <div className="absolute rounded font-inter text-[16px] text-[#21334F] z-40 mx-[27.5%] my-[10%] pb-[1%] w-[45%] h-[30%] bg-white bg-opacity- drop-shadow-lg shadow-zinc-800">
      <div className="font-[700] mb-[2%] m-[5%] leading-[19px]">Logout Confirmation</div>
      <hr/>
      <div className="m-[5%] font-[400]">Are you sure you want to logout from your account?</div>
      <div className="flex items-center ml-[50%] mt-[8%]">
      <div>
        <button className="bg-[#fcfcfc] rounded w-[60px] h-[30px]">No</button>
      </div>
      <div>
      <button className="bg-[#55A630] ml-[25%] rounded w-[60px] h-[30px] text-white">Yes</button>
      </div>
      </div>
    </div>
  );
};
