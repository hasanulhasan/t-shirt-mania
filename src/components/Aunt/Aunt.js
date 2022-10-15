import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunt = ({ house }) => {
  const name = 'Ruba';
  return (
    <div>
      <h1>Aunt</h1>
      <p>House: {house}</p>
      <section className='flex'>
        <Cousin house={house}></Cousin>
        <Cousin house={house}></Cousin>
      </section>
    </div>
  );
};

export default Aunt;