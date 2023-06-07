import React, { useState } from 'react'
import PageHeader from './pageHeader'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import axios from 'axios'
// import { apiPost } from "../utils/apiHelpers";

export const AddMoney = () => {
  const [data, setData] = useState({ email: '', amount: '' });
  const { addToast } = useToasts()
  
  const url = `${process.env.REACT_APP_BASE_URL}/paystack/pay`;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: any) {
    try{
      e.preventDefault();

      //Following Caleb's guide here
      const res = await axios.get(`${url}?email=${data.email}&amount=${data.amount}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      
        if(!res.data.error){
          window.location.replace(res.data.url);
        }
        if(res?.data?.error){
          addToast(res?.data?.message || res?.data?.message || "no response", { appearance: 'error' })
        }
    }catch(err: any) {
      addToast(err?.response?.data?.message || err?.message || "no response", { appearance: 'error' })
    }
  }

  return (
    <div className="font-inter">
      <PageHeader />
      <Link to="/students-dashboard">
        <div className="mt-[3%] ml-[3%] cursor-pointer font-bold text-[#55A630]">
          {`<<`}Back to Dashboard
        </div>
      </Link>
      <div className="w-[40%] rounded font-inter mx-auto my-[2%] pb-[1%] h-[45%] bg-white shadow-md">
        <div className="flex items-center ml-[40%] pt-[5%] text-[#03435F] font-[600] text-[18px]">
          <div>Fund Wallet</div>
        </div>
        <hr className="mt-[3%]" />
        <form>
          <input
            className="w-[80%] shadow-md rounded-md mt-[3%] mx-[10%] px-[16px] border-solid py-[16px] border-[1px]"
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="Email"
          />
          <br />
          <input
            className="w-[80%] shadow-md rounded-md mt-[3%] mb-[3%] mx-[10%] px-[16px] border-solid py-[16px] border-[1px]"
            type="text"
            name="amount"
            onChange={handleChange}
            placeholder="Amount"
          />
          <input
            className="w-[80%] cursor-pointer shadow-none focus:shadow-lg text-white bg-[#55A630] rounded-md mt-[3%] mb-[3%] mx-[10%] border-solid py-[1%] border-[1px]"
            type="button"
            onClick={handleSubmit}
            value="Pay With Paystack"
          />
        </form>
      </div>
    </div>
  )
}
