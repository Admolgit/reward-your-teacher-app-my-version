// import  { useEffect, useState } from "react";
// import axios from "axios";


// type Notifications = {
//     claimed:boolean,
//     createdAt:string,
//     updatedAt:string,
//     read:boolean,
//     title:string
// }

//  function Notification () {
   
//      const [notifications, setNotifications] = useState <Array<Notifications>>([])
//      const [filter, setFilter] = useState <Array<Notifications>>([])
// const res = async()=>{
// const notifications= await axios.get('https://rewardyteachers-default-rtdb.firebaseio.com/notifications.json')
// const response = notifications.data
// setNotifications(Object.values(response))
// setFilter(Object.values(response))
// }



// useEffect(()=>{
// res()
// },[])

//     const findDay = (n: Number) => {
    

//     if (n === 0) return "Sunday";
//     if (n === 1) return "Monday";
//     if (n === 2) return "Tuesday";
//     if (n === 3) return "Wednesday";
//     if (n === 4) return "Thursday";
//     if (n === 5) return "Friday";
//     if (n === 6) return "Saturday";
//   };
//   return (
//     <div className="ml-[330px] h-[90vh] w-[100%]">
//       <h1 className="border-b-2 drop-shadow-xl  px-[4rem] pb-[4rem] pt-[4rem] text-[32px] font-[600] leading-[38.7px] text-[#03435f] font-inter border-slate-300">
//         Notifications
//       </h1>
//       <h1 className={`text-right bg-[#55a630] p-2 ${filter.filter(x=>x.read===false).length?"":"hidden"} m-1 absolute text-2xl text-white  top-[14rem] right-[6rem] rounded-full w-fit`}>New</h1>
//       {notifications.map((x,idx) => (
//         <div
//           key={idx}
//           onClick={async ()=> {
//             console.log(x)
//             notifications[idx].read ? notifications[idx].read=true : notifications[idx].read=true
//            console.log(notifications)
//         }   
//           }
//           className="flex justify-between w-[80%] px-[4rem] pt-3 border-b-2 border-slate-300"
//         >
//           <div className="flex-col">
//             <h2 className="text-bold">
//               <span className="font-[600] text-2xl text-[#03435f]">
//                 {new Date(Date.now()).getFullYear() ===
//                   new Date(x.createdAt).getFullYear() &&
//                   new Date(Date.now()).getMonth() ===
//                     new Date(x.createdAt).getMonth() &&
//                   new Date(Date.now()).getDate() ===
//                     new Date(x.createdAt).getDate()
//                 ?"Today":findDay(new Date(x.createdAt).getDay())}
//               </span>{" "}
//               <span>{new Date(x.createdAt).toLocaleTimeString()}</span>
//             </h2>
//             <h2 className="text-slate-300">
//               {new Date(x.createdAt).getDate() +
//                 "/" +
//                 new Date(x.createdAt).getMonth() +
//                 "/" +
//                 new Date(x.createdAt).getFullYear()}
//             </h2>
//             <h2>{x.title}</h2>
//           </div>
//           <div>
//             <h2
//               className={`${
//                 x.claimed === true ? "bg-lime-600" : "bg-yellow-500"
//               } rounded-full p-1`}
//             >
//               status
//             </h2>
//             <h2>{x.claimed ? "claimed" : "pending"}</h2>
//           </div>
//         </div>
//       ))}


import React, { useState } from "react";
// import { Link } from "react-router-dom";
import ClaimedRewards from "./ClaimedRewards";
import UnclaimedRewards from "./UnclaimedRewards";


function RewardStatus() {
    const [claims, setClaims] = useState(true);
    const [unclaims, setUnclaims] = useState(false);

    const handleClaims = () => {
        setUnclaims(false);
        setClaims(true);
    }

    const handleUnclaims = () => {
        setUnclaims(true);
        setClaims(false);
    }


  const [claimed, setClaimed] = useState({
    claimed: true,
    unclaimed: false,
  });
  const claimedStyle = "flex flex-col items-center text-[#55a630]";
  const unclaimedStyle = "flex flex-col items-center text-[#C4C4C4]";
  return (
    <div className="font-inter mt-[3%] cursor-pointer w-[100%] sm:ml-[40%] sm-[740px]:ml-[42%] sm-[700px]:ml-[44%] ml-[30%] mr-[0] mr-[4rem] mb-[5%]">
      <h1 className="mb-[3%] font-[600] text-[25px] text-[#03435F]">Rewards</h1>
      
      <div className="flex">
      
        <div onClick={handleClaims}>
        <div
          className={claimed.claimed ? claimedStyle : unclaimedStyle}
          onClick={() =>
            setClaimed({
              ...claimed,
              claimed: true,
              unclaimed: false,
            })
          }
            >
          <div>Claimed</div>
          <div>
            <hr className={claimed.claimed ? "border-2 w-[25rem] border-[#55a630]" : "w-[25rem]"} />
          </div>
        </div>
        </div>

       

       
       
            <div onClick={handleUnclaims}>
        <div
          className={claimed.unclaimed ? claimedStyle : unclaimedStyle}
          onClick={() =>
            setClaimed({
              ...claimed,
              claimed: false,
              unclaimed: true,
            })
          }
         >
          <div >Unclaimed Rewards</div>
          <div>
            <hr className={claimed.unclaimed ? "border-2 w-[25rem] border-[#55a630]" : "w-[25rem]"} />
          </div>
        </div>
        </div>

        
       

      </div>
      {claims && (
<ClaimedRewards />
)}

{unclaims && (
<UnclaimedRewards />
)}
    </div>
  );
}

// export default Notification;
export default RewardStatus;
