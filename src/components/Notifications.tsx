import React, { useState } from 'react';
import isAuthenticated from '../authProvider/auth';
import { getNotification } from '../customApi/studentApi';

const Notify = (props: any) => {
  return (
    <div className="flex text-[14px] mb-[3%] p-[2%] shadow-md rounded justify-between">
      <div className="flex flex-col text">
        <div className="mb-[2%]">
          <span className="font-[600]">{props.date.split('T')[0]}</span>, {props.date.split('T')[1].split('.')[0]}
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
  const [studentNotifications, setStudentNotifications] = useState([]);
  const {token, user} = isAuthenticated();

  const tok = token.accessToken;
  const senderId = user.id
  const url = `${process.env.REACT_APP_BASE_URL}/users/student-notification/${senderId}`;

  const notifications = async () => {
    try {
      const notificationsStudent: any = await getNotification(url, tok);
      setStudentNotifications(notificationsStudent.data.notification)
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    notifications();
  }, []);

  return (
    <div className="sm:ml-[40%] sm-[740px]:ml-[42%] sm-[700px]:ml-[44%] ml-[30%] font-inter mt-[3%] w-[100%] mr-[10%]">
      <h1 className="text-[32px] font-[600] text-[#03435F]">Notifications</h1>
      <hr className="mb-[5%]" />
      {studentNotifications.map((items: any) => {
        return (
          <Notify
            index={items.id}
            date={items.createdAt}
            message={items.content}
            status={items.status}
          />
        );
      })}
    </div>
  );
};

export default Notifications;
