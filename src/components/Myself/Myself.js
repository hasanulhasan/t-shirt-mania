import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Myself = ({ house }) => {
  const ring = useContext(RingContext)
  return (
    <div>
      <h1>Myself</h1>
      <p>House: {house}</p>
      <p>House: {ring}</p>
    </div>
  );
};

export default Myself;