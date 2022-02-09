import './App.css';
import React, { useReducer } from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

// useReducer with useContext hook
export const CountContext = React.createContext();
function App() {
  const intial = {
    counter: 0,
  };

  const reducer = (state, action) => {
    switch (action) {
      case 'increment':
        return { counter: state.counter + 1 };
      case 'decrement':
        return { counter: state.counter - 1 };
      case 'reset':
        return intial;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, intial);

  return (
    <CountContext.Provider
      value={{ counterCount: count, counterDispatch: dispatch }}
    >
      {count.counter}
      <div className="App">
        <h2>use reducer hook</h2>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
