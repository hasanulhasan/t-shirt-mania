import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';
import Special from '../Special/Special';

const Myself = ({ house }) => {
  const ring = useContext(RingContext)
  return (
    <div>
      <h1>Myself</h1>
      <p>House: {house}</p>
      <Special house={house}></Special>
    </div>
  );
};

export default Myself;