import React, { useState, } from "react";
import { FiGrid } from "react-icons/fi";
// import { AiOutlineMessage } from "react-icons/ai";
import { VscBellDot } from "react-icons/vsc";
import { MdLogout } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { useAuth } from "../context/AuthState";
import { useDispatch } from "react-redux";
import { AUTH_ACTIONS } from "../store/authReducer";

function TeacherSideNav() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { logout } = useAuth()
  const { addToast } = useToasts();
  
const [bg, setBg] = useState({
     overview:true,
     notifications:false,
     message:false,
     profile: false,
})

const style = "text-[18px] font-[500] leading-[22px] bg-[#ffffff] text-[#03435f] active:bg-[#55a630]  active:text-[#ffffff]"
const secondStyle = "text-[18px] font-[500] leading-[22px]   bg-[#55a630] text-white"

// const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
//   try {
//     e.preventDefault();
//     logout();
//     addToast('Logged out successfully', {appearance: "success"});
//   } catch (error: any) {
//     addToast(error?.response?.data?.message, {appearance: "error"})
//   }
// }
const dispatch = useDispatch();
const navigate = useNavigate()
  const handleLogout = (e: any) => {
    try {
      dispatch(AUTH_ACTIONS.logout())
      addToast('Logout Successful', { appearance: 'success' })
      navigate('/signin')
  }catch (error: any) {
      console.log(error)
  }
}
    return (
    <div className='fixed top-[7rem] w-[292px] h-[90vh] left-0 drop-shadow-xl bg-[#ffffff]'>
    <Link to="/teacher-dashboard" >
        <div className={bg.overview ? secondStyle : style} onClick={()=>setBg({...bg, overview:true, notifications:false, message:false, profile: false})}>
        <h1 className="flex py-[1rem] active:bg-[#55a630]  font-inter justify-left text-[18pxx] ml-[2rem] "  >
        
        <FiGrid className='text-[2rem] mx-[1.5rem] ' />
        Overview
      </h1>
        </div>
       
       
      </Link>
    <NavLink to="/teacher-dashboard/notifications" >
      <div className={bg.notifications? secondStyle : style} onClick={()=>setBg({...bg, overview:false, notifications:true, message:false, profile: false})}>

 
        <h1 className="flex py-[1rem] font-inter justify-left text-[18pxx] ml-[2rem] ">
        <VscBellDot className='text-[2rem] mx-[1.5rem]' />
          Notifications
        </h1>
        </div>
    </NavLink>
    <NavLink to="/teacher-dashboard/profile" >
      <div className={bg.profile? secondStyle : style} onClick={()=>setBg({...bg, overview:false, notifications:false, message:false, profile: true})}>

 
        <h1 className="flex py-[1rem] font-inter justify-left text-[18pxx] ml-[2rem] ">
        <VscBellDot className='text-[2rem] mx-[1.5rem]' />
          Profile
        </h1>
        </div>
    </NavLink>
    {/* <NavLink to="/teacher-dashboard/messages" >
      <div className={bg.message ? secondStyle : style}onClick={()=>setBg({...bg, overview:false, notifications:false, message:true, profile: false})}>

    
        <h1 className="flex py-[1rem] justify-left font-inter text-[18pxx] ml-[2rem] ">
          {" "}
          <AiOutlineMessage className='text-[2rem] mx-[1.5rem]' />
          Messages
        </h1>
        </div>
      </NavLink> */}
      {/* <NavLink to="/logout" className=" absolute bottom-[3rem] w-[100%] text-[18px]  font-[500]  leading-[22px]  text-lime-600 active:bg-[#55a630] active:text-[#ffffff]">
        <div className="bg-[#ecfccb] w-[80%] mx-auto h-[54px]">
          <h1 className="flex py-[1rem] bg-lime-100 justify-left font-inter text-[18px] text-[#55A630] font-[400] ml-[2rem] items-center">
            {" "}
            <MdLogout className="text-[1.5rem]" />
            &nbsp;Logout
          </h1>
        </div>
      </NavLink> */}

      <button
        onClick={handleLogout}
        className=" absolute bottom-[3rem] w-[100%] text-[18px]  font-[500]  leading-[22px]  text-lime-600 active:bg-[#55a630] active:text-[#ffffff]"
      >
        <h1 className="flex py-[1rem] bg-lime-100 justify-left font-inter text-[18pxx] ml-[2rem] ">
          {' '}
          <MdLogout className="text-[2rem] mx-[1.5rem]" />
          Logout
        </h1>
      </button>

    </div>
  );
}

export default TeacherSideNav;
