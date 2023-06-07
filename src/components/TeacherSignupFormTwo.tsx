import React, { useState } from "react";
import Ryticon from "../components/Ryticon";
import { Select } from 'antd';
import { Link } from "react-router-dom";


const { Option } = Select;

export type FormTwoType = {
  yearsOfTeaching: string;
  subjectTaught: string[];
  schoolType: string[];
  nin: string;
};
const INITIAL_STATE = {
  yearsOfTeaching: "",
  subjectTaught: [],
  schoolType: [],
  nin: "",
};

type Props = {
  onSubmit: (data: FormTwoType) => void;
}

function TeacherSignupFormTwo({ onSubmit }: Props) {
  const [data, setData] = useState<FormTwoType>(INITIAL_STATE);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(data, 'data >>');
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSelect = (name: string, e: string[]) => {
    setData((data) => ({ ...data, [name]: e }));
    console.log(data, 'data >>');
  };

  const handleSubjectsTaught = (e: string[]) => {
    return handleSelect('subjectTaught', e);
  };

  const handleSchoolType = (e: string[]) => {
    return handleSelect('schoolType', e);
  };

  return (
    <div className="bg-[#e5e5e5] w-[1440px] min-h-full h-fit inline-block pb-[200px]">
      <span className="inline-flex h-[29px] text-[24px] mt-[81px] mb-[45px] items-center leading-[29.05px] mx-[35%] justify-center align-center text-center">
        <Ryticon className='mt-8 rounded-full h-16 w-16 flex items-center justify-center" alt="#" ' />
        <h1 className="text-4xl text-center mt-10 font-inter font-[600] text-[#55a630]">
          Reward your Teacher
        </h1>
      </span>
      <span className="flex justify-evenly mt-[5rem]">
        <h2 className="mr-[5rem] text-lg font-bold text-[#21334F]">Sign Up as a Teacher</h2>
        <h2 className="ml-[2rem] text-lg font-normal text-[#C6C3D4]">STEP 2 OF 2</h2>
      </span>
      <form method="POST" className=" w-[745px] justify-center align-center flex-col m-auto">
        <div className="bg-[#ffffff] justify-center items-center align-center p-[80px] m-[40px] flex-col order-1 flex-grow-0 w-[745px] mt-10 mx-auto h-[563pxpx] pb-3 inline-flex">
          <h1 className="text-[#21334f] font-semibold text-[20px] w-fit h-[22px] leading-[22px] self-start ml-[77px] mb-[10px]">
            Update your profile information
          </h1>
          <h1 className="mr-[105px] text-sm font-normal text-[#BDBDBD]">Only you can edit and view your profile information</h1>

          <div className="flex-col my-3 max-w-md flex w-full">
            <label
              htmlFor="name"
              className="font-normal text-[14px] leading-[15px] ml-2 text-[#21334f] mt-[2rem]"
            >
              Years of Teaching
            </label>
            <input
              type="text"
              id="yearsOfTeaching"
              name="yearsOfTeaching"
              onChange={handleChange}
              className="border-[1px] border-solid border-[#d9d9d9] bg-[#ffffff] m-[10px] h-[40px] w-full py-[8px] px-[16px] font-normal"
              placeholder="e.g 1993-2000"
            />
          </div>
          <div className="flex-col my-3 max-w-md flex w-full relative">
          {/* <img src={image} className="absolute text-lg bottom-4 right-1 z-50" /> */}
            <label
              htmlFor="email"
              className="font-normal text-[14px] ml-2 leading-[15px] text-[#21334f]"
            >
              Subjects Taught
            </label>
            <Select
              mode="tags"
              size="large"
              allowClear
              style={{ width: '100%', marginLeft: '9px', marginTop: '10px'}}
              placeholder="Enter subject taught"
              onChange={handleSubjectsTaught}
            >
            </Select>
          </div>
          <div className="flex-col my-3 max-w-md flex w-[100%]">
            <label
              htmlFor="ps"
              className="font-normal text-[14px] ml-2 leading-[15px] text-[#21334f]"
            >
              School Type
            </label>
            <Select
              mode="multiple"
              size="large"
              allowClear
              style={{ width: '100%', marginLeft: '9px', marginTop: '10px'}}
              placeholder="Please select multiple.."
              onChange={handleSchoolType}
            >
              <Option key="secondary" value="secondary">Secondary School</Option>
              <Option key="primary" value="primary">Primary School</Option>
            </Select>
          </div>

          <div className="flex-col  my-3 max-w-md flex w-full">
            <label
              htmlFor="ps"
              className="font-normal text-[14px] ml-3 leading-[15px] text-[#21334f]"
            >
              NIN
            </label>
            <input
              type="text"
              name="nin"
              placeholder="Enter your NIN"
              onChange={handleChange}
              id="nin"
              className="border-[1px] border-solid border-[#d9d9d9] bg-[#ffffff] m-[10px] h-[40px] w-full py-[8px] px-[16px]"
            />
          </div>
      
          <button
            onClick={(e) => {
              e.preventDefault();
              onSubmit(data);
            }}
            className="bg-[#80b918] rounded py-[8px] px-[16px] w-[450px] h-[40px] flex-row justify-center align-center flex-grow-0  m-[2rem] ml-[3.3rem] text-[#fff] text-[18px]"
          >
            Sign Up
          </button>

          <p className="text-center my-[3rem]">
            {" "}
            <span>Already have an account? </span>
            <Link to="/signin">
              <span className="text-lime-600">Sign In</span>
            </Link>
          </p>
        
        </div>
      </form>
    </div>
  );
}
export default TeacherSignupFormTwo;