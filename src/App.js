// import React, { useState, useEffect, useRef } from 'react';
import React from 'react';
import { Logo, Body, Wrapper } from './css/AppStyles';
import logo from './images/aumni-logo.png';
import mockFunds from './mocks/funds.json';
import NavigationBar from './components/NavigationBar';


const App = () => {
  const funds = mockFunds;

  return (
    <Wrapper>
      <Body>
        <Logo src={logo} alt='Aumni Logo' />
        <NavigationBar funds={funds} />
      </Body>
    </Wrapper>
  );
}

export default App;

