import React, { useContext } from 'react';
import { ContextCard } from '../../Context/ContextProvider';
import { Pie, PieChart } from 'recharts';

const Status = () => {

  const {mark} = useContext(ContextCard);
  

  const callCount = mark.filter(item => item.type === 'call').length;
  const textCount = mark.filter(item => item.type === 'text').length;
  const videoCount = mark.filter(item => item.type === 'video').length;

  const chartData = [
    {name:"call",  value:callCount  || 0.01 },
    {name:"text" , value:textCount  || 0.01 },
    {name:"video", value:videoCount || 0.01 }
  ];
  
  return (
    <div className= { `flex justify-center items-center py-5}`} >

      <PieChart style={{ width: '80%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={chartData}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        nameKey="name"
        isAnimationActive={true}
      />
  
    </PieChart>

    </div>
  );
};

export default Status;