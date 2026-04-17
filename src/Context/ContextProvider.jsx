import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

const ContextCard = createContext();

const ContextProvider = ({children}) => {
  // toast and id transfer in timline page
  const [mark,setMark] = useState([]);
  
  const handleAction = (CurrentCard,type) =>   {

     //Dublicate check
      const Exist = mark.find((card) => card.id === CurrentCard.id && card.type === type );
  
      if(Exist){
           toast.error(`Already Is Exist ${type} `)
      } 
      
       else{

        
     const newData = {
        id:CurrentCard.id,
        name:CurrentCard.name,
        email:CurrentCard.email,
        type:type,
        time: new Date().toLocaleString(),
     }
      
     
     setMark([...mark,newData]),
     toast.success(` ${type} with ${CurrentCard.name}`)  
     
        


       }

  };

  const PassData = {
      mark,
      setMark,
      handleAction
      
    }
    
    return <ContextCard.Provider value={PassData}>
    {children}
  </ContextCard.Provider>
};


export default ContextProvider;
 export{ContextCard};