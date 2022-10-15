import React, { createContext } from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('matir ring');
const Grandpa = () => {
  const ring = 'diamond ring'
  const house = 7;
  return (<RingContext.Provider value='valuable ring'>
    <div className='grandpa'>
      <h1>This is our grandpa</h1>
      <section className='flex'>
        <Father house={house}></Father>
        <Uncle house={house}></Uncle>
        <Aunt house={house}></Aunt>
      </section>
    </div></RingContext.Provider>
  );
};

export default Grandpa;