import React from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
const Grandpa = () => {
  const house = 7;
  return (
    <div className='grandpa'>
      <h1>This is our grandpa</h1>
      <section className='flex'>
        <Father house={house}></Father>
        <Uncle house={house}></Uncle>
        <Aunt house={house}></Aunt>
      </section>
    </div>
  );
};

export default Grandpa;