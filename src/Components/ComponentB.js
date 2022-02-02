import React from 'react';
import ComponentC from './ComponentC';
import { userContext, channelContext } from '../App';
export default function ComponentB() {
  //second way to use context using useContext hook
  const user = React.useContext(userContext);
  const channel = React.useContext(channelContext);
  return (
    <div>
      {user.name} --- {channel.name}
      <ComponentC />
    </div>
  );
}
