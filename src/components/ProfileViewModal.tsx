import React, { useState } from "react";
import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as ProfilePic } from "../assets/profilepic.svg";
import { ReactComponent as ThumbsUp } from "../assets/thumbsup.svg";

export const ProfileViewModal = () => {
    const [show, setShow] = useState(true);
  return (
    <div className={`${show===false ? "hidden" : null} absolute rounded font-inter z-40 mx-[27.5%] my-[10%] pb-[1%] w-[40%] h-[45%] bg-white drop-shadow-lg shadow-zinc-800`}>
      <div className="flex items-center ml-[40%] mt-[3%] text-[#03435F] font-[600] text-[14px]">
        <div>Profile details</div>
        <div className="ml-[60%]">
          <Close className="cursor-pointer" onClick={()=>{
            setShow(false)
          }}/>
        </div>
      </div>
      <hr className="mt-[2%]"/>
      <div className="flex items-center m-[5%]">
        <div>
          <ProfilePic />
        </div>
        <div className="ml-[3.5%] text-[14px] text-[#03435F]">
          <div className="font-[600]">Babajide Lawal</div>
          <div className="font-[400]">Alumni (Eko Grammar school)</div>
        </div>
      </div>
      <div className="flex-column ml-[5%] font-[400] text-[14px]">
      <div className="text-[#c4c4c4]">Other info</div>
      <div className="text-[#03435F]">babajidealawal@gmail.com</div>
      <div className="text-[#03435F]">08098556634</div>
      </div>
      <div className="flex items-center mt-[5%] mx-[5%] cursor-pointer bg-[#55A630] w-[90%] rounded h-[42px] text-white text-[14px] font-[500]">
        <div className="ml-[35%]"><ThumbsUp /></div>
        <div>
           Appreciate Student
        </div>
      </div>
    </div>
  );
};
