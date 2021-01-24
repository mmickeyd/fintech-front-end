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
  box-shadow: 0 0 3px 6px white;
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

export const Firm = styled.a`
  text-decoration: none;
  color: #060d41;
  font-weight: 600;
`;

export const NavigationBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  margin-top: 30px;
  background-color: white;
  border-style: solid;
  border-width: 4px;
  border-color: #b9b9b9;
  box-shadow: 0 0 2px 6px black;
`;

export const NavButton = styled.button`
  width: 100%;
  height: 3vw;
  font-size: 1.2vw;
  background-color: white;
  outline: none;
  border: none;
  cursor: pointer;
  border-left-style: solid;
  border-color: #b9b9b9;
  :hover {
    background-color: #060d41;
    -webkit-transition: background-color .3s linear;
    -ms-transition: background-color .3s linear;
    transition: background-color .3s linear;
  }
  :hover ${Firm} {
    color: white;
    -webkit-transition: color .3s linear;
    -ms-transition: color .3s linear;
    transition: color .3s linear;
  }
`;

export const HomeNavButton = styled(NavButton)`
  font-size: 2vw;
`;

export const FirstNavButton = styled(NavButton)`
border-left-style: none;
`;
