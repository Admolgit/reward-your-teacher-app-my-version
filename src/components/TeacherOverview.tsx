import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import Pagination from '../Pagination/Pagination';
import { Paginate } from '../Pagination/Paginate';

interface notificationProps {
  id: string;
  content: string;
  recieverId: string;
  createdAt: string;
  updatedAt: string;
}

const MostRecent = (props: any) => {
  return (
    <div className="flex justify-between font-inter font-[400] text-[14px] mx-10">
      <div className="mb-2">
        <div className="text-[#03435F]">{props.content}</div>
        <div className="text-[#C4C4C4]">
          Date: {props.date.split('T')[0]} Time:{' '}
          {props.date.split('T')[1].split('.')[0]}
        </div>
      </div>
      <div>
        <button className="rounded-full bg-[#ecfccb] p-3 text-[#55A630]">
          View student
        </button>
      </div>
    </div>
  );
};

function TeacherOverview(id: any) {
  const [balance, setBalance] = useState(0);
  const [notifications, setNotifications] = useState([]);

  const [count] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  let dataCount = notifications.length;

  const Datas = Paginate(notifications, currentPage, count);

  const handleChange = (page: number) => {
    setCurrentPage(page);
  };

  const getBalance = async () => {
    const url = `${process.env.REACT_APP_BASE_URL}/teacher`;
    const id = localStorage.getItem('teacherId');
    axios
      .get(`${url}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response: AxiosResponse) => {
        setBalance(response.data.balance);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const recentNotifications = () => {
    const url = `${process.env.REACT_APP_BASE_URL}/teachers/notification`;
    const id = localStorage.getItem('teacherId');

    axios
      .get(`${url}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response: AxiosResponse) => {
        setNotifications(response.data.notification);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBalance();
    recentNotifications();
  }, []);

  // if (dataCount === 0)
  //   return (
  //     <div className="ml-[4rem] text-treColor2 mt-[3rem]">No data found</div>
  //   );

  return (
    <div className="relative w-[80%] overflow-scroll ml-[295px] mr-[4rem] pl-[85px] h-[100%]">
      <h1 className="font-[600] text-[32px] leading-[39px] font-inter text-[#03435f] mt-[40px]">
        My Dashboard
      </h1>
      <div>
        <div className="shadow-md shadow-zinc-200 pl-[4rem] pt-[0.5rem] mt-[3rem] rounded bg-white mb-[4rem] h-[197px]">
          <svg
            className="absolute right-0"
            width="425"
            height="190"
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
            className="absolute right-0"
            width="331"
            height="190"
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

          <div className=" flex justify-between my-[2rem]">
            <h1 className="text-[16px] font-[500] leading-[19.36px] font-inter text-[#55a630] left-[80px] top-[24px] w-[140px]">
              My Wallet
            </h1>
            <h3 className="font-[500] text-[12px] leading-[15px] mr-[2rem] font-inter text-[#55a630] bg-[#ffffff] py-[0.5rem] px-[0.3rem] rounded-full">
              Account is active
            </h3>
          </div>
          <div className="py-[0.3rem] text-[40px] font-[700] leading-[48px] font-inter left-[80px] text-[#03435f] w-[173px]">
            N {balance}
          </div>
          <div className="flex-row m-auto justify-center relative align-center background: text-[#C4C4C4]">
            Total Money Received
          </div>
        </div>
        <div>
          <div></div>

          <div className="rounded bg-white shadow-md shadow-zinc-200 font-inter">
            <div className="flex justify-between mx-10 font-[600] text-[16px] items-center">
              <div className="mt-5 text-[#03435F] font-[600] text-[16px]">
                <h1>Most Recent</h1>
              </div>
              <div className="mt-10 rounded-full w-58 h-39 bg-[#55A630]">
                <h1 className="text-white p-3">NEW</h1>
              </div>
            </div>
            <div className="mx-10 mt-5">
              <hr className="w-full pb-[4%]" />
            </div>
            <div>
              {Datas.map((notification: notificationProps) => {
                return (
                  <MostRecent
                    key={notification.id}
                    content={notification.content}
                    date={notification.createdAt}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <Pagination
        itemsCount={dataCount}
        pageSize={count}
        currentPage={currentPage}
        onPageChange={handleChange}
      /> */}
    </div>
  );
}

export default TeacherOverview;
