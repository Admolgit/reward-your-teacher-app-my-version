import React from 'react'
import PageHeader from './pageHeader'
import { useToasts } from 'react-toast-notifications'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const VerifyPayment = () => {
  const { addToast } = useToasts()
  const navigate = useNavigate()
  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault()
      const url = `${process.env.REACT_APP_BASE_URL}/paystack/verify`
      const response = await axios.get(url)
      
      if(response.data.error) {
        addToast(response?.data?.message || response?.data?.message || 'no response', {
            appearance: 'error',
        })
      }
      if (!response.data.error) {
        addToast(response?.data?.message || 'Success: Payment verified', {
          appearance: 'success',
        })
        navigate('/students-dashboard')
      }
    } catch (err: any) {
      addToast(err?.response?.data?.message || err?.message || 'no response', {
        appearance: 'error',
      })
    }
  }

  return (
    <div className="font-inter">
      <PageHeader />
      <div className="w-[40%] rounded font-inter mx-auto my-[10%] pb-[1%] bg-white shadow-md">
        <form>
          {/* <input
            className="w-[70%] mx-[15%] text-white bg-[#55A630] cursor-pointer rounded-md mt-[3%] mb-[3%] border-solid py-[1%] border-[1px]"
            onSubmit={handleSubmit}
            type="button"
            value="Verify Payment"
          /> */}
          <button
            onClick={handleSubmit}
            className="w-[70%] mx-[15%] text-white bg-[#55A630] cursor-pointer rounded-md mt-[3%] mb-[3%] border-solid py-[1%] border-[1px]"
            //   className="mb-5 md:bg-lime-600 bg-lime-600 text-slate-200 text-[14px] px-10 my-0 py-3 rounded bg-[#80B918] text-[#fff]"
          >
            Verify Payment
          </button>
        </form>
      </div>
    </div>
  )
}
