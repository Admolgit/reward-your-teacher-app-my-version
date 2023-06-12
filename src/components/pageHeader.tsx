// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from "react";
import { useAuth } from '../context/AuthState';
import Ryticon from "./Ryticon";
import silhoutte from "../assets/silhoutte.jpeg";
import { Link } from "react-router-dom";
import isAuthenticated from "../authProvider/auth";

function PageHeader(props: any) {
  // const [showMenu, setShowMenu] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //const [name, setName] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //const [image, setImage] = useState("");
  // const name= localStorage.getItem('name')
  const image= localStorage.getItem('picture');

  // Get username from auth
  const { user } = isAuthenticated();
  const name = user?.fullName;
  console.log(name)

  return (
    <div className="flex items-center w-[100%] min-w-[400px] h-[80px] lg:min-w-[1000px] justify-between align-center sticky z-40 top-0 bg-[#fff] shadow-zinc-100 shadow-xl">
      <Link to="/">
      <div className="w-[100%] sm:ml-[1rem] sm:mb-[3%] md:ml-[1rem] mt-5 lg-[4rem] cursor-pointer pb-[1rem] md:flex flex ml-[2rem] items-center">
        <Ryticon className="rounded-full h-12 w-16 flex items-center justify-center " />
        <h1 className="text-[18px] sm:text-[14px] w-[100%] leading-[20px] font-inter ml-3 font-[600] text-[#55a630]">
          Reward your Teacher
        </h1>
      </div>
      </Link>
      <div className='flex justify-between w-[865px]  px-[4rem]'>
        <div className="flex justify-center align-center m-auto relative">
          
        </div>
        <div className=" flex justify-center align-center ">
          <Link to="/students-dashboard/rewards-status" className="m-auto text-[#55a630] text-[24px] leading-[19.36px] font-[400] font-inter mx-3">
            Rewards Status
          </Link>
          <img
            src={image ? image : silhoutte}
            className="w-[36px] m-auto h-[36px] rounded-full"
            alt=""
            width=""
          />
          <h3 className="m-auto text-[#012a4a] order-1 text-[16px] font-[400] font-inter text-center leading-[19px] mx-3">
            {name ? name : "RYT user"}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
