import React from "react";
import { ReactComponent as Account } from "../assets/account.svg";
import { ReactComponent as Settings } from "../assets/settings.svg";
import { ReactComponent as Help } from "../assets/help.svg";
import { ReactComponent as Logout } from "../assets/logout.svg";

export const SettingsModalCard = () => {
  return (
    <div className='absolute z-40 ml-[82%] px-[3%] pt-[3%] w-[17%] h-[28%] font-[400] text-[16px] font-inter bg-white bg-opacity- drop-shadow-lg shadow-zinc-800"'>
      <div className="flex items-center mb-[10%]">
        <div>
          <Account />
        </div>
        <div className="ml-[5%]">Account</div>
      </div>
      <div className="flex items-center mb-[10%]">
        <div>
          <Settings />
        </div>
        <div className="ml-[5%]">Settings</div>
      </div>
      <div className="flex items-center mb-[10%]">
        <div>
          <Help />
        </div>
        <div className="ml-[5%]">Help Cemter</div>
      </div>
      <div className="flex items-center">
        <div>
          <Logout />
        </div>
        <div className="ml-[5%]">Logout</div>
      </div>
    </div>
  );
};
