'use client'
import SimpleBoxes from "@/Components/Dashboard/SimpleBoxes/SimpleBoxes";
import TopNav from "@/Components/TopNav/TopNav";
import { DashboardTopBoxes } from "@/constants";
import { nanoid } from "nanoid";
import SecondRow from "@/Components/Dashboard/SecondRow/SecondRow";
import ThirdRow from "@/Components/Dashboard/ThirdRow/ThirdRow";
import FourthRow from "@/Components/Dashboard/FourthRow/FourthRow";

export default function Home() {
  return (
    <div className="pb-10 w-full flex flex-col gap-5 overflow-hidden">
      
      {/* First row boxes */}
      <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        
        {DashboardTopBoxes.map(item => (
          <SimpleBoxes key={nanoid()} text={item.text} value={item.value} growth={item.growth} icon={item.icon} AdditionalGrowth={item.AdditionalGrowth} />
        ))}
      </div>
      
      {/* Second row boxes */}
      <SecondRow />
      
      {/* Third row boxes */}
      <ThirdRow /> 
      
      {/* Fourth row boxes */}
      <FourthRow /> 

    </div>
  );
}
