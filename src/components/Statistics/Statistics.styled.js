import styled from 'styled-components';

export const Container = styled.section`
  width: 500px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  border-radius: 5px;
  padding-top: 20px;
  margin: 100px;
`;

export const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  color: gray;
  font-weight: 700;
  padding-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
  font-size: 16px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 70px;
`;
