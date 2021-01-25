import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #060d41;
`;

export const Body = styled.div`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  width: 94%;
  margin-left: 3%;
  padding: 20px 0;
`;

export const Logo = styled.img`
  width: 30%;
  background-color: #ffffff;
  padding: 1vw 4.4vw 1vw 2.9vw;
  border-radius: 5vw;
  box-shadow: 0 0 2px 6px black;
  margin-bottom: 2vw;

`;

export const Header = styled.h1`
  font-size: 30px;
`

export const FirmGraphs = styled.div`
  background-color: white;
  padding: 30px 0;
  border-radius: 50px;
  text-align: left;
  margin-bottom: 3vw;
  box-shadow: 0 0 2px 8px black;
`;

export const FirmName = styled.span`
  float: left;
  font-size: 3vw;
  margin: 15px 0 0 50px;
  background-color: #060d41;
  padding: 4px 16px;
  border-radius: 5px;
  font-weight: 600;
  box-shadow: 0px 0px 0px 4px #060d41;
  border-style: dashed;
  color: white;
  cursor: pointer;
`;

export const RoiLabel = styled.span`
  float: right;
  font-size: 2vw;
  border-bottom: solid;
  border-left: solid;
  color: #060d41;
  border-radius: 0;
  padding: 3vw;
  margin: -30px 0 0;
  background-color: #cccccc;
  border-top-right-radius: 50px;
  cursor: default;
`;

export const EquityLabel = styled.span`
  float: right;
  font-size: 2vw;
  border-radius: 5px;
  border-radius: 0;
  color: #060d41;
  border: solid;
  margin: 2vw -3px 0;
  padding: 2vw 6vw;
  cursor: default;
  background-color: #cccccc;
`;

export const Divider = styled.div`
  height: 40px;
  background: linear-gradient(
    135deg
    , #ffffff 25%, #90000000 25%) -20px 0, linear-gradient(
    225deg
    , #ffffff 25%, transparent 25%) -20px 0, linear-gradient(
    315deg
    , #ffffff 25%, transparent 25%), linear-gradient(
    45deg
    , #ffffff 25%, transparent 25%);
  background-size: 40px 40px;
  background-color: #cccccc;
`;


