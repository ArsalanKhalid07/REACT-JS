import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setcount] = useState(0);
  const [valX, setvalX] = useState(0);
  const [valY, setvalY] = useState(0);
  const logMouse = (e) => {
    setvalX(e.clientX);
    setvalY(e.clientY);
  };

  //NOTED
  // useEffect hook
  // first intial useeffect  as a component didmount
  //add dependency of array as a second argument and add depend dependence when the componet is run . which is work as a component did updated
  //clean up the component  using return function . which work as a componet  will un mount
  //the count in the useeffect array . when count updated then useeffect runs

  useEffect(() => {
    window.addEventListener('mousemove', logMouse);
    console.log(valX, valY);

    return () => {
      window.removeEventListener('mousemove', logMouse);
      console.log('component will unmount');
    };
  }, [count]);

  return (
    <div className="App">
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        {count}
      </button>
      <p>X axis: {valX}</p>

      <p>Y axis: {valY}</p>
    </div>
  );
}

export default App;
