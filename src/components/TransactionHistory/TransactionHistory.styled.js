import styled from 'styled-components';

export const Container = styled.table`
  width: 800px;
  margin-left: 100px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  border-radius: 4px;
`;

export const TitleInfo = styled.thead`
  height: 50px;
  background-color: $rgb(131, 144, 218);
  color: white;
`;

export const TransactionTitle = styled.tr``;

export const TransactionItem = styled.tbody`
  text-align: center;
  color: rgb(86, 86, 86);
`;

export const TransactionList = styled.tr`
  height: 50px;
  row:nth-child(even) {
    background-color: rgb(226, 226, 226);
  }
  row:nth-child(odd) {
    background-color: rgb(244, 244, 244);
  }
`;

export const Type = styled.td`
type::first-letter {
    text-transform: uppercase;
}
`
