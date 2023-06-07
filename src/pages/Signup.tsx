import React, { useState } from 'react'
// import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom'
import Ryticon from '../components/Ryticon'
import { apiPost } from '../utils/apiHelpers'
import { useToasts } from 'react-toast-notifications'

function Signup() {
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const [data, setData] = useState({ fullName: '', email: '', password: '' });

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault()
      const response = await apiPost('/auth/register', data, {})
      console.log('here is it', response.data)

      if (response.data) {
        addToast(response?.data?.message || 'Success: Account created', {
          appearance: 'success',
        })
        navigate('/signin?type=student')
      } else {
        navigate('/signup')
      }
    } catch (err: any) {
        addToast(err?.response?.data?.message || err?.message || 'no response', {
        appearance: 'error',
      })
    }

    //TODO show modal of successful registration OR error in the modal if there is error.
  }
  //   const signin =async(e:any)=>{
  //     e.preventDefault();
  //     const profile=await signInWithGoogle()
  //     console.log(profile)
  //     if(!profile){
  //       navigate('/signin')
  //     }else{
  //       console.log(profile.displayName,profile.email,'signin log')
  //       const response= await apiPost('/auth/register',{name:profile.displayName,email:profile.email},{})
  // console.log(response)
  // navigate("/students-dashboard")
  //     }
  //   }
  return (
    <div className="bg-[#e5e5e5] w-[1440px] h-[1024px]] ">
      <span className="inline-flex h-[29px] text-[24px] mt-[81px] mb-[45px] leading-[29.05px] mx-[30%] justify-center align-center text-center">
        <Ryticon className='mt-8 rounded-full h-16 w-16 flex items-center justify-center" alt="#" ' />
        <h1 className="text-4xl text-center mt-10 font-inter font-[600] text-[#55a630]">
          Reward your Teacher
        </h1>
      </span>
      <form className=" w-[745px] h-[705px] justify-center align-center flex-col m-auto ">
        <div className="bg-[#ffffff] justify-center align-center p-[80px] m-[40px]  flex-col order-1 flex-grow-0 w-[745] mt-10  max-w-md mx-auto h-[705px] pb-3 ">
          <h1 className="text-[#21334f] text-left  font-[700] text-[18px] w-[225px] h-[22px] leading-[22px] font-inter order-0 flex-grow-0  ">
            Sign Up as an old Student
          </h1>

          <div className="flex-col   my-3 max-w-md flex">
            <label
              htmlFor="fullName"
              className="font-[400] text-[12px] leading-[15px] ml-2 text-[#21334f]"
            >
              Fullname
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              onChange={HandleChange}
              className="border-[1px] border-solid border-[#d9d9d9] bg-[#ffffff] m-[10px] h-[48px] w-[320px] py-[8px] px-[16px]"
              placeholder="Enter your fullname"
            />
          </div>
          <div className="flex-col my-3 max-w-md flex">
            <label
              htmlFor="email"
              className="font-[400] text-[12px] ml-2 leading-[15px] text-[#21334f]"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              onChange={HandleChange}
              id="email"
              className="border-[1px] border-solid border-[#d9d9d9] ml-2  bg-[#ffffff] m-[10px] h-[48px] w-[320px] py-[8px] px-[16px]"
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex-col  my-3 max-w-md flex">
            <label
              htmlFor="ps"
              className="font-[400] text-[12px] ml-2 leading-[15px] text-[#21334f]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={HandleChange}
              id="ps"
              className="border-[1px] border-solid border-[#d9d9d9] bg-[#ffffff] m-[10px] h-[48px] w-[320px] py-[8px] px-[16px]"
            />
          </div>
          <button
            onClick={handleClick}
            className="bg-[#80b918] rounded  py-[8px] px-[16px] text-xl text-slate-300 sans font-bold w-[320px] h-[48px]flex-row justify-center align-center order-1 flex-grow-0 m-[10px] "
          >
            Sign Up
          </button>
          {/* <div className="flex bg-red-300 h-[0] ml-12 text-center text-slate-300">
            <div className="w-[40%] h-[0] border-t-2 mt-3 px-[0] border-slate-200">
              <hr />
            </div>{" "}
            or
            <div className="w-[40%] h-[0] border-t-2 mt-3 px-[0] border-slate-200">
              <hr />
            </div>
          </div>

          <button onClick={signin} className="w-[320px]  h-[48px] mt-12 ml-2 border-solid max-w-md align-center  rounded py-[8px] px-[16px] bg-[#fff] border-[#d9d9d9] border-[1px]">
            <FcGoogle className=" my-0 inline-flex" /> Sign up with Google
          </button> */}

          <p className="text-center my-[2rem]">
            {' '}
            <span>Already have an account? </span>
            <Link to="/signin?type=student">
              <span className="text-lime-600">Sign in</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Signup
