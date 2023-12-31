import React from 'react'
import EventCard from './EventCard'
import Navbar from './Navbar'
import events from '../data/eventsData.js'
import developers from '../data/developers.js'
import organisers from '../data/organiserData.js'
import faculties from '../data/facultyOrganiser.js'
import OrganiserCard from './OrganiserCard.jsx'
import About from './About.jsx'
import '../index.css'
import Footer from './Footer.jsx'
import PreLoader from './PreLoader.jsx'
import { Fade } from 'react-reveal'


const Home = () => {

    // const facultyTeam = events.find(event => event.id === eventId);

    // text-transparent bg-clip-text inline-block bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500

    // style={{ backgroundImage: `url(/Photos/coding.jpg)` }}
    return (
        <>
            {/* <PreLoader /> */}
            <Navbar />
            <div className="bg-gradient-to-b from-slate-200 to-cyan-100"> {/* bg-[#F8F7F4] bg-[#020b34]  bg-[#000310]*/}
                <div className="flex flex-col justify-center items-center w-full h-screen mb-5 video-container" id='home'>

                    <video autoPlay loop muted playsinline="true" disablePictureInPicture="true" className="video-bg absolute">
                        <source src="/Photos/videoBg.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <h1 className='samakran w-full text-center text-[5rem] font-extrabold lg:text-[17rem]  z-40 text-amber-500 shadoww'>MAGNUM 24</h1>
                    <p className='text-3xl font-semibold lg:text-5xl text-amber-400 z-40 shadoww'>Your tagline here!</p>
                </div>

                <About />

                <Fade left>
                    <h2 className='text-5xl md:text-8xl font-bold text-center textShwd' id='events'>Events</h2>
                </Fade>
                <div className="flex flex-col justify-center items-center">
                    {
                        events.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))
                    }
                </div>
                
                <Fade left>
                <h2 className='text-4xl md:text-7xl font-bold text-center textShwd' id='organisers'>Faculty Co-ordinators</h2>
                </Fade>
                <div className="flex flex-col md:flex-row w-full gap-10 items-center justify-evenly my-5">
                    {
                        faculties.map((faculty) => (
                            <OrganiserCard key={faculty.id} name={faculty.name} phno={faculty.phno} photo={faculty.photo} desig={faculty.designation} />
                        ))
                    }
                </div>

                <Fade left>
                <h2 className='text-4xl md:text-7xl font-bold text-center textShwd'>Event Co-ordinators</h2>
                </Fade>
                <div className="flex flex-col md:flex-row w-full gap-10 items-center justify-evenly my-5">
                    {
                        organisers.map((organiser) => (
                            <OrganiserCard key={organiser.id} name={organiser.name} phno={organiser.phno} photo={organiser.photo} desig={organiser.designation} />
                        ))
                    }
                </div>

                <Fade left>
                <h2 className='text-4xl md:text-7xl font-bold text-center textShwd'>Developers</h2>
                </Fade>
                <div className="flex flex-col md:flex-row w-full gap-10 items-center justify-evenly mt-5 pb-5">
                    {
                        developers.map((developer) => (
                            <OrganiserCard key={developer.id} name={developer.name} phno={developer.phno} photo={developer.photo} />
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home