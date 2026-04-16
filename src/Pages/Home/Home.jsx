import React, { use } from 'react';
import Banner from '../../Component/Banner/Banner';
import Friends from '../../Component/Friends/Friends';

const FriendsPromise = fetch('/Friends.json').then(res=> res.json())


const Home = () => {

 const FriendsCards = use(FriendsPromise)
  console.log(FriendsCards , 'friendsCard')

  return (
    <div>
             <Banner FriendsCards={FriendsCards} ></Banner>

             <Friends FriendsCards={FriendsCards} ></Friends>
    </div>
  );
};

export default Home;