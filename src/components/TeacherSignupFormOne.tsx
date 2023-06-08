import React, { useState } from "react";
import Ryticon from "../components/Ryticon";
import TeacherSignupFormTwo from "./TeacherSignupFormTwo";

type Props = {
  onContinue: (data: FormOneType) => void;
};

export type FormOneType = {
  fullName: string;
  email: string;
  password: string;
  school: string;
};

function TeacherSignupFormOne({ onContinue }: Props) {
  const [data, setData] = useState({ fullName: "", email: "", password: "", school: "" });

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  window.localStorage.setItem('data', JSON.stringify(data));
  console.log(data, "FROM FORM 1")

  return (
    <React.Fragment>
      <div className="bg-[#e5e5e5] w-[1440px] min-h-full h-fit inline-block pb-[200px]">
      <span className="inline-flex h-[29px] text-[24px] mt-[81px] mb-[45px] items-center leading-[29.05px] mx-[35%] justify-center align-center text-center">
        <Ryticon className='mt-8 rounded-full h-16 w-16 flex items-center justify-center" alt="#" ' />
        <h1 className="text-4xl text-center mt-10 font-inter font-[600] text-[#55a630]">
          Reward your Teacher
        </h1>
      </span>
      <span className="flex justify-evenly mt-[5rem]">
        <h2 className="mr-[5rem] text-lg font-bold text-[#21334F]">Sign Up as a Teacher</h2>
        <h2 className="ml-[3rem] text-lg font-normal text-[#C6C3D4]">STEP 1 OF 2</h2>
      </span>
      <form className=" w-[745px] h-[705px] justify-center align-center flex-col m-auto">
        <div className="bg-[#ffffff] justify-center items-center align-center p-[80px] m-[40px] flex-col order-1 flex-grow-0 w-[745px] mt-10 mx-auto h-[563pxpx] pb-3 inline-flex">
          <h1 className="text-[#21334f] font-semibold text-[20px] w-fit h-[22px] leading-[22px] self-start ml-[77px] mb-[10px]">
            Update your profile information
          </h1>
          <h1 className="mr-[105px] text-sm font-normal text-[#BDBDBD]" >Only you can edit and view your profile information</h1>

          <div className="flex-col my-3 max-w-md flex">
            <label
              htmlFor="name"
              className="font-normal text-[14px] leading-[15px] ml-2.5 text-[#21334f] mt-[2rem]"
            >
              Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              onChange={HandleChange}
              className="border-[1px] border-solid border-[#d9d9d9] bg-[#ffffff] m-[10px] h-[40px] w-[500px] py-[8px] px-[16px]"
              placeholder="Enter your full name"
            />
          </div>
          <div className="flex-col my-3 max-w-md flex">
            <label
              htmlFor="email"
              className="font-normal text-[14px] ml-2 leading-[15px] text-[#21334f]"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              onChange={HandleChange}
              id="email"
              className="border-[1px] border-solid border-[#d9d9d9] ml-2  bg-[#ffffff] m-[10px] h-[40px] w-[500px] py-[8px] px-[16px]"
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex-col my-3 max-w-md flex">
            <label
              htmlFor="ps"
              className="font-normal text-[14px] ml-2.5 leading-[15px] text-[#21334f]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={HandleChange}
              id="password"
              className="border-[1px] border-solid border-[#d9d9d9] bg-[#ffffff] m-[10px] h-[40px] w-[500px] py-[8px] px-[16px]"
            />
          </div>

          <div className="flex-col  my-3 max-w-md flex">
            <label
              htmlFor="ps"
              className="font-normal text-[14px] ml-2.5 leading-[15px] text-[#21334f]"
            >
              School where you taught
            </label>
            <input
              type="text"
              name="school"
              placeholder="Type name of school"
              onChange={HandleChange}
              id="schools where you taught"
              className="border-[1px] border-solid border-[#d9d9d9] bg-[#ffffff] m-[10px] h-[40px] w-[500px] py-[8px] px-[16px]"
            />
          </div>

          {/* <Link to="/teacher-signuptwo"> */}
          <button
            onClick={() => onContinue(data)}
            className="bg-[#80b918] rounded py-[8px] px-[16px] w-[500px] h-[40px] flex-row justify-center align-center flex-grow-0  m-[2rem] ml-[6.5rem] text-[#fff] text-[18px]"
          >
            Continue
          </button>
          {/* </Link> */}
        
        </div>
      </form>
    </div>
    </React.Fragment>
  );
}
export default TeacherSignupFormOne;
