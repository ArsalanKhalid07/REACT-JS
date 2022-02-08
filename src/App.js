import './App.css';
import React from 'react';
import Counter from './hooks/Counter';

//USEREDUCER HOOK
//use reducer hook take 2 parameter one:[reducer ] and two:[intail value]
//reducer take 2 parameter  one:[state] and two:[action]

function App() {
  return (
    <div className="App">
      <h2>use reducer hook</h2>
      <Counter />
    </div>
  );
}

export default App;
