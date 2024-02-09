import React from 'react'
import Gallery from './Gallery'
import { Fade } from 'react-awesome-reveal'
import CountDown from './CountDown'
// import CountDown from './CountDown'

const About = () => {
    return (
        <>
            <Fade direction='left' cascade>
                <div className='flex items-center justify-center mb-10' id='about'>
                    <div className="flex flex-col gap-10 w-[80vw] text-center">
                        <h2 className='text-5xl md:text-8xl font-bold text-center textShwd'>About Prodigy</h2>
                        <p className='text-xl'>"A right direction leads to a rewarding career and faithful life. As you stand at the threshold of making the most important decision towards your collegiate education, the college is well-known for its unique blend of innovation with culture, curriculum enriched with value-added programs, and academic vigor accompanied with simulation.
                        
                            
                        At Jain College of BCA, we believe in nurturing young minds into self-reliant individuals, prepared to face and resolve the trails of life. The BCA program is designed for students aspiring to excel in the field of computers. If you are inclined towards computer-related subjects or studies or even if you have a quick-thinking mind that can analyze the situation at hand and apply concepts towards solving it, then this is the program for you."<br /><span className='text-2xl font-semibold'>
                        Mark your dates on 09<sup>th</sup> and 10<sup>th</sup> February 2024
                        </span></p>

                        {/* <CountDown/> */}
                        
                        
                        {/* <h2 className='text-5xl md:text-8xl font-bold text-center textShwd' id='events'>Inauguration</h2>
                        <p className='text-2xl'>
                            At the hands of <strong>Dr. H. H. Veerapur</strong>, Principal, KLS Gogte College of Commerce
                            <br />
                            @ 10.30 AM on 9<sup>th</sup> January 2024
                            <br />
                            Venue: Quadrangle, BCA Building</p> */}
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
