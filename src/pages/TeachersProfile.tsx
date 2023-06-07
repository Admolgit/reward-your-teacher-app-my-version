import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Ryticon from "../components/Ryticon";
import {Select}   from 'antd';
import {toast} from 'react-toastify';
import { apiPost } from "../utils/apiHelpers";
import { useAuth } from "../context/AuthState";


const { Option } = Select;

export type TeacherProfileType = {
  fullname: string;
  email: string;
  password: string;
  school: string;
  yearsOfTeaching: string;
  subjectsTaught: string[];
  schoolType: string[];
  nin: string;
};

const INITIAL_STATE = {
    fullname: "",
    email: "",
    password: "",
    school: "",
    yearsOfTeaching: "",
    subjectsTaught: [],
    schoolType: [],
    nin: "",
  };

const subjects = [
  "Mathematics",
  "English",
  "Biology",
  "Commerce",
  "Accounting",
  "Government",
  "Literature",
  "PHP",
  "Health Education",
];

  // type Props = {
  //   onSubmit: (data: TeacherProfileType) => void;
  // }

function TeachersProfile() {
  const [data, setData] = useState<TeacherProfileType>(INITIAL_STATE);
  const {user} = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSelect = (name: string, e: string[]) => {
    setData((data) => ({ ...data, [name]: e }));
    console.log(data, 'data >>');
  };

  const handleSubjectsTaught = (e: string[]) => {
    return handleSelect('subjectsTaught', e);
  };

  const handleSchoolType = (e: string[]) => {
    return handleSelect('schoolType', e);
  };

  const submit = async () => {
    const reqData = {
      ...data,
      name: data.fullname,
      subject: data.subjectsTaught.join(),
      schoolType: data.schoolType.join(),
    };

    const response = await apiPost(`/teachers/teacher/${user.id}`, reqData, {});
    if (response.data) {
      toast.success('🦄 Successfully Updated profile!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className=" w-[100%] min-h-full h-fit inline-block pb-[200px] ">
      <form method="POST" className=" w-[745px] h-full justify-center align-center flex-col m-auto">
    
        <h2 className="mr-[5rem] font-bold text-[#03435F] text-[26px] mt-[3rem]">Profile</h2>

          <div className="border-[1px] border-solid border-[#C4C4C4]   bg-[#ffffff] justify-center items-center  p-[40px] m-[40px] flex-col order-1 flex-grow-0 w-[616px] mt-[15px] mx-auto h-[563pxpx] pb-3 inline-flex mr-[5rem]">
          <h1 className="text-[#21334f] font-semibold text-[20px] w-fit h-[22px] leading-[22px] self-start ml-[53px] mb-[10px]">
            Update your profile information
          </h1>
          <h1 className="mr-[100px] text-sm font-normal text-[#BDBDBD]" >Only you can edit and view your profile information</h1>

          <div className="flex-col my-3 max-w-md flex  w-full">
            <label
              htmlFor="name"
              className="font-normal text-[14px] leading-[15px] ml-2.5 text-[#21334f] mt-[2rem]"
            >
              Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              onChange={handleChange}
              className="border-[1px] border-solid border-[#d9d9d9] bg-[#ffffff] m-[10px] h-[40px]  w-full py-[8px] px-[16px]"
              placeholder="Enter your full name"
            />
          </div>
          <div className="flex-col my-3 max-w-md flex  w-full">
            <label
              htmlFor="email"
              className="font-normal text-[14px] ml-2 leading-[15px] text-[#21334f]"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              id="email"
              className="border-[1px] border-solid border-[#d9d9d9] ml-2  bg-[#ffffff] m-[10px] h-[40px]  w-full py-[8px] px-[16px]"
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex-col my-3 max-w-md flex  w-full">
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
              onChange={handleChange}
              id="password"
              className="border-[1px] border-solid border-[#d9d9d9] bg-[#ffffff] m-[10px] h-[40px] w-full py-[8px] px-[16px]"
            />
          </div>

          <div className="flex-col my-3 max-w-md flex w-full">
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
              onChange={handleChange}
              id="school where you taught"
              className="border-[1px] border-solid border-[#d9d9d9] bg-[#ffffff] m-[10px] h-[40px] w-full py-[8px] px-[16px]"
            />
          </div>
          
          <div className="flex-col my-3 max-w-md flex w-full">
            <label
              htmlFor="name"
              className="font-normal text-[14px] leading-[15px] ml-2 text-[#21334f]"
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
              placeholder="Select Subjects"
              onChange={handleSubjectsTaught}
            >
              {
                subjects.map(subject => (
                  <Option key={subject} value={subject}>{subject}</Option>
                ))
              }
              {/* <Option key="English" value="primary">English</Option>
              <Option key="secondary" value="secondary">Biology</Option>
              <Option key="primary" value="primary">Commerce</Option>
              <Option key="secondary" value="secondary">Accounting</Option>
              <Option key="primary" value="primary">Literature</Option>
              <Option key="secondary" value="secondary">Government</Option>
              <Option key="primary" value="primary">PHP</Option>
              <Option key="primary" value="primary">Health Education</Option> */}

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
              placeholder="Select School Types"
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

          {/* <Link to="/teacher-signuptwo"> */}
          <button
            onClick={e => {
              e.preventDefault();
              submit();
            }}
            className="bg-[#80b918] rounded py-[8px] px-[16px] w-[450px] h-[40px] flex-row justify-center align-center flex-grow-0  m-[2rem] ml-[3.3rem] text-[#fff] text-[18px]"
          >
            Update
          </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
}
export default TeachersProfile;