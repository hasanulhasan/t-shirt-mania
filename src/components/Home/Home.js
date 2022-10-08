import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const handleAddToCart = tshirt => {
    const exists = cart.find(ts => ts._id === tshirt._id);
    if (exists) {
      alert('tshirt already added')
    }
    else {
      let newCart = [...cart, tshirt];
      setCart(newCart);
    }
  }
  const handleRemoveCart = (shirt) => {
    console.log(shirt)
    const remaining = cart.filter(ts => ts._id !== shirt._id);
    setCart(remaining);

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
        <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
      </div>
    </div>
  );
};

export default Home;