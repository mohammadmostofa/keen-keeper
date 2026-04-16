import React, { Suspense} from 'react';
import FrdCard from '../Shared/FrdCard/FrdCard';
import Banner from '../Banner/Banner';



const Friends = ({FriendsCards}) => {
  


  return (
         

    


       <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 container mx-auto justify-between items-center gap-5 mt-15 py-10 '>            
          <Suspense fallback = {<span className="loading loading-spinner text-primary"></span>}>

                {
                 FriendsCards.map(card => <FrdCard key={card.id} card={card} ></FrdCard>  )
             }
             
          </Suspense>

  




    </div>


  );
};

export default Friends;