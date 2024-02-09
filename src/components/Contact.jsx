import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";


const Contact = () => {
    return (
        <div className='w-full lg:flex-row flex flex-col justify-between bg-black text-white items-center text-center lg:text-left py-5'>
            <div className="lg:ml-20 flex flex-col gap-3 p-2 justify-center items-center lg:justify-start">
                <h1 className='lg:text-3xl text-2xl font-semibold'>Jain College of BBA, BCA & Commerce</h1>
                <p className='lg:text-4xl text-3xl font-bold'>Bachelor of Computer Applications</p>
                <p className='text-xl flex items-center gap-2'><FaPhone />Contact: +91 123456789</p>
                <p className='text-xl flex items-center gap-2'><IoIosMail />E-mail: codewavejgi2024@gmail.com</p>
                <div className=" text-3xl">
                    <Link to={'https://www.instagram.com/prodigy_2k24/'} className='flex items-center'><FaInstagram />Instagram</Link>
                </div>
            </div>
            <div className="">
                <img src="/Photos/prodigy.jpg" alt="" className='h-[50vh]' />
            </div>
        </div>
    )
}

export default Contact