import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //use state hook
  //first value is intial value and second value is setter value
  const [count, setcount] = useState(0);
  return (
    <div className="App">
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
}

export default App;
