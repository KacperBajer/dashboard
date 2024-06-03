'use client'
import React from 'react'
import { SecondTableData, FirstTableData } from '@/constants';
import Image from 'next/image';
import { nanoid } from 'nanoid';
import ProgressBar from '@/Components/ProgressBar/ProgressBar';
import { IoMdMore } from 'react-icons/io';


const page = () => {
  return (
    <div className='w-full flex flex-col gap-5'>
        
        {/* First table */}
        <div className='bg-white pt-8 rounded-xl shadow'>
            <p className='font-semibold text-gray-100 pl-6 pb-10'>Authors Table</p>
            <div className='overflow-x-auto hideScrollbar'>
                <table className='w-full'>
                    <tbody className=''>
                        <tr className=''>
                            <th><p className={`text-[0.62rem] text-left py-3 px-6 text-gray-100 font-bold`}>AUTHOR</p></th>
                            <th><p className={`text-[0.62rem] text-left py-3 px-6 text-gray-100 font-bold`}>FUNCTION</p></th>
                            <th><p className={`text-[0.62rem] py-3 px-6 text-gray-100 font-bold`}>STATUS</p></th>
                            <th><p className={`text-[0.62rem] py-3 px-6 text-gray-100 font-bold`}>EMPLOYED</p></th>
                            <th><p className={`text-[0.62rem] py-3 px-6 text-gray-100 font-bold`}>ACTION</p></th>
                        </tr>
                        {FirstTableData.map(item => (
                            <tr key={nanoid()} className='border-y border-solid text-sm '>
                                <td className='py-4 px-6 flex items-center gap-4'>
                                    <Image 
                                        alt=''
                                        src={item.author.icon}
                                        className='w-9 object-cover rounded-lg'
                                    />
                                    <div>
                                        <p className='font-semibold text-gray-200'>{item.author.name}</p>
                                        <p className='text-xs text-gray-100'>{item.author.email}</p>
                                    </div>
                                </td>
                                <td className='py-4 px-6'>
                                    <p className='text-gray-100 font-semibold text-xs'>{item.function.position}</p>
                                    <p className='text-gray-100 text-xs'>{item.function.subPosition}</p>
                                </td>
                                <td className='py-4 px-6'>
                                    <div 
                                        style={{backgroundImage: item.status === 'ONLINE' ?  'linear-gradient(to right, #a0e253, #5db34a)' : 'linear-gradient(to right, #9facc9, #6e7d9a)'}} 
                                        className='rounded-lg h-[20px] w-[55px] flex items-center justify-center mx-auto'
                                    >
                                        <p className='text-white text-center font-bold text-[0.6rem]'>{item.status}</p>
                                    </div>
                                </td>
                                <td className='py-4 px-6'>
                                    <p className='text-gray-100 font-medium text-center text-xs'>{item.employed}</p>
                                </td>
                                <td className=''>
                                    <p className='text-gray-100 font-medium text-center text-xs hover:cursor-pointer'>Edit</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* Second table */}
        <div className='bg-white pt-8 rounded-xl shadow'>
            <p className='font-semibold text-gray-100 pl-6 pb-10'>Projects Table</p>
            <div className='overflow-x-auto hideScrollbar'>
                <table className='w-full'>
                    <tbody className=''>
                        <tr className=''>
                            <th><p className={`text-[0.62rem] text-left py-3 px-6 text-gray-100 font-bold`}>PROJECT</p></th>
                            <th><p className={`text-[0.62rem] py-3 px-6 text-gray-100 font-bold`}>BUDGET</p></th>
                            <th><p className={`text-[0.62rem] text-left py-3 px-6 text-gray-100 font-bold`}>STATUS</p></th>
                            <th><p className={`text-[0.62rem] py-3 px-6 text-gray-100 font-bold`}>COMPLETION</p></th>
                            <th><p className={`text-[0.62rem] py-3 px-6 text-gray-100 font-bold`}>ACTION</p></th>
                        </tr>
                        {SecondTableData.map(item => (
                            <tr key={nanoid()} className='border-y border-solid text-sm '>
                                <td className='py-4 px-6 flex items-center gap-4'>
                                    <Image 
                                        alt=''
                                        src={item.company.icon}
                                        className='w-9 object-cover'
                                    />
                                    <p className='font-bold text-gray-100'>{item.company.name}</p>
                                </td>
                                <td className='py-4 px-6'>
                                    <p className='text-gray-100 font-medium text-center text-xs'>{item.budget}</p>
                                </td>
                                <td className='py-4 px-6'>
                                    <p className='text-gray-100 font-medium text-xs'>{item.status}</p>
                                </td>
                                <td className='py-4 px-6'>
                                    <ProgressBar progress={item.completion.value} gradientFrom={item.completion.gradientFrom} gradientTo={item.completion.gradientTo}  />
                                </td>
                                <td className='flex justify-center items-center'>
                                    <IoMdMore className='text-2xl text-center text-gray-100 hover:cursor-pointer' />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default page