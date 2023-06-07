import React from "react";
import { ReactComponent as Profilepic } from "../assets/profilepic.svg";

export default function SendRewardProfile({profile, close, showSendReward}: any) {
  
    const {fullName, email, school, startYear, endYear, virtual_account_id} = profile;

    const handleClick = () => {
      showSendReward(true);
      close();
    }
    
  return (
    <div className="absolute drop-shadow-lg h-auto w-[50%] mx-auto top-[28%] right-[15%] bg-white">
        
      <div className="flex ml-[30%] items-center justify-between px-10">
        <h2 className="text-[14px] text-[#03435F] font-[600] text-center mb-1 mt-2">
          Profile details
        </h2>
        <h2 className="cursor-pointer" onClick={close}>X</h2>
      </div>
      <div>
        <hr className="w-[100%] border-1" />
      </div>
      <div className="mx-[7%] my-[5%]">
        <div className="flex justify-between">
          <div className="flex items-center w-[100%]">
            <div>
              <Profilepic />
            </div>
            <div className="ml-[3%] text-[14px] text-[#03435F]">
              <p className="font-[600]">{fullName}</p>
              <p className="font-[400]">{school}</p>
              <p className="font-[400]">{startYear} - {endYear}</p>
            </div>
          </div>
          {/* <div className="font-bold text-[#55A630]">Edit</div> */}
        </div>
        <div className="mt-[3%]">
          {/* <h5 className="mb-1 text-[14px] font-[400] text-[#c4c4c4]">
            About
          </h5> */}
          {/* <p className="mb-1 text-[14px] font-[400] text-[#03435F]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            architecto harum voluptate repellat provident deleniti, molestias
            id, ipsa sunt omnis at, placeat adipisci. Necessitatibus, soluta
            neque distinctio in quae molestias?
          </p> */}
        </div>
        <div className="mt-[3%]">
          <h5 className="mb-1 text-[14px] font-[400] text-[#c4c4c4] ">
            Teacher Info
          </h5>
          <p className="mb-1 text-[14px] font-[400] text-[#03435F]">
            {email}
          </p>
          <p className="mb-1 text-[14px] font-[400] text-[#03435F]">{virtual_account_id}</p>
        </div>
        <div className="flex mt-4 mb-[5%] justify-between mx-[1%] lg:mt-6 pl-5 pr-5">
          <div
          onClick={handleClick}
            className="items-center cursor-pointer py-[2%] px-[10%] text-[14px] text-center bg-[#55A630] text-white rounded-md"
          >
            Send Reward
          </div>
          <div
            className="items-center cursor-pointer py-[2%] px-[10%] text-[14px] text-center text-blue-900 bg-zinc-200 rounded-md"
          >
            Send Message
          </div>
        </div>
      </div>
      
    </div>
  );
}
