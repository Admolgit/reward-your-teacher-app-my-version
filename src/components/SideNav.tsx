import React, { useState } from 'react'
import { FiGrid } from 'react-icons/fi'
import { VscBellDot } from 'react-icons/vsc'
import { MdLogout } from 'react-icons/md'
import { Link, NavLink, useNavigate} from 'react-router-dom';
// import {signOut} from 'firebase/auth';
// import {auth} from "../components/googlebutton/firebase";
import { useToasts } from "react-toast-notifications";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useAuth } from '../context/AuthState'
import { useDispatch } from 'react-redux'
import { AUTH_ACTIONS } from '../store/authReducer'

function SideNav() {
  // const { logout } = useAuth();
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const [bg, setBg] = useState({
    overview: true,
    notifications: false,
    allTeachers: false,
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ping = bg.notifications ? '' : 'hidden'
  const style =
    'text-[18px] font-[500] leading-[22px] bg-[#ffffff] text-[#03435f] active:bg-[#55a630]  active:text-[#ffffff]'
  const secondStyle =
    'text-[18px] font-[500] leading-[22px]   bg-[#55a630] text-white'

  // const logout=async() =>{
  //   await signOut(auth)
  // }
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
    <div className="fixed z-10 top-[7rem] w-[292px] h-[90vh] left-0 drop-shadow-xl bg-[#ffffff] sm:hidden ">
      <Link to="/students-dashboard">
        <div
          className={bg.overview ? secondStyle : style}
          onClick={() =>
            setBg({
              ...bg,
              overview: true,
              notifications: false,
              allTeachers: false,
            })
          }
        >
          <h1 className="flex py-[1rem] active:bg-[#55a630]  font-inter justify-left text-[18pxx] ml-[2rem] ">
            <FiGrid className="text-[2rem] mx-[1.5rem] " />
            Overview
          </h1>
        </div>
      </Link>
      <NavLink to="/students-dashboard/all-teachers">
        <div
          className={bg.allTeachers ? secondStyle : style}
          onClick={() =>
            setBg({
              ...bg,
              overview: false,
              notifications: false,
              allTeachers: true,
            })
          }
        >
          <h1 className="flex py-[1rem] font-inter justify-left text-[18pxx] ml-[2rem] ">
            <svg
              className="h-[2rem] w-[2rem]  mx-[1.5rem]"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_16_397)">
                <path
                  d="M2.8125 1.25H0.3125V3.75H2.8125V1.25Z"
                  stroke="#03435F"
                  stroke-miterlimit="10"
                />
                <path
                  d="M2.8125 6.25H0.3125V8.75H2.8125V6.25Z"
                  stroke="#03435F"
                  stroke-miterlimit="10"
                />
                <path
                  d="M2.8125 11.25H0.3125V13.75H2.8125V11.25Z"
                  stroke="#03435F"
                  stroke-miterlimit="10"
                />
                <path
                  d="M2.8125 16.25H0.3125V18.75H2.8125V16.25Z"
                  stroke="#03435F"
                  stroke-miterlimit="10"
                />
                <path
                  d="M5.9375 2.5H19.6875"
                  stroke="#03435F"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M5.9375 7.5H17.1875"
                  stroke="#03435F"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M5.9375 12.5H14.6875"
                  stroke="#03435F"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M5.9375 17.5H17.1875"
                  stroke="#03435F"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                />
              </g>
            </svg>
            All Teachers
          </h1>
        </div>
      </NavLink>
    <NavLink to="/students-dashboard/notifications" >
      <div className={bg.notifications ? secondStyle : style} onClick={()=>setBg({...bg, overview:false, notifications:true, allTeachers:false})}>

    
        <h1 className="flex py-[1rem] justify-left font-inter text-[18pxx] ml-[2rem] relative ">
          {" "}
          <VscBellDot className='text-[2rem] mx-[1.5rem]' />
          <div className={`${ping}w-[15px] h-[15px] bg-red-500 rounded-full absolute left-[42px] top-[18px] animate-ping`}></div>
          <div className={` ${ping}w-[12px] h-[12px] bg-red-500 rounded-full absolute left-[42px] top-[18px] `}></div>
          Notifications
        </h1>
        </div>
      </NavLink>
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
  )
}

export default SideNav
