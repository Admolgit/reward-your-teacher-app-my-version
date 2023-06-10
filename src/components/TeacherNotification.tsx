import React, { useState, useEffect, useCallback } from 'react';
import { Modal } from 'antd';
import { apiGet } from '../utils/apiHelpers';
import axios from 'axios';
import Appreciation from '../pages/Appreciation';

const Notify = (props: any) => {
  return (
    <div
      onClick={props.onClick}
      className="flex justify-between rounded bg-white shadow-md shadow-zinc-800 font-inter h-[100px] px-[3%] mb-[3%]"
    >
      <div className="mt-[2%] text-[14px] text-[#21334F]">
        <div className="font-[600]">Date: {props.date.split('T')[0]} Time: {props.date.split('T')[1].split('.')[0]}</div>
        <div className="font-[400]">{props.message}</div>
      </div>
      <div className="mt-[2%] text-right font-[400] text-[14px]">
        <div
          className={`${
            props.status === true
              ? 'text-[#34A853] bg-[#e5f4ff]'
              : 'text-[#FBBC05] bg-[#f5f5f5]'
          } rounded-full p-3`}
        >
          {props.status === 'Claim' ? 'Claim' : 'Unclaim'}
        </div>
        <div className="text-[#03435F]">{props.amount}</div>
      </div>
    </div>
  );
};

export const TeacherNotification = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const [loading, setLoading] = useState(false);

  const [teacherNotification, setTeacherNotification] = useState([]);

  const getTeacherNotification = useCallback(async () => {
    try {
      setLoading(true)
      const recieverId = localStorage.getItem('teacherId');
      const teachers = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/teachers/notification/${recieverId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (teachers.data) {
        setTeacherNotification(teachers?.data?.notification);
      }
      setLoading(false);
    } catch (err: any) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getTeacherNotification();
  }, []);

  if(loading) {
    <p>Teacher notifications loading...</p>
  }
  
  return (
    <>
      <Modal
        width={550}
        visible={showModal}
        onCancel={closeModal}
        footer={null}
      >
        <Appreciation onClose={closeModal} appreciationData={teacherNotification} />
      </Modal>
      <div className="font-inter ml-[30%] mr-[10%] mt-[2%] w-[100%]">
        <h1 className="font-[600] text-[32px] text-[#03435F]">Notifications</h1>
        <hr className="w-[100%] mb-[5%]" />
        {teacherNotification.map((item: any, index: number) => {
          return (
            <Notify
              key={index}
              date={item.createdAt}
              message={item.content}
              amount={item.content.split('')[1]}
              status={item.status}
              onClick={() => setShowModal(true)}
            />
          );
        })}
      </div>
    </>
  );
};
