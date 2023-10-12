import React from 'react';
import {
  Avatar,
  Container,
  Description,
  Quantity,
  Stats,
  StatsIteam,
  Title,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Title>{username}</Title>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <Stats>
        <StatsIteam>
          <span>Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </StatsIteam>
        <StatsIteam>
          <span>Views</span>
          <Quantity>{stats.views}</Quantity>
        </StatsIteam>
        <StatsIteam>
          <span>Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </StatsIteam>
      </Stats>
    </Container>
  );
};
