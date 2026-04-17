import React from 'react';

const Banner = ({FriendsCards}) => {
    
  const activeStatus = FriendsCards?.filter(card => card.status == 'active').length || 0;
  const NeedAtention = FriendsCards?.filter(card => card.status == 'overdue').length || 0;

  const newDate = new Date().getMonth();

  return (

    <div className='container mx-auto flex flex-col justify-center items-center text-center ' >
       
       {/* banner title  */}
  
     <div className='flex flex-col justify-center items-center py-10 space-y-6 mt-10'>
             <h1 className='font-bold text-5xl ' >Friends to keep close in your life</h1>
             <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
             relationships that matter most.</p>
             <div>
              <button className='btn btn-primary bg-green-600 hover:bg-green-700 '> + Add a Friend</button>
             </div>
     </div>

{/* banner box */}

<div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 justify-between items-center gap-5 md:gap-6 mt-6'>

   <div className='bg-gray-800 text-white p-10 md:p-20 rounded-md  '>
    <h3 className='   font-bold text-3xl'> {FriendsCards?.length} </h3>
    <h4 className='  font-semibold text-xl '>Friends</h4>
   </div>


   <div className=' bg-gray-800 text-white p-10 md:p-20 rounded-md '>
    <h3 className=' font-bold text-3xl  '> {activeStatus} </h3>
    <h4 className='font-semibold text-xl text-nowrap '>On track</h4>
   </div>


   <div className='bg-gray-800 text-white p-10 md:p-20 rounded-md '>
    <h3 className=' font-bold text-3xl  '> {NeedAtention} </h3>
    <h4 className='font-semibold text-xl text-nowrap '>Need Attension</h4>
   </div>

   <div className='bg-gray-800 text-white p-10 md:p-20 rounded-md '>
    <h3 className=' font-bold text-3xl  '> {newDate} </h3>
    <h4 className='font-semibold text-xl '>Interactions</h4>
   </div>



</div>

<div>


</div>


    </div>
  );
};

export default Banner;