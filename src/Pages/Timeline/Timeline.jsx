import React, { useContext, useState } from 'react';
import { ContextCard } from '../../Context/ContextProvider';
import { IoCall } from 'react-icons/io5';
import Item from '../../Component/Item/Item';
import { NavLink } from 'react-router';
import NoData from '../../Component/NoData/NoData';


const Timeline = () => {
  const {mark} = useContext(ContextCard);

  const  [sorting, setSorting] = useState('all') ;

  const filterData = mark.filter((item) =>{
      if(sorting ==='all' ) return  true;
      return item.type === sorting;
  } );

  
  return (
    
    <div>     

           <div className='container mx-auto '>

                  <div className="dropdown dropdown-start container mx-auto ">
  <div tabIndex={0} role="button" className={`btn m-1 ${mark.length === 0 ? 'hidden':''}`}>TimeLine</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    
    <NavLink className=''>
    <li onClick={()=> setSorting('all')}><a>All</a></li>
    <li onClick={()=> setSorting('call')}><a>call</a></li>
    <li onClick={() => setSorting('text')}><a>text</a></li>
    <li onClick={() => setSorting('video')}><a>video</a></li>
    </NavLink>

  </ul>

</div>
               
               {
    
                 mark.length !== 0 ? 
             <div>
                
            {
              filterData.map((card,index) => <Item key={index}  card={card} ></Item> )
            }
             </div> 
             
             :  <div>
                        <NoData></NoData>       
             </div>

                

               }


           </div>

    </div>
  );
};

export default Timeline;