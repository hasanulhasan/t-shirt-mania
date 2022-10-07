import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
  const tshirts = useLoaderData();
  console.log(tshirts);
  return (
    <div>
      <h1>This is home {tshirts.length}</h1>
      {
        tshirts.map(tshirt => <Tshirt key={tshirt.id} tshirt={tshirt}></Tshirt>)
      }
    </div>
  );
};

export default Home;