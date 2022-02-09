import React, { useContext } from 'react';
import { CountContext } from '../App';
export default function ComponentB() {
  // const [counterAction, counterDispatch] = countContext.useContext();
  const Counter = useContext(CountContext);
  return (
    <div>
      ComponentB
      <button
        onClick={() => {
          Counter.counterDispatch('increment');
        }}
      >
        Inncrement
      </button>
      <button
        onClick={() => {
          Counter.counterDispatch('decrement');
        }}
      >
        Inncrement
      </button>
      <button
        onClick={() => {
          Counter.counterDispatch('reset');
        }}
      >
        reset
      </button>
    </div>
  );
}
