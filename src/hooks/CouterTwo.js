import React, { useReducer } from 'react';
//use reducer video 2
// usereducer complex action and state
//covernt to object  to get the type and value
//action has two set one type and other value

const intailState = {
  firstCounter: 0,
  secondCounter: 2,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - 1 };
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'reset':
      return intailState;
    default:
      return state;
  }
};

export default function CounterTwo() {
  const [cout, dispatch] = useReducer(reducer, intailState);
  return (
    <div>
      <p>{cout.firstCounter}</p>
      <p>{cout.secondCounter}</p>

      <button
        onClick={() => {
          dispatch({ type: 'increment', value: 1 });
        }}
      >
        increment
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'increment2', value: 2 });
        }}
      >
        increment2
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'decrement2', value: 2 });
        }}
      >
        decrement2
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'decrement2', value: 2 });
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'reset' });
        }}
      >
        reset
      </button>
    </div>
  );
}
