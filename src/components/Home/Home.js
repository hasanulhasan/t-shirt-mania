import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
  const tshirts = useLoaderData();
  const handleAddToCart = (id) => {
    console.log(id);
  }
  return (
    <div className='home-container'>
      <div className='singleShirt'>
        {
          tshirts.map(tshirt => <Tshirt
            key={tshirt.id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></Tshirt>)
        }
      </div>
      <div>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;