import React from "react";
import { Link } from "react-router-dom";
import{AiFillInstagram,} from 'react-icons/ai'
import{FiTwitter} from 'react-icons/fi'
import {FaYoutubeSquare} from 'react-icons/fa'
import iconw from '../assets/iconw.png'


function Footer() {
    return (
        <div className="h-[100%] sm:h-[40vh] bg-[#000]">
            <div className='w-[100vw] justify-center h-[70%] 2xl:mb-[3rem] xl:mb-[3rem] md:mb-[2rem] flex flex-col items-center'>
                <div className="pt-8 pb-[3rem] justify-center flex">
                    <img src={iconw} alt="" className='-mt-1 rounded-t-full h-12 w-14 flex items-center justify-center mr-0' />
                    <h1 className="text-[#fff] pl-2 text-[24px] text-center font-medium">
                         RewardTeacher
                    </h1>
                </div>
                <div className="flex sm:flex-wrap justify-evenly sm:text-[1rem]">
                    <Link to="#" className="mr-[30px] sm:mr-0 sm:text-[1rem]  md:text-[#fff] text-[#fff] text-[16px]  mx-5">
                        Home
                    </Link>
                    <Link to="#" className="text-[#fff] sm:mx-2 sm:text-[1rem] text-[16px] mx-5">
                        About Reward Teacher
                    </Link>
                    <Link to="#" className="text-[#fff] sm:text-[1rem] text-[16px]  mx-2">
                        Contact
                    </Link>
                </div>
            </div>
            <hr className='w-[90vw] m-auto text-[#fff]' />
            <div className=" text-center w-[100vw] flex justify-between py-[3rem] sm:flex-col sm:justify-center" >
                <div className='mt-auto'>
                    <p className="text-[#fff]  2xl:mt-[-2rem] 2xl:ml-[5rem] text-[16px] sm:text-[1rem] md:ml-[2rem] xl:ml-[4.5rem] lg:ml-[3rem] pt-auto">&copy; 2022 Reward Teacher. All rights reserved</p>
                </div>
                
                <div className=' inline-flex w-[11vw] py-[0] px-[0rem] 2xl:mt-[-2rem] sm:ml-[14rem] ml-left'>
                <hr />
                <AiFillInstagram className="text-[#fff] b-[50%] mr-[1rem] "/>
                <FiTwitter className="text-[#fff] mr-[1rem]"/>
                <FaYoutubeSquare className="text-[#fff] mr-[1rem]"/>
                </div> 
            </div>
        </div>
    );
}

export default Footer;
