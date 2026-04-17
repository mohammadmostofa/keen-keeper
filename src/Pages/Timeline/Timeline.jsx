import React, { useContext } from 'react';
import { ContextCard } from '../../Context/ContextProvider';
import { IoCall } from 'react-icons/io5';
import Item from '../../Component/Item/Item';


const Timeline = () => {

  const {mark} = useContext(ContextCard);

  
  return (
    
    <div>
            {
              mark.map((card) => <Item key={card.id}  card={card} ></Item> )
            }
    </div>
  );
};

export default Timeline;