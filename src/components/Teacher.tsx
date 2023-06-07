import React from "react";
import t2 from "../assets/t2.png";
import Union from "../assets/Union.png";

function Teacher(props:any) {
  return (
    <div className="bg-slate-100 h-[100%] flex sm:flex-wrap  sm:flex-col-reverse /*my-[8rem]*/ justify-around pt-[6rem] sm:pt-0">
      <div className=" text-slate-600 w-[35%] 2xl:ml-[4rem] md:ml-[3rem] lg:ml-[10rem] xl:ml-[4rem] sm:ml-[3rem] sm:mb-[3rem]">
        <h1 className=" text-[2rem] sm:text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2.8rem] font-bold mb-4 leading-[3rem] text-[#03435F] sm:w-[300px] ">
          The teacher's reward should no longer be in heaven.
        </h1>
        <p className=" sm:text-[19px] md:text-[1rem] lg:text-[24px] xl:text-[28px] 2xl:text-[28px] text-[1rem] py-3 font-mediun text-[#03435F]">
          The teacher{" "}
          <span className=" sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[28px] text-4xl font-bold text-[#03435F]">motivates</span>
        </p>
        <p className=" sm:text-[19px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[28px] text-2xl py-3 font-medium text-[#03435F]">
          The teacher{" "}
          <span className="sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[28px] font-bold text-[#03435F]">inspires</span>
        </p>
        <p className=" sm:text-[19px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[28px] py-3 font-medium text-[#03435F]">
          The teacher{" "}
          <span className="sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[28px] font-bold text-[#03435F]">equips</span>
        </p>
        <p className="sm:text-[19px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[28px] py-3 font-medium text-[#03435F]">
          The teacher{" "}
          <span className="sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[28px] font-bold text-[#03435F]">loves</span>
        </p>
      </div>
      <div className='sm:pt-[2rem] relative mr-[0rem] mb-[5rem] w-[35%] sm:mb-0'>
        <img src={Union} alt="the-teacher" className="w-[479px] h-[479px] rounded-full box object-contain  sm:w-[1000px]"/>
        <img src={t2} alt="teacher" className=" sm:hidden md:hidden lg:visible xl:visible 2xl:visible rounded-full w-[60] h-[60] absolute bottom-[2rem] ring-4 ring-white left-[-5.5rem] z-3" />
      </div>
    </div>
  );
}

export default Teacher;
