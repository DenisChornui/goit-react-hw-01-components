import React from 'react';
import { Container, TransactionTitle, TitleInfo, TransactionItem, TransactionList, Type } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <TitleInfo>
        <tr>
          <TransactionTitle>Type</TransactionTitle>
          <TransactionTitle>Amount</TransactionTitle>
          <TransactionTitle>Currency</TransactionTitle>
        </tr>
      </TitleInfo>

      <TransactionItem>
        {items.map(item => (
          <TransactionList key={item.id}>
            <Type>{item.type}</Type>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </TransactionList>
        ))}
      </TransactionItem>
    </Container>
  );
};
