import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h1>Uncle</h1>
      <p>Money: {money}</p>
    </div>
  );
};

export default Uncle;