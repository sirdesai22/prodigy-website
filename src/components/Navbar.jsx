import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, animateScroll as scroll } from 'react-scroll';
import { MdDownload } from "react-icons/md";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'events', text: 'Events' },
    { id: 'organisers', text: 'Organisers' },
  ];

  return (
    <div className='bg-black flex justify-between items-center lg:max-w-full h-16 max-w-[1240px] mx-auto px-4 text-white sticky top-0 z-50'>
      {/* Logo */}
      <h1 className='w-full text-4xl font-bold text-[#00df9a] samakran text-transparent bg-clip-text inline-block bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500'>MAGNUM 24
        {/* <div className='w-1 bg-white mx-3 md:visible'></div>
        <div className='text-white font-sans text-sm flex gap-3 md:visible '>
          <img src="/Photos/gogteLogo.png" alt="" className='h-9'/>
          Gogte College <br /> of Commerce</div> */}
      </h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex items-center'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-3 hover:underline rounded-xl m-2 cursor-pointer duration-300 hover:text-amber-500 font-semibold'
          >
            <Link to={item.id} smooth={true} duration={500}>{item.text}</Link>
          </li>
        ))}
        <a href='/MAGNUM_2024_BROCHURE.pdf' download={"Brochure"} >
          <li className='bg-purple-500 px-4 py-3 rounded-xl font-semibold cursor-pointer text-center flex items-center gap-2'><MdDownload className='text-2xl' />Brochure</li>
        </a>
        {/* <a href='/MAGNUM_2024.pdf' download={"Brochure"} >
          <li className='bg-purple-500 px-4 py-3 rounded-xl font-semibold cursor-pointer text-center flex items-center gap-2 ml-3'><MdDownload className='text-2xl' />Schedule</li>
        </a> */}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-4xl font-bold text-[#00df9a] m-4 samakran text-transparent bg-clip-text inline-block bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500'>MAGNUM 24</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-amber-500 duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link to={item.id} smooth={true} duration={500}>{item.text}</Link>
          </li>
        ))}
        <a href='/MAGNUM_2024.pdf' download={"Brochure"} >
          <li className='bg-purple-500 p-4 rounded-xl font-semibold cursor-pointer text-center flex items-center gap-2'><MdDownload className='text-xl' />Brochure</li>
        </a>
        {/* <a href='/MAGNUM_2024.pdf' download={"Brochure"} >
          <li className='bg-purple-500 px-4 py-3 rounded-xl font-semibold cursor-pointer text-center flex items-center gap-2 mt-2'><MdDownload className='text-2xl' />Schedule</li>
        </a> */}
      </ul>
    </div>
  );
};

export default Navbar;
