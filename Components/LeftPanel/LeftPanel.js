"use client"
import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/images/logo-ct.png'
import { LinksAccountPages, LinksDashboard } from '@/constants'
import Links from '@/Components/LeftPanel/Links/Links' 
import { FaStar } from "react-icons/fa";
import { nanoid } from 'nanoid'

const LeftPanel = ({showLeftPanel}) => {

  return (
    <div className={`py-10 bg-[#f8f9fa] bg-opacity-85 backdrop-blur-lg shadow-2xl h-screen transform transition-transform duration-300 ease-in-out ${showLeftPanel ? 'translate-x-0' : '-translate-x-full'} 
    xl:shadow-none xl:bg-opacity-100 xl:bg-transparent xl:backdrop-blur-none fixed xl:block xl:sticky z-30 top-0 xl:translate-x-0`}>
      <div className='flex flex-col px-8 w-[220px] box-content h-full overflow-y-auto sb'>
        {/* LOGO */}
        <div className='border-bottom-gradient flex justify-center pb-7 w-full'>
          <div className='flex ml-4 items-center gap-1'>  
            <Image 
                alt=''
                src={logo}
                className='w-8'
            />
            <p className='text-gray-300 text-sm font-semibold'>Soft UI Dashboard</p>
          </div>
        </div>

        {/* LINKS */}
        <div className='mt-5 w-auto flex flex-col mb-10'>
            {LinksDashboard.map(item => (
              <Links key={nanoid()} item={item} /> 
            ))}
            <p className='text-gray-100 font-semibold ml-4 mt-5 mb-2 text-xs'>ACCOUNT PAGES</p>
            {LinksAccountPages.map(item => (
              <Links key={nanoid()} item={item} />
            ))}
        </div>  
        
        {/* BOTTOM SECTION */}
        <div className='mt-auto'>

            <div className='mb-3 text-white bg-gradient-to-r p-4 rounded-lg from-[#52c6e9] to-[#6497f9]'>
              <div className='p-2 rounded-lg bg-white inline-block'>
                <FaStar className='text-[#2177fe]' />
              </div>
              <div className='mb-4 mt-2'>
                <p className='font-semibold'>Need help?</p>
                <p className='text-xs'>Please check our docs</p>
              </div>
              <button className='bg-white rounded-lg text-gray-200 font-semibold text-xs w-full py-2 px-4'>DOCUMENTATION</button>
            </div>

          <button className='px-4 py-2 w-full text-white font-semibold rounded-lg bg-gradient-to-r from-[#21c4fd] to-[#2177fe]'>
            Upgrade to pro
          </button>
        </div>
      </div>
        
    </div>
  )
}

export default LeftPanel