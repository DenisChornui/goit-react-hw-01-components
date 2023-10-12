import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  padding-top: 70px;
  color: gray;
  margin-left: 100px;
  margin-top: 100px;
`;

export const Description = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

export const Title = styled.p`
  color: black;
  font-size: 25px;
`;
export const Avatar = styled.img`
  width: 150px;
  outline: 1px solid rgb(196, 196, 196);
  border-radius: 50%;
  margin: 0 auto 30px auto;
`;

export const Stats = styled.ul`
  display: flex;
  background-color: rgb(242, 243, 247);
  padding: 0;
`;

export const StatsIteam = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(196, 196, 196);
  padding: 25px;
  width: 33.333%;
`;
export const Quantity = styled.span`
  color: black;
  font-weight: 500;
  font-size: 25px;
`;
