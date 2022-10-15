import React from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
const Grandpa = () => {
  return (
    <div className='grandpa'>
      <h1>This is our grandpa</h1>
      <section className='flex'>
        <Father></Father>
        <Uncle></Uncle>
        <Aunt></Aunt>
      </section>
    </div>
  );
};

export default Grandpa;