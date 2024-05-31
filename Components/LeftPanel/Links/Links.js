import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Links = (item) => {

    const path = usePathname()

  return (
    <Link href={item.item.url} className={`px-4 py-[11px] flex items-center gap-3 ${path === item.item.url ? 'bg-white shadow-md' : 'bg-transparent'} rounded-xl w-full`}>
      <div className={`p-2 rounded-lg ${path === item.item.url ? 'bg-blue-400 text-white' : 'bg-white shadow-md'}`}>{item.item.img}</div>
      <p className={`${path === item.item.url ? 'text-gray-200' : 'text-gray-100'} text-sm font-medium`}>{item.item.text}</p>
    </Link>
  )
}

export default Links