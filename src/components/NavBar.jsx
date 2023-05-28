import React from 'react';
// import { FaBars, FaTimes } from "react-icons/fa";


const NavBar = () => {
    const links = [
        {
            id: 1,
            
        }
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>
          &lt;  malkaAnjum/ &gt;
        </h1>
      </div>

      <ul className='flex'>
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-50 hover:scale-105 duration-200'>
            home
        </li>
      </ul>
    </div>
  )
}

export default NavBar
