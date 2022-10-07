import React from 'react';
import './Tshirt.css'

const Tshirt = ({ tshirt, handleAddToCart }) => {
  const { picture, name, price, _id } = tshirt;
  return (
    <div className='tshirt'>
      <img src={picture}></img>
      <h2>{name}</h2>
      <h3>Price : {price}</h3>
      <button onClick={() => handleAddToCart(_id)}>Buy Now</button>
    </div>
  );
};

export default Tshirt;