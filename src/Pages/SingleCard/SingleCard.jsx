import React from 'react';
import { FaBell, FaVideo } from 'react-icons/fa';
import { FiArchive } from 'react-icons/fi';
import { IoMdText } from 'react-icons/io';
import { MdDelete, MdPhoneCallback } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';

const SIngleCard = () => {
  
const {id} = useParams()
console.log(id);

 // receive data by useLoaderData
 const CardDetails = useLoaderData();
 console.log(CardDetails);

 // find mathod 
 const Card = CardDetails?.find( (card) => card.id === Number(id));
 
 const { name, picture, email,status, tags, bio, goal, next_due_date, interactions} =  Card;

 //  day count 
  const LastMonth = new Date(Card.interactions[Card.interactions.length - 1] );
  const NewMonth = new Date();
  const TotalDays = Math.floor((NewMonth - LastMonth) / (1000 * 60 * 60 * 24))

if(!Card){
  return
}

  return (

     <div>

          
          <div className='bg-gray-800 p-5 drop-shadow-lg grid grid-cols-1 md:flex justify-center items-center gap-5 container mx-auto'>
{/* part one */}
<div>

<div className=' flex flex-col justify-between items-center p-4  drop-shadow-2xl border border-gray-700 rounded-2xl   '>
   
   <div>
         <img src={picture} alt={name} className='rounded-full mx-auto '/> 

   </div>

   <h1 className='font-bold text-4xl mt-5'>{name} </h1>

   {/* status */}
   <div className="flex justify-center items-center pt-5 ">
           <h3 className= {` ${Card.status == "active" ? 
           'bg-green-500': Card.status == "overdue" ? 'bg-yellow-500' 
           : 'bg-red-500'} px-5 rounded-4xl text-black `} > {Card.status} </h3>
    </div>

         <div className='flex  justify-center items-center gap-2 '>
         {
              Card.tags.map((tag,inx) => <h4 className='bg-green-200  text-black px-6 mt-5 rounded-4xl gap-5'
               key={inx} tag={tag} > {tag} </h4> )
        }
     </div>

     <p className='mt-6 leading-1.5'> "{bio}" </p>

     <h5 className='mt-5'> Preferred:{email} </h5>


</div>

<div className='flex flex-col justify-center items-center mt-5 space-y-5 rounded-2xl shadow drop-shadow-2xl border border-gray-700 p-4 '>
     <button className='btn btn-primary flex justify-center  items-center w-full text-white text-md drop-shadow-2xl border border-gray-700 rounded-md   '> <FaBell /> Snooze 2 weeks</button>
     <button className='btn btn-primary flex justify-center  items-center w-full text-white text-md drop-shadow-2xl border border-gray-700 rounded-md   '><FiArchive /> Archive</button>
     <button className='btn btn-primary flex justify-center  items-center w-full text-white text-md drop-shadow-2xl border border-gray-700 rounded-md   '><MdDelete /> Delete </button>
     
</div>

</div>
 
 {/* second part */}
 <div>
           <div className='grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-5 '>
                  <div className='bg-gray-700 px-10 py-16 rounded-md flex flex-col justify-center items-center text-center tex-md shadow drop-shadow-2xl' >
                        <h4> {TotalDays} </h4>
                       <h2 className='py-2' >Days since Contact</h2>
                  </div>

                  <div className='bg-gray-700 px-10 py-16 rounded-md flex flex-col justify-center items-center text-center tex-md shadow drop-shadow-2xl' >
                        <h4> {goal} </h4>
                       <h2 className='py-2' > Goal (Days) </h2>
                  </div>

                  <div className='bg-gray-700 px-10 py-16 rounded-md flex flex-col justify-center items-center text-center tex-md shadow drop-shadow-2xl' >
                        <h4> {next_due_date} </h4>
                       <h2 className='py-2'> Next Due </h2>
                  </div>
           </div>
            
            <div className='flex flex-col shadow-md  py-5  mt-6 bg-gray-700 px-2 rounded-md'>

                    <div className=' flex justify-between items-center ' >
                      <h4>Relationship Goal</h4>
                      <div><button className='btn bg-white text-black ' >Edit</button>
                      </div>
                    </div>
                 <h3>Connect every <span className='text-violet-500 font-bold'>30 Days</span></h3>

            </div>

            <div className='bg-gray-700'>
                 
                 <h3 className='font-bold text-xl mt-6 px-2 '>Quick Check-In</h3>

                 <div className=' grid grid-cols-1 md:flex justify-between items-center py-4 px-2 gap-5  '>

                       <div className='flex flex-col justify-center items-center border-2 border-gray-800 py-12 space-y-4 w-full h-full rounded-2xl shadow drop-shadow-sm ' > <span></span> <MdPhoneCallback /><span>Call</span> </div>
                       <div className='flex flex-col justify-center items-center border-2 border-gray-800 py-12 space-y-4 w-full h-full rounded-2xl shadow drop-shadow-sm'> <span></span><IoMdText /><span>Text</span> </div>
                       <div className='flex flex-col justify-center items-center border-2 border-gray-800 py-12 space-y-4 w-full h-full rounded-2xl shadow drop-shadow-sm'> <span></span><FaVideo /><span>video</span> </div>



                 </div>

            </div>
 </div>

         
    </div>


     </div>

  );
};

export default SIngleCard;