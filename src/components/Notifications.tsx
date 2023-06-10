import React from 'react';

const dummyData: any = [
  {
    date: 'Today',
    time: '12:00PM',
    message: 'You sent money to Babatunde',
    status: true,
  },
  {
    date: 'Today',
    time: '12:00PM',
    message: 'You funded your wallet with N12,000',
  },
  {
    date: 'Today',
    time: '12:00PM',
    message: 'Cynthia Morgan appreciated you',
  },
];

const Notify = (props: any) => {
  return (
    <div className="flex text-[14px] mb-[3%] p-[2%] shadow-md rounded justify-between">
      <div className="flex flex-col text">
        <div className="mb-[2%]">
          <span className="font-[600]">{props.date}</span>, {props.time}
        </div>
        <div className="font-[400] text-[#21334F]">{props.message}</div>
      </div>
      {props.status ? (
        <div className="text-center w-[10%]">
          <div className="rounded-full text-[#34A853] text-center py-[5%] mb-[2%] bg-lime-100">
            Status
          </div>
          <div>Claimed</div>
        </div>
      ) : null}
    </div>
  );
};

const Notifications = () => {
  return (
    <div className="sm:ml-[40%] sm-[740px]:ml-[42%] sm-[700px]:ml-[44%] ml-[30%] font-inter mt-[3%] w-[100%] mr-[10%]">
      <h1 className="text-[32px] font-[600] text-[#03435F]">Notifications</h1>
      <hr className="mb-[5%]" />
      {dummyData.map((items: any, key: any) => {
        return (
          <Notify
            index={key}
            date={items.date}
            time={items.time}
            message={items.message}
            status={items.status}
          />
        );
      })}
    </div>
  );
};

export default Notifications;
