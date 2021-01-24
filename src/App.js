import React, { useState, useEffect } from 'react';
import logo from './images/aumni-logo.png';
import mockFunds from './mocks/funds.json';
import PieMultiple from './components/PieMultiple';
import BarEquity from './components/BarEquity';
import { Logo, Body, Divider, Wrapper, EquityLabel, RoiLabel, FirmGraphs, FirmName, NavButton, HomeNavButton, NavigationBar, Firm, FirstNavButton } from './css/AppStyles';

const App = () => {
  const [funds, setFunds] = useState([]);

  useEffect( () => {
    setFunds(mockFunds)
  }, []);

  return (
    <Wrapper>
      <Body>
        <Logo src={logo} alt='Aumni Logo' />
        <NavigationBar>
          <FirstNavButton><Firm href="avyoats.com">Hane and Sons Ventures</Firm></FirstNavButton>
          <NavButton><Firm href="avyoats.com">Windler Group</Firm></NavButton>
          <HomeNavButton><Firm href="avyoats.com">Home</Firm></HomeNavButton>
          <NavButton><Firm href="avyoats.com">Olson Ventures</Firm></NavButton>
          <NavButton><Firm href="avyoats.com">Sequoia Capital</Firm></NavButton>
        </NavigationBar>
        <h1>Aumni Frontend Coding Challenge</h1>
        {funds.map(fund =>
          <FirmGraphs key={fund.id} >
            <FirmName>{fund.name}</FirmName>
            <RoiLabel>Return on Investment</RoiLabel>
            <PieMultiple fund={fund} />
            <Divider/>
            <EquityLabel>Equity (%)</EquityLabel>
            <BarEquity fund={fund} />
          </FirmGraphs>
        )}
      </Body>
    </Wrapper>
  );
}


export default App;
