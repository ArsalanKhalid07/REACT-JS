import React from 'react';
import { channelContext, userContext } from '../App';
export default function ComponentC() {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return (
            <channelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    Component C {user.class} and the channel context{' '}
                    {channel.name}
                  </div>
                );
              }}
            </channelContext.Consumer>
          );
        }}
      </userContext.Consumer>
    </div>
  );
}
