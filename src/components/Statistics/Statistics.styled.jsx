import styled from '@emotion/styled';

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const StatBox = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 20px;
  font-weight: 700;
`;

export const Item = styled.span`
  width: 70px;
  font-weight: 700;
  font-size: 30px;
  line-height: 2, 5;
  text-align: center;
`;

export const TotalText = styled.p`
  margin: 10px 0 10px 20px;
  font-size: 20px;
  color: #212121;
`;

export const TotalVal = styled.span`
  color: black;
`;
