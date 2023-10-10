import React from 'react';
import {
  FriendAvatar,
  FriendItem,
  FriendStatus,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendStatus 
      status={isOnline}
      // style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
        </FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="100" />
      <p>{name}</p>
    </FriendItem>
  );
};
