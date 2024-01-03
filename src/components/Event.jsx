import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import eventsData from '../data/eventsData.js'
import eventBg from '../data/eventBg.js'
import OrganiserCard from './OrganiserCard.jsx'
import Footer from './Footer.jsx';
import { Fade } from 'react-awesome-reveal'
import HomeBtn from './HomeBtn.jsx';

const Event = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { eventId } = useParams();

    const selectedEvent = eventsData.find(event => event.id === eventId);
    const bgImg = eventBg.find(bg => bg.id === eventId);
    // console.log(bgImg)


    if (!selectedEvent) {
        // Handle the case when the event with the given ID is not found
        return (
            <div>
                <h1>Event not found!</h1>
            </div>
        );
    }
    const rules = selectedEvent.rules

    return (
        <>
        <HomeBtn/>
            <div className='pb-5 bg-gradient-to-b from-slate-200 to-indigo-200'>
                <div className=' flex flex-col justify-center items-center h-screen' style={{ backgroundImage: `url(${bgImg.img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} >
                    <h1 className=' text-center font-extrabold  md:text-[12rem] text-7xl text-amber-500 p-7 shadoww'>{selectedEvent.name}</h1>
                    <p className='text-3xl font-semibold text-amber-500 shadoww text-center shadoww bg-[#0005] px-2'>"{selectedEvent.tagline}"</p>
                </div>
                <hr />
                <div className="flex flex-col gap-10 text-center items-center mt-10">
                    <h2 className='text-5xl md:text-8xl font-bold text-center textShwd'>About</h2>
                    <Fade direction='left' cascade>
                        <p className='text-xl w-[80vw]'>{selectedEvent.description}</p>
                    </Fade>
                </div>

                <div className='mt-32 max-w-full flex flex-col gap-7 justify-center items-center'>
                    <h2 className='text-5xl md:text-8xl font-bold text-center textShwd'>Rules & Regulations</h2>
                    <div className='rounded-lg shadow-xl px-4 bg-slate-100'>
                        <Fade direction='left' cascade>
                            <ul className='list-disc md:text-2xl text-xl flex flex-col gap-5 w-[80vw] px-5 py-8'>
                                {rules.map((rule, index) => (
                                    <li key={index}>{rule}</li>
                                ))}
                            </ul>
                        </Fade>
                    </div>
                </div>


                <div className=' max-w-full  mt-32 flex flex-col  gap-14 justify-center items-center '  >
                    <h2 className='text-4xl md:text-7xl font-bold text-center textShwd'>Faculty Co-ordinator</h2>
                    <div className='flex  flex-col md:flex-row md:justify-evenly  justify-center items-center gap-10 w-full'>
                        {
                            selectedEvent.faculty.map((fac) => (
                                <OrganiserCard name={fac.name} phno={fac.phno} photo={fac.photo} />
                            ))
                        }
                    </div>

                    <h2 className='text-4xl md:text-7xl font-bold text-center textShwd'>Event Heads</h2>
                    <div className='flex  flex-col md:flex-row md:justify-evenly  justify-center items-center gap-10 w-full'>
                        {
                            (selectedEvent.heads).map((head, index) => (
                                <OrganiserCard key={index} name={head.name} phno={head.phno} photo={head.photo} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Event