import React, { useState } from "react";
import Ryticon from "./Ryticon";
import { Link } from "react-router-dom";

function Navbar(props: any) {

  const [showMenu, setShowMenu] = useState(false);

  return (
      <div className="flex items-center w-100 min-w-[400px] justify-between sticky z-10 opacity-100 top-0 bg-white shadow-md overflow-visible">
        <Link to="/">
        <div className="sm:ml-[2rem] mt-3 md:ml-[2rem] cursor-pointer lg-[4rem] pb-[1rem] md:flex flex ml-[10rem] items-center">
          <div>
          <Ryticon className="rounded-full h-16 w-16" />
          </div>
          <div>
          <h1 className="text-[1.5rem] sm:mb-[7px] font-sans ml-3 font-bold text-[#55A630]  sm:640px sm:ml-1 sm:text-[30px]">
            Reward your Teacher
          </h1>
          </div>
        </div>
        </Link>
        <div className="sm:hidden md:hidden lg:visible flex 2xl:visible xl:visible justify-evenly font-medium text-slate-600 text-l mt-10  mr-[8rem] text-center lg:font-sans">
          <Link to="/" className="mx-4 visited:text-lime-600 text-[#55A630]">
            <h1>Home</h1>
          </Link>
          <Link to="/about" className="mx-4 active:text-lime-600 text-[#012A4A]">
            <h1>About Reward Your Teacher</h1>
          </Link>
          <Link to="/contact-us" className="mx-4 active:text-lime-600 text-[#012A4A]">
            <h1>Contact Us</h1>
          </Link>
          <Link to="/signin" className="mx-4 active:text-lime-600 -mt-[0.5rem]">
            <button className="mx-5 px-10 my-0 py-2 mb-[2rem] rounded bg-[#80B918] text-[#fff]">
              Login
            </button>
          </Link>
        </div>
        <div className=" visible flex items-center  sm:min-w-1px:visible sm:visible lg:hidden md:visible xl:hidden 2xl:hidden">
          <button className="mr-[5rem] mt-[4rem]" onClick={() => setShowMenu(!showMenu)}>
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </button> 
        </div>
        {showMenu ? <div className="text-[2rem] sm:mt-[7rem] sm:text-[20px] absolute bg-lime-600 mt-[7rem] left-0 w-4/5 z-20 flex items-center justify-center  bg-[#f7f7f7] h-[60px] w-[100%] mt-[5px] rounded ">
        <Link to="/" className="mx-0 visited:text-white text-[15px]">
          <h1 className="m-[10px] text-[#80B918]">Home</h1>
        </Link>
        <Link to="/about" className="mx-0 active:text-white ">
          <h1 className="mr-[10px] text-[11px] text-[#012A4A]">About Reward Your Teacher</h1>
        </Link>
        <Link to="/contact-us" className="mx-0 active:text-white text-[15px]">
          <h1 className="text-[11px] mr-[10px] text-[#012A4A]">Contact Us</h1>
        </Link>
        <Link to="/signin" className="mx-0 active:text-white">
          <button className=" bg-[#80B918] text-[#fff] flex items-center justify-center w-[5px] h-[30px] text-[10px] text-lime-800 px-10 py-0 mb-[2rem] mt-[1rem] rounded mb-[14px] mr-[25px]">
            Login
          </button>
        </Link>
      </div> : null }
      </div>
  );
}

export default Navbar;
