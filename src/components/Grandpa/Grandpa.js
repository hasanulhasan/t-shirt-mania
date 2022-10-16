import React, { createContext, useState } from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('matir ring');
export const MoneyContext = createContext(555)
const Grandpa = () => {
  const ring = 'diamond ring'
  // const house = 7;
  const [house, setHouse] = useState(1);
  const [money, setMoney] = useState(555);
  return (<RingContext.Provider value={[house, setHouse]}>
    <MoneyContext.Provider value={[money, setMoney]}>
      <div className='grandpa'>
        <h1>This is our grandpa</h1>
        <section className='flex'>
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunt house={house}></Aunt>
        </section>
      </div>
    </MoneyContext.Provider>
  </RingContext.Provider>
  );
};

export default Grandpa;