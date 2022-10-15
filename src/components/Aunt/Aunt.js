import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunt = () => {
  return (
    <div>
      <h1>Aunt</h1>
      <section className='flex'>
        <Cousin></Cousin>
        <Cousin></Cousin>
      </section>
    </div>
  );
};

export default Aunt;