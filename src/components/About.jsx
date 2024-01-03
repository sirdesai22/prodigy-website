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
                        <p className='text-xl'>Welcome to MAGNUM, our dynamic in-house tech fest. Experience a fusion of coding brilliance, creative design, cybersecurity insights, gaming excitement, and data analytics prowess. MAGNUM is not just an event; it's a celebration of innovation, skills, and limitless possibilities. Join us for a tech extravaganza where you can showcase your talents, connect with industry experts, and embark on a journey of learning and collaboration.<br /><span className='text-2xl font-semibold'>
                        Mark your dates on 09<sup>th</sup> and 10<sup>th</sup> January 2024
                        </span></p>
                        
                        
                        <h2 className='text-5xl md:text-8xl font-bold text-center textShwd' id='events'>Inauguration</h2>
                        <p className='text-2xl'>
                            At the hands of <strong>Dr. H. H. Veerapur</strong>, Principal, KLS Gogte College of Commerce
                            <br />
                            @ 10.30 AM on 9<sup>th</sup> January 2024
                            <br />
                            Venue: Quadrangle, BCA Building</p>
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
