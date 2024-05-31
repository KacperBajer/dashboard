import LeftPanel from '@/Components/LeftPanel/LeftPanel'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex bg-[#f8f9fa] min-h-screen'>
      <LeftPanel />
      {children}
    </div>
  )
}

export default layout