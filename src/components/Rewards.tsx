import React, { useState } from "react";
import { notifications } from "../adata/data";

function Rewards() {
  const [hidden, setHidden] = useState(false);
  return (
    <div className="ml-[295px]">
      <h1 className="text-6xl ml-[4rem] pt-8 pb-4 text-[#03435f]">Rewards</h1>
      <div
        className={`${
          hidden ? "text-slate-300" : "text-lime-600 "
        } flex w-[80vw] justify-between h-[4rem] mb-[2rem] bg-slate-100 `}
      >
        <div
          onClick={() => {
            setHidden(!hidden);
          }}
          className={`${hidden ? "text-slate-600 text-center" : "text-lime-600 border-b-[5px] w-[50%]  border-slate-500"} w-[50%] text-center ml-[4rem]`}
        >
          Claimed Rewards
        </div>
        <div
          onClick={() => {
            setHidden(!hidden);
          }}
          className={`${
            !hidden ? "text-slate-600 text-center" : "text-lime-600 border-b-[5px] border-slate-500 "
          } w-[50%] text-center mr-[4rem]`}
        >
          Unclaimed Rewards
        </div>
      </div>
      <div className="relative">
        <div className={`${!hidden ? "" : "hidden"} absolute left-[4rem]`}>
          {notifications
            .filter((x) => x.claimed === true)
            .map((x: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; createdAt: string | number | Date; }, idx: React.Key | null | undefined) => (
              <div key={idx}>
                <h1 className="text-[17px] font-inter leading-[17px] font-[400] pt-[2rem] text-[#03435f]">{x.title}</h1>
                <h1 className=" text-[#c4c4c4] font-[400] font-[14px] leading-[17px] font-inter">
                  {new Date(x.createdAt).getDate() +
                    "/" +
                    new Date(x.createdAt).getMonth() +
                    "/" +
                    new Date(x.createdAt).getFullYear() +
                    "  " +
                    new Date(x.createdAt).toLocaleTimeString()}
                </h1>
              </div>
            ))}
        </div>
        <div className={`${hidden ? "" : "hidden"} absolute right-[4rem]`}>
          {notifications
            .filter((x: { claimed: boolean; }) => x.claimed === false)
            .map((x: { title: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; createdAt: string | number | Date; }, idx: React.Key | null | undefined) => (
              <div key={idx}>
                <h1 className="text-[17px] font-inter leading-[17px] font-[400] pt-[2rem] text-[#03435f]">{x.title}</h1>
                <h1 className=" text-[#c4c4c4] font-[400] font-[14px] leading-[17px] font-inter">
                  {new Date(x.createdAt).getDate() +
                    "/" +
                    new Date(x.createdAt).getMonth() +
                    "/" +
                    new Date(x.createdAt).getFullYear() +
                    "  " +
                    new Date(x.createdAt).toLocaleTimeString()}
                </h1>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Rewards;
