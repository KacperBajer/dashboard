'use client'
import Footer from '@/Components/Footer/Footer'
import LeftPanel from '@/Components/LeftPanel/LeftPanel'
import TopNav from '@/Components/TopNav/TopNav'
import React, { useState } from 'react'

const layout = ({children}) => {

  //handling show left panel on small devices 
  const [showLeftPanel, setShowLeftPanel] = useState(false)

  return (
    <div className='flex bg-[#f8f9fa] min-h-screen'>
      <div className=''>
        <LeftPanel showLeftPanel={showLeftPanel} />
      </div>
      <div className='px-6 overflow-x-auto w-full h-full'>
        <TopNav setShowLeftPanel={setShowLeftPanel} />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default layout