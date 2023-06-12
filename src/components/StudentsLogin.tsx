import React, { useState } from 'react';
// import { FcGoogle } from 'react-icons/fc';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthState';
import { Spinner } from './Spinner';
// import {signInWithGoogle} from  './googlebutton/firebase';
import { useToasts } from "react-toast-notifications";
import { useSelector } from 'react-redux';
import { AUTH_ACTIONS } from '../store/authReducer';
import { studentSignin } from '../customApi/authApi';
import { useDispatch } from 'react-redux';


// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// type Props = {
//   onContinue: (data: StudentsLoginType) => void;
// };

export type StudentsLoginType = {
  email: string;
  password: string;
};


function StudentsLogin() {
  const navigate= useNavigate()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {loading, login} = useAuth();
  const [data, setData] = useState({ email: '', password: '' })
  const { addToast } = useToasts();
  const dispatch = useDispatch();

  const {auth } = useSelector((state: any) => state.auth);

  if (auth){
    navigate('/students-dashboard');
    return <Navigate to="/students-dashboard"/>
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  setData((data) => ({ ...data, [e.target.name]: e.target.value }))
  }
  //TODO Validate the Form
  const handleSubmit = async (e: any)=>{
    try{
      e.preventDefault();
      const url = `${process.env.REACT_APP_BASE_URL}/auth/login`;
      const res: any = await studentSignin(url, data)
      
      dispatch(AUTH_ACTIONS.login(res.data));
      addToast("Login Successful", {appearance: "success"});
    } catch (error: any) {
      
      const message = error?.response?.data?.message || error?.message;
      
      addToast(message, {appearance: "error"});
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const socialSignin = (e:React.MouseEvent<HTMLButtonElement>)=>{
  //   e.preventDefault();
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const profile = signInWithGoogle()
  //   .then(profile=>{
  //     if(!profile){
  //       navigate('/signin')
  //     }else{
  //       navigate('/students-dashboard')
  //     }
  //   })}
  return (
    loading ? <><Spinner /></>
    :
      <form className=" w-[745px] justify-center align-center flex-col m-auto ">
        <div className="bg-[#ffffff] justify-center align-center p-[40px] m-[40px]  flex-col order-1 flex-grow-0 w-[745] mt-10  max-w-md mx-auto pb-3 ">
        <h1 className="text-[#21334f] font-[700] text-[20px] w-full h-[22px] leading-[22px] self-start ml-[8px] mb-[20px]">
            Login as Student
          </h1>

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
              onChange={handleChange}
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
              onChange={handleChange}
              id="ps"
              className="border-[1px] border-solid border-[#d9d9d9] bg-[#ffffff] m-[10px] h-[48px] w-[320px] py-[8px] px-[16px]"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-[#80b918] rounded  py-[8px] px-[16px] text-xl text-slate-300 sans font-bold w-[320px] h-[48px]flex-row justify-center align-center order-1 flex-grow-0 m-[10px] "
          >
            Login
          </button>
          <p className="text-center my-[3rem]">
            {' '}
            <span>Don't have account? </span>
            <Link to="/signup">
              <span className="text-lime-600">Create account</span>
            </Link>
          </p>
        </div>
      </form>
  )

}
export default StudentsLogin;
