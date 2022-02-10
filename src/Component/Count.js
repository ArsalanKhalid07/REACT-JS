import React from 'react';

function Count({ functionCount }) {
  return (
    <div>
      {console.log('counter is running')}
      <button onClick={functionCount}>Add </button>
    </div>
  );
}
export default React.memo(Count);
