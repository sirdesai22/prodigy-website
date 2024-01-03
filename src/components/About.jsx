import React from 'react'
import Gallery from './Gallery'
import { Fade } from 'react-awesome-reveal'

const About = () => {
    return (
        <>
        <Fade direction='left' cascade>
            <div className='flex items-center justify-center mb-10' id='about'>
                <div className="flex flex-col gap-10 w-[80vw] text-center">
                    <h2 className='text-5xl md:text-8xl font-bold text-center textShwd'>About Magnum</h2>
                    <p className='text-xl'>Welcome to MAGNUM, our dynamic in-house tech fest. Experience a fusion of coding brilliance, creative design, cybersecurity insights, gaming excitement, and data analytics prowess. MAGNUM is not just an event; it's a celebration of innovation, skills, and limitless possibilities. Join us for a tech extravaganza where you can showcase your talents, connect with industry experts, and embark on a journey of learning and collaboration.<br/><span className='text-2xl font-semibold'>MAGNUM - where brilliance meets innovation!</span></p>
                    <h2 className='text-3xl font-bold underline'>Date: 09<sup>th</sup> and 10<sup>th</sup> January 2024</h2>
                    <p className='text-2xl'>Inaugration at <span className='font-semibold'>9am on 9<sup>th</sup> January 2024</span> by the principal of Gogte College of Commerce - <span className='font-semibold'>H.H. Veerapur</span></p>
                </div>
            </div>
            {/* <div className="flex justify-center">
                <Gallery/>
            </div> */}
            </Fade>
        </>
    )
}

export default About