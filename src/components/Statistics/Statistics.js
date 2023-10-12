import React from 'react';
import { getRandomColor } from './random-color';
import { Container, Item, List, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(statsItem => (
          <Item
            key={statsItem.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span>{statsItem.label}</span>
            <span>{statsItem.percentage}%</span>
          </Item>
        ))}
      </List>
    </Container>
  );
};
