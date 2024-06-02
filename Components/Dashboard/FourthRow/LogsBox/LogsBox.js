import React from 'react'

const LogsBox = ({props}) => {
    console.log(props)
  return (
    <div className='flex'>
        <div className='verticalLine'>
            {props.icon}
        </div>

        <div className='ml-6 font-semibold flex flex-col gap-1'>
            <p className='text-gray-200 text-sm'>{props.title}</p>
            <p className='text-gray-100 text-xs'>{props.description}</p>
        </div>

    </div>
  )
}

export default LogsBox