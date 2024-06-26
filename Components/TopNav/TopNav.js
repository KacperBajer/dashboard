import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";


const TopNav = ({setShowLeftPanel}) => {
    
  return (
    <div className='py-10 px-5 flex justify-between w-full'>

        <div className='flex flex-col'>
            <div className='flex items-center text-gray-500 text-sm'>
                <IoMdHome className='' />
                <p className='mx-2 font-medium'>/</p>
                <p className='font-medium'>Dashboard</p>
            </div>
            <p className='text-gray-200 font-semibold'>Dashboard</p>
        </div>

        <div className='flex items-center gap-5'>

            <div className='rounded-lg bg-white border sm:flex items-center hidden'>
                <div className='block p-3'>
                    <FaSearch />
                </div>
                <input placeholder='Type here...' type='text' className='outline-none border-none placeholder:text-sm w-[150px]'></input>
            </div>

            <div className='text-lg text-gray-200 flex items-center gap-2'>
                <IoMdSettings className='hover:cursor-pointer ' />
                <IoNotifications className='hover:cursor-pointer ' />
                <button><IoMenu onClick={() => setShowLeftPanel(prev => !prev)} className='text-2xl xl:hidden hover:cursor-pointer ' /></button>
            </div>
  
        </div>

    </div>
  )
}

export default TopNav