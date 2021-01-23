import styled from 'styled-components';

export const PieGraphs = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;

export const PieKeys = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 1.2vw;
  font-size: 1.8vw;
  align-items: center;
  grid-column: 1 / 2;
`;

export const PieSection = styled.section`
  width: 22vw;
`;

export const CompanyName = styled.h2`
  font-size: 1.9vw;
  margin-bottom: 0;
`;

export const CompanyFunds = styled.div`
  display: flex;
  grid-column: 2/3;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;
`;

export const VectorRect = styled.svg`
  width: 1vw;
  height: 1vw;
  stroke-width: 2px;
  stroke: white;
`;

export const BlueRect = styled.rect`
  width: 1vw;
  height: 1vw;
  fill: #0088fe;
`;

export const RedRect = styled.rect`
  width: 1vw;
  height: 1vw;
  fill: #d20000;
`;

export const Key = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
`;

export const ROISection = styled.div`
  margin-top: -21.8vw;
  margin-bottom: 21vw;
  font-size: 1.6vw;
`;

export const ROI = styled.span`
  background-color: #d20000;
  padding: 3px 5px;
  border-radius: 10px;
  color: white;
  visibility: collapse;
`;

export const Label = styled.text`
  fill: white;
  font-size: 1.1vw;
`