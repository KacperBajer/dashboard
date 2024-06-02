'use client'
import LeftPanel from '@/Components/LeftPanel/LeftPanel'
import TopNav from '@/Components/TopNav/TopNav'
import React, { useState } from 'react'

const layout = ({children}) => {

  //handling show left panel on small devices 
  const [showLeftPanel, setShowLeftPanel] = useState(false)

  return (
    <div className='flex bg-[#f8f9fa] min-h-screen'>
      <LeftPanel showLeftPanel={showLeftPanel} />
      <div className='px-6 overflow-x-auto'>
        <TopNav setShowLeftPanel={setShowLeftPanel} />
        {children}
      </div>
    </div>
  )
}

export default layout