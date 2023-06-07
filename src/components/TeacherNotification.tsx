import React, { useState } from "react";
import { Modal } from "antd";
import Appreciation from "../pages/Appreciation";

const dummyData = [
    {
        date: 'Today, 10:15am',
        message: 'BabaJide sent you a reward',
        claimed: true,
        amount: 'N15,000',
    },
    {
        date: 'Today, 10:15am',
        message: 'BabaJide sent you a reward',
        claimed: true,
        amount: 'N15,000',
    },
    {
        date: 'Today, 10:15am',
        message: 'Chioma Awoniyi',
        claimed: false,
        amount: 'N15,000',
    },
]

const Notify = (props: any) => {
    return (
        <div onClick={props.onClick} className="flex justify-between rounded bg-white shadow-md shadow-zinc-800 font-inter h-[100px] px-[3%] mb-[3%]">
            <div className="mt-[2%] text-[14px] text-[#21334F]">
                <div className="font-[600]">{props.date}</div>
                <div className="font-[400]">{props.message}</div>
            </div>
            <div className="mt-[2%] text-right font-[400] text-[14px]">
                <div className={`${props.status===true ? "text-[#34A853] bg-[#e5f4ff]" : "text-[#FBBC05] bg-[#f5f5f5]"} rounded-full p-3`}>{props.status===true ? "Received" : "Pending"}</div>
                <div className="text-[#03435F]">{props.amount}</div>
            </div>
        </div>
    )
}

export const TeacherNotification = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
    return (
        <>
            <Modal width={550} visible={showModal} onCancel={closeModal} footer={null}>
                <Appreciation onClose={closeModal} />
            </Modal>
            <div className="font-inter ml-[30%] mr-[10%] mt-[2%] w-[100%]">
            <h1 className="font-[600] text-[32px] text-[#03435F]">
                Notifications
            </h1>
                <hr className="w-[100%] mb-[5%]"/>
                {dummyData.map((item: any, index: number) => {
                    return (
                        <Notify
                            key={index}
                            date={item.date}
                            message={item.message}
                            amount={item.amount}
                            status={item.claimed}
                            onClick={() => setShowModal(true)}
                        />)
                })}
            </div>
        </>
    );
};
