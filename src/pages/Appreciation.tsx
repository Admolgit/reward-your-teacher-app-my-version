import React from 'react';
import image from '../assets/Thumbs Up.png';

type Props = {
    onClose: () => void;
};

function Appreciation({ onClose }: Props) {
  return (
        <div className="w-[509px] h-[408px] bg-[#fff] mt-[50px] flex items-center flex-col">

            <div className="">
                <img src={image} alt="appreciation-img"/>
            </div>
           
            <div className="mt-[1rem] flex flex-col">
                <span className="text-[26px] text-[#21334F] font-normal">Cynthia Morgan sent you an</span>
                <span className="text-[26px] text-[#21334F] font-bold ml-[5rem]">Appreciation</span>
            </div>
            <span className="text-[16px] text-[#21334F] mt-[1rem] font-normal">Hello, thank you for the reward, thank</span>
            <span className="text-[16px] text-[#21334F] font-normal">you so much.</span>
            <button onClick={onClose} className='flex items-center justify-center h-[44px] w-[343px] bg-[#f2f8e8] text-[#55A630] mt-[4rem] font-semibold'>Done</button>
        </div>
    // </div>
  )
}
export default Appreciation