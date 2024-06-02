import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const ReadMore = ({href}) => {
  return (
    <Link href={href} className="font-semibold text-sm flex gap-1 mt-3 group"><p>Read more</p> <FaArrowRight className="text-xs mt-[5px] group-hover:translate-x-2 transition ease-in-out" /></Link>
)
}

export default ReadMore