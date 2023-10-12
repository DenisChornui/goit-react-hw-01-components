import styled from 'styled-components';

export const Container = styled.table`
  width: 800px;
  margin-left: 100px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  border-radius: 4px;
`;

export const TitleInfo = styled.thead`
  height: 60px;
  background-color: rgb(131, 144, 218);
  color: white;
  padding: 15px;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
`;

export const TransactionTitle = styled.th`
  background-color: rgb(85 222 214 / 73%);
  padding: 10px;
  font-size: 18px;
  border-radius: 3px;
  font-size: 20px;
`;

export const TransactionItem = styled.tbody`
  text-align: center;
  color: rgb(86, 86, 86);
`;

export const TransactionList = styled.tr`
  height: 60px;
  &:nth-child(even) {
    background-color: rgba(171, 166, 166, 0.5);
  }
`;

export const Type = styled.td`
  padding: 10px;
  font-size: 15px;
  border: 1px solid rgb(85 222 214 / 73%);
  border-radius: 3px;
  font-size: 16px;
`;
