import React from 'react';
import { usetitle } from './usetitle';

export const Basicusetitle = () => {
  const { count, increment } = usetitle();

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={increment}>increment</button>
    </>
  );
};
