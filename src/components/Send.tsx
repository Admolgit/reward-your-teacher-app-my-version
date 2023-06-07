import React from 'react';
import rytmodel from "../assets/rytmodel.png"

function Send(props:any) {
    return (
        <div className='sm:mt-[-8rem] md:mt-[-8rem] lg:mt-[-1rem] mb-[4%] xl:mt-[0rem] 2xl:mt[8rem] overflow-hidden flex bg-gradient-to-br relative from-lime-400 via-lime-600  to-sky-700'>
            <div className='md:w-[50%] w-[30%] mx-[8rem] my-[6rem] h-fit 2xl:ml-[10rem] 2xl:mt-[4rem] lg:mt-[2rem] lg:ml-[10rem] xl:ml-[10rem]'>
                <h1 className='text-[white] text-[40px] md:text-[24px] w-65 lg:mt-[2rem] font-sans font-medium sm:w-[350px] sm:mt-[60px]'>Send surprise funds to your teacher today</h1>
                <p className='text-[white] w-[95%] text-[16px] md:text-[14pxpx] sm:text-[14px] py-5 sm:w-[300px]'>Seamlessly surprise your best teachers with monetary gifts.</p>
                <button className='sm:text-[14px] rounded px-14 py-2 text-[#80B918] bg-[#fff] sm:w-[200px]'>Get Started</button>
            </div>
            <div className='w-[50%] m-0 bg-ryt-mod top-[5%] absolute  right-0 h-[100%]  bg-no-repeat bg-cover bg-center mb-0'>
                <img src={rytmodel} alt="#" className='ml-[-12%] sm:hidden md:h-[300px] lg:mt-[0rem] object-scale-down box-shadow h-[100%] w-[100%]'/>
            </div>
        </div>
    );
}

export default Send;