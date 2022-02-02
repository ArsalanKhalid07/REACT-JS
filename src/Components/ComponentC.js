import React from 'react';
import { channelContext, userContext } from '../App';
export default function ComponentC() {
  //fisrt way to use context by consumer
  return (
    <div>
      <channelContext.Consumer>
        {(channel) => {
          return (
            <userContext.Consumer>
              {(user) => {
                return (
                  <div>
                    Component C {user.class} and the channel context{' '}
                    {channel.name}
                  </div>
                );
              }}
            </userContext.Consumer>
          );
        }}
      </channelContext.Consumer>
    </div>
  );
}
