import React from 'react';

function Title({ title, renderAge }) {
  return (
    <div>
      <h2>
        {console.log('title is runnning', title)}
        {title} --- {renderAge}
      </h2>
    </div>
  );
}

export default React.memo(Title);
