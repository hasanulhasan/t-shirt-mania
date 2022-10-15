import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveCart }) => {
  let message;
  if (cart.length === 0) {
    message = <h2>Please buy at least one</h2>
  }
  else if (cart.length === 1) {
    message = <h4>Amar jonno akta naw</h4>
  }
  else {
    message = <h2>Thanks for buying</h2>
  }
  return (
    <div className='cart'>
      <h1>Order summary</h1>
      <h2>Quantity: {cart.length}</h2>
      {
        cart.map(tshirt => <p key={tshirt._id}
        >{tshirt.name}
          <button onClick={() => handleRemoveCart(tshirt)}>X</button></p>)
      }
      {
        message
      }
      {
        cart.length === 3 ? <p>Tinta kinlen vai</p> : <p>Kino kino</p>
      }
      {
        cart.length === 2 && <p>duita kincen vai</p>
      }
    </div>
  );
};

export default Cart;