import React, { useState } from 'react';
// import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthState';
import { useToasts } from 'react-toast-notifications';
import { AUTH_ACTIONS } from '../store/authReducer';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Spinner } from './Spinner';
import { signInWithGoogle } from './googlebutton/firebase';

const initialLoginState = {
  email: '',
  password: '',
};

export type TeachersLoginType = {
  email: string;
  password: string;
};

function TeachersLogin() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { loading, teacherLogin } = useAuth();
  const { addToast } = useToasts();
  const navigate = useNavigate();
  const [data, setData] = useState(initialLoginState);

  const dispatch = useDispatch();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      // const url = "http://localhost:3000/v1/auth/login";
      const url = `${process.env.REACT_APP_BASE_URL}/auth/teacher-login`;
      const res = await axios.post(url, data);

      dispatch(AUTH_ACTIONS.teacherLogin(res.data));
      addToast('Login Successful', { appearance: 'success' });
      navigate('/teacher-dashboard');
    } catch (error: any) {
      const message = error?.response?.data?.message || error?.message;

      addToast(message, { appearance: 'error' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const socialSignin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const profile = signInWithGoogle().then((profile) => {
      if (!profile) {
        navigate('/signin');
      } else {
        addToast('Successfully logged in', { appearance: 'success' });
        navigate('/teacher-dashboard');
      }
    });
  };

  return loading ? (
    <>
      <Spinner />
    </>
  ) : (
    <>
      <form className=" w-[745px] justify-center align-center flex-col m-auto ">
        <div className="bg-[#ffffff] justify-center items-center align-center p-[40px] flex-col order-1 flex-grow-0 w-[745px] mt-10 mx-auto pb-3 inline-flex">
          <h1 className="text-[#21334f] font-[700] text-[20px] w-fit h-[22px] leading-[22px] self-start ml-[170px] mb-[20px]">
            Login as a Teacher
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
              placeholder="Enter your email"
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
            className="bg-[#80b918] rounded  py-[8px] px-[16px] text-xl text-slate-300 sans font-bold w-[320px] h-[48px]flex-row justify-center align-center flex-grow-0 m-[10px] "
          >
            Login
          </button>
          {/* <div className="flex relative h-[50px] text-center text-slate-300 border-b-2 w-[320px]">
           
            <span className="absolute left-[120px] bg-[#ffffff] px-7 bottom-[-10px] text-[#21334F] text-[12px]">Or</span>
          
          </div>
          <button onClick={socialSignin} className="w-[320px]  h-[48px] mt-12 ml-2 border-solid max-w-md align-center  rounded py-[8px] px-[16px] bg-[#fff] border-[#d9d9d9] border-[1px]">
            <FcGoogle className=" my-0 inline-flex text-4xl m-4 text- #21334F " /> Login with Google
          </button> */}
          <p className="text-center my-[3rem]">
            {' '}
            <span>Don't have account? </span>
            <Link to="/teacher-signup">
              <span className="text-lime-600">Create account</span>
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
export default TeachersLogin;
