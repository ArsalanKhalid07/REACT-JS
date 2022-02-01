import './App.css';
import React from 'react';
import ComponentA from './Components/ComponentA';

//USE CONTEXT HOOK
// data pass from parent to nested child through props is cases lacking in application  so thats why use useContext hook.
// props drilling avoiding

// first way to use context
export const userContext = React.createContext();
export const channelContext = React.createContext();

function App() {
  const box = {
    name: 'arsalan',
    class: 'bscs',
  };
  const channel = {
    name: 'channel',
    class: 'accounts',
  };
  return (
    <div className="App">
      <userContext.Provider value={box}>
        <channelContext.Provider value={channel}>
          <ComponentA />
        </channelContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
