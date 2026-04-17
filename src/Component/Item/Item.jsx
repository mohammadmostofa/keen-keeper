import React from 'react';
import { IoCall, IoSwapVerticalSharp, IoVideocamSharp } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';

const Item = ({card}) => {

  
  
  return (
    <div className='mx-auto container'>

          <div className='border shadow-2xl p-4 w-full my-4 rounded-2xl  bg-gray-800'>
                <h3> <span className='text-green-500 font-bold'> {card.type} </span> with {card.name} </h3>
                <h2> {card.time} </h2>

          </div>
    </div>
  );
};

export default Item;