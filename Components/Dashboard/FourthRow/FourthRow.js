import React from 'react'
import { IoMdMore } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { TableDashboardData, dashboardLogs } from '@/constants';
import { nanoid } from 'nanoid';
import ProgressBar from '@/Components/ProgressBar/ProgressBar';
import Image from 'next/image';
import { FaArrowUp } from 'react-icons/fa';
import LogsBox from './LogsBox/LogsBox';


const FourthRow = () => {
  return (
    <div className='flex flex-col md:flex-row gap-5 w-full'> 
        
        {/* First Box */}
        <div className='bg-white rounded-xl shadow w-full md:w-2/3 '>

            {/* text section */}
            <div className='pt-6 pb-8 pl-6 pr-10'>
                <div className='flex items-center justify-between mb-2 text-gray-200 '>
                    <p className='font-semibold'>Projects</p>
                    <IoMdMore className='text-2xl hover:cursor-pointer' />
                </div>
                <div className='flex items-center gap-1'>
                    <FaCheck className='text-xl text-[#17C1E8]' />
                    <p className='text-sm text-gray-100'><span className='font-bold'>30 done</span> this month</p>
                </div>
            </div>
            
            {/* Table section */}
            <div className='overflow-x-auto hideScrollbar'>
                <table className='w-full'>
                    <tbody className=''>
                        <tr className=''>
                            <th><p className={`text-[0.62rem] text-left py-3 px-6 text-gray-100 font-bold`}>COMPANIES</p></th>
                            <th><p className={`text-[0.62rem] text-left py-3 px-6 text-gray-100 font-bold`}>MEMBERS</p></th>
                            <th><p className={`text-[0.62rem] py-3 px-6 text-gray-100 font-bold`}>BUDGET</p></th>
                            <th><p className={`text-[0.62rem] py-3 px-6 text-gray-100 font-bold`}>COMPLETION</p></th>
                        </tr>
                        {TableDashboardData.data.map(item => (
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
                                    <div className='flex'>
                                        {item.members.map((member, index) => (
                                            <Image 
                                                key={nanoid()}
                                                alt=''
                                                src={member}
                                                className={`w-6 h-6 rounded-full hover:z-10 hover:cursor-pointer border-2 border-white border-solid `}
                                                style={{ transform: `translateX(-${index * 0.6}rem)` }}
                                            />
                                        ))}
                                    </div>
                                </td>
                                <td className='py-4 px-6 flex items-center justify-center'>
                                    <p className='text-gray-100 font-medium text-xs'>{item.budget}</p>
                                </td>
                                <td className='py-4 px-6'>
                                    <ProgressBar progress={item.completion.value} gradientFrom={item.completion.gradientFrom} gradientTo={item.completion.gradientTo}  />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>

        {/* Second Box */}
        <div className='p-6 pb-10 bg-white rounded-xl flex flex-col justify-between shadow w-full md:w-1/3 min-w-[350px]'>
            <div>
                <p className='font-semibold text-gray-200 mb-5'>Orders overview</p>
                <div className='flex text-sm items-center gap-1 mb-7 text-[#82D616]'>
                    <FaArrowUp className='text-xs' />
                    <p className='text-gray-200'><span className='text-gray-200 font-semibold'>24%</span> this month</p>
                </div>
            </div>
            <div className='flex flex-col gap-7'>
                {dashboardLogs.map(item => (
                    <LogsBox key={nanoid()} props={item} />
                ))}
            </div>
        </div>

    </div>
  )
}

export default FourthRow;
