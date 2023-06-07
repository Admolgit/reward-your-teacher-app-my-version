import React, { useState } from "react";
import Ryticon from "../components/Ryticon";
import StudentsLogin from "../components/StudentsLogin";
import TeachersLogin from "../components/TeachersLogin";
import { Tabs } from "antd";
import { useSearchParams } from "react-router-dom";

const { TabPane } = Tabs;

function Login() {
    const [queryParams, setQueryParams] = useSearchParams();
    const [tab, setTab] = useState(queryParams.get('type') ?? 'teacher');

    const handleTabChange = (key: string) => {
        setTab(key);
        setQueryParams({ type: key });
    };

  return (
    <div className="bg-[#e5e5e5] w-[1440px] min-h-full h-fit inline-block pb-[200px]">
      <span className="inline-flex h-[29px] text-[24px] mt-[81px] mb-[45px] items-center leading-[29.05px] mx-[35%] justify-center align-center text-center">
        <Ryticon className='mt-8 rounded-full h-16 w-16 flex items-center justify-center" alt="#" ' />
        <h1 className="text-4xl text-center mt-10 font-inter font-[600] text-[#55a630]">
          Reward your Teacher
        </h1>
      </span>
        <div className=" w-[745px] h-[705px] justify-center align-center flex-col m-auto">
            <div className="bg-[#ffffff] justify-center items-center align-center p-[80px] m-[40px] flex-col order-1 flex-grow-0 w-[745px] mt-10 mx-auto h-[563pxpx] pb-3 inline-flex">
                <Tabs defaultActiveKey={tab} centered onChange={handleTabChange} tabBarStyle={{ color: 'black' }}>
                    <TabPane tab="Login as teacher" key="teacher">
                      <TeachersLogin />
                    </TabPane>
                    <TabPane tab="Login as student" key="student">
                      <StudentsLogin />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    </div>
  );
}

export default Login;
