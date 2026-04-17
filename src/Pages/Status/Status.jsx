import React, { useContext } from 'react';
import { ContextCard } from '../../Context/ContextProvider';
import { Pie, PieChart } from 'recharts';

const Status = () => {

  const {mark} = useContext(ContextCard);
  

  const callCount = mark.filter(item => item.type === 'call').length;
  const textCount = mark.filter(item => item.type === 'text').length;
  const videoCount = mark.filter(item => item.type === 'video').length;

  const chartData = [
    {name:"call",  value:callCount  || 0.01 , fill:"#05783B"   },
    {name:"text" , value:textCount  || 0.01 , fill:" #780552"  },
    {name:"video", value:videoCount || 0.01 , fill:" #1A0578 " }
  ];
  
  return (

    <div>

    <div className= { `flex justify-center items-center py-5}`} >

      <PieChart style={{ width: '80%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={chartData}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill=""
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        nameKey="name"
        isAnimationActive={true}
      />
  
    </PieChart>

    </div>

    <div className='flex justify-center items-center gap-4 py-10'>
      
       <h2 className='flex gap-1'>  <span className='text-md font-bold '>Call</span> <span className='border  border-gray-800 rounded-sm px-3  outline-none bg-[#05783B]' ></span> </h2>
       <h2 className='flex gap-1'>  <span className='text-md font-bold '>Text</span> <span className='border  border-gray-800 rounded-sm px-3  outline-none bg-[#780552]' ></span> </h2>
       <h2 className='flex gap-1'>  <span className='text-md font-bold '>video</span> <span className='border border-gray-800 rounded-sm px-3 outline-none bg-[#1A0578] '></span> </h2>
    
    </div>

    </div>

  );
};

export default Status;