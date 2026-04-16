import React, { Suspense } from 'react';
import Banner from '../../Banner/Banner';


const FrdCard = ({card}) => {
   
  const lastMonth = new Date(card.interactions[card.interactions.length - 1]); //last month out math
  const newDate = new Date(); //new month out math

const LastDaysAge = Math.floor((newDate - lastMonth) / (1000*60*60*24))  ;

  return (
    <div >

      <div className=" flex flex-col justify-center items-center p-5 
     rounded-sm bg-gray-800 drop-shadow-2xl  shadow-indigo-600 ">
  <figure className="px-10 pt-10 ">
    <img
      src={card.picture}
      alt={card.name}
      className="rounded-xl" />
  </figure>

  <div className="card-body items-center text-center space-y-3 ">
    <h2 className="card-title"> {card.name} </h2>
    <p> {LastDaysAge}d ago </p>
    <p className='text-2xl font-bold '> {card.days_since_contact} </p>
     
     <div className='flex  justify-center items-center gap-2 '>
         {
             card.tags.map((tag,inx) => <h4 className='bg-green-200  text-black p-3 rounded-sm font-semibold' key={inx} tag={tag} > {tag} </h4> )
         }
     </div>

    <div className="card-actions">
                <button className= {` ${card.status == "active" ? 
                  'bg-green-500': card.status == "overdue" ? 'bg-yellow-500' 
                  : 'bg-red-500'} btn  `} > {card.status} </button>
    </div>
  </div>
</div>

         

    </div>
  );
};

export default FrdCard;