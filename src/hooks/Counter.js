import React, { useReducer } from 'react';
const intailState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return intailState;
    default:
      return state;
  }
};

export default function Counter() {
  const [cout, dispatch] = useReducer(reducer, intailState);
  return (
    <div>
      {cout}
      <button
        onClick={() => {
          dispatch('increment');
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch('decrement');
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch('reset');
        }}
      >
        reset
      </button>
    </div>
  );
}
