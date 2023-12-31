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
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsam suscipit sed nobis inventore fugit veritatis, sit ipsum libero ullam, placeat aliquam nisi hic vitae quibusdam exercitationem ut aspernatur adipisci ratione dolore mollitia eos officia corporis atque! Fugiat, voluptatibus culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur possimus ullam ex repellendus quas in omnis vitae tempore beatae temporibus.</p>
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