import { CgAdd } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import Image from '../assets/imageg.png'
// import { apiPost } from "../utils/apiHelpers";
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

function Overview() {
  // const navigate = useNavigate();
  const [account, setAccount] = useState(0)
  const [totalReward, setTotalReward] = useState(0)

  const email = localStorage.getItem('email')

  const userBalance = useCallback(async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/users/user-balance`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    )
    setAccount(response.data)
  }, [email])

  const totalSent = useCallback(async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/users/totalrewardsent`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    )
    // console.log('here',response.data)
    setTotalReward(response.data.total)
  }, [email])

  useEffect(() => {
    userBalance()
    totalSent()
  }, [totalSent, userBalance])

  return (
    <div className="mt-[3%] w-[100%] md:ml-[40%] md:w-[70%] sm-[700px]:ml-[46%] ml-[30%] mr-[4rem] mb-[5%]">
      <h1 className="mb-[1%] font-[600] text-[25px] text-[#03435F]">
        My Dashboard
      </h1>
      <div>
        <div className="w-[80%] drop-shadow-md shadow-zinc-800 pl-[4rem] pt-[0.5rem] mt-[2%] rounded bg-white mb-[5%] h-[197px]">
          <svg
            className="absolute right-0 top-0"
            width="402"
            height="197"
            viewBox="0 0 402 197"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M343.045 327.677C222.997 385.961 78.4318 335.891 20.1483 215.844C-38.1351 95.7968 37.0074 2.8746 157.055 -55.4089C277.102 -113.692 396.594 -115.266 454.878 4.7809C513.161 124.828 463.092 269.394 343.045 327.677Z"
              fill="#80B918"
              fill-opacity="0.05"
            />
          </svg>
          <svg
            className="absolute right-0 top-0"
            width="311"
            height="197"
            viewBox="0 0 311 197"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M270.407 305.881C176.055 351.69 62.4312 312.337 16.6224 217.984C-29.1863 123.632 29.873 50.598 124.226 4.78928C218.579 -41.0195 312.496 -42.2565 358.304 52.0963C404.113 146.449 364.76 260.073 270.407 305.881Z"
              fill="#80B918"
              fill-opacity="0.05"
            />
          </svg>

          <div className=" flex justify-between w-[85%] items-center">
            <div className="text-[16px] font-[500] leading-[19.36px] font-inter text-[#55a630] left-[80px] w-[140px]">
              My Wallet Balance
            </div>
            <div className="font-[500] text-[12px] leading-[15px] mr-[2rem] font-inter text-[#55a630] bg-[white] py-[0.5rem] px-[0.3rem] z-40 rounded-full">
              Account is active
            </div>
          </div>
          <div className="py-[0.3rem] text-[30px] font-[700] leading-[48px] font-inter left-[80px] top-[59px] text-[#03435f] w-[173px]">
            N{account.toLocaleString('en', { useGrouping: true })}
          </div>
          <div className="flex-row justify-center relative align-center">
            <Link to="/fund-wallet">
              <div>
                <button className="flex px-[1%] rounded py-[1%] mt-[14px] ml[-2%] left-[70px] items-center border-radius-[4px] h-[48px]  bg-[#55a630] font-inter text-[16px] leading-[19px] text-white order-1 w-[25%] md:w-[50%] ">
                  <CgAdd className="text-white absolute w-8 h-8 p-auto md:left-[4%] left-[2%]" />
                  <span className="text-white absolute text-[16px] p-auto mx-auto md:left-[20%] left-[10%]">
                    Add money
                  </span>
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="shadow-md rounded w-[80%] overflow-hidden">
          <div>
            <img src={Image} alt="#" className="w-[100%] h-[86px] mb-[39px]" />
          </div>
          <div className=" flex flex-row-reverse mt-[2rem] justify-between w-[100%]">
            <div className="relative border-[2px]">
              <svg
                className="w-[68px] h-[68px] rounded-full absolute right-[3rem] p-4 m-[1rem] bg-[rgba(128,185,24,0.1)]"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.598 19.505C30.198 18.806 29.55 18.308 28.775 18.101C28 17.894 27.192 18.005 26.546 18.382L21.281 21.073C20.729 20.422 19.917 20 19 20H11C9.583 20 8.12 20.771 7.139 22H6C6 21.448 5.552 21 5 21H2C1.448 21 1 21.448 1 22V30C1 30.552 1.448 31 2 31H5C5.552 31 6 30.552 6 30H17C17.741 30 18.767 29.692 19.324 29.32L29.49 23.604L29.59 23.54C30.995 22.514 31.4 20.892 30.598 19.505ZM4 29H3V23H4V29ZM28.454 21.893L18.283 27.614C17.988 27.809 17.353 28 17 28H6V24H7.65C7.99 24 8.307 23.827 8.491 23.541C9.084 22.619 10.092 22 11 22H19C19.552 22 20 22.449 20 23C20 23.551 19.552 24 19 24H13C12.448 24 12 24.448 12 25C12 25.552 12.448 26 13 26H19C20.654 26 22 24.654 22 23C22 22.984 21.995 22.969 21.995 22.954L27.504 20.137C27.735 20.002 28.005 19.966 28.258 20.033C28.515 20.102 28.73 20.267 28.865 20.504C29.219 21.115 28.848 21.591 28.454 21.893ZM4 17H28C28.553 17 29 16.552 29 16V2C29 1.448 28.553 1 28 1H4C3.448 1 3 1.448 3 2V16C3 16.552 3.448 17 4 17ZM8.899 3H23.102C23.5 4.956 25.044 6.5 27 6.899V11.101C25.044 11.5 23.5 13.044 23.102 15H8.899C8.5 13.044 6.956 11.5 5 11.101V6.899C6.956 6.5 8.5 4.956 8.899 3ZM5 13.184C5.847 13.486 6.514 14.153 6.816 15H5V13.184ZM25.185 15C25.487 14.153 26.153 13.486 27 13.184V15H25.185ZM27 4.815C26.152 4.514 25.486 3.847 25.185 3H27V4.815ZM6.816 3C6.514 3.847 5.847 4.514 5 4.816V3H6.816Z"
                  fill="#55A630"
                />
                <path
                  d="M16 14C18.757 14 21 11.757 21 9C21 6.243 18.757 4 16 4C13.243 4 11 6.243 11 9C11 11.757 13.243 14 16 14ZM16 6C17.654 6 19 7.346 19 9C19 10.654 17.654 12 16 12C14.346 12 13 10.654 13 9C13 7.346 14.346 6 16 6Z"
                  fill="#55A630"
                />
              </svg>
            </div>
            <div className="flex-col mb-[3%] ">
              <h1 className="text-[#03435f] ml-[65px] mt-[85] font-[600] text-[16px] leading-[19px]">
                Total Money Sent
              </h1>{' '}
              <h1 className="text-[#03435f] text-[30px] ml-[65px] mt-[2rem] font-[700] leading-[38.73px] font-inter">
                N{totalReward.toLocaleString('en', { useGrouping: true })}
              </h1>
              <p className="text-[#55a630] bg-[rgba(128,185,24,0.1)] w-[30%] text-center rounded-full px-[1%] font-[500] text-[12px] ml-[65px] font-inter leading-[15px]">
                sent
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
