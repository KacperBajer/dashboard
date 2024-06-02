import ProgressBar from '@/Components/ProgressBar/ProgressBar'
import React from 'react'
import { ImUsers } from 'react-icons/im'

const Boxes = ({props}) => {
  return (
    <div className='mt-7 pr-6 sm:grow w-1/2'>
      <div className='flex items-center gap-2 mb-4'>
        <div style={{backgroundImage: `linear-gradient(to right, ${props.gradientFrom}, ${props.gradientTo})`}} className={`p-1 rounded-md text-white`}>
          <ImUsers className='text-sm' />
        </div>
        <p className='text-gray-100 text-sm font-medium'>{props.category}</p>
        </div>
        <p className='text-2xl font-bold text-gray-200'>{props.value}</p>
        <ProgressBar progress={props.progress} />
    </div>
  )
}

export default Boxes