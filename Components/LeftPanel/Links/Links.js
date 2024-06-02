import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Links = ({item}) => {

    const path = usePathname()

  return (
    <Link href={item.url} className={`px-4 py-[11px] flex items-center gap-3 ${path === item.url ? 'bg-white shadow-md' : 'bg-transparent'} rounded-xl w-full`}>
      <div className={`p-2 rounded-lg ${path === item.url ? 'bg-blue-400 text-white' : 'bg-white shadow-md'}`}>{item.img}</div>
      <p className={`${path === item.url ? 'text-gray-200' : 'text-gray-100'} text-sm font-medium`}>{item.text}</p>
    </Link>
  )
}

export default Links