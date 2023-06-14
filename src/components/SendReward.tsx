import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import isAuthenticated from "../authProvider/auth";
import { sendRewardToTeacher } from "../customApi/studentApi";

export default function SendReward({ close }: any) {
  const [data, setData] = useState({
    account: "",
    amount: "",
    senderEmail: "",
  });
  const { addToast } = useToasts();
  const { token } = isAuthenticated();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const tok = token.accessToken;

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const url = `${process.env.REACT_APP_BASE_URL}/paystack/sendreward`;
      // Following Caleb's guide here
      const res = await sendRewardToTeacher(url, data, tok);
      
      if (!res.data.error) {
        close();
        addToast(res?.data?.message, { appearance: "success" });
      }
      if (res?.data?.error) {
        addToast(res?.data?.message || res?.data?.message || "no response", {
          appearance: "error",
        });
      }
    } catch (err: any) {
      addToast(err?.response?.data?.message || err?.message || "no response", {
        appearance: "error",
      });
    }
  };

  return (
    <div className='flex flex-col justify-center my-[10%]'>
      <form className='absolute drop-shadow-lg max-w-[509px] top-[23%] right-[20%] w-full mx-auto bg-white'>
        <div className='flex ml-[30%] items-center justify-between mt-8 px-10'>
          <h2 className='text-[18px] text-blue-900 font-bold text-center'>
            Send Reward
          </h2>
          <h2 className='cursor-pointer' onClick={() => close()}>
            X
          </h2>
        </div>
        <hr className='w-[100%] border-1 mb-4' />
        <div className='flex flex-col text-blue-900 px-10 py-2'>
          <label>Your Email</label>
          <input
            className='bg-white outline outline-2 outline-gray-300  mt-1 p-2'
            type='text'
            name='senderEmail'
            onChange={handleChange}
            placeholder='Enter your email'
          />
        </div>
        <div className='flex flex-col text-blue-900 px-10 py-2'>
          <label>Account</label>
          <input
            className='bg-white outline outline-2 outline-gray-300  mt-1 p-2'
            type='text'
            name='account'
            onChange={handleChange}
            placeholder='Enter Account'
          />
        </div>
        <div className='flex flex-col text-blue-900 px-10 py-2'>
          <label>Reward Amount</label>
          <input
            className='bg-white outline outline-2 outline-gray-300  mt-1 p-2'
            type='text'
            name='amount'
            onChange={handleChange}
            placeholder='NGN'
          />
        </div>
        <button
          onClick={handleSubmit}
          className='w-[85%] text-[17px] mt-9 mb-11 py-3 mx-10 bg-[#55A630] text-white rounded-md'
        >
          Send
        </button>
      </form>
    </div>
  );
}
