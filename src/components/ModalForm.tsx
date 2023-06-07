import { useState, useEffect } from 'react';
import axios from 'axios'
import { useToasts } from 'react-toast-notifications'

function ModalForm(): any {
  const [data, setData] = useState({ email: '', amount: '' });
  const { addToast } = useToasts()
  const url = `${process.env.REACT_APP_BASE_URL}/sendreward`;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: any) {
    try{
      e.preventDefault();
      console.log(localStorage.getItem('token'),'at send money component');
      const res = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          "Access-Control-Allow-Origin": '*',
          "Access-Control-Allow-Methods": 'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS',
          "Access-Control-Allow-Headers": 'Content-Type',
        },
      });
      
    }catch(err:any) {
      addToast(err?.response?.data?.message || err?.message || "no response", { appearance: 'error' })
      console.log(err, 'error at send money');
    }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-[80%] shadow-md rounded-md mt-[3%] mx-[10%] px-[16px] border-solid py-[16px] border-[1px]"
        type="text"
        name="virtal_account"
        onChange={handleChange}
        placeholder="vitual_account"
      /> 
      <br />
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
        type="submit"
        value="Send reward"
      />
    </form>
  )}
}

export default ModalForm;