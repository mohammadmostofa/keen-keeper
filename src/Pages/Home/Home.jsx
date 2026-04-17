import React, { Suspense, use } from 'react';
import Banner from '../../Component/Banner/Banner';
import Friends from '../../Component/Friends/Friends';

const FriendsPromise = fetch('/Friends.json').then(res=> res.json())


const Home = () => {

 const FriendsCards = use(FriendsPromise);

  return (
    <div>
  
    <Suspense>
             <Banner FriendsCards={FriendsCards} ></Banner>
             <Friends FriendsCards={FriendsCards} ></Friends>
    </Suspense>
   
    </div>
  );
};

export default Home;