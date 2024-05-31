import React from 'react'

const SimpleBoxes = ({text, value, growth, icon, AdditionalGrowth}) => {
  return (
        <div className="bg-white rounded-xl py-5 px-4 flex justify-between w-full shadow ">
          <div>
            <p className="font-bold text-gray-100 text-sm">{text}</p>
            <div className="flex items-center gap-1">
              <p className="font-bold text-gray-200 text-xl">{value}</p>
              <p className={`text-sm ${AdditionalGrowth ? 'text-[#82D616]' : 'text-[#EA0606]'} font-bold`}>{growth}</p>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-[#21c9fd] to-[#4a78fe] flex items-center justify-center text-white w-12 h-12">
            {icon}
          </div>

        </div>  
    )
}

export default SimpleBoxes