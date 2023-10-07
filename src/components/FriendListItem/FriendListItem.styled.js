import styled from 'styled-components';

export const FriendItem = styled.li`
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  column-gap: 20px;
  font-size: 30px;
  font-weight: 600;
  padding: 20px;
`;

export const FriendAvatar = styled.img`
outline: .1px solid rgb(196, 196, 196);
border-radius: 5px;
`

export const FriendStatus = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props}
`
