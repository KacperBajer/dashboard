import React from 'react'
import Image from "next/image";
import rocket from '@/public/assets/images/illustrations/rocket-white.png'
import ReadMore from '@/Components/ReadMore/ReadMore';

const SecoundRow = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 min-h-[250px]">
      
      {/* First box */}
      <div className="p-4 grid grid-cols-1 lg:grid-cols-2 rounded-lg bg-white shadow w-full md:w-3/5">
        
        {/* Text section */}
        <div className="flex flex-col justify-between pt-2 text-gray-100">
          <div>
            <p className="font-semibold ">Build by developers</p>
            <p className="font-bold text-gray-200 text-xl mt-1 mb-2">Soft UI Dashboard</p>
            <p className="">From colors, cards, typography to complex elements, you will find the full documentation.</p>
          </div>
          <ReadMore href='/' />
        </div>
        
        {/* Img section */}
        <div className="rounded-lg p-2 lg:ml-[80px] bg-gradient-to-br from-[#21c9fd] to-[#4a78fe] flex justify-center items-center">
          <Image 
            alt=""
            src={rocket}
            className="h-[90%] translate-y-2 object-contain"
          />
        </div>
      </div>
    
      {/* second box */}
      <div className="bg-white p-4 shadow rounded-lg w-full md:w-2/5">
        <div 
          style={{background: "linear-gradient(310deg, rgba(20, 23, 39, 0.8), rgba(58, 65, 111, 0.8)) 0% 0% / cover, url(https://demos.creative-tim.com/soft-ui-dashboard-react/static/media/ivancik.442b474727c414bb3b85.jpg)", backgroundSize: "cover"}} 
          className='rounded-lg text-white p-5 w-full h-full flex flex-col justify-between'
        >
          <div>
            <p className='text-xl font-bold'>Work with the rockets</p>
            <p className='mt-7'>Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
          </div>
          <ReadMore href='/' />
        </div>
      </div>
    
    </div>
  )
}

export default SecoundRow