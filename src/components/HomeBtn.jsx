import React from 'react'
import { IoMdHome } from "react-icons/io";

const HomeBtn = () => {
    const redirectHome = () => {
        window.location.href = "/"
    }
  return (
    <div className='top-2 left-2 py-4 px-5 fixed z-10 bg-purple-500 rounded-full text-white text-2xl'>
        <button onClick={redirectHome}><IoMdHome/></button>
    </div>
  )
}

export default HomeBtn