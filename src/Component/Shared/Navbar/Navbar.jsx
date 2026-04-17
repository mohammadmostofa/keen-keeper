import React from 'react';
import { CiTimer } from 'react-icons/ci';
import { FaChartLine } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';
import { NavLink } from 'react-router';



const Navbar = () => {

  const link = (
       <>
       <li > <NavLink className={({isActive}) => `${isActive ? 'bg-green-800' : ''} flex justify-center items-center md:px-5 md:py-3 gap-2 rounded-sm text-white font-semibold`} to= "/" > <IoHomeOutline/> Home</NavLink> </li>
       <li > <NavLink className={({isActive}) => `${isActive ? 'bg-green-800' : ''} flex justify-center items-center md:px-5 md:py-3 gap-2 rounded-sm text-white font-semibold`} to="/Timeline" > <CiTimer/> Timeline</NavLink> </li>
       <li > <NavLink className={({isActive}) => `${isActive ? 'bg-green-800' : ''} flex justify-center items-center md:px-5 md:py-3 gap-2 rounded-sm text-white font-semibold`} to= "/Status" > <FaChartLine/> Status</NavLink></li>
         
       </>
  )


  return (
    <div>

      <div className=" flex justify-between items-center  container mx-auto py-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <a className=" font-bold text-3xl  "> <span className=' text-green-700 '>Keen</span><span className=' text-green-500'>Keeper</span> </a>
  </div>
  
  <div className="navbar-center hidden md:flex ">
    <ul className=" hidden md:flex justify-center items-center space-x-4 ">

          {link}

    </ul>
  </div>
</div>

 {
      
 }

    </div>
  );
};

export default Navbar;