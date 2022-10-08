import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveCart }) => {
  console.log(cart)
  return (
    <div className='cart'>
      <h1>Order summary</h1>
      <h2>Quantity: {cart.length}</h2>
      {
        cart.map(tshirt => <p key={tshirt._id}
        >{tshirt.name}
          <button onClick={() => handleRemoveCart(tshirt)}>X</button></p>)
      }
    </div>
  );
};

export default Cart;