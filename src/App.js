import React, { useState, useEffect } from 'react';
import logo from './images/aumni-logo.png';
import mockFunds from './mocks/funds.json';
import PieMultiple from './components/PieMultiple';
import BarEquity from './components/BarEquity';
import './css/App.css';

const App = () => {
  const [funds, setFunds] = useState([]);

  useEffect( () => {
    setFunds(mockFunds)
  }, []);

  return (
    <div className='body'>
      <img className='logo' src={logo} alt='Aumni Logo' />
      <h1>Aumni Frontend Coding Challenge</h1>
      {funds.map(fund =>
        <div key={fund.id} >
          <PieMultiple fund={fund} />
          <BarEquity fund={fund} />
        </div>
      )}
    </div>
  );
}

export default App;


// #060d41