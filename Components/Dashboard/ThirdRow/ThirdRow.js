'use client'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, defs, BarChart, Legend, Bar } from 'recharts';
import { FaArrowUp } from "react-icons/fa";
import { activeUsersStats, dataDashboardGraphs } from '@/constants';
import { nanoid } from 'nanoid';
import Boxes from './Boxes/Boxes';

const ThirdRow = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-5 w-full min-h-[445px]'>
        
        {/* First Box */}
        <div className='p-4 bg-white rounded-xl shadow w-full lg:w-2/5'>
          
          {/* Graph */}
          <div className='h-[210px] w-full bg-gradient-to-r rounded-lg from-[#39406d] to-[#1a1e33]'>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={dataDashboardGraphs}
                margin={{
                  top: 35,
                  right: 5,
                  left: -5,
                  bottom: 35,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
                <YAxis domain={[0, 400]} ticks={[0, 200, 400]} tick={{fontSize: '13px', fill: '#ffffff'}} axisLine={false} tickLine={false} />
                <Tooltip  cursor={{fill: 'transparent'}} />
                <Bar dataKey="sales" fill="#ffffff" barSize={6} radius={999999}  />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Down section */}
          <div className='ml-2'>
            <p className='text-[#344767] mt-7 font-semibold'>Active Users</p>
            <p className='text-gray-200 text-sm'>(<span className='font-semibold'>+23%</span>) than last week</p>
            
            <div className='flex max-sm:flex-wrap'>
              
              {activeUsersStats.map(item => (
                <Boxes key={nanoid()} props={item} />
              ))}
            </div>

          </div>
        </div>   
        
        {/* Second Box */}
        <div className='py-6 px-5 flex flex-col bg-white rounded-xl shadow w-full lg:w-3/5'>
          
          {/* Text section */}
          <div className='mb-8'>
            <p className='text-[#344767] mb-2 font-semibold'>Sales Overview</p>
            <div className='flex text-sm items-center gap-1 text-[#82D616]'>
              <FaArrowUp className='text-xs' />
              <p className='text-gray-200'><span className='text-gray-200 font-semibold'>4% more</span> in 2021</p>
            </div>
          </div>
          
          {/* Graph section */}
          <div className='flex-grow '>
            <ResponsiveContainer width="100%" height='100%' minHeight={'200px'}>
                <AreaChart
                data={dataDashboardGraphs}
                margin={{
                    top: 5,
                    right: 0,
                    left: -30,
                    bottom: 25,
                }}
                >
                <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00c3fe" stopOpacity={0.9}/>
                    <stop offset="100%" stopColor="#00c3fe" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#000000" stopOpacity={0.9}/>
                    <stop offset="100%" stopColor="#000000" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: '12px'}} dy={25} />
                <YAxis domain={[0, 500]} ticks={[0, 100, 200, 300, 400, 500]} tick={{fontSize: '12px'}} axisLine={false} tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#00c3fe"  fill="url(#color)" fillOpacity={0.1} strokeWidth={3} dot={false} />
                <Area type="monotone" dataKey="pv" stroke="#000000" fill="url(#color2)" strokeWidth={3} fillOpacity={0.1} dot={false} />
                </AreaChart>
            </ResponsiveContainer>
          </div>
      </div>
    </div>
  )
}

export default ThirdRow