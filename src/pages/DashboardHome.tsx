import React from 'react'
import { useAuth } from "../context/AuthState"
import {useNavigate} from "react-router-dom"

const DashboardHome:React.FC = () => {
  const {isAuthenticated} = useAuth();
  const navigate = useNavigate();
  
  return (
    !isAuthenticated ? 
    <>
      <button className='bg-red-500' onClick={() => navigate('/signin')}>Go Back</button>
    </>
    :
    <div className='bg-blue-light-500'>DashboardHome</div>
  )
}

export default DashboardHome