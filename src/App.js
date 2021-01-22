import React, { useState, useEffect } from 'react';
import mockFunds from './mocks/funds.json';
import logo from './images/aumni-logo.png';
import './css/App.css';

const App = () => {
  const [funds, setFunds] = useState([]);

  useEffect( () => {
    setFunds(mockFunds)
  }, []);

  return (
    <div className='body'>
      <img src={logo} alt='Aumni Logo' />
      <h1>Aumni Frontend Coding Challenge</h1>
    </div>
  );
}

export default App;
