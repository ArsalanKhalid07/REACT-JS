import React, { useState, useCallback } from 'react';
import Count from './Count';
import Title from './Title';

// useCallBack hook used to memories the function and optimaize the performance of the app

export default function Parent() {
  const [age, setAge] = useState(24);
  const [salery, setSalery] = useState(5000);

  const ageFun = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const saleryFun = useCallback(() => {
    setSalery(salery + 1000);
  }, [salery]);

  return (
    <div>
      <h2>use Callback hook</h2>
      <Title title="AGE" renderAge={age} />
      <Count functionCount={ageFun} />
      <Title title="SALERY" renderAge={salery} />
      <Count functionCount={saleryFun} />
    </div>
  );
}
