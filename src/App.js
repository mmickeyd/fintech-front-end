import React, { useState, useEffect } from 'react';
import logo from './images/aumni-logo.png';
import mockFunds from './mocks/funds.json';
import PieMultiple from './components/PieMultiple';
import BarEquity from './components/BarEquity';
import { Logo, Body, Divider, Wrapper, EquityLabel, RoiLabel, FirmGraphs, FirmName } from './css/AppStyles';

const App = () => {
  const [funds, setFunds] = useState([]);

  useEffect( () => {
    setFunds(mockFunds)
  }, []);

  return (
    <Wrapper>
      <Body>
        <Logo src={logo} alt='Aumni Logo' />
        <h1>Aumni Frontend Coding Challenge</h1>
        {funds.map(fund =>
          <FirmGraphs key={fund.id} >
            <FirmName>{fund.name}</FirmName>
            <RoiLabel>Return on Investment</RoiLabel>
            <PieMultiple fund={fund} />
            <Divider/>
            <EquityLabel>Equity</EquityLabel>
            <BarEquity fund={fund} />
          </FirmGraphs>
        )}
      </Body>
    </Wrapper>
  );
}

export default App;
