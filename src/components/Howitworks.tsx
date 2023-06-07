import React from "react";
import { ReactComponent as Bond } from "../assets/bond.svg";

function Howitworks(props: any) {
  return (
    <div className=" flex flex-col  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-around m-auto md:flex-col sm:flex-col  bg-white drop-shadow-xl 2xl:pb-[10rem] lg:pb-[10rem]">
      <div className="ml-[4rem] flex-col flex-start justify-center 2xl:ml-[10rem] lg:ml-[10rem] sm:ml-[2rem] xl:ml-[10rem]">
        <h1 className=" text-lime-600 font-bold mr-[5rem] mt-8  text-[60px] sm:text-[40px] md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-[60px] text-[#7eb819] sm:w-[100%] md:w-[100%] ">
          Send instant <b></b> heartfelt rewards <br></br> to your teachers
        </h1>
        <h3 className="text-[1.5rem] w-[80%] max-w-screen-md:text-sky-800 text-sky-800 mr-[6rem] text-[1.2rem] my-5 text-[#03435F] sm:w-[320px]">
          A digital platform that digitizes the process of sending funds to
          teachers who have done their work with emphatic kindness.
        </h3>
        <button className="mb-5 md:bg-lime-600 bg-lime-600 text-slate-200 text-[14px] px-10 my-0 py-3 rounded bg-[#80B918] text-[#fff]">
          Get Started
        </button>
      </div>
      <div className="mt-auto mb-[8%] flex justify-center lg:w-[60%] xl:w-[40%] mr-[5%] 2xl:w-[100%] 2xl:mr-[5rem] lg:w-[100%] h-[100%]">
        <Bond className={props.className} />
      </div>
    </div>
  );
}

export default Howitworks;

